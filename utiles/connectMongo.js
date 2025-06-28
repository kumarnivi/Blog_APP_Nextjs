import mongoose from "mongoose";

const connectMOongo = async () => mongoose.connect(process.env.MONGO_URI)



export default connectMOongo;


