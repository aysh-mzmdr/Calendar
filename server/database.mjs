import { Pool } from "pg"
import dotenv from "dotenv"

dotenv.config({ path: "../.env" })

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
const pool = new Pool({
    connectionString: connectionString
})

export default pool;