import mongoose from "mongoose";

const { Schema } = mongoose;

const workoutSchema = new Schema({
  name: { type: String, required: true },
  exercises: [
    {
      name: { type: String, required: true },
      details: [
        {
          date: { type: String, required: true },
          sets: [
            {
              name: { type: String, required: true },
              weights: { type: String, required: true },
              reps: { type: String, required: true },
            },
          ],
        },
      ],
    },
  ],
});

const Workout =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);

export default Workout;
