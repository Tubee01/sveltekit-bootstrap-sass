import i18n from 'sveltekit-i18n';

const pathes = ['index'];

const localeLoader = (locale = 'en') => {
	const loaders = pathes.map((path) => ({
		locale,
		key: path === 'index' ? '' : path,
		loader: async () => await import(`./${locale}/${path}.json`)
	}));
	return loaders;
};

const config = {
	loaders: [...localeLoader('en'), ...localeLoader('hu')]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
