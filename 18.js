/* ---------- Serve HTML ---------- */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
         .setTitle('Attendance Recorder')
         .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/* ---------- Handle POST ---------- */
function doPost(e) {
  const ss   = SpreadsheetApp.getActiveSpreadsheet();
  const date = e.parameter.date;
  const roll = e.parameter.rollNo;
  const lat  = e.parameter.lat;
  const lon  = e.parameter.lon;
  const addr = e.parameter.addr || '';
  const email= e.parameter.email || Session.getActiveUser().getEmail();

  /* 1. Ensure sheet for that date */
  let sh = ss.getSheetByName(date);
  if (!sh) {
    sh = ss.insertSheet(date);
    sh.appendRow(['Timestamp','Email','Roll No','Latitude','Longitude','Address']);
  }

  /* 2. Duplicate check (column B) */
  const emails = sh.getRange(2,2,sh.getLastRow()-1).getValues().flat();
  if (emails.includes(email)) {
    return ContentService.createTextOutput('Already marked');
  }

  /* 3. Append */
  sh.appendRow([new Date(), email, roll, lat, lon, addr]);
  return ContentService.createTextOutput('Success');
}
