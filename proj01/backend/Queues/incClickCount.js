import {clickQueue} from "./clickQueue.js";

const flushClicks = async () => {
    console.log("Creating scheduler...");
    const job = await clickQueue.upsertJobScheduler(
        "flush-clicks",
        {
            every: 30*1000
        },
        {
        name: "flush"
    });
    console.log("Scheduler created:");
}

export default flushClicks;