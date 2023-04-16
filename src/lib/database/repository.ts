import config from './config';
import { PoolManager } from './pool-manager';

export class Repository {
  protected poolManager: PoolManager;
  protected table: string;

  constructor(table: string, prefix = 'public') {
    this.poolManager = new PoolManager();
    this.table = `${prefix}.${table}`;
  }

  async call(query: string, params: any[] = []) {
    const pool = await this.poolManager.getCreateIfNotExistClient(config);
    const result = await pool.query(query, params);
    return result.rows;
  }
}
