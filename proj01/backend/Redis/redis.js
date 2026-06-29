import Redis from "ioredis";

const client = new Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
    maxRetriesPerRequest: null,
});

// for deployment, you might want to use a Redis URL instead of host and port
// const client = new Redis(process.env.REDIS_URL, {
//     maxRetriesPerRequest: null,
// });


client.on("connect", () => {
    console.log("Redis Connected");
});

client.on("error", (err) => {
    console.log(err);
});

export default client;