import { db } from "$lib/database"

export const load = () => {
    const users = db.user.findAll()
    return {
        users
    }
}