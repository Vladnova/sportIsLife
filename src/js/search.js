import { makeMarkupCards } from './exercises-2';
import fetchSportEnergy from './api/apiSport';

const form = document.querySelector('.form-js');

form.addEventListener('submit', handlerSearch);

async function handlerSearch(e) {
  e.preventDefault();
  const value = e.target.elements.search.value.trim();
  if (!value) return;
  const { categoryName } = JSON.parse(localStorage.getItem('infoRequest'));
  const transformCategoryName = categoryName.toLocaleLowerCase().replaceAll(' ', '');
  const dataExercises = {
    [transformCategoryName]: value,
    keyword: 'pull',
    page: 1,
    limit: 10,
  };

  const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);
  form.reset();

  makeMarkupCards(exercises);
}

console.log('test')