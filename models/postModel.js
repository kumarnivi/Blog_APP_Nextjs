import { Schema } from "mongoose";


 const postScheama = new Schema({
    title:String,
    description:String,
    image:String
})

const postModel = model('POst', postScheama)

export default postModel;