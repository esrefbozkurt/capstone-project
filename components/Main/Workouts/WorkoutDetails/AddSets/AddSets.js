import { StyledAddSets, StyledAddSetsHeader } from "./StyledAddSets";

export default function AddSets({ exerciseAdded, id }) {
  console.log(exerciseAdded);
  return (
    <>
      {/* <StyledAddSetsHeader> */}
      <Link href={`/workouts/${id}`}>
        <Image
          src="/arrow-circle-left.svg"
          width={24}
          height={24}
          alt="back button"
          priority
        />
      </Link>
      <h2 className="headerAddExercise">
        Add Exercises to {exerciseAdded.name}
      </h2>
      {/* </StyledAddSetsHeader>
      <StyledAddSets></StyledAddSets> */}
    </>
  );
}
