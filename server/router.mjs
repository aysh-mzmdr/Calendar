import { Router } from "express"
import pool from "./database.mjs"

const router = Router()

router.post("/api/update", async (request,response) => {
    const {date,color,note} = request.body
    try{
        await pool.query(`INSERT INTO dates (date,color,note) VALUES ($1,$2,$3) ON CONFLICT (date) DO UPDATE SET color = $2, note = $3`,[date,color,note])
        return response.send(201)
    }
    catch(err){
        return response(err)
    }
})

router.get("/api/getDates",async(request,response) => {
    const data = await pool.query("SELECT * FROM dates")
    console.log(data.rows)
    const dateData = data.rows
    response.send(dateData)
})

export default router