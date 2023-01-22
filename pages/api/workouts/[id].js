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
            name: workout.exercises[0]?.name,
            details: [
              {
                date: workout.exercises[0]?.details[0]?.date,
                sets: {
                  name: workout.exercises[0]?.details[0]?.sets.name,
                  weights: workout.exercises[0]?.details[0]?.sets.weights,
                  reps: workout.exercises[0]?.details[2]?.sets.reps,
                },
              },
            ],
          },
          {
            id: workout.exercises[1]?._id,
            name: workout.exercises[1]?.name,
            details: [
              {
                date: workout.exercises[1]?.details[1]?.date,
                sets: {
                  name: workout.exercises[1]?.details[1]?.sets.name,
                  weights: workout.exercises[1]?.details[1]?.sets.weights,
                  reps: workout.exercises[1]?.details[1]?.sets.reps,
                },
              },
            ],
          },
          {
            id: workout.exercises[2]?._id,
            name: workout.exercises[2]?.name,
            details: [
              {
                date: workout.exercises[2]?.details[2]?.date,
                sets: {
                  name: workout.exercises[2]?.details[2]?.sets.name,
                  weights: workout.exercises[2]?.details[2]?.sets.weights,
                  reps: workout.exercises[2]?.details[2]?.sets.reps,
                },
              },
            ],
          },
          {
            id: workout.exercises[3]?._id,
            name: workout.exercises[3]?.name,
            details: [
              {
                date: workout.exercises[3]?.details[3]?.date,
                sets: {
                  name: workout.exercises[3]?.details[3]?.sets.name,
                  weights: workout.exercises[3]?.details[3]?.sets.weights,
                  reps: workout.exercises[3]?.details[3]?.sets.reps,
                },
              },
            ],
          },
          {
            id: workout.exercises[4]?._id,
            name: workout.exercises[4]?.name,
            details: [
              {
                date: workout.exercises[4]?.details[4]?.date,
                sets: {
                  name: workout.exercises[4]?.details[4]?.sets.name,
                  weights: workout.exercises[4]?.details[4]?.sets.weights,
                  reps: workout.exercises[4]?.details[4]?.sets.reps,
                },
              },
            ],
          },
          {
            id: workout.exercises[5]?._id,
            name: workout.exercises[5]?.name,
            details: [
              {
                date: workout.exercises[5]?.details[5]?.date,
                sets: {
                  name: workout.exercises[5]?.details[5]?.sets.name,
                  weights: workout.exercises[5]?.details[5]?.sets.weights,
                  reps: workout.exercises[5]?.details[5]?.sets.reps,
                },
              },
            ],
          },
          {
            id: workout.exercises[6]?._id,
            name: workout.exercises[6]?.name,
            details: [
              {
                date: workout.exercises[6]?.details[6]?.date,
                sets: {
                  name: workout.exercises[6]?.details[6]?.sets.name,
                  weights: workout.exercises[6]?.details[6]?.sets.weights,
                  reps: workout.exercises[6]?.details[6]?.sets.reps,
                },
              },
            ],
          },
          {
            id: workout.exercises[7]?._id,
            name: workout.exercises[7]?.name,
            details: [
              {
                date: workout.exercises[7]?.details[7]?.date,
                sets: {
                  name: workout.exercises[7]?.details[7]?.sets.name,
                  weights: workout.exercises[7]?.details[7]?.sets.weights,
                  reps: workout.exercises[7]?.details[7]?.sets.reps,
                },
              },
            ],
          },
          {
            id: workout.exercises[8]?._id,
            name: workout.exercises[8]?.name,
            details: [
              {
                date: workout.exercises[8]?.details[8]?.date,
                sets: {
                  name: workout.exercises[8]?.details[8]?.sets.name,
                  weights: workout.exercises[8]?.details[8]?.sets.weights,
                  reps: workout.exercises[8]?.details[8]?.sets.reps,
                },
              },
            ],
          },
          {
            id: workout.exercises[9]?._id,
            name: workout.exercises[9]?.name,
            details: [
              {
                date: workout.exercises[9]?.details[9]?.date,
                sets: {
                  name: workout.exercises[9]?.details[9]?.sets.name,
                  weights: workout.exercises[9]?.details[9]?.sets.weights,
                  reps: workout.exercises[9]?.details[9]?.sets.reps,
                },
              },
            ],
          },
          {
            id: workout.exercises[10]?._id,
            name: workout.exercises[10]?.name,
            details: [
              {
                date: workout.exercises[10]?.details[10]?.date,
                sets: {
                  name: workout.exercises[10]?.details[10]?.sets.name,
                  weights: workout.exercises[10]?.details[10]?.sets.weights,
                  reps: workout.exercises[10]?.details[10]?.sets.reps,
                },
              },
            ],
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
