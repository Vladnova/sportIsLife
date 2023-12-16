import { myModal } from './modal-window/modal';
import { getExerciseModal, getRatingModal } from './modal-window/generation-to-modal';
import { createInteractiveRaiting } from '../js/raiting';
import fetchSportEnergy from '../js/api/apiSport';
import { addLocalFavorites, deleteLocalFavorites } from './utils/localStor';
import { message } from './toasts/message';
import sprite from '../img/svg/sprite.svg';


const listExercises = document.querySelector('.filter-list-js');
let id = '';
let data;
let addRaitingButton;
let addFavoriteButton;
let sendRaitingForm;
let sendRaitingButton;

async function sendRaitingHandler(event) {
  event.preventDefault();
  const exerciseID = document.querySelector('.modal-get-raiting').dataset.id;
  const ratingContainer = document.querySelector('.rating-container-js');
  const ratinFromUser = ratingContainer.dataset.rating;
  const email = document.querySelector('.raiting-form-field-input').value;
  const review = document.querySelector('.raiting-form-field-comment').value;
  const request = {
    rate: Number(ratinFromUser),
    email,
    review,
  };
  const response = await fetchSportEnergy.addExercisesRate(exerciseID, request);
  if (response.message) {
    message.error(`${response.message}`);
  } else {
    message.success(`Thank you for your mark - ${request.rate} for ${response.name}`);
    myModal.close();
  }
}

async function getRaitingHandler() {
  const exerciseID = document.querySelector('.modal-info').dataset.id;
  myModal.close();
  myModal.open(getRatingModal(exerciseID));
  createInteractiveRaiting();
  sendRaitingForm = document.querySelector('.raiting-form');
  sendRaitingForm.addEventListener('submit', sendRaitingHandler);
}

async function addFavoriteHandler(e) {
  const favoriteButton = document.querySelector('.refresh-button-js');
  const cardId = document.querySelector('.modal-info').dataset.id;
  if (favoriteButton.dataset.favorite === 'false') {
    favoriteButton.innerHTML = `<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${sprite}#icon-trash"></use>
                                        </svg>
                                    </button>`;
    favoriteButton.dataset.favorite = 'true';
    let data = await fetchSportEnergy.getOneExercises(cardId);
    addLocalFavorites(data);
  } else {
    favoriteButton.innerHTML = `<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${sprite}#icon-heart"></use>
                                        </svg>
                                    </button>`;
    favoriteButton.dataset.favorite = 'false';

    deleteLocalFavorites(cardId);
  }
}

function getStartHandler({ target }) {
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  if (target.nodeName === 'BUTTON') {
    id = target.dataset.id;
    return (data = oneCard(id));
  }

  if (ifStartButton(target)) {
    myModal.open(getExerciseModal(data));
  }
}

listExercises.addEventListener('click', getStartHandler);

export const oneCard = async id => {
  let data = await fetchSportEnergy.getOneExercises(id);
  const favoriteData = localStorage.getItem('favorites');
  if (favoriteData !== null) {
    const favoriteObject = JSON.parse(favoriteData);
    const objectLocal = favoriteObject.find(({ _id }) => _id === id);
    if (objectLocal) {
      data.favorite = true;
    } else {
      data.favorite = false;
    }
  } else {
    data.favorite = false;
  }
  myModal.open(getExerciseModal(data));
  addFavoriteButton = document.querySelector('.refresh-button-js');
  addRaitingButton = document.querySelector('.add-rating');
  addRaitingButton.addEventListener('click', getRaitingHandler);
  addFavoriteButton.addEventListener('click', addFavoriteHandler);
};
