// T-NBA CHAMPIONSHIP — haftalık veri. Bu dosya otomasyonla üretilir (src/build-data.js | src/derive-week.js).
// prev: takımın geçen haftaki sırası (ilk haftada null) — sıra okları bundan hesaplanır.
export const TEAMS = {
  "Dosma's Crazy Horses": ["DC", "#915A2B", "assets/teams/DC.png"],
  "Sin City Wolves": ["SW", "#5D7285", "assets/teams/SW.jpg"],
  "Ventolins": ["VE", "#1782C4", "assets/teams/VE.jpg"],
  "Cardinals": ["CA", "#A6192E", "assets/teams/CA.jpg"],
  "San Andon Spurs": ["SA", "#8E9296", "assets/teams/SA.jpg"],
  "Kaplıca Gunslingers": ["KG", "#607D8B", "assets/teams/KG.png"],
  "Phoenix Ashes": ["PA", "#C0452B", "assets/teams/PA.jpg"],
  "Borçka Bulls": ["BB", "#CE1141", "assets/teams/BB.jpg"],
  "Peripol Hornets": ["PH", "#00889E", "assets/teams/PH.png"],
  "Wild Butterfli's": ["WB", "#8A5BB0", "assets/teams/WB.png"],
  "Sultan Selim Suns": ["SS", "#E8872B", "assets/teams/SS.jpg"],
  "Dağsu Bears": ["DB", "#4E7A54", "assets/teams/DB.jpg"],
  "Ottoman": ["OT", "#9E2235", "assets/teams/OT.jpg"],
  "God's Wrath": ["GW", "#6A4FA8", "assets/teams/GW.jpg"],
  "Giresun Hazelnuts": ["GH", "#8A6A42", "assets/teams/GH.png"],
  "Eagles": ["EA", "#0E7C4A", "assets/teams/EA.jpg"],
  "Rhizus Hawks": ["RH", "#E03A3E", "assets/teams/RH.jpg"],
  "Wildcats": ["WC", "#3B62C4", "assets/teams/WC.jpg"]
};
export const WEEK = {
  hafta: 2,
  standings: [
    { r: 1, n: "Rhizus Hawks", rec: "16-5-1", form: "WW", prev: 6 },
    { r: 2, n: "Dağsu Bears", rec: "16-6-0", form: "WW", prev: 1 },
    { r: 3, n: "San Andon Spurs", rec: "15-6-1", form: "WW", prev: 2 },
    { r: 4, n: "Sin City Wolves", rec: "14-7-1", form: "WW", prev: 4 },
    { r: 5, n: "Ottoman", rec: "14-8-0", form: "WW", prev: 3 },
    { r: 6, n: "Ventolins", rec: "12-10-0", form: "LW", prev: 17 },
    { r: 7, n: "Phoenix Ashes", rec: "12-10-0", form: "LW", prev: 12 },
    { r: 8, n: "Eagles", rec: "11-10-1", form: "LW", prev: 11 },
    { r: 9, n: "Dosma's Crazy Horses", rec: "11-10-1", form: "WL", prev: 5 },
    { r: 10, n: "Wild Butterfli's", rec: "11-11-0", form: "WL", prev: 8 },
    { r: 11, n: "Giresun Hazelnuts", rec: "11-11-0", form: "WL", prev: 9 },
    { r: 12, n: "Cardinals", rec: "10-12-0", form: "LW", prev: 14 },
    { r: 13, n: "God's Wrath", rec: "9-13-0", form: "LL", prev: 10 },
    { r: 14, n: "Wildcats", rec: "8-13-1", form: "LL", prev: 15 },
    { r: 15, n: "Peripol Hornets", rec: "7-13-2", form: "LL", prev: 13 },
    { r: 16, n: "Borçka Bulls", rec: "7-15-0", form: "WL", prev: 7 },
    { r: 17, n: "Kaplıca Gunslingers", rec: "6-16-0", form: "LL", prev: 18 },
    { r: 18, n: "Sultan Selim Suns", rec: "4-18-0", form: "LL", prev: 16 }
  ],
  matchups: [
    ["Cardinals", 6, "Wild Butterfli's", 5],
    ["Ventolins", 10, "Sultan Selim Suns", 1],
    ["God's Wrath", 4, "Phoenix Ashes", 7],
    ["Eagles", 6, "Wildcats", 4],
    ["Peripol Hornets", 3, "Sin City Wolves", 7],
    ["Borçka Bulls", 1, "Rhizus Hawks", 10],
    ["Dağsu Bears", 7, "Kaplıca Gunslingers", 4],
    ["San Andon Spurs", 6, "Dosma's Crazy Horses", 4],
    ["Ottoman", 6, "Giresun Hazelnuts", 5]
  ],
  leaders: [
    ["FG%", "FIELD GOAL %", ".500", "God's Wrath"],
    ["FT%", "FREE THROW %", ".866", "Dağsu Bears"],
    ["3PTM", "THREE POINTERS MADE", "81", "Sin City Wolves"],
    ["PTS", "POINTS", "630", "Eagles"],
    ["OREB", "OFFENSIVE REBOUNDS", "65", "Peripol Hornets"],
    ["DREB", "DEFENSIVE REBOUNDS", "202", "Dosma's Crazy Horses"],
    ["AST", "ASSISTS", "172", "Phoenix Ashes"],
    ["ST", "STEALS", "47", "Ventolins"],
    ["BLK", "BLOCKS", "35", "Rhizus Hawks"],
    ["TO", "TURNOVERS", "48", "Borçka Bulls"],
    ["A/T", "ASSIST / TURNOVER", "2.29", "Phoenix Ashes"]
  ]
};

// Hafta öncesi fikstür — teaser kartı bunu okur.
export const FIXTURES = {
  hafta: 3,
  pairs: [
    ["Cardinals", "Wildcats"],
    ["Ventolins", "Kaplıca Gunslingers"],
    ["God's Wrath", "Rhizus Hawks"],
    ["Eagles", "San Andon Spurs"],
    ["Peripol Hornets", "Wild Butterfli's"],
    ["Borçka Bulls", "Sin City Wolves"],
    ["Dağsu Bears", "Dosma's Crazy Horses"],
    ["Sultan Selim Suns", "Giresun Hazelnuts"],
    ["Ottoman", "Phoenix Ashes"]
  ]
};
// Kategori lideri OYUNCULAR.
export const PLAYER_LEADERS = [
  ["FG%", "FIELD GOAL %", ".731", "Daniel Gafford", "Giresun Hazelnuts", "19/26"],
  ["FT%", "FREE THROW %", "1.000", "Devin Booker", "God's Wrath", "27/27"],
  ["3PTM", "THREE POINTERS MADE", "21", "N. Alexander-Walker", "Phoenix Ashes"],
  ["PTS", "POINTS", "143", "Shai Gilgeous-Alexander", "Giresun Hazelnuts"],
  ["OREB", "OFFENSIVE REBOUNDS", "22", "Dyson Daniels", "Ventolins"],
  ["DREB", "DEFENSIVE REBOUNDS", "43", "Giannis Antetokounmpo", "Ottoman"],
  ["AST", "ASSISTS", "36", "Darius Acuff Jr.", "San Andon Spurs"],
  ["ST", "STEALS", "11", "Dyson Daniels", "Ventolins"],
  ["BLK", "BLOCKS", "14", "Victor Wembanyama", "Rhizus Hawks"],
  ["TO", "TURNOVERS", "0", "Leaky Black", ""],
  ["A/T", "ASSIST / TURNOVER", "10.000", "Miles Bridges", "Ventolins", "20/2"]
];

// Haftanın Maçı — en çekişmeli maç otomatik seçilir.
export const SPOTLIGHT = { index: 0, etiket: "HAFTANIN MAÇI" };

// Şampiyonluk onur listesi — her sezon sonunda elle bir satır eklenir.
export const CHAMPIONS = [
  ["2020-21", "God's Wrath"],
  ["2021-22", "Ventolins"],
  ["2022-23", "Ventolins"],
  ["2023-24", "Rhizus Hawks"],
  ["2024-25", "God's Wrath"],
  ["2025-26", "San Andon Spurs"]
];
