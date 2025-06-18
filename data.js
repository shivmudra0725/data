function doPost(e) {
  var ss     = SpreadsheetApp.getActiveSpreadsheet();
  var dateID = e.parameter.date || Utilities.formatDate(
                 new Date(),
                 ss.getSpreadsheetTimeZone(),
                 "yyyy-MM-dd"
               );                                   // sheet name e.g. 2025‑06‑18

  // create sheet if missing
  var sheet = ss.getSheetByName(dateID);
  if (!sheet) {
    sheet = ss.insertSheet(dateID);
    sheet.appendRow(["Timestamp", "Email", "Roll No",
                     "Latitude", "Longitude", "Address"]);
  }

  var rollNo  = e.parameter.rollNo;
  var lat     = e.parameter.lat;
  var lon     = e.parameter.lon;
  var address = e.parameter.addr;
  var email   = Session.getActiveUser().getEmail();

  sheet.appendRow([new Date(), email, rollNo, lat, lon, address]);

  return ContentService.createTextOutput('Success');
}
