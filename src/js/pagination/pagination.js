import fetchSportEnergy from '../api/apiSport';
import * as muscles from '../muscles';

const paginationNumbers = document.querySelector('.pagination-numbers');
const musclesList = document.querySelector('.muscles-list');

const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let pageCount = 5; // потрібно підтягувати з dataFilter.Total pages
let currentPage = 1; //

try {
  paginationNumbers.addEventListener('click', handleClick);
  paginationNumbers.addEventListener('click', handleActivePageNumber);
} catch (error) {
  console.log(error);
}

// prevButton.addEventListener('click', () => {
//   setCurrentPage(currentPage - 1);
// });

// nextButton.addEventListener('click', () => {
//   setCurrentPage(currentPage + 1);
// });

async function handleClick(e) {
  const dataFilter = {
    bodypart: 'Muscles', // потрібно підтягнути з актуальної сторінки/фільтру
    page: e.target.textContent,
    limit: 12,
    totalPages: 5, // потрібно підтягнути з початкового рендеру
  };

  const filter = await fetchSportEnergy.getByFilterName(dataFilter);
  const filteredResult = filter.results;
  musclesList.innerHTML = muscles.makeMarkupMuscles(filteredResult);
  currentPage = dataFilter.page;
  handlePageNumberClick(currentPage);
  console.log('filter-->', filter);
}

const appendPageNumber = index => {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);
  paginationNumbers.appendChild(pageNumber);
};

export function getPaginationNumbers(pages) {
  for (let i = 1; i <= pages; i++) {
    appendPageNumber(i);
  }
}

function handlePageNumberClick(page) {
  setCurrentPage(page);
  prevButton.addEventListener('click', () => {
    setCurrentPage(currentPage - 1);
  });
  nextButton.addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
  });
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
  handleActivePageNumber();

  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * pageCount;
  const currRange = pageNum * pageCount;
}

export function handleActivePageNumber() {
  document.querySelectorAll('.pagination-number').forEach(button => {
    button.classList.remove('active');

    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex == currentPage) {
      button.classList.add('active');
    }
  });
}

const disableButton = button => {
  button.classList.add('disabled');
  button.setAttribute('disabled', true);
};
const enableButton = button => {
  button.classList.remove('disabled');
  button.removeAttribute('disabled');
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};
