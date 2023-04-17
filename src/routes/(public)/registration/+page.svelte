<script>
	import { Button, FormInput } from '$components';
	import FormCheckbox from '$components/form/FormCheckbox.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;

	$: errors = form?.errors || {};
</script>

<section class="py-5">
	<div class="container">
		<div class="row">
			<div class="col-md-6 mx-auto">
				<form method="post">
					<FormInput name="username" label="Name" required error={errors?.username} />
					<FormInput name="email" label="Email" required error={errors?.email} />
					<FormInput
						name="password"
						label="Password"
						type="password"
						required
						error={errors?.password}
					/>
					<FormInput
						name="password1"
						label="Confirm Password"
						type="password"
						required
						error={errors?.password1}
					/>
					<FormCheckbox
						name="agree"
						label="I agree to the terms and conditions"
						required
						error={errors?.agree}
					/>
					<Button type="submit" label="Register" />
				</form>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6 mx-auto">
				<p class="text-center">Already have an account? <a href="/login">Login</a></p>
			</div>
		</div>
	</div>
</section>
