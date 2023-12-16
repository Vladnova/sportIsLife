import{s as e}from"./assets/exercises-right-part-filter-d841afd2.js";import"./assets/vendor-c6a8d4ef.js";function c(){const t=document.querySelector(".wrap-js"),s=document.createElement("p");t.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const i=(t,s)=>t.length<=s?t:`${t.slice(0,s)}...`;function m(t){const s=document.querySelector(".filter-list-js"),r=t.map(({_id:a,target:o,name:_,bodyPart:l,burnedCalories:n,time:u})=>`
  <li class="favourites_list_item">
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${i(o,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash" data-id="${a}">
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash">
            <use href="${e}#icon-trash"></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${a}>
          <p class="favourites_btn_start_text">start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow">
            <use href="${e}#icon-arrow"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${e}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${i(_,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${n}/${u}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${i(l,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${i(o,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");s.innerHTML=r}function v(){const t=JSON.parse(localStorage.getItem("favorites"));if(!t.length){c();return}m(t)}v();
//# sourceMappingURL=commonHelpers.js.map
