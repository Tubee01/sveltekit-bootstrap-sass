<section class="py-5">
	<div class="container">
		<div class="row">
			<div class="col-md-6 mx-auto">
				<form method="post">
					<div class="mb-3">
						<label for="name" class="form-label">Full Name</label>
						<input type="text" class="form-control" name="username" required />
					</div>
					<div class="mb-3">
						<label for="email" class="form-label">Email address</label>
						<input type="email" class="form-control" name="email" required />
					</div>
					<div class="mb-3">
						<label for="password" class="form-label">Password</label>
						<input type="password" class="form-control" name="password" required />
					</div>
					<div class="mb-3">
						<label for="password1" class="form-label">Confirm Password</label>
						<input type="password" class="form-control" name="password1" required />
					</div>
					<button type="submit" class="btn btn-primary">Register</button>
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
