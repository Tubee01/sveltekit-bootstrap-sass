import config from '../config';
import { RepositoryDTO } from './repository.dto';
import { QueryBuilder } from './query-builder';

export class Repository {
	/**
	 * 	@param {import('../pool-manager').PoolManager} poolManager
	 *	@param {string} table
	 *	@param {string} [prefix='public']
	 */
	constructor(poolManager, table, prefix = 'public') {
		/**	@type {import('../pool-manager').PoolManager} */
		this.poolManager = poolManager;
		/**	@type {string} */
		this.table = `${prefix}.${table}`;

		this.queryBuilder = new QueryBuilder(this.table);
	}
	/**
	 * @param {string} query
	 * @param {Array<*>} [params=[]]
	 */
	async call(query, params) {
		const pool = await this.poolManager.getCreateIfNotExistClient(config);
		const result = await pool.query(query, params);
		return new RepositoryDTO(result.rows);
	}
}
