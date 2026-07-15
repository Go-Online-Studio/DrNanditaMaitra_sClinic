/**
 * Google Apps Script Web App to store clinic booking details in Google Sheets.
 * 
 * Setup Instructions:
 * 1. Open a Google Sheet where you want to store submissions.
 * 2. Rename the tab to "Sheet1" (default tab is usually Sheet1).
 * 3. Set the first row header columns as follows:
 *    - A1: Name
 *    - B1: Number
 *    - C1: Reason to visit
 *    - D1: Date
 *    - E1: Email
 *    - F1: Description
 * 4. In Google Sheets, click "Extensions" -> "Apps Script".
 * 5. Delete any code in the editor and paste the script code below.
 * 6. Click "Save" (disk icon).
 * 7. Click "Deploy" -> "New deployment".
 * 8. Click the gear icon next to "Select type" and choose "Web app".
 * 9. Set the fields:
 *    - Description: Clinic Form Submission Handler
 *    - Execute as: "Me (your-email@gmail.com)"
 *    - Who has access: "Anyone"
 * 10. Click "Deploy" and authorize the script permissions.
 * 11. Copy the "Web app URL" provided.
 * 12. Create a `.env` file in this project's root folder and paste the URL:
 *     VITE_GOOGLE_SCRIPT_URL="YOUR_COPIED_URL_HERE"
 */

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    // Prevent concurrent writes by waiting up to 30 seconds for sheet access lock
    lock.waitLock(30000);
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    }
    
    // Parse incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // If the sheet is completely empty, initialize headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Name", "Number", "Reason to visit", "Date", "Email", "Description"]);
    }
    
    // Helper to prevent formula injection/parsing issues (e.g. phone numbers with +)
    function escapeForSheet(val) {
      if (typeof val !== "string") {
        return val || "N/A";
      }
      var trimmed = val.trim();
      if (trimmed.length > 0) {
        var firstChar = trimmed.charAt(0);
        if (firstChar === '+' || firstChar === '-' || firstChar === '=') {
          return "'" + trimmed;
        }
      }
      return trimmed || "N/A";
    }

    // Append fields to the next available row (starting from row 2 onwards)
    sheet.appendRow([
      escapeForSheet(data.name),
      escapeForSheet(data.number),
      escapeForSheet(data.reason),
      escapeForSheet(data.date),
      escapeForSheet(data.email),
      escapeForSheet(data.description)
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
