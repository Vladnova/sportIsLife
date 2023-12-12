import fetchSportEnergy from "../shared/api/apiSport";

const dataFilter = {
  bodypart: "Muscles",
  page: 1,
  limit: 12,
};

const musclesList = document.querySelector(".muscles-list");

window.addEventListener("DOMContentLoaded", loadSectionOnClick);

async function loadSectionOnClick() {
  try {
    // export async function getDataFilter() {
    const filter = await fetchSportEnergy.getByFilterName(dataFilter);
    console.log("filter-->", filter);

    const filteredResult = filter.results;

    if (filter.length === 0 || filter === undefined) {
      console.log("Sorry, we didn't find anything according to your request.");
      return;
    }
    musclesList.insertAdjacentHTML(
      "beforeend",
      makeMarkupMuscles(filteredResult)
    );
  } catch (error) {
    console.log(error.message);
  }
}

console.log(musclesList);

export function makeMarkupMuscles(filteredResult) {
  const markup = filteredResult
    .map(({ _id, filter, name, imgURL }) => {
      return ` 
        <li class="muscles-item" id="${_id}">
        <a href="" class="muscles-link" id="${_id}"> 
        <img class="muscles-image" src="${imgURL}" alt="${name}" id="${_id}">
          <!-- box-menu -->
          <div class="muscles-box-menu">
             <h3 class="muscles-small-title" id="${_id}">${filter}</h3>
             <p class="muscles-text" id="${_id}">${name}</p>
              </div>
           <!-- box-menu -->
            </a>
           </li>
          `;
    })
    .join("");
  return markup;
}
