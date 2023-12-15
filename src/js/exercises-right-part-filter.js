import { Modal } from './modal-window/modal'
import { getExerciseModal, getRatingModal } from './modal-window/generation-to-modal'

const myModal = new Modal()

const startButtons = document.querySelector('.exercises_list')
let addRaitingButton;
let addFavoriteButton;
let sendRaitingForm;
let sendRaitingButton;

startButtons.addEventListener('click', getStartHandler)

function ifStartButton(element) {
    return element.classList.contains('exercises_btn_start') || element.classList.contains('exercises_btn_start_text') || element.classList.contains('exercises_btn_start_icon')
}

// Замінити на запит з бека
const data = {
  "_id": "64f389465ae26083f39b17c2",
  "bodyPart": "back",
  "equipment": "barbell",
  "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0037.gif",
  "name": "barbell decline wide-grip pullover",
  "target": "lats",
  "description": "These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
  "rating": 3,
  "burnedCalories": 307,
  "time": 3,
  "popularity": 7416
}

function sendRaitingHandler(event) {
    event.preventDefault();
    sendRaitingButton = document.querySelector('.raiting-form-submit')
    const exerciseID = sendRaitingButton.dataset.id // Відправь цей id на бек https://your-energy.b.goit.study/api/exercises/ {exerciseID} /rating
    console.log('Add send raiting logic');
    console.log('exerciseID example =>', exerciseID);
}

function getRaitingHandler() {
    myModal.close()
    myModal.open(getRatingModal(data._id))
    sendRaitingForm = document.querySelector('.raiting-form')
    sendRaitingForm.addEventListener('submit', sendRaitingHandler)
}

function addFavoriteHandler() {
    console.log('Add favorite logic');
}

function getStartHandler({ target }) {

    if (ifStartButton(target)) {
        myModal.open(getExerciseModal(data))
        addFavoriteButton = document.querySelector('.add-favorite')
        addRaitingButton = document.querySelector('.add-rating');
        addRaitingButton.addEventListener('click', getRaitingHandler)
        addFavoriteButton.addEventListener('click', addFavoriteHandler)
    }

}