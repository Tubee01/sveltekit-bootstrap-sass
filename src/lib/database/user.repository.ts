import { Repository } from './repository';

export class UserRepository extends Repository {
    constructor() {
        super('user');
    }

    async findAll() {
        const query = `SELECT * FROM ${this.table}`;
        return await this.call(query);
    }

}
