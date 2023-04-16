import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET } from '$env/static/private';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import type { Provider } from '@auth/core/providers';


const authorization: Handle = async ({ event, resolve }) => {
    // Protect any routes under /authenticated
    if (event.url.pathname.startsWith('/authenticated')) {
        const session = await event.locals.getSession();
        if (!session) {
            throw redirect(303, '/');
        }
    }

    // If the request is still here, just proceed as normally
    return resolve(event);
}


const auth = SvelteKitAuth({
    providers: [
        GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }) as Provider,
        Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET }) as Provider,
    ]
})

const handle = sequence(auth, authorization)

export default handle