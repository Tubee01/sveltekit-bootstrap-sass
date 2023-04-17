import { loadTranslations, locale } from '$lib/translation';

/** @type {import('./$types').LayoutLoad} */
export const load = async ({ url, data }) => {
	const { pathname } = url;

	const defaultLocale = 'en'; // set default locale here

	const initLocale = locale.get() || defaultLocale; // set default if no locale already set

	await loadTranslations(initLocale, pathname);

	return {
		...data
	};
};
