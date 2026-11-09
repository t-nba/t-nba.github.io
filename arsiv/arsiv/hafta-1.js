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
  hafta: 1,
  standings: [
    { r: 1, n: "Dağsu Bears", rec: "9-2-0", form: "W", prev: null },
    { r: 2, n: "San Andon Spurs", rec: "9-2-0", form: "W", prev: null },
    { r: 3, n: "Ottoman", rec: "8-3-0", form: "W", prev: null },
    { r: 4, n: "Sin City Wolves", rec: "7-4-0", form: "W", prev: null },
    { r: 5, n: "Dosma's Crazy Horses", rec: "7-4-0", form: "W", prev: null },
    { r: 6, n: "Rhizus Hawks", rec: "6-4-1", form: "W", prev: null },
    { r: 7, n: "Borçka Bulls", rec: "6-5-0", form: "W", prev: null },
    { r: 8, n: "Wild Butterfli's", rec: "6-5-0", form: "W", prev: null },
    { r: 9, n: "Giresun Hazelnuts", rec: "6-5-0", form: "W", prev: null },
    { r: 10, n: "God's Wrath", rec: "5-6-0", form: "L", prev: null },
    { r: 11, n: "Eagles", rec: "5-6-0", form: "L", prev: null },
    { r: 12, n: "Phoenix Ashes", rec: "5-6-0", form: "L", prev: null },
    { r: 13, n: "Peripol Hornets", rec: "4-6-1", form: "L", prev: null },
    { r: 14, n: "Cardinals", rec: "4-7-0", form: "L", prev: null },
    { r: 15, n: "Wildcats", rec: "4-7-0", form: "L", prev: null },
    { r: 16, n: "Sultan Selim Suns", rec: "3-8-0", form: "L", prev: null },
    { r: 17, n: "Ventolins", rec: "2-9-0", form: "L", prev: null },
    { r: 18, n: "Kaplıca Gunslingers", rec: "2-9-0", form: "L", prev: null }
  ],
  matchups: [
    ["Cardinals", 4, "Sin City Wolves", 7],
    ["Ventolins", 2, "Dağsu Bears", 9],
    ["God's Wrath", 5, "Giresun Hazelnuts", 6],
    ["Eagles", 5, "Wild Butterfli's", 6],
    ["Peripol Hornets", 4, "Rhizus Hawks", 6],
    ["Wildcats", 4, "Dosma's Crazy Horses", 7],
    ["Borçka Bulls", 6, "Phoenix Ashes", 5],
    ["Kaplıca Gunslingers", 2, "San Andon Spurs", 9],
    ["Sultan Selim Suns", 3, "Ottoman", 8]
  ],
  leaders: [
    ["FG%", "FIELD GOAL %", ".516", "Giresun Hazelnuts"],
    ["FT%", "FREE THROW %", ".887", "Borçka Bulls"],
    ["3PTM", "THREE POINTERS MADE", "69", "Rhizus Hawks"],
    ["PTS", "POINTS", "613", "San Andon Spurs"],
    ["OREB", "OFFENSIVE REBOUNDS", "70", "Dosma's Crazy Horses"],
    ["DREB", "DEFENSIVE REBOUNDS", "176", "Peripol Hornets"],
    ["AST", "ASSISTS", "166", "Dağsu Bears"],
    ["ST", "STEALS", "41", "Ottoman"],
    ["BLK", "BLOCKS", "34", "Peripol Hornets"],
    ["TO", "TURNOVERS", "46", "Giresun Hazelnuts"],
    ["A/T", "ASSIST / TURNOVER", "2.24", "Dağsu Bears"]
  ]
};

// Hafta öncesi fikstür — teaser kartı bunu okur.
export const FIXTURES = {
  hafta: 2,
  pairs: [
    ["Cardinals", "Wild Butterfli's"],
    ["Ventolins", "Sultan Selim Suns"],
    ["God's Wrath", "Phoenix Ashes"],
    ["Eagles", "Wildcats"],
    ["Peripol Hornets", "Sin City Wolves"],
    ["Borçka Bulls", "Rhizus Hawks"],
    ["Dağsu Bears", "Kaplıca Gunslingers"],
    ["San Andon Spurs", "Dosma's Crazy Horses"],
    ["Ottoman", "Giresun Hazelnuts"]
  ]
};
// Kategori lideri OYUNCULAR.
export const PLAYER_LEADERS = [
  ["FG%", "FIELD GOAL %", ".735", "Zion Williamson", "San Andon Spurs", "25/34"],
  ["FT%", "FREE THROW %", "1.000", "Stephen Curry", "Giresun Hazelnuts", "22/22"],
  ["3PTM", "THREE POINTERS MADE", "20", "Luka Dončić", "Eagles"],
  ["PTS", "POINTS", "123", "Luka Dončić", "Eagles"],
  ["OREB", "OFFENSIVE REBOUNDS", "26", "Moussa Diabaté", "Eagles"],
  ["DREB", "DEFENSIVE REBOUNDS", "35", "Giannis Antetokounmpo", "Ottoman"],
  ["AST", "ASSISTS", "31", "Nikola Jokić", "Wildcats"],
  ["ST", "STEALS", "11", "Zion Williamson", "San Andon Spurs"],
  ["BLK", "BLOCKS", "13", "Victor Wembanyama", "Rhizus Hawks"],
  ["TO", "TURNOVERS", "1", "Anthony Davis", "Giresun Hazelnuts"],
  ["A/T", "ASSIST / TURNOVER", "26.000", "Cam Spencer", "Cardinals", "26/1"]
];

// Haftanın Maçı — en çekişmeli maç otomatik seçilir.
export const SPOTLIGHT = { index: 2, etiket: "HAFTANIN MAÇI" };

// Şampiyonluk onur listesi — her sezon sonunda elle bir satır eklenir.
export const CHAMPIONS = [
  ["2020-21", "God's Wrath"],
  ["2021-22", "Ventolins"],
  ["2022-23", "Ventolins"],
  ["2023-24", "Rhizus Hawks"],
  ["2024-25", "God's Wrath"],
  ["2025-26", "San Andon Spurs"]
];
