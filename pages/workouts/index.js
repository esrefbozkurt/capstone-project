import { Fragment } from "react";
import Head from "next/head";
import Nav from "../../components/Footer/Nav";
import Workouts from "../../components/Main/Workouts/Workouts";
import { useEffect } from "react";

const Workout = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getWorkouts();
  }, []);

  async function getWorkouts() {
    const response = await fetch("/api/workouts");
    const workoutsList = await response.json();
    setWorkouts(workoutsList);
  }

  function handleAddWorkout(newWorkout) {
    setWorkouts([...workouts, newWorkout]);
  }

  return (
    <Fragment>
      <Head>
        <title>TrackFit | Favourites</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>
      <Workouts workouts={workouts} onAddWorkout={handleAddWorkout} />
      <Nav />
    </Fragment>
  );
};

export default Workout;
