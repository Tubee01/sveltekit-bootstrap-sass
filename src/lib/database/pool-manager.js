
import pkg from 'pg';
const { Pool } = pkg;

export class PoolManager {
  constructor() {
    this.clients = {};
  }

  getClient(name) {
    return this.clients[name];
  }

  async createPool(config) {
    if (this.clients[config.database]) {
      throw new Error('Pool already exists');
    }

    const pool = new Pool(config);
    await pool.connect();
    this.clients[config.database] = pool;

    return pool;
  }

  async getCreateIfNotExistClient(config) {
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

