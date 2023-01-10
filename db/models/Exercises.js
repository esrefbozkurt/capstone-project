import mongoose from "mongoose";

const { Schema } = mongoose;

//blaupause

const questionSchema = new Schema({
  text: { type: String, required: true },
  name: { type: String, required: true },
});

//Question Model erlaubt uns die CRUD-Operationen
const Question =
  mongoose.models.Question || mongoose.model("Question", questionSchema);
//Question => questions, User => users
export default Question;
