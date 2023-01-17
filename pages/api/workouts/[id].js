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
      });
    } catch (error) {
      res.status(404).json(error);
    }
  }
  if (req.method === "DELETE") {
    const result = await Workout.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "workout deleted" });
    } else {
      res.status(400).json({ message: "document not found" });
    }
  }
}
