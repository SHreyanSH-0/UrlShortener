import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("HELLOW MEWO")
});

export default router;