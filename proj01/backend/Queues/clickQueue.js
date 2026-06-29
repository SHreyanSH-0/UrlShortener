import Redis from "ioredis";
import {Queue} from "bullmq";

const connection = new Redis({
    host: "127.0.0.1",
    port: 6379,
    maxRetriesPerRequest: null
});

const clickQueue = new Queue("clickQueue", {
    connection
});

export {clickQueue, connection};