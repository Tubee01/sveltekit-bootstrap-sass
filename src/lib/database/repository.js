import config from './config';
import { PoolManager } from './pool-manager';

export class Repository {
  constructor(table, prefix = 'public') {
    this.poolManager = new PoolManager();
    this.table = `${prefix}.${table}`;
  }

  async call(query, params) {
    const pool = await this.poolManager.getCreateIfNotExistClient(config);
    const result = await pool.query(query, params);
    return result.rows;
  }
}
