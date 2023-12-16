import fetchSportEnergy from '../api/apiSport';
import * as filterBtn from '../filter';

const paginationNumbers = document.querySelector('.pagination-numbers');
const musclesList = document.querySelector('.muscles-list');

// ============= Стрілки пагінації ================
// const nextButton = document.getElementById('next-button');
// const prevButton = document.getElementById('prev-button');

// let pageCount = 5; // зараз є наявним для стлілок пагінації - Андрій глянь на основі того, що вирішить команда стосовно стрілок
let currentPage = 1; //

try {
  paginationNumbers.addEventListener('click', handleClick);
  paginationNumbers.addEventListener('click', handlePageNumberClick);
} catch (error) {
  console.log(error);
}

// ============= Стрілки пагінації ================
// prevButton.addEventListener('click', () => {
//   setCurrentPage(currentPage - 1);
// });

// nextButton.addEventListener('click', () => {
//   setCurrentPage(currentPage + 1);
// });

async function handleClick(e) {
  const { totalPages, categoryName } = JSON.parse(localStorage.getItem('infoRequest'));
  const dataFilter = {
    filter: categoryName,
    page: e.target.textContent,
    limit: 12,
    totalPages,
  };

  if (dataFilter.page === currentPage) {
    return;
  }

  const filter = await fetchSportEnergy.getByFilterName(dataFilter);
  const filteredResult = filter.results;
  musclesList.innerHTML = filterBtn.makeMarkupMuscles(filteredResult);
  currentPage = dataFilter.page;
  handlePageNumberClick();
}

const appendPageNumber = index => {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);
  paginationNumbers.appendChild(pageNumber);
};

export function getPaginationNumbers() {
  const { totalPages } = JSON.parse(localStorage.getItem('infoRequest'));
  if (totalPages === 1) return;
  for (let i = 1; i <= totalPages; i++) {
    appendPageNumber(i);
  }
}

function handlePageNumberClick() {
  // setCurrentPage(page);
  // ============= Стрілки пагінації ================
  // prevButton.addEventListener('click', () => {
  //   setCurrentPage(currentPage - 1);
  // });
  // nextButton.addEventListener('click', () => {
  //   setCurrentPage(currentPage + 1);
  // });

  document.querySelectorAll('.pagination-number').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex) {
      button.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      });
    }
  });
}

export function setCurrentPage(pageNum) {
  currentPage = pageNum;

  handlePageNumberClick();

  document.querySelectorAll('.pagination-number').forEach(button => {
    button.classList.remove('active');

    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex == currentPage) {
      button.classList.add('active');
    }
  });

  // ============= Стрілки пагінації ================
  // const prevRange = (pageNum - 1) * pageCount;
  // const currRange = pageNum * pageCount;
}

// export function handleActivePageNumber() {}

// ============= Стрілки пагінації ================

// const disableButton = button => {
//   button.classList.add('disabled');
//   button.setAttribute('disabled', true);
// };
// const enableButton = button => {
//   if (!button) return;
//   button.classList.remove('disabled');
//   button.removeAttribute('disabled');
// };

// function handlePageButtonsStatus() {
// if (currentPage === 1) {
//   disableButton(prevButton);
// } else {
//   enableButton(prevButton);
// }
// if (pageCount === currentPage) {
//   disableButton(nextButton);
// } else {
//   enableButton(nextButton);
// }
// }
