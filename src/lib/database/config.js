/**
 *   Object containing database connection parameters.
 *   @typedef {Object} DBConfig
 *   @property {string} host - Hostname of the database server.
 *   @property {number} port - Port number for the database server.
 *   @property {string} user - Username for database access.
 *   @property {string} password - Password for database access.
 *   @property {string} database - Name of the database to connect to.
 */
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from '$env/static/private';

/**
 *   Returns an object containing database connection parameters.
 *   @returns {DBConfig} - An object containing database connection parameters.
 */
export default function getDBConfig() {
	return {
		host: DB_HOST,
		port: +DB_PORT,
		user: DB_USER,
		password: DB_PASSWORD,
		database: DB_NAME
	};
}
