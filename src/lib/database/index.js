import { PoolManager } from './pool-manager';
import { UserRepository } from './repositories';
import dbconfig from './config';
const poolManager = new PoolManager();

/**
 * @typedef {Object} DB
 * @property {UserRepository} user
 */
const db = {
	getPool: (/** @type {import('pg').PoolConfig} */config = dbconfig) => poolManager.getCreateIfNotExistClient(config),
	user: new UserRepository(poolManager),
};

export default db;
