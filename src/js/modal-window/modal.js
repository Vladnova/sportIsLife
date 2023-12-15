import { getExerciseModal, getRatingModal } from './generation-to-modal'
import fetchSportEnergy from '../api/apiSport.js';
import { loader } from '../loader/loader';
export class Modal {
  constructor() {
    this.overlay = document.querySelector('.overlay');
    this.modal = document.querySelector('.modal-info');
    this.closeButton;
    
    this.closeButtonHandler = () => this.close();
    this.escapeKeyHandler = (event) => this.closeEsc(event);
    this.overlayClickHandler = (event) => this.closeBack(event);
    }
    
  open(content) {
    this.overlay.innerHTML = content;
    this.overlay.style.zIndex = 1;
    this.overlay.style.display = 'flex';
    this.modal.classList.remove("visually-hidden");
    this.closeButton = document.querySelector('.modal-button-close');

    document.body.classList.add('no-scroll')
    this.closeButton.addEventListener('click', this.closeButtonHandler);
    document.addEventListener('keydown', this.escapeKeyHandler);
    this.overlay.addEventListener('click', this.overlayClickHandler);
  }

  close() {
    this.modal = document.querySelector('.modal-info') || document.querySelector('.modal-get-raiting');
    this.overlay.style.display = 'none';
    this.overlay.style.zIndex = -1;
    this.modal.classList.add("visually-hidden");
    
    document.body.classList.remove('no-scroll')
    this.closeButton.removeEventListener('click', this.closeButtonHandler);
    document.removeEventListener('keydown', this.escapeKeyHandler);
    this.overlay.removeEventListener('click', this.overlayClickHandler);
  }

  closeEsc(event) {
    if (event.key === 'Escape') {
        this.close();
    }
  }

  closeBack(event) {
    if (event.target === this.overlay) {
        this.close()
    }
  }
}

const myModal = new Modal();

// Приклад дати з бекенду
// const data = {
//   "_id": "64f389465ae26083f39b17c2",
//   "bodyPart": "back",
//   "equipment": "barbell",
//   "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0037.gif",
//   "name": "barbell decline wide-grip pullover",
//   "target": "lats",
//   "description": "These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
//   "rating": 3,
//   "burnedCalories": 307,
//   "time": 3,
//   "popularity": 7416
// }

const list = document.querySelector('.filter-list-js');
let id="";
let data;

export const getId = async (e) =>{
  const {target} = e;
  
  if (target.nodeName !== "BUTTON") {
    return;
  }
  if (target.nodeName === "BUTTON"){
    id= target.dataset.id
     return data = oneCard(id);
  }
}

list.addEventListener("click", getId)

export const oneCard = async(id)=>{
  // loader.open()
  // console.log("1")
  let data = await fetchSportEnergy.getOneExercises(id)
  
  data.favotite = false;
  myModal.open(getExerciseModal(data))
}



// Приклад модалки форми рейтингу
// function modalHandler(event) {
//     myModal.open(getRatingModal(data._id))
// }

