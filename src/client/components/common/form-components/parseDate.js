/**
 * Produces Date instance from the passed value
 *
 * @param value - value to parse
 * @return {Date} - Date instance
 * @throws {Error} - 'Invalid date format' if value couldn't be converted to Date
 */
export const parseDate = (value) => {
  let dateValue = value;
  if (value === null || value === undefined || value === '') {
    dateValue = null;
  } else if (!(value instanceof Date)) {
    const timestamp = Date.parse(value);
    if (isNaN(timestamp)) {
      throw new Error('Invalid date format');
    } else {
      dateValue = new Date(timestamp);
    }
  }
  return dateValue;
};
