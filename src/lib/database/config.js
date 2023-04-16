
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from '$env/static/private'

export default {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
}