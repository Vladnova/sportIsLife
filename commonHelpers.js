import{s as a}from"./assets/exercises-right-part-filter-acd12156.js";import"./assets/vendor-c6a8d4ef.js";function c(){document.querySelector(".filter-list-js").classList.add("hidden-form");const s=document.querySelector(".wrap-js"),i=document.createElement("p");i.className="favorite-text",s.appendChild(i),i.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const e=(t,s)=>t.length<=s?t:`${t.slice(0,s)}...`;function m(t){const s=document.querySelector(".filter-list-js");s.classList.remove("hidden-form"),t.length>6&&(s.style.overflowY="scroll");const i=t.map(({_id:o,target:l,name:r,bodyPart:_,burnedCalories:n,time:u})=>`
  <li class="favourites_list_item">
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${e(l,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash" data-id="${o}">
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash">
            <use href="${a}#icon-trash"></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${o}>
          <p class="favourites_btn_start_text">start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow">
            <use href="${a}#icon-arrow"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${a}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${e(r,16)}</h3>
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
            Body part: <span>${e(_,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${e(l,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");s.innerHTML=i}function d(){const t=JSON.parse(localStorage.getItem("favorites"));if(!(t!=null&&t.length)){c();return}m(t)}d();
//# sourceMappingURL=commonHelpers.js.map
