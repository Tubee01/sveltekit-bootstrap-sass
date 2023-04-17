<script>
	import { Button, FormInput } from '$components';
	import FormCheckbox from '$components/form/FormCheckbox.svelte';
	import { t } from '$lib/translation';

	/** @type {import('./$types').ActionData} */
	export let form;

	$: errors = form?.errors || {};
</script>

<section class="py-5">
	<div class="container">
		<div class="row">
			<div class="col-md-6 mx-auto">
				<form method="post">
					<FormInput name="username" label={$t('USERNAME')} required error={errors?.username} />
					<FormInput name="email" label={$t('EMAIL')} required error={errors?.email} />
					<FormInput
						name="password"
						label={$t('PASSWORD')}
						type="password"
						required
						error={errors?.password}
					/>
					<FormInput
						name="password1"
						label={$t('PASSWORD_AGAIN')}
						type="password"
						required
						error={errors?.password1}
					/>
					<FormCheckbox name="agree" label={$t('AGREE_TO_TERMS')} required error={errors?.agree} />
					<Button type="submit" label={$t('REGISTER')} />
				</form>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6 mx-auto">
				<p class="text-center">{$t('ALREADY_HAVE_ACCOUNT')} <a href="/login">{$t('LOGIN')}</a></p>
			</div>
		</div>
	</div>
</section>
