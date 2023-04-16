export class RepositoryDTO {
	/**
	 * @param {Array<*>} rows
	 */
	constructor(rows) {
		/**
		 * @type {Array<*>}
		 */
		this.rows = rows;
	}
	/**
	 * Returns a single row or null if no rows are returned
	 * @returns {*|null}
	 */
	getRow() {
		return this.rows?.[0] || null;
	}
	/**
	 * Returns the value of the specified field in the first row, or null if the row or field doesn't exist
	 * @param {string} field
	 * @returns {*|null}
	 */
	getField(field) {
		const row = this.getRow();

		if (!row || !field) {
			return null;
		}

		// @ts-ignore
		return row ? row[field] || null : null;
	}
	/**
	 * Returns an array of values of the specified field in all rows, or an empty array if the field doesn't exist
	 * @param {string} field
	 * @returns {Array<*>}
	 */
	getFieldValues(field) {
		return this.rows.map((row) => row[field] || null);
	}
	/**
	 * Returns the number of rows returned
	 * @returns {number}
	 */
	getRowCount() {
		return this.rows.length;
	}
}
