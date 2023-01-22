import { useRouter } from "next/router";
import AddSets from "../../../components/Main/Workouts/WorkoutDetails/AddSets/AddSets";

const AddSet = ({ exerciseAdded }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <AddSets exerciseAdded={exerciseAdded} />
    </>
  );
};

export default AddSet;
