<script>
	import { Button } from '$components';
	import { t, locale } from '$lib/translation';

	export let language = locale.get();

	function changeLanguage() {
		const newLanguage = language === 'en' ? 'hu' : 'en';
		locale.set(newLanguage);
		language = newLanguage;
	}
</script>

<Button
	on:click={changeLanguage}
	label={language === 'en' ? $t('HUNGARIAN') : $t('ENGLISH')}
	class="position-absolute top-0 end-0"
	size="sm"
/>
