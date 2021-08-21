/**
 * @param {string} str - a string value
 * @returns `boolean` value indicating whether `str` is empty string
 */
 const isEmptyString = (str) =>
 !str?.length || (typeof str === 'string' && str.trim().length === 0);

export default isEmptyString;
