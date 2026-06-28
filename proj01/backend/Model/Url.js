import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },
    tail: {
        type: String,
        required: true
    },
    clickCount: {
        type: Number,
        default: 0
    }
});

const Url = mongoose.model("Url", urlSchema);

export default Url;