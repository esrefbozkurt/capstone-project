import Exercises from "../../../Exercises/Exercises";

const AddExercises = ({
  exercises,
  workouts,
  onAddExercise,
  id,
  currentWorkout,
  exerciseAdded,
  updateAddedExercises,
}) => {
  return (
    <>
      <Exercises
        addExercises={true}
        exercises={exercises}
        isFavouriteExercise={false}
        currentWorkout={currentWorkout}
        onAddExercise={onAddExercise}
        workouts={workouts}
        exerciseAdded={exerciseAdded}
        updateAddedExercises={updateAddedExercises}
        id={id}
      />
    </>
  );
};
export default AddExercises;
