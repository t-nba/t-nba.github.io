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
  hafta: 3,
  standings: [
    { r: 1, n: "Sin City Wolves", rec: "21-11-1", form: "WWW", prev: 4 },
    { r: 2, n: "Ottoman", rec: "21-12-0", form: "WWW", prev: 5 },
    { r: 3, n: "San Andon Spurs", rec: "20-11-2", form: "WWT", prev: 3 },
    { r: 4, n: "Dağsu Bears", rec: "21-12-0", form: "WWL", prev: 2 },
    { r: 5, n: "Rhizus Hawks", rec: "20-12-1", form: "WWL", prev: 1 },
    { r: 6, n: "Cardinals", rec: "18-15-0", form: "LWW", prev: 12 },
    { r: 7, n: "Giresun Hazelnuts", rec: "18-15-0", form: "WLW", prev: 11 },
    { r: 8, n: "Dosma's Crazy Horses", rec: "17-15-1", form: "WLW", prev: 9 },
    { r: 9, n: "Wild Butterfli's", rec: "17-16-0", form: "WLW", prev: 10 },
    { r: 10, n: "Eagles", rec: "16-15-2", form: "LWT", prev: 8 },
    { r: 11, n: "Ventolins", rec: "17-16-0", form: "LWL", prev: 6 },
    { r: 12, n: "God's Wrath", rec: "16-17-0", form: "LLW", prev: 13 },
    { r: 13, n: "Phoenix Ashes", rec: "16-17-0", form: "LWL", prev: 7 },
    { r: 14, n: "Peripol Hornets", rec: "12-19-2", form: "LLL", prev: 15 },
    { r: 15, n: "Kaplıca Gunslingers", rec: "12-21-0", form: "LLW", prev: 17 },
    { r: 16, n: "Wildcats", rec: "11-21-1", form: "LLL", prev: 14 },
    { r: 17, n: "Borçka Bulls", rec: "11-22-0", form: "WLL", prev: 16 },
    { r: 18, n: "Sultan Selim Suns", rec: "8-25-0", form: "LLL", prev: 18 }
  ],
  matchups: [
    ["Cardinals", 8, "Wildcats", 3],
    ["Ventolins", 5, "Kaplıca Gunslingers", 6],
    ["God's Wrath", 7, "Rhizus Hawks", 4],
    ["Eagles", 5, "San Andon Spurs", 5],
    ["Peripol Hornets", 5, "Wild Butterfli's", 6],
    ["Borçka Bulls", 4, "Sin City Wolves", 7],
    ["Dağsu Bears", 5, "Dosma's Crazy Horses", 6],
    ["Sultan Selim Suns", 4, "Giresun Hazelnuts", 7],
    ["Ottoman", 7, "Phoenix Ashes", 4]
  ],
  leaders: [
    ["FG%", "FIELD GOAL %", ".549", "Rhizus Hawks"],
    ["FT%", "FREE THROW %", ".890", "Kaplıca Gunslingers"],
    ["3PTM", "THREE POINTERS MADE", "69", "God's Wrath"],
    ["PTS", "POINTS", "651", "God's Wrath"],
    ["OREB", "OFFENSIVE REBOUNDS", "62", "God's Wrath"],
    ["DREB", "DEFENSIVE REBOUNDS", "200", "Dosma's Crazy Horses"],
    ["AST", "ASSISTS", "154", "Cardinals"],
    ["ST", "STEALS", "41", "Kaplıca Gunslingers"],
    ["BLK", "BLOCKS", "35", "Rhizus Hawks"],
    ["TO", "TURNOVERS", "30", "Borçka Bulls"],
    ["A/T", "ASSIST / TURNOVER", "3.40", "Borçka Bulls"]
  ],
  // Her takımın bu haftaki 11 kategori değeri (Kategori DNA bunu okur)
  teamStats: {
    "Cardinals": {"FG%":".517", "FT%":".762", "3PTM":"59", "PTS":"559", "OREB":"52", "DREB":"144", "AST":"154", "ST":"40", "BLK":"28", "TO":"77", "A/T":"2.00"},
    "Wildcats": {"FG%":".482", "FT%":".779", "3PTM":"64", "PTS":"500", "OREB":"36", "DREB":"117", "AST":"125", "ST":"34", "BLK":"20", "TO":"63", "A/T":"1.98"},
    "Ventolins": {"FG%":".398", "FT%":".808", "3PTM":"53", "PTS":"423", "OREB":"51", "DREB":"142", "AST":"152", "ST":"35", "BLK":"18", "TO":"52", "A/T":"2.92"},
    "Kaplıca Gunslingers": {"FG%":".457", "FT%":".890", "3PTM":"59", "PTS":"474", "OREB":"41", "DREB":"120", "AST":"146", "ST":"41", "BLK":"28", "TO":"71", "A/T":"2.06"},
    "God's Wrath": {"FG%":".478", "FT%":".881", "3PTM":"69", "PTS":"651", "OREB":"62", "DREB":"136", "AST":"124", "ST":"32", "BLK":"30", "TO":"63", "A/T":"1.97"},
    "Rhizus Hawks": {"FG%":".549", "FT%":".753", "3PTM":"52", "PTS":"454", "OREB":"37", "DREB":"130", "AST":"76", "ST":"34", "BLK":"35", "TO":"39", "A/T":"1.95"},
    "Eagles": {"FG%":".462", "FT%":".759", "3PTM":"63", "PTS":"572", "OREB":"47", "DREB":"151", "AST":"106", "ST":"37", "BLK":"21", "TO":"77", "A/T":"1.38"},
    "San Andon Spurs": {"FG%":".479", "FT%":".816", "3PTM":"59", "PTS":"613", "OREB":"45", "DREB":"144", "AST":"153", "ST":"36", "BLK":"21", "TO":"93", "A/T":"1.65"},
    "Peripol Hornets": {"FG%":".486", "FT%":".769", "3PTM":"39", "PTS":"536", "OREB":"54", "DREB":"155", "AST":"129", "ST":"25", "BLK":"19", "TO":"70", "A/T":"1.84"},
    "Wild Butterfli's": {"FG%":".459", "FT%":".847", "3PTM":"68", "PTS":"571", "OREB":"31", "DREB":"135", "AST":"128", "ST":"35", "BLK":"17", "TO":"63", "A/T":"2.03"},
    "Borçka Bulls": {"FG%":".438", "FT%":".776", "3PTM":"64", "PTS":"343", "OREB":"30", "DREB":"102", "AST":"102", "ST":"21", "BLK":"16", "TO":"30", "A/T":"3.40"},
    "Sin City Wolves": {"FG%":".434", "FT%":".802", "3PTM":"59", "PTS":"472", "OREB":"38", "DREB":"128", "AST":"117", "ST":"23", "BLK":"22", "TO":"59", "A/T":"1.98"},
    "Dağsu Bears": {"FG%":".448", "FT%":".818", "3PTM":"60", "PTS":"432", "OREB":"28", "DREB":"118", "AST":"96", "ST":"23", "BLK":"21", "TO":"50", "A/T":"1.92"},
    "Dosma's Crazy Horses": {"FG%":".440", "FT%":".760", "3PTM":"65", "PTS":"572", "OREB":"45", "DREB":"200", "AST":"116", "ST":"36", "BLK":"20", "TO":"66", "A/T":"1.76"},
    "Sultan Selim Suns": {"FG%":".474", "FT%":".775", "3PTM":"46", "PTS":"397", "OREB":"47", "DREB":"139", "AST":"76", "ST":"34", "BLK":"15", "TO":"48", "A/T":"1.58"},
    "Giresun Hazelnuts": {"FG%":".493", "FT%":".874", "3PTM":"39", "PTS":"488", "OREB":"61", "DREB":"115", "AST":"87", "ST":"25", "BLK":"23", "TO":"51", "A/T":"1.71"},
    "Ottoman": {"FG%":".494", "FT%":".797", "3PTM":"60", "PTS":"562", "OREB":"43", "DREB":"144", "AST":"109", "ST":"27", "BLK":"16", "TO":"47", "A/T":"2.32"},
    "Phoenix Ashes": {"FG%":".463", "FT%":".740", "3PTM":"69", "PTS":"473", "OREB":"42", "DREB":"110", "AST":"118", "ST":"30", "BLK":"31", "TO":"65", "A/T":"1.82"}
  }
};

// Hafta öncesi fikstür — teaser kartı bunu okur.
export const FIXTURES = {
  hafta: 4,
  pairs: [
    ["Cardinals", "San Andon Spurs"],
    ["Ventolins", "Giresun Hazelnuts"],
    ["God's Wrath", "Sin City Wolves"],
    ["Eagles", "Dağsu Bears"],
    ["Peripol Hornets", "Wildcats"],
    ["Borçka Bulls", "Wild Butterfli's"],
    ["Kaplıca Gunslingers", "Dosma's Crazy Horses"],
    ["Rhizus Hawks", "Ottoman"],
    ["Sultan Selim Suns", "Phoenix Ashes"]
  ]
};
// Kategori lideri OYUNCULAR.
export const PLAYER_LEADERS = [
  ["FG%", "FIELD GOAL %", ".742", "Isaiah Hartenstein", "Ottoman", "23/31"],
  ["FT%", "FREE THROW %", "1.000", "Damian Lillard", "Ottoman", "22/22"],
  ["3PTM", "THREE POINTERS MADE", "17", "Desmond Bane", "Borçka Bulls"],
  ["PTS", "POINTS", "134", "Shai Gilgeous-Alexander", "Giresun Hazelnuts"],
  ["OREB", "OFFENSIVE REBOUNDS", "17", "Anthony Davis", "Giresun Hazelnuts"],
  ["DREB", "DEFENSIVE REBOUNDS", "48", "Karl-Anthony Towns", "Dosma's Crazy Horses"],
  ["AST", "ASSISTS", "34", "Davion Mitchell", "Borçka Bulls"],
  ["ST", "STEALS", "9", "Matisse Thybulle", "God's Wrath"],
  ["BLK", "BLOCKS", "20", "Victor Wembanyama", "Rhizus Hawks"],
  ["TO", "TURNOVERS", "0", "Saddiq Bey", "Ottoman"],
  ["A/T", "ASSIST / TURNOVER", "9.500", "VJ Edgecombe", "Peripol Hornets", "19/2"]
];

// Haftanın Maçı — en çekişmeli maç otomatik seçilir.
export const SPOTLIGHT = { index: 3, etiket: "HAFTANIN MAÇI" };

// Şampiyonluk onur listesi — her sezon sonunda elle bir satır eklenir.
export const CHAMPIONS = [
  ["2020-21", "God's Wrath"],
  ["2021-22", "Ventolins"],
  ["2022-23", "Ventolins"],
  ["2023-24", "Rhizus Hawks"],
  ["2024-25", "God's Wrath"],
  ["2025-26", "San Andon Spurs"]
];
