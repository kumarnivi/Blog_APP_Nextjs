import mongoose from "mongoose";

const connectMOongo = async () => mongoose.connect(`mongodb+srv://sivakumarnivethika90:raamnivi2529@cluster0.lmr8n.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0
`)


export default connectMOongo;


