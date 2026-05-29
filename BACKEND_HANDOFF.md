# Field Record Backend Handoff

Version: 2026-05-26

This file explains the backend shape for the Field Record prototype. The current app is a static click-through prototype in `index.html`, `styles.css`, and `app.js`. The backend should preserve the same simple field-entry feel while turning each entry into a structured, auditable farm record.

## Product Goal

Field Record is a farm operations record system. It should make phone entry fast enough that operators actually use it, while the backend quietly builds a long-term database for compliance, crop history, field reports, dashboards, and office review.

The important rule is: the field screen stays simple, but the backend keeps the complete record.

## Current Prototype Files

- `index.html`: shell, side navigation, phone frame.
- `styles.css`: phone-style layout and controls.
- `app.js`: all mock state, screen routing, calculations, save behavior, OCR mocks, admin lists.
- `BACKEND_HANDOFF.md`: this file.

The prototype currently keeps everything in memory. Replace the mock arrays in `app.js` with API calls and local offline cache.

## Core User Types

- Owner/Admin: full access, can manage users, fields, equipment, lists, settings, review, unlock records, and see all reports.
- Office review: can approve, send back, correct, and lock submitted records.
- Employee/operator: can create field records, fuel records, loads, irrigation, harvest, etc. Can edit own entries only inside the edit window, currently planned around 48 hours.
- Scout: can view field history and REI warnings, but can only create scouting records.
- View only: can view allowed records, no edits.
- Temporary/seasonal: can be given limited module access and expiration.

Use role plus module permissions. Do not rely on one broad role only.

## Frontend Route Map

These are UI route names from the prototype, not necessarily backend URLs.

| Route | Purpose |
| --- | --- |
| `home` | Main module launcher: Spray, Fertilizer, Tillage, Scouting, Harvest, Irrigation, Fuel, Loads |
| `field-step` | Field, map source, treated area / job area |
| `gps-boundary` | Phone GPS field boundary draft for admin review |
| `pattern-step` | Pass pattern and heading, such as 0, 90, custom angle, circle pivot |
| `product-step` | Product/details screen for Spray, Fertilizer, or Tillage |
| `weather-step` | Weather snapshot, RUP supervisor, operator, equipment |
| `review-step` | Final review before saving a normal field operation |
| `saved-step` | Saved confirmation for spray/fertilizer/tillage |
| `scout-view` | Scout view with REI warnings and read-only field history |
| `scout-entry` | Scout observation, issues, severity, photos, voice/video later |
| `scout-saved` | Scouting saved confirmation |
| `harvest-field` | Fast field picker for harvest loads |
| `harvest-load` | Scale photo/OCR, truck, empty/loaded weights, destination |
| `harvest-saved` | Harvest load saved confirmation |
| `irrigation-field` | Fast field picker that loads pivot setup |
| `irrigation-log` | Pivot direction, percent/inches, rain, chemigation/fertigation |
| `irrigation-saved` | Irrigation saved confirmation |
| `fuel` | Fuel entry with OCR for gallons and engine hours/odometer |
| `fuel-saved` | Fuel saved confirmation |
| `outbound` | Loads screen. Direction switch: Outbound or Inbound |
| `outbound-saved` | Load ticket saved confirmation |
| `outbound-billing` | Office queue for inbound bills and outbound invoices |
| `field-history` | Field timeline and map history |
| `reports` | Field/year report lookup |
| `report-detail` | One saved record detail |
| `data-center` | Dashboard rollups |
| `office-review` | Approve/send back/lock queue |
| `admin` | Users, fields, equipment, fuel, loads, dropdown lists, alerts, settings |
| `data-dictionary` | In-app summary of the data model |

## Main Record Flows

### Spray / RUP Record

Flow: `home -> field-step -> pattern-step -> product-step -> weather-step -> review-step -> saved-step`

Backend should save:

- Field, crop year, treated area, acres, boundary version, optional partial zone.
- Pattern and heading.
- Tank mix products, each with rate/amount.
- Label OCR output per product.
- EPA registration number, active ingredient, REI, PHI, RUP flag, label source URL.
- Carrier, application method, equipment, operator.
- RUP supervisor/license and expiration when applicable.
- Weather snapshot at time of entry.
- Attachments: label photos, OCR original image, any proof photos.
- Office review status and audit history.

Label OCR concept:

1. Operator scans product label inside each product card.
2. OCR extracts likely product name and/or EPA Reg. No.
3. Backend searches chemical label source, ideally EPA PPLS first.
4. Backend returns candidate matches.
5. Operator verifies the match before save.
6. Backend stores both the verified data and the original OCR output.

Important: OCR and label lookup should be treated as draft assistance, not final truth.

### Fertilizer Record

Flow is similar to Spray, but product detail is nutrient-focused.

Backend should support:

- Dry blend and liquid blend.
- Common products like UAN and thiosol.
- Editable N, P, K, S, Zn, B.
- Rate unit such as lb/ac or gal/ac.
- Application mode, equipment, operator, field/crop year, pattern, notes.
- Blend ticket or label attachment.

### Tillage Record

Backend should support:

- Power unit and implement as separate equipment selections.
- Attachment, depth, passes, purpose, soil moisture, residue, speed, finish.
- Field/crop year, pattern/heading, operator, notes.
- Equipment selected earlier should carry forward as read-only summary where needed, to avoid conflicting double entry.

### Scouting Record

Backend should support:

- Scout can view history and REI warnings but only enter scouting if permission allows.
- Field, crop year, GPS point, issue types, severity per issue, notes.
- Photos with geolocation.
- Later: voice note, transcription, video.
- Alert rules: text/email/daily recap to owner/admin.

### Harvest Load

Flow: `home -> harvest-field -> harvest-load -> harvest-saved`

Backend should support:

- Field and crop year selected first.
- Next load number per field/crop year.
- Truck, driver/operator, destination.
- Empty weight, loaded/gross weight, calculated net weight.
- Scale photo and OCR result.
- Manual override after OCR.
- Field report/yield rollup.

Calculation:

```text
net_weight = loaded_weight - empty_weight
```

### Irrigation Record

Flow: `home -> irrigation-field -> irrigation-log -> irrigation-saved`

Backend should support:

- Field-level irrigation setup stored in Admin:
  - irrigator/equipment
  - base inches at 100 percent
  - default direction
  - last/default percent
- Operator record:
  - direction: Forward, Reverse, Stationary / parked, Dry run
  - speed percent
  - inches applied
  - rain event and rain inches
  - chemigator/fertigator checkboxes
  - notes

Calculation:

```text
inches_applied = base_inches_at_100 / (speed_percent / 100)
speed_percent = (base_inches_at_100 / inches_applied) * 100
```

Rules:

- Dry run and Stationary / parked force inches applied to zero.
- Rain event adds to total water but should remain distinguishable from irrigation water.
- Field-level setup is editable only in Admin, not from the fast log.

### Fuel Entry

Flow: `home -> fuel -> fuel-saved`

Backend should support:

- Fuel source/tank and fuel type.
- Gallons, with OCR from pump readout.
- Equipment and optional implement/attachment.
- Engine hours or odometer, with OCR from dash photo.
- Process and process type.
- Optional field tag, crop year, acres worked, miles traveled.
- Operator, timestamp, notes, proof photos.
- Tank inventory update.
- Warnings for missing calculation fields.

Warning examples:

- Gallons blank.
- Engine hours / odometer blank.
- Acres worked blank for field work.
- Miles traveled blank for hauling.

Tank calculation:

```text
remaining_after = max(0, remaining_before - gallons)
```

Admin can also add fuel deliveries or manual tank adjustments.

### Loads: Outbound / Inbound

Home screen label is `Loads`.

Flow: `home -> outbound -> outbound-saved` and office queue `outbound-billing`.

One screen handles both directions:

- Outbound: commodities leaving farm, office action is invoicing.
- Inbound: commodities/supplies coming in, office action is bill review/entry.

Backend should support:

- Direction: `Outbound` or `Inbound`.
- Ticket photo OCR.
- Ticket number, date/time.
- Commodity.
- Customer or vendor.
- Destination / receiving location.
- Truck, carrier, carrier driver.
- Loader / person entering ticket.
- Gross/loaded weight, tare/empty weight, net weight.
- Billing unit and calculated quantity.
- Unit price optional.
- Billing/invoice status.
- Optional field tag and crop year.
- Ticket photos and scale tickets.

Weight/unit calculation:

```text
net_weight = gross_weight - tare_weight
```

If user manually types net weight, manual net overrides calculated net.

If user manually types units, manual units override calculated units.

Standard units:

- lb: pounds
- ton: 2000 lb
- CWT: 100 lb
- BU: commodity bushel weight
- each, bale, load: count units, user enters quantity manually

Bushel weights currently used:

- Wheat: 60 lb/BU
- Barley: 48 lb/BU
- Canola: 50 lb/BU
- Triticale: 56 lb/BU
- Rye: 56 lb/BU

Office queue:

- Filter by direction, customer/vendor, period.
- Inbound closed status: `Bill entered`.
- Outbound closed status: `Invoiced`.
- Future QuickBooks integration should be after office review, not direct from field entry.

### Admin

Admin sections:

- Users: add users, email, phone, role, access scope, RUP license, expiration, suspend/restore/archive.
- Fields: field bank, boundaries, crop seasons, GPS boundary drafts, irrigation setup.
- Equipment: power units, implements, sprayers, harvest, irrigation, trucks, archive/restore.
- Fuel: tank/source inventory and delivery/adjustment records.
- Loads: billing units and load settings.
- Lists: review one-off `Other` dropdown values.
- Alerts: scout reports and recap settings.
- Settings: edit window, retention, review rules.

## Dropdown `Other` Workflow

Any admin-controlled dropdown should include `Other` at the bottom.

When user chooses `Other`:

1. UI prompts for the typed value.
2. Typed value is used on the current record.
3. Backend creates a `dropdown_other_request`.
4. Admin later decides:
   - Add to permanent list.
   - Keep as one-off only.

This avoids cluttering dropdowns while still letting operators finish records in the field.

## Suggested Database Tables

Use exact names or adapt to your framework. Keep audit fields on all important tables.

### Identity and Access

- `organizations`
- `users`
- `user_roles`
- `user_permissions`
- `user_status_events`
- `rup_credentials`

Key user fields:

- id, organization_id
- employee_number
- name
- email
- phone
- role
- view_scope
- module_permissions
- access_expires_at
- status: invited, active, suspended, archived
- created_at, updated_at

### Admin Lists

- `equipment`
- `equipment_status_events`
- `fields`
- `field_boundaries`
- `field_crop_seasons`
- `irrigation_setups`
- `commodities`
- `customers_vendors`
- `destinations`
- `billing_units`
- `fuel_sources`
- `dropdown_other_requests`

Use soft archive instead of delete for fields, equipment, users, and list items.

### Operational Records

Use a shared parent table plus detail tables.

`field_records`

- id
- organization_id
- record_type: spray, fertilizer, tillage, scouting, harvest, irrigation, fuel, load
- field_id nullable
- crop_year nullable
- crop_name nullable
- operator_user_id
- entered_for_user_id nullable
- started_at
- finished_at
- submitted_at
- status: draft, submitted, needs_review, approved, sent_back, locked, amended
- office_review_id nullable
- notes
- source_device_id
- offline_draft_id
- created_at, updated_at

Detail tables:

- `spray_records`
- `spray_tank_mix_products`
- `fertilizer_records`
- `tillage_records`
- `scouting_records`
- `scouting_issues`
- `harvest_loads`
- `irrigation_records`
- `fuel_entries`
- `load_tickets`

### Attachments, OCR, Weather, Audit

- `attachments`
- `ocr_jobs`
- `ocr_results`
- `weather_snapshots`
- `office_reviews`
- `audit_events`
- `sync_drafts`

Attachment fields:

- id
- organization_id
- record_id nullable
- module
- file_type
- storage_url
- original_file_name
- captured_at
- captured_by_user_id
- gps_lat, gps_lng nullable
- ocr_job_id nullable

Audit fields:

- entity_type
- entity_id
- action
- old_value_json
- new_value_json
- changed_by_user_id
- changed_at
- reason

## Suggested API Endpoints

This is intentionally REST-style for clarity. GraphQL or RPC is fine if preferred.

### Bootstrap / Offline Sync

- `GET /api/bootstrap`
  - Returns user, permissions, active fields, crop seasons, equipment lists, fuel sources, billing units, commodities, customers/vendors, destinations, app settings.
- `POST /api/sync/drafts`
  - Accepts offline-created records and attachments metadata.
- `GET /api/sync/changes?since=timestamp`
  - Returns changes for local cache.

### Auth and Users

- `GET /api/me`
- `GET /api/users`
- `POST /api/users`
- `PATCH /api/users/:id`
- `POST /api/users/:id/suspend`
- `POST /api/users/:id/restore`
- `POST /api/users/:id/archive`
- `POST /api/users/:id/rup-credentials`

### Fields and Crop Seasons

- `GET /api/fields`
- `POST /api/fields`
- `PATCH /api/fields/:id`
- `POST /api/fields/:id/archive`
- `POST /api/fields/:id/restore`
- `GET /api/fields/:id/seasons`
- `POST /api/fields/:id/seasons`
- `POST /api/field-boundary-drafts`
- `POST /api/field-boundary-drafts/:id/approve`

### Equipment

- `GET /api/equipment`
- `POST /api/equipment`
- `PATCH /api/equipment/:id`
- `POST /api/equipment/:id/archive`
- `POST /api/equipment/:id/restore`

### Records

- `POST /api/records/spray`
- `POST /api/records/fertilizer`
- `POST /api/records/tillage`
- `POST /api/records/scouting`
- `POST /api/records/harvest-loads`
- `POST /api/records/irrigation`
- `POST /api/records/fuel`
- `POST /api/records/load-ticket`
- `GET /api/records/:id`
- `PATCH /api/records/:id`
- `GET /api/fields/:fieldId/history?cropYear=2026`
- `GET /api/reports?fieldId=&cropYear=&recordType=`

### OCR and Attachments

- `POST /api/attachments/presign`
- `POST /api/attachments`
- `POST /api/ocr/product-label`
- `POST /api/ocr/scale-ticket`
- `POST /api/ocr/fuel-pump`
- `POST /api/ocr/meter`
- `GET /api/ocr/jobs/:id`

OCR should return raw text, confidence, extracted fields, and match candidates. The app should store raw OCR output even when the user edits the final value.

### Chemical Label Lookup

- `GET /api/chemical-labels/search?query=`
- `GET /api/chemical-labels/by-epa/:epaRegNo`
- `POST /api/spray-products/verify-label`

Suggested lookup chain:

1. Parse EPA Reg. No. from OCR if possible.
2. Search official label source by EPA Reg. No.
3. Fall back to product name search.
4. Return candidate matches for user verification.
5. Store verified label ID/source URL.

### Weather

- `GET /api/weather/snapshot?fieldId=&lat=&lng=&timestamp=`

Store the weather snapshot with the record. Do not only store a pointer to weather data, because reports need to remain stable years later.

### Office Review

- `GET /api/office-review/queue`
- `POST /api/office-review/:recordId/approve`
- `POST /api/office-review/:recordId/send-back`
- `POST /api/records/:recordId/unlock`
- `GET /api/audit-events?entityType=&entityId=`

Locking rule:

- Operators can edit their own records for the configured window, currently 48 hours.
- After that, records lock unless Admin/Office unlocks or amends them.
- Amendments should never erase original values.

### Admin Lists

- `GET /api/dropdown-other-requests`
- `POST /api/dropdown-other-requests`
- `POST /api/dropdown-other-requests/:id/add-to-list`
- `POST /api/dropdown-other-requests/:id/one-off`

### Fuel Inventory

- `GET /api/fuel/sources`
- `POST /api/fuel/sources`
- `PATCH /api/fuel/sources/:id`
- `POST /api/fuel/sources/:id/delivery`
- `POST /api/fuel/sources/:id/adjustment`
- `GET /api/fuel/entries`

### Loads Office Queue

- `GET /api/load-tickets?direction=&partyId=&from=&to=&status=`
- `POST /api/load-tickets/:id/mark-invoiced`
- `POST /api/load-tickets/:id/mark-bill-entered`
- `POST /api/load-tickets/:id/export-quickbooks`

## Offline-First Requirements

This app will be used in fields, trucks, and pivots. Plan for bad service.

Recommended approach:

- PWA or mobile app shell.
- Local database on device, such as IndexedDB for web.
- Records get a temporary local ID immediately.
- Attachments queue for upload.
- Sync retries in background.
- Server resolves conflicts.
- UI shows draft, syncing, synced, failed, needs review.

Conflict rules:

- If two edits happen before office review, keep the latest but log both.
- If a record is locked, do not overwrite it from an old offline draft. Send to conflict review.
- All edits create audit events.

## Reporting and Dashboard

Reports should be built from the structured tables, not scraped from text.

Needed views:

- Field history by field and crop year.
- Crop year report.
- RUP/spray report.
- REI warning list for scouts.
- Fuel by equipment, field, process, acres, miles.
- Harvest yield/load summary by field and crop year.
- Irrigation total water by field and crop year.
- Loads office queue for bills/invoices.
- Daily recap and alert feed.

## Build Order Recommendation

1. Auth, users, permissions, organizations.
2. Admin lists: fields, crop seasons, equipment, users.
3. Universal record parent table, attachments, audit events.
4. Spray/RUP flow with weather snapshot and tank mix.
5. Office review and edit lock.
6. Fuel, irrigation, harvest, loads.
7. OCR pipeline.
8. Offline sync.
9. Reports/dashboard.
10. QuickBooks or other accounting integration.

## Notes for the Backend Builder

- The frontend route names can stay as screen names. Backend endpoints can be cleaner and resource-based.
- Do not hard-delete operational data. Archive instead.
- Do not let field-entry screens modify permanent field boundaries. Boundary changes are Admin-only.
- Keep `field_id` and `crop_year` on every record that can touch field history.
- Store both calculated values and manual overrides where operators can override.
- Store both raw OCR and verified values.
- Treat photos/files as first-class records with timestamps and uploader.
- The app should be tenant-ready from the start, even if the first tenant is one farm.
- Every record should be printable/exportable later.

