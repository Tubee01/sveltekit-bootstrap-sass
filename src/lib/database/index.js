import { UserRepository } from './user.repository';

export const db = {
    user: new UserRepository()
}
