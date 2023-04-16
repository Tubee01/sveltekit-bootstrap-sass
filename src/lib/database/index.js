import { UserRepository } from './repositories';

/**
 * @typedef {Object} DB
 * @property {UserRepository} user
 */
const db = {
	user: new UserRepository()
};

export default db;
