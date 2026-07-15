export interface SheetSubmissionData {
  name: string;
  number: string;
  reason: string;
  date: string;
  email: string;
  description: string;
}

/**
 * Escapes a cell value for Google Sheets to prevent it from being interpreted as a formula.
 * Prepend a single quote (') if the value starts with '=', '+', or '-'.
 */
function escapeForSheet(value: string | undefined | null): string {
  if (!value) return '';
  const trimmed = value.trim();
  if (trimmed.startsWith('=') || trimmed.startsWith('+') || trimmed.startsWith('-')) {
    return `'${trimmed}`;
  }
  return trimmed;
}

/**
 * Submits the booking/inquiry form data to a Google Sheets Web App endpoint.
 * Sets empty optional fields to "N/A".
 * Falls back gracefully on failure so patient booking flow is not interrupted.
 * @param data The fields to save to the sheet
 * @returns boolean indicating if the request was successfully dispatched
 */
export async function submitToGoogleSheet(data: SheetSubmissionData): Promise<boolean> {
  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
  
  if (!scriptUrl) {
    console.warn(
      "VITE_GOOGLE_SCRIPT_URL is not defined in the environment variables. " +
      "Skipping Google Sheet submission."
    );
    return false;
  }

  try {
    const payload = {
      name: escapeForSheet(data.name) || 'N/A',
      number: escapeForSheet(data.number) || 'N/A',
      reason: escapeForSheet(data.reason) || 'N/A',
      date: escapeForSheet(data.date) || 'N/A',
      email: escapeForSheet(data.email) || 'N/A',
      description: escapeForSheet(data.description) || 'N/A'
    };

    // Using mode: 'no-cors' and 'text/plain' to prevent CORS preflight blocks.
    // Google Apps Script redirect responses are incompatible with standard CORS preflights.
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(payload)
    });

    return true;
  } catch (error) {
    console.error("Failed to submit form data to Google Sheet:", error);
    return false;
  }
}
