import express from "express"
import dotenv from "dotenv"
import Router from "./router.mjs"
import cors from "cors"

dotenv.config({path:"../.env"})
const SERVER_PORT=process.env.SERVER_PORT
const CLIENT_PORT=process.env.CLIENT_PORT

const app = express()
app.use(express.json())

app.use(cors({origin:`http://localhost:${CLIENT_PORT}`,credentials:true}))
app.use(Router)

app.listen(SERVER_PORT)