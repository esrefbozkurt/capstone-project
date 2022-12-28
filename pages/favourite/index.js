import { useRouter } from "next/router";
import Favorite from "../../components/Main/Exercises/Favourite/Favourite";
import { dataBiceps } from "../../lib/data";

export default function Favourite() {
  const router = useRouter();

  const { id } = router.query;

  const currentFavourite = dataBiceps.find((liked) => liked.id === id);

  if (!currentFavourite) {
    return <p>Not found!!!</p>;
  }

  const { name, equipment, difficulty, instructions, favourite } =
    currentFavourite;

  return (
    <>
      {favourite ? (
        <li key={id}>
          <div
            className="favContainer"
            onClick={() => {
              handleToggle(id);
            }}
          >
            <button>
              <span>
                <h3>{name.toUpperCase()}</h3>
              </span>
            </button>
            <Favorite />
          </div>
          {toggledExercises.includes(id) ? (
            <Description
              key={id}
              id={id}
              name={name}
              equipment={equipment}
              difficulty={difficulty}
              instructions={instructions}
            />
          ) : null}
        </li>
      ) : null}
    </>
  );
}
