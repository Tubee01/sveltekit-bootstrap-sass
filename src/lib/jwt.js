import { SignJWT, jwtVerify, jwtDecrypt } from 'jose';

const ALGORITHM = 'HS256';
/**
 * A class for handling JWTs
 * @class
 */
export class JWT {
	/**
	 * @param {string} secret
	 * @param {number} expiresIn
	 */
	constructor(secret, expiresIn) {
		this.secret = new TextEncoder().encode(secret);
		this.expiresIn = Math.floor(Date.now() / 1000 + expiresIn * 60);
		this.expiresDate = new Date(this.expiresIn * 1000);
	}

	/** @param {import('jose').JWTPayload} obj */
	create(obj) {
		return this.sing(obj);
	}

	/** @param {string} token */
	verify(token) {
		return jwtVerify(token, this.secret);
	}

	/** @param {string} token */
	decode(token) {
		return jwtDecrypt(token, this.secret);
	}

	/** @param {string} token */
	async refresh(token) {
		const jwt = await jwtVerify(token, this.secret);
		return this.sing(jwt.payload);
	}

	/** @param {import('jose').JWTPayload} payload */
	sing(payload) {
		const jwt = new SignJWT(payload)
			.setProtectedHeader({ alg: ALGORITHM })
			.setIssuedAt()
			.setExpirationTime(this.expiresIn)
			.sign(this.secret);
		return jwt;
	}
}
