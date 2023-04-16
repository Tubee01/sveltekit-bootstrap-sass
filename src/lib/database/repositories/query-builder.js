import { arrayify } from '$lib/utils';

export class QueryBuilder {
	/**
	 * @param {string} table
	 */
	constructor(table) {
		this.table = table;
		this.query = '';
		this.paramsCount = 0;
	}

	/**
	 * @param {string|string[]} fields
	 * @returns {QueryBuilder}
	 */

	select(fields = ['*']) {
		const fieldsString = arrayify(fields).join(',');
		this.query = `SELECT ${fieldsString} FROM ${this.table}`;
		return this;
	}

	/**
	 * @param {string} field
	 * @returns {QueryBuilder}
	 */
	where(field) {
		this.query += ` WHERE ${field} = $${(this.paramsCount += 1)}`;

		return this;
	}

	/**
	 * @param {string} field
	 * @param {string} direction
	 * @returns {QueryBuilder}
	 */

	orderBy(field, direction = 'ASC') {
		this.query += ` ORDER BY ${field} ${direction}`;
		return this;
	}

	/**
	 * @param {string[]} fields
	 * @returns {QueryBuilder}
	 */
	insert(fields = []) {
		const fieldsString = arrayify(fields).join(',');
		const valuesString = arrayify(fields)
			.map((_, index) => `$${index + 1}`)
			.join(',');
		this.query = `INSERT INTO ${this.table} (${fieldsString}) VALUES (${valuesString})`;
		return this;
	}

	/**
	 * @param {string[]} fields
	 * @returns {QueryBuilder}
	 */
	returning(fields = ['*']) {
		const fieldsString = arrayify(fields).join(',');
		this.query += ` RETURNING ${fieldsString}`;
		return this;
	}

	/**
	 * @returns {string}
	 */
	build() {
		const query = this.query;
		this.reset();
		return query;
	}

	/**
	 * @returns {void}
	 * @private
	 */
	reset() {
		this.query = '';
		this.paramsCount = 0;
	}
}
