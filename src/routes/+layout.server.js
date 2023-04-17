import { isPublicPage } from '$lib/utils';
import { redirect } from '@sveltejs/kit';

/**
 * @type {import('./$types').LayoutServerLoad} 
 */
export const load = async ({ locals, route }) => {
    const path = route.id;
    if (path && !isPublicPage(path) && !locals.user) {
        throw redirect(302, `/login`);
    }

    return {
        ...locals,
    };
};