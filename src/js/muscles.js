import fetchSportEnergy from './api/apiSport';
import * as pagination from './pagination/pagination';
const categoryList = document.querySelector('.wrap-button');

const musclesList = document.querySelector('.muscles-list');
const paginationNumbers = document.querySelector('.pagination-numbers');

// const musclesBtn = document.querySelector('#Muscles');

// const bodyParts = document.querySelector('#Body parts');

// const Equipment = document.querySelector('#Equipment');

categoryList.addEventListener('click', handleCategoryClick);


document.addEventListener('DOMContentLoaded', () => {
  loadSectionOnClick({ filter: 'Muscles', page: 1, limit: 12 }, 'Muscles');


});


export async function handleCategoryClick(event) {
  event.preventDefault();
  const {target, currentTarget} = event;

  if(target.nodeName!=='BUTTON') return;
  const categoryName = target.dataset.name;

  if (target.classList.contains('btn-filter')) {
    const categoryItem =[...currentTarget.children];
    categoryItem.forEach(item => {
      item.firstElementChild.classList.remove('btn-filter-active');
    });
  }

  // if (target.classList.contains('btn-filter')) {
  //   const categoryItem = document.querySelectorAll('.wrap-list-btn');
  //   categoryItem.forEach(item => {
  //     item.classList.remove('btn-filter-active');
  //   });
  // }

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

//======================================================

export async function loadSectionOnClick(dataFilter) {
  console.log(dataFilter)
  try {
    const filter = await fetchSportEnergy.getByFilterName(dataFilter);
    const filteredResult = filter.results;

    if (!filter || filteredResult.length === 0) {
      console.log("Sorry, we didn't find anything according to your request.");
      return;
    }
    musclesList.insertAdjacentHTML('beforeend', makeMarkupMuscles(filteredResult));



    // Збереження в LocalStorage інформації для пагінації сторінки
    const {totalPages} = filter;
    const data = JSON.stringify({totalPages, categoryName:dataFilter.filter});
    localStorage.setItem('infoRequest', data);
    paginationNumbers.innerHTML = '';
    pagination.getPaginationNumbers();
    pagination.setCurrentPage(1);


    // Перевірка категорії та додавання класу btn-filter-active
    // if (dataFilter.filter === 'Muscles') {
    //   musclesBtn.classList.add('btn-filter-active');
    // } else if (dataFilter.filter === 'Body parts') {
    //   musclesBtn.classList.remove('btn-filter-active');
    //   bodyParts.classList.add('btn-filter-active');
    // } else if (dataFilter.filter === 'Equipment') {
    //   bodyParts.classList.remove('btn-filter-active');
    //   Equipment.classList.add('btn-filter-active');
    // }
  } catch (error) {
    console.log(error.message);
  }
}




export function makeMarkupMuscles(filteredResult) {
  const markup = filteredResult
    .map(({filter, name, imgURL }) => {
      return `
        <li class="muscles-item">
        <a href="" class="muscles-link">
        <img class="muscles-image" src="${imgURL}" alt="${name}" data-filter=${filter.toLocaleLowerCase().replaceAll(' ', '')}>
          <!-- box-menu -->
          <div class="muscles-box-menu">
             <h3 class="muscles-small-title">${filter}</h3>
             <p class="muscles-text">${name}</p>
              </div>
            </a>
           </li>
          `;
    })
    .join('');
  return markup;
}
