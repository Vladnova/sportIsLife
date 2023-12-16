import fetchSportEnergy from './api/apiSport';
import { message } from './toasts/message';

const form = document.querySelector('#subscribe-form');
const input = form.querySelector('#email');

form.addEventListener('submit', handlerSendEmail);

async function handlerSendEmail(event) {
  event.preventDefault();

  const { value } = input;
  const PATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  PATTERN.test(value);

  if (!PATTERN.test(value)) {
    message.info("Enter the following sample email - 'test@gmail.com'");
    input.value = '';
    return;
  }

  try {
    const result = await fetchSportEnergy.addSubscription({ email: value });
    message.success(result.message);
  } catch (error) {
    console.log(error);
  } finally {
    input.value = '';
  }

}
