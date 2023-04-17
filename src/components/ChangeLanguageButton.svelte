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

<section class="py-5">
	<div class="container">
		<div class="row">
			<div class="col-md-6 mx-auto">
				<Button
					on:click={changeLanguage}
					label={language === 'en' ? $t('HUNGARIAN') : $t('ENGLISH')}
				/>
			</div>
		</div>
	</div>
</section>
