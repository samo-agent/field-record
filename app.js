const state = {
  route: "home",
  operation: "Spray",
  fieldId: "stone-6",
  mapMode: "Saved boundary",
  areaMode: "Whole field",
  pattern: "Angle",
  heading: 102,
  productId: "boundary",
  tankMix: [
    { id: "boundary", amount: "24 fl oz/ac", labelOcrStatus: "Label scan ready." },
    { id: "dual", amount: "8 fl oz/ac", labelOcrStatus: "Label scan ready." }
  ],
  amount: "24 fl oz/ac",
  carrier: "Water, 10 gal/ac",
  fertilizerAnalysis: { n: "18", p: "46", k: "0", s: "6", zn: "0", b: "0" },
  applicationMode: "Ground sprayer",
  operator: "02 - Weston",
  equipment: "505 - 4830 JD sprayer",
  rupSupervisorId: "weston",
  nonCertifiedTraining: "On file",
  tillage: {
    powerUnit: "005 - 8260R JD tractor",
    implement: "107 - Xpress Great Plains Xpress Disc",
    depth: "3.5 in",
    passes: "1",
    purpose: "Residue sizing",
    soilMoisture: "Fit",
    residue: "Medium",
    speed: "6.2 mph",
    finish: "Level seedbed",
    attachment: "Rolling basket"
  },
  scoutingIssues: [
    { type: "Weeds", severity: "Medium", note: "Kochia along west ditch" },
    { type: "Water / irrigation", severity: "Low", note: "Small wet spot near pivot track" }
  ],
  note: "North edge has a wet spot. Watch overlap by the road.",
  saved: false,
  selectedAdminUser: "weston",
  selectedReportField: "stone-6",
  selectedReportYear: "2026",
  selectedReportId: "spray-2026-stone-6",
  adminSection: "Users",
  selectedEquipmentCategory: "Tillage Equipment",
  archivedEquipment: [],
  lastHarvestFieldId: "showan",
  lastIrrigationFieldId: "stone-6",
  reviewNotice: "",
  adminNotice: "",
  adminSettings: {
    editWindow: "48 hours",
    retention: "Forever",
    officeReview: true,
    alertMethod: "Text + email",
    dailyRecap: "5:30 PM"
  },
  equipmentDraft: {
    category: "Tillage Equipment",
    number: "127",
    description: "New implement"
  },
  newUserDraft: {
    name: "New Crop Scout",
    email: "scout@example.com",
    phone: "(719) 555-0142",
    rupLicense: "",
    rupExpires: "",
    role: "Field scout",
    access: "Scout entry + view",
    view: "All records",
    expires: "Season end",
    entry: ["Scouting"]
  },
  fieldDraft: {
    name: "North Pivot 12",
    farm: "Stone Ridge Farm",
    crop: "Potatoes",
    acres: "118",
    source: "Office map click",
    boundaryVersion: "v1",
    notes: "Permanent field boundary controlled by admin."
  },
  cropSeasonDraft: {
    fieldId: "showan",
    cropYear: "2026",
    crop: "Potatoes",
    status: "Active crop",
    acres: "125",
    start: "Apr 12, 2026",
    end: "Open",
    note: "Potato crop season for inputs, irrigation, and harvest loads."
  },
  irrigationSetupDraft: {
    fieldId: "stone-6",
    equipment: "1000 - Center Pivot 12",
    baseInchesAt100: "0.25",
    lastDirection: "Forward",
    lastPercent: "20",
    unlocked: false
  },
  gpsDraft: {
    status: "Ready",
    points: "0",
    distance: "0.0 mi",
    accuracy: "Phone GPS, 18-35 ft",
    review: "Admin review required",
    started: false
  },
  harvest: {
    cropYear: "2026",
    truck: "Truck 221",
    emptyWeight: "28000",
    loadedWeight: "",
    destination: "Same as last - Cellar 4",
    notes: "Scale photo attached.",
    ocrStatus: "No scale photo scanned yet"
  },
  irrigation: {
    direction: "Forward",
    percent: "20",
    inches: "1.25",
    baseInchesAt100: "0.25",
    equipment: "1000 - Center Pivot 12",
    chemigator: false,
    fertigator: false,
    rainEvent: false,
    rainInches: "",
    notes: "Routine irrigation set."
  },
  fuel: {
    sourceId: "blue",
    fuelType: "Dyed diesel",
    equipment: "005 - 8260R JD tractor",
    gallons: "",
    meterReading: "",
    process: "Harvesting",
    processType: "Potatoes",
    implement: "121 - 2019 Maximum Equipment Rock Picker",
    tagField: false,
    fieldId: "stone-6",
    fieldCropYear: "2026",
    acresWorked: "",
    milesTraveled: "",
    operator: "02 - Weston",
    notes: "Fuel ticket photo attached.",
    photoStatus: "No pump or ticket photo attached",
    gallonOcrStatus: "Pump readout photo can fill gallons.",
    meterOcrStatus: "Dash photo can fill engine hours or odometer.",
    warning: "Engine hours / odometer can be blank, but office will see a warning."
  },
  fuelInventoryDraft: {
    sourceId: "blue",
    deliveryGallons: "500",
    adjustmentGallons: "",
    note: "Fuel delivery ticket attached."
  },
  outbound: {
    direction: "Outbound",
    ocrStatus: "No outbound ticket scanned yet",
    commodity: "Potatoes",
    bushelCommodity: "Wheat",
    customer: "Valley Produce",
    destination: "Monte Vista Warehouse",
    truck: "Truck 221",
    carrier: "Stone Ridge Farms",
    carrierDriver: "",
    ticketNumber: "",
    grossWeight: "",
    tareWeight: "28000",
    netWeight: "",
    unit: "cwt",
    quantity: "",
    unitPrice: "",
    loader: "02 - Weston",
    billingStatus: "Ready for invoice",
    dateTime: "Auto now",
    notes: "Ticket photo attached.",
    tagField: false,
    fieldId: "stone-6",
    fieldCropYear: "2026",
    photoStatus: "No ticket photo attached"
  },
  outboundUnitDraft: {
    code: "bale",
    label: "Bale",
    kind: "count",
    poundsPerUnit: "",
    description: "per bale"
  },
  outboundBillingDirection: "All",
  outboundBillingCustomer: "All customers",
  outboundBillingPeriod: "This month",
  otherPrompt: null,
  otherDraftValue: "",
  otherRequests: [
    {
      id: "other-demo-destination",
      module: "Loads",
      listName: "Destination",
      value: "Customer temporary yard",
      source: "Outbound / inbound ticket",
      status: "Needs admin decision",
      requestedBy: "02 - Weston",
      requestedAt: "Today"
    }
  ]
};

const fields = [
  {
    id: "stone-6",
    name: "Stone Ridge 6",
    farm: "Stone Ridge Farm",
    crop: "Grain",
    acres: 125,
    status: "REI clear",
    lastPattern: "102 degrees",
    rei: "Clear"
  },
  {
    id: "e47",
    name: "E47",
    farm: "Stone Ridge Farm",
    crop: "Alfalfa",
    acres: 125,
    status: "Scout caution",
    lastPattern: "Circle pivot",
    rei: "Clears today 6:20 PM"
  },
  {
    id: "showan",
    name: "Showan",
    farm: "Miner Farms",
    crop: "Spuds",
    acres: 125,
    status: "REI active",
    lastPattern: "90 degrees",
    rei: "Do not enter until May 20, 10:14 AM"
  }
];

const fieldSeasons = [
  { id: "stone-6-2026-grain", fieldId: "stone-6", cropYear: "2026", crop: "Grain", status: "Active crop", acres: 125, start: "Mar 18, 2026", end: "Open", note: "Current crop season for spring records." },
  { id: "stone-6-2025-potatoes", fieldId: "stone-6", cropYear: "2025", crop: "Potatoes", status: "Closed season", acres: 125, start: "Apr 2, 2025", end: "Oct 7, 2025", note: "Harvested before fall tillage." },
  { id: "stone-6-2024-canola", fieldId: "stone-6", cropYear: "2024", crop: "Canola", status: "Closed season", acres: 125, start: "Mar 25, 2024", end: "Aug 29, 2024", note: "Use this when looking up old canola-year issues." },
  { id: "e47-2026-alfalfa", fieldId: "e47", cropYear: "2026", crop: "Alfalfa", status: "Active crop", acres: 125, start: "Jan 1, 2026", end: "Open", note: "Perennial stand carries across early-season jobs." },
  { id: "e47-2025-cover", fieldId: "e47", cropYear: "2025", crop: "Cover rye after hay", status: "Second crop", acres: 125, start: "Sep 18, 2025", end: "Nov 6, 2025", note: "Example of two crop blocks in one season." },
  { id: "showan-2026-potatoes", fieldId: "showan", cropYear: "2026", crop: "Potatoes", status: "Active crop", acres: 125, start: "Apr 12, 2026", end: "Open", note: "Potato crop season for inputs and harvest loads." },
  { id: "showan-2025-potatoes", fieldId: "showan", cropYear: "2025", crop: "Potatoes", status: "Closed season", acres: 125, start: "Apr 18, 2025", end: "Oct 3, 2025", note: "Historical potato season with load records." }
];

const employees = [
  { id: "roger", number: "01", name: "Roger", email: "roger@example.com", phone: "", rupLicense: "", rupExpires: "", role: "Office review", access: "Review + view", entry: ["Office review"], view: "All records", admin: false, status: "Active", expires: "No expiration", statusHistory: ["Active - added from equipment sheet"] },
  { id: "weston", number: "02", name: "Weston", email: "weston@example.com", phone: "", rupLicense: "CO-PA-024681", rupExpires: "2027-12-31", role: "Admin / executive", access: "Full access", entry: ["Spray", "Fertilizer", "Tillage", "Scouting"], view: "All records", admin: true, status: "Active", expires: "No expiration", statusHistory: ["Active - farm admin", "RUP license stored"] },
  { id: "jason", number: "03", name: "Jason", email: "jason@example.com", phone: "", rupLicense: "", rupExpires: "", role: "Field employee", access: "Entry + view", entry: ["Spray", "Fertilizer", "Tillage"], view: "All records", admin: false, status: "Active", expires: "No expiration", statusHistory: ["Active - field employee"] },
  { id: "dave", number: "05", name: "Dave", email: "dave@example.com", phone: "", rupLicense: "", rupExpires: "", role: "Field scout", access: "Scout entry + view", entry: ["Scouting"], view: "All records", admin: false, status: "Active", expires: "Season end", statusHistory: ["Active - scout access through season end"] },
  { id: "coby", number: "06", name: "Coby", email: "coby@example.com", phone: "", rupLicense: "", rupExpires: "", role: "Tillage crew", access: "Tillage entry + view", entry: ["Tillage"], view: "All records", admin: false, status: "Active", expires: "No expiration", statusHistory: ["Active - tillage crew"] },
  { id: "temp", number: "10", name: "Temp Employee", email: "temp@example.com", phone: "", rupLicense: "", rupExpires: "", role: "Temporary operator", access: "Limited entry", entry: ["Tillage"], view: "Assigned fields", admin: false, status: "Active", expires: "48 hours", statusHistory: ["Active - temporary access"] },
  { id: "vernon", number: "12", name: "Vernon", email: "vernon@example.com", phone: "", rupLicense: "", rupExpires: "", role: "Field employee", access: "Entry + view", entry: ["Spray", "Fertilizer", "Tillage"], view: "All records", admin: false, status: "Active", expires: "No expiration", statusHistory: ["Active - field employee"] },
  { id: "anthony", number: "14", name: "Anthony", email: "anthony@example.com", phone: "", rupLicense: "", rupExpires: "", role: "Field employee", access: "Entry + view", entry: ["Spray", "Fertilizer", "Tillage"], view: "All records", admin: false, status: "Active", expires: "No expiration", statusHistory: ["Active - field employee"] }
];

const equipmentCatalog = [
  {
    category: "Tractors and Other Power Units",
    count: 22,
    items: [
      ["000", "General tractor or other power unit repairs"],
      ["001", "8400 JD tractor"],
      ["002", "8300 JD tractor"],
      ["003", "7920 JD tractor"],
      ["004", "7230R JD tractor with H480 Loader"],
      ["005", "8260R JD tractor"],
      ["006", "8960 JD tractor"],
      ["007", "4640 JD tractor"],
      ["008", "4640 JD tractor sold loader off"],
      ["009", "7320 JD tractor"],
      ["010", "924G Caterpillar Wheel Loader"],
      ["011", "544J JD Wheel Loader"],
      ["012", "544B JD Wheel Loader"],
      ["013", "410D JD Backhoe"],
      ["014", "326D JD Skidsteer"],
      ["015", "706 IH Tractor"],
      ["016", "A Farmall"],
      ["017", "D4 Caterpillar Doser"],
      ["018", "TH63 Caterpillar Telehandler"],
      ["019", "544K JD Wheel Loader"],
      ["020", "MT865 Challanger Tractor"],
      ["021", "320BL Caterpillar Excavator"]
    ]
  },
  {
    category: "Tillage Equipment",
    count: 27,
    items: [
      ["100", "General Tillage Supplies or Repairs"],
      ["101", "3606 8 Bottom Harrell Switch Plow newest"],
      ["102", "3606 8 Bottom Harrell Switch Plow oldest"],
      ["103", "JD 7 Bottom Switch plow w/Packer"],
      ["104", "9 shank ripper"],
      ["105", "2021 Dave Koenig DWK 24' Ripper"],
      ["106", "Case Disc"],
      ["107", "Xpress Great Plains Xpress Disc"],
      ["108", "1443 Sunflower Disc"],
      ["109", "5000 Dyna Drive"],
      ["110", "Chiesel Plow"],
      ["111", "Eliminator, Wilcox 13ft."],
      ["112", "Brillian Cultipacker"],
      ["113", "2014 Schmieser Cultipacker"],
      ["114", "KeeWanie Cultipacker"],
      ["115", "Spinach bedder"],
      ["116", "Rock Roller"],
      ["117", "Land Plane"],
      ["118", "Rock Windrower"],
      ["119", "B&H row cultivator green"],
      ["120", "B&H row cultivator gray"],
      ["121", "2019 Maximum Equipment Rock Picker"],
      ["122", "Rock Picker"],
      ["123", "2021 MaxH/D109-CV Rockpicker Dump 2201001"],
      ["124", "2021 MaxH/D109-CV Rockpicker Dump 2201002"],
      ["125", "Great Plains Tool Carrier"],
      ["126", "2026 109HD Maximum Rock Picker"]
    ]
  },
  {
    category: "Chemical Application Equipment",
    count: 9,
    items: [
      ["500", "Chemical Application Supplies or Repairs"],
      ["501", "Sprayboom"],
      ["502", "80' Top Air Sprayboom"],
      ["503", "3630 Spra-Coupe"],
      ["504", "Terra-Gator"],
      ["505", "4830 JD sprayer"],
      ["506", "Saddle Tanks Lakestate"],
      ["507", "1000 Gal Nurse Tank with pump"],
      ["508", "2018 Wylie Nurse Trailer w/pump 1250gal"]
    ]
  },
  {
    category: "Irrigation",
    count: 18,
    items: [
      ["1000", "General lrrigation Supplies or Repairs"],
      ["1001", "#1 Irrigator and or Equipment"],
      ["1002", "#2 Irrigator and or Equipment"],
      ["1003", "#3 Irrigator and or Equipment"],
      ["1004", "#4 Irrigator and or Equipment"],
      ["1005", "#5 Irrigator and or Equipment"],
      ["1006", "#6 Irrigator and or Equipment"],
      ["1007", "#7 Irrigator and or Equipment"],
      ["1008", "#8 Irrigator and or Equipment"],
      ["1009", "#9 Irrigator and or Equipment"],
      ["1010", "#10 Irrigator and or Equipment"],
      ["1011", "#11 Irrigator and or Equipment"],
      ["1012", "#12 Irrigator and or Equipment"],
      ["1013", "#13 Irrigator and or Equipment"],
      ["1014", "#14 Irrigator and or Equipment"],
      ["1015", "#15 Irrigator and or Equipment"],
      ["1020", "D46 Irrigator and or Equipment"],
      ["1021", "D47 Irrigator and or Equipment"]
    ]
  }
];

const equipmentCategoryCounts = [
  ["Power units", 22],
  ["Tillage", 27],
  ["Harvest", 16],
  ["Hay", 18],
  ["Chemical", 9],
  ["Other", 17],
  ["Feedlot", 13],
  ["Misc.", 18],
  ["Trucks", 43],
  ["Vehicles", 11],
  ["Shop", 9],
  ["Vegetable", 31],
  ["Irrigation", 18]
];

const reviewQueue = [
  { id: "spray-stone-6", type: "Spray", field: "Stone Ridge 6", submitted: "41 min ago", operator: "02 - Weston", status: "Needs office review", lock: "Editable 47 hr left", alert: "REI active until May 20, 10:14 AM", decision: "" },
  { id: "tillage-e47", type: "Tillage", field: "E47", submitted: "Today 7:15 AM", operator: "06 - Coby", status: "Ready to approve", lock: "Editable 38 hr left", alert: "Pattern and implement captured", decision: "" },
  { id: "scouting-showan", type: "Scouting", field: "Showan", submitted: "Yesterday 4:28 PM", operator: "05 - Dave", status: "Scout report", lock: "Editable 22 hr left", alert: "Send text alert to Weston", decision: "" }
];

const chemicalProducts = [
  {
    id: "boundary",
    name: "Boundary 6.5 EC",
    epa: "100-1162",
    rei: "24 hours",
    phi: "60 days",
    rup: "No",
    source: "EPA PPLS label match",
    active: "S-metolachlor + metribuzin"
  },
  {
    id: "dual",
    name: "Dual II Magnum",
    epa: "100-818",
    rei: "24 hours",
    phi: "Check crop label",
    rup: "No",
    source: "EPA PPLS label match",
    active: "S-metolachlor"
  }
];

const fertilizerProducts = [
  {
    id: "dry-blend",
    name: "Dry Fertilizer Blend",
    source: "Custom dry analysis",
    form: "Dry",
    rateUnit: "lb/ac",
    nutrients: { n: "18", p: "46", k: "0", s: "6", zn: "0", b: "0" }
  },
  {
    id: "uan",
    name: "UAN 32%",
    source: "Common liquid fertilizer",
    form: "Liquid",
    rateUnit: "gal/ac",
    nutrients: { n: "32", p: "0", k: "0", s: "0", zn: "0", b: "0" }
  },
  {
    id: "thiosol",
    name: "Thiosol 12-0-0-26",
    source: "Common liquid fertilizer",
    form: "Liquid",
    rateUnit: "gal/ac",
    nutrients: { n: "12", p: "0", k: "0", s: "26", zn: "0", b: "0" }
  },
  {
    id: "liquid-blend",
    name: "Liquid Fertilizer Blend",
    source: "Manual nutrient entry",
    form: "Liquid",
    rateUnit: "gal/ac",
    nutrients: { n: "", p: "", k: "", s: "", zn: "", b: "" }
  }
];

const weather = {
  station: "Monte Vista Station",
  temp: "64 F",
  wind: "NE 6 mph",
  humidity: "34%",
  captured: "8:42 AM",
  note: "Auto-filled from nearest station"
};

const history = [
  ["Spray", "May 19", "Boundary 6.5 EC, 24 fl oz/ac, pattern 102 degrees", "danger"],
  ["Fertilizer", "May 14", "Dry blend, 350 lb/ac, straight 90 degrees", "amber"],
  ["Tillage", "Apr 28", "Vertical till, contour pass around pivot track", ""],
  ["Scouting", "Apr 23", "Volunteer grain along west ditch, photo note saved", ""]
];

const harvestLoads = [
  {
    id: "harvest-showan-2025-1",
    fieldId: "showan",
    cropYear: "2025",
    crop: "Potatoes",
    loadNumber: 1,
    driver: "10 - Temp Employee",
    truck: "Truck 221",
    emptyWeight: 28000,
    loadedWeight: 74200,
    netWeight: 46200,
    destination: "Cellar 4",
    time: "Oct 3, 2025, 10:42 AM",
    photo: "Scale photo attached"
  },
  {
    id: "harvest-showan-2025-2",
    fieldId: "showan",
    cropYear: "2025",
    crop: "Potatoes",
    loadNumber: 2,
    driver: "10 - Temp Employee",
    truck: "Truck 221",
    emptyWeight: 28000,
    loadedWeight: 75680,
    netWeight: 47680,
    destination: "Cellar 4",
    time: "Oct 3, 2025, 11:18 AM",
    photo: "Scale photo attached"
  }
];

const irrigationSetups = [
  { fieldId: "stone-6", equipment: "1000 - Center Pivot 12", baseInchesAt100: 0.25, lastDirection: "Forward", lastPercent: 20 },
  { fieldId: "e47", equipment: "1015 - #15 Irrigator and or Equipment", baseInchesAt100: 0.30, lastDirection: "Reverse", lastPercent: 35 },
  { fieldId: "showan", equipment: "1020 - D46 Irrigator and or Equipment", baseInchesAt100: 0.22, lastDirection: "Forward", lastPercent: 25 }
];

const irrigationRecords = [
  {
    id: "irr-stone-6-2026-1",
    fieldId: "stone-6",
    cropYear: "2026",
    crop: "Grain",
    equipment: "1000 - Center Pivot 12",
    direction: "Forward",
    percent: 20,
    inches: 1.25,
    rainEvent: true,
    rainInches: 0.25,
    chemigator: false,
    fertigator: true,
    time: "May 18, 2026, 6:30 AM",
    note: "Fertigator running; rain event included"
  }
];

const fuelSources = [
  { id: "silver", name: "Silver tank", fuelType: "Dyed diesel", capacity: 6000, remaining: 3200, lowThreshold: 500, status: "Ready" },
  { id: "blue", name: "Blue tank", fuelType: "Dyed diesel", capacity: 6000, remaining: 4000, lowThreshold: 500, status: "Ready" },
  { id: "green", name: "Green tank", fuelType: "Clear diesel", capacity: 4000, remaining: 1800, lowThreshold: 400, status: "Ready" },
  { id: "ground-gas", name: "Ground gas tank", fuelType: "Gasoline", capacity: 1000, remaining: 620, lowThreshold: 150, status: "Ready" },
  { id: "stand-gas", name: "Stand gas tank", fuelType: "Gasoline", capacity: 500, remaining: 210, lowThreshold: 100, status: "Watch" },
  { id: "kerosene", name: "Kerosene / No. 1 tank", fuelType: "No. 1 diesel / kerosene", capacity: 500, remaining: 95, lowThreshold: 100, status: "Low" },
  { id: "other", name: "Other", fuelType: "Other", capacity: 0, remaining: 0, lowThreshold: 0, status: "Manual" }
];

const fuelEntries = [
  {
    id: "fuel-2026-001",
    sourceId: "blue",
    sourceName: "Blue tank",
    fuelType: "Dyed diesel",
    equipment: "005 - 8260R JD tractor",
    gallons: 34.3,
    meterReading: "",
    process: "Harvesting",
    haulingType: "",
    implement: "830 - 6631 2025 Spudnik Air Sep Potato Harvester",
    fieldId: "",
    operator: "06 - Coby",
    dateTime: "May 19, 2026, 12:17 AM",
    photo: "No photo",
    status: "Reviewed",
    warning: "Engine hours / odometer is blank."
  },
  {
    id: "fuel-2026-002",
    sourceId: "blue",
    sourceName: "Blue tank",
    fuelType: "Dyed diesel",
    equipment: "014 - 326D JD Skidsteer",
    gallons: 25.9,
    meterReading: "",
    process: "Other",
    haulingType: "",
    implement: "",
    fieldId: "",
    operator: "12 - Vernon",
    dateTime: "Today, 10:23 AM",
    photo: "Pump photo attached",
    status: "Needs Review",
    warning: "Engine hours / odometer is blank."
  }
];

const outboundCommodities = [
  { name: "Potatoes", defaultUnit: "cwt", bushelWeight: 60 },
  { name: "Grain", defaultUnit: "bushel", bushelWeight: 60 },
  { name: "Rocks", defaultUnit: "ton", bushelWeight: 2000 },
  { name: "Manure", defaultUnit: "ton", bushelWeight: 2000 },
  { name: "Fertilizer", defaultUnit: "ton", bushelWeight: 2000 },
  { name: "Seed", defaultUnit: "lb", bushelWeight: 60 },
  { name: "Hay", defaultUnit: "ton", bushelWeight: 60 },
  { name: "Screenings", defaultUnit: "ton", bushelWeight: 60 },
  { name: "Other", defaultUnit: "lb", bushelWeight: 60 }
];

const outboundDirections = ["Outbound", "Inbound"];

const outboundBushelCommodities = [
  { name: "Wheat", poundsPerBushel: 60 },
  { name: "Barley", poundsPerBushel: 48 },
  { name: "Canola", poundsPerBushel: 50 },
  { name: "Triticale", poundsPerBushel: 56 },
  { name: "Rye", poundsPerBushel: 56 },
  { name: "Other", poundsPerBushel: 60 }
];

const outboundUnits = [
  { code: "lb", label: "Pound", kind: "weight", poundsPerUnit: 1, description: "per pound" },
  { code: "ton", label: "Ton", kind: "weight", poundsPerUnit: 2000, description: "per ton" },
  { code: "cwt", label: "CWT", kind: "weight", poundsPerUnit: 100, description: "per 100 lb" },
  { code: "bushel", label: "BU", kind: "commodityWeight", poundsPerUnit: "", description: "per bushel of commodity" },
  { code: "each", label: "Each", kind: "count", poundsPerUnit: "", description: "per item" },
  { code: "bale", label: "Bale", kind: "count", poundsPerUnit: "", description: "per bale" },
  { code: "load", label: "Load", kind: "count", poundsPerUnit: "", description: "per load" }
];

const outboundCustomers = [
  "Valley Produce",
  "San Luis Valley Co-op",
  "Rocky Mountain Compost",
  "Custom Haul Customer",
  "Fertilizer supplier",
  "Seed supplier",
  "Internal transfer",
  "Other"
];

const outboundDestinations = [
  "Monte Vista Warehouse",
  "Cellar 4",
  "Customer yard",
  "Processor",
  "Gravel pit",
  "Manure stockpile",
  "Fertilizer shed",
  "Seed warehouse",
  "Farm yard",
  "Other"
];

const outboundTickets = [
  {
    id: "outbound-2026-001",
    direction: "Outbound",
    commodity: "Potatoes",
    bushelCommodity: "",
    customer: "Valley Produce",
    destination: "Monte Vista Warehouse",
    truck: "Truck 221",
    carrier: "Stone Ridge Farms",
    carrierDriver: "Mike H.",
    ticketNumber: "VP-1042",
    grossWeight: 74200,
    tareWeight: 28000,
    netWeight: 46200,
    unit: "cwt",
    quantity: 462,
    unitPrice: "",
    loader: "10 - Temp Employee",
    billingStatus: "Ready for invoice",
    dateTime: "May 20, 2026, 9:12 AM",
    photo: "Load ticket photo attached",
    taggedFieldId: "showan",
    taggedCropYear: "2026",
    notes: "Paper ticket scanned and verified."
  },
  {
    id: "outbound-2026-002",
    direction: "Outbound",
    commodity: "Rocks",
    bushelCommodity: "",
    customer: "Rocky Mountain Compost",
    destination: "Gravel pit",
    truck: "Truck 318",
    carrier: "Stone Ridge Farms",
    carrierDriver: "Local driver",
    ticketNumber: "RK-882",
    grossWeight: 68400,
    tareWeight: 30200,
    netWeight: 38200,
    unit: "ton",
    quantity: 19.1,
    unitPrice: "",
    loader: "06 - Coby",
    billingStatus: "Uninvoiced",
    dateTime: "May 18, 2026, 3:44 PM",
    photo: "Scale ticket photo attached",
    taggedFieldId: "",
    taggedCropYear: "",
    notes: "Rock hauling from yard pile."
  },
  {
    id: "inbound-2026-001",
    direction: "Inbound",
    commodity: "Fertilizer",
    bushelCommodity: "",
    customer: "Fertilizer supplier",
    destination: "Fertilizer shed",
    truck: "Truck 221",
    carrier: "Supplier truck",
    carrierDriver: "Ticket driver",
    ticketNumber: "FS-551",
    grossWeight: 64000,
    tareWeight: 30200,
    netWeight: 33800,
    unit: "ton",
    quantity: 16.9,
    unitPrice: "",
    loader: "02 - Weston",
    billingStatus: "Ready for bill review",
    dateTime: "May 17, 2026, 11:06 AM",
    photo: "Inbound scale ticket photo attached",
    taggedFieldId: "stone-6",
    taggedCropYear: "2026",
    notes: "Incoming fertilizer ticket ready to match with supplier bill."
  }
];

const fieldReports = [
  {
    id: "spray-2026-stone-6",
    fieldId: "stone-6",
    type: "Spray",
    date: "May 19, 2026",
    cropYear: "2026",
    title: "Boundary 6.5 EC tank mix",
    summary: "Boundary 6.5 EC at 24 fl oz/ac with Dual II Magnum, 10 gal/ac carrier, pattern 102 degrees.",
    badge: "REI clear",
    details: [
      ["Products", "Boundary 6.5 EC; Dual II Magnum"],
      ["Weather", "64 F, NE 6 mph, 34% humidity"],
      ["Applicator", "02 - Weston, RUP license CO-PA-024681"],
      ["Map", "Whole field, saved boundary, 102 degree pass"]
    ]
  },
  {
    id: "fert-2026-stone-6",
    fieldId: "stone-6",
    type: "Fertilizer",
    date: "May 14, 2026",
    cropYear: "2026",
    title: "Dry blend before irrigation",
    summary: "18-46-0 plus S 6 at 350 lb/ac, spread whole field east-west.",
    badge: "Nutrients",
    details: [
      ["Analysis", "N 18, P 46, K 0, S 6, Zn 0, B 0"],
      ["Rate", "350 lb/ac"],
      ["Equipment", "504 - Terra-Gator"],
      ["Map", "Whole field, 90 degree pass"]
    ]
  },
  {
    id: "till-2026-stone-6",
    fieldId: "stone-6",
    type: "Tillage",
    date: "Apr 28, 2026",
    cropYear: "2026",
    title: "Vertical till residue sizing",
    summary: "8260R with Xpress disc, 3.5 in depth, one pass, soil fit.",
    badge: "Tillage",
    details: [
      ["Power unit", "005 - 8260R JD tractor"],
      ["Implement", "107 - Xpress Great Plains Xpress Disc"],
      ["Settings", "3.5 in depth, 6.2 mph, rolling basket"],
      ["Notes", "Watch wet spot along north edge"]
    ]
  },
  {
    id: "spray-2024-stone-6",
    fieldId: "stone-6",
    type: "Spray",
    date: "Jun 3, 2024",
    cropYear: "2024",
    title: "Volunteer grain cleanup",
    summary: "Follow-up herbicide pass along west ditch after scouting note.",
    badge: "2 yrs",
    details: [
      ["Products", "Herbicide cleanup mix"],
      ["Reason", "Volunteer grain and kochia pressure"],
      ["Map", "Partial zone along west ditch"],
      ["Outcome", "Good control in follow-up scout note"]
    ]
  },
  {
    id: "scout-2026-e47",
    fieldId: "e47",
    type: "Scouting",
    date: "May 18, 2026",
    cropYear: "2026",
    title: "Pivot track wet spot",
    summary: "Small wet area near pivot track. REI caution clears today at 6:20 PM.",
    badge: "Caution",
    details: [
      ["Issue", "Water / irrigation, low severity"],
      ["Media", "Photo and voice note attached"],
      ["Safety", "REI caution shown before scouting"],
      ["Follow-up", "Check after next irrigation set"]
    ]
  },
  {
    id: "till-2025-e47",
    fieldId: "e47",
    type: "Tillage",
    date: "Oct 2, 2025",
    cropYear: "2025",
    title: "Fall residue pass",
    summary: "Circle pivot pattern after hay removal, one shallow pass.",
    badge: "2025",
    details: [
      ["Pattern", "Circle pivot"],
      ["Purpose", "Residue management"],
      ["Operator", "06 - Coby"],
      ["Condition", "Dry surface, medium residue"]
    ]
  },
  {
    id: "spray-2026-showan",
    fieldId: "showan",
    type: "Spray",
    date: "May 19, 2026",
    cropYear: "2026",
    title: "Potato pre-emerge application",
    summary: "REI active until May 20 at 10:14 AM. Scout view red-flags field.",
    badge: "REI active",
    details: [
      ["Products", "Boundary 6.5 EC"],
      ["REI", "Do not enter until May 20, 10:14 AM"],
      ["Weather", "Captured from nearest station"],
      ["Map", "Saved field boundary"]
    ]
  },
  {
    id: "fert-2025-showan",
    fieldId: "showan",
    type: "Fertilizer",
    date: "Apr 22, 2025",
    cropYear: "2025",
    title: "Liquid starter blend",
    summary: "Liquid fertilizer blend, custom NPKSB analysis, planter in-furrow.",
    badge: "2025",
    details: [
      ["Blend", "Liquid custom fertilizer"],
      ["Method", "Planter in-furrow"],
      ["Rate", "15 gal/ac"],
      ["Notes", "Kept separate from chemical REI records"]
    ]
  },
  {
    id: "harvest-2025-showan",
    fieldId: "showan",
    type: "Harvest",
    date: "Oct 3, 2025",
    cropYear: "2025",
    title: "Potato load log",
    summary: "2 loads logged from scale photos, 93,880 lb net to Cellar 4.",
    badge: "2 loads",
    details: [
      ["Crop", "Potatoes"],
      ["Loads", "2 loads, 93,880 lb net"],
      ["Destination", "Cellar 4"],
      ["Proof", "Scale photos attached to each load"]
    ]
  },
  {
    id: "irr-2026-stone-6",
    fieldId: "stone-6",
    type: "Irrigation",
    date: "May 18, 2026",
    cropYear: "2026",
    title: "Pivot irrigation set",
    summary: "Forward at 20%, estimated 1.25 inches, fertigator running.",
    badge: "1.50 in",
    details: [
      ["Equipment", "1000 - Center Pivot 12"],
      ["Direction", "Forward"],
      ["Water", "20% speed, 1.25 inches irrigation plus 0.25 inches rain"],
      ["Fertigator", "Running"]
    ]
  }
];

const routes = {
  home: renderHome,
  "field-step": renderFieldStep,
  "gps-boundary": renderGpsBoundaryDraft,
  "harvest-field": renderHarvestFieldPick,
  "pattern-step": renderPatternStep,
  "product-step": renderProductStep,
  "harvest-load": renderHarvestLoad,
  "harvest-saved": renderHarvestSaved,
  fuel: renderFuelLog,
  "fuel-saved": renderFuelSaved,
  "irrigation-field": renderIrrigationFieldPick,
  "irrigation-log": renderIrrigationLog,
  "irrigation-saved": renderIrrigationSaved,
  outbound: renderOutboundLog,
  "outbound-saved": renderOutboundSaved,
  "outbound-billing": renderOutboundBilling,
  "weather-step": renderWeatherStep,
  "review-step": renderReviewStep,
  "saved-step": renderSavedStep,
  "field-history": renderFieldHistory,
  "data-center": renderDataCenter,
  reports: renderReports,
  "report-detail": renderReportDetail,
  "scout-view": renderScoutView,
  "scout-entry": renderScoutEntry,
  "scout-saved": renderScoutSaved,
  "office-review": renderOfficeReview,
  admin: renderAdmin,
  "data-dictionary": renderDataDictionary,
  placeholder: renderPlaceholder
};

function currentField() {
  return fields.find((field) => field.id === state.fieldId && field.status !== "Archived") || activeFields()[0] || fields[0];
}

function activeFields() {
  return fields.filter((field) => field.status !== "Archived");
}

function reportField() {
  return fields.find((field) => field.id === state.selectedReportField) || fields[0];
}

function reportsForField(fieldId = state.selectedReportField) {
  return fieldReports.filter((report) => report.fieldId === fieldId);
}

function reportsForSelectedSeason() {
  return fieldReports.filter((report) => report.fieldId === state.selectedReportField && report.cropYear === state.selectedReportYear);
}

function seasonsForField(fieldId = state.selectedReportField) {
  return fieldSeasons.filter((season) => season.fieldId === fieldId);
}

function selectedFieldSeason() {
  return fieldSeasons.find((season) => season.fieldId === state.selectedReportField && season.cropYear === state.selectedReportYear) || seasonsForField()[0] || fieldSeasons[0];
}

function activeSeasonForField(fieldId = state.fieldId) {
  return fieldSeasons.find((season) => season.fieldId === fieldId && season.status === "Active crop")
    || fieldSeasons.find((season) => season.fieldId === fieldId)
    || fieldSeasons[0];
}

function selectedReport() {
  return fieldReports.find((report) => report.id === state.selectedReportId) || reportsForField()[0] || fieldReports[0];
}

function setReportField(fieldId) {
  state.selectedReportField = fieldId;
  const firstSeason = seasonsForField(fieldId)[0];
  if (firstSeason) state.selectedReportYear = firstSeason.cropYear;
  const firstReport = reportsForSelectedSeason()[0] || reportsForField(fieldId)[0];
  if (firstReport) state.selectedReportId = firstReport.id;
  render();
}

function setReportYear(cropYear) {
  state.selectedReportYear = cropYear;
  const firstReport = reportsForSelectedSeason()[0] || reportsForField()[0];
  if (firstReport) state.selectedReportId = firstReport.id;
  render();
}

function openReport(reportId) {
  state.selectedReportId = reportId;
  const report = selectedReport();
  if (report) state.selectedReportField = report.fieldId;
  setRoute("report-detail");
}

function currentProduct() {
  const list = state.operation === "Fertilizer" ? fertilizerProducts : chemicalProducts;
  return list.find((product) => product.id === state.productId) || list[0];
}

function equipmentKey(category, number) {
  return `${category}::${number}`;
}

function equipmentIsArchived(category, number) {
  return state.archivedEquipment.includes(equipmentKey(category, number));
}

function activeEquipmentItems(category) {
  const group = equipmentCatalog.find((item) => item.category === category);
  return group ? group.items.filter(([number]) => !equipmentIsArchived(category, number)) : [];
}

function equipmentItems(category) {
  return activeEquipmentItems(category).map(([number, name]) => `${number} - ${name}`);
}

function harvestNetWeight() {
  const loaded = Number.parseFloat(String(state.harvest.loadedWeight).replace(/,/g, "")) || 0;
  const empty = Number.parseFloat(String(state.harvest.emptyWeight).replace(/,/g, "")) || 0;
  return Math.max(0, loaded - empty);
}

function formatPounds(value) {
  return `${Math.round(value).toLocaleString("en-US")} lb`;
}

function parseNumber(value) {
  return Number.parseFloat(String(value).replace(/,/g, "")) || 0;
}

function formatGallons(value) {
  return `${Number(value || 0).toLocaleString("en-US", { maximumFractionDigits: 1 })} gal`;
}

function optionsWithOther(options, current) {
  const base = options.filter((item) => item !== "Other");
  const result = [...base];
  if (current && current !== "Other" && !result.includes(current)) result.push(current);
  result.push("Other");
  return result;
}

function optionMarkup(options, current) {
  return options.map((item) => `<option ${current === item ? "selected" : ""}>${item}</option>`).join("");
}

function fuelSourceOptions() {
  const hasSelected = fuelSources.some((source) => source.id === state.fuel.sourceId);
  if (hasSelected || !state.fuel.sourceId) return fuelSources;
  const otherIndex = fuelSources.findIndex((source) => source.id === "other");
  const customSource = {
    id: state.fuel.sourceId,
    name: state.fuel.sourceId,
    fuelType: state.fuel.fuelType || "Other",
    capacity: 0,
    remaining: 0,
    lowThreshold: 0,
    status: "One-off"
  };
  const insertAt = otherIndex >= 0 ? otherIndex : fuelSources.length;
  return [...fuelSources.slice(0, insertAt), customSource, ...fuelSources.slice(insertAt)];
}

function selectedFuelSource() {
  return fuelSourceOptions().find((source) => source.id === state.fuel.sourceId) || fuelSources[0];
}

function fuelEquipmentOptions() {
  return optionsWithOther([
    ...equipmentItems("Tractors and Other Power Units"),
    "221 - Truck 221",
    "318 - Truck 318",
    "Service pickup",
    "Unknown equipment"
  ], state.fuel.equipment);
}

function fuelImplementOptions() {
  return optionsWithOther(["None", ...equipmentItems("Tillage Equipment"), "830 - 6631 2025 Spudnik Air Sep Potato Harvester", "Unknown implement"], state.fuel.implement);
}

function fuelProcessTypeOptions(process = state.fuel.process) {
  const options = {
    Tillage: ["Disc", "Harrow", "Ripper", "Plow", "Cultivate", "Rock picking", "Other"],
    Planting: ["Potatoes", "Grain", "Cover crop", "In-furrow support", "Other"],
    Spraying: ["Ground rig", "Chemigation support", "Cultivator spray", "Nurse trailer", "Other"],
    Harvesting: ["Potatoes", "Grain", "Hay", "Rock picking", "Other"],
    Hauling: ["Hay", "Grain", "Fertilizer", "Cattle", "Equipment", "Commodities", "Other"],
    Other: ["Yard", "Shop", "Road", "General", "Other"]
  };
  return options[process] || options.Other;
}

function fuelFieldProcesses() {
  return ["Tillage", "Planting", "Spraying", "Harvesting"];
}

function fuelWarnings() {
  const warnings = [];
  if (!parseNumber(state.fuel.gallons)) warnings.push("Gallons are blank.");
  if (!state.fuel.meterReading) warnings.push("Engine hours / odometer is blank.");
  if (state.fuel.tagField && fuelFieldProcesses().includes(state.fuel.process) && !parseNumber(state.fuel.acresWorked)) warnings.push("Acres worked is blank for field work.");
  if (state.fuel.process === "Hauling" && !parseNumber(state.fuel.milesTraveled)) warnings.push("Miles traveled is blank for hauling.");
  return warnings;
}

function fuelEntriesForSource(sourceId = state.fuel.sourceId) {
  return fuelEntries.filter((entry) => entry.sourceId === sourceId);
}

function currentOutboundCommodity() {
  return outboundCommodities.find((item) => item.name === state.outbound.commodity) || {
    name: state.outbound.commodity || "Other",
    defaultUnit: state.outbound.unit || "lb",
    bushelWeight: 60
  };
}

function currentOutboundUnit(unitCode = state.outbound.unit) {
  return outboundUnits.find((unit) => unit.code === unitCode) || outboundUnits[0];
}

function currentOutboundBushelCommodity(name = state.outbound.bushelCommodity) {
  return outboundBushelCommodities.find((item) => item.name === name) || { name, poundsPerBushel: 60 };
}

function outboundDirectionCopy(direction = state.outbound.direction) {
  const isInbound = direction === "Inbound";
  return {
    noun: isInbound ? "inbound ticket" : "outbound ticket",
    routeTitle: "Outbound / inbound",
    routeSubtitle: isInbound
      ? "Scan an incoming ticket, verify it, and send it to bill review."
      : "Scan an outgoing ticket, verify it, and send it to invoice review.",
    scanButton: isInbound ? "Scan inbound ticket" : "Scan outbound ticket",
    partyLabel: isInbound ? "Vendor / supplier" : "Customer",
    destinationLabel: isInbound ? "Receiving location" : "Destination",
    statusLabel: isInbound ? "Bill status" : "Invoice status",
    reviewRoute: isInbound ? "Open bill queue" : "Open invoice queue",
    savedTitle: isInbound ? "Inbound saved" : "Outbound saved",
    savedSubtitle: isInbound ? "Ticket is ready for office bill review." : "Ticket is ready for office review and invoicing.",
    savedToast: isInbound ? "Inbound ticket saved." : "Outbound ticket saved.",
    queueTitle: isInbound ? "Bill queue updated" : "Invoice queue updated",
    reportType: isInbound ? "Inbound" : "Outbound",
    fieldTagNote: isInbound ? "This inbound ticket will also show in field reports." : "This outbound ticket will also show in field reports."
  };
}

function outboundStatusOptions(direction = state.outbound.direction) {
  if (direction === "Inbound") return ["Unbilled", "Ready for bill review", "Bill entered", "Do not bill", "Internal record only"];
  return ["Uninvoiced", "Ready for invoice", "Invoiced", "Do not invoice", "Internal record only"];
}

function outboundDefaultStatus(direction = state.outbound.direction) {
  return direction === "Inbound" ? "Ready for bill review" : "Ready for invoice";
}

function outboundClosedStatus(direction = state.outbound.direction) {
  return direction === "Inbound" ? "Bill entered" : "Invoiced";
}

function outboundNetWeight() {
  const enteredNet = parseNumber(state.outbound.netWeight);
  if (enteredNet) return enteredNet;

  const gross = parseNumber(state.outbound.grossWeight);
  const tare = parseNumber(state.outbound.tareWeight);
  if (gross && tare) return Math.max(0, gross - tare);
  return 0;
}

function outboundUnitDivisor(unitCode = state.outbound.unit, commodityName = state.outbound.commodity, bushelCommodityName = state.outbound.bushelCommodity) {
  const unit = currentOutboundUnit(unitCode);
  const commodity = outboundCommodities.find((item) => item.name === commodityName) || currentOutboundCommodity();
  if (unit.kind === "commodityWeight") return currentOutboundBushelCommodity(bushelCommodityName).poundsPerBushel || commodity.bushelWeight || 60;
  return Number(unit.poundsPerUnit) || 0;
}

function outboundIsWeightUnit(unitCode = state.outbound.unit) {
  const unit = currentOutboundUnit(unitCode);
  return unit.kind === "weight" || unit.kind === "commodityWeight";
}

function outboundBillingQuantity(pounds = outboundNetWeight(), unitCode = state.outbound.unit, commodityName = state.outbound.commodity, manualQuantity = state.outbound.quantity, bushelCommodityName = state.outbound.bushelCommodity) {
  const enteredQuantity = parseNumber(manualQuantity);
  if (enteredQuantity) return enteredQuantity;
  if (!outboundIsWeightUnit(unitCode)) return 0;
  const divisor = outboundUnitDivisor(unitCode, commodityName, bushelCommodityName);
  if (!pounds || !divisor) return 0;
  return pounds / divisor;
}

function outboundConvertedAmount(pounds = outboundNetWeight(), unit = state.outbound.unit, commodityName = state.outbound.commodity, manualQuantity = state.outbound.quantity, bushelCommodityName = state.outbound.bushelCommodity) {
  const quantity = outboundBillingQuantity(pounds, unit, commodityName, manualQuantity, bushelCommodityName);
  if (!quantity) return outboundIsWeightUnit(unit) ? "Ticket weight needed" : "Units needed";
  const unitLabel = currentOutboundUnit(unit).label;
  return `${quantity.toLocaleString("en-US", { maximumFractionDigits: unit === "bushel" ? 1 : 2 })} ${unitLabel}`;
}

function outboundBillingTickets() {
  return outboundTickets.filter((ticket) => {
    const directionMatch = state.outboundBillingDirection === "All" || ticket.direction === state.outboundBillingDirection;
    const customerMatch = state.outboundBillingCustomer === "All customers" || ticket.customer === state.outboundBillingCustomer;
    const periodMatch = state.outboundBillingPeriod === "All open" ? ticket.billingStatus !== outboundClosedStatus(ticket.direction) : true;
    return directionMatch && customerMatch && periodMatch;
  });
}

function stateTargetValue(targetPath) {
  const [group, field] = targetPath.split(".");
  return state[group]?.[field] || "";
}

function setStateTargetValue(targetPath, value) {
  const [group, field] = targetPath.split(".");
  if (!state[group] || !field) return;
  state[group][field] = value;
}

function openOtherPrompt({ module, listName, targetPath, source, help }) {
  state.otherPrompt = {
    module,
    listName,
    targetPath,
    source,
    help: help || "Use this once now. Admin can review it later and decide whether it belongs in the permanent dropdown list."
  };
  state.otherDraftValue = stateTargetValue(targetPath) === "Other" || stateTargetValue(targetPath) === "other" ? "" : stateTargetValue(targetPath);
}

function maybeOpenOtherPrompt(scope, field, value) {
  if (value !== "Other" && value !== "other") return;
  const prompts = {
    "outbound.commodity": ["Loads", "Commodity", "Outbound / inbound ticket"],
    "outbound.bushelCommodity": ["Loads", "Bushel commodity", "Outbound / inbound ticket"],
    "outbound.customer": ["Loads", "Customer / vendor", "Outbound / inbound ticket"],
    "outbound.destination": ["Loads", "Destination / receiving location", "Outbound / inbound ticket"],
    "fuel.sourceId": ["Fuel", "Fuel source", "Fuel log"],
    "fuel.equipment": ["Fuel", "Equipment", "Fuel log"],
    "fuel.process": ["Fuel", "Process", "Fuel log"],
    "fuel.processType": ["Fuel", "Process type", "Fuel log"],
    "fuel.implement": ["Fuel", "Implement / attachment", "Fuel log"]
  };
  const prompt = prompts[`${scope}.${field}`];
  if (!prompt) return;
  openOtherPrompt({
    module: prompt[0],
    listName: prompt[1],
    targetPath: `${scope}.${field}`,
    source: prompt[2]
  });
}

function saveOtherValue() {
  if (!state.otherPrompt) return;
  const value = state.otherDraftValue.trim();
  if (!value) {
    state.adminNotice = "Type the one-off value before saving it for admin review.";
    render();
    return;
  }

  setStateTargetValue(state.otherPrompt.targetPath, value);
  state.otherRequests.unshift({
    id: `other-${Date.now()}`,
    module: state.otherPrompt.module,
    listName: state.otherPrompt.listName,
    value,
    source: state.otherPrompt.source,
    status: "Needs admin decision",
    requestedBy: state.operator,
    requestedAt: "Just now"
  });
  state.adminNotice = `${value} saved as a one-off ${state.otherPrompt.listName.toLowerCase()} and queued for admin review.`;
  state.otherPrompt = null;
  state.otherDraftValue = "";
  render();
}

function cancelOtherValue() {
  state.otherPrompt = null;
  state.otherDraftValue = "";
  render();
}

function addOtherRequestToList(requestId) {
  const request = state.otherRequests.find((item) => item.id === requestId);
  if (!request) return;
  if (request.module === "Loads" && request.listName === "Customer / vendor" && !outboundCustomers.includes(request.value)) {
    outboundCustomers.splice(Math.max(0, outboundCustomers.length - 1), 0, request.value);
  }
  if (request.module === "Loads" && request.listName === "Destination / receiving location" && !outboundDestinations.includes(request.value)) {
    outboundDestinations.splice(Math.max(0, outboundDestinations.length - 1), 0, request.value);
  }
  if (request.module === "Loads" && request.listName === "Commodity" && !outboundCommodities.some((item) => item.name === request.value)) {
    outboundCommodities.splice(Math.max(0, outboundCommodities.length - 1), 0, { name: request.value, defaultUnit: "lb", bushelWeight: 60 });
  }
  if (request.module === "Loads" && request.listName === "Bushel commodity" && !outboundBushelCommodities.some((item) => item.name === request.value)) {
    outboundBushelCommodities.splice(Math.max(0, outboundBushelCommodities.length - 1), 0, { name: request.value, poundsPerBushel: 60 });
  }
  if (request.module === "Fuel" && request.listName === "Fuel source" && !fuelSources.some((item) => item.name === request.value)) {
    const sourceId = request.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    fuelSources.splice(Math.max(0, fuelSources.length - 1), 0, {
      id: sourceId,
      name: request.value,
      fuelType: "Other",
      capacity: 0,
      remaining: 0,
      lowThreshold: 0,
      status: "Needs setup"
    });
    if (state.fuel.sourceId === request.value) state.fuel.sourceId = sourceId;
  }
  request.status = "Added to admin list";
  state.adminNotice = `${request.value} added to the ${request.listName.toLowerCase()} list.`;
  render();
}

function markOtherRequestOneOff(requestId) {
  const request = state.otherRequests.find((item) => item.id === requestId);
  if (!request) return;
  request.status = "One-off only";
  state.adminNotice = `${request.value} kept as a one-off. It will not clutter the dropdown list.`;
  render();
}

function nextHarvestLoadNumber(fieldId = state.fieldId, cropYear = activeSeasonForField(fieldId).cropYear) {
  const loads = harvestLoads.filter((load) => load.fieldId === fieldId && load.cropYear === cropYear);
  return loads.length ? Math.max(...loads.map((load) => load.loadNumber)) + 1 : 1;
}

function harvestLoadsForSeason(fieldId, cropYear) {
  return harvestLoads.filter((load) => load.fieldId === fieldId && load.cropYear === cropYear);
}

function irrigationSetupForField(fieldId = state.fieldId) {
  return irrigationSetups.find((setup) => setup.fieldId === fieldId) || irrigationSetups[0];
}

function irrigationRecordsForSeason(fieldId, cropYear) {
  return irrigationRecords.filter((record) => record.fieldId === fieldId && record.cropYear === cropYear);
}

function irrigationInchesFromPercent(percent, baseInchesAt100) {
  const parsedPercent = Number.parseFloat(percent) || 0;
  const base = Number.parseFloat(baseInchesAt100) || 0;
  if (!parsedPercent || !base) return 0;
  return base / (parsedPercent / 100);
}

function irrigationPercentFromInches(inches, baseInchesAt100) {
  const parsedInches = Number.parseFloat(inches) || 0;
  const base = Number.parseFloat(baseInchesAt100) || 0;
  if (!parsedInches || !base) return 0;
  return (base / parsedInches) * 100;
}

function isWaterlessIrrigationDirection(direction = state.irrigation.direction) {
  return direction === "Dry run" || direction === "Stationary / parked";
}

function formatInches(value) {
  return `${Number(value || 0).toFixed(2)} in`;
}

function irrigationRainInches() {
  return state.irrigation.rainEvent ? Number.parseFloat(state.irrigation.rainInches) || 0 : 0;
}

function irrigationTotalWaterInches() {
  return (Number.parseFloat(state.irrigation.inches) || 0) + irrigationRainInches();
}

function employeeOptions() {
  return employees.map((employee) => `${employee.number} - ${employee.name}`);
}

function selectedAdminUser() {
  return employees.find((employee) => employee.id === state.selectedAdminUser) || employees[1];
}

function rupSupervisor() {
  return employees.find((employee) => employee.id === state.rupSupervisorId) || employees.find((employee) => employee.rupLicense) || employees[1];
}

function rupSupervisorOptions() {
  return employees.filter((employee) => employee.rupLicense && employee.status !== "Suspended" && employee.status !== "Archived");
}

function applicationModeOptions() {
  if (state.operation === "Tillage") {
    return [
      "Tillage pass",
      "Primary tillage",
      "Secondary tillage",
      "Seedbed prep",
      "Residue management",
      "Cultivation"
    ];
  }

  if (state.operation === "Fertilizer") {
    return [
      "Dry spreader",
      "Liquid ground rig",
      "Chemigation / pivot",
      "Planter in-furrow",
      "Sidedress / cultivator",
      "Broadcast and incorporate"
    ];
  }

  return [
    "Ground sprayer",
    "Chemigation / pivot",
    "Cultivator-mounted spray",
    "Planter in-furrow",
    "ATV / spot spray"
  ];
}

function setRoute(route) {
  state.route = route;
  render();
}

function updateReviewDecision(id, decision) {
  const item = reviewQueue.find((candidate) => candidate.id === id);
  if (!item) return;

  if (decision === "approved") {
    item.status = "Approved by office";
    item.lock = "Locked";
    item.alert = "Approved by Weston just now. Record is read-only unless admin unlocks it.";
    item.decision = "approved";
    state.reviewNotice = `${item.type} record for ${item.field} approved and locked.`;
  } else {
    item.status = "Sent back for correction";
    item.lock = "Editable for operator";
    item.alert = "Returned to the operator with a fix request. Office review stays open.";
    item.decision = "sent-back";
    state.reviewNotice = `${item.type} record for ${item.field} sent back for correction.`;
  }

  render();
}

function updateSelectedUserField(field, value) {
  const user = selectedAdminUser();
  user[field] = value;
  state.adminNotice = `${user.name}'s admin card updated.`;
}

function pushUserHistory(user, event) {
  if (!user.statusHistory) user.statusHistory = [];
  user.statusHistory = [`${event} - just now`, ...user.statusHistory].slice(0, 6);
}

function toggleSelectedPermission(permission) {
  const user = selectedAdminUser();

  if (permission === "Admin settings") {
    user.admin = !user.admin;
  } else if (permission === "View all records") {
    user.view = user.view === "All records" ? "Assigned fields" : "All records";
  } else if (user.entry.includes(permission)) {
    user.entry = user.entry.filter((item) => item !== permission);
  } else {
    user.entry = [...user.entry, permission];
  }

    state.adminNotice = `${user.name}'s access changed.`;
  pushUserHistory(user, "Access changed");
  render();
}

function saveAdminUser() {
  const user = selectedAdminUser();
  state.adminNotice = `${user.number} - ${user.name} saved with ${user.access.toLowerCase()} access.`;
  pushUserHistory(user, "User setup saved");
  render();
}

function updateNewUserDraft(field, value) {
  state.newUserDraft[field] = value;
}

function toggleNewUserPermission(permission) {
  const draft = state.newUserDraft;
  if (permission === "View all records") {
    draft.view = draft.view === "All records" ? "Assigned fields" : "All records";
  } else if (permission === "Admin settings") {
    draft.admin = !draft.admin;
  } else if (draft.entry.includes(permission)) {
    draft.entry = draft.entry.filter((item) => item !== permission);
  } else {
    draft.entry = [...draft.entry, permission];
  }
  render();
}

function addNewUser() {
  const draft = state.newUserDraft;
  const name = draft.name.trim();
  const email = draft.email.trim();
  if (!name || !email) {
    state.adminNotice = "Name and email are needed before access can be created.";
    render();
    return;
  }

  const nextNumber = nextEmployeeNumber();
  const newUser = {
    id: `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now()}`,
    number: nextNumber,
    name,
    email,
    phone: draft.phone.trim(),
    role: draft.role,
    access: draft.access,
    entry: [...draft.entry],
    view: draft.view,
    admin: Boolean(draft.admin),
    rupLicense: draft.rupLicense.trim(),
    rupExpires: draft.rupExpires.trim(),
    status: "Active",
    expires: draft.expires || "Season end",
    statusHistory: [`Active - invited ${email}`]
  };

  employees.push(newUser);
  state.selectedAdminUser = newUser.id;
  state.adminNotice = `${nextNumber} - ${name} added. Invite access would be sent to ${email}.`;
  state.newUserDraft = {
    name: "New Crop Scout",
    email: "scout@example.com",
    phone: "(719) 555-0142",
    rupLicense: "",
    rupExpires: "",
    role: "Field scout",
    access: "Scout entry + view",
    view: "All records",
    expires: "Season end",
    entry: ["Scouting"]
  };
  render();
}

function nextEmployeeNumber() {
  const highest = employees.reduce((max, employee) => {
    const parsed = Number.parseInt(employee.number, 10);
    return Number.isNaN(parsed) ? max : Math.max(max, parsed);
  }, 0);
  return String(highest + 1).padStart(2, "0");
}

function toggleSelectedUserStatus() {
  const user = selectedAdminUser();
  if (user.status === "Suspended" || user.status === "Archived") {
    user.status = "Active";
    if (user.access === "No access") user.access = "View only";
    state.adminNotice = `${user.name}'s access restored.`;
    pushUserHistory(user, "Access restored");
  } else {
    user.status = "Suspended";
    user.access = "No access";
    user.entry = [];
    user.admin = false;
    state.adminNotice = `${user.name}'s access suspended. Existing records stay in history.`;
    pushUserHistory(user, "Access suspended");
  }
  render();
}

function archiveSelectedUser() {
  const user = selectedAdminUser();
  user.status = "Archived";
  user.access = "No access";
  user.entry = [];
  user.admin = false;
  state.adminNotice = `${user.name} archived. History remains tied to past records.`;
  pushUserHistory(user, "Archived");
  render();
}

function updateFieldDraft(field, value) {
  state.fieldDraft[field] = value;
}

function updateCropSeasonDraft(field, value) {
  state.cropSeasonDraft[field] = value;
  if (field === "fieldId") {
    const selectedField = fields.find((item) => item.id === value);
    if (selectedField) state.cropSeasonDraft.acres = String(selectedField.acres);
  }
}

function addCropSeason() {
  const draft = state.cropSeasonDraft;
  const field = fields.find((item) => item.id === draft.fieldId);
  if (!field || !draft.cropYear.trim() || !draft.crop.trim()) {
    state.adminNotice = "Field, crop year, and crop are needed before saving a crop season.";
    render();
    return;
  }

  const id = `${draft.fieldId}-${draft.cropYear}-${draft.crop.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${fieldSeasons.length + 1}`;
  fieldSeasons.unshift({
    id,
    fieldId: draft.fieldId,
    cropYear: draft.cropYear.trim(),
    crop: draft.crop.trim(),
    status: draft.status,
    acres: Number.parseFloat(draft.acres) || field.acres,
    start: draft.start.trim() || "Jan 1",
    end: draft.end.trim() || "Open",
    note: draft.note.trim() || "Crop season added from Admin."
  });

  field.crop = draft.crop.trim();
  state.adminNotice = `${field.name} ${draft.cropYear} crop season saved as ${draft.crop}.`;
  render();
}

function addFieldToBank() {
  const draft = state.fieldDraft;
  const name = draft.name.trim();
  const farm = draft.farm.trim();
  if (!name || !farm) {
    state.adminNotice = "Field name and farm are needed before saving a boundary.";
    render();
    return;
  }

  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `field-${fields.length + 1}`;
  fields.push({
    id: `${id}-${fields.length + 1}`,
    name,
    farm,
    crop: draft.crop.trim() || "Crop TBD",
    acres: Number.parseFloat(draft.acres) || 0,
    status: "Boundary saved",
    lastPattern: "No passes yet",
    rei: "Clear",
    boundaryVersion: draft.boundaryVersion || "v1",
    boundarySource: draft.source,
    boundaryNotes: draft.notes
  });

  state.adminNotice = `${name} added to the field bank as ${draft.boundaryVersion || "v1"}. Entry screens can use it, but job zones will not overwrite it.`;
  state.fieldId = fields[fields.length - 1].id;
  state.fieldDraft = {
    name: "North Pivot 12",
    farm: "Stone Ridge Farm",
    crop: "Potatoes",
    acres: "118",
    source: "Office map click",
    boundaryVersion: "v1",
    notes: "Permanent field boundary controlled by admin."
  };
  render();
}

function archiveField(fieldId) {
  const field = fields.find((item) => item.id === fieldId);
  if (!field) return;

  field.status = "Archived";
  field.archivedAt = "just now";
  state.adminNotice = `${field.name} archived. Its old records stay searchable, but it drops out of field entry lists.`;
  if (state.fieldId === fieldId) {
    const firstActive = activeFields()[0];
    if (firstActive) state.fieldId = firstActive.id;
  }
  render();
}

function restoreField(fieldId) {
  const field = fields.find((item) => item.id === fieldId);
  if (!field) return;

  field.status = "Boundary saved";
  field.archivedAt = "";
  state.adminNotice = `${field.name} restored to active field entry lists.`;
  render();
}

function startGpsDraft() {
  state.gpsDraft = {
    status: "Recording edge",
    points: "42",
    distance: "0.6 mi",
    accuracy: "Phone GPS, 18-35 ft",
    review: "Keep driving the outside edge",
    started: true
  };
  render();
}

function pauseGpsDraft() {
  state.gpsDraft = {
    ...state.gpsDraft,
    status: "Paused",
    review: "Resume when you are back on the field edge",
    started: state.gpsDraft.started
  };
  render();
}

function finishGpsDraft() {
  if (!state.gpsDraft.started) return;

  state.gpsDraft = {
    status: "Ready for admin review",
    points: "148",
    distance: "2.1 mi",
    accuracy: "Phone GPS, 18-35 ft",
    review: "Admin must approve before it becomes official",
    started: false
  };
  state.fieldDraft = {
    ...state.fieldDraft,
    source: "Drive boundary with GPS",
    notes: "Phone GPS draft captured from the field. Review points and accuracy before saving as the permanent boundary."
  };
  state.adminNotice = "Phone GPS boundary draft is waiting in Field Bank. Review it before saving as the official field outline.";
  state.adminSection = "Fields";
  setRoute("admin");
}

function archiveEquipment(category, number) {
  if (!equipmentIsArchived(category, number)) {
    state.archivedEquipment = [...state.archivedEquipment, equipmentKey(category, number)];
  }
  const item = equipmentCatalog.find((group) => group.category === category)?.items.find(([candidate]) => candidate === number);
  state.adminNotice = `${number} - ${item ? item[1] : "equipment"} archived from entry dropdowns. Old records keep the number.`;
  render();
}

function restoreEquipment(category, number) {
  state.archivedEquipment = state.archivedEquipment.filter((key) => key !== equipmentKey(category, number));
  const item = equipmentCatalog.find((group) => group.category === category)?.items.find(([candidate]) => candidate === number);
  state.adminNotice = `${number} - ${item ? item[1] : "equipment"} restored to entry dropdowns.`;
  render();
}

function queueTestAlert() {
  state.adminNotice = `${state.adminSettings.alertMethod} scout alert queued. In the real app this would notify Weston and include the report link.`;
  render();
}

function selectHarvestField(fieldId) {
  const season = activeSeasonForField(fieldId);
  state.fieldId = fieldId;
  state.lastHarvestFieldId = fieldId;
  state.harvest.cropYear = season.cropYear;
  setRoute("harvest-load");
}

function scanHarvestScalePhoto() {
  state.harvest.loadedWeight = "74200";
  state.harvest.ocrStatus = "OCR read 74,200 lb from scale photo. Verify before saving.";
  state.harvest.notes = "Scale photo attached and OCR verified.";
  render();
}

function saveHarvestLoad() {
  const field = currentField();
  const season = activeSeasonForField(field.id);
  const netWeight = harvestNetWeight();
  if (!netWeight) {
    state.harvest.ocrStatus = "Loaded weight is needed before saving the load.";
    render();
    return;
  }
  const loadNumber = nextHarvestLoadNumber(field.id, season.cropYear);
  const id = `harvest-${field.id}-${season.cropYear}-${loadNumber}-${Date.now()}`;
  const destination = state.harvest.destination.replace("Same as last - ", "");
  const load = {
    id,
    fieldId: field.id,
    cropYear: season.cropYear,
    crop: season.crop,
    loadNumber,
    driver: state.operator,
    truck: state.harvest.truck,
    emptyWeight: Number.parseFloat(state.harvest.emptyWeight) || 0,
    loadedWeight: Number.parseFloat(state.harvest.loadedWeight) || 0,
    netWeight,
    destination,
    time: "Today, 8:42 AM",
    photo: "Scale photo attached"
  };

  harvestLoads.push(load);
  fieldReports.unshift({
    id,
    fieldId: field.id,
    type: "Harvest",
    date: "Today",
    cropYear: season.cropYear,
    title: `Load ${loadNumber} to ${destination}`,
    summary: `${formatPounds(netWeight)} net from ${state.harvest.truck}; loaded scale photo attached.`,
    badge: `Load ${loadNumber}`,
    details: [
      ["Crop", `${season.crop}, ${season.cropYear}`],
      ["Weights", `Empty ${formatPounds(load.emptyWeight)}, loaded ${formatPounds(load.loadedWeight)}, net ${formatPounds(netWeight)}`],
      ["Driver", state.operator],
      ["Destination", destination],
      ["Proof", "Scale photo attached to load record"]
    ]
  });

  state.selectedReportField = field.id;
  state.selectedReportYear = season.cropYear;
  state.selectedReportId = id;
  setRoute("harvest-saved");
}

function selectIrrigationField(fieldId) {
  const setup = irrigationSetupForField(fieldId);
  const season = activeSeasonForField(fieldId);
  const inches = irrigationInchesFromPercent(setup.lastPercent, setup.baseInchesAt100);
  state.fieldId = fieldId;
  state.lastIrrigationFieldId = fieldId;
  state.irrigation = {
    ...state.irrigation,
    direction: setup.lastDirection,
    percent: String(setup.lastPercent),
    inches: inches.toFixed(2),
    baseInchesAt100: String(setup.baseInchesAt100),
    equipment: setup.equipment,
    notes: `${season.crop} ${season.cropYear} irrigation set.`,
    rainEvent: false,
    rainInches: ""
  };
  setRoute("irrigation-log");
}

function updateIrrigationActiveField(fieldId) {
  selectIrrigationField(fieldId);
}

function updateIrrigationSetupDraft(field, value) {
  state.irrigationSetupDraft[field] = value;
  if (field === "fieldId") {
    const wasUnlocked = state.irrigationSetupDraft.unlocked;
    const setup = irrigationSetupForField(value);
    state.irrigationSetupDraft = {
      fieldId: value,
      equipment: setup.equipment,
      baseInchesAt100: String(setup.baseInchesAt100),
      lastDirection: setup.lastDirection,
      lastPercent: String(setup.lastPercent),
      unlocked: wasUnlocked
    };
  }
}

function toggleAdminIrrigationSetupLock() {
  const draft = state.irrigationSetupDraft;
  if (!draft.unlocked) {
    draft.unlocked = true;
    render();
    return;
  }

  let setup = irrigationSetups.find((item) => item.fieldId === draft.fieldId);
  if (!setup) {
    setup = { fieldId: draft.fieldId, equipment: "", baseInchesAt100: 0, lastDirection: "Forward", lastPercent: 20 };
    irrigationSetups.push(setup);
  }

  setup.equipment = draft.equipment;
  setup.baseInchesAt100 = Number.parseFloat(draft.baseInchesAt100) || setup.baseInchesAt100;
  setup.lastDirection = draft.lastDirection;
  setup.lastPercent = Number.parseFloat(draft.lastPercent) || setup.lastPercent;
  draft.unlocked = false;

  const field = fields.find((item) => item.id === draft.fieldId);
  state.adminNotice = `${field ? field.name : "Field"} irrigation setup saved.`;
  render();
}

function updateIrrigationField(field, value) {
  if (field === "chemigator" || field === "fertigator" || field === "rainEvent") {
    state.irrigation[field] = value;
    if (field === "rainEvent" && value && !state.irrigation.rainInches) {
      state.irrigation.rainInches = "0.25";
    }
    render();
    return;
  }

  state.irrigation[field] = value;
  if (field === "direction") {
    if (isWaterlessIrrigationDirection(value)) {
      state.irrigation.inches = "0.00";
    } else {
      state.irrigation.inches = irrigationInchesFromPercent(state.irrigation.percent, state.irrigation.baseInchesAt100).toFixed(2);
    }
  }
  if (field === "percent") {
    state.irrigation.inches = isWaterlessIrrigationDirection()
      ? "0.00"
      : irrigationInchesFromPercent(value, state.irrigation.baseInchesAt100).toFixed(2);
  }
  if (field === "inches") {
    if (isWaterlessIrrigationDirection()) {
      state.irrigation.inches = "0.00";
    } else {
      state.irrigation.percent = irrigationPercentFromInches(value, state.irrigation.baseInchesAt100).toFixed(0);
    }
  }
  if (field === "baseInchesAt100") {
    state.irrigation.inches = isWaterlessIrrigationDirection()
      ? "0.00"
      : irrigationInchesFromPercent(state.irrigation.percent, value).toFixed(2);
  }
  render();
}

function saveIrrigationRecord() {
  const field = currentField();
  const season = activeSeasonForField(field.id);
  const id = `irrigation-${field.id}-${season.cropYear}-${Date.now()}`;
  const record = {
    id,
    fieldId: field.id,
    cropYear: season.cropYear,
    crop: season.crop,
    equipment: state.irrigation.equipment,
    direction: state.irrigation.direction,
    percent: Number.parseFloat(state.irrigation.percent) || 0,
    inches: Number.parseFloat(state.irrigation.inches) || 0,
    rainEvent: Boolean(state.irrigation.rainEvent),
    rainInches: irrigationRainInches(),
    totalWaterInches: irrigationTotalWaterInches(),
    chemigator: Boolean(state.irrigation.chemigator),
    fertigator: Boolean(state.irrigation.fertigator),
    time: "Today, 8:42 AM",
    note: state.irrigation.notes
  };

  irrigationRecords.push(record);
  fieldReports.unshift({
    id,
    fieldId: field.id,
    type: "Irrigation",
    date: "Today",
    cropYear: season.cropYear,
    title: `${record.direction} irrigation set`,
    summary: `${formatInches(record.totalWaterInches)} total water: ${formatInches(record.inches)} irrigation${record.rainEvent ? ` plus ${formatInches(record.rainInches)} rain` : ""}.`,
    badge: formatInches(record.totalWaterInches),
    details: [
      ["Crop", `${season.crop}, ${season.cropYear}`],
      ["Equipment", record.equipment],
      ["Water", `${record.percent}% speed, ${formatInches(record.inches)} estimated`],
      ["Rain", record.rainEvent ? `${formatInches(record.rainInches)} included` : "No rain event logged"],
      ["Chemigator", record.chemigator ? "Running" : "Off"],
      ["Fertigator", record.fertigator ? "Running" : "Off"]
    ]
  });

  state.selectedReportField = field.id;
  state.selectedReportYear = season.cropYear;
  state.selectedReportId = id;
  setRoute("irrigation-saved");
}

function updateFuelField(field, value) {
  state.fuel[field] = value;
  if (field === "sourceId") {
    const source = selectedFuelSource();
    state.fuel.fuelType = source.fuelType;
  }
  if (field === "process") {
    state.fuel.processType = fuelProcessTypeOptions(value)[0];
  }
  if (field === "fieldId") {
    const season = activeSeasonForField(value);
    state.fuel.fieldCropYear = season.cropYear;
  }
  maybeOpenOtherPrompt("fuel", field, value);
  render();
}

function scanFuelGallons() {
  state.fuel.gallons = "25.9";
  state.fuel.photoStatus = "Pump readout photo attached.";
  state.fuel.gallonOcrStatus = "OCR read 25.9 gallons. Verify before saving.";
  render();
}

function scanFuelMeter() {
  state.fuel.meterReading = "8412.6";
  state.fuel.meterOcrStatus = "OCR read 8412.6 from dash photo. Verify before saving.";
  render();
}

function saveFuelEntry() {
  const gallons = parseNumber(state.fuel.gallons);
  if (!gallons) {
    state.fuel.warning = "Gallons are needed before saving fuel.";
    render();
    return;
  }

  const source = selectedFuelSource();
  const taggedField = state.fuel.tagField ? fields.find((field) => field.id === state.fuel.fieldId) : null;
  const season = taggedField
    ? fieldSeasons.find((item) => item.fieldId === taggedField.id && item.cropYear === state.fuel.fieldCropYear) || activeSeasonForField(taggedField.id)
    : null;
  const id = `fuel-${Date.now()}`;
  const warning = fuelWarnings().filter((item) => item !== "Gallons are blank.").join(" ");
  const entry = {
    id,
    sourceId: source.id,
    sourceName: source.name,
    fuelType: source.fuelType,
    equipment: state.fuel.equipment,
    gallons,
    meterReading: state.fuel.meterReading,
    process: state.fuel.process,
    processType: state.fuel.processType,
    implement: state.fuel.implement === "None" ? "" : state.fuel.implement,
    fieldId: taggedField ? taggedField.id : "",
    cropYear: season ? season.cropYear : "",
    acresWorked: parseNumber(state.fuel.acresWorked),
    milesTraveled: parseNumber(state.fuel.milesTraveled),
    operator: state.fuel.operator,
    dateTime: "Today, 10:42 AM",
    photo: state.fuel.photoStatus,
    status: warning ? "Needs Review" : "Submitted",
    warning
  };

  source.remaining = Math.max(0, source.remaining - gallons);
  source.status = source.remaining <= source.lowThreshold ? "Low" : "Ready";
  fuelEntries.unshift(entry);

  if (taggedField && season) {
    fieldReports.unshift({
      id,
      fieldId: taggedField.id,
      type: "Fuel",
      date: "Today",
      cropYear: season.cropYear,
      title: `${formatGallons(gallons)} fuel to ${entry.equipment}`,
      summary: `${source.name}, ${source.fuelType}, ${entry.process}${entry.processType ? ` - ${entry.processType}` : ""}${entry.implement ? ` with ${entry.implement}` : ""}.`,
      badge: formatGallons(gallons),
      details: [
        ["Fuel source", `${source.name}, ${source.fuelType}`],
        ["Equipment", entry.equipment],
        ["Process", `${entry.process}${entry.processType ? ` - ${entry.processType}` : ""}`],
        ["Acres / miles", `${entry.acresWorked ? `${entry.acresWorked} acres` : "Acres blank"}; ${entry.milesTraveled ? `${entry.milesTraveled} miles` : "Miles blank"}`],
        ["Meter", entry.meterReading || "Blank - review warning"],
        ["Proof", entry.photo]
      ]
    });
    state.selectedReportField = taggedField.id;
    state.selectedReportYear = season.cropYear;
    state.selectedReportId = id;
  }

  state.fuel.gallons = "";
  state.fuel.warning = warning || "Fuel entry submitted.";
  setRoute("fuel-saved");
}

function updateFuelInventoryDraft(field, value) {
  state.fuelInventoryDraft[field] = value;
  render();
}

function addFuelInventoryChange() {
  const source = fuelSources.find((item) => item.id === state.fuelInventoryDraft.sourceId) || fuelSources[0];
  const delivery = parseNumber(state.fuelInventoryDraft.deliveryGallons);
  const adjustment = parseNumber(state.fuelInventoryDraft.adjustmentGallons);
  const delta = delivery || adjustment;
  if (!delta) {
    state.adminNotice = "Enter delivery gallons or an adjustment before saving fuel inventory.";
    render();
    return;
  }

  source.remaining = Math.max(0, source.remaining + delta);
  source.status = source.remaining <= source.lowThreshold ? "Low" : "Ready";
  fuelEntries.unshift({
    id: `fuel-inventory-${Date.now()}`,
    sourceId: source.id,
    sourceName: source.name,
    fuelType: source.fuelType,
    equipment: "Fuel inventory",
    gallons: delta,
    meterReading: "",
    process: delivery ? "Delivery" : "Adjustment",
    haulingType: "",
    implement: "",
    fieldId: "",
    operator: "02 - Weston",
    dateTime: "Today, 10:42 AM",
    photo: "Delivery or adjustment proof attached",
    status: "Admin",
    warning: state.fuelInventoryDraft.note
  });
  state.adminNotice = `${source.name} updated to ${formatGallons(source.remaining)} remaining.`;
  state.fuelInventoryDraft.deliveryGallons = "";
  state.fuelInventoryDraft.adjustmentGallons = "";
  render();
}

function scanOutboundTicket() {
  const copy = outboundDirectionCopy();
  const isInbound = state.outbound.direction === "Inbound";
  state.outbound = {
    ...state.outbound,
    ocrStatus: `OCR filled ticket ${isInbound ? "FS-552" : "VP-1047"}. Verify ${copy.partyLabel.toLowerCase()}, weights, and ${copy.statusLabel.toLowerCase()} before saving.`,
    commodity: isInbound ? "Fertilizer" : "Potatoes",
    bushelCommodity: "Wheat",
    customer: isInbound ? "Fertilizer supplier" : "Valley Produce",
    destination: isInbound ? "Fertilizer shed" : "Monte Vista Warehouse",
    truck: "Truck 221",
    carrier: isInbound ? "Supplier truck" : "Stone Ridge Farms",
    carrierDriver: isInbound ? "Ticket driver" : "Mike H.",
    ticketNumber: isInbound ? "FS-552" : "VP-1047",
    grossWeight: isInbound ? "64000" : "74200",
    tareWeight: isInbound ? "30200" : "28000",
    netWeight: "",
    unit: isInbound ? "ton" : "cwt",
    quantity: "",
    unitPrice: "",
    loader: state.operator,
    billingStatus: outboundDefaultStatus(state.outbound.direction),
    dateTime: "Today, 10:24 AM",
    notes: `OCR read paper ${isInbound ? "inbound" : "outbound"} ticket. Verify before office review.`,
    photoStatus: "Ticket photo attached"
  };
  render();
}

function scanTankProductLabel(index) {
  const product = chemicalProducts[index % chemicalProducts.length] || chemicalProducts[0];
  const rates = ["24 fl oz/ac", "8 fl oz/ac", "16 fl oz/ac"];
  state.tankMix[index] = {
    ...state.tankMix[index],
    id: product.id,
    amount: state.tankMix[index]?.amount || rates[index % rates.length],
    labelOcrStatus: `OCR matched ${product.name}. EPA ${product.epa}, REI ${product.rei}, PHI ${product.phi}, active ${product.active}.`
  };
  render();
}

function updateOutboundField(field, value) {
  state.outbound[field] = value;
  if (field === "direction") {
    state.outbound.billingStatus = outboundDefaultStatus(value);
    state.outbound.ocrStatus = value === "Inbound" ? "No inbound ticket scanned yet" : "No outbound ticket scanned yet";
  }
  if (field === "commodity") {
    const commodity = currentOutboundCommodity();
    state.outbound.unit = commodity.defaultUnit;
    state.outbound.quantity = "";
  }
  if (field === "unit") {
    state.outbound.quantity = "";
  }
  if (field === "bushelCommodity") {
    state.outbound.quantity = "";
  }
  if (field === "fieldId") {
    const season = activeSeasonForField(value);
    state.outbound.fieldCropYear = season.cropYear;
  }
  maybeOpenOtherPrompt("outbound", field, value);
  render();
}

function saveOutboundTicket() {
  const netWeight = outboundNetWeight();
  const copy = outboundDirectionCopy();
  const quantity = outboundBillingQuantity(netWeight, state.outbound.unit, state.outbound.commodity, state.outbound.quantity, state.outbound.bushelCommodity);
  if (!quantity) {
    state.outbound.ocrStatus = outboundIsWeightUnit()
      ? "Weight or net weight is needed before saving this billing unit."
      : "Units are needed before saving this count-based ticket.";
    render();
    return;
  }

  const taggedField = state.outbound.tagField ? fields.find((field) => field.id === state.outbound.fieldId) : null;
  const season = taggedField
    ? fieldSeasons.find((item) => item.fieldId === taggedField.id && item.cropYear === state.outbound.fieldCropYear) || activeSeasonForField(taggedField.id)
    : null;
  const id = `outbound-${Date.now()}`;
  const ticket = {
    id,
    direction: state.outbound.direction,
    commodity: state.outbound.commodity,
    bushelCommodity: state.outbound.unit === "bushel" ? state.outbound.bushelCommodity : "",
    customer: state.outbound.customer,
    destination: state.outbound.destination,
    truck: state.outbound.truck,
    carrier: state.outbound.carrier,
    carrierDriver: state.outbound.carrierDriver,
    ticketNumber: state.outbound.ticketNumber || `Draft-${outboundTickets.length + 1}`,
    grossWeight: parseNumber(state.outbound.grossWeight),
    tareWeight: parseNumber(state.outbound.tareWeight),
    netWeight,
    unit: state.outbound.unit,
    quantity,
    unitPrice: state.outbound.unitPrice,
    loader: state.outbound.loader,
    billingStatus: state.outbound.billingStatus,
    dateTime: state.outbound.dateTime === "Auto now" ? "Today, 10:24 AM" : state.outbound.dateTime,
    photo: state.outbound.photoStatus,
    taggedFieldId: taggedField ? taggedField.id : "",
    taggedCropYear: season ? season.cropYear : "",
    notes: state.outbound.notes
  };

  outboundTickets.unshift(ticket);

  if (taggedField && season) {
    fieldReports.unshift({
      id,
      fieldId: taggedField.id,
      type: copy.reportType,
      date: "Today",
      cropYear: season.cropYear,
      title: `${ticket.commodity} ${copy.noun} ${ticket.ticketNumber}`,
      summary: `${outboundTicketAmount(ticket)}; ${outboundMovementLine(ticket)}; ${ticket.billingStatus.toLowerCase()}.`,
      badge: ticket.billingStatus,
      details: [
        [copy.partyLabel, ticket.customer],
        [copy.destinationLabel, ticket.destination],
        ["Billing units", outboundTicketAmount(ticket)],
        ["Direction", ticket.direction],
        ["Weights", netWeight ? `Loaded/gross ${formatPounds(ticket.grossWeight)}, empty/tare ${formatPounds(ticket.tareWeight)}, net ${formatPounds(netWeight)}` : "Count-based ticket, no weight entered"],
        ["Loader", ticket.loader],
        ["Carrier driver", ticket.carrierDriver || "Not entered"],
        ["Billing", ticket.billingStatus],
        ["Proof", ticket.photo]
      ]
    });
    state.selectedReportField = taggedField.id;
    state.selectedReportYear = season.cropYear;
    state.selectedReportId = id;
  }

  setRoute("outbound-saved");
}

function markOutboundBilled(ticketId) {
  const ticket = outboundTickets.find((item) => item.id === ticketId);
  if (!ticket) return;
  ticket.billingStatus = outboundClosedStatus(ticket.direction);
  state.adminNotice = `${ticket.ticketNumber} marked ${ticket.billingStatus.toLowerCase()}.`;
  render();
}

function setOutboundBillingDirection(direction) {
  state.outboundBillingDirection = direction;
  render();
}

function setOutboundBillingCustomer(customer) {
  state.outboundBillingCustomer = customer;
  render();
}

function setOutboundBillingPeriod(period) {
  state.outboundBillingPeriod = period;
  render();
}

function updateOutboundUnitDraft(field, value) {
  state.outboundUnitDraft[field] = value;
  render();
}

function addOutboundUnit() {
  const draft = state.outboundUnitDraft;
  const code = draft.code.trim().toLowerCase();
  const label = draft.label.trim();
  if (!code || !label) {
    state.adminNotice = "Unit code and label are needed before saving.";
    render();
    return;
  }

  const existing = outboundUnits.find((unit) => unit.code === code);
  const unit = existing || { code, label, kind: "count", poundsPerUnit: "", description: "" };
  unit.label = label;
  unit.kind = draft.kind;
  unit.poundsPerUnit = draft.kind === "weight" ? parseNumber(draft.poundsPerUnit) : "";
  unit.description = draft.description.trim() || `per ${label.toLowerCase()}`;
  if (!existing) outboundUnits.push(unit);
  state.adminNotice = `${label} billing unit saved.`;
  render();
}

function addEquipmentItem() {
  const category = state.equipmentDraft.category;
  const number = state.equipmentDraft.number.trim();
  const description = state.equipmentDraft.description.trim();
  const group = equipmentCatalog.find((item) => item.category === category);
  if (!group || !number || !description) return;

  group.items.push([number, description]);
  group.count = group.items.length;
  const countRow = equipmentCategoryCounts.find((item) => item[0] === equipmentCountLabel(category));
  if (countRow) countRow[1] = group.items.length;
  state.adminNotice = `${number} - ${description} added to ${category}.`;
  state.equipmentDraft.number = String(Number(number.replace(/\D/g, "")) + 1 || number);
  state.equipmentDraft.description = "";
  render();
}

function equipmentCountLabel(category) {
  if (category === "Tractors and Other Power Units") return "Power units";
  if (category === "Tillage Equipment") return "Tillage";
  if (category === "Chemical Application Equipment") return "Chemical";
  if (category === "Irrigation") return "Irrigation";
  return category;
}

function selectOperation(operation) {
  state.operation = operation;
  if (operation === "Scouting") {
    setRoute("scout-view");
    return;
  }
  if (operation === "Harvest") {
    state.fieldId = state.lastHarvestFieldId;
    state.applicationMode = "Harvest load";
    state.operator = "10 - Temp Employee";
    state.harvest = {
      cropYear: activeSeasonForField(state.lastHarvestFieldId).cropYear,
      truck: "Truck 221",
      emptyWeight: "28000",
      loadedWeight: "",
      destination: "Same as last - Cellar 4",
      notes: "Scale photo attached.",
      ocrStatus: "No scale photo scanned yet"
    };
    setRoute("harvest-field");
    return;
  }
  if (operation === "Fuel") {
    const source = selectedFuelSource();
    state.applicationMode = "Fuel log";
    state.fuel.fuelType = source.fuelType;
    setRoute("fuel");
    return;
  }
  if (operation === "Irrigation") {
    selectIrrigationField(state.lastIrrigationFieldId);
    return;
  }
  if (operation === "Outbound" || operation === "Loads") {
    state.applicationMode = "Loads ticket";
    state.operator = state.outbound.driver || state.operator;
    setRoute("outbound");
    return;
  }
  if (operation === "Spray") {
    state.productId = "boundary";
    state.tankMix = [
      { id: "boundary", amount: "24 fl oz/ac", labelOcrStatus: "Label scan ready." },
      { id: "dual", amount: "8 fl oz/ac", labelOcrStatus: "Label scan ready." }
    ];
    state.amount = "24 fl oz/ac";
    state.carrier = "Water, 10 gal/ac";
    state.applicationMode = "Ground sprayer";
    state.equipment = "505 - 4830 JD sprayer";
  }
  if (operation === "Fertilizer") {
    state.productId = "dry-blend";
    state.amount = "350 lb/ac";
    state.carrier = "None";
    state.fertilizerAnalysis = { ...fertilizerProducts[0].nutrients };
    state.applicationMode = "Dry spreader";
    state.equipment = "504 - Terra-Gator";
  }
  if (operation === "Tillage") {
    state.applicationMode = "Tillage pass";
    state.equipment = "005 - 8260R JD tractor + 107 - Xpress Great Plains Xpress Disc";
    state.tillage = {
      powerUnit: "005 - 8260R JD tractor",
      implement: "107 - Xpress Great Plains Xpress Disc",
      depth: "3.5 in",
      passes: "1",
      purpose: "Residue sizing",
      soilMoisture: "Fit",
      residue: "Medium",
      speed: "6.2 mph",
      finish: "Level seedbed",
      attachment: "Rolling basket"
    };
  }
  setRoute("field-step");
}

function render() {
  const app = document.querySelector("#app");
  const renderer = routes[state.route] || renderHome;
  const routeChanged = state.renderedRoute !== state.route;
  const appScrollTop = app.scrollTop;
  const pageScrollX = typeof window !== "undefined" ? window.scrollX : 0;
  const pageScrollY = typeof window !== "undefined" ? window.scrollY : 0;
  app.innerHTML = renderer() + renderOtherPrompt();
  if (routeChanged) {
    app.scrollTop = 0;
  } else {
    app.scrollTop = appScrollTop;
    if (typeof window !== "undefined" && window.scrollTo) window.scrollTo(pageScrollX, pageScrollY);
  }
  state.renderedRoute = state.route;
  wireControls();
  updateActiveNav();
}

function updateActiveNav() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.classList.toggle("active", button.dataset.route === state.route);
  });
}

function wireControls() {
  const otherDraftInput = document.querySelector("#otherDraftValue");
  if (otherDraftInput) {
    otherDraftInput.addEventListener("input", (event) => {
      state.otherDraftValue = event.target.value;
    });
  }

  const saveOtherButton = document.querySelector("#saveOtherValue");
  if (saveOtherButton) {
    saveOtherButton.addEventListener("click", saveOtherValue);
  }

  const cancelOtherButton = document.querySelector("#cancelOtherValue");
  if (cancelOtherButton) {
    cancelOtherButton.addEventListener("click", cancelOtherValue);
  }

  const openOtherAdminButton = document.querySelector("#openOtherAdmin");
  if (openOtherAdminButton) {
    openOtherAdminButton.addEventListener("click", () => {
      if (state.otherPrompt && state.otherDraftValue.trim()) {
        saveOtherValue();
      } else {
        state.otherPrompt = null;
        state.otherDraftValue = "";
      }
      state.adminSection = "Lists";
      setRoute("admin");
    });
  }

  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });

  document.querySelectorAll("[data-operation]").forEach((button) => {
    button.addEventListener("click", () => selectOperation(button.dataset.operation));
  });

  document.querySelectorAll("[data-admin-user]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedAdminUser = button.dataset.adminUser;
      state.adminNotice = "";
      render();
    });
  });

  document.querySelectorAll("[data-admin-section]").forEach((button) => {
    button.addEventListener("click", () => {
      state.adminSection = button.dataset.adminSection;
      render();
    });
  });

  document.querySelectorAll("[data-report-field]").forEach((button) => {
    button.addEventListener("click", () => {
      setReportField(button.dataset.reportField);
    });
  });

  document.querySelectorAll("[data-report-year]").forEach((button) => {
    button.addEventListener("click", () => {
      setReportYear(button.dataset.reportYear);
    });
  });

  document.querySelectorAll("[data-report-entry]").forEach((button) => {
    button.addEventListener("click", () => {
      openReport(button.dataset.reportEntry);
    });
  });

  document.querySelectorAll("[data-harvest-field]").forEach((button) => {
    button.addEventListener("click", () => {
      selectHarvestField(button.dataset.harvestField);
    });
  });

  document.querySelectorAll("[data-irrigation-field]").forEach((button) => {
    button.addEventListener("click", () => {
      selectIrrigationField(button.dataset.irrigationField);
    });
  });

  const irrigationFieldSelect = document.querySelector("#irrigationActiveField");
  if (irrigationFieldSelect) {
    irrigationFieldSelect.addEventListener("change", (event) => updateIrrigationActiveField(event.target.value));
  }

  document.querySelectorAll("[data-permission]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleSelectedPermission(button.dataset.permission);
    });
  });

  document.querySelectorAll("[data-admin-setting]").forEach((input) => {
    const eventName = input.type === "checkbox" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      const key = event.target.dataset.adminSetting;
      state.adminSettings[key] = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      state.adminNotice = "Admin setting updated.";
    });
  });

  document.querySelectorAll("[data-user-field]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      updateSelectedUserField(event.target.dataset.userField, event.target.value);
    });
  });

  const saveUserButton = document.querySelector("#saveAdminUser");
  if (saveUserButton) {
    saveUserButton.addEventListener("click", saveAdminUser);
  }

  const suspendUserButton = document.querySelector("#toggleSelectedUserStatus");
  if (suspendUserButton) {
    suspendUserButton.addEventListener("click", toggleSelectedUserStatus);
  }

  const archiveUserButton = document.querySelector("#archiveSelectedUser");
  if (archiveUserButton) {
    archiveUserButton.addEventListener("click", archiveSelectedUser);
  }

  document.querySelectorAll("[data-new-user-field]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      updateNewUserDraft(event.target.dataset.newUserField, event.target.value);
    });
  });

  document.querySelectorAll("[data-new-user-permission]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleNewUserPermission(button.dataset.newUserPermission);
    });
  });

  const addUserButton = document.querySelector("#addNewUser");
  if (addUserButton) {
    addUserButton.addEventListener("click", addNewUser);
  }

  document.querySelectorAll("[data-field-draft]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      updateFieldDraft(event.target.dataset.fieldDraft, event.target.value);
    });
  });

  document.querySelectorAll("[data-crop-season-draft]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      updateCropSeasonDraft(event.target.dataset.cropSeasonDraft, event.target.value);
    });
  });

  const addCropSeasonButton = document.querySelector("#addCropSeason");
  if (addCropSeasonButton) {
    addCropSeasonButton.addEventListener("click", addCropSeason);
  }

  const addFieldButton = document.querySelector("#addFieldToBank");
  if (addFieldButton) {
    addFieldButton.addEventListener("click", addFieldToBank);
  }

  document.querySelectorAll("[data-archive-field]").forEach((button) => {
    button.addEventListener("click", () => archiveField(button.dataset.archiveField));
  });

  document.querySelectorAll("[data-restore-field]").forEach((button) => {
    button.addEventListener("click", () => restoreField(button.dataset.restoreField));
  });

  const startGpsButton = document.querySelector("#startGpsDraft");
  if (startGpsButton) {
    startGpsButton.addEventListener("click", startGpsDraft);
  }

  const pauseGpsButton = document.querySelector("#pauseGpsDraft");
  if (pauseGpsButton) {
    pauseGpsButton.addEventListener("click", pauseGpsDraft);
  }

  const finishGpsButton = document.querySelector("#finishGpsDraft");
  if (finishGpsButton) {
    finishGpsButton.addEventListener("click", finishGpsDraft);
  }

  document.querySelectorAll("[data-equipment-draft]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      state.equipmentDraft[event.target.dataset.equipmentDraft] = event.target.value;
    });
  });

  const addEquipmentButton = document.querySelector("#addEquipmentItem");
  if (addEquipmentButton) {
    addEquipmentButton.addEventListener("click", addEquipmentItem);
  }

  document.querySelectorAll("[data-equipment-list-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedEquipmentCategory = button.dataset.equipmentListCategory;
      render();
    });
  });

  document.querySelectorAll("[data-archive-equipment]").forEach((button) => {
    button.addEventListener("click", () => {
      archiveEquipment(button.dataset.equipmentCategory, button.dataset.archiveEquipment);
    });
  });

  document.querySelectorAll("[data-restore-equipment]").forEach((button) => {
    button.addEventListener("click", () => {
      restoreEquipment(button.dataset.equipmentCategory, button.dataset.restoreEquipment);
    });
  });

  const queueAlertButton = document.querySelector("#queueTestAlert");
  if (queueAlertButton) {
    queueAlertButton.addEventListener("click", queueTestAlert);
  }

  document.querySelectorAll("[data-approve-review]").forEach((button) => {
    button.addEventListener("click", () => {
      updateReviewDecision(button.dataset.approveReview, "approved");
    });
  });

  document.querySelectorAll("[data-sendback-review]").forEach((button) => {
    button.addEventListener("click", () => {
      updateReviewDecision(button.dataset.sendbackReview, "sent-back");
    });
  });

  document.querySelectorAll("[data-field]").forEach((button) => {
    button.addEventListener("click", () => {
      state.fieldId = button.dataset.field;
      render();
    });
  });

  document.querySelectorAll("[data-map-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mapMode = button.dataset.mapMode;
      render();
    });
  });

  document.querySelectorAll("[data-area-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.areaMode = button.dataset.areaMode;
      render();
    });
  });

  document.querySelectorAll("[data-pattern]").forEach((button) => {
    button.addEventListener("click", () => {
      state.pattern = button.dataset.pattern;
      if (state.pattern === "0 degrees") state.heading = 0;
      if (state.pattern === "90 degrees") state.heading = 90;
      if (state.pattern === "Same as last") state.heading = 102;
      if (state.pattern === "Circle pivot") state.heading = 0;
      render();
    });
  });

  document.querySelectorAll("[data-product]").forEach((button) => {
    button.addEventListener("click", () => {
      state.productId = button.dataset.product;
      const product = currentProduct();
      if (state.operation === "Fertilizer") {
        state.fertilizerAnalysis = { ...product.nutrients };
        state.amount = product.form === "Dry" ? "350 lb/ac" : "15 gal/ac";
      }
      render();
    });
  });

  document.querySelectorAll("[data-tank-product]").forEach((select) => {
    select.addEventListener("change", (event) => {
      const index = Number(event.target.dataset.tankProduct);
      state.tankMix[index].id = event.target.value;
      state.tankMix[index].labelOcrStatus = "Manual product selection. Label photo can still be attached for proof.";
      render();
    });
  });

  document.querySelectorAll("[data-tank-rate]").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.tankMix[Number(event.target.dataset.tankRate)].amount = event.target.value;
    });
  });

  document.querySelectorAll("[data-remove-tank]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.removeTank);
      state.tankMix.splice(index, 1);
      if (!state.tankMix.length) state.tankMix.push({ id: "boundary", amount: "" });
      render();
    });
  });

  document.querySelectorAll("[data-scan-tank-label]").forEach((button) => {
    button.addEventListener("click", () => scanTankProductLabel(Number(button.dataset.scanTankLabel)));
  });

  const addTankButton = document.querySelector("#addTankProduct");
  if (addTankButton) {
    addTankButton.addEventListener("click", () => {
      state.tankMix.push({ id: "boundary", amount: "", labelOcrStatus: "Label scan ready." });
      render();
    });
  }

  document.querySelectorAll("[data-scout-type]").forEach((select) => {
    select.addEventListener("change", (event) => {
      state.scoutingIssues[Number(event.target.dataset.scoutType)].type = event.target.value;
    });
  });

  document.querySelectorAll("[data-scout-severity]").forEach((select) => {
    select.addEventListener("change", (event) => {
      state.scoutingIssues[Number(event.target.dataset.scoutSeverity)].severity = event.target.value;
    });
  });

  document.querySelectorAll("[data-scout-note]").forEach((textarea) => {
    textarea.addEventListener("input", (event) => {
      state.scoutingIssues[Number(event.target.dataset.scoutNote)].note = event.target.value;
    });
  });

  const addScoutIssueButton = document.querySelector("#addScoutIssue");
  if (addScoutIssueButton) {
    addScoutIssueButton.addEventListener("click", () => {
      state.scoutingIssues.push({ type: "Insects", severity: "Low", note: "" });
      render();
    });
  }

  document.querySelectorAll("[data-harvest]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      state.harvest[event.target.dataset.harvest] = event.target.value;
      render();
    });
  });

  const saveHarvestButton = document.querySelector("#saveHarvestLoad");
  if (saveHarvestButton) {
    saveHarvestButton.addEventListener("click", saveHarvestLoad);
  }

  const scanHarvestButton = document.querySelector("#scanHarvestScale");
  if (scanHarvestButton) {
    scanHarvestButton.addEventListener("click", scanHarvestScalePhoto);
  }

  document.querySelectorAll("[data-fuel]").forEach((input) => {
    if (input.tagName === "TEXTAREA") {
      input.addEventListener("input", (event) => {
        state.fuel[event.target.dataset.fuel] = event.target.value;
      });
      return;
    }

    const eventName = input.type === "checkbox" || input.tagName === "SELECT" ? "change" : "change";
    input.addEventListener(eventName, (event) => {
      updateFuelField(event.target.dataset.fuel, event.target.type === "checkbox" ? event.target.checked : event.target.value);
    });
  });

  const saveFuelButton = document.querySelector("#saveFuelEntry");
  if (saveFuelButton) {
    saveFuelButton.addEventListener("click", saveFuelEntry);
  }

  const scanFuelGallonsButton = document.querySelector("#scanFuelGallons");
  if (scanFuelGallonsButton) {
    scanFuelGallonsButton.addEventListener("click", scanFuelGallons);
  }

  const scanFuelMeterButton = document.querySelector("#scanFuelMeter");
  if (scanFuelMeterButton) {
    scanFuelMeterButton.addEventListener("click", scanFuelMeter);
  }

  document.querySelectorAll("[data-fuel-inventory]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      updateFuelInventoryDraft(event.target.dataset.fuelInventory, event.target.value);
    });
  });

  const addFuelInventoryButton = document.querySelector("#addFuelInventoryChange");
  if (addFuelInventoryButton) {
    addFuelInventoryButton.addEventListener("click", addFuelInventoryChange);
  }

  document.querySelectorAll("[data-outbound]").forEach((input) => {
    if (input.tagName === "TEXTAREA") {
      input.addEventListener("input", (event) => {
        state.outbound[event.target.dataset.outbound] = event.target.value;
      });
      return;
    }

    const eventName = input.type === "checkbox" || input.tagName === "SELECT" ? "change" : "change";
    input.addEventListener(eventName, (event) => {
      updateOutboundField(event.target.dataset.outbound, event.target.type === "checkbox" ? event.target.checked : event.target.value);
    });
  });

  document.querySelectorAll("[data-outbound-direction]").forEach((button) => {
    button.addEventListener("click", () => updateOutboundField("direction", button.dataset.outboundDirection));
  });

  const scanOutboundButton = document.querySelector("#scanOutboundTicket");
  if (scanOutboundButton) {
    scanOutboundButton.addEventListener("click", scanOutboundTicket);
  }

  const saveOutboundButton = document.querySelector("#saveOutboundTicket");
  if (saveOutboundButton) {
    saveOutboundButton.addEventListener("click", saveOutboundTicket);
  }

  document.querySelectorAll("[data-outbound-direction-filter]").forEach((button) => {
    button.addEventListener("click", () => setOutboundBillingDirection(button.dataset.outboundDirectionFilter));
  });

  document.querySelectorAll("[data-outbound-customer-filter]").forEach((button) => {
    button.addEventListener("click", () => setOutboundBillingCustomer(button.dataset.outboundCustomerFilter));
  });

  document.querySelectorAll("[data-outbound-period-filter]").forEach((button) => {
    button.addEventListener("click", () => setOutboundBillingPeriod(button.dataset.outboundPeriodFilter));
  });

  document.querySelectorAll("[data-outbound-billed]").forEach((button) => {
    button.addEventListener("click", () => markOutboundBilled(button.dataset.outboundBilled));
  });

  document.querySelectorAll("[data-outbound-unit-draft]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      updateOutboundUnitDraft(event.target.dataset.outboundUnitDraft, event.target.value);
    });
  });

  const addOutboundUnitButton = document.querySelector("#addOutboundUnit");
  if (addOutboundUnitButton) {
    addOutboundUnitButton.addEventListener("click", addOutboundUnit);
  }

  document.querySelectorAll("[data-add-other-request]").forEach((button) => {
    button.addEventListener("click", () => addOtherRequestToList(button.dataset.addOtherRequest));
  });

  document.querySelectorAll("[data-one-off-request]").forEach((button) => {
    button.addEventListener("click", () => markOtherRequestOneOff(button.dataset.oneOffRequest));
  });

  document.querySelectorAll("[data-irrigation]").forEach((input) => {
    if (input.tagName === "TEXTAREA") {
      input.addEventListener("input", (event) => {
        state.irrigation[event.target.dataset.irrigation] = event.target.value;
      });
      return;
    }

    const eventName = input.type === "checkbox" || input.tagName === "SELECT" ? "change" : "change";
    input.addEventListener(eventName, (event) => {
      updateIrrigationField(event.target.dataset.irrigation, event.target.type === "checkbox" ? event.target.checked : event.target.value);
    });
  });

  const saveIrrigationButton = document.querySelector("#saveIrrigationRecord");
  if (saveIrrigationButton) {
    saveIrrigationButton.addEventListener("click", saveIrrigationRecord);
  }

  document.querySelectorAll("[data-irrigation-setup-draft]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      updateIrrigationSetupDraft(event.target.dataset.irrigationSetupDraft, event.target.value);
    });
  });

  const adminIrrigationSetupButton = document.querySelector("#toggleAdminIrrigationSetupLock");
  if (adminIrrigationSetupButton) {
    adminIrrigationSetupButton.addEventListener("click", toggleAdminIrrigationSetupLock);
  }

  document.querySelectorAll(".nutrient-input").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.fertilizerAnalysis[event.target.dataset.nutrient] = event.target.value;
    });
  });

  document.querySelectorAll("[data-tillage]").forEach((input) => {
    const eventName = input.tagName === "SELECT" ? "change" : "input";
    input.addEventListener(eventName, (event) => {
      state.tillage[event.target.dataset.tillage] = event.target.value;
      state.equipment = `${state.tillage.powerUnit} + ${state.tillage.implement}`;
    });
  });

  const headingInput = document.querySelector("#heading");
  if (headingInput) {
    headingInput.addEventListener("input", (event) => {
      state.heading = event.target.value;
      document.querySelector("#headingValue").textContent = `${state.heading} degrees`;
    });
  }

  const amountInput = document.querySelector("#amount");
  if (amountInput) {
    amountInput.addEventListener("input", (event) => {
      state.amount = event.target.value;
    });
  }

  const carrierInput = document.querySelector("#carrier");
  if (carrierInput) {
    carrierInput.addEventListener("input", (event) => {
      state.carrier = event.target.value;
    });
  }

  const operatorInput = document.querySelector("#operator");
  if (operatorInput) {
    operatorInput.addEventListener("change", (event) => {
      state.operator = event.target.value;
    });
  }

  const equipmentInput = document.querySelector("#equipment");
  if (equipmentInput) {
    equipmentInput.addEventListener("change", (event) => {
      state.equipment = event.target.value;
    });
  }

  const applicationModeInput = document.querySelector("#applicationMode");
  if (applicationModeInput) {
    applicationModeInput.addEventListener("change", (event) => {
      state.applicationMode = event.target.value;
    });
  }

  const rupSupervisorInput = document.querySelector("#rupSupervisor");
  if (rupSupervisorInput) {
    rupSupervisorInput.addEventListener("change", (event) => {
      state.rupSupervisorId = event.target.value;
      render();
    });
  }

  const trainingInput = document.querySelector("#nonCertifiedTraining");
  if (trainingInput) {
    trainingInput.addEventListener("change", (event) => {
      state.nonCertifiedTraining = event.target.value;
    });
  }

  const noteInput = document.querySelector("#note");
  if (noteInput) {
    noteInput.addEventListener("input", (event) => {
      state.note = event.target.value;
    });
  }

  const saveButton = document.querySelector("#saveRecord");
  if (saveButton) {
    saveButton.addEventListener("click", () => {
      state.saved = true;
      setRoute("saved-step");
    });
  }
}

function header(title, subtitle, backRoute = "") {
  return `
    <div class="screen-header">
      <div>
        <h2 class="screen-title">${title}</h2>
        <p class="screen-subtitle">${subtitle}</p>
      </div>
      ${backRoute ? `<button class="back-btn" data-route="${backRoute}">Back</button>` : ""}
    </div>
  `;
}

function stepper(step) {
  return `
    <div class="stepper" aria-label="Record progress">
      ${[1, 2, 3, 4, 5].map((number) => `<span class="${number <= step ? "done" : ""}"></span>`).join("")}
    </div>
  `;
}

function renderOtherPrompt() {
  if (!state.otherPrompt) return "";
  return `
    <div class="other-overlay" role="dialog" aria-label="Other value">
      <div class="other-dialog">
        <span class="mini-label">${state.otherPrompt.module} dropdown</span>
        <strong>Type the ${state.otherPrompt.listName.toLowerCase()}</strong>
        <span>${state.otherPrompt.help}</span>
        <div class="field-control">
          <label for="otherDraftValue">Other value</label>
          <input id="otherDraftValue" value="${state.otherDraftValue}" autocomplete="off" />
        </div>
        <div class="other-actions">
          <button id="saveOtherValue" class="primary-btn" type="button">Use once</button>
          <button id="openOtherAdmin" class="ghost-btn" type="button">Use and open Admin</button>
          <button id="cancelOtherValue" class="quiet-btn" type="button">Cancel</button>
        </div>
      </div>
    </div>
  `;
}

function renderHome() {
  return `
    <section class="screen">
      ${header("Field Record", "Start the job, keep the record, build the history.")}
      <div class="today-strip">
        <div class="metric"><b>9</b><span>jobs today</span></div>
        <div class="metric"><b>2</b><span>REI flags</span></div>
        <div class="metric"><b>94%</b><span>synced</span></div>
      </div>

      <p class="section-title">Start a record</p>
      <div class="module-grid">
        ${moduleButton("Spray", "Chemical record, label, REI, weather", "Required", "danger")}
        ${moduleButton("Fertilizer", "Dry or liquid nutrient pass", "Fast entry", "amber")}
        ${moduleButton("Tillage", "Pattern, depth, implement, notes", "Soon", "violet")}
        ${moduleButton("Scouting", "Findings, photos, crop stage, zones", "Scout", "water")}
        ${moduleButton("Harvest", "Load weights, scale photos, destination", "Yield", "field")}
        ${moduleButton("Irrigation", "Pivot set, inches, chemigator, fertigator", "Fast log", "water")}
        ${moduleButton("Fuel", "Gallons, equipment, tank balance", "Fast log", "field")}
        ${moduleButton("Loads", "Outbound, inbound, tickets, bills, invoices", "Loads", "amber")}
      </div>

      <p class="section-title">Warnings</p>
      <button class="report-row" data-route="scout-view">
        <strong>Showan has an active REI window</strong>
        <span>Crop scout view is red until May 20 at 10:14 AM.</span>
      </button>

      <p class="section-title">Quick links</p>
      <div class="stack">
        <button class="field-row" data-route="field-history">
          <span>
            <strong>Open field history</strong>
            <span>See every operation on one map and timeline.</span>
          </span>
          <span class="field-badge">Map</span>
        </button>
        <button class="field-row" data-route="data-center">
          <span>
            <strong>Open data center</strong>
            <span>Totals, acres, products, REI, and trends.</span>
          </span>
          <span class="field-badge">Dash</span>
        </button>
        <button class="field-row" data-route="data-dictionary">
          <span>
            <strong>Open data dictionary</strong>
            <span>See every field the real app needs to store.</span>
          </span>
          <span class="field-badge">Schema</span>
        </button>
        <button class="field-row" data-route="office-review">
          <span>
            <strong>Office review queue</strong>
            <span>Approve entries, send back fixes, and lock records.</span>
          </span>
          <span class="field-badge">3 new</span>
        </button>
        <button class="field-row" data-route="outbound-billing">
          <span>
            <strong>Inbound / outbound office queue</strong>
            <span>Review tickets by customer, period, bill status, and invoice status.</span>
          </span>
          <span class="field-badge">Bills</span>
        </button>
        <button class="field-row" data-route="admin">
          <span>
            <strong>Admin settings</strong>
            <span>Users, access, equipment, edit window, and alerts.</span>
          </span>
          <span class="field-badge">Admin</span>
        </button>
      </div>
    </section>
  `;
}

function moduleButton(name, desc, tag, color) {
  return `
    <button class="module-btn" data-operation="${name}">
      <span class="tag ${color}">${tag}</span>
      <span>
        <strong>${name}</strong>
        <span>${desc}</span>
      </span>
    </button>
  `;
}

function renderFieldStep() {
  const selected = currentField();
  const entryFields = activeFields();
  const continueRoute = state.operation === "Harvest" ? "harvest-load" : "pattern-step";
  const continueLabel = state.operation === "Harvest"
    ? "Continue to load"
    : state.mapMode === "Drive boundary"
    ? "Continue without GPS draft"
    : state.mapMode === "Record GPS track"
    ? "Continue with track later"
    : "Continue to pattern";
  return `
    <section class="screen">
      ${header(`${state.operation} record`, "Pick the field and treated area.", "home")}
      ${stepper(1)}
      <div class="field-map">
        ${mapSvg()}
        <div class="map-caption">
          <span>${selected.name}</span>
          <span>${selected.acres} ac</span>
        </div>
      </div>

      <p class="section-title">Field</p>
      <div class="stack">
        ${entryFields.map((field) => `
          <button class="field-row ${state.fieldId === field.id ? "selected" : ""}" data-field="${field.id}">
            <span>
              <strong>${field.name}</strong>
              <span>${field.farm} - ${field.crop} - ${field.status}</span>
            </span>
            <span class="field-badge">${field.acres} ac</span>
          </button>
        `).join("")}
      </div>

      <p class="section-title">Map source</p>
      <div class="choice-grid">
        ${choice("Saved boundary", "Use stored field outline", "map-mode", state.mapMode)}
        ${choice("Draw area", "Trace a partial job zone", "map-mode", state.mapMode)}
        ${choice("Drive boundary", "Ride the edge with phone GPS", "map-mode", state.mapMode)}
        ${choice("Record GPS track", "Keep a rough pass trail", "map-mode", state.mapMode)}
      </div>
      ${gpsDraftPrompt()}

      <p class="section-title">Job area</p>
      <div class="choice-grid">
        ${choice("Whole field", "All acres in this field", "area-mode", state.areaMode)}
        ${choice("Partial field", "Only a marked zone", "area-mode", state.areaMode)}
      </div>

      <button class="primary-btn" data-route="${continueRoute}">${continueLabel}</button>
    </section>
  `;
}

function gpsDraftPrompt() {
  if (state.mapMode !== "Drive boundary" && state.mapMode !== "Record GPS track") return "";

  const isBoundary = state.mapMode === "Drive boundary";
  return `
    <div class="gps-draft-card">
      <strong>${isBoundary ? "Phone GPS boundary draft" : "Phone GPS pass trail"}</strong>
      <span>${isBoundary ? "Use this in the field when you need to drive around the edge. It creates a draft boundary only; Admin reviews it before the saved field outline changes." : "Use this to keep a rough pass trail for this job. It will not replace the permanent field boundary."}</span>
      <button class="ghost-btn" type="button" data-route="gps-boundary">${isBoundary ? "Start drive boundary" : "Open GPS tracker"}</button>
    </div>
  `;
}

function fastLogFields(lastFieldId, dataAttr, subtitle) {
  const orderedFields = [...activeFields()].sort((a, b) => {
    if (a.id === lastFieldId) return -1;
    if (b.id === lastFieldId) return 1;
    return a.name.localeCompare(b.name);
  });

  return orderedFields.map((field) => {
    const season = activeSeasonForField(field.id);
    const isLast = field.id === lastFieldId;
    return `
      <button class="field-row ${isLast ? "selected" : ""}" ${dataAttr}="${field.id}">
        <span>
          <strong>${field.name}</strong>
          <span>${season.crop} ${season.cropYear} - ${subtitle}</span>
        </span>
        <span class="field-badge">${isLast ? "Last" : `${field.acres} ac`}</span>
      </button>
    `;
  }).join("");
}

function renderHarvestFieldPick() {
  return `
    <section class="screen">
      ${header("Harvest fast log", "Tap the field, then scan or enter the scale weight.", "home")}
      <div class="fast-log-card">
        <strong>Last harvested field is first</strong>
        <span>Harvest skips map source, GPS, and job area. It only needs field, crop year, load weight, truck, driver, and destination.</span>
      </div>
      <p class="section-title">Field</p>
      <div class="stack">
        ${fastLogFields(state.lastHarvestFieldId, "data-harvest-field", "next load number ready")}
      </div>
    </section>
  `;
}

function renderGpsBoundaryDraft() {
  const draft = state.gpsDraft;
  const canFinish = draft.started;
  return `
    <section class="screen">
      ${header("Drive boundary", "Capture a phone GPS draft, then review it in Admin.", "field-step")}
      <div class="field-map gps-map">
        ${gpsBoundarySvg()}
        <div class="map-caption">
          <span>${draft.status}</span>
          <span>${draft.accuracy}</span>
        </div>
      </div>

      <div class="gps-draft-card warning">
        <strong>Draft only</strong>
        <span>Phone GPS is useful for a quick field outline, but it should be checked before it becomes the official boundary. Treated zones and permanent boundaries stay separate.</span>
      </div>

      <div class="gps-metrics">
        ${metricTile("Points", draft.points)}
        ${metricTile("Distance", draft.distance)}
        ${metricTile("Accuracy", draft.accuracy.replace("Phone GPS, ", ""))}
        ${metricTile("Review", draft.review)}
      </div>

      <div class="action-row">
        <button id="startGpsDraft" class="primary-btn" type="button">Start drive</button>
        <button id="pauseGpsDraft" class="ghost-btn" type="button">Pause</button>
      </div>
      <button id="finishGpsDraft" class="primary-btn" type="button" ${canFinish ? "" : "disabled"}>Finish draft for Admin</button>
    </section>
  `;
}

function renderHarvestLoad() {
  const field = currentField();
  const season = activeSeasonForField(field.id);
  const loadNumber = nextHarvestLoadNumber(field.id, season.cropYear);
  const netWeight = harvestNetWeight();
  const hasLoadedWeight = Number.parseFloat(state.harvest.loadedWeight) > 0;
  return `
    <section class="screen">
      ${header("Harvest load", "Snap the scale photo first, then verify.", "harvest-field")}
      <div class="scan-card">
        <strong>Scale photo OCR</strong>
        <span>${state.harvest.ocrStatus}</span>
        <button id="scanHarvestScale" class="primary-btn" type="button">Scan scale photo</button>
      </div>

      ${seasonCard(season)}

      <div class="load-total">
        <span>Load ${loadNumber} net weight</span>
        <strong>${hasLoadedWeight ? formatPounds(netWeight) : "Scan or enter loaded weight"}</strong>
        <small>${hasLoadedWeight ? `${(netWeight / 2000).toFixed(1)} tons` : "Empty weight is ready; loaded weight is still blank."}</small>
      </div>

      <div class="detail-grid">
        <div class="detail"><span>Driver</span><strong>${state.operator}</strong></div>
        <div class="detail"><span>Time</span><strong>Auto now</strong></div>
      </div>

      <p class="section-title">Scale ticket</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="harvestTruck">Truck</label>
          <input id="harvestTruck" data-harvest="truck" value="${state.harvest.truck}" />
        </div>
        <div class="field-control">
          <label for="emptyWeight">Empty weight</label>
          <input id="emptyWeight" data-harvest="emptyWeight" value="${state.harvest.emptyWeight}" inputmode="numeric" />
        </div>
        <div class="field-control">
          <label for="loadedWeight">Loaded weight</label>
          <input id="loadedWeight" data-harvest="loadedWeight" value="${state.harvest.loadedWeight}" inputmode="numeric" />
        </div>
        <div class="field-control">
          <label for="harvestDestination">Destination</label>
          <select id="harvestDestination" data-harvest="destination">
            ${["Same as last - Cellar 4", "Cellar 1", "Cellar 4", "Fresh pack", "Processor", "Cull pile", "Custom"].map((item) => `<option ${state.harvest.destination === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
      </div>

      <p class="section-title">Photos</p>
      <div class="media-grid">
        <div class="media-tile">
          <strong>Scale photo</strong>
          <span>Loaded weight photo attached</span>
        </div>
        <div class="media-tile">
          <strong>Truck photo</strong>
          <span>Optional load proof</span>
        </div>
      </div>

      <div class="field-control">
        <label for="harvestNotes">Load note</label>
        <textarea id="harvestNotes" data-harvest="notes">${state.harvest.notes}</textarea>
      </div>

      <button id="saveHarvestLoad" class="primary-btn" type="button" ${hasLoadedWeight ? "" : "disabled"}>Save load ${loadNumber}</button>
    </section>
  `;
}

function renderHarvestSaved() {
  const report = selectedReport();
  return `
    <section class="screen">
      ${header("Load saved", "The load is tied to field, crop year, driver, and scale photo.", "home")}
      <div class="toast">Harvest load saved and added to field reports.</div>
      <div class="field-map harvest-map">
        ${harvestLoadSvg()}
        <div class="map-caption">
          <span>${report.title}</span>
          <span>${report.badge}</span>
        </div>
      </div>
      <div class="auto-fill">
        <strong>Yield log updated</strong>
        <span>${report.summary}</span>
      </div>
      <button class="primary-btn" data-route="reports">Open field reports</button>
      <button class="ghost-btn" data-route="harvest-load">Add another load</button>
    </section>
  `;
}

function renderFuelLog() {
  const source = selectedFuelSource();
  const gallons = parseNumber(state.fuel.gallons);
  const projectedRemaining = Math.max(0, source.remaining - gallons);
  const field = fields.find((item) => item.id === state.fuel.fieldId) || fields[0];
  const fieldSeasonsForFuel = seasonsForField(field.id);
  const season = fieldSeasonsForFuel.find((item) => item.cropYear === state.fuel.fieldCropYear) || activeSeasonForField(field.id);
  const warnings = fuelWarnings();
  return `
    <section class="screen">
      ${header("Fuel log", "Fast equipment fuel entry with tank balance in the background.", "home")}
      <p class="section-title">Fuel source</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="fuelSource">Fuel source</label>
          <select id="fuelSource" data-fuel="sourceId">
            ${fuelSourceOptions().map((item) => `<option value="${item.id}" ${state.fuel.sourceId === item.id ? "selected" : ""}>${item.name} - ${item.fuelType}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="scan-card">
        <strong>Pump readout OCR</strong>
        <button id="scanFuelGallons" class="primary-btn" type="button">Scan pump gallons</button>
        <span>${state.fuel.gallonOcrStatus}</span>
      </div>
      <div class="form-grid">
        <div class="field-control">
          <label for="fuelGallons">Gallons</label>
          <input id="fuelGallons" data-fuel="gallons" value="${state.fuel.gallons}" inputmode="decimal" />
        </div>
      </div>

      <p class="section-title">Equipment</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="fuelEquipment">Equipment</label>
          <select id="fuelEquipment" data-fuel="equipment">
            ${fuelEquipmentOptions().map((item) => `<option ${state.fuel.equipment === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="scan-card">
        <strong>Meter OCR</strong>
        <button id="scanFuelMeter" class="primary-btn" type="button">Scan hours / odometer</button>
        <span>${state.fuel.meterOcrStatus}</span>
      </div>
      <div class="form-grid">
        <div class="field-control">
          <label for="fuelMeter">Engine hours / odometer</label>
          <input id="fuelMeter" data-fuel="meterReading" value="${state.fuel.meterReading}" inputmode="decimal" />
        </div>
      </div>

      <p class="section-title">Process</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="fuelProcess">Process</label>
          <select id="fuelProcess" data-fuel="process">
            ${optionMarkup(optionsWithOther(["Tillage", "Planting", "Spraying", "Harvesting", "Hauling"], state.fuel.process), state.fuel.process)}
          </select>
        </div>
        <div class="field-control">
          <label for="fuelProcessType">${state.fuel.process} type</label>
          <select id="fuelProcessType" data-fuel="processType">
            ${optionMarkup(optionsWithOther(fuelProcessTypeOptions(), state.fuel.processType), state.fuel.processType)}
          </select>
        </div>
        <div class="field-control">
          <label for="fuelImplement">Implement / attachment</label>
          <select id="fuelImplement" data-fuel="implement">
            ${fuelImplementOptions().map((item) => `<option ${state.fuel.implement === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="fuelOperator">Operator</label>
          <select id="fuelOperator" data-fuel="operator">
            ${employeeOptions().map((item) => `<option ${state.fuel.operator === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
      </div>

      <p class="section-title">Optional field tag</p>
      <div class="rain-card outbound-field-card">
        <label class="toggle-row">
          <input type="checkbox" data-fuel="tagField" ${state.fuel.tagField ? "checked" : ""} />
          <span>
            <strong>Tag to field</strong>
            <small>${state.fuel.tagField ? "Fuel entry will also show in field reports." : "Keep as equipment fuel only."}</small>
          </span>
        </label>
        <div class="field-control">
          <label for="fuelField">Field</label>
          <select id="fuelField" data-fuel="fieldId" ${state.fuel.tagField ? "" : "disabled"}>
            ${fields.map((item) => `<option value="${item.id}" ${state.fuel.fieldId === item.id ? "selected" : ""}>${item.name}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="fuelCropYear">Crop year</label>
          <select id="fuelCropYear" data-fuel="fieldCropYear" ${state.fuel.tagField ? "" : "disabled"}>
            ${fieldSeasonsForFuel.map((item) => `<option value="${item.cropYear}" ${season.cropYear === item.cropYear ? "selected" : ""}>${item.cropYear} - ${item.crop}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="fuelAcresWorked">Acres worked</label>
          <input id="fuelAcresWorked" data-fuel="acresWorked" value="${state.fuel.acresWorked}" inputmode="decimal" ${state.fuel.tagField ? "" : "disabled"} />
        </div>
        <div class="field-control">
          <label for="fuelMilesTraveled">Miles traveled</label>
          <input id="fuelMilesTraveled" data-fuel="milesTraveled" value="${state.fuel.milesTraveled}" inputmode="decimal" />
        </div>
      </div>
      ${state.fuel.tagField ? seasonCard(season) : ""}

      <p class="section-title">Photo</p>
      <div class="media-grid fuel-media">
        <div class="media-tile">
          <strong>Pump / ticket</strong>
          <span>${state.fuel.photoStatus}</span>
        </div>
        <div class="media-tile">
          <strong>Location</strong>
          <span>GPS point saved in real app</span>
        </div>
        <div class="media-tile">
          <strong>Warnings</strong>
          <span>${state.fuel.warning}</span>
        </div>
      </div>

      <div class="field-control">
        <label for="fuelNotes">Notes</label>
        <textarea id="fuelNotes" data-fuel="notes">${state.fuel.notes}</textarea>
      </div>

      <button id="saveFuelEntry" class="primary-btn" type="button" ${gallons ? "" : "disabled"}>Save fuel entry</button>
      <button class="ghost-btn" data-route="admin" type="button">Open fuel inventory in Admin</button>

      <p class="section-title">Tank estimate</p>
      <div class="fast-log-card fuel-card">
        <strong>${source.name}</strong>
        <span>${formatGallons(source.remaining)} remaining before this entry. ${source.fuelType}.</span>
      </div>
      <div class="load-total fuel-total">
        <span>After entry estimate</span>
        <strong>${gallons ? formatGallons(projectedRemaining) : formatGallons(source.remaining)}</strong>
        <small>${gallons ? `${formatGallons(gallons)} will be subtracted from ${source.name}` : "Enter gallons to preview tank balance."}</small>
      </div>

      <p class="section-title">Warnings</p>
      <div class="${warnings.length ? "rei-alert" : "auto-fill"}">
        <strong>${warnings.length ? "Review warnings" : "No warnings"}</strong>
        <span>${warnings.length ? warnings.join(" ") : "This fuel entry has the needed calculation fields."}</span>
      </div>
    </section>
  `;
}

function renderFuelSaved() {
  const entry = fuelEntries[0];
  const source = fuelSources.find((item) => item.id === entry.sourceId) || fuelSources[0];
  return `
    <section class="screen">
      ${header("Fuel saved", "Fuel entry is tied to equipment and tank balance.", "home")}
      <div class="toast">Fuel entry saved.</div>
      <div class="load-total fuel-total">
        <span>${entry.sourceName}</span>
        <strong>${formatGallons(entry.gallons)}</strong>
        <small>${source.name} estimate now ${formatGallons(source.remaining)} remaining.</small>
      </div>
      <div class="auto-fill">
        <strong>${entry.equipment}</strong>
        <span>${entry.process}${entry.warning ? ` - ${entry.warning}` : ""}. Office review can catch missing meter readings without blocking field entry.</span>
      </div>
      <button class="primary-btn" data-route="fuel">Add another fuel entry</button>
      <button class="ghost-btn" data-route="admin">Open Admin inventory</button>
    </section>
  `;
}

function renderIrrigationFieldPick() {
  return `
    <section class="screen">
      ${header("Irrigation fast log", "Tap the field and the pivot setup fills in.", "home")}
      <div class="fast-log-card water">
        <strong>Field setup fills the equipment</strong>
        <span>Each field can store its usual irrigator and the inches applied at 100%. The log then calculates either direction.</span>
      </div>
      <p class="section-title">Field</p>
      <div class="stack">
        ${fastLogFields(state.lastIrrigationFieldId, "data-irrigation-field", "irrigator setup ready")}
      </div>
    </section>
  `;
}

function renderIrrigationLog() {
  const field = currentField();
  const season = activeSeasonForField(field.id);
  const setup = irrigationSetupForField(field.id);
  const rainInches = irrigationRainInches();
  const totalWater = irrigationTotalWaterInches();
  return `
    <section class="screen">
      ${header("Irrigation record", "Enter percent or inches; the other fills in.", "irrigation-field")}
      <div class="field-control">
        <label for="irrigationActiveField">Field</label>
        <select id="irrigationActiveField">
          ${activeFields().map((item) => {
            const fieldSeason = activeSeasonForField(item.id);
            return `<option value="${item.id}" ${field.id === item.id ? "selected" : ""}>${item.name} - ${fieldSeason.crop} ${fieldSeason.cropYear}</option>`;
          }).join("")}
        </select>
      </div>
      ${seasonCard(season)}
      <div class="load-total irrigation-total">
        <span>Total water for this record</span>
        <strong>${formatInches(totalWater)}</strong>
        <small>${formatInches(Number.parseFloat(state.irrigation.inches) || 0)} irrigation${rainInches ? ` + ${formatInches(rainInches)} rain` : ""}</small>
      </div>

      <div class="auto-fill">
        <strong>${setup.equipment}</strong>
        <span>100% setting: ${setup.baseInchesAt100} in. Managed in Admin > Fields > Irrigation setup.</span>
      </div>

      <p class="section-title">Water set</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="irrigationDirection">Run direction</label>
          <select id="irrigationDirection" data-irrigation="direction">
            ${["Forward", "Reverse", "Stationary / parked", "Dry run"].map((item) => `<option ${state.irrigation.direction === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="irrigationPercent">Speed percent</label>
          <input id="irrigationPercent" data-irrigation="percent" value="${state.irrigation.percent}" inputmode="decimal" />
        </div>
        <div class="field-control">
          <label for="irrigationInches">Inches applied</label>
          <input id="irrigationInches" data-irrigation="inches" value="${state.irrigation.inches}" inputmode="decimal" />
        </div>
      </div>

      <button id="saveIrrigationRecord" class="primary-btn" type="button">Save irrigation record</button>

      <p class="section-title">Optional details</p>
      <p class="section-title">Injection</p>
      <div class="toggle-grid">
        <label class="toggle-row">
          <input type="checkbox" data-irrigation="chemigator" ${state.irrigation.chemigator ? "checked" : ""} />
          <span>
            <strong>Chemigator</strong>
            <small>${state.irrigation.chemigator ? "Running" : "Off"}</small>
          </span>
        </label>
        <label class="toggle-row">
          <input type="checkbox" data-irrigation="fertigator" ${state.irrigation.fertigator ? "checked" : ""} />
          <span>
            <strong>Fertigator</strong>
            <small>${state.irrigation.fertigator ? "Running" : "Off"}</small>
          </span>
        </label>
      </div>

      <p class="section-title">Rain</p>
      <div class="rain-card">
        <label class="toggle-row">
          <input type="checkbox" data-irrigation="rainEvent" ${state.irrigation.rainEvent ? "checked" : ""} />
          <span>
            <strong>Rain event</strong>
            <small>${state.irrigation.rainEvent ? "Included in total water" : "No rain added"}</small>
          </span>
        </label>
        <div class="field-control">
          <label for="rainInches">Rain inches</label>
          <input id="rainInches" data-irrigation="rainInches" value="${state.irrigation.rainInches}" inputmode="decimal" ${state.irrigation.rainEvent ? "" : "disabled"} />
        </div>
      </div>

      <div class="field-control">
        <label for="irrigationNotes">Notes</label>
        <textarea id="irrigationNotes" data-irrigation="notes">${state.irrigation.notes}</textarea>
      </div>

      <div class="setup-lock-card">
        <span>Pivot setup</span>
        <strong>${setup.equipment}</strong>
        <small>100% water amount: ${setup.baseInchesAt100} in. This is read-only here so field logs cannot accidentally change calculations.</small>
      </div>
    </section>
  `;
}

function renderIrrigationSaved() {
  const report = selectedReport();
  return `
    <section class="screen">
      ${header("Irrigation saved", "Water record added to the field season.", "home")}
      <div class="toast">Irrigation record saved to field reports.</div>
      <div class="auto-fill">
        <strong>${report.title}</strong>
        <span>${report.summary}</span>
      </div>
      <button class="primary-btn" data-route="reports">Open field reports</button>
      <button class="ghost-btn" data-route="irrigation-log">Add another irrigation set</button>
    </section>
  `;
}

function renderOutboundLog() {
  const netWeight = outboundNetWeight();
  const isWeightUnit = outboundIsWeightUnit();
  const billingQuantity = outboundBillingQuantity();
  const canSave = billingQuantity > 0;
  const copy = outboundDirectionCopy();
  const isBushelUnit = state.outbound.unit === "bushel";
  const bushel = currentOutboundBushelCommodity();
  const netWeightDisplay = state.outbound.netWeight || (netWeight ? String(netWeight) : "");
  const quantityDisplay = state.outbound.quantity || (billingQuantity ? billingQuantity.toFixed(state.outbound.unit === "bushel" ? 1 : 2) : "");
  const field = fields.find((item) => item.id === state.outbound.fieldId) || fields[0];
  const fieldSeasonsForOutbound = seasonsForField(field.id);
  const season = fieldSeasonsForOutbound.find((item) => item.cropYear === state.outbound.fieldCropYear) || activeSeasonForField(field.id);
  return `
    <section class="screen">
      ${header(copy.routeTitle, copy.routeSubtitle, "home")}
      <p class="section-title">Direction</p>
      <div class="choice-grid">
        ${outboundDirections.map((direction) => `
          <button class="choice ${state.outbound.direction === direction ? "selected" : ""}" type="button" data-outbound-direction="${direction}">
            <strong>${direction}</strong>
            <span>${direction === "Inbound" ? "Bill we receive" : "Invoice we send"}</span>
          </button>
        `).join("")}
      </div>

      <div class="scan-card">
        <strong>Ticket photo OCR</strong>
        <span>${state.outbound.ocrStatus}</span>
        <button id="scanOutboundTicket" class="primary-btn" type="button">${copy.scanButton}</button>
      </div>

      <div class="load-total outbound-total">
        <span>Billing quantity</span>
        <strong>${canSave ? outboundConvertedAmount(netWeight) : isWeightUnit ? "Weight needed" : "Units needed"}</strong>
        <small>${isBushelUnit ? `${bushel.name} uses ${bushel.poundsPerBushel} lb per BU.` : isWeightUnit ? `${netWeight ? formatPounds(netWeight) : "Net weight"} converts to ${state.outbound.unit}` : "Count-based ticket; weight can stay blank."}</small>
      </div>

      <p class="section-title">Ticket</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="outboundTicketNumber">Ticket number</label>
          <input id="outboundTicketNumber" data-outbound="ticketNumber" value="${state.outbound.ticketNumber}" />
        </div>
        <div class="field-control">
          <label for="outboundDateTime">Date and time</label>
          <input id="outboundDateTime" data-outbound="dateTime" value="${state.outbound.dateTime}" />
        </div>
        <div class="field-control">
          <label for="outboundCommodity">Commodity</label>
          <select id="outboundCommodity" data-outbound="commodity">
            ${optionMarkup(optionsWithOther(outboundCommodities.map((item) => item.name), state.outbound.commodity), state.outbound.commodity)}
          </select>
        </div>
        <div class="field-control">
          <label for="outboundCustomer">${copy.partyLabel}</label>
          <select id="outboundCustomer" data-outbound="customer">
            ${optionMarkup(optionsWithOther(outboundCustomers, state.outbound.customer), state.outbound.customer)}
          </select>
        </div>
        <div class="field-control">
          <label for="outboundDestination">${copy.destinationLabel}</label>
          <select id="outboundDestination" data-outbound="destination">
            ${optionMarkup(optionsWithOther(outboundDestinations, state.outbound.destination), state.outbound.destination)}
          </select>
        </div>
        <div class="field-control">
          <label for="outboundBillingStatus">${copy.statusLabel}</label>
          <select id="outboundBillingStatus" data-outbound="billingStatus">
            ${outboundStatusOptions().map((item) => `<option ${state.outbound.billingStatus === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
      </div>

      <p class="section-title">Weights</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="outboundGross">Loaded / gross weight</label>
          <input id="outboundGross" data-outbound="grossWeight" value="${state.outbound.grossWeight}" inputmode="numeric" />
        </div>
        <div class="field-control">
          <label for="outboundTare">Empty / tare weight</label>
          <input id="outboundTare" data-outbound="tareWeight" value="${state.outbound.tareWeight}" inputmode="numeric" />
        </div>
        <div class="field-control">
          <label for="outboundNet">Net weight</label>
          <input id="outboundNet" data-outbound="netWeight" value="${netWeightDisplay}" inputmode="numeric" />
        </div>
      </div>

      <p class="section-title">Billing units</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="outboundUnit">Billing unit</label>
          <select id="outboundUnit" data-outbound="unit">
            ${outboundUnits.map((item) => `<option value="${item.code}" ${state.outbound.unit === item.code ? "selected" : ""}>${item.label} - ${item.description}</option>`).join("")}
          </select>
        </div>
        ${isBushelUnit ? `
          <div class="field-control">
            <label for="outboundBushelCommodity">Bushel commodity</label>
            <select id="outboundBushelCommodity" data-outbound="bushelCommodity">
              ${optionMarkup(optionsWithOther(outboundBushelCommodities.map((item) => item.name), state.outbound.bushelCommodity), state.outbound.bushelCommodity)}
            </select>
          </div>
        ` : ""}
        <div class="field-control">
          <label for="outboundQuantity">Units</label>
          <input id="outboundQuantity" data-outbound="quantity" value="${quantityDisplay}" inputmode="decimal" />
        </div>
        <div class="field-control">
          <label for="outboundUnitPrice">Price per unit</label>
          <input id="outboundUnitPrice" data-outbound="unitPrice" value="${state.outbound.unitPrice}" inputmode="decimal" placeholder="Optional" />
        </div>
      </div>

      <p class="section-title">Truck and people</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="outboundTruck">Truck</label>
          <input id="outboundTruck" data-outbound="truck" value="${state.outbound.truck}" />
        </div>
        <div class="field-control">
          <label for="outboundCarrier">Carrier</label>
          <input id="outboundCarrier" data-outbound="carrier" value="${state.outbound.carrier}" />
        </div>
        <div class="field-control">
          <label for="outboundCarrierDriver">Carrier driver name</label>
          <input id="outboundCarrierDriver" data-outbound="carrierDriver" value="${state.outbound.carrierDriver}" />
        </div>
        <div class="field-control">
          <label for="outboundLoader">Loader / ticket entry</label>
          <select id="outboundLoader" data-outbound="loader">
            ${employeeOptions().map((item) => `<option ${state.outbound.loader === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
      </div>

      <p class="section-title">Optional field tag</p>
      <div class="rain-card outbound-field-card">
        <label class="toggle-row">
          <input type="checkbox" data-outbound="tagField" ${state.outbound.tagField ? "checked" : ""} />
          <span>
            <strong>Tag to field</strong>
            <small>${state.outbound.tagField ? copy.fieldTagNote : "Keep as commodity / office record only."}</small>
          </span>
        </label>
        <div class="field-control">
          <label for="outboundField">Field</label>
          <select id="outboundField" data-outbound="fieldId" ${state.outbound.tagField ? "" : "disabled"}>
            ${fields.map((item) => `<option value="${item.id}" ${state.outbound.fieldId === item.id ? "selected" : ""}>${item.name}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="outboundCropYear">Crop year</label>
          <select id="outboundCropYear" data-outbound="fieldCropYear" ${state.outbound.tagField ? "" : "disabled"}>
            ${fieldSeasonsForOutbound.map((item) => `<option value="${item.cropYear}" ${season.cropYear === item.cropYear ? "selected" : ""}>${item.cropYear} - ${item.crop}</option>`).join("")}
          </select>
        </div>
      </div>
      ${state.outbound.tagField ? seasonCard(season) : ""}

      <p class="section-title">Ticket photos</p>
      <div class="media-grid outbound-media">
        <div class="media-tile">
          <strong>Load ticket</strong>
          <span>${state.outbound.photoStatus}</span>
        </div>
        <div class="media-tile">
          <strong>Scale ticket</strong>
          <span>Optional second photo</span>
        </div>
        <div class="media-tile">
          <strong>OCR proof</strong>
          <span>Original image kept with edits</span>
        </div>
      </div>

      <div class="field-control">
        <label for="outboundNotes">Notes</label>
        <textarea id="outboundNotes" data-outbound="notes">${state.outbound.notes}</textarea>
      </div>

      <button id="saveOutboundTicket" class="primary-btn" type="button" ${canSave ? "" : "disabled"}>Save ${copy.noun}</button>
      <button class="ghost-btn" data-route="outbound-billing" type="button">${copy.reviewRoute}</button>
    </section>
  `;
}

function renderOutboundSaved() {
  const ticket = outboundTickets[0];
  const copy = outboundDirectionCopy(ticket.direction);
  return `
    <section class="screen">
      ${header(copy.savedTitle, copy.savedSubtitle, "home")}
      <div class="toast">${copy.savedToast}</div>
      <div class="load-total outbound-total">
        <span>${ticket.ticketNumber}</span>
        <strong>${outboundTicketAmount(ticket)}</strong>
        <small>${outboundMovementLine(ticket)}</small>
      </div>
      <div class="auto-fill">
        <strong>${copy.queueTitle}</strong>
        <span>${ticket.billingStatus}. Office can filter by party or period, mark ${outboundClosedStatus(ticket.direction).toLowerCase()}, and later connect the reviewed lines to QuickBooks.</span>
      </div>
      <button class="primary-btn" data-route="outbound">Add another ticket</button>
      <button class="ghost-btn" data-route="outbound-billing">${copy.reviewRoute}</button>
    </section>
  `;
}

function outboundTicketAmount(ticket) {
  return outboundConvertedAmount(ticket.netWeight, ticket.unit, ticket.commodity, ticket.quantity, ticket.bushelCommodity);
}

function outboundMovementLine(ticket) {
  return ticket.direction === "Inbound"
    ? `${ticket.commodity} from ${ticket.customer} into ${ticket.destination}`
    : `${ticket.commodity} to ${ticket.customer} at ${ticket.destination}`;
}

function renderOutboundBilling() {
  const tickets = outboundBillingTickets();
  const totalPounds = tickets.reduce((total, ticket) => total + ticket.netWeight, 0);
  return `
    <section class="screen">
      ${header("Inbound / outbound office", "Review tickets before bill entry, invoicing, or export.", "outbound")}
      <div class="load-total outbound-total">
        <span>Selected tickets</span>
        <strong>${tickets.length}</strong>
        <small>${formatPounds(totalPounds)} across this queue view</small>
      </div>

      <p class="section-title">Direction</p>
      <div class="choice-grid">
        ${["All", ...outboundDirections].map((direction) => `
          <button class="choice ${state.outboundBillingDirection === direction ? "selected" : ""}" type="button" data-outbound-direction-filter="${direction}">
            <strong>${direction}</strong>
            <span>${direction === "Inbound" ? "Bills coming in" : direction === "Outbound" ? "Invoices going out" : "Both directions"}</span>
          </button>
        `).join("")}
      </div>

      <p class="section-title">Customer</p>
      <div class="choice-grid">
        ${["All customers", ...outboundCustomers.filter((item) => item !== "Other")].map((customer) => `
          <button class="choice ${state.outboundBillingCustomer === customer ? "selected" : ""}" type="button" data-outbound-customer-filter="${customer}">
            <strong>${customer}</strong>
            <span>${customer === "All customers" ? "Show everything" : "Customer tickets"}</span>
          </button>
        `).join("")}
      </div>

      <p class="section-title">Billing period</p>
      <div class="choice-grid">
        ${["This month", "This week", "Custom range", "All open"].map((period) => `
          <button class="choice ${state.outboundBillingPeriod === period ? "selected" : ""}" type="button" data-outbound-period-filter="${period}">
            <strong>${period}</strong>
            <span>${period === "Custom range" ? "Start and end date later" : "Fast office filter"}</span>
          </button>
        `).join("")}
      </div>

      <p class="section-title">Tickets</p>
      <div class="stack">
        ${tickets.map((ticket) => outboundTicketRow(ticket)).join("")}
      </div>

      <div class="quickbooks-card">
        <strong>QuickBooks handoff later</strong>
        <span>The real app can create invoice-ready lines for outbound and bill-review lines for inbound. QuickBooks Online requires an Intuit app connection and OAuth approval before our system can push either side.</span>
      </div>
    </section>
  `;
}

function outboundTicketRow(ticket) {
  const copy = outboundDirectionCopy(ticket.direction);
  const closedStatus = outboundClosedStatus(ticket.direction);
  return `
    <div class="report-row outbound-ticket-row">
      <span>
        <strong>${ticket.direction || "Outbound"} - ${ticket.customer} - ${ticket.ticketNumber}</strong>
        <span>${outboundMovementLine(ticket)}</span>
        <span>${outboundTicketAmount(ticket)} - ${ticket.truck} - loaded by ${ticket.loader || ticket.driver}</span>
        <span>${ticket.carrier}${ticket.carrierDriver ? ` - driver ${ticket.carrierDriver}` : ""}</span>
      </span>
      <span class="outbound-actions">
        <span class="field-badge">${ticket.billingStatus}</span>
        <button class="quiet-btn" type="button" data-outbound-billed="${ticket.id}" ${ticket.billingStatus === closedStatus ? "disabled" : ""}>Mark ${closedStatus.toLowerCase()}</button>
      </span>
    </div>
  `;
}

function renderPatternStep() {
  const nextLabel = state.operation === "Tillage" ? "Continue to tillage details" : "Continue to product";
  return `
    <section class="screen">
      ${header("Pattern", "Store how the work was done.", "field-step")}
      ${stepper(2)}
      <div class="field-map">
        ${patternSvg()}
        <div class="map-caption">
          <span>${state.pattern}</span>
          <span>${state.pattern === "Circle pivot" ? "pivot" : `${state.heading} degrees`}</span>
        </div>
      </div>

      <p class="section-title">Pass pattern</p>
      <div class="choice-grid">
        ${choice("Same as last", `${currentField().lastPattern}`, "pattern", state.pattern)}
        ${choice("0 degrees", "Straight north-south", "pattern", state.pattern)}
        ${choice("90 degrees", "Straight east-west", "pattern", state.pattern)}
        ${choice("Angle", "Custom heading", "pattern", state.pattern)}
        ${choice("Circle pivot", "Round or pivot pattern", "pattern", state.pattern)}
        ${choice("Custom GPS", "Import machine pass later", "pattern", state.pattern)}
      </div>

      <div class="field-control">
        <label for="heading">Heading</label>
        <input id="heading" type="range" min="0" max="180" value="${state.heading}" />
        <strong id="headingValue">${state.heading} degrees</strong>
      </div>

      <button class="primary-btn" data-route="product-step">${nextLabel}</button>
    </section>
  `;
}

function renderProductStep() {
  if (state.operation === "Tillage") return renderTillageStep();
  if (state.operation === "Fertilizer") return renderFertilizerProductStep();
  return renderChemicalProductStep();
}

function renderChemicalProductStep() {
  const strongestProduct = state.tankMix
    .map((mix) => chemicalProducts.find((item) => item.id === mix.id))
    .filter(Boolean)
    .sort((a, b) => parseInt(b.rei, 10) - parseInt(a.rei, 10))[0] || chemicalProducts[0];
  return `
    <section class="screen">
      ${header("Tank mix", "Add each product and rate in the blend.", "pattern-step")}
      ${stepper(3)}

      <p class="section-title">Products in tank</p>
      <div class="stack">
        ${state.tankMix.map((mix, index) => tankMixCard(mix, index)).join("")}
      </div>
      <button id="addTankProduct" class="ghost-btn" type="button">Add another product</button>

      <div class="form-grid">
        <div class="field-control">
          <label for="carrier">Carrier</label>
          <input id="carrier" value="${state.carrier}" />
        </div>
      </div>

      <div class="auto-fill">
        <strong>Tank mix safety rule</strong>
        <span>Use the longest REI in the mix. Current mock REI: ${strongestProduct.rei} from ${strongestProduct.name}.</span>
      </div>

      <p class="section-title">Proof photos</p>
      <div class="camera-box">
        <span>
          <strong>Attach label photos for storage</strong>
          <span>Keep jug, tote, or label images with the saved record after the OCR details are verified.</span>
        </span>
      </div>

      <button class="primary-btn" data-route="weather-step">Continue to weather</button>
    </section>
  `;
}

function tankMixCard(mix, index) {
  const product = chemicalProducts.find((item) => item.id === mix.id) || chemicalProducts[0];
  return `
    <article class="mix-card">
      <div class="mix-card-head">
        <strong>Product ${index + 1}</strong>
        ${state.tankMix.length > 1 ? `<button class="quiet-btn" type="button" data-remove-tank="${index}">Remove</button>` : ""}
      </div>
      <div class="scan-card label-scan-card">
        <strong>Label OCR</strong>
        <button class="primary-btn" type="button" data-scan-tank-label="${index}">Scan product label</button>
        <span>${mix.labelOcrStatus || `Photo can read product name, EPA number, REI, PHI, active ingredient, and RUP flag.`}</span>
      </div>
      <div class="form-grid">
        <div class="field-control">
          <label for="tankProduct${index}">Product</label>
          <select id="tankProduct${index}" data-tank-product="${index}">
            ${chemicalProducts.map((item) => `<option value="${item.id}" ${item.id === mix.id ? "selected" : ""}>${item.name}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="tankRate${index}">Amount or rate</label>
          <input id="tankRate${index}" data-tank-rate="${index}" value="${mix.amount}" />
        </div>
      </div>
      <div class="detail-grid">
        <div class="detail"><span>EPA</span><strong>${product.epa}</strong></div>
        <div class="detail"><span>REI</span><strong>${product.rei}</strong></div>
        <div class="detail"><span>PHI</span><strong>${product.phi}</strong></div>
        <div class="detail"><span>Active</span><strong>${product.active}</strong></div>
        <div class="detail"><span>RUP</span><strong>${product.rup}</strong></div>
        <div class="detail"><span>Source</span><strong>${product.source}</strong></div>
      </div>
    </article>
  `;
}

function renderTillageStep() {
  const t = state.tillage;
  return `
    <section class="screen">
      ${header("Tillage details", "Record the implement, depth, purpose, and field condition.", "pattern-step")}
      ${stepper(3)}
      <div class="field-map">
        ${tillageMapSvg()}
        <div class="map-caption">
          <span>${t.implement}</span>
          <span>${state.heading} degrees</span>
        </div>
      </div>

      <p class="section-title">Pass setup</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="powerUnit">Power unit</label>
          <select id="powerUnit" data-tillage="powerUnit">
            ${equipmentItems("Tractors and Other Power Units").map((item) => `<option ${t.powerUnit === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="tillageImplement">Implement</label>
          <select id="tillageImplement" data-tillage="implement">
            ${equipmentItems("Tillage Equipment").map((item) => `<option ${t.implement === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="tillagePurpose">Purpose</label>
          <select id="tillagePurpose" data-tillage="purpose">
            ${["Residue sizing", "Seedbed prep", "Weed control", "Incorporate fertilizer", "Break compaction", "Hilling / cultivation", "Drying ground"].map((item) => `<option ${t.purpose === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
      </div>

      <p class="section-title">Machine settings</p>
      <div class="detail-grid">
        ${tillageInput("Depth", "depth", t.depth)}
        ${tillageInput("Passes", "passes", t.passes)}
        ${tillageInput("Speed", "speed", t.speed)}
        ${tillageInput("Attachment", "attachment", t.attachment)}
      </div>

      <p class="section-title">Field condition</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="soilMoisture">Soil moisture</label>
          <select id="soilMoisture" data-tillage="soilMoisture">
            ${["Too wet", "Tacky", "Fit", "Dry", "Hard / crusted"].map((item) => `<option ${t.soilMoisture === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="residue">Residue level</label>
          <select id="residue" data-tillage="residue">
            ${["Low", "Medium", "Heavy", "Standing stalks", "Cover crop"].map((item) => `<option ${t.residue === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="finish">Finish target</label>
          <input id="finish" data-tillage="finish" value="${t.finish}" />
        </div>
      </div>

      <div class="auto-fill">
        <strong>Record what matters later</strong>
        <span>Pattern, depth, pass count, moisture, residue, and implement all land in field history beside spray, fertilizer, and scouting.</span>
      </div>

      <button class="primary-btn" data-route="weather-step">Continue to weather</button>
    </section>
  `;
}

function tillageInput(label, key, value) {
  return `
    <label class="nutrient-field">
      <span>${label}</span>
      <input data-tillage="${key}" value="${value}" />
    </label>
  `;
}

function renderFertilizerProductStep() {
  const product = currentProduct();
  const nutrients = state.fertilizerAnalysis;
  const rateLabel = product.form === "Dry" ? "Total pounds per acre" : "Total gallons per acre";
  return `
    <section class="screen">
      ${header("Fertilizer", "Pick a common blend or enter a custom analysis.", "pattern-step")}
      ${stepper(3)}
      <div class="camera-box">
        <span>
          <strong>Take blend ticket or label photo</strong>
          <span>Mock capture: attach the ticket, tote label, or product sheet to the record.</span>
        </span>
      </div>

      <p class="section-title">Common fertilizer picks</p>
      <div class="stack">
        ${fertilizerProducts.map((item) => `
          <button class="product-row ${state.productId === item.id ? "selected" : ""}" data-product="${item.id}">
            <strong>${item.name}</strong>
            <span>${item.form} - ${item.rateUnit} - ${item.source}</span>
          </button>
        `).join("")}
      </div>

      <p class="section-title">Nutrient analysis</p>
      <div class="auto-fill">
        <strong>${product.name}</strong>
        <div class="detail-grid">
          ${nutrientInput("N", "n", nutrients.n)}
          ${nutrientInput("P", "p", nutrients.p)}
          ${nutrientInput("K", "k", nutrients.k)}
          ${nutrientInput("S", "s", nutrients.s)}
          ${nutrientInput("Zn", "zn", nutrients.zn)}
          ${nutrientInput("B", "b", nutrients.b)}
        </div>
      </div>

      <div class="form-grid">
        <div class="field-control">
          <label for="amount">${rateLabel}</label>
          <input id="amount" value="${state.amount}" />
        </div>
        <div class="field-control">
          <label for="carrier">Blend notes</label>
          <input id="carrier" value="${state.carrier}" />
        </div>
      </div>

      <button class="primary-btn" data-route="weather-step">Continue to weather</button>
    </section>
  `;
}

function nutrientInput(label, key, value) {
  return `
    <label class="nutrient-field">
      <span>${label}</span>
      <input class="nutrient-input" data-nutrient="${key}" value="${value}" placeholder="0" inputmode="decimal" />
    </label>
  `;
}

function renderWeatherStep() {
  const isTillage = state.operation === "Tillage";
  return `
    <section class="screen">
      ${header("Weather and operator", "Auto-fill what you can, edit what you must.", "product-step")}
      ${stepper(4)}
      <div class="weather-grid">
        <div class="weather-item"><strong>${weather.temp}</strong><span>Temperature</span></div>
        <div class="weather-item"><strong>${weather.wind}</strong><span>Wind</span></div>
        <div class="weather-item"><strong>${weather.humidity}</strong><span>Humidity</span></div>
        <div class="weather-item"><strong>${weather.captured}</strong><span>${weather.station}</span></div>
      </div>

      <p class="section-title">Mode of application</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="applicationMode">Application mode</label>
          <select id="applicationMode">
            ${applicationModeOptions().map((mode) => `<option ${state.applicationMode === mode ? "selected" : ""}>${mode}</option>`).join("")}
          </select>
        </div>
      </div>

      <p class="section-title">Operator details</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="operator">Operator</label>
          <select id="operator">
            ${employeeOptions().map((employee) => `<option ${state.operator === employee ? "selected" : ""}>${employee}</option>`).join("")}
          </select>
        </div>
        ${isTillage ? renderPowerImplementSummary() : renderEquipmentField()}
        ${state.operation === "Spray" ? renderRupSupervisorField() : ""}
        <div class="field-control">
          <label for="note">Notes</label>
          <textarea id="note">${state.note}</textarea>
        </div>
      </div>

      <button class="primary-btn" data-route="review-step">Review record</button>
    </section>
  `;
}

function renderRupSupervisorField() {
  const supervisor = rupSupervisor();
  const options = rupSupervisorOptions();
  return `
    <div class="rup-panel">
      <div class="field-control">
        <label for="rupSupervisor">Certified applicator / RUP supervisor</label>
        <select id="rupSupervisor">
          ${options.map((employee) => `<option value="${employee.id}" ${state.rupSupervisorId === employee.id ? "selected" : ""}>${employee.number} - ${employee.name}</option>`).join("")}
        </select>
      </div>
      <div class="detail-grid">
        <div class="detail"><span>License</span><strong>${supervisor.rupLicense || "Needed"}</strong></div>
        <div class="detail"><span>Expires</span><strong>${supervisor.rupExpires || "Needed"}</strong></div>
      </div>
      <div class="field-control">
        <label for="nonCertifiedTraining">If operator is non-certified</label>
        <select id="nonCertifiedTraining">
          ${["On file", "Needs training proof", "Certified applicator only", "Not a RUP job"].map((item) => `<option ${state.nonCertifiedTraining === item ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </div>
      <div class="auto-fill">
        <strong>Operator and license holder can be different</strong>
        <span>This keeps the person doing the work separate from the person whose RUP certification supervises the job.</span>
      </div>
    </div>
  `;
}

function renderEquipmentField() {
  const options = [
    ...equipmentItems("Chemical Application Equipment"),
    ...equipmentItems("Irrigation")
  ];
  return `
    <div class="field-control">
      <label for="equipment">Equipment</label>
      <select id="equipment">
        ${options.map((item) => `<option ${state.equipment === item ? "selected" : ""}>${item}</option>`).join("")}
      </select>
    </div>
  `;
}

function renderPowerImplementSummary() {
  const t = state.tillage;
  return `
    <div class="locked-summary">
      <div>
        <span>Power unit</span>
        <strong>${t.powerUnit}</strong>
      </div>
      <div>
        <span>Implement</span>
        <strong>${t.implement}</strong>
      </div>
    </div>
  `;
}

function renderReviewStep() {
  const field = currentField();
  const product = currentProduct();
  const isFertilizer = state.operation === "Fertilizer";
  const isTillage = state.operation === "Tillage";
  const tankProducts = state.tankMix.map((mix) => {
    const item = chemicalProducts.find((candidate) => candidate.id === mix.id) || chemicalProducts[0];
    return `${item.name}, ${mix.amount || "rate needed"}`;
  }).join("; ");
  const tankLongestRei = state.tankMix
    .map((mix) => chemicalProducts.find((item) => item.id === mix.id))
    .filter(Boolean)
    .sort((a, b) => parseInt(b.rei, 10) - parseInt(a.rei, 10))[0] || chemicalProducts[0];
  const supervisor = rupSupervisor();
  const nutrients = state.fertilizerAnalysis;
  const fertilizerAnalysis = isFertilizer
    ? `${nutrients.n || "custom"}-${nutrients.p || "custom"}-${nutrients.k || "custom"} plus S ${nutrients.s || "custom"}, Zn ${nutrients.zn || "custom"}, B ${nutrients.b || "custom"}`
    : "";
  return `
    <section class="screen">
      ${header("Review", "Confirm before this becomes a permanent record.", "weather-step")}
      ${stepper(5)}
      <div class="review-card">
        <h3>${state.operation} - ${field.name}</h3>
        <dl class="summary-list">
          ${summary("Field", `${field.farm}, ${field.acres} acres`)}
          ${summary("Area", `${state.areaMode} using ${state.mapMode}`)}
          ${summary("Pattern", `${state.pattern}, ${state.heading} degrees`)}
          ${isTillage ? summary("Equipment", `${state.tillage.powerUnit} + ${state.tillage.implement}`) : summary(isFertilizer ? "Product" : "Tank mix", isFertilizer ? `${product.name}, ${state.amount}` : tankProducts)}
          ${isTillage ? summary("Settings", `${state.tillage.depth}, ${state.tillage.passes} pass`) : ""}
          ${isTillage ? summary("Purpose", `${state.tillage.purpose}; ${state.tillage.finish}`) : isFertilizer ? summary("Nutrients", fertilizerAnalysis) : summary("Longest REI", `${tankLongestRei.rei}, ${tankLongestRei.name}`)}
          ${isTillage ? summary("Condition", `${state.tillage.soilMoisture} soil, ${state.tillage.residue} residue`) : ""}
          ${summary("Mode", state.applicationMode)}
          ${summary("Weather", `${weather.temp}, ${weather.wind}, ${weather.humidity}`)}
          ${summary("Operator", isTillage ? state.operator : `${state.operator}, ${state.equipment}`)}
          ${state.operation === "Spray" ? summary("Certified applicator", `${supervisor.number} - ${supervisor.name}, ${supervisor.rupLicense || "license needed"}, expires ${supervisor.rupExpires || "needed"}`) : ""}
          ${state.operation === "Spray" ? summary("Training proof", state.nonCertifiedTraining) : ""}
          ${summary("Stored", isTillage ? "Pattern, implement, depth, field condition, map, weather, and record snapshot" : isFertilizer ? "Blend ticket, nutrient analysis, map, weather, and record snapshot" : "Label photo, label source, map, weather, and record snapshot")}
        </dl>
      </div>

      ${isTillage ? `
        <div class="auto-fill">
          <strong>Tillage record lands in field history</strong>
          <span>This makes it searchable later against scouting notes, compaction, crop stand, and yield observations.</span>
        </div>
      ` : isFertilizer ? `
        <div class="auto-fill">
          <strong>No pesticide REI flag for this fertilizer record</strong>
          <span>The nutrient record still lands in field history and dashboards.</span>
        </div>
      ` : `
        <div class="rei-alert">
          <strong>REI will flag this field for ${tankLongestRei.rei}</strong>
          <span>Scouts and employees will see the warning until it clears.</span>
        </div>
      `}

      <button id="saveRecord" class="primary-btn">Save mock record</button>
      <button class="ghost-btn" data-route="product-step">${isTillage ? "Edit details" : "Edit product"}</button>
    </section>
  `;
}

function renderSavedStep() {
  const product = currentProduct();
  const tankLongestRei = state.tankMix
    .map((mix) => chemicalProducts.find((item) => item.id === mix.id))
    .filter(Boolean)
    .sort((a, b) => parseInt(b.rei, 10) - parseInt(a.rei, 10))[0] || chemicalProducts[0];
  const saveCaption = state.operation === "Fertilizer"
    ? ["Nutrient record saved", product.name]
    : state.operation === "Tillage"
    ? ["Tillage record saved", state.tillage.implement]
    : ["REI warning active", tankLongestRei.rei];
  return `
    <section class="screen">
      ${header("Record saved", "This is where the real app would sync when online.", "home")}
      <div class="toast">Mock record saved to this prototype.</div>
      <div class="field-map">
        ${patternSvg()}
        <div class="map-caption">
          <span>${saveCaption[0]}</span>
          <span>${saveCaption[1]}</span>
        </div>
      </div>
      <div class="stack">
        <button class="field-row" data-route="field-history">
          <span>
            <strong>View field history</strong>
            <span>See the record on the timeline.</span>
          </span>
          <span class="field-badge">Open</span>
        </button>
        <button class="field-row" data-route="reports">
          <span>
            <strong>Open reports</strong>
            <span>Preview the compliance record.</span>
          </span>
          <span class="field-badge">PDF</span>
        </button>
      </div>
    </section>
  `;
}

function renderFieldHistory() {
  const field = currentField();
  const season = activeSeasonForField(field.id);
  return `
    <section class="screen">
      ${header("Field history", "Everything tied back to one field.", "home")}
      <div class="field-map">
        ${historyMapSvg()}
        <div class="map-caption">
          <span>${field.name}</span>
          <span>${field.acres} ac</span>
        </div>
      </div>

      ${seasonCard(season)}

      <p class="section-title">Field summary</p>
      <div class="detail-grid">
        <div class="detail"><span>Crop</span><strong>${season.crop}</strong></div>
        <div class="detail"><span>Crop year</span><strong>${season.cropYear}</strong></div>
        <div class="detail"><span>Last pass</span><strong>102 degrees</strong></div>
        <div class="detail"><span>Open REI</span><strong>1 active</strong></div>
        <div class="detail"><span>Records</span><strong>${reportsForField(field.id).length} reports</strong></div>
      </div>

      <p class="section-title">Timeline</p>
      <div class="timeline">
        ${history.map((item) => `
          <div class="timeline-item">
            <span class="timeline-dot ${item[3]}"></span>
            <span>
            <strong>${item[0]} - ${item[1]}</strong>
              <span>${item[2]}</span>
            </span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDataCenter() {
  return `
    <section class="screen">
      ${header("Data center", "Simple entry turns into useful history.", "home")}
      <div class="dashboard-grid">
        <div class="dashboard-card"><b>4,830</b><span>acres logged this season</span></div>
        <div class="dashboard-card"><b>112</b><span>field records</span></div>
        <div class="dashboard-card"><b>36</b><span>chemical records</span></div>
        <div class="dashboard-card"><b>9</b><span>active products</span></div>
      </div>

      <p class="section-title">Operations by acre</p>
      <div class="bar-chart">
        <div class="bar" style="height: 80%"><span>Spray</span></div>
        <div class="bar" style="height: 44%"><span>Scout</span></div>
        <div class="bar" style="height: 68%"><span>Fert</span></div>
        <div class="bar" style="height: 52%"><span>Till</span></div>
      </div>

      <p class="section-title">Useful pulls</p>
      <div class="stack">
        <button class="report-row" data-route="reports">
          <strong>Restricted-use and chemical records</strong>
          <span>Product, EPA number, rate, applicator, weather, and REI.</span>
        </button>
        <button class="report-row" data-route="data-dictionary">
          <strong>Data dictionary</strong>
          <span>Field list for spray, fertilizer, tillage, scouting, users, maps, and audit trail.</span>
        </button>
        <button class="report-row" data-route="field-history">
          <strong>Field-by-field crop input history</strong>
          <span>See inputs, patterns, maps, and notes by crop year.</span>
        </button>
      </div>
    </section>
  `;
}

function renderReports() {
  const field = reportField();
  const seasons = seasonsForField(field.id);
  const season = selectedFieldSeason();
  const reports = reportsForSelectedSeason();
  const loads = harvestLoadsForSeason(field.id, season.cropYear);
  const totalYield = loads.reduce((total, load) => total + load.netWeight, 0);
  return `
    <section class="screen">
      ${header("Reports", "Look up field records without billing clutter.", "home")}
      <div class="field-map">
        ${historyMapSvg()}
        <div class="map-caption">
          <span>${field.name}</span>
          <span>${reports.length} reports</span>
        </div>
      </div>

      ${seasonCard(season, totalYield, loads.length)}

      <p class="section-title">Choose field</p>
      <div class="stack">
        ${fields.map((item) => `
          <button class="field-row ${state.selectedReportField === item.id ? "selected" : ""} ${item.status === "Archived" ? "archived" : ""}" data-report-field="${item.id}">
            <span>
              <strong>${item.name}</strong>
              <span>${item.farm} - ${item.crop} - ${item.status}</span>
            </span>
            <span class="field-badge">${reportsForField(item.id).length}</span>
          </button>
        `).join("")}
      </div>

      <p class="section-title">Crop year</p>
      <div class="choice-grid">
        ${seasons.map((item) => `
          <button class="choice ${state.selectedReportYear === item.cropYear ? "selected" : ""}" type="button" data-report-year="${item.cropYear}">
            <strong>${item.cropYear}</strong>
            <span>${item.crop} - ${item.status}</span>
          </button>
        `).join("")}
      </div>

      <p class="section-title">Entry reports</p>
      <div class="stack">
        ${reports.map((report) => reportLookupRow(report)).join("") || `
          <div class="auto-fill">
            <strong>No records yet</strong>
            <span>Once field jobs are saved, they will show here by crop year and operation.</span>
          </div>
        `}
      </div>
    </section>
  `;
}

function reportLookupRow(report) {
  return `
    <button class="report-row" data-report-entry="${report.id}">
      <span>
        <strong>${report.type} - ${report.date}</strong>
        <span>${report.title}</span>
        <span>${report.summary}</span>
      </span>
      <span class="field-badge">${report.badge}</span>
    </button>
  `;
}

function renderReportDetail() {
  const report = selectedReport();
  const field = fields.find((item) => item.id === report.fieldId) || fields[0];
  const season = fieldSeasons.find((item) => item.fieldId === report.fieldId && item.cropYear === report.cropYear);
  return `
    <section class="screen">
      ${header(report.type, `${field.name} - ${report.date}`, "reports")}
      ${season ? seasonCard(season) : ""}
      <div class="review-card report-detail-card">
        <span class="tag ${report.type === "Spray" ? "danger" : report.type === "Fertilizer" ? "amber" : report.type === "Scouting" ? "water" : "violet"}">${report.cropYear}</span>
        <h3>${report.title}</h3>
        <p>${report.summary}</p>
        <dl class="summary-list">
          ${report.details.map(([label, value]) => summary(label, value)).join("")}
        </dl>
      </div>
      <div class="auto-fill">
        <strong>Field lookup purpose</strong>
        <span>This is the kind of quick field memory you can open from the pickup: what happened this year, last year, or two years ago without digging through paperwork.</span>
      </div>
      <button class="primary-btn" data-route="reports">Back to report lookup</button>
      <button class="ghost-btn" data-route="field-history">View field timeline</button>
    </section>
  `;
}

function renderScoutView() {
  return `
    <section class="screen">
      ${header("Scout view", "Read-only access with safety flags first.", "home")}
      <div class="field-map">
        ${scoutMapSvg()}
        <div class="map-caption">
          <span>REI zones</span>
          <span>2 warnings</span>
        </div>
      </div>

      <p class="section-title">Before scouting</p>
      <div class="stack">
        <div class="rei-alert">
          <strong>Showan - do not enter</strong>
          <span>Boundary 6.5 EC. Clears May 20 at 10:14 AM.</span>
        </div>
        <div class="auto-fill">
          <strong>E47 - caution</strong>
          <span>REI clears today at 6:20 PM. Read-only field history available.</span>
        </div>
      </div>

      <p class="section-title">Scout actions</p>
      <div class="choice-grid">
        <button class="choice selected" data-route="scout-entry">
          <strong>Add scouting report</strong>
          <span>Photos, GPS, notes, voice, video</span>
        </button>
        <button class="choice" data-route="field-history">
          <strong>View field history</strong>
          <span>Spray, fert, tillage, planting</span>
        </button>
      </div>
    </section>
  `;
}

function renderScoutEntry() {
  return `
    <section class="screen">
      ${header("Scouting report", "Capture field observations with location and media.", "scout-view")}
      <div class="field-map">
        ${scoutEntryMapSvg()}
        <div class="map-caption">
          <span>GPS point attached</span>
          <span>37.579, -106.148</span>
        </div>
      </div>

      <p class="section-title">Observation</p>
      <div class="form-grid">
        <div class="field-control">
          <label for="scoutField">Field</label>
          <select id="scoutField">
            <option>Stone Ridge 6</option>
            <option>E47</option>
            <option>Showan</option>
          </select>
        </div>
      </div>

      <p class="section-title">Issues found</p>
      <div class="stack">
        ${state.scoutingIssues.map((issue, index) => scoutIssueCard(issue, index)).join("")}
      </div>
      <button id="addScoutIssue" class="ghost-btn" type="button">Add another issue</button>

      <p class="section-title">Photo and media</p>
      <div class="media-grid">
        <div class="media-tile">
          <strong>Photo</strong>
          <span>Geotagged leaf photo</span>
        </div>
        <div class="media-tile">
          <strong>Video</strong>
          <span>15 sec field clip</span>
        </div>
        <div class="media-tile">
          <strong>Voice</strong>
          <span>Voice note captured</span>
        </div>
      </div>

      <div class="auto-fill">
        <strong>Voice transcription draft</strong>
        <span>Heavy kochia along the west ditch. Some pressure continues 40 feet into the field. Recommend follow-up check after next spray window.</span>
      </div>

      <div class="field-control">
        <label for="scoutNotes">Scout notes</label>
        <textarea id="scoutNotes">Kochia along west ditch. Attach photo to GPS point and include in weekly report.</textarea>
      </div>

      <button class="primary-btn" data-route="scout-saved">Save scouting report</button>
    </section>
  `;
}

function renderScoutSaved() {
  return `
    <section class="screen">
      ${header("Scout report saved", "Alert queued and report ready for review.", "scout-view")}
      <div class="toast">Scout report saved. ${state.adminSettings.alertMethod} notice queued for Weston.</div>
      <div class="field-map">
        ${scoutEntryMapSvg()}
        <div class="map-caption">
          <span>Photo + GPS saved</span>
          <span>Report queued</span>
        </div>
      </div>
      <div class="auto-fill">
        <strong>Office follow-up</strong>
        <span>The real app would send the alert, attach the photo location, and place this scouting report into Office Review and field history.</span>
      </div>
      <button class="primary-btn" data-route="reports">Open field reports</button>
      <button class="ghost-btn" data-route="scout-view">Back to scout view</button>
    </section>
  `;
}

function scoutIssueCard(issue, index) {
  const issueTypes = ["Weeds", "Water / irrigation", "Insects", "Disease", "Nutrient concern", "Stand or emergence"];
  const severities = ["Low", "Medium", "High", "Watch only"];
  return `
    <article class="issue-card">
      <div class="issue-card-head">
        <strong>Issue ${index + 1}</strong>
      </div>
      <div class="form-grid">
        <div class="field-control">
          <label for="scoutType${index}">Issue type</label>
          <select id="scoutType${index}" data-scout-type="${index}">
            ${issueTypes.map((type) => `<option ${issue.type === type ? "selected" : ""}>${type}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="severity${index}">Severity</label>
          <select id="severity${index}" data-scout-severity="${index}">
            ${severities.map((severity) => `<option ${issue.severity === severity ? "selected" : ""}>${severity}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="scoutNote${index}">Issue note</label>
          <textarea id="scoutNote${index}" data-scout-note="${index}">${issue.note}</textarea>
        </div>
      </div>
    </article>
  `;
}

function renderOfficeReview() {
  const openCount = reviewQueue.filter((item) => item.decision !== "approved").length;
  return `
    <section class="screen">
      ${header("Office review", "Check entries, approve them, then lock the record.", "home")}
      ${state.reviewNotice ? `<div class="toast review-toast">${state.reviewNotice}</div>` : ""}
      <div class="review-rule">
        <strong>Current rule: 48 hour operator edit window</strong>
        <span>Employees can fix their own entries for two days. Office approval locks the record, and admin unlocks require an audit note.</span>
      </div>

      <p class="section-title">Needs review</p>
      <div class="queue-count">
        <strong>${openCount}</strong>
        <span>${openCount === 1 ? "record still needs action" : "records still need action"}</span>
      </div>
      <div class="stack">
        ${reviewQueue.map((item) => reviewQueueCard(item)).join("")}
      </div>

      <p class="section-title">Office actions</p>
      <div class="choice-grid">
        ${choiceStatic("Approve and lock", "Record becomes permanent")}
        ${choiceStatic("Send back", "Operator gets a fix request")}
        ${choiceStatic("Admin unlock", "Requires audit reason")}
        ${choiceStatic("Daily recap", "Send report summary")}
      </div>

      <p class="section-title">Audit trail</p>
      <div class="timeline compact">
        <div class="timeline-item">
          <span class="timeline-dot"></span>
          <span>
            <strong>Weston approved spray record</strong>
            <span>May 19, 9:22 AM - label, rate, weather, and map checked.</span>
          </span>
        </div>
        <div class="timeline-item">
          <span class="timeline-dot amber"></span>
          <span>
            <strong>Dave scouting report created</strong>
            <span>Text alert queued to Weston with photo and GPS point.</span>
          </span>
        </div>
      </div>
    </section>
  `;
}

function reviewQueueCard(item) {
  const locked = item.decision === "approved";
  const returned = item.decision === "sent-back";
  return `
    <article class="queue-card ${locked ? "approved" : returned ? "sent-back" : ""}">
      <div class="queue-head">
        <span class="tag ${item.type === "Spray" ? "danger" : item.type === "Scouting" ? "water" : "violet"}">${item.type}</span>
        <strong>${item.field}</strong>
      </div>
      <div class="detail-grid">
        <div class="detail"><span>Submitted</span><strong>${item.submitted}</strong></div>
        <div class="detail"><span>Operator</span><strong>${item.operator}</strong></div>
        <div class="detail"><span>Status</span><strong>${item.status}</strong></div>
        <div class="detail"><span>Edit lock</span><strong>${item.lock}</strong></div>
      </div>
      <div class="auto-fill">
        <strong>${item.alert}</strong>
        <span>Office can approve, send back, or flag for follow-up before the record locks.</span>
      </div>
      <div class="action-row">
        <button class="primary-btn" type="button" data-approve-review="${item.id}" ${locked ? "disabled" : ""}>${locked ? "Approved" : "Approve"}</button>
        <button class="ghost-btn" type="button" data-sendback-review="${item.id}" ${locked ? "disabled" : ""}>${returned ? "Sent back" : "Send back"}</button>
      </div>
    </article>
  `;
}

function renderAdmin() {
  const user = selectedAdminUser();
  const totalEquipment = equipmentCategoryCounts.reduce((total, item) => total + item[1], 0);
  return `
    <section class="screen">
      ${header("Admin", "Users, fields, equipment, locks, and alerts.", "home")}
      ${state.adminNotice ? `<div class="toast review-toast">${state.adminNotice}</div>` : ""}
      ${adminSectionTabs()}
      ${state.adminSection === "Users" ? renderAdminUsers(user) : ""}
      ${state.adminSection === "Fields" ? renderAdminFields() : ""}
      ${state.adminSection === "Equipment" ? renderAdminEquipment(totalEquipment) : ""}
      ${state.adminSection === "Fuel" ? renderAdminFuel() : ""}
      ${state.adminSection === "Loads" ? renderAdminOutbound() : ""}
      ${state.adminSection === "Lists" ? renderAdminLists() : ""}
      ${state.adminSection === "Alerts" ? renderAdminAlerts() : ""}
      ${state.adminSection === "Settings" ? renderAdminRecordSettings() : ""}
    </section>
  `;
}

function adminSectionTabs() {
  const sections = ["Users", "Fields", "Equipment", "Fuel", "Loads", "Lists", "Alerts", "Settings"];
  return `
    <div class="admin-tab-grid">
      ${sections.map((section) => `
        <button class="ghost-btn ${state.adminSection === section ? "selected" : ""}" type="button" data-admin-section="${section}">${section}</button>
      `).join("")}
    </div>
  `;
}

function renderAdminUsers(user) {
  return `
    <p class="section-title">Add user</p>
    ${addUserPanel()}

    <p class="section-title">User access</p>
    ${adminUserEditor(user)}

    <p class="section-title">Users and roles</p>
    <div class="stack">
      ${employees.map((employee) => adminUserRow(employee)).join("")}
    </div>
  `;
}

function renderAdminFields() {
  return `
    <p class="section-title">Field bank</p>
    ${fieldBankPanel()}
    <p class="section-title">Crop seasons</p>
    ${cropSeasonPanel()}
    <p class="section-title">Irrigation setup</p>
    ${fieldIrrigationSetupPanel()}
  `;
}

function renderAdminEquipment(totalEquipment) {
  return `
    <p class="section-title">Add equipment</p>
    ${equipmentAddPanel()}

    <p class="section-title">Archive equipment</p>
    ${equipmentArchivePanel()}

    <p class="section-title">Equipment catalog</p>
    <div class="catalog-summary">
      <strong>${totalEquipment}</strong>
      <span>equipment records found in Equipment Numbers transfer.xlsx</span>
    </div>
    <div class="category-grid">
      ${equipmentCategoryCounts.map(([label, count]) => `<div><strong>${count}</strong><span>${label}</span></div>`).join("")}
    </div>

    <p class="section-title">Dropdown sources</p>
    <div class="stack">
      ${catalogPreview("Tractors and Other Power Units", "Power unit dropdown")}
      ${catalogPreview("Tillage Equipment", "Tillage implement dropdown")}
      ${catalogPreview("Chemical Application Equipment", "Sprayer and applicator dropdown")}
      ${catalogPreview("Irrigation", "Pivot and chemigation dropdown")}
    </div>
  `;
}

function renderAdminFuel() {
  const source = fuelSources.find((item) => item.id === state.fuelInventoryDraft.sourceId) || fuelSources[0];
  return `
    <p class="section-title">Fuel inventory</p>
    <div class="fuel-source-grid">
      ${fuelSources.map((item) => fuelSourceCard(item)).join("")}
    </div>

    <p class="section-title">Delivery or adjustment</p>
    <div class="settings-editor">
      <div class="auto-fill">
        <strong>${source.name}</strong>
        <span>Current estimate: ${formatGallons(source.remaining)} remaining. Field fuel logs subtract from this; deliveries and corrections are managed here.</span>
      </div>
      <div class="form-grid">
        <div class="field-control">
          <label for="fuelInventorySource">Fuel source</label>
          <select id="fuelInventorySource" data-fuel-inventory="sourceId">
            ${fuelSources.map((item) => `<option value="${item.id}" ${state.fuelInventoryDraft.sourceId === item.id ? "selected" : ""}>${item.name}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="fuelDeliveryGallons">Delivery gallons</label>
          <input id="fuelDeliveryGallons" data-fuel-inventory="deliveryGallons" value="${state.fuelInventoryDraft.deliveryGallons}" inputmode="decimal" />
        </div>
        <div class="field-control">
          <label for="fuelAdjustmentGallons">Manual adjustment</label>
          <input id="fuelAdjustmentGallons" data-fuel-inventory="adjustmentGallons" value="${state.fuelInventoryDraft.adjustmentGallons}" inputmode="decimal" />
        </div>
      </div>
      <div class="field-control">
        <label for="fuelInventoryNote">Note</label>
        <textarea id="fuelInventoryNote" data-fuel-inventory="note">${state.fuelInventoryDraft.note}</textarea>
      </div>
      <button id="addFuelInventoryChange" class="primary-btn" type="button">Save fuel inventory change</button>
    </div>

    <p class="section-title">Recent fuel records</p>
    <div class="stack">
      ${fuelEntries.slice(0, 5).map((entry) => fuelEntryRow(entry)).join("")}
    </div>
  `;
}

function fuelSourceCard(source) {
  const percent = source.capacity ? Math.min(100, Math.round((source.remaining / source.capacity) * 100)) : 0;
  return `
    <div class="fuel-source-card ${source.remaining <= source.lowThreshold ? "low" : ""}">
      <span>${source.fuelType}</span>
      <strong>${source.name}</strong>
      <small>${formatGallons(source.remaining)} remaining${source.capacity ? ` - ${percent}% of capacity` : ""}</small>
      <em>${source.status}</em>
    </div>
  `;
}

function fuelEntryRow(entry) {
  const field = entry.fieldId ? fields.find((item) => item.id === entry.fieldId) : null;
  return `
    <div class="report-row outbound-ticket-row">
      <span>
        <strong>${entry.equipment}</strong>
        <span>${formatGallons(entry.gallons)} from ${entry.sourceName} - ${entry.process}${entry.processType ? ` / ${entry.processType}` : ""}</span>
        <span>${entry.operator}${field ? ` - ${field.name}` : ""}</span>
      </span>
      <span class="field-badge">${entry.status}</span>
    </div>
  `;
}

function renderAdminOutbound() {
  const draft = state.outboundUnitDraft;
  return `
    <p class="section-title">Billing units</p>
    <div class="fuel-source-grid">
      ${outboundUnits.map((unit) => outboundUnitCard(unit)).join("")}
    </div>

    <p class="section-title">Add or update unit</p>
    <div class="settings-editor">
      <div class="auto-fill">
        <strong>Units control billing quantity</strong>
        <span>Weight units calculate from net weight. BU uses the selected commodity bushel weight. Count units like each, bale, or load let the operator type the units even when there is no scale weight.</span>
      </div>
      <div class="form-grid">
        <div class="field-control">
          <label for="outboundUnitCode">Unit code</label>
          <input id="outboundUnitCode" data-outbound-unit-draft="code" value="${draft.code}" />
        </div>
        <div class="field-control">
          <label for="outboundUnitLabel">Unit label</label>
          <input id="outboundUnitLabel" data-outbound-unit-draft="label" value="${draft.label}" />
        </div>
        <div class="field-control">
          <label for="outboundUnitKind">Unit type</label>
          <select id="outboundUnitKind" data-outbound-unit-draft="kind">
            ${["count", "weight", "commodityWeight"].map((item) => `<option ${draft.kind === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="outboundPoundsPerUnit">Pounds per unit</label>
          <input id="outboundPoundsPerUnit" data-outbound-unit-draft="poundsPerUnit" value="${draft.poundsPerUnit}" inputmode="decimal" placeholder="Only for weight units" />
        </div>
        <div class="field-control">
          <label for="outboundUnitDescription">Description</label>
          <input id="outboundUnitDescription" data-outbound-unit-draft="description" value="${draft.description}" />
        </div>
      </div>
      <button id="addOutboundUnit" class="primary-btn" type="button">Save billing unit</button>
    </div>
  `;
}

function renderAdminLists() {
  const pending = state.otherRequests.filter((request) => request.status === "Needs admin decision");
  return `
    <p class="section-title">Other values</p>
    <div class="auto-fill">
      <strong>One-off entries stay out of permanent lists</strong>
      <span>When someone chooses Other in a dropdown, the typed value lands here. Admin can add it to the proper list or keep it as a one-time record.</span>
    </div>
    <div class="load-total outbound-total">
      <span>Needs decision</span>
      <strong>${pending.length}</strong>
      <small>Review before dropdowns get cluttered.</small>
    </div>
    <div class="stack">
      ${state.otherRequests.map((request) => otherRequestRow(request)).join("")}
    </div>
  `;
}

function otherRequestRow(request) {
  const closed = request.status !== "Needs admin decision";
  return `
    <div class="report-row outbound-ticket-row">
      <span>
        <strong>${request.module} - ${request.listName}</strong>
        <span>${request.value}</span>
        <span>${request.source} - ${request.requestedBy} - ${request.requestedAt}</span>
      </span>
      <span class="outbound-actions">
        <span class="field-badge">${request.status}</span>
        <button class="quiet-btn" type="button" data-add-other-request="${request.id}" ${closed ? "disabled" : ""}>Add to list</button>
        <button class="quiet-btn" type="button" data-one-off-request="${request.id}" ${closed ? "disabled" : ""}>One-off</button>
      </span>
    </div>
  `;
}

function outboundUnitCard(unit) {
  const detail = unit.kind === "commodityWeight"
    ? "uses commodity bushel weight"
    : unit.kind === "weight"
    ? `${unit.poundsPerUnit} lb each`
    : "manual count";
  return `
    <div class="fuel-source-card">
      <span>${unit.kind}</span>
      <strong>${unit.label}</strong>
      <small>${unit.code} - ${unit.description}</small>
      <em>${detail}</em>
    </div>
  `;
}

function renderAdminAlerts() {
  const settings = state.adminSettings;
  return `
    <p class="section-title">Alert rules</p>
    <div class="settings-editor">
      <div class="form-grid">
        <div class="field-control">
          <label for="adminAlertMethod">Scout alert method</label>
          <select id="adminAlertMethod" data-admin-setting="alertMethod">
            ${["Text + email", "Text only", "Email only", "Daily recap only"].map((item) => `<option ${settings.alertMethod === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="adminDailyRecap">Daily recap time</label>
          <input id="adminDailyRecap" data-admin-setting="dailyRecap" value="${settings.dailyRecap}" />
        </div>
      </div>
      <div class="auto-fill">
        <strong>Scouting report alert</strong>
        <span>When a scout saves a report, Weston gets a short alert and the full report can go into the day-end recap.</span>
      </div>
      <button id="queueTestAlert" class="primary-btn" type="button">Queue sample alert</button>
    </div>
  `;
}

function renderAdminRecordSettings() {
  return `
    <p class="section-title">Record settings</p>
    ${renderAdminSettings()}
  `;
}

function renderAdminSettings() {
  const settings = state.adminSettings;
  return `
    <div class="settings-editor">
      <div class="form-grid">
        <div class="field-control">
          <label for="editWindow">Operator edit window</label>
          <select id="editWindow" data-admin-setting="editWindow">
            ${["24 hours", "48 hours", "72 hours"].map((item) => `<option ${settings.editWindow === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="retention">Record retention</label>
          <select id="retention" data-admin-setting="retention">
            ${["Forever", "3 years", "2 years"].map((item) => `<option ${settings.retention === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="alertMethod">Scout alert method</label>
          <select id="alertMethod" data-admin-setting="alertMethod">
            ${["Text + email", "Text only", "Email only", "Daily recap only"].map((item) => `<option ${settings.alertMethod === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="dailyRecap">Daily recap time</label>
          <input id="dailyRecap" data-admin-setting="dailyRecap" value="${settings.dailyRecap}" />
        </div>
      </div>
      <label class="toggle-row">
        <input type="checkbox" data-admin-setting="officeReview" ${settings.officeReview ? "checked" : ""} />
        <span>
          <strong>Office approval before records lock</strong>
          <small>${settings.officeReview ? "On" : "Off"} - keeps a review step between field entry and permanent history.</small>
        </span>
      </label>
    </div>
  `;
}

function addUserPanel() {
  const draft = state.newUserDraft;
  return `
    <div class="access-panel add-user-panel">
      <div class="auto-fill">
        <strong>Email is the access key</strong>
        <span>In a Google/App Script setup, this email would be the account invited to enter or view records. Phone can be used for text alerts.</span>
      </div>
      <div class="form-grid">
        <div class="field-control">
          <label for="newUserName">Name</label>
          <input id="newUserName" data-new-user-field="name" value="${draft.name}" />
        </div>
        <div class="field-control">
          <label for="newUserEmail">Gmail or email</label>
          <input id="newUserEmail" data-new-user-field="email" value="${draft.email}" inputmode="email" />
        </div>
        <div class="field-control">
          <label for="newUserPhone">Phone for text alerts</label>
          <input id="newUserPhone" data-new-user-field="phone" value="${draft.phone}" inputmode="tel" />
        </div>
        <div class="field-control">
          <label for="newUserRupLicense">RUP license number</label>
          <input id="newUserRupLicense" data-new-user-field="rupLicense" value="${draft.rupLicense || ""}" />
        </div>
        <div class="field-control">
          <label for="newUserRupExpires">RUP license expiration</label>
          <input id="newUserRupExpires" data-new-user-field="rupExpires" value="${draft.rupExpires || ""}" placeholder="YYYY-MM-DD" />
        </div>
        <div class="field-control">
          <label for="newUserExpires">Access expires</label>
          <select id="newUserExpires" data-new-user-field="expires">
            ${["Season end", "48 hours", "7 days", "30 days", "No expiration"].map((item) => `<option ${draft.expires === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="newUserRole">Role</label>
          <select id="newUserRole" data-new-user-field="role">
            ${["Field scout", "Temporary operator", "Field employee", "Office review", "View only"].map((item) => `<option ${draft.role === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="newUserAccess">Access level</label>
          <select id="newUserAccess" data-new-user-field="access">
            ${["Scout entry + view", "Limited entry", "Entry + view", "Review + view", "View only"].map((item) => `<option ${draft.access === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="permission-grid">
        ${newUserPermissionTile("View all records", draft.view === "All records")}
        ${newUserPermissionTile("Spray", draft.entry.includes("Spray"), "Spray entry")}
        ${newUserPermissionTile("Fertilizer", draft.entry.includes("Fertilizer"), "Fertilizer entry")}
        ${newUserPermissionTile("Tillage", draft.entry.includes("Tillage"), "Tillage entry")}
        ${newUserPermissionTile("Scouting", draft.entry.includes("Scouting"), "Scouting entry")}
        ${newUserPermissionTile("Admin settings", Boolean(draft.admin))}
      </div>
      <button id="addNewUser" class="primary-btn" type="button">Add user and invite</button>
    </div>
  `;
}

function adminUserEditor(user) {
  return `
    <div class="access-panel">
      <div class="user-status-line">
        <span class="${user.status === "Suspended" ? "status-pill suspended" : "status-pill"}">${user.status}</span>
        <span>${user.expires || "No expiration"}</span>
      </div>
      <div class="form-grid">
        <div class="field-control">
          <label for="adminUserName">Employee name</label>
          <input id="adminUserName" data-user-field="name" value="${user.name}" />
        </div>
        <div class="field-control">
          <label for="adminUserEmail">Email for app access</label>
          <input id="adminUserEmail" data-user-field="email" value="${user.email || ""}" inputmode="email" />
        </div>
        <div class="field-control">
          <label for="adminUserPhone">Phone for alerts</label>
          <input id="adminUserPhone" data-user-field="phone" value="${user.phone || ""}" inputmode="tel" />
        </div>
        <div class="field-control">
          <label for="adminUserRupLicense">RUP license number</label>
          <input id="adminUserRupLicense" data-user-field="rupLicense" value="${user.rupLicense || ""}" />
        </div>
        <div class="field-control">
          <label for="adminUserRupExpires">RUP license expiration</label>
          <input id="adminUserRupExpires" data-user-field="rupExpires" value="${user.rupExpires || ""}" placeholder="YYYY-MM-DD" />
        </div>
        <div class="field-control">
          <label for="adminUserExpires">Access expires</label>
          <select id="adminUserExpires" data-user-field="expires">
            ${["No expiration", "Season end", "48 hours", "7 days", "30 days"].map((item) => `<option ${(user.expires || "No expiration") === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="adminUserRole">Role</label>
          <select id="adminUserRole" data-user-field="role">
            ${["Admin / executive", "Office review", "Field employee", "Field scout", "Tillage crew", "Temporary operator", "View only"].map((item) => `<option ${user.role === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="adminUserAccess">Access level</label>
          <select id="adminUserAccess" data-user-field="access">
            ${["Full access", "Review + view", "Entry + view", "Scout entry + view", "Tillage entry + view", "Limited entry", "View only"].map((item) => `<option ${user.access === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="adminUserView">View scope</label>
          <select id="adminUserView" data-user-field="view">
            ${["All records", "Assigned fields"].map((item) => `<option ${user.view === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="permission-grid">
        ${permissionTile("View all records", user.view === "All records")}
        ${permissionTile("Spray", user.entry.includes("Spray"), "Spray entry")}
        ${permissionTile("Fertilizer", user.entry.includes("Fertilizer"), "Fertilizer entry")}
        ${permissionTile("Tillage", user.entry.includes("Tillage"), "Tillage entry")}
        ${permissionTile("Scouting", user.entry.includes("Scouting"), "Scouting entry")}
        ${permissionTile("Admin settings", user.admin)}
      </div>
      <div class="action-row">
        <button id="saveAdminUser" class="primary-btn" type="button">Save user setup</button>
        <button id="toggleSelectedUserStatus" class="ghost-btn" type="button">${user.status === "Suspended" ? "Restore access" : "Suspend access"}</button>
      </div>
      <button id="archiveSelectedUser" class="ghost-btn danger-ghost" type="button">Archive user</button>
      ${renderUserStatusHistory(user)}
    </div>
  `;
}

function renderUserStatusHistory(user) {
  const events = user.statusHistory || ["Active - imported"];
  return `
    <div class="status-history">
      <strong>Status history</strong>
      ${events.map((event) => `<span>${event}</span>`).join("")}
    </div>
  `;
}

function adminUserRow(employee) {
  const badge = employee.admin ? "Admin" : employee.entry[0] === "Office review" ? "Review" : employee.entry[0] || "View";
  return `
    <button class="user-row ${employee.id === state.selectedAdminUser ? "selected" : ""} ${employee.status === "Suspended" ? "suspended" : ""}" data-admin-user="${employee.id}">
      <span>
        <strong>${employee.number} - ${employee.name}</strong>
        <span>${employee.role} - ${employee.access}</span>
        <span>${employee.email || "Email needed"}${employee.phone ? ` - ${employee.phone}` : ""}</span>
      </span>
      <span class="field-badge">${employee.status === "Suspended" ? "Off" : badge}</span>
    </button>
  `;
}

function permissionTile(permission, enabled, label = permission) {
  return `
    <button class="permission ${enabled ? "enabled" : ""}" type="button" data-permission="${permission}">
      <span>${enabled ? "On" : "Off"}</span>
      <strong>${label}</strong>
    </button>
  `;
}

function newUserPermissionTile(permission, enabled, label = permission) {
  return `
    <button class="permission ${enabled ? "enabled" : ""}" type="button" data-new-user-permission="${permission}">
      <span>${enabled ? "On" : "Off"}</span>
      <strong>${label}</strong>
    </button>
  `;
}

function fieldBankPanel() {
  const draft = state.fieldDraft;
  return `
    <div class="access-panel field-bank-panel">
      <div class="admin-map">
        ${adminBoundarySvg()}
        <div class="map-caption">
          <span>${draft.source}</span>
          <span>${draft.boundaryVersion}</span>
        </div>
      </div>
      <div class="auto-fill">
        <strong>Permanent boundary stays separate</strong>
        <span>Admin saves the field boundary. Field entry can draw a treated zone for one job, but that zone will not replace this saved field outline.</span>
      </div>
      ${gpsAdminReviewPanel()}
      <div class="form-grid">
        <div class="field-control">
          <label for="fieldName">Field name</label>
          <input id="fieldName" data-field-draft="name" value="${draft.name}" />
        </div>
        <div class="field-control">
          <label for="fieldFarm">Farm</label>
          <input id="fieldFarm" data-field-draft="farm" value="${draft.farm}" />
        </div>
        <div class="field-control">
          <label for="fieldCrop">Field crop note</label>
          <input id="fieldCrop" data-field-draft="crop" value="${draft.crop}" />
        </div>
        <div class="field-control">
          <label for="fieldAcres">Acres</label>
          <input id="fieldAcres" data-field-draft="acres" value="${draft.acres}" inputmode="decimal" />
        </div>
        <div class="field-control">
          <label for="boundarySource">Boundary source</label>
          <select id="boundarySource" data-field-draft="source">
            ${["Office map click", "Drive boundary with GPS", "Import KML / shapefile", "Copy from another system"].map((item) => `<option ${draft.source === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="boundaryVersion">Boundary version</label>
          <input id="boundaryVersion" data-field-draft="boundaryVersion" value="${draft.boundaryVersion}" />
        </div>
        <div class="field-control">
          <label for="fieldNotes">Boundary notes</label>
          <textarea id="fieldNotes" data-field-draft="notes">${draft.notes}</textarea>
        </div>
      </div>
      <div class="choice-grid">
        ${choiceStatic("Click perimeter", "Desktop map: click points around edge")}
        ${choiceStatic("Drag points", "Move corners before saving")}
        ${choiceStatic("Import file", "KML, GeoJSON, or shapefile later")}
        ${choiceStatic("Drive later", "Collect with phone GPS", "gps-boundary")}
      </div>
      <button id="addFieldToBank" class="primary-btn" type="button">Add field boundary</button>
      <div class="catalog-card">
        <div class="catalog-head">
          <strong>Saved fields</strong>
          <span>${fields.length} fields</span>
        </div>
        ${fields.map((field) => fieldArchiveRow(field)).join("")}
      </div>
    </div>
  `;
}

function fieldArchiveRow(field) {
  const archived = field.status === "Archived";
  const season = activeSeasonForField(field.id);
  return `
    <div class="archive-row ${archived ? "archived" : ""}">
      <span>
        <strong>${field.name}</strong>
        <small>${field.farm} - ${field.acres} ac - ${season.crop} ${season.cropYear} - ${archived ? "archived, history kept" : "active in entry lists"}</small>
      </span>
      <button class="quiet-btn" type="button" ${archived ? `data-restore-field="${field.id}"` : `data-archive-field="${field.id}"`}>
        ${archived ? "Restore" : "Archive"}
      </button>
    </div>
  `;
}

function cropSeasonPanel() {
  const draft = state.cropSeasonDraft;
  return `
    <div class="access-panel crop-season-panel">
      <div class="auto-fill">
        <strong>Crop history stays separate from the boundary</strong>
        <span>The field boundary is permanent. Crop seasons are year-by-year, so the same field can be potatoes in 2026, canola in 2024, or have a second crop after harvest.</span>
      </div>
      <div class="form-grid">
        <div class="field-control">
          <label for="seasonField">Field</label>
          <select id="seasonField" data-crop-season-draft="fieldId">
            ${fields.map((field) => `<option value="${field.id}" ${draft.fieldId === field.id ? "selected" : ""}>${field.name}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="seasonYear">Crop year</label>
          <input id="seasonYear" data-crop-season-draft="cropYear" value="${draft.cropYear}" inputmode="numeric" />
        </div>
        <div class="field-control">
          <label for="seasonCrop">Crop</label>
          <input id="seasonCrop" data-crop-season-draft="crop" value="${draft.crop}" />
        </div>
        <div class="field-control">
          <label for="seasonStatus">Status</label>
          <select id="seasonStatus" data-crop-season-draft="status">
            ${["Planned crop", "Active crop", "Second crop", "Cover crop", "Closed season"].map((item) => `<option ${draft.status === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="seasonAcres">Acres</label>
          <input id="seasonAcres" data-crop-season-draft="acres" value="${draft.acres}" inputmode="decimal" />
        </div>
        <div class="field-control">
          <label for="seasonStart">Start</label>
          <input id="seasonStart" data-crop-season-draft="start" value="${draft.start}" />
        </div>
        <div class="field-control">
          <label for="seasonEnd">End</label>
          <input id="seasonEnd" data-crop-season-draft="end" value="${draft.end}" />
        </div>
        <div class="field-control">
          <label for="seasonNote">Season note</label>
          <textarea id="seasonNote" data-crop-season-draft="note">${draft.note}</textarea>
        </div>
      </div>
      <button id="addCropSeason" class="primary-btn" type="button">Add crop season</button>
      <div class="catalog-card">
        <div class="catalog-head">
          <strong>Crop seasons</strong>
          <span>${fieldSeasons.length} seasons</span>
        </div>
        ${fieldSeasons.slice(0, 8).map((season) => {
          const field = fields.find((item) => item.id === season.fieldId) || fields[0];
          return `
            <div class="archive-row">
              <span>
                <strong>${field.name} - ${season.cropYear} ${season.crop}</strong>
                <small>${season.status} - ${season.acres} ac - ${season.start} to ${season.end}</small>
              </span>
              <span class="field-badge">${season.cropYear}</span>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function fieldIrrigationSetupPanel() {
  const draft = state.irrigationSetupDraft;
  const unlocked = draft.unlocked;
  const irrigationOptions = equipmentItems("Irrigation");
  return `
    <div class="access-panel">
      <div class="auto-fill">
        <strong>Irrigator is tied to the field</strong>
        <span>The irrigation fast log pulls equipment and 100% water amount from this field setup. Operators see it as read-only information on the irrigation record.</span>
      </div>
      <div class="setup-lock-card ${unlocked ? "unlocked" : ""}">
        <span>Admin setup</span>
        <strong>${unlocked ? "Unlocked for changes" : "Locked setup values"}</strong>
        <small>${unlocked ? "Edit the field irrigation setup, then lock it to save." : "Unlock here when the field's pivot or 100% water amount changes."}</small>
        <div class="form-grid">
          <div class="field-control">
            <label for="irrigationSetupField">Field</label>
            <select id="irrigationSetupField" data-irrigation-setup-draft="fieldId" ${unlocked ? "" : "disabled"}>
              ${activeFields().map((field) => `<option value="${field.id}" ${draft.fieldId === field.id ? "selected" : ""}>${field.name}</option>`).join("")}
            </select>
          </div>
          <div class="field-control">
            <label for="irrigationSetupEquipment">Irrigation equipment</label>
            <select id="irrigationSetupEquipment" data-irrigation-setup-draft="equipment" ${unlocked ? "" : "disabled"}>
              ${irrigationOptions.map((item) => `<option ${draft.equipment === item ? "selected" : ""}>${item}</option>`).join("")}
            </select>
          </div>
          <div class="field-control">
            <label for="setupBaseInches">100% water amount</label>
            <input id="setupBaseInches" data-irrigation-setup-draft="baseInchesAt100" value="${draft.baseInchesAt100}" inputmode="decimal" ${unlocked ? "" : "disabled"} />
          </div>
          <div class="field-control">
            <label for="setupDirection">Default direction</label>
            <select id="setupDirection" data-irrigation-setup-draft="lastDirection" ${unlocked ? "" : "disabled"}>
              ${["Forward", "Reverse", "Stationary / parked", "Dry run"].map((item) => `<option ${draft.lastDirection === item ? "selected" : ""}>${item}</option>`).join("")}
            </select>
          </div>
          <div class="field-control">
            <label for="setupPercent">Last/default percent</label>
            <input id="setupPercent" data-irrigation-setup-draft="lastPercent" value="${draft.lastPercent}" inputmode="decimal" ${unlocked ? "" : "disabled"} />
          </div>
        </div>
        <button id="toggleAdminIrrigationSetupLock" class="ghost-btn" type="button">${unlocked ? "Lock and save irrigation setup" : "Unlock irrigation setup"}</button>
      </div>
      <div class="catalog-card">
        <div class="catalog-head">
          <strong>Field irrigation defaults</strong>
          <span>${irrigationSetups.length} setups</span>
        </div>
        ${activeFields().map((field) => {
          const setup = irrigationSetupForField(field.id);
          return `
            <div class="archive-row">
              <span>
                <strong>${field.name}</strong>
                <small>${setup.equipment} - ${setup.baseInchesAt100} in at 100% - ${setup.lastDirection}</small>
              </span>
              <span class="field-badge">${setup.lastPercent}%</span>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function gpsAdminReviewPanel() {
  if (state.gpsDraft.status !== "Ready for admin review") return "";

  return `
    <div class="gps-draft-card warning">
      <strong>Phone GPS draft ready</strong>
      <span>${state.gpsDraft.points} points, ${state.gpsDraft.distance}, ${state.gpsDraft.accuracy}. Review the shape here before saving it as a permanent field boundary.</span>
    </div>
  `;
}

function equipmentAddPanel() {
  const draft = state.equipmentDraft;
  return `
    <div class="access-panel">
      <div class="form-grid">
        <div class="field-control">
          <label for="newEquipmentCategory">Category</label>
          <select id="newEquipmentCategory" data-equipment-draft="category">
            ${equipmentCatalog.map((group) => `<option ${draft.category === group.category ? "selected" : ""}>${group.category}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="newEquipmentNumber">Equipment number</label>
          <input id="newEquipmentNumber" data-equipment-draft="number" value="${draft.number}" />
        </div>
        <div class="field-control">
          <label for="newEquipmentDescription">Description</label>
          <input id="newEquipmentDescription" data-equipment-draft="description" value="${draft.description}" />
        </div>
      </div>
      <button id="addEquipmentItem" class="primary-btn" type="button">Add equipment item</button>
    </div>
  `;
}

function equipmentArchivePanel() {
  const category = state.selectedEquipmentCategory;
  const group = equipmentCatalog.find((item) => item.category === category) || equipmentCatalog[0];
  const visibleItems = group.items.slice(0, 8);
  const archivedCount = group.items.filter(([number]) => equipmentIsArchived(group.category, number)).length;
  return `
    <div class="access-panel">
      <div class="choice-grid">
        ${equipmentCatalog.map((item) => `
          <button class="choice ${state.selectedEquipmentCategory === item.category ? "selected" : ""}" type="button" data-equipment-list-category="${item.category}">
            <strong>${equipmentCountLabel(item.category)}</strong>
            <span>${activeEquipmentItems(item.category).length} active</span>
          </button>
        `).join("")}
      </div>
      <div class="auto-fill">
        <strong>Archive, do not delete</strong>
        <span>Archived equipment drops out of entry dropdowns. Past records still keep the original equipment number and description.</span>
      </div>
      <div class="catalog-card">
        <div class="catalog-head">
          <strong>${group.category}</strong>
          <span>${archivedCount} archived</span>
        </div>
        ${visibleItems.map(([number, name]) => equipmentArchiveRow(group.category, number, name)).join("")}
      </div>
    </div>
  `;
}

function equipmentArchiveRow(category, number, name) {
  const archived = equipmentIsArchived(category, number);
  return `
    <div class="archive-row ${archived ? "archived" : ""}">
      <span>
        <strong>${number} - ${name}</strong>
        <small>${archived ? "archived from entry dropdowns" : "active in entry dropdowns"}</small>
      </span>
      <button class="quiet-btn" type="button" data-equipment-category="${category}" ${archived ? `data-restore-equipment="${number}"` : `data-archive-equipment="${number}"`}>
        ${archived ? "Restore" : "Archive"}
      </button>
    </div>
  `;
}

function catalogPreview(category, title) {
  const group = equipmentCatalog.find((item) => item.category === category);
  const items = group ? activeEquipmentItems(category).slice(-4).reverse() : [];
  return `
    <article class="catalog-card">
      <div class="catalog-head">
        <strong>${title}</strong>
        <span>${group ? activeEquipmentItems(category).length : 0} active</span>
      </div>
      ${items.map(([number, name]) => `
        <div class="catalog-row">
          <span>${number}</span>
          <strong>${name}</strong>
        </div>
      `).join("")}
    </article>
  `;
}

function renderDataDictionary() {
  return `
    <section class="screen">
      ${header("Data dictionary", "The blueprint for what the real app stores.", "home")}
      <div class="review-rule">
        <strong>Build rule</strong>
        <span>Fast field entry stays simple, but every saved record lands in a structured table with audit history, attachments, map version, and sync status.</span>
      </div>

      <p class="section-title">Core tables</p>
      <div class="stack">
        ${dictionarySection("Spray / RUP record", [
          ["Field + treated area", "field_id, boundary_version, treated_acres, partial_zone"],
          ["Timing", "start_date_time, finish_date_time, submitted_at, synced_at"],
          ["Products", "tank_mix[], label_photo_ocr, EPA reg number, active ingredient, RUP flag, REI, PHI, label_source_url"],
          ["Application", "rate, total amount, carrier, method, equipment, pattern, heading"],
          ["People", "operator_user_id, certified_applicator_user_id, RUP license, license expiration"],
          ["Compliance", "weather snapshot, label source, training proof, office approval, amendments"]
        ])}
        ${dictionarySection("Fertilizer record", [
          ["Blend", "product/blend name, dry/liquid, custom analysis"],
          ["Nutrients", "N, P, K, S, Zn, B, rate unit, total lb/ac or gal/ac"],
          ["Application", "equipment, operator, method, pattern, acres, notes"],
          ["Attachments", "blend ticket, product label, invoice optional later"]
        ])}
        ${dictionarySection("Tillage record", [
          ["Equipment", "power_unit_id, implement_id, attachment"],
          ["Settings", "depth, passes, speed, purpose, finish target"],
          ["Conditions", "soil moisture, residue level, map/pattern, notes"],
          ["History link", "field_id, crop_year, operator, weather snapshot"]
        ])}
        ${dictionarySection("Harvest load record", [
          ["Season link", "field_id, crop_year, crop_name, harvest_block"],
          ["Load", "load_number, driver_user_id, truck_id, timestamp"],
          ["Weights", "empty_weight, loaded_weight, net_weight, unit"],
          ["Proof", "scale_photo, destination, notes, offline_sync_status"]
        ])}
        ${dictionarySection("Fuel entry record", [
          ["Equipment", "equipment_id, optional_implement_id, meter_reading, operator_user_id"],
          ["Fuel source", "fuel_source_id, fuel_type, estimated_tank_balance_before_after"],
          ["Use", "gallons, process, process_type, optional_field_id, optional_crop_year, acres_worked, miles_traveled"],
          ["Proof", "pump_photo, meter_photo, receipt_photo, GPS_point, notes"],
          ["Review", "warnings, reviewed_status, inventory_adjustment_id, audit_history"]
        ])}
        ${dictionarySection("Inbound / outbound ticket record", [
          ["Ticket", "direction, ticket_number, ticket_photo, scale_ticket_photo, OCR_original_text"],
          ["Commodity", "commodity, bushel_commodity, bushel_weight, customer_or_vendor_id, destination_id, carrier, carrier_driver_name, truck_id"],
          ["Weights", "loaded_gross_weight, empty_tare_weight, calculated_net_weight, editable_net_weight"],
          ["Billing units", "billing_unit, calculated_quantity, editable_quantity, unit_price, unit_setup_id"],
          ["Office status", "bill_status or invoice_status, reviewed_by, entered_or_invoiced_at, quickbooks_bill_or_invoice_id"],
          ["Optional field tag", "field_id, crop_year_from_inventory, job_id when the ticket should appear in field history"]
        ])}
        ${dictionarySection("Dropdown other request", [
          ["Source", "module, list_name, typed_value, source_screen, requested_by, requested_at"],
          ["Decision", "needs_admin_decision, added_to_list_at, one_off_only_at, reviewed_by"],
          ["Record link", "temporary value stays attached to the field record even if admin keeps it one-off"]
        ])}
        ${dictionarySection("Irrigation record", [
          ["Season link", "field_id, crop_year, crop_name, irrigator_id"],
          ["Water set", "direction, speed_percent, inches_applied, base_inches_at_100_percent"],
          ["Rain", "rain_event, rain_inches, total_water_inches"],
          ["Injection", "chemigator_running, fertigator_running"],
          ["Timing", "started_at, ended_at, entered_by, notes"]
        ])}
        ${dictionarySection("Field crop seasons", [
          ["Season", "field_id, crop_year, crop_name, status, acres"],
          ["Dates", "start_date, end_date, changed_by, crop_change_note"],
          ["Multiple crops", "primary_crop, second_crop, cover_crop, linked records"],
          ["History", "jobs and loads roll up by crop year and crop"]
        ])}
        ${dictionarySection("Scouting record", [
          ["Observation", "field_id, GPS point, issue type(s), severity, crop stage"],
          ["Media", "photos, video, voice note, transcription"],
          ["Alerts", "send_to, text/email setting, REI warning shown before entry"],
          ["Permissions", "scout can add scouting only, view field history if allowed"]
        ])}
        ${dictionarySection("Users and access", [
          ["Identity", "name, email, phone, employee number"],
          ["Access", "role, view scope, module permissions, access expiration"],
          ["RUP credentials", "license number, expiration date, verification source"],
          ["Status history", "invited, active, suspended, restored, archived"],
          ["Equipment status", "equipment_id, active/archived, archived_at, restored_at"]
        ])}
        ${dictionarySection("Office review and audit", [
          ["Review", "review_status, reviewed_by, reviewed_at, approve/send back notes"],
          ["Locking", "operator edit window, locked_at, admin_unlock_reason"],
          ["Amendments", "old value, new value, who changed it, when, why"],
          ["Sync", "draft_id, device_id, offline_saved_at, conflict_status"]
        ])}
        ${dictionarySection("Maps, weather, and files", [
          ["Maps", "field boundary version, treated zone, GPS track, pattern heading"],
          ["Field bank", "admin-created field_id, boundary points, boundary source, boundary version, irrigation setup, active/archived"],
          ["GPS boundary drafts", "phone_track_id, captured_by, points, accuracy estimate, admin_review_status"],
          ["Weather", "station, temperature, wind speed/direction, humidity, timestamp"],
          ["Files", "label photos, tickets, scout media, original file timestamp"],
          ["Reports", "field_id, crop_year, operation, entry packet, RUP list, daily recap"]
        ])}
      </div>
    </section>
  `;
}

function dictionarySection(title, rows) {
  return `
    <article class="dictionary-card">
      <strong>${title}</strong>
      ${rows.map(([label, fields]) => `
        <div class="dictionary-row">
          <span>${label}</span>
          <small>${fields}</small>
        </div>
      `).join("")}
    </article>
  `;
}

function adminBoundarySvg() {
  return `
    <svg viewBox="0 0 360 220" role="img" aria-label="Desktop field boundary editor mock">
      <rect width="360" height="220" fill="#dce8dd"></rect>
      <path d="M-10 166 C62 137 106 153 168 120 C230 87 275 92 370 60" fill="none" stroke="#5aa9c8" stroke-width="18" opacity="0.55"></path>
      <path d="M52 43 L292 32 L322 126 L248 185 L88 166 Z" fill="#7fb46e" stroke="#244c31" stroke-width="4"></path>
      <path d="M82 61 L270 54 L293 121 L238 161 L106 146 Z" fill="#a8cc8f" opacity="0.5"></path>
      <path d="M52 43 L292 32 L322 126 L248 185 L88 166 Z" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="7 7" opacity="0.8"></path>
      ${[
        [52, 43],
        [292, 32],
        [322, 126],
        [248, 185],
        [88, 166]
      ].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8" fill="#d88a24" stroke="#ffffff" stroke-width="3"></circle>`).join("")}
      <rect x="18" y="18" width="118" height="34" rx="7" fill="#ffffff" opacity="0.94"></rect>
      <text x="31" y="40" fill="#17201b" font-size="14" font-weight="800">5 points saved</text>
    </svg>
  `;
}

function renderPlaceholder() {
  return `
    <section class="screen">
      ${header("Coming soon", "This module will reuse the same field, map, pattern, and history foundation.", "home")}
      <div class="field-map">
        ${mapSvg()}
        <div class="map-caption">
          <span>Shared field record engine</span>
          <span>Ready</span>
        </div>
      </div>
      <button class="primary-btn" data-route="home">Back home</button>
    </section>
  `;
}

function summary(label, value) {
  return `<div><dt>${label}</dt><dd>${value}</dd></div>`;
}

function metricTile(label, value) {
  return `
    <div>
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function seasonCard(season, yieldPounds = 0, loadCount = 0) {
  return `
    <div class="season-card">
      <span>${season.cropYear} crop season</span>
      <strong>${season.crop}</strong>
      <small>${season.status} - ${season.acres} ac - ${season.start} to ${season.end}</small>
      ${yieldPounds ? `<small>${loadCount} harvest loads - ${formatPounds(yieldPounds)} net</small>` : ""}
      <em>${season.note}</em>
    </div>
  `;
}

function choice(label, desc, type, selected) {
  const attr = type === "map-mode" ? "data-map-mode" : type === "area-mode" ? "data-area-mode" : "data-pattern";
  return `
    <button class="choice ${selected === label ? "selected" : ""}" ${attr}="${label}">
      <strong>${label}</strong>
      <span>${desc}</span>
    </button>
  `;
}

function choiceStatic(label, desc, route = "") {
  const routeAttr = route ? `data-route="${route}"` : "";
  if (!route) {
    return `
      <div class="choice info-tile">
        <strong>${label}</strong>
        <span>${desc}</span>
      </div>
    `;
  }

  return `
    <button class="choice" type="button" ${routeAttr}>
      <strong>${label}</strong>
      <span>${desc}</span>
    </button>
  `;
}

function gpsBoundarySvg() {
  return `
    <svg viewBox="0 0 360 220" role="img" aria-label="Phone GPS boundary draft">
      <rect width="360" height="220" fill="#dce8dd"></rect>
      <path d="M-12 172 C58 145 113 156 177 124 C240 92 291 92 372 62" fill="none" stroke="#5aa9c8" stroke-width="22" opacity="0.55"></path>
      <path d="M57 42 L297 33 L323 128 L247 184 L87 165 Z" fill="#78ad66" stroke="#255c34" stroke-width="4"></path>
      <path d="M57 42 C111 28 223 28 297 33 C321 63 332 100 323 128 C302 159 274 177 247 184 C190 180 128 178 87 165 C58 133 48 79 57 42 Z" fill="none" stroke="#f4f0df" stroke-width="7" stroke-linecap="round" stroke-dasharray="2 12"></path>
      <path d="M69 54 C124 41 217 42 284 46 C305 73 313 101 306 123 C287 147 263 162 240 170 C189 168 133 165 98 153 C72 125 62 82 69 54 Z" fill="none" stroke="#d88a24" stroke-width="5"></path>
      <circle cx="240" cy="170" r="9" fill="#d88a24" stroke="#ffffff" stroke-width="3"></circle>
      <circle cx="240" cy="170" r="26" fill="#d88a24" opacity="0.18"></circle>
      <rect x="18" y="18" width="144" height="34" rx="7" fill="#ffffff" opacity="0.94"></rect>
      <text x="31" y="40" fill="#17201b" font-size="14" font-weight="800">phone GPS draft</text>
    </svg>
  `;
}

function harvestLoadSvg() {
  return `
    <svg viewBox="0 0 360 220" role="img" aria-label="Harvest load map and scale ticket">
      <rect width="360" height="220" fill="#e1eadf"></rect>
      <path d="M58 32 L304 48 L318 170 L210 192 L72 164 Z" fill="#8fb05d" stroke="#405a29" stroke-width="4"></path>
      <path d="M72 76 L310 91" stroke="#f2ead5" stroke-width="5" opacity="0.75"></path>
      <path d="M77 116 L316 130" stroke="#f2ead5" stroke-width="5" opacity="0.75"></path>
      <path d="M82 156 L272 168" stroke="#f2ead5" stroke-width="5" opacity="0.75"></path>
      <path d="M86 154 C128 126 166 132 205 107 C242 83 274 78 308 66" fill="none" stroke="#d88a24" stroke-width="7"></path>
      <rect x="206" y="35" width="102" height="58" rx="8" fill="#ffffff" stroke="#d9ded8" stroke-width="2"></rect>
      <text x="221" y="58" fill="#17201b" font-size="13" font-weight="800">scale photo</text>
      <text x="222" y="78" fill="#2f6c3b" font-size="16" font-weight="900">74,200 lb</text>
      <rect x="83" y="125" width="48" height="24" rx="4" fill="#255c34"></rect>
      <rect x="128" y="131" width="36" height="18" rx="3" fill="#5aa9c8"></rect>
      <circle cx="96" cy="154" r="6" fill="#17201b"></circle>
      <circle cx="147" cy="154" r="6" fill="#17201b"></circle>
    </svg>
  `;
}

function mapSvg() {
  return `
    <svg viewBox="0 0 360 220" role="img" aria-label="Field boundary map">
      <rect width="360" height="220" fill="#dfe9df"></rect>
      <path d="M-10 176 C68 144 122 155 196 124 C260 96 300 96 370 72" fill="none" stroke="#5aa9c8" stroke-width="22" opacity="0.55"></path>
      <path d="M58 32 L304 48 L318 170 L210 192 L72 164 Z" fill="#6eaa66" stroke="#255c34" stroke-width="4"></path>
      <path d="M91 55 L281 66 L292 153 L207 170 L98 148 Z" fill="#8fc27e" opacity="0.55"></path>
      <path d="M70 36 L309 51" stroke="#ffffff" stroke-width="2" opacity="0.45"></path>
      <path d="M73 76 L314 91" stroke="#ffffff" stroke-width="2" opacity="0.45"></path>
      <path d="M77 116 L316 130" stroke="#ffffff" stroke-width="2" opacity="0.45"></path>
      <path d="M81 156 L272 168" stroke="#ffffff" stroke-width="2" opacity="0.45"></path>
    </svg>
  `;
}

function patternSvg() {
  return `
    <svg viewBox="0 0 360 220" role="img" aria-label="Field pass pattern">
      <rect width="360" height="220" fill="#dfe9df"></rect>
      <path d="M60 31 L305 49 L318 171 L210 191 L72 165 Z" fill="#6eaa66" stroke="#255c34" stroke-width="4"></path>
      ${Array.from({ length: 8 }).map((_, index) => {
        const offset = 18 + index * 30;
        return `<path d="M${offset} 184 L${offset + 152} 36" stroke="#ffffff" stroke-width="4" opacity="0.72"></path>`;
      }).join("")}
      <path d="M64 146 C118 119 169 137 222 101 C253 80 278 78 312 72" fill="none" stroke="#d88a24" stroke-width="5"></path>
      <circle cx="225" cy="101" r="7" fill="#d88a24"></circle>
    </svg>
  `;
}

function tillageMapSvg() {
  return `
    <svg viewBox="0 0 360 220" role="img" aria-label="Tillage pass map">
      <rect width="360" height="220" fill="#dfe9df"></rect>
      <path d="M58 32 L304 48 L318 170 L210 192 L72 164 Z" fill="#8a9f63" stroke="#41522d" stroke-width="4"></path>
      <path d="M70 42 L310 58" stroke="#efe5c8" stroke-width="7" opacity="0.8"></path>
      <path d="M72 66 L313 82" stroke="#efe5c8" stroke-width="7" opacity="0.8"></path>
      <path d="M75 90 L316 106" stroke="#efe5c8" stroke-width="7" opacity="0.8"></path>
      <path d="M78 114 L318 130" stroke="#efe5c8" stroke-width="7" opacity="0.8"></path>
      <path d="M81 138 L310 154" stroke="#efe5c8" stroke-width="7" opacity="0.8"></path>
      <path d="M86 162 L268 176" stroke="#efe5c8" stroke-width="7" opacity="0.8"></path>
      <path d="M91 55 C144 84 195 83 249 74" fill="none" stroke="#5aa9c8" stroke-width="5" opacity="0.7"></path>
      <circle cx="249" cy="74" r="8" fill="#d88a24"></circle>
    </svg>
  `;
}

function historyMapSvg() {
  return `
    <svg viewBox="0 0 360 220" role="img" aria-label="Field history map">
      <rect width="360" height="220" fill="#dfe9df"></rect>
      <path d="M58 32 L304 48 L318 170 L210 192 L72 164 Z" fill="#6eaa66" stroke="#255c34" stroke-width="4"></path>
      <path d="M63 42 L312 57 L318 115 L188 117 L78 96 Z" fill="#c5483d" opacity="0.36"></path>
      <path d="M86 115 L318 137 L312 169 L210 188 L74 161 Z" fill="#d88a24" opacity="0.35"></path>
      <path d="M85 49 L292 162" stroke="#ffffff" stroke-width="3" opacity="0.65"></path>
      <path d="M86 84 L260 176" stroke="#ffffff" stroke-width="3" opacity="0.65"></path>
      <path d="M93 132 L174 181" stroke="#ffffff" stroke-width="3" opacity="0.65"></path>
    </svg>
  `;
}

function scoutMapSvg() {
  return `
    <svg viewBox="0 0 360 220" role="img" aria-label="Scout REI map">
      <rect width="360" height="220" fill="#dfe9df"></rect>
      <path d="M42 38 L145 28 L170 100 L116 154 L34 138 Z" fill="#c5483d" opacity="0.62" stroke="#8d2f29" stroke-width="4"></path>
      <path d="M205 43 L322 59 L305 168 L205 181 L178 98 Z" fill="#d88a24" opacity="0.7" stroke="#986018" stroke-width="4"></path>
      <path d="M72 176 L152 143 L211 170 L292 133" fill="none" stroke="#5aa9c8" stroke-width="12" opacity="0.45"></path>
      <text x="57" y="90" fill="#ffffff" font-size="16" font-weight="800">REI</text>
      <text x="222" y="112" fill="#ffffff" font-size="15" font-weight="800">Caution</text>
    </svg>
  `;
}

function scoutEntryMapSvg() {
  return `
    <svg viewBox="0 0 360 220" role="img" aria-label="Scouting observation map">
      <rect width="360" height="220" fill="#dfe9df"></rect>
      <path d="M58 32 L304 48 L318 170 L210 192 L72 164 Z" fill="#6eaa66" stroke="#255c34" stroke-width="4"></path>
      <path d="M74 154 C98 130 112 119 139 114 C164 109 181 91 210 82 C235 74 262 74 302 66" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.7"></path>
      <path d="M82 150 C118 126 132 125 162 119 C199 111 220 91 268 86" fill="none" stroke="#d88a24" stroke-width="7"></path>
      <circle cx="162" cy="119" r="13" fill="#c5483d" stroke="#ffffff" stroke-width="4"></circle>
      <circle cx="162" cy="119" r="28" fill="#c5483d" opacity="0.18"></circle>
      <text x="186" y="124" fill="#17201b" font-size="14" font-weight="800">photo + note</text>
    </svg>
  `;
}

render();
