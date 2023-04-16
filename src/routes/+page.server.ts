import { db } from "$lib/database"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = () => {
    const users = db.user.findAll()
    return {
        users,
    }
}