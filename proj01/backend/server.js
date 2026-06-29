import express from "express";
import router from "./Routes/urlRoute.js";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./Config/database.js";
connectDB();

import cors from "cors"
import rateLimiter from "express-rate-limit"
import helmet from "helmet"

// redis
// import redis from "redis";
// const client = redis.createClient();
// async function connectRadis() {
//     await client.connect();
// }
// connectRadis();

import client from "./Redis/redis.js";

import worker from "./Queues/worker.js";

import flushClicks from "./Queues/incClickCount.js";

const app = express();

app.use(helmet())

app.use(cors({
    origin : process.env.Frontend_Url
}));

app.use(express.json({limit : "50kb"}));

const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100
});

app.use(limiter);

app.use("/mywebsite", router);

flushClicks();

app.listen(3000, () =>{
    console.log("listning");
})

export default client;