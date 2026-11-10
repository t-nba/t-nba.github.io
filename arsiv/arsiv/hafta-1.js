// T-NBA CHAMPIONSHIP — haftalık veri. Bu dosya otomasyonla üretilir (src/build-data.js | src/derive-week.js).
// prev: takımın geçen haftaki sırası (ilk haftada null) — sıra okları bundan hesaplanır.
export const TEAMS = {
  "Dosma's Crazy Horses": ["DC", "#13708F", "assets/teams/DC.png"],
  "Sin City Wolves": ["SW", "#4A5A70", "assets/teams/SW.jpg"],
  "Ventolins": ["VE", "#3E7FB0", "assets/teams/VE.jpg"],
  "Cardinals": ["CA", "#C8102E", "assets/teams/CA.jpg"],
  "San Andon Spurs": ["SA", "#9A9B9D", "assets/teams/SA.jpg"],
  "Kaplıca Gunslingers": ["KG", "#B08850", "assets/teams/KG.png"],
  "Phoenix Ashes": ["PA", "#A3311A", "assets/teams/PA.jpg"],
  "Borçka Bulls": ["BB", "#6DB33F", "assets/teams/BB.jpg"],
  "Peripol Hornets": ["PH", "#1FA7E0", "assets/teams/PH.png"],
  "Wild Butterfli's": ["WB", "#6B3F1D", "assets/teams/WB.png"],
  "Sultan Selim Suns": ["SS", "#1F2326", "assets/teams/SS.jpg"],
  "Dağsu Bears": ["DB", "#0B2A5B", "assets/teams/DB.jpg"],
  "Ottoman": ["OT", "#6E1B2E", "assets/teams/OT.jpg"],
  "God's Wrath": ["GW", "#F1800F", "assets/teams/GW.jpg"],
  "Giresun Hazelnuts": ["GH", "#B8621B", "assets/teams/GH.png"],
  "Eagles": ["EA", "#E08BAE", "assets/teams/EA.jpg"],
  "Rhizus Hawks": ["RH", "#D9B01F", "assets/teams/RH.jpg"],
  "Wildcats": ["WC", "#E8505B", "assets/teams/WC.jpg"]
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
  ],
  // Her takımın bu haftaki 11 kategori değeri (Kategori DNA bunu okur)
  teamStats: {
    "Cardinals": {"FG%":".491", "FT%":".745", "3PTM":"39", "PTS":"400", "OREB":"32", "DREB":"105", "AST":"108", "ST":"32", "BLK":"10", "TO":"50", "A/T":"2.16"},
    "Sin City Wolves": {"FG%":".418", "FT%":".795", "3PTM":"58", "PTS":"491", "OREB":"50", "DREB":"163", "AST":"99", "ST":"34", "BLK":"31", "TO":"67", "A/T":"1.48"},
    "Ventolins": {"FG%":".434", "FT%":".745", "3PTM":"50", "PTS":"450", "OREB":"49", "DREB":"136", "AST":"137", "ST":"31", "BLK":"17", "TO":"64", "A/T":"2.14"},
    "Dağsu Bears": {"FG%":".435", "FT%":".792", "3PTM":"55", "PTS":"545", "OREB":"46", "DREB":"140", "AST":"166", "ST":"37", "BLK":"26", "TO":"74", "A/T":"2.24"},
    "God's Wrath": {"FG%":".427", "FT%":".759", "3PTM":"58", "PTS":"512", "OREB":"46", "DREB":"165", "AST":"121", "ST":"28", "BLK":"19", "TO":"80", "A/T":"1.51"},
    "Giresun Hazelnuts": {"FG%":".516", "FT%":".811", "3PTM":"43", "PTS":"440", "OREB":"44", "DREB":"121", "AST":"80", "ST":"31", "BLK":"24", "TO":"46", "A/T":"1.74"},
    "Eagles": {"FG%":".483", "FT%":".818", "3PTM":"64", "PTS":"533", "OREB":"69", "DREB":"145", "AST":"116", "ST":"33", "BLK":"21", "TO":"63", "A/T":"1.84"},
    "Wild Butterfli's": {"FG%":".490", "FT%":".833", "3PTM":"55", "PTS":"531", "OREB":"40", "DREB":"139", "AST":"128", "ST":"38", "BLK":"28", "TO":"69", "A/T":"1.86"},
    "Peripol Hornets": {"FG%":".435", "FT%":".793", "3PTM":"56", "PTS":"547", "OREB":"43", "DREB":"176", "AST":"121", "ST":"27", "BLK":"34", "TO":"74", "A/T":"1.64"},
    "Rhizus Hawks": {"FG%":".501", "FT%":".787", "3PTM":"69", "PTS":"571", "OREB":"43", "DREB":"129", "AST":"94", "ST":"37", "BLK":"27", "TO":"48", "A/T":"1.96"},
    "Wildcats": {"FG%":".461", "FT%":".824", "3PTM":"36", "PTS":"350", "OREB":"36", "DREB":"116", "AST":"110", "ST":"32", "BLK":"17", "TO":"56", "A/T":"1.96"},
    "Dosma's Crazy Horses": {"FG%":".468", "FT%":".804", "3PTM":"55", "PTS":"543", "OREB":"70", "DREB":"163", "AST":"111", "ST":"35", "BLK":"12", "TO":"82", "A/T":"1.35"},
    "Borçka Bulls": {"FG%":".442", "FT%":".887", "3PTM":"64", "PTS":"377", "OREB":"33", "DREB":"110", "AST":"112", "ST":"30", "BLK":"12", "TO":"50", "A/T":"2.24"},
    "Phoenix Ashes": {"FG%":".481", "FT%":".771", "3PTM":"69", "PTS":"429", "OREB":"39", "DREB":"98", "AST":"101", "ST":"29", "BLK":"21", "TO":"57", "A/T":"1.77"},
    "Kaplıca Gunslingers": {"FG%":".461", "FT%":".810", "3PTM":"54", "PTS":"400", "OREB":"34", "DREB":"92", "AST":"96", "ST":"34", "BLK":"12", "TO":"59", "A/T":"1.63"},
    "San Andon Spurs": {"FG%":".475", "FT%":".803", "3PTM":"63", "PTS":"613", "OREB":"46", "DREB":"154", "AST":"147", "ST":"38", "BLK":"18", "TO":"87", "A/T":"1.69"},
    "Sultan Selim Suns": {"FG%":".477", "FT%":".774", "3PTM":"58", "PTS":"528", "OREB":"47", "DREB":"136", "AST":"84", "ST":"33", "BLK":"26", "TO":"67", "A/T":"1.25"},
    "Ottoman": {"FG%":".481", "FT%":".752", "3PTM":"49", "PTS":"558", "OREB":"66", "DREB":"163", "AST":"96", "ST":"41", "BLK":"17", "TO":"62", "A/T":"1.55"}
  }
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
