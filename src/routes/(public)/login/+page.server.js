import { customFail, formDataToJSON } from '$lib/utils';
import { Auth, authJWT } from '$lib/auth';
import { AUTH_COOKIE_NAME } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const data = await formDataToJSON(formData);
		const { email, password } = data;

		const token = await Auth.login(email, password);

		if (token) {
			cookies.set(AUTH_COOKIE_NAME, token, {
				path: '/',
				expires: authJWT.expiresDate,
				sameSite: 'lax',
				secure: true,
				httpOnly: true
			});

			throw redirect(302, '/dashboard');
		}

		return customFail(data, [
			{ scope: 'email', message: 'Password or email is incorrect' },
			{ scope: 'password', message: 'Password or email is incorrect' }
		]);
	}
};
