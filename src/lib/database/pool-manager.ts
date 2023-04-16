import type { ClientConfig } from 'pg';
import { Pool, } from 'pg';

export class PoolManager {
  private readonly clients: { [key: string]: Pool } = {};


  getClient(name: string) {
    return this.clients[name];
  }

  async createPool(config: ClientConfig) {
    if (!config?.database) {
      throw new Error('Database name is required');
    }

    if (config?.database && this.clients[config.database]) {
      throw new Error('Pool already exists');
    }

    const pool = new Pool(config);
    await pool.connect();
    this.clients[config.database] = pool;

    return pool;
  }

  async getCreateIfNotExistClient(config: ClientConfig) {
    if (!config?.database) {
      throw new Error('Database name is required');
    }

    let client = this.getClient(config.database);
    if (client) {
      return client;
    } else {
      return await this.createPool(config);
    }
  }

  async closeAll() {
    const clientKeys = Object.keys(this.clients);
    for (let i = 0; i < clientKeys.length; i++) {
      const client = this.clients[clientKeys[i]];
      await client.end();
    }
  }
}

