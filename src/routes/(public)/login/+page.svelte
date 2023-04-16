<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<section class="py-5">
	<div class="container">
		<div class="row">
			<div class="col-md-6 mx-auto">
				<form method="post">
					<div class="mb-3">
						<label for="email" class="form-label">Email address</label>
						<input type="email" class="form-control" name="email" value={form?.email ?? ''} />
					</div>
					<div class="mb-3">
						<label for="password" class="form-label">Password</label>
						<input
							type="password"
							class="form-control"
							name="password"
							value={form?.password ?? ''}
						/>
					</div>
					<div class="mb-3 form-check">
						<input type="checkbox" class="form-check-input" id="remember" />
						<label class="form-check-label" for="remember">Remember me</label>
					</div>
					<button type="submit" class="btn btn-primary">Login</button>
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
