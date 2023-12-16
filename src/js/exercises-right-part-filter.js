import { myModal } from './modal-window/modal'
import { getExerciseModal, getRatingModal } from './modal-window/generation-to-modal'
import { createInteractiveRaiting } from '../js/raiting'
import fetchSportEnergy from '../js/api/apiSport'
import { setButtonFavorite, setFavoriteArr } from './utils/favorite'

const listExercises = document.querySelector('.filter-list-js');
let id="";
let data;
let addRaitingButton;
let addFavoriteButton;
let sendRaitingForm;
let sendRaitingButton;


async function sendRaitingHandler(event) {
    event.preventDefault();
    const exerciseID = document.querySelector('.modal-get-raiting').dataset.id
    const ratingContainer = document.querySelector('.rating-container-js');
    const ratinFromUser = ratingContainer.dataset.rating
    const email = document.querySelector('.raiting-form-field-input').value
    const review = document.querySelector('.raiting-form-field-comment').value
    const request = {
        rate: Number(ratinFromUser),
        email,
        review,
    }
    const response = await fetchSportEnergy.addExercisesRate(exerciseID, request)
    console.log(response) // Додати нотифікацію
}

async function getRaitingHandler() {
    const exerciseID = document.querySelector('.modal-info').dataset.id
    myModal.close()
    myModal.open(getRatingModal(exerciseID))
    createInteractiveRaiting()
    sendRaitingForm = document.querySelector('.raiting-form')
    sendRaitingForm.addEventListener('submit', sendRaitingHandler)
}

const toggleFavoritesList = (status) => { 
    console.log(status)
    console.log(id)
    let favoriteList = setFavoriteArr()
    if (status === 'true') { 
        favoriteList = [
            ...favoriteList,
            id
        ]
    } else { 
        favoriteList = favoriteList.filter(item => item !== id)
    }
    localStorage.setItem('favorites', JSON.stringify(favoriteList))
}
function addFavoriteHandler() {
    const favoriteButton = document.querySelector('.refresh-button-js')
    const getRatingButton = document.querySelector('.add-rating')
    if (favoriteButton.dataset.favorite === 'false') {
        favoriteButton.innerHTML = setButtonFavorite('false')
        favoriteButton.dataset.favorite = 'true'
        getRatingButton.style.fontSize = '15px'
    } else {
        favoriteButton.innerHTML = setButtonFavorite('true')
        favoriteButton.dataset.favorite = 'false'
        getRatingButton.style.fontSize = '16px'
    }
    console.log(favoriteButton.dataset.favorite);
    toggleFavoritesList(favoriteButton.dataset.favorite)
}

function getStartHandler({ target }) {
    if (target.nodeName !== "BUTTON") {
        return;
    }
    
    if (target.nodeName === "BUTTON"){
        id= target.dataset.id
        return data = oneCard(id);
    }

    if (ifStartButton(target)) {
        myModal.open(getExerciseModal(data))
    }
}

listExercises.addEventListener("click", getStartHandler)

export const oneCard = async(id)=>{
    let data = await fetchSportEnergy.getOneExercises(id)
    data.favotite = false;
    myModal.open(getExerciseModal(data))
    addFavoriteButton = document.querySelector('.refresh-button-js')
    addRaitingButton = document.querySelector('.add-rating');
    addRaitingButton.addEventListener('click', getRaitingHandler)
    addFavoriteButton.addEventListener('click', addFavoriteHandler)
}