import fetchSportEnergy from './api/apiSport';
import { message } from './toasts/message';

const form = document.querySelector('#subscribe-form');
const input = form.querySelector('#email');

export const sendEmail = event => {
  event.preventDefault();

  const { value } = input;
  fetchSportEnergy
    .addSubscription({ email: value })
    .then(() => {
      message.success('Your email has been added to subscriptions!');
      input.value = '';
    })
    .catch(err => {
      message.error('Opps. Somethig wrong');
      throw err;
    });
};

form.addEventListener('submit', sendEmail);
