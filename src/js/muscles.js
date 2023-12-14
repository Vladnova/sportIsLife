import fetchSportEnergy from './api/apiSport';

import { handleCategoryClick } from './search';

const musclesList = document.querySelector('.muscles-list');

const musclesBtn = document.querySelector('#Muscles');

const bodyParts = document.querySelector('#Body parts');

const Equipment = document.querySelector('#Equipment');

// categoryList.addEventListener('click', handleCategoryClick);

handleCategoryClick();

document.addEventListener('DOMContentLoaded', () => {
  loadSectionOnClick({ filter: 'Muscles', page: 1, limit: 12 }, 'Muscles');
});

// export async function handleCategoryClick(event) {
//   event.preventDefault();
//   const target = event.target;
//   const categoryName = target.textContent;

//   // Видалення класу btn-filter-active з musclesBtn
//   musclesBtn.classList.remove('btn-filter-active');

//   if (target.classList.contains('btn-filter')) {
//     const categoryItem = document.querySelectorAll('.wrap-list-btn');
//     categoryItem.forEach(item => {
//       item.classList.remove('btn-filter-active');
//     });
//   }

//   // Добавление класса 'active' к текущему пункту меню
//   target.parentNode.classList.add('btn-filter-active');

//   const dataFilter = {
//     filter: categoryName,
//     page: 1,
//     limit: 12,
//   };
//   musclesList.innerHTML = '';
//   loadSectionOnClick(dataFilter, categoryName);
// }

//======================================================

export async function loadSectionOnClick(dataFilter) {
  try {
    const filter = await fetchSportEnergy.getByFilterName(dataFilter);
    console.log('filter-->', filter);

    const filteredResult = filter.results;

    if (!filter || filteredResult.length === 0) {
      console.log("Sorry, we didn't find anything according to your request.");
      return;
    }
    musclesList.insertAdjacentHTML('beforeend', makeMarkupMuscles(filteredResult));

    // Перевірка категорії та додавання класу btn-filter-active
    if (dataFilter.filter === 'Muscles') {
      musclesBtn.classList.add('btn-filter-active');
    } else if (dataFilter.filter === 'Body parts') {
      musclesBtn.classList.remove('btn-filter-active');
      bodyParts.classList.add('btn-filter-active');
    } else if (dataFilter.filter === 'Equipment') {
      bodyParts.classList.remove('btn-filter-active');
      Equipment.classList.add('btn-filter-active');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export function makeMarkupMuscles(filteredResult) {
  const markup = filteredResult
    .map(({ _id, filter, name, imgURL }) => {
      return `
        <li class="muscles-item" id="${_id}">
        <a href="" class="muscles-link" id="${_id}">
        <img class="muscles-image" src="${imgURL}" alt="${name}" id="${_id}">
          <!-- box-menu -->
          <div class="muscles-box-menu">
             <h3 class="muscles-small-title" id="${_id}">${filter}</h3>
             <p class="muscles-text" id="${_id}">${name}</p>
              </div>
           <!-- box-menu -->
            </a>
           </li>
          `;
    })
    .join('');
  return markup;
}
