import dbConnect from "../../../db/dbConnect";
import Workout from "../../../db/models/Workouts";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const workouts = await Workout.find();

      const workoutsArray = workouts.map((workout) => {
        return {
          id: workout._id,
          name: workout.name,
          exercises: workout.exercises,
        };
      });

      res.status(200).json(workoutsArray);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  if (req.method === "POST") {
    const data = req.body;
    try {
      const newWorkout = await Workout.create(data);
      res.status(201).json(newWorkout);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
