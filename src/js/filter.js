import fetchSportEnergy from './api/apiSport';
import * as pagination from './pagination/pagination';
const categoryList = document.querySelector('.wrap-button');

const musclesList = document.querySelector('.muscles-list');
const paginationNumbers = document.querySelector('.pagination-numbers');

categoryList.addEventListener('click', handleCategoryClick);

document.addEventListener('DOMContentLoaded', () => {
  loadSectionOnClick({ filter: 'Muscles', page: 1, limit: 12 }, 'Muscles');
});

export async function handleCategoryClick(event) {
  event.preventDefault();
  const { target, currentTarget } = event;

  if (target.nodeName !== 'BUTTON') return;
  const categoryName = target.dataset.name;
console.log(target.classList)
  if (target.classList.contains('btn-filter')) {
    const categoryItem = [...currentTarget.children];
    categoryItem.forEach(item => {
      item.firstElementChild.classList.remove('btn-filter-active');
    });
  }
  // Добавление класса 'active' к текущему пункту меню
  target.classList.add('btn-filter-active');
console.log(`------>${categoryName}`)
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
    document.querySelector('.filter-list-js').classList.remove("exercises_list")
    document.querySelector(".form-js").classList.add("hidden-form")
  try {
    const filter = await fetchSportEnergy.getByFilterName(dataFilter);
    const filteredResult = filter.results;
    
    if (!filter || filteredResult.length === 0) {
      console.log("Sorry, we didn't find anything according to your request.");
      return;
    }
    
    musclesList.insertAdjacentHTML('beforeend', makeMarkupMuscles(filteredResult));
    
    // Збереження в LocalStorage інформації для пагінації сторінки
    const { totalPages } = filter;
    const data = JSON.stringify({ totalPages, categoryName: dataFilter.filter });
    localStorage.setItem('infoRequest', data);
    document.querySelector('.filter-list-js').classList.add("muscles-list");
    paginationNumbers.innerHTML = '';
    pagination.getPaginationNumbers();
    
    pagination.setCurrentPage(1);
  } catch (error) {
    console.log(error.message);
  }
}


export function makeMarkupMuscles(filteredResult) {
  const markup = filteredResult
    .map(({ filter, name, imgURL }) => {
     console.log(name)
      let filterCurrent = filter.toLocaleLowerCase()
      .replaceAll(' ', '');
    // let liName=name.toLocaleLowerCase().replaceAll(' ', '_')
    // let kyky= "ky ke"
if(name.includes(" ")){

  console.log(" -----> я куку")
}

      if (filterCurrent==="bodyparts"){
        filterCurrent="bodypart"
        }
      return `
        <li class="muscles-item"  alt=${name} data-filter=${filterCurrent}>
        <a href="" class="muscles-link" data-alt="${name}">
        <img class="muscles-image" src="${imgURL}" alt="${name}"  >
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
