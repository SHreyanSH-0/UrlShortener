import { Worker } from "bullmq";
import {client} from "./clickQueue.js";
import Url from "../Model/Url.js";

console.log("Worker file loaded...");

const worker = new Worker(
    "clickQueue",
    async () => {

        let cursor = "0";

        do {
            // Scan the Redis keys with the pattern "clicks:*" and max of 100 keys can be there
            const [nextCursor, keys] = await client.scan(
                cursor,
                "MATCH",
                "clicks:*",
                "COUNT",
                100
            );

            cursor = nextCursor;
            for (const key of keys) {

                const clicks = Number(await client.get(key));

                const tail = key.split(":")[1];

                await Url.updateOne(
                    { tail },
                    {
                        $inc: {
                            clickCount: clicks
                        }
                    }
                );

                await client.del(key);
            }

        } while (cursor !== "0");

    },
    {
        connection : client
    }
);

export default worker;