import fetchSportEnergy from './api/apiSport';
import { loader } from './loader/loader';
import sprite from '../img/svg/sprite.svg';

const list = document.querySelector('.filter-list-js');

list.addEventListener('click', handlerClickFilterCards);

async function handlerClickFilterCards(e) {
  e.preventDefault();
  const { target } = e;
  if ((target.nodeName !== 'IMG') & (target.nodeName !== 'P') & (target.nodeName !== 'H3')) {
    return;
  }
  // loader.open()
  document.querySelector('.form-js').classList.remove('hidden-form');

  let nameFilter;
  let nameCard;
  try {
    if (target.nodeName === 'IMG') {
      nameFilter = target.parentNode.parentNode.dataset.filter;
      nameCard = target.alt;
    }
    if (target.nodeName === 'P' || target.nodeName === 'H3') {
      nameFilter = target.parentNode.parentNode.parentNode.dataset.filter;
      nameCard = target.parentNode.parentNode.dataset.alt;
    }
    const dataExercises = {
      [nameFilter]: [nameCard],
      page: 1,
      limit: 10,
    };

    const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);

    if (exercises?.results.length) {
      list.classList.add('exercises_list');
      list.classList.remove('muscles-list');

      makeMarkupCards(exercises);
    } else {
      alert('Oops. please, try other category this list empty :)');
    }
  } catch (er) {
    console.log(er.message);
  }
  // loader.close()
}

export function makeMarkupCards(exercises) {
  if (exercises.results.length) {
    const markup = exercises.results
      .map(({ _id, target, rating, name, burnedCalories, time }) => {
        return `
      <li class="exercises_list_item" id=${_id}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${
            target.toString().length > 8 ? target.slice(0, 8) + '...' : target
          }</div>
          <p class="exercises_rating">${rating.toFixed(1)}</p>
          <div class="rating-container">
            <span class="star selected">&#9733;</span>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${_id}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_start_icon" width="56px" height="18px" data-id=${_id}>
              <use xlink:href="${sprite}#icon-arrow" data-id=${_id}></use>
              /> 
            </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24px" height="24px">
            <use xlink:href="${sprite}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${
          name.toString().length > 20 ? name.slice(0, 20) + '...' : name
        } </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${burnedCalories ? burnedCalories : ''} / ${
          time ? time : 'your wish'
        } min</span>
            </p>
          </li>
        </ul>
        </div>
    </li>`;
      })
      .join('');
    list.innerHTML = markup;
  }
}
