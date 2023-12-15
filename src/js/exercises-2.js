// import fetchSportEnergy from './api/apiSport';

// const list = document.querySelector('.filter-list-js');
// const Exercises = document.querySelector('.exercises_list');

// list.addEventListener('click', handlerClickFilterCards);

// async function handlerClickFilterCards(e) {
//   e.preventDefault();
//   // list.classList.add("visually-hidden");
//   const { target } = e;
//   let nameFilter;
//   let nameCard;
//   try {
//     if (target.nodeName === 'IMG') {
//       nameFilter = target.parentNode.parentNode.dataset.filter;
//       // console.log(nameFilter)
//       nameCard = target.parentNode.parentNode.dataset.name;
//       // console.log(nameCard)
//     }
//     if (target.nodeName === 'P' || target.nodeName === 'H3') {
//       nameFilter = target.parentNode.parentNode.parentNode.dataset.filter;
//       // console.log(nameFilter)
//       nameCard = target.parentNode.parentNode.parentNode.dataset.name;
//       // console.log(nameCard)
//     }
//     const dataExercises = {
//       [nameFilter]: [nameCard],
//       keyword: 'pull',
//       page: 1,
//       limit: 10,
//     };
//     list.innerHTML = '';
//     document.querySelector('.muscles-section').classList.remove('muscles-section');
//     list.classList.remove('muscles-list');
//     list.classList.add('exercises_list');
//     const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);
//     if (!exercises || exercises.length === 0) {
//       Notiflix.Notify.failure("Sorry, we didn't find anything according to your request.");
//       return;
//     }

//     list.insertAdjacentHTML('beforeend', makeMarkupCards(exercises));
//   } catch (er) {
//     console.log(er.message);
//   }
// }

// export function makeMarkupCards(exercises) {
//   // console.log(exercises.results.length)
//   if (exercises.results.length) {
//     // console.log("here")
//     const markup = exercises.results
//       .map(({ _id, target, rating }) => {
//         console.log(_id);
//         return `
//       <li class="exercises_list_item" id=${_id}>
//       <div class="exercises_list_item_up">
//         <div class="exercises_list_item_up_left">
//           <div class="exercises_workout">${target}</div>
//           <p class="exercises_rating">${rating}.0</p>
//           <div class="exercises_list_item_icon_star">
//             <svg class="exercises_list_item_icon_svg_star" width="18px" height="18px">
//               <use xlink:href="./img/icons.svg#icon-star" fill=""></use>
//               />
//             </svg>
//           </div>
//         </div>
//         <div class="exercises_list_item_up_right">
//           <button class="exercises_btn_start">
//             <p class="exercises_btn_start_text">start</p>
//             <svg class="exercises_btn_start_icon" width="56px" height="18px">
//               <use xlink:href="../img/icons.svg#icon-arrow"></use>
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div class="exercises_list_item_middle">
//         <div class="exercises_list_item_middle_icon">
//           <svg class="exercises_list_item_middle_icon_svg" width="24px" height="24px">
//             <use xlink:href="./img/icons.svg#icon-running-man"></use>
//             />
//           </svg>
//         </div>
//         <h3 class="exercises_list_item_middle_title">Air bike</h3>
//       </div>
//       <div class="exercises_list_item_bottom">
//         <ul class="exercises_list_item_bottom_list">
//           <li class="exercises_list_item_bottom_list_item">
//             <p class="exercises_list_item_bottom_list_item_text">
//               Burned calories: <span>312 / 3 min</span>
//             </p>
//           </li>`;
//       })
//       .join('');
//     //  console.log(markup)
//     return markup;
//   } else {
//     // const underfinde = '<p>Sorry</p>';
//     // console.log('sorry');
//     // return underfinde;
//     Notiflix.Notify.failure("Sorry, we didn't find anything according to your request.");
//   }
//   // makeMarkupCards(exercises)
// }

import fetchSportEnergy from './api/apiSport';
import Notiflix from 'notiflix';
const list = document.querySelector('.filter-list-js');

list.addEventListener('click', handlerClickFilterCards);

async function handlerClickFilterCards(e) {
  e.preventDefault();
  const { target } = e;

  const getParentData = (target, level = 1) => {
    return target?.parentNode?.parentNode?.dataset || {};
  };

  const { filter: nameFilter, name: nameCard } =
    target.nodeName === 'IMG'
      ? getParentData(target, 2)
      : target.nodeName === 'P' || target.nodeName === 'H3'
      ? getParentData(target, 3)
      : {};

  try {
    const dataExercises = {
      [nameFilter]: [nameCard],
      keyword: 'pull',
      page: 1,
      limit: 10,
    };

    list.innerHTML = '';
    // document.querySelector('.muscles-section').classList.remove('muscles-section');

    list.classList.remove('muscles-list');
    list.classList.add('exercises_list');

    const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);

    if (!exercises || exercises.results.length === 0) {
      Notiflix.Notify.failure("Sorry, we didn't find anything according to your request.");
      return;
    }

    list.insertAdjacentHTML('beforeend', makeMarkupCards(exercises));
  } catch (er) {
    console.log(er.message);
  }
}

export function makeMarkupCards(exercises) {
    const markup = exercises.results
      .map(({ _id, target, rating }) => {
        console.log(_id);
        return `
          <li class="exercises_list_item" id=${_id}>
            <div class="exercises_list_item_up">
              <div class="exercises_list_item_up_left">
                <div class="exercises_workout">${target}</div>
                <p class="exercises_rating">${rating}.0</p>
                <div class="exercises_list_item_icon_star">
                  <svg class="exercises_list_item_icon_svg_star" width="18px" height="18px">
                    <use xlink:href="./img/icons.svg#icon-star" fill=""></use>
                  </svg>
                </div>
              </div>
              <div class="exercises_list_item_up_right">
                <button class="exercises_btn_start">
                  <p class="exercises_btn_start_text">start</p>
                  <svg class="exercises_btn_start_icon" width="56px" height="18px">
                    <use xlink:href="../img/icons.svg#icon-arrow"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div class="exercises_list_item_middle">
              <div class="exercises_list_item_middle_icon">
                <svg class="exercises_list_item_middle_icon_svg" width="24px" height="24px">
                  <use xlink:href="./img/icons.svg#icon-running-man"></use>
                </svg>
              </div>
              <h3 class="exercises_list_item_middle_title">${target}</h3>
            </div>
            <div class="exercises_list_item_bottom">
              <ul class="exercises_list_item_bottom_list">
                <li class="exercises_list_item_bottom_list_item">
                  <p class="exercises_list_item_bottom_list_item_text">
                    Burned calories: <span>312 / 3 min</span>
                  </p>
                </li>
              </ul>
            </div>
          </li>`;
      })
      .join('');

    return markup;

}
