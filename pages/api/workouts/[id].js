import dbConnect from "../../../db/dbConnect";
import Workout from "../../../db/models/Workouts";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const workout = await Workout.findById(id);

      res.status(200).json({
        id: workout._id,
        name: workout.name,
        exercises: [
          {
            id: workout.exercises[0]?._id,
            exerciseName: workout.exercises[0]?.name,
          },
          {
            id: workout.exercises[1]?._id,
            exerciseName: workout.exercises[1]?.name,
          },
          {
            id: workout.exercises[2]?._id,
            exerciseName: workout.exercises[2]?.name,
          },
          {
            id: workout.exercises[3]?._id,
            exerciseName: workout.exercises[3]?.name,
          },
          {
            id: workout.exercises[4]?._id,
            exerciseName: workout.exercises[4]?.name,
          },
          {
            id: workout.exercises[5]?._id,
            exerciseName: workout.exercises[5]?.name,
          },
          {
            id: workout.exercises[6]?._id,
            exerciseName: workout.exercises[6]?.name,
          },
          {
            id: workout.exercises[7]?._id,
            exerciseName: workout.exercises[7]?.name,
          },
          {
            id: workout.exercises[8]?._id,
            exerciseName: workout.exercises[8]?.name,
          },
          {
            id: workout.exercises[9]?._id,
            exerciseName: workout.exercises[9]?.name,
          },
          {
            id: workout.exercises[10]?._id,
            exerciseName: workout.exercises[10]?.name,
          },
        ],
      });
    } catch (error) {
      res.status(404).json(error);
    }
  } else if (req.method === "DELETE") {
    const result = await Workout.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "workout deleted" });
    } else {
      res.status(400).json({ message: "document not found" });
    }
  } else if (req.method === "PUT") {
    const updatedWorkout = await Workout.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (updatedWorkout) {
      res.status(200).json({ message: "workout updated" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  }
}
