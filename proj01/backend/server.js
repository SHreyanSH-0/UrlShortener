import express from "express";
import router from "./Routes/urlRoute.js";

import cors from "cors"
import rateLimiter from "express-rate-limit"
import helmet from "helmet"

const app = express();

app.use(helmet())
app.use(cors(
    {
        origin : process.env.Frontend_Url
    }
));

app.use(express.json({limit : "50kb"}));

const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

app.use("/mywebsite", router);

app.listen(3000, () =>{
    console.log("listning");
})