import Redis from "ioredis";
import {Queue} from "bullmq";

import client from "../Redis/redis.js";

const clickQueue = new Queue("clickQueue", {
    connection : client
});

export {clickQueue, client};