import { AUTH_COOKIE_NAME } from '$env/static/private';
import { Auth } from '$lib/auth';
import { isPublicPage } from '$lib/utils';
import { sequence } from '@sveltejs/kit/hooks';
import cookie from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
const authHandler = async ({ event, resolve }) => {
	const { request, route } = event;
	const { headers } = request;

	if (route.id && !isPublicPage(route.id)) {
		const cookies = cookie.parse(headers.get('cookie') || '');
		const token = cookies[AUTH_COOKIE_NAME];
		if (token) {
			try {
				const user = await Auth.verify(token);

				event.locals.user = user?.id ? user : null;
			} catch (error) {
				event.locals.user = null;
				event.cookies.set(AUTH_COOKIE_NAME, 'deleted', { path: '/', maxAge: 0 });
			}
		}
	}

	return resolve(event);
};

export const handle = sequence(authHandler);
