
// import {loadSectionOnClick} from './muscles';

// const categoryList = document.querySelector('.wrap-button');

// const musclesList = document.querySelector('.muscles-list');

// const musclesBtn = document.querySelector('#Muscles');

// categoryList.addEventListener('click', handleCategoryClick);

// export async function handleCategoryClick(event) {
//     event.preventDefault();
//     const target = event.target;
//     const categoryName = target.textContent;
  
//     // Видалення класу btn-filter-active з musclesBtn
//     musclesBtn.classList.remove('btn-filter-active');
  
//     if (target.classList.contains('btn-filter')) {
//       const categoryItem = document.querySelectorAll('.wrap-list-btn');
//       categoryItem.forEach(item => {
//         item.classList.remove('btn-filter-active');
//       });
//     }
  
//     // Добавление класса 'active' к текущему пункту меню
//     target.parentNode.classList.add('btn-filter-active');
  
//     const dataFilter = {
//       filter: categoryName,
//       page: 1,
//       limit: 12,
//     };
//     musclesList.innerHTML = '';
//     loadSectionOnClick(dataFilter);
//   }