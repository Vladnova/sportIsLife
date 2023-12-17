import fetchSportEnergy from './api/apiSport';
import { message } from './toasts/message';
// import { loader } from './loader/loader';
import * as pagination from './pagination/pagination';
import { capitalizeFirstLetter } from './utils/firstLater';
const categoryList = document.querySelector('.wrap-button');

const musclesList = document.querySelector('.muscles-list');
const paginationNumbers = document.querySelector('.pagination-numbers');

const exercisesTag = document.querySelector('.title-exercises');
categoryList.addEventListener('click', handleCategoryClick);

document.addEventListener('DOMContentLoaded', () => {
  loadSectionOnClick({ filter: 'Muscles', page: 1, limit: 12 }, 'Muscles');
});

export async function handleCategoryClick(event) {
  event.preventDefault();
  exercisesTag.innerHTML = 'Exercises';
  const { target, currentTarget } = event;

  if (target.nodeName !== 'BUTTON') return;
  const categoryName = target.dataset.name;
  if (target.classList.contains('btn-filter')) {
    const categoryItem = [...currentTarget.children];
    categoryItem.forEach(item => {
      item.firstElementChild.classList.remove('btn-filter-active');
    });
  }
  // Добавление класса 'active' к текущему пункту меню
  target.classList.add('btn-filter-active');

  const dataFilter = {
    filter: categoryName,
    page: 1,
    limit: 12,
  };
  musclesList.innerHTML = '';
  loadSectionOnClick(dataFilter);
}

export async function loadSectionOnClick(dataFilter) {
  // loader.open()
  document.querySelector('.filter-list-js').classList.remove('exercises_list');
  document.querySelector('.form-js').classList.add('hidden-form');
  try {
    const filter = await fetchSportEnergy.getByFilterName(dataFilter);
    const filteredResult = filter.results;

    if (!filter || filteredResult.length === 0) {
      message.error("Sorry, we didn't find anything according to your request.");
      return;
    }
    musclesList.insertAdjacentHTML('beforeend', makeMarkupMuscles(filteredResult))
    makeMarkupMuscles(filteredResult);

    // Збереження в LocalStorage інформації для пагінації сторінки
    const { totalPages } = filter;
    const data = JSON.stringify({ totalPages, categoryName: dataFilter.filter });
    localStorage.setItem('infoRequest', data);
    document.querySelector('.filter-list-js').classList.add('muscles-list');
    paginationNumbers.innerHTML = '';
    pagination.getPaginationNumbers(totalPages,  dataFilter);

    pagination.setCurrentPage(1);
  } catch (error) {
    console.log(error.message);
  }
  // loader.close()
}

export function makeMarkupMuscles(filteredResult) {
  const markup = filteredResult
    .map(({ filter, name, imgURL }) => {
      let filterCurrent = filter.toLocaleLowerCase().replaceAll(' ', '');
      if (filterCurrent === 'bodyparts') {
        filterCurrent = 'bodypart';
      }
      return `
      <li class="muscles-item" data-name=${name} data-filter=${filterCurrent}>
      <a href="" class="muscles-link" data-alt="${name}">
        <img loading="lazy" class="muscles-image" src="${imgURL}" alt="${name}" >
        <div class="muscles-box-menu">
          <h3 class="muscles-small-title">${capitalizeFirstLetter(name)}</h3>
          <p class="muscles-text">${filter}</p>
        </div>
      </a>
    </li>
    `;
    })
    .join('');
    return markup;
}
