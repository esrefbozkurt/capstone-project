import Exercises from "../../../Exercises/Exercises";

const AddExercises = ({ exercises }) => {
  return (
    <Exercises
      addExercises={true}
      exercises={exercises}
      isFavouriteExercise={false}
    />
  );
};

export default AddExercises;
