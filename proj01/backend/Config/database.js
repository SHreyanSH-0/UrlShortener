import mongoose from "mongoose";

function connectDB(){
    Promise.resolve(
        mongoose.connect(process.env.MONGO_URI))
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log("Can't Connect to DB " + err));
}

export default connectDB;