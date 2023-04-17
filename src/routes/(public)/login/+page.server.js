import { formDataToJSON } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import { Auth, authJWT } from '$lib/auth';
import { AUTH_COOKIE_NAME } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const { email, password } = formDataToJSON(formData);

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

		return fail(400, { email, password, invalid: true });
	}
};
