// import axios from 'axios';

// import { cutString, deleteFavoriteItem, setFavoriteArr } from './utils/favorite';
import { Modal } from './modal-window/modal';
// import { getExerciseModal } from './modal-window/generation-to-modal';

// const listEl = document.querySelector('.favourites_list');
// const modal = new Modal();

// const getInfoCard = async id => {
//   const { data } = await axios.get(`https://your-energy.b.goit.study/api/exercises/${id}`);
//   return data;
// };

// const renderCard = data => {
//   listEl.innerHTML += `
//     <li class="favourites_list_item">
//     <div class="favourites_list_item_up">
//       <div class="favourites_list_item_up_left">
//         <span class="favourites_btn_workout">${cutString(data.target, 6)}</span>
//         <button id="btnTrash" class="favourites_btn_trash" data-id="${data._id}">
//           <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash">
//             <use xlink:href="./img/svg/sprite.svg#icon-trash"></use>
//           </svg>
//         </button>
//       </div>
//       <div class="favourites_list_item_up_right">
//         <button class="favourites_btn_start" data-id=${data._id}>
//           <p class="favourites_btn_start_text">start</p>
//           <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow">
//             <use xlink:href="./img/svg/sprite.svg#icon-arrow"></use>
//           </svg>
//         </button>
//       </div>
//     </div>
//     <div class="favourites_list_item_middle">
//       <div class="favourites_list_item_middle_icon">
//         <svg class="favourites_list_item_middle_icon_svg">
//           <use xlink:href="./img/svg/sprite.svg#icon-run-man"></use>
//         </svg>
//       </div>
//       <h3 class="favourites_list_item_middle_title">${cutString(data.name, 16)}</h3>
//     </div>
//     <div class="favourites_list_item_bottom">
//       <ul class="favourites_list_item_bottom_list">
//         <li class="favourites_list_item_bottom_list_item">
//           <p class="favourites_list_item_bottom_list_item_text">
//             Burned calories: <span>${data.burnedCalories}/${data.time}</span>
//           </p>
//         </li>
//         <li class="favourites_list_item_bottom_list_item">
//           <p class="favourites_list_item_bottom_list_item_text">
//             Body part: <span>${cutString(data.bodyPart, 5)}</span>
//           </p>
//         </li>
//         <li class="favourites_list_item_bottom_list_item">
//           <p class="favourites_list_item_bottom_list_item_text">Target: <span>${cutString(
//             data.target,
//             7
//           )}</span></p>
//         </li>
//       </ul>
//     </div>
//   </li>
//     `;
// };

// const renderList = async () => {
//   listEl.innerHTML = '';
//   const listFavoriteStorage = setFavoriteArr();
//   if (listFavoriteStorage.length !== 0) {
//     listFavoriteStorage.forEach(async id => {
//       const data = await getInfoCard(id);
//       renderCard(data);

//       const btnsStart = document.querySelectorAll('.favourites_btn_start');
//       btnsStart.forEach(btn => {
//         btn.addEventListener('click', async () => {
//           const info = await getInfoCard(btn.getAttribute('data-id'));
//           modal.open(getExerciseModal(info));
//         });
//       });
//       const btnsDelete = document.querySelectorAll('#btnTrash');
//       btnsDelete.forEach(btn => {
//         btn.addEventListener('click', () => {
//           deleteFavoriteItem(btn.getAttribute('data-id'));
//           renderList();
//         });
//       });
//     });
//   } else {
//     listEl.innerHTML = `
//         <p class="favourites_list_empty">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
//     `
//   }

// };
// if (listEl) {
//   renderList();
// }

// ============================================


