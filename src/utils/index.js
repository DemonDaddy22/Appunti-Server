/**
 * @param {string} str - a string value
 * @returns `boolean` value indicating whether `str` is empty string
 */
export const isEmptyString = (str) =>
    !str?.length || (typeof str === 'string' && str.trim().length === 0);

/**
 *
 * @function isValidNumber - Checks if passed value is a valid number or not
 * @param {number | string | undefined} value
 * @returns `boolean` indicating whether `value` is a valid number
 *
 */
export const isValidNumber = (value) => !isNaN(Number(value));

/**
 *
 * @function isEmptyList - Checks if passed object is an empty list or not
 * @param {Array<any> | undefined} obj
 * @returns `boolean` indicating whether `obj` is an empty list
 *
 */
export const isEmptyList = (obj) =>
    !Array.isArray(obj) || (Array.isArray(obj) && obj.length === 0);

/**
 *
 * @function isEmptyObject - Checks if passed object is an empty object or not
 * @param {Object | undefined} obj
 * @returns `boolean` indicating whether `obj` is an empty object
 *
 */
export const isEmptyObject = (obj) =>
    !obj ||
    typeof obj !== 'object' ||
    Array.isArray(obj) ||
    Object.keys(obj).length === 0;
