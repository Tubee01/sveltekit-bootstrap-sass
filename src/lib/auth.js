import { AUTH_EXPIRES_IN, AUTH_SECRET } from '$env/static/private';
import { JWT } from './jwt';
import db from '$lib/database';
import bcrypt from 'bcrypt';

export const authJWT = new JWT(AUTH_SECRET, +AUTH_EXPIRES_IN);

export class Auth {
	/**
	 * @param {string} username
	 * @param {string} password
	 */
	static async login(username, password) {
		const user = await db.user.findByEmail(username);
		if (user) {
			const passwordMatch = await bcrypt.compare(password, user.password);
			if (passwordMatch) {
				const token = await authJWT.create({ id: user.id, email: user.email });
				return token;
			}
		}
		return null;
	}

	/**
	 * @param {string} token
	 * @returns {Promise<App.Locals['user']>}
	 */
	static async verify(token) {
		const jwt = await authJWT.verify(token);
		return /** @type {App.Locals['user']} */ (jwt.payload);
	}

	/**
	 * @param {string} token
	 */
	static async refresh(token) {
		const jwt = await authJWT.refresh(token);
		return jwt;
	}
}
