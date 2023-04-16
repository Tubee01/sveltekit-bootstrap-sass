import db from '$lib/database';
import { formDataToJSON } from '$lib/utils';
import bcrypt from 'bcrypt';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const { email, password } = formDataToJSON(formData);

		const user = await db.user.findByEmail(email);

		if (user) {
			const passwordMatch = await bcrypt.compare(password, user.password);

			if (passwordMatch) {
				cookies.set('user', user.id.toString(), {
					path: '/',
					maxAge: 60 * 60 * 24 * 7,
					sameSite: 'lax',
					httpOnly: true
				});

				return {
					user: user
				};
			}
		}

		return fail(400, { email, password, invalid: true });
	}
};
