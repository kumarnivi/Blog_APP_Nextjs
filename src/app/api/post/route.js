import connectMOongo from "../../../../utiles/connectMongo";
import postModel from "../../../../models/postModel";

export async function GET() {
  try{
  await connectMOongo();
  const postData = await postModel.find({});
  return Response.json(postData)
  }
 catch (error) {
 return Response.json({message:error.message})
 }
   
}