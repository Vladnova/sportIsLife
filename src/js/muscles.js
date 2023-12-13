import fetchSportEnergy from './api/apiSport';

import { getDataExercises } from './exercises';

const categoryList = document.querySelector('.wrap-button');


categoryList.addEventListener('click', handleCategoryClick);

export async function handleCategoryClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  event.preventDefault();
  const target = event.target;
  const categoryName = target.textContent;

    // if(target.classList.contains('btn-filter')){
    //     const categoryName = target.textContent;
    //     console.log(categoryName);
    //     const categoryItem = document.querySelectorAll('wrap-list-btn');
    //     categoryItem.forEach(item => {
    //         item.classList.remove('btn-filter-active')
    //     })
    // }
    // // Добавление класса 'active' к текущему пункту меню
    // target.parentNode.classList.add('btn-filter-active');

  if (categoryName === 'Body parts') {
    musclesList.innerHTML = '';
    getDataExercises();
  } else {
    musclesList.innerHTML = '';
    loadSectionOnClick(categoryName);
  }
}
//======================================================
const musclesList = document.querySelector('.muscles-list');

window.addEventListener('DOMContentLoaded', loadSectionOnClick);

async function loadSectionOnClick(categoryName) {
  try {
    const filter = await fetchSportEnergy.getByFilterName(categoryName);
    console.log('filter-->', filter);

    const filteredResult = filter.results;

    if (filter.length === 0 || filter === undefined) {
      console.log("Sorry, we didn't find anything according to your request.");
      return;
    }
    musclesList.insertAdjacentHTML('beforeend', makeMarkupMuscles(filteredResult));
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
