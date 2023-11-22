import dbConnect from "../../../db/dbConnect";
import Exercise from "../../../db/models/Exercises";
import { ExerciseType } from "../../../types";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const exercises = await Exercise.find();

      const exercisesArray: ExerciseType[] = exercises.map((exercise) => {
        return {
          id: exercise._id,
          name: exercise.name,
          type: exercise.type,
          muscle: exercise.muscle,
          equipment: exercise.equipment,
          difficulty: exercise.difficulty,
          instructions: exercise.instructions,
        };
      });

      res.status(200).json(exercisesArray);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}
