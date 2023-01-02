// import { useRouter } from "next/router";
// import Favourite from "../../components/Main/Exercises/Favourite/Favourite";
// import { dataBiceps } from "../../lib/data";

// const Favourite = ({ onFav, isFavourite }) => {
//   const router = useRouter();

//   const { id } = router.query;

//   const currentFavourite = dataBiceps.map((exercise) =>
//     isFavourite.includes(exercise.id)
//   );

//   if (!currentFavourite) {
//     return <p>Not found!!!</p>;
//   }

//   const { name, equipment, difficulty, instructions } = currentFavourite;

//   return (
//     <>
//       <h1>Hallooo</h1>
//       {/* {isFavourite ? (
//         <li key={id}>
//           <div
//             className="favContainer"
//             onClick={() => {
//               handleToggle(id);
//             }}
//           >
//             <button>
//               <span>
//                 <h3>{name.toUpperCase()}</h3>
//               </span>
//             </button>
//             <Favorite />
//           </div>
//           {toggledExercises.includes(id) ? (
//             <Description
//               key={id}
//               id={id}
//               name={name}
//               equipment={equipment}
//               difficulty={difficulty}
//               instructions={instructions}
//             />
//           ) : null}
//         </li>
//       ) : null} */}
//     </>
//   );
// };

// export default Favourite;
