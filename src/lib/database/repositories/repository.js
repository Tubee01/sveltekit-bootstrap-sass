import config from '../config';
import { PoolManager } from '../pool-manager';
import { RepositoryDTO } from './repository.dto';
import { QueryBuilder } from './query-builder';

export class Repository {
	/**
	 *	@param {string} table
	 *	@param {string} [prefix='public']
	 */
	constructor(table, prefix = 'public') {
		/**	@type {PoolManager} */
		this.poolManager = new PoolManager();

		/**	@type {string} */
		this.table = `${prefix}.${table}`;

		this.queryBuilder = new QueryBuilder(this.table);
	}
	/**
	 * @param {string} query
	 * @param {Array<*>} [params=[]]
	 * @returns {Promise<RepositoryDTO>}
	 */
	async call(query, params) {
		const pool = await this.poolManager.getCreateIfNotExistClient(config());
		const result = await pool.query(query, params);
		return new RepositoryDTO(result.rows);
	}
}
