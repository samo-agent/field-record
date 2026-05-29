# Field Record — SPEC v0.3

> Status: lead revision (v0.3) after the v0.2 security/ops-weighted review round (two independent reviewers: a paranoid security/ops pass and a correctness/workflow pass). All fourteen findings this round were accepted and applied. Persona: Veteran Agricultural Software Engineer.

---

## 1. Goal & why it's needed

**Goal.** Ship a production farm operations record-keeping system whose field-entry screens stay simple and fast on a phone, while the backend quietly builds a complete, auditable, multi-year database for regulatory compliance, crop history, field reports, dashboards, and office review. The headline target: an operator saves a complete spray or fertilizer record in **under 60 seconds** on a phone, even with no cell signal.

**Why this exists.** Farms today record sprays, fertilizer, fuel, harvest loads, irrigation, and inbound/outbound tickets on paper, in trucks, at pivots — places with bad or no service. Paper records are slow to enter, easy to lose, and nearly impossible to audit years later when a restricted-use-pesticide (RUP) compliance question or a crop-history dispute arises. Existing software fails the opposite way: it demands so much data up front that operators stop using it in the field. Field Record exists to resolve that exact tension — **fast field entry that operators actually use, backed by a record complete enough to satisfy a regulator, an auditor, or an insurance adjuster a decade later.** A click-through prototype (`index.html` / `styles.css` / `app.js`, all mock in-memory state) and `BACKEND_HANDOFF.md` already prove the flow feels right; this spec defines the production system that replaces the mock state with real auth, storage, offline sync, and an auditable Postgres backend without losing that feel.

**Non-negotiable constraints (product owner).**
- **Self-hosted Supabase** (Postgres DB, Supabase Auth, Storage, Row-Level Security).
- **TypeScript end to end** (frontend + any edge/server code).
- **Mobile-first PWA**, installable ("Add to Home Screen"), full-screen, works on iPhone and Android.
- **Email + password auth only.** No SSO, magic links, or OAuth providers in scope.
- **~10 users** for the first farm, but **multi-tenant-ready** (organization-scoped) from day one.
- An **admin console** for users, fields, equipment, lists, and settings.
- **Offline-first** is a core requirement, not a polish item.
- Soft-archive everything important; **never hard-delete** people, fields, equipment, or list items.
- Because the value proposition is a defensible multi-year record, **audit immutability (§13.1) and server-side durability/DR (§14) are first-class requirements**, not afterthoughts.

---

## 2. v0.1 scope decisions (interview resolutions)

These five product questions were delegated to the lead. Each resolution is recorded here and mirrored in §15 Changelog and the decisions log.

**2.1 Module scope (`v01-module-scope`).** v0.1 ships the **foundation** (auth/users/permissions/organizations; admin lists for fields, crop seasons, equipment, users; the universal `field_records` parent + attachments + audit events; office review + edit lock) **plus two flagship field-entry modules: Spray/RUP and Fertilizer.** Rationale: they share one flow, carry the highest compliance value (RUP), and are the exact records named in the sub-60-second target — so they are the truest test of the core thesis. The remaining six modules (Tillage, Scouting, Harvest, Irrigation, Fuel, Loads) are **fast-follow**, sequenced in §8 after the pilot validates the field-entry feel. The shared parent table and detail-table pattern are built so each fast-follow module is additive, not a rewrite.

**2.2 Offline depth (`offline-depth-v01`).** v0.1 ships the **full offline write path** for in-scope modules: local IndexedDB write, immediate temporary local ID, save that never blocks on the network, queued attachment upload with retry, background sync, and server-side conflict resolution per the conflict rules. Rationale: offline is the reason the product exists in the field; it cannot be bolted on after the data model and sync envelope are frozen. The only deliberately-thin piece in v0.1 is the **conflict-review UI**, which surfaces conflicts inside the existing office-review queue rather than as a separate console. On-device data is scoped, lifetime-bounded, and wiped on logout/expiry/revocation per §13.6.

**2.3 OCR scope (`ocr-in-v01`).** v0.1 ships **manual entry as the source of truth**, with **attachment (photo) capture fully working** (label photos, proof photos, scale/ticket photos stored as first-class records) and the **OCR data contract in place** (`ocr_jobs`, `ocr_results`, raw-OCR-always-stored fields, verified-vs-raw split). The **live OCR extraction and EPA PPLS label lookup are deferred** to a fast-follow. Rationale: the idea is explicit that OCR/label lookup is *draft assistance, never final truth*; shipping the storage contract now (so no record migration is needed later) while deferring the extraction service keeps v0.1 focused on the field-entry feel. Photos captured in v0.1 become OCR-eligible retroactively once the extractor lands.

**2.4 Primary success metric (`v01-success-metric`).** v0.1 is working for the first farm when, during the pilot window, the success metric — measured from **real pilot data**, not from a single automated run (see §6.4 for the sampling/gating definition) — holds: (a) the **median time to save a complete Spray or Fertilizer record on a phone is < 60 seconds**, and (b) **≥ 90% of *participating dual-entry operators'* spray/fertilizer applications are recorded in Field Record** (not paper/legacy) during the window, each with a complete auditable record — field, crop year, product(s) with rate/amount, weather snapshot, operator, and audit trail (completeness defined in §5.1.1). Because the dual-entry sample is 1–2 operators under a mandated dual-entry regime, the ≥90% gate is stated **per participating operator**; **sustained farm-wide adoption is confirmed separately by a post-cutover adoption check** (§2.5 step 4, §6.4) once paper is dropped. Speed alone is meaningless if operators don't adopt; adoption alone is meaningless if entry is slow — both must hold.

**2.5 Pilot rollout shape (`pilot-rollout-shape`).** Phased, validate-before-commit:
1. **Admin setup** — owner/admin loads real fields, crop seasons, equipment, and users.
2. **Shadow/dual-entry** — 1–2 operators run Spray/Fertilizer in Field Record *alongside* their existing method for ~2 weeks, deliberately including no-signal locations, to validate field-entry feel and offline sync. This window is the source of the §2.4 / §6.4 participating-operator pilot metrics.
3. **Office-review validation** — office role reviews, corrects, and locks real records; confirms the audit trail and weather snapshots are complete and stable.
4. **Expand** — once the participating-operator §2.4 metric holds against the §6.4 gate **and** the DR restore drill (§14.5) has passed, drop dual entry, onboard all operators, and run a **post-cutover adoption check** (§6.4) confirming farm-wide capture sustains without the dual-entry mandate; then turn on fast-follow modules sprint by sprint.

---

## 3. User stories

At least three; used for manual/AI test scenarios. Each is persona → action → outcome.

1. **Operator, fast spray entry offline.** As an *operator standing at a pivot with no signal*, I open Field Record from my home screen, pick the field, set pass pattern/heading, add a tank-mix product with its rate, confirm the weather reading (auto-filled if I have signal, or hand-entered / left for automatic back-fill if I don't — see §5.5), capture a label photo, and tap Save — and the record is saved locally with a "draft / will sync" indicator in under 60 seconds, syncing automatically when I regain signal, **so that** I never lose a record and never wait on the network in the field. The weather snapshot is finalized on sync (§5.5); no network call is required to complete the save.
2. **Office reviewer, lock with audit.** As an *office reviewer*, I open the review queue, see a submitted spray record with its weather snapshot and products, correct a mistyped rate, approve, and lock it — and the original value, my correction, and a timestamped, tamper-evident audit event (§13.1) are all preserved, **so that** the record is defensible to a regulator and the operator can no longer silently change it.
3. **Owner/Admin, manage access and fields.** As an *owner/admin*, I invite a seasonal employee with operator-only module access and an access-expiration date, add a new field with a crop season, and review a pending GPS boundary draft an operator captured — **so that** the right people can record the right things, field history is anchored to real boundaries, and access expires automatically (enforced live, §13.3) without a hard delete.
4. **Scout, REI safety (fast-follow module, foundation in v0.1).** As a *scout*, I open a field's history and immediately see an REI (re-entry interval) warning derived from the most recent spray's **entered** REI value, **so that** I don't send anyone into a treated field too early. *(Scouting entry ships in fast-follow; the REI-from-spray data path is established in v0.1, sourced from manually-entered / admin-list REI values per §5.9.)*
5. **Owner/Admin, dropdown "Other" without blocking entry.** As an *operator*, when the product/equipment list is missing what I need, I choose "Other", type the value, and finish my record immediately; as *admin*, I later resolve that one-off into the permanent list or keep it one-off — **so that** field entry is never blocked and the dropdowns stay clean.

---

## 4. Architecture

<!-- architecture:begin -->

```text
  ┌───────────────────────────────────┐
  │ Field operator (phone) (external) │
  └───────────────────────────────────┘
  ┌─────────────────────────────────────────────┐
  │ PWA client (React + TypeScript) (component) │
  └─────────────────────────────────────────────┘
  ┌────────────────────────────────────────────────┐
  │ On-device store (IndexedDB outbox) (datastore) │
  └────────────────────────────────────────────────┘
  ┌──────────────────────────────────────────────┐
  │ Supabase Auth (email + password) (component) │
  └──────────────────────────────────────────────┘
  ┌──────────────────────────────────────────────┐
  │ PostgREST + SECURITY DEFINER RPC (component) │
  └──────────────────────────────────────────────┘
  ┌──────────────────────────────────────────────────────────────────────────┐
  │ Edge Functions (TS): sync resolver, weather, bootstrap, OCR* (component) │
  └──────────────────────────────────────────────────────────────────────────┘
  ┌──────────────────────────────────────────────────────────┐
  │ Postgres — RLS trust boundary, tenant-scoped (datastore) │
  └──────────────────────────────────────────────────────────┘
  ┌────────────────────────────────────────────┐
  │ Supabase Storage (attachments) (datastore) │
  └────────────────────────────────────────────┘
  ┌────────────────────────┐
  │ Weather API (external) │
  └────────────────────────┘
  ┌──────────────────────────────────────────────────┐
  │ EPA PPLS / label source (fast-follow) (external) │
  └──────────────────────────────────────────────────┘

edges:
- operator → pwa [field entry]
- pwa ⇢ idb [offline save]
- pwa → auth [login]
- pwa → api [supabase-js / HTTPS]
- pwa → edge [sync outbox]
- pwa ⇢ storage [presigned upload]
- auth ⇒ pg [JWT claims -> RLS]
- api ⇢ pg [RLS-enforced r/w]
- edge ⇢ pg [resolver / back-fill]
- edge → weather [snapshot]
- edge → ppls [label lookup*]

notes:
- Self-hosted Supabase comprises: Supabase Auth, PostgREST + RPC, Edge Function…
- RLS in Postgres is the authorization trust boundary; the client is never trus…
- OCR + EPA PPLS label lookup are fast-follow, not v0.1 (marked *).
- server_seq / updated_at are the authoritative sync-ordering signals (see SS 5…
```

<!-- architecture:end -->

**Shape:** a single TypeScript PWA talking to self-hosted Supabase, with all multi-tenant and role/permission enforcement pushed into Postgres Row-Level Security (RLS) so the security boundary is the database, not the client.

**Components & boundaries.**
- **Client (PWA).** Renders the prototype's screen flows; owns the offline store and the optimistic UI. The client is **never trusted for authorization** — it shows/hides UI by cached permissions for UX only. Local data is user/tenant-scoped and wiped on logout/expiry/revocation (§13.6).
- **Auth.** Supabase Auth, email+password. JWT carries `sub` (user) and is mapped to `organization_id`, role, and module permissions via a `user_claims`/JWT-hook so RLS policies can read them — but **security-critical checks (active status, access-expiration, current permissions) are re-evaluated against live DB state**, not trusted from the cached claim (§13.3).
- **Database (trust boundary).** Every tenant-scoped table carries `organization_id`; RLS policies enforce tenant isolation **and** role/per-module permissions. Write-side invariants (status transitions, edit-window lock, weight/inches calculations stored alongside overrides) are enforced by Postgres constraints + `SECURITY DEFINER` RPCs. **RPCs are part of the trust boundary and re-enforce authorization internally (§13.2)** — they do not assume RLS protects them. `audit_events` is append-only at the privilege level (§13.1).
- **Storage.** Attachments uploaded directly (presigned) and linked to a record; storage RLS mirrors table RLS; buckets are backed up off-host (§14.4).
- **Edge Functions (TS).** Stateless server logic that must not run on the client: weather-snapshot capture and back-fill (so the stored snapshot is server-time-stamped and stable), bootstrap payload assembly, the sync change-feed/conflict resolver (the authority for ordering, §5.3), and (fast-follow) the OCR + label-lookup pipeline. Edge functions hold the `service_role`/API keys and restrict ingress (§13.5).

**Key abstractions.**
- **Universal record (`field_records`) + typed detail table.** One parent carries `record_type`, `field_id`, `crop_year`, `operator_user_id`, `status`, audit and sync columns; one detail row per type holds the type-specific fields. Cross-cutting behavior (review, lock, audit, sync, reporting joins) is written once against the parent.
- **Sync envelope.** Every record has a client-generated `offline_draft_id` (UUID) **bound server-side to (org, owner)**, a `source_device_id`, a client-stamped `client_action_at` (advisory only), and a server-assigned monotonic `server_seq` + `updated_at` that are the **authoritative** ordering signals (§5.3). The outbox replays drafts idempotently keyed by `offline_draft_id` within its owning (org, owner).
- **Calculated-vs-override pair.** Wherever an operator can override a derived value, the schema stores both the calculated value and the manual override, plus which one wins.
- **Raw-vs-verified pair.** Wherever OCR assists, the schema stores raw OCR output and the verified value independently; verified never overwrites raw.
- **Snapshot-not-pointer.** Weather (and label data at verify time) is copied into the record so multi-year reports never change underneath a saved record.

---

## 5. Implementation details (data flow, state transitions, algorithms)

**5.1 Record lifecycle (status state machine).**
```
draft --submit--> submitted --(server commit)--> needs_review
  needs_review --approve--> approved --lock--> locked
  needs_review --send_back--> sent_back --(operator edits within reopened window)--> submitted
  approved/locked --amend(admin/office)--> amended --(re-lock)--> locked
  amended --(optional, per review rules)--> needs_review --> ... --> locked
  (any) --stale-draft-vs-locked, two-edit collision, or review-authority guard--> conflict (routed to review)
```
- **`submitted_at` stamping (offline drafts).** In v0.1 the field-entry "Save" action both persists and **submits** the record (status → `submitted`) once it holds a **syncable minimum** (§5.1.1), because the prototype's fast feel is one-tap save. `submitted_at` is anchored on the operator's local submit-action time, carried with the draft and **adopted as canonical by the server on first sync**. A record the operator deliberately keeps as an incomplete `draft` (not submitted) remains editable by its owner **indefinitely** and never auto-locks; such drafts are excluded from office review and from the §2.4 metric until submitted, and surface in the operator's own "unsubmitted" list once older than a configurable staleness threshold.
- **Edit window.** Once submitted, operators may edit *their own* records while `now < submitted_at + edit_window` (default 48h, configurable in Settings) **and** status is not `locked`. Enforced by an RPC + RLS, never client-only.
- **Send-back reopens the edit window (deadlock fix).** Office review can take longer than the 48h edit window, so a `send_back` would otherwise hit a record the operator can no longer edit — a deadlock. On `send_back` the server stamps a fresh `sent_back_at`, and the operator may edit their own `sent_back` record while `now < sent_back_at + edit_window`, **independent of the original `submitted_at` window**, until they re-submit (→ `submitted` → server commit → `needs_review`) or it is locked. The reopened window is itself bounded by `edit_window` so a sent-back record cannot stay open forever.
- **Lock.** After the window (or explicit office lock), only Admin/Office may unlock or amend. **Amendments never erase original values** — they write a new audit event with `old_value_json`/`new_value_json` into the append-only audit log (§13.1).
- **`amended` is not terminal.** An `amend` (admin/office only) writes the corrected values as live, retains originals in audit, and by default returns the record to `locked`. Successive amendments **stack** — each writes its own audit event and may be applied again to a `locked` record. When Settings `review rules` require it, an amendment instead routes back through `needs_review` for office re-approval before re-locking. Transitions out of `amended`: `amended → locked` (default) or `amended → needs_review → … → locked`.
- **`submitted → needs_review` trigger.** Automatic and server-side: when the server **commits** a `submitted` record (on direct save online, or on sync replay of an offline draft), it enters the office review queue as `needs_review`. This is a server event, not a client action.

**5.1.1 Syncable minimum vs complete record (Spray/Fertilizer).** A record is **submittable/syncable** when it holds its mandatory set; it is **complete** (counts toward the §2.4 metric) when the mandatory set plus resolved weather and any RUP requirements are present.
- **Spray — mandatory (syncable minimum):** `field_id`, `crop_year`, `operator` (auto), application date/time (defaults to submit time), and **≥ 1 tank-mix product each with a rate or amount**.
- **Spray — complete additionally requires:** a resolved weather snapshot (live/manual/back-filled, never silently blank, §5.5); and when the RUP flag is set, EPA registration number and REI/PHI present-or-explicitly-unknown plus RUP supervisor/license when applicable.
- **Fertilizer — mandatory:** `field_id`, `crop_year`, `operator`, application date/time, and **≥ 1 nutrient product with a rate + rate-unit** (lb/ac or gal/ac).
- **Fertilizer — complete additionally requires:** a resolved weather snapshot.
- A record missing any mandatory field stays `draft` (cannot submit). "Complete" is what the §2.4 percent-captured / completeness gate measures; weather may resolve asynchronously via back-fill without blocking the sub-60-second save.

**5.2 Offline save & sync (client).**
1. On Save, write the record to IndexedDB with a fresh `offline_draft_id`, `client_action_at`, status `submitted` (or `draft` if below the §5.1.1 minimum / explicitly incomplete), sync state `local-only`; return to the UI immediately (no network wait). Local data is scoped to the authenticated user+tenant and subject to wipe-on-logout/expiry (§13.6).
2. Queue any attachments in an upload queue (retry with backoff).
3. Sync engine, when online, POSTs drafts via an idempotent RPC keyed on `offline_draft_id`. **The server treats `offline_draft_id` as unique per `(organization_id, owner_user_id)`** and matches the target row on `(org, owner, offline_draft_id)` — the upsert key alone never decides which row is written. A replay whose owner/org differs from the original insert is **rejected** (hard error), so a reused or colliding `draft_id` can never overwrite another operator's or another tenant's row, nor replay a draft into a different org. Server upserts within the owning scope, assigns `server_seq`/`updated_at`, and returns the canonical row + cursor.
4. Delta pull: `GET changes since <cursor>` refreshes the local cache.
5. **Sync state** (an axis distinct from record status, §5.1) surfaced on every record: **`local-only` → `syncing` → `synced` → `sync_failed` → `conflict`.** (`conflict` maps to a record the server routed to conflict review; it replaces the previously-overloaded `needs_review` sync label so review-state and sync-state are never conflated.)

**5.3 Conflict resolution (server — authoritative ordering + review-authority guard).**
- **"Latest" is defined by the server, never the device clock.** The winning edit is the one the server **commits last**, ordered by the server-assigned monotonic `server_seq` (equivalently, server `updated_at` at commit). Device wall-clock (`client_action_at`) is stored as advisory metadata only and is **never** used to decide a winner — this prevents a long-disconnected device's stale clock from overwriting a newer in-office edit.
- **Two edits before any office action** (both targeting an unlocked record still in `needs_review`, not yet approved/corrected/locked) → **keep the server-latest commit as the live value, log both**; every superseded version is retained as an audit event.
- **Review-authority guard (role-blind-LWW fix).** Once a record has been **office-approved, office-corrected, or locked**, a later-arriving conflicting operator draft (an older edit of the same row) does **not** silently win on `server_seq`. It is routed to **`conflict`** for an office decision rather than superseding the reviewer's value. Server-latest-wins therefore applies *only* among edits to a record the office has not yet touched. This stops a long-offline operator's stale edit from silently overwriting a reviewer's correction.
- **A stale offline draft targeting a `locked` record** → **never overwrite**; route to **conflict** (status `conflict`, surfaced in the office-review queue in v0.1). The locked value is authoritative until office acts.
- **Every edit creates an audit event**, online or replayed, into the append-only log (§13.1).

**5.4 Domain calculations (stored alongside manual overrides).** *(Spray/Fertilizer carry no net-weight/inches math; the calculations below belong to fast-follow modules and are specified here for completeness — they are built and tested test-first in their own fast-follow sprints, not in the v0.1 core, per §6.1.)*
- Harvest: `net_weight = loaded_weight − empty_weight`.
- Loads: `net_weight = gross_weight − tare_weight`; manual net/units override the calculated values. Units: lb; ton = 2000 lb; CWT = 100 lb; BU = commodity bushel weight; each/bale/load = manual count. Bushel weights: Wheat 60, Barley 48, Canola 50, Triticale 56, Rye 56 lb/BU.
- **Irrigation (source of truth + zero-guard).** The operator's **primary input is `speed_percent`** (the pivot's set speed), with `direction` (Forward/Reverse/Stationary-parked/Dry-run). `inches_applied` is then **derived**: `inches_applied = base_inches_at_100 / (speed_percent / 100)`. The operator **may instead enter `inches_applied` directly as an override**, in which case `speed_percent` is back-computed: `speed_percent = (base_inches_at_100 / inches_applied) * 100` — but this inverse is computed **only when `inches_applied > 0`**; if `inches_applied` is `0` or blank, `speed_percent` is left null (no division). **Dry run** and **Stationary/parked** force `inches_applied = 0` and `speed_percent` is recorded as null (or the parked set-point, non-derived). Which value was operator-entered vs derived is stored explicitly. Rain water adds to total water but stays distinguishable from irrigation water.
- Fuel: `remaining_after = max(0, remaining_before − gallons)`; warnings (non-blocking) for blank gallons, blank hours/odometer, blank acres on field work, blank miles on hauling.

**5.5 Weather snapshot (Spray/Fertilizer, v0.1) — online & offline.** The full snapshot (temp, wind speed/direction, humidity, source, fetched-at) is **copied into the record** (snapshot-not-pointer). Acquisition has two paths, neither of which blocks the save:
- **Online at entry:** an edge function fetches current weather for the field's location/time and inlines the snapshot immediately, with `weather_source = live-fetch`.
- **Offline at entry:** the save completes with `weather_state = pending` (and any manual reading the operator chooses to type in, flagged `weather_source = manual`). On sync, the weather edge function **back-fills** the snapshot for the record's stored **field location and the operator's submit timestamp** using a provider that supports recent/historical observations, sets `weather_source = back-fill`, and stamps it server-side. If back-fill is unavailable for that time/location, the record retains the manual reading (or remains explicitly `weather_unavailable`, never silently blank). This resolves story 1: an offline operator either hand-enters a reading or relies on automatic post-sync back-fill — the sub-60-second save never waits on a network weather call.

**5.6 Dropdown "Other" workflow.** Choosing "Other" prompts for a typed value, uses it on the current record, and files a `dropdown_other_request`; admin later adds it to the permanent list or keeps it one-off. Never blocks entry.

**5.7 GPS field-boundary drafts.** Operators may capture a boundary *draft* on the phone for admin review/approval. **Field-entry screens never modify permanent boundaries** — boundaries are Admin-only; records store the boundary *version* they were entered against.

**5.8 OCR data contract (fast-follow extraction).** OCR jobs always store raw text + confidence + extracted fields + match candidates, and **raw OCR is retained even after the user edits the final value.** In v0.1 the tables/columns exist and photos are stored; the extractor and EPA PPLS lookup are deferred (§2.3).

**5.9 REI/PHI values in v0.1 (manual source).** Because EPA PPLS label lookup is deferred (§2.3/§5.8), in v0.1 REI and PHI values on a spray record are **manually entered by the operator** or **defaulted from an admin-maintained product list entry** (admins may pre-load common products with their REI/PHI). The REI warning (§3 story 4, §12) is computed **only from records carrying an entered/admin-sourced REI** and is clearly labeled "based on entered REI" so a missing value reads as "unknown," never as "safe." The label-lookup fast-follow later auto-populates these without a data migration (verified-vs-raw split already in place).

---

## 6. Tests plan (CI + Red/Green TDD)

**Methodology.** All new code follows Red/Green/Refactor: write a failing test that states the behavior, write the minimum to pass, then refactor green.

**6.1 Built test-first (RED first, non-negotiable) — the v0.1 correctness core:**
- **RLS / authorization policies.** Tests that assert cross-tenant reads/writes are impossible and that each role + module permission can do exactly what it should and nothing more. (Highest risk; written before any policy.) See §6.2 for the enumerated matrix requirement, including the **RPC paths** and **live-revocation** cases.
- **Audit-log immutability (§13.1).** RED tests asserting that **no role — Owner/Admin, Office, operator, *or* the service_role-backed RPCs — can UPDATE or DELETE an `audit_events` row**; inserts succeed only through the audit RPC/trigger. Where a hash-chain is used, a test asserts a broken chain is detectable.
- **Record status state machine, edit-window lock & send-back/amend.** Tests for every transition in §5.1, including "operator cannot edit after window", "**send_back reopens the window so a sent_back record is editable past the original 48h**", "amend preserves original", "**amend returns to locked (or needs_review per rules) and successive amendments stack**", "every edit emits an audit event", "`submitted_at` is stamped at submit and adopted canonically on sync", and "a never-submitted draft stays editable and never auto-locks."
- **Syncable-minimum / complete-record validation (§5.1.1).** Tests that a record below the mandatory set stays `draft` and cannot submit, and that completeness (incl. resolved weather, RUP fields when flagged) is computed as specified.
- **Sync & conflict resolver.** Idempotent draft replay by `offline_draft_id`; **owner/org binding** — a draft replayed under a different owner/org is rejected and a colliding `draft_id` cannot clobber another owner's/tenant's row (cross-owner & cross-tenant collision tests); **server-ordering authority** — a stale-clock device draft (old `client_action_at`) does **not** overwrite a newer server-committed edit; two-edit "keep server-latest, log both"; **review-authority guard** — an older operator draft against an approved/corrected/locked record routes to `conflict` instead of winning; stale-draft-vs-locked → `conflict`.
- **Sync failure & recovery (§6.3).** Explicit RED tests for the `sync_failed` path.
- **On-device store lifecycle (§13.6).** Tests that the local store/outbox is wiped on logout and on detected expiry/revocation, and that local data is scoped to the authenticated user/tenant.
- *(Removed from the v0.1 core, per scope:* the harvest/loads/irrigation/fuel pure-math functions of §5.4 are **not** exercised by the two v0.1 modules. Their exhaustive test-first unit suites — speed↔inches inverse, the `inches_applied = 0`/blank zero-guard, Dry-run/Stationary forced-zero, net-weight, bushel units, fuel remaining — move to the **fast-follow sprints that build those modules**, still RED-first there.)*

**6.2 RLS role × module matrix (enumerated, explicit target).** Because RLS is the named trust boundary, the test suite includes a **generated, enumerated matrix** over all **6 roles** (§9) × in-scope modules (parent + Spray + Fertilizer detail, plus admin lists) × actions (create/read/update/lock/amend/archive), asserting both allow- and **negative**-paths. The matrix exercises **both** the direct PostgREST/RLS path **and** the `SECURITY DEFINER` RPC path (§13.2), so an RPC cannot become a tenant/permission bypass in front of the boundary it's meant to protect. Named cases explicitly include: **Scout = create scouting only when permitted** (and cannot create spray/fertilizer), **Temporary/seasonal = access-expiration enforcement** evaluated against **live DB state** (writes refused after expiry even with a still-valid JWT), **suspended/archived-mid-session denied on the next request** (§13.3), View-only = no writes, Operator = edit-own-within-window only. The matrix is a checked-in artifact; adding a fast-follow module extends it.

**6.3 Sync `sync_failed` recovery semantics (specified + tested).** Record-draft replay failure → bounded retries with exponential backoff; on exhaustion the record's sync state becomes **`sync_failed`**, surfaced on the record with a manual **"Retry sync"** action. Failures **never silently drop** from the outbox. Permanent/validation failures (incl. owner/org-binding rejection, §5.2) and `conflict` outcomes are distinguished from transient network failures. Tests cover: retry exhaustion → `sync_failed` surfaced, manual re-sync succeeds, a failed draft is never lost from the outbox, and idempotent replay after a partial failure does not duplicate.

**6.4 Success-metric sampling & gate (replaces single-run validation).** The §2.4 metric is proven from **real pilot data captured during the §2.5 dual-entry window**, not from one E2E run:
- **entry-start (precise definition).** The save-duration clock starts the moment the operator **selects the field (`field_id`) on a fresh record** — the first required choice in the flow — and stops at the **Save tap**. It is explicitly **not** screen-open (which would inflate the figure when an operator opens the form, then walks to the pivot) and **not** first-keystroke (which would understate it). This makes the metric reproducible.
- **Median save time** is computed from **server-side instrumentation**: each save carries an entry-start → save-tap duration (client-measured, server-recorded) on every *real* operator save. The median is taken over the pilot sample.
- **% captured** = (Spray/Fertilizer records in Field Record during the window for participating operators) ÷ (those operators' total known applications, **reconciled against the parallel paper/legacy log** kept during dual entry). Stated **per participating operator**, because a 1–2-operator mandated dual-entry subset cannot establish a voluntary farm-wide rate.
- **Gate / sample size:** the metric is only evaluated once there are **≥ 30 real submitted saves across ≥ 2 operators**; v0.1 "holds" when, on that sample, **median save < 60s AND ≥ 90% captured for participating operators**. The E2E "offline spray save < 60s" scenario is a **smoke gate** (the flow is fast and offline-correct), explicitly **not** the population metric. CI/E2E gate = "instrumentation is present and measurable"; pilot-exit gate = "the metric holds on real data."
- **Post-cutover adoption check.** After dual entry is dropped (§2.5 step 4), a follow-up window measures sustained farm-wide capture (records vs. a spot-checked count of known applications) to confirm voluntary adoption holds without the dual-entry mandate.

**6.5 CI tests (automated, run on every push/MR):**
- **TypeScript** compiles with zero errors (`tsc --noEmit`), lint passes.
- **Backend/edge unit tests** (Vitest): RPC handlers (incl. per-RPC authorization + fixed search_path, §13.2), sync resolver, calculations, auth/permission mapping (incl. live-revocation helpers, §13.3), weather back-fill logic; Postgres tested via a disposable instance (pgTAP or a Supabase test container) for RLS (the §6.2 matrix), audit append-only (§6.1), and constraints.
- **Frontend unit tests** (Vitest + React Testing Library): offline store, outbox, store-wipe on logout/expiry (§13.6), sync-state rendering (the §5.2 axis vs status), the field-entry flow components, dropdown-"Other" flow.
- **Migration tests:** schema migrations apply cleanly forward on an empty DB and on seeded data; a pre-migration snapshot is taken before any production migration (§14.6).

**6.6 AI / end-to-end tests (browser automation, evidence-backed):**
- Author scenarios for each user story in §3 (offline spray save under 60s as a *smoke* gate per §6.4; office review lock with audit; admin invite + boundary-draft approval; dropdown "Other"). Each runs in a real mobile-viewport browser, takes screenshots at every step, and posts a pass/fail checklist as MR evidence. Offline behavior tested by toggling the network and asserting the record persists, the weather snapshot back-fills on reconnect, and the record later syncs.

**Acceptance gate for v0.1:** all P0 flows pass with evidence (CI/E2E); the §6.4 instrumentation is present and measurable; the audit-immutability, RPC-authorization, live-revocation, owner/org-binding, and store-wipe tests are green; **a DR restore drill (§14.5) has succeeded**; **and** the §2.4 metric holds against the §6.4 pilot-data gate before expanding past dual entry (§2.5 step 4).

---

## 7. Team (veteran experts to hire)

- **Veteran Postgres / RLS data engineer (1)** — schema, multi-tenant RLS, audit triggers + **append-only audit enforcement (§13.1)**, soft-archive, reporting views, and the **backup/PITR/DR runbook + restore drills (§14)**. Owns the trust boundary and the §6.2 matrix.
- **Veteran TypeScript backend / Supabase edge engineer (1)** — RPCs (with per-RPC authorization + fixed search_path, §13.2), sync resolver (server-ordering authority + review-authority guard + owner/org binding), bootstrap, weather snapshot fetch + back-fill, secrets/`service_role` isolation (§13.5), (fast-follow) OCR/label pipeline.
- **Veteran offline-first PWA engineer (1)** — service worker, IndexedDB store, outbox/sync engine, sync-failed recovery, **on-device scoping + store-wipe on logout/expiry (§13.6)**, install/"Add to Home Screen", attachment upload queue.
- **Veteran mobile-first frontend engineer (React/TS) (1)** — field-entry flows that preserve the prototype feel, sync-state vs status UI, admin console.
- **Veteran agricultural domain SME / product owner proxy (1, part-time)** — RUP/REI/PHI correctness, irrigation source-of-truth, units & bushel weights, real field/equipment/crop-season data, pilot liaison and dual-entry log reconciliation.
- **Veteran QA / test-automation engineer (1)** — Red/Green discipline, RLS matrix harness (incl. RPC paths + live revocation), audit-immutability & owner/org-collision tests, sync-failure tests, success-metric instrumentation, AI/browser E2E scenarios + evidence.
- **Veteran security / SRE reviewer (1, part-time)** — auth hardening (§13.4), RLS, storage policy, secrets/key rotation, on-device exposure, and DR/restore-drill sign-off (§14); REV-style secrets review per MR. Owns §13/§14 sign-off.

---

## 8. Implementation plan (sprints, ordering, parallelization)

Ordering follows the idea's build order, adapted to the v0.1 scope decisions. Parallel tracks noted as **[A]/[B]/[C]**.

**Sprint 0 — Foundations & contracts (all hands).** Repo, CI (tsc/lint/Vitest), self-hosted Supabase dev env, migration tooling, **secrets management / `service_role` isolation set up (§13.5)**, a **backup/PITR baseline + first restore drill scaffold (§14)**, the **sync envelope contract** (`offline_draft_id` with owner/org binding, `source_device_id`, advisory `client_action_at`, authoritative `server_seq`/`updated_at`) and the **status state machine + sync-state axis** frozen as written specs + failing tests. Deliverable: green CI on empty project, agreed contracts.

**Sprint 1 — Identity, tenancy, RLS [A: data eng] ∥ PWA shell [B: PWA eng] ∥ design-system port [C: frontend].**
- [A] organizations, users, user_roles, user_permissions, user_status_events, rup_credentials; RLS policies + the §6.2 enumerated matrix (built test-first), incl. **RPC re-authorization + fixed search_path (§13.2)** and **live-revocation helpers (§13.3)**. Email+password auth wired with **auth hardening (rate-limit/lockout, password policy, email verification, §13.4)**; access-expiration enforced live.
- [B] PWA app shell, service worker, IndexedDB store skeleton (user/tenant-scoped), install support.
- [C] Port prototype styles into the component system (mobile-first).

**Sprint 2 — Admin lists [A] ∥ Bootstrap + offline cache [B].**
- [A] fields, field_boundaries, field_crop_seasons, equipment, irrigation_setups (table only), dropdown_other_requests + admin console for Users/Fields/Equipment/Lists/Settings (edit window, retention, review rules); admin-maintained product list with REI/PHI defaults (§5.9). Soft-archive everywhere.
- [B] bootstrap endpoint + local caching of lists; dropdown-"Other" client+server flow.

**Sprint 3 — Universal record + attachments + audit [A] ∥ offline write/outbox/recovery [B].**
- [A] field_records parent, attachments, audit_events with **privilege-level append-only enforcement + tests (§13.1)**, audit triggers; presigned attachment upload + storage RLS.
- [B] offline save → local ID → outbox → idempotent replay (owner/org-bound, §5.2); sync-state UI (local-only/syncing/synced/sync_failed/conflict) distinct from status; **sync-failed recovery + manual retry (§6.3)**; **store-wipe on logout/expiry/revocation (§13.6)**; attachment upload queue with retry.

**Sprint 4 — Spray/RUP + Fertilizer + weather snapshot (full team converges).**
- spray_records, spray_tank_mix_products, fertilizer_records; weather_snapshots (stored inline, online fetch + offline back-fill on sync per §5.5); the field→pattern→product→weather→review→save flow; syncable-minimum/complete validation (§5.1.1); OCR data-contract tables present (extraction deferred); REI/PHI fields captured manually / from admin product list (§5.9).
- E2E smoke: "offline spray save < 60s" scenario green with evidence; save-time instrumentation emitting with the §6.4 entry-start definition.

**Sprint 5 — Office review + edit lock + conflict review [A+QA] ∥ sync resolver hardening [B].**
- office_reviews, review queue, approve/send-back (**window reopen, §5.1**)/correct/lock, unlock/amend with original-value retention and **amend→locked/needs_review transitions (§5.1)**; `conflict` cases routed into the queue incl. the **review-authority guard (§5.3)**; server-ordering authority tests. Full audit trail tested.

**Sprint 6 — Pilot hardening, security & DR sign-off (all).** Success-metric instrumentation finalized (median save time, % captured with dual-entry reconciliation per §6.4), accessibility/mobile polish, AI test suite for all §3 stories, **REV security pass (§13) and a successful DR restore drill (§14.5) as a hard gate**. **Ship v0.1 to the first farm per §2.5 rollout; gate expansion on the §6.4 metric + the post-cutover adoption check.**

**Fast-follow (post-pilot, sequenced; each is additive on the parent table, each built test-first incl. its §5.4 math):** Fuel → Irrigation → Harvest → Loads → Scouting → **OCR extraction + EPA PPLS label lookup (auto-populates REI/PHI)** → Reports/dashboard build-out → (later) QuickBooks/accounting export. Voice/video scouting and non-email auth remain out of scope.

---

## 9. Users, roles & permissions

Role **+ per-module permissions** (not one broad role). Roles: Owner/Admin (full), Office review (approve/send-back/correct/lock), Employee/operator (create the field records; edit own within the window), Scout (view history + REI; create scouting only when permitted), View only (read allowed records), Temporary/seasonal (limited modules + access-expiration date). Status lifecycle: invited → active → suspended → archived (soft archive; never hard-delete). All enforced in Postgres RLS, with **security-critical checks (active status, access-expiration, current permissions) evaluated against live DB state, not cached JWT claims (§13.3)**, and the full 6-role × module × action matrix (incl. negative paths, Scout-only-scouting, access-expiration, suspended-mid-session, and RPC paths) an explicit enumerated test target (§6.2).

## 10. Record modules

v0.1: **Spray/RUP** and **Fertilizer** (see §5, §8 Sprint 4). Fast-follow: **Tillage, Scouting, Harvest, Irrigation, Fuel, Loads** — each as specified in the idea (flows, fields, calculations in §5.4, built test-first in their sprint), built additively on `field_records`. Loads office actions: inbound closed = "Bill entered", outbound closed = "Invoiced"; any accounting export is post-office-review only.

## 11. Admin console

Sections: Users, Fields (bank, boundaries, crop seasons, GPS boundary drafts, irrigation setup), Equipment, Fuel (inventory + deliveries/adjustments), Loads (billing units + settings), Lists (resolve "Other" requests), Alerts (scout reports + recap settings), Settings (edit window, retention, review rules). v0.1 builds Users/Fields/Equipment/Lists/Settings (incl. admin product list with REI/PHI defaults); Fuel/Loads/Alerts admin land with their fast-follow modules.

## 12. Reporting & dashboard

Built from structured tables (never scraped text). v0.1 establishes the reporting **views** for in-scope data: field history by field+crop year, RUP/spray report, and the REI-warning data path (computed from entered/admin-sourced REI per §5.9, labeled "based on entered REI"). Fast-follow adds crop-year report, fuel/harvest/irrigation/loads rollups, daily recap + alert feed. Every record is printable/exportable later.

---

## 13. Security, data protection & auth hardening

**13.1 Audit-log immutability (tamper-evidence).** The compliance claim — a record defensible to a regulator a decade later — requires that the audit trail cannot be altered by the same roles that can amend records. `audit_events` is **privilege-level append-only**: the table grants **INSERT only** (via the audit RPC/trigger) and **no role — Owner/Admin, Office, operator, or any `service_role`-backed RPC — holds UPDATE or DELETE**. A BEFORE UPDATE/DELETE trigger raises an exception as defense-in-depth. Recommended: a per-row `prev_hash` hash-chain so any out-of-band tampering at the storage layer is detectable. Soft-archive/retention never deletes audit rows. Tested in §6.1.

**13.2 SECURITY DEFINER RPC discipline.** `SECURITY DEFINER` functions execute with owner privileges and bypass RLS by design, so every such RPC is treated as part of the trust boundary and **independently re-enforces authorization**: (a) re-derives `organization_id` and role/permissions from `auth.uid()`/claims **and** re-checks them against live DB state (§13.3); (b) validates the **target row's `organization_id` matches the caller's org** before any write; (c) **pins `search_path`** (e.g. `pg_catalog, public` or empty) to prevent function-hijack; (d) runs as a dedicated least-privilege owner role, not superuser. The §6.2 matrix exercises the RPC paths for cross-tenant and out-of-permission writes, not just direct PostgREST/RLS.

**13.3 Token lifecycle & live revocation.** Access tokens are short-lived (≤ ~60 min) with rotating refresh tokens. **Security-critical checks — user status = active, access-expiration not passed, current role/permission — are evaluated against live DB state inside RLS policies / RPCs** (via helper functions reading `users`, `user_permissions`, `user_status_events`), **not trusted from cached JWT claims**, which serve only as a UX/convenience hint for these. Consequently suspension, archival, role downgrade, permission revocation, and seasonal access-expiration take effect on the **next request**, not on token refresh. Negative tests assert suspended-mid-session and expired-mid-session are denied on the next write (§6.2).

**13.4 Auth hardening.** Email+password is the only credential gate (constraint: no MFA/SSO/magic-link), so it is hardened: **login rate-limiting + lockout/backoff** on repeated failures, a **minimum password-strength policy**, **leaked-password protection** where the self-hosted GoTrue config supports it, and **required email verification before activation**. These tighten the single gate that protects RUP records.

**13.5 Secrets & key isolation.** The Postgres `service_role`/admin key (bypasses RLS entirely) and the weather/EPA-PPLS API keys live **only** in the edge-function/server environment via a secret store — **never** in the client bundle. `service_role` is confined to vetted edge functions that apply per-RPC authorization (§13.2). Privileged edge-function ingress requires auth (no anonymous invoke). Keys are injected via environment/secret manager (never committed) and have a documented **rotation** procedure.

**13.6 On-device (offline) data protection.** The IndexedDB outbox and attachment queue are **scoped to the authenticated user + tenant**. The local store and queued attachments are **wiped** on logout, on token-expiry-without-refresh, on role/permission revocation detected at sync, or on explicit device-deauthorization. Un-synced data has a **bounded local lifetime** (configurable cap), after which the user is warned. Stance on at-rest encryption: browser IndexedDB cannot be assumed encrypted, so the design (a) minimizes the sensitive payload retained locally to what the pending save needs, (b) wipes on the triggers above, and (c) documents device-loss exposure and **requires OS-level device encryption + screen lock on operator phones** as a deployment condition — appropriate because field devices are routinely shared, lost, or stolen.

---

## 14. Backup, recovery & durability (DR)

**14.1 Why.** The multi-year auditable database is the product's reason to exist; self-hosting Supabase means the team owns durability. A single VM disk failure, bad migration, or fat-fingered admin must not lose the compliance DB. (The client never-drop guarantee covers the phone, not the server.)

**14.2 Postgres backups + PITR.** Continuous WAL archiving + scheduled (≥ nightly) base backups enabling **point-in-time recovery**. Backup retention meets the regulatory horizon (multi-year; aligned with the Settings retention rule).

**14.3 Off-host / off-site copies.** Backups are copied **off the application VM** to a separate provider/region and are **encrypted at rest and in transit**.

**14.4 Attachment (Storage) backup.** Storage buckets are backed up/replicated off-host on the same cadence; a periodic integrity check reconciles `attachments` rows against stored objects (orphan/missing detection).

**14.5 Restore drills (acceptance gate).** A documented restore procedure is **periodically tested**: restore to a scratch instance and verify row counts, the audit chain (§13.1), and attachment integrity. A **successful restore drill is a hard acceptance gate before the pilot ships real RUP data** (§6 acceptance gate, Sprint 6).

**14.6 Migration safety.** Migrations are forward-tested (§6.5); a **pre-migration snapshot/backup is taken before any production migration**, with a documented rollback path.

---

## 15. Embedded Changelog

- **v0.3** — Security/ops-weighted review round (two reviewers). Accepted and applied all fourteen findings: (1) added §13.1 audit-log privilege-level append-only + immutability tests; (2) added §14 backup/PITR/off-site/restore-drill DR plan with a restore drill as a pilot acceptance gate; (3) §13.2 + §4 require SECURITY DEFINER RPCs to re-enforce org/role authorization, validate target-row org, and pin search_path, and §6.2 now exercises RPC paths; (4) §13.3 defines token TTL/refresh and that status/expiry/permission checks read live DB state, with suspended/expired-mid-session negative tests; (5) §13.6 specifies on-device scoping, store-wipe on logout/expiry/revocation, bounded local lifetime, and device-loss stance; (6) §5.2 binds offline_draft_id to (org, owner) and rejects ownership/tenant-changing replays, with collision tests in §6.1; (7) moved harvest/loads/irrigation/fuel math out of the v0.1 test-first core into their fast-follow sprints (§6.1, §5.4 note); (8) §5.3 adds a review-authority guard so an older operator draft cannot silently supersede an approved/corrected/locked record (routes to conflict); (9) §13.4 + §13.5 add auth hardening (rate-limit/lockout, password policy, email verification, leaked-password) and secrets/service_role isolation + rotation; (10) §5.1 makes send_back reopen the edit window (sent_back_at) to fix the 48h deadlock; (11) §2.4/§6.4 reconcile the adoption metric as per-participating-operator during dual entry plus a post-cutover farm-wide adoption check; (12) §6.4 defines entry-start as field-selection-on-a-fresh-record (not screen-open/first-keystroke); (13) §5.1.1 enumerates the syncable-minimum vs complete field sets for Spray and Fertilizer; (14) §5.1 defines amended as non-terminal (amend → locked by default, or → needs_review per rules; amendments stack). Added §13 and §14; renumbered the changelog to §15.
- **v0.2** — Reviewer B round (Reviewer A unavailable). Resolved all ten findings: filled the §4 architecture block; resolved the offline-vs-network weather contradiction (§5.5 two-path acquisition + reworded story 1); defined latest in §5.3 as server-assigned server_seq/commit order; specified irrigation source-of-truth + zero-guard; replaced single-E2E metric validation with §6.4 pilot-data sampling and a ≥30-save/≥2-operator gate; defined submitted_at stamping and never-auto-lock drafts; clarified v0.1 REI source as manual/admin-list with unknown≠safe labeling; split record status from sync state and renamed the sync needs_review label to conflict; made the 6-role × module × action RLS matrix an enumerated checked-in target; specified and tested sync_failed recovery.
- **v0.1** — Initial lead draft. Established goal/why, architecture (PWA + self-hosted Supabase, RLS as trust boundary), universal record + typed detail abstraction, offline sync envelope & conflict rules, record state machine & edit-lock, domain calculations, test plan with test-first core, team, and 6-sprint plan + fast-follow. Resolved five interview decisions: v0.1 ships foundation + Spray/RUP + Fertilizer (other six modules fast-follow); full offline write/sync for in-scope modules; manual entry + OCR data contract + photo capture in v0.1, OCR extraction/label-lookup deferred; success metric = median spray/fertilizer save < 60s AND ≥90% of applications captured during pilot; phased pilot (admin setup → dual-entry shadow → office-review validation → expand).
