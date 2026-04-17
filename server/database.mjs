import sqlite3 from "sqlite3"
import dotenv from "dotenv"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

dotenv.config({ path: "../.env" })

const __dirname = dirname(fileURLToPath(import.meta.url))

const db = new sqlite3.Database(join(__dirname, 'calendar.db'), (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
})

export default db;