<script>
	import { Button, FormInput, FormCheckbox } from '$components';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<section class="py-5">
	<div class="container">
		<div class="row">
			<div class="col-md-6 mx-auto">
				<form method="post">
					<FormInput name="email" value={form?.email ?? ''} label="Email" error={form?.invalid} />
					<FormInput
						name="password"
						value={form?.password ?? ''}
						label="Password"
						type="password"
						error={form?.invalid}
					/>
					<FormCheckbox name="remember" label="Remember me" />
					<Button type="submit" label="Login" />
				</form>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6 mx-auto">
				<p class="text-center">Don't have an account? <a href="/registration">Register</a></p>
			</div>
		</div>
	</div>
</section>
