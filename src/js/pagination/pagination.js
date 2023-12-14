import fetchSportEnergy from '../api/apiSport';

const refs = {
  pagesList: document.querySelector('.js-pagination'),
};

try {
  refs.pagesList.addEventListener('click', handleClick);
} catch (error) {
  console.log(error);
}

async function handleClick(e) {
  const dataFilter = {
    bodypart: 'Muscles',
    page: e.target.textContent,
    limit: 12,
  };

  const filter = await fetchSportEnergy.getByFilterName(dataFilter);
  console.log('filter-->', filter);
}
