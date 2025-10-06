/**
 * Google Apps Script for DKG Labs Lead Capture Form
 * This script receives form submissions and stores them in a Google Sheet
 * 
 * Setup Instructions:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Create a new Google Sheet or use existing one
 * 5. Update the SHEET_ID constant below with your sheet ID
 * 6. Deploy as web app with execute permissions for "Anyone"
 * 7. Copy the web app URL and use it in your form submission
 */

// Configuration
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Replace with your actual Google Sheet ID
const SHEET_NAME = 'Lead Submissions'; // Name of the sheet tab

/**
 * Main function that handles POST requests from the form
 */
function doPost(e) {
  try {
    // Set CORS headers for cross-origin requests
    const response = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      }
    };

    // Parse the incoming data
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Invalid JSON data'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'company', 'industry'];
    const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
    
    if (missingFields.length > 0) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: `Missing required fields: ${missingFields.join(', ')}`
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Get or create the spreadsheet
    const sheet = getOrCreateSheet();
    
    // Add headers if this is the first submission
    setupSheetHeaders(sheet);
    
    // Add the new submission
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.fullName.trim(),
      data.email.trim(),
      data.company.trim(),
      data.industry,
      'New', // Status column
      '', // Notes column
    ];
    
    sheet.appendRow(rowData);
    
    // Log the submission
    console.log('New lead submission:', data);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Lead submitted successfully',
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: 'Internal server error'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle OPTIONS requests for CORS preflight
 */
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

/**
 * Get or create the Google Sheet
 */
function getOrCreateSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }
    
    return sheet;
  } catch (error) {
    console.error('Error accessing sheet:', error);
    throw new Error('Could not access Google Sheet. Please check the SHEET_ID.');
  }
}

/**
 * Set up headers in the sheet if they don't exist
 */
function setupSheetHeaders(sheet) {
  const headers = [
    'Timestamp',
    'Full Name',
    'Email',
    'Company',
    'Industry',
    'Status',
    'Notes'
  ];
  
  // Check if headers already exist
  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const hasHeaders = firstRow.some(cell => cell !== '');
  
  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    
    // Set column widths
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 200); // Full Name
    sheet.setColumnWidth(3, 250); // Email
    sheet.setColumnWidth(4, 200); // Company
    sheet.setColumnWidth(5, 150); // Industry
    sheet.setColumnWidth(6, 100); // Status
    sheet.setColumnWidth(7, 300); // Notes
    
    // Freeze header row
    sheet.setFrozenRows(1);
  }
}

/**
 * Test function to verify the script works
 * Run this function to test your setup
 */
function testScript() {
  const testData = {
    fullName: 'Test User',
    email: 'test@company.com',
    company: 'Test Company',
    industry: 'Technology'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
