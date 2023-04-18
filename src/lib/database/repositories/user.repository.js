import { Repository } from './repository';

export class UserRepository extends Repository {
	/**
	 * @param {import('../pool-manager').PoolManager} poolManager
	 */
	constructor(poolManager) {
		super(poolManager, 'user');
	}

	async findAll() {
		const query = this.queryBuilder.select().build();
		return await this.call(query);
	}

	/**
	 * @param {string} email
	 * @returns {Promise<{id: number, username: string, email: string, password: string} | null>}
	 */
	async findByEmail(email) {
		const query = this.queryBuilder.select().where('email').build();
		const result = await this.call(query, [email]);

		return result.getRow();
	}

	/**
	 * @param {string} username
	 * @param {string} email
	 * @param {string} password
	 * @returns {Promise<{id: number, username: string, email: string} | null>}
	 */
	async create(username, email, password) {
		const query = this.queryBuilder
			.insert(['username', 'email', 'password'])
			.returning(['username', 'id', 'email'])
			.build();
		const result = await this.call(query, [username, email, password]);

		return result.getRow();
	}
}
