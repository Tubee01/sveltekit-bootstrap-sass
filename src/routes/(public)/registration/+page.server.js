import db from '$lib/database';
import { formDataToJSON } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const { username, email, password, password1 } = formDataToJSON(formData);

		if (!email) {
			return fail(400, { email, missing: true });
		}

		if (!password) {
			return fail(400, { password, missing: true });
		}

		if (!password1) {
			return fail(400, { password1, missing: true });
		}

		if (password !== password1) {
			return fail(400, { password, password1, mismatch: true });
		}

		if (password.trim().length === 0) {
			return fail(400, { password, password1, empty: true });
		}

		const user = await db.user.findByEmail(email);

		if (user) {
			return fail(400, { email, exists: true });
		}
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = await db.user.create(username, email, hashedPassword);

		if (newUser) {
			return {
				user: newUser
			};
		}

		return {};
	}
};
