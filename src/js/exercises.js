// import fetchSportEnergy from "./api/apiSport";

// const dataExercises = {
//   bodypart: "back",
//   exercises: "lats",
//   equipment: "barbell",
//   keyword: "pull",
//   page: 1,
//   limit: 10,
// };

// const exercisesList = document.querySelector(".exercises-list");

// // window.addEventListener("DOMContentLoaded", getDataExercises);

// export async function getDataExercises() {
//   try {
//     const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);
//     console.log("exercises-->", exercises);

//     const exercisesResult = exercises.results;

//     if (exercises.length === 0 || exercises === undefined) {
//       console.log("Sorry, we didn't find anything according to your request.");
//       return;
//     }
//     exercisesList.insertAdjacentHTML(
//       "beforeend",
//       makeMarkupExercises(exercisesResult)
//     );
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// console.log(exercisesList);

// export function makeMarkupExercises(exercisesResult) {
//   const markup = exercisesResult
//     .map(
//       ({
//         _id,
//         bodyPart,
//         equipment,
//         gifUrl,
//         name,
//         target,
//         description,
//         rating,
//         burnedCalories,
//         time,
//         popularity,
//       }) => {
//         return `
//         <li class="exercises-item" id="${_id}">
//         <!-- rating-menu -->
//         <div class="rating-menu">
//         <div class="rating-div">
//         <button type="button" class="rating-menu-text">WORKOUT</button>
//         <p class="exercises-rating">${rating}</p>
//         </div>
//         <button type="button" class="exercises-btn">Start</button>
//         </div>
//         <!-- rating-menu -->


//         <!-- box-menu -->
//           <div class="exercises-box-menu">
//           <span class="exercises-icon">
//           <svg
//             class="quote-icon-img"
//             width="14"
//             height="16"
//             aria-label="running-man-icon"
//           >
//             <use href="../img/icons.svg#icon-running-man"></use>
//           </svg>
//         </span>
//              <h3 class="exercises-small-title">${name}</h3>
//               </div>
//            <!-- box-menu -->

//            <!-- exercises-text-box -->

//            <div class="exercises-text-box">
//            <p class="exercises-text">Burned calories:<span class="exercises-span">${burnedCalories}</span></p>
//            <p class="exercises-text">Body part:<span class="exercises-span">${bodyPart}</span></p>
//            <p class="exercises-text">Target:<span class="exercises-span">${target}</span></p>
//            </div>
//             <!-- exercises-text-box -->
//            </li>
//           `;
//       }
//     )
//     .join("");
//   return markup;
// }
