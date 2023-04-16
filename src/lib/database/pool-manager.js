import pg from 'pg';
const { Pool } = pg;


export class PoolManager {
	constructor() {
		/**
		 * @type {Object.<string, import('pg').Pool>}
		 */
		this.clients = {};
	}

	/**
	 * @param {string} name
	 * @returns {import('pg').Pool}
	 */
	getClient(name) {
		return this.clients[name];
	}

	/**
	 * @param {import('pg').PoolConfig} config
	 * @returns {Promise<import('pg').Pool>}
	 * @throws {Error} - If pool already exists.
	 */
	async createPool(config) {
		if (!config.database) {
			throw new Error('Database name is required');
		}

		if (this.clients[config.database]) {
			throw new Error('Pool already exists');
		}

		const pool = new Pool(config);

		await pool.connect();
		this.clients[config.database] = pool;

		return pool;
	}

	/**
	 * @param {import('pg').PoolConfig} config
	 * @returns {Promise<import('pg').Pool>}
	 */
	async getCreateIfNotExistClient(config) {
		if (!config.database) {
			throw new Error('Database name is required');
		}

		let client = this.getClient(config.database);
		if (client) {
			return client;
		} else {
			return await this.createPool(config);
		}
	}

	/**
	 * @returns {Promise<void>}
	 */
	async closeAll() {
		const clientKeys = Object.keys(this.clients);
		for (let i = 0; i < clientKeys.length; i++) {
			const client = this.clients[clientKeys[i]];
			await client.end();
		}
	}
}
