import express from "express";
import tailGenerator from "../Working/tailGenerator.js";
import Url from "../Model/Url.js";
import client from "../Redis/redis.js";

const router = express.Router();

router.post("/getShortUrl", async (req,res)=>{
    const longUrl = req.body.longUrl;

    const cachedUrl = await client.get(`url:${longUrl}`);

    if(cachedUrl){
        res.json({shortUrl: `${process.env.VITE_BACKEND_URL}mywebsite/${cachedUrl}`});
        return;
    }

    const existingUrl = await Url.findOne({ longUrl: longUrl });
    if(existingUrl){
        res.json({shortUrl: `${process.env.VITE_BACKEND_URL}mywebsite/${existingUrl.tail}`});
        return;
    }

    const tail = await tailGenerator();
    const shortUrl = `${process.env.VITE_BACKEND_URL}mywebsite/${tail}`;
    const newUrl = new Url({
        longUrl: longUrl,
        tail: tail,
    });
    await newUrl.save();
    await client.set(`url:${longUrl}`, tail);
    res.json({shortUrl: shortUrl});
});


router.get("/:tail", async (req,res)=>{
    const tail = req.params.tail;

    const cachedUrl = await client.get(`url:${tail}`);

    if (cachedUrl) {
        console.log("Cache hit");
        await client.incr(`clicks:${tail}`);
        return res.redirect(cachedUrl);
    }

    const url = await Url.findOne({ tail: tail });
    if(url){
        await client.set(`url:${tail}`, url.longUrl);
        await client.incr(`clicks:${tail}`);
        res.redirect(url.longUrl);
    }
    else{
        res.status(404).json({error: "URL not found"});
    }
});

router.get("/", (req,res)=>{
    res.send("Hello MEOW");
});

export default router;