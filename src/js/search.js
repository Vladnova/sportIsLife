import { makeMarkupCards } from './exercises';
import fetchSportEnergy from './api/apiSport';
import * as pagination from './pagination/pagination';

const form = document.querySelector('.form-js');
const paginationNumbers = document.querySelector('.pagination-numbers');
form.addEventListener('submit', handlerSearch);

async function handlerSearch(e) {
  e.preventDefault();
  const value = e.target.elements.search.value.trim();
  if (!value) return;
  const { categoryName } = JSON.parse(localStorage.getItem('infoRequest'));
  const transformCategoryName = categoryName.toLocaleLowerCase().replaceAll(' ', '');
  const dataExercises = {
    [transformCategoryName]: value,
    page: 1,
    limit: 10,
  };
try {
  const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);
  paginationNumbers.innerHTML = '';
  const {totalPages} = exercises
  pagination.getPaginationNumbers(totalPages, dataExercises);


  pagination.setCurrentPage(1);
  form.reset();
  makeMarkupCards(exercises);
} catch (err) {

}

}
