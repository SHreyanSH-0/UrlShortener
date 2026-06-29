import {clickQueue} from "./clickQueue.js";

const flushClicks = async () => {
+    await clickQueue.upsertJobScheduler(
    "flush-clicks",
    {
        every: 30*1000
    },
    {
        name: "flush"
    });
}

export default flushClicks;