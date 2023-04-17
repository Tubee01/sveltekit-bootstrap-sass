<script>
	import { Button, FormInput, FormCheckbox } from '$components';
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
					<FormInput
						name="email"
						value={form?.email ?? ''}
						label={$t('EMAIL')}
						error={errors?.email}
					/>
					<FormInput
						name="password"
						value={form?.password ?? ''}
						label={$t('PASSWORD')}
						type="password"
						error={errors?.password}
					/>
					<FormCheckbox name="remember" label={$t('REMEMBER_ME')} />
					<Button type="submit" label={$t('LOGIN')} />
				</form>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6 mx-auto">
				<p class="text-center">
					{$t('DONT_HAVE_ACCOUNT')} <a href="/registration">{$t('REGISTER')}</a>
				</p>
			</div>
		</div>
	</div>
</section>
