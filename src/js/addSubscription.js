import fetchSportEnergy from './api/apiSport';

const form = document.querySelector('#subscribe-form');
const input = form.querySelector('#email');

export const addSubscription = event => {
  event.preventDefault();

  const { value } = input;
  fetchSportEnergy.addSubscription({ email: value }).then(() => {
    input.value = '';
  });
};

form.addEventListener('submit', addSubscription);
