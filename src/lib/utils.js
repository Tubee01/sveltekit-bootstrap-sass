import { fail } from '@sveltejs/kit';

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
};

/**
 * @typedef {Object} FormError
 * @property {string} scope
 * @property {string} message
 */
/**
 * @param {*} formData
 * @param  {FormError | FormError[]} error
 */
export function customFail(formData, error) {
	/** @type {Record<string,any>} */
	const errors = {};
	const errorArray = arrayify(error);

	errorArray.forEach((err) => {
		errors[err.scope] = err.message;
	});

	return fail(400, { ...formData, errors });
}
