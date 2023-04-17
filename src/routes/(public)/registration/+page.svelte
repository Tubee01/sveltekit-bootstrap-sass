<script>
	import { Button, FormInput } from '$components';
	import FormCheckbox from '$components/form/FormCheckbox.svelte';
</script>

<section class="py-5">
	<div class="container">
		<div class="row">
			<div class="col-md-6 mx-auto">
				<form method="post">
					<FormInput name="username" label="Name" required />
					<FormInput name="email" label="Email" required />
					<FormInput name="password" label="Password" type="password" required />
					<FormInput name="password1" label="Confirm Password" type="password" required />
					<FormCheckbox name="agree" label="I agree to the terms and conditions" required />
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
