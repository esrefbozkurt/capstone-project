import mongoose from "mongoose";

const { Schema } = mongoose;

const workoutSchema = new Schema({
  name: { type: String, required: true },
});

const Workout =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);

export default Workout;
