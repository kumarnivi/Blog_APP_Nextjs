import mongoose, { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
  title: String,
  description: String,
  image: String,
},
{toJSON: {virtuals:true}}

);

postSchema.virtual('short_description').get(function() {
    return this.description.substr(0,50)+ '...'
})


// in this line to check the Condion which is exsisting model
const postModel = models.Post || model('Post', postSchema);

export default postModel;
