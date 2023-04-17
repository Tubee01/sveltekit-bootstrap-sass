/**
 * @param {FormData} formData
 * @returns {Record<string, any>}
 */
export const formDataToJSON = (formData) => Object.fromEntries(formData.entries());

/**
 * @param {*} value
 * @returns {Array<*>}
 */
export const arrayify = (value) => (Array.isArray(value) ? value : [value]);

/**
 * @param {string} route
 */
export const isPublicPage = (route) => {
  return route?.includes('(public)');
}