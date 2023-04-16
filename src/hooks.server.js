import { sequence } from '@sveltejs/kit/hooks';
import auth from '$lib/auth'

export const handle = sequence(auth);
