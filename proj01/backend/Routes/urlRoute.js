import express from "express";
import tailGenerator from "../Working/tailGenerator.js";
import Url from "../Model/Url.js";

const router = express.Router();

router.post("/getShortUrl", async (req,res)=>{
    const longUrl = req.body.longUrl;

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
    res.json({shortUrl: shortUrl});
});


router.get("/:tail", async (req,res)=>{
    const tail = req.params.tail;
    const url = await Url.findOne({ tail: tail });
    if(url){
        url.clickCount++;
        await url.save();
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