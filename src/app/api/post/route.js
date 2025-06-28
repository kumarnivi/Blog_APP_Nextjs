import connectMOongo from "../../../../utiles/connectMongo";
import postModel from "../../../../models/postModel";

export async function GET() {
   await connectMOongo();
  const postData = await postModel.find({});
  return Response.json(postData)
   
}