import db from '$lib/database';
import { customFail, formDataToJSON } from '$lib/utils';
import bcrypt from 'bcrypt';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = formDataToJSON(formData);

		const { username, email, password, password1 } = data;

		if (!email) {
			return customFail(data, { scope: 'email', message: 'Email is required' });
		}

		if (!password || password.trim().length === 0) {
			return customFail(data, { scope: 'password', message: 'Password is required' });
		}

		if (!password1) {
			return customFail(data, { scope: 'password1', message: 'Password is required' });
		}

		if (password !== password1) {
			return customFail(data, [
				{ scope: 'password', message: 'Passwords do not match' },
				{ scope: 'password1', message: 'Passwords do not match' }
			]);
		}

		const user = await db.user.findByEmail(email);

		if (user) {
			return customFail(data, { scope: 'email', message: 'Email already exists' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = await db.user.create(username, email, hashedPassword);

		if (newUser) {
			return {
				user: newUser
			};
		}

		return customFail(data, { scope: 'server', message: 'Something went wrong' });
	}
};
