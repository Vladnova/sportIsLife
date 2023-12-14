import fetchSportEnergy from './api/apiSport';


const list = document.querySelector('.filter-list-js');


list.addEventListener('click', handlerClickFilterItem);


async function handlerClickFilterItem(e) {
  e.preventDefault()
  const {target} = e

  if(target.nodeName !== 'IMG') return;

  const nameFilter = target.dataset.filter;


  const dataExercises = {
  [nameFilter]: target.alt,
    keyword: 'pull',
    page: 1,
    limit: 10,
  };
  console.log(dataExercises)

  const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);
  console.log(exercises)
}