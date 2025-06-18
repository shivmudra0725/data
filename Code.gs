function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Attendance Recorder')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const date  = e.parameter.date;
  const roll  = e.parameter.rollNo;
  const lat   = e.parameter.lat;
  const lon   = e.parameter.lon;
  const addr  = e.parameter.addr || '';
  const email = e.parameter.email;

  if (!email || !roll || !date) {
    return ContentService.createTextOutput('Error: Missing fields');
  }

  // 1. Create sheet if it doesn't exist
  let sheet = ss.getSheetByName(date);
  if (!sheet) {
    sheet = ss.insertSheet(date);
    sheet.appendRow(['Timestamp', 'Email', 'Roll No', 'Latitude', 'Longitude', 'Address']);
  }

  // 2. Duplicate check based on Gmail (column B)
  const emails = sheet.getRange(2, 2, sheet.getLastRow() - 1).getValues().flat();
  if (emails.includes(email)) {
    return ContentService.createTextOutput('Already marked');
  }

  // 3. Append new row
  sheet.appendRow([new Date(), email, roll, lat, lon, addr]);

  return ContentService.createTextOutput('Success');
}
