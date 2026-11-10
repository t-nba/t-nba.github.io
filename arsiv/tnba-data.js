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
  ],
  // Her takımın bu haftaki 11 kategori değeri (Kategori DNA bunu okur)
  teamStats: {
    "Cardinals": {"FG%":".441", "FT%":".794", "3PTM":"42", "PTS":"508", "OREB":"38", "DREB":"160", "AST":"166", "ST":"30", "BLK":"17", "TO":"89", "A/T":"1.87"},
    "Wild Butterfli's": {"FG%":".436", "FT%":".848", "3PTM":"47", "PTS":"497", "OREB":"24", "DREB":"117", "AST":"114", "ST":"38", "BLK":"19", "TO":"62", "A/T":"1.84"},
    "Ventolins": {"FG%":".469", "FT%":".822", "3PTM":"57", "PTS":"521", "OREB":"52", "DREB":"171", "AST":"156", "ST":"47", "BLK":"26", "TO":"77", "A/T":"2.03"},
    "Sultan Selim Suns": {"FG%":".446", "FT%":".760", "3PTM":"55", "PTS":"469", "OREB":"39", "DREB":"105", "AST":"96", "ST":"33", "BLK":"21", "TO":"55", "A/T":"1.75"},
    "God's Wrath": {"FG%":".500", "FT%":".730", "3PTM":"53", "PTS":"528", "OREB":"49", "DREB":"140", "AST":"96", "ST":"35", "BLK":"30", "TO":"53", "A/T":"1.81"},
    "Phoenix Ashes": {"FG%":".424", "FT%":".847", "3PTM":"78", "PTS":"562", "OREB":"63", "DREB":"129", "AST":"172", "ST":"41", "BLK":"22", "TO":"75", "A/T":"2.29"},
    "Eagles": {"FG%":".488", "FT%":".774", "3PTM":"66", "PTS":"630", "OREB":"61", "DREB":"132", "AST":"119", "ST":"28", "BLK":"21", "TO":"62", "A/T":"1.92"},
    "Wildcats": {"FG%":".461", "FT%":".787", "3PTM":"58", "PTS":"474", "OREB":"45", "DREB":"117", "AST":"115", "ST":"40", "BLK":"21", "TO":"52", "A/T":"2.21"},
    "Peripol Hornets": {"FG%":".487", "FT%":".706", "3PTM":"45", "PTS":"545", "OREB":"65", "DREB":"133", "AST":"116", "ST":"35", "BLK":"15", "TO":"65", "A/T":"1.78"},
    "Sin City Wolves": {"FG%":".478", "FT%":".748", "3PTM":"81", "PTS":"620", "OREB":"50", "DREB":"174", "AST":"120", "ST":"35", "BLK":"33", "TO":"66", "A/T":"1.82"},
    "Borçka Bulls": {"FG%":".432", "FT%":".667", "3PTM":"43", "PTS":"285", "OREB":"27", "DREB":"96", "AST":"87", "ST":"22", "BLK":"11", "TO":"48", "A/T":"1.81"},
    "Rhizus Hawks": {"FG%":".447", "FT%":".800", "3PTM":"63", "PTS":"523", "OREB":"60", "DREB":"174", "AST":"107", "ST":"30", "BLK":"35", "TO":"57", "A/T":"1.88"},
    "Dağsu Bears": {"FG%":".426", "FT%":".866", "3PTM":"63", "PTS":"484", "OREB":"46", "DREB":"148", "AST":"120", "ST":"32", "BLK":"20", "TO":"79", "A/T":"1.52"},
    "Kaplıca Gunslingers": {"FG%":".432", "FT%":".792", "3PTM":"45", "PTS":"413", "OREB":"40", "DREB":"105", "AST":"125", "ST":"22", "BLK":"13", "TO":"65", "A/T":"1.92"},
    "San Andon Spurs": {"FG%":".455", "FT%":".763", "3PTM":"53", "PTS":"585", "OREB":"56", "DREB":"153", "AST":"165", "ST":"30", "BLK":"20", "TO":"90", "A/T":"1.83"},
    "Dosma's Crazy Horses": {"FG%":".457", "FT%":".737", "3PTM":"53", "PTS":"502", "OREB":"48", "DREB":"202", "AST":"112", "ST":"42", "BLK":"13", "TO":"77", "A/T":"1.45"},
    "Ottoman": {"FG%":".460", "FT%":".776", "3PTM":"46", "PTS":"569", "OREB":"56", "DREB":"169", "AST":"130", "ST":"36", "BLK":"13", "TO":"68", "A/T":"1.91"},
    "Giresun Hazelnuts": {"FG%":".496", "FT%":".854", "3PTM":"52", "PTS":"509", "OREB":"31", "DREB":"108", "AST":"102", "ST":"30", "BLK":"25", "TO":"61", "A/T":"1.67"}
  }
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
