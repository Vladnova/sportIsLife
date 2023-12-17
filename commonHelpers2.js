import{f as c,m as l,c as v,s as m,a as x}from"./assets/exercises-right-part-filter-4aac166a.js";import{S as k}from"./assets/vendor-79031006.js";const q=document.querySelector(".wrap-button"),b=document.querySelector(".muscles-list"),T=document.querySelector(".pagination-numbers"),M=document.querySelector(".title-exercises");q.addEventListener("click",A);document.addEventListener("DOMContentLoaded",()=>{N({filter:"Muscles",page:1,limit:12})});async function A(t){t.preventDefault(),M.innerHTML="Exercises";const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const i=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(n=>{n.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const a={filter:i,page:1,limit:12};b.innerHTML="",N(a)}async function N(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await c.getByFilterName(t),s=e.results;if(!e||s.length===0){l.error("Sorry, we didn't find anything according to your request.");return}b.insertAdjacentHTML("beforeend",p(s)),p(s);const{totalPages:i}=e,a=JSON.stringify({totalPages:i,categoryName:t.filter});localStorage.setItem("infoRequest",a),document.querySelector(".filter-list-js").classList.add("muscles-list"),T.innerHTML="",S(i,t),_(1)}catch(e){console.log(e.message)}}function p(t){return t.map(({filter:s,name:i,imgURL:a})=>{let r=s.toLocaleLowerCase().replaceAll(" ","");return r==="bodyparts"&&(r="bodypart"),`

        <li class="muscles-item" data-name=${i} data-filter=${r}>

        <a href="" class="muscles-link" data-alt="${i}">
        <img class="muscles-image" src="${a}" alt="${i}" width="335"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${v(i)}</h3>
           <p class="muscles-text">${s}</p>
            </div>
            </a>
           </li>
          `}).join("")}const g=document.querySelector(".pagination-numbers"),P=document.querySelector(".muscles-list");let o=1;try{g.addEventListener("click",H),g.addEventListener("click",f)}catch(t){console.log(t)}let L;async function H(t){const e={...L,page:t.target.textContent};if(t.target.nodeName==="BUTTON"&&e.page!==o){if(e.filter){const i=(await c.getByFilterName(e)).results;P.innerHTML=p(i)}else{const s=await c.getByFilterCategory(e);y(s)}o=e.page,f()}}const I=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),g.appendChild(e)};function S(t,e){if(L=e,t!==1)for(let s=1;s<=t;s++)I(s)}function f(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{_(e)})})}function _(t){o=t,f(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==o&&e.classList.add("active")})}const j=document.querySelector(".pagination-numbers"),d=document.querySelector(".filter-list-js"),B=document.querySelector(".title-exercises");d.addEventListener("click",F);async function F(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.nodeName!=="P"&e.nodeName!=="H3")return;document.querySelector(".form-js").classList.remove("hidden-form");let s,i;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,i=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,i=e.parentNode.parentNode.dataset.alt);const a={[s]:i,page:1,limit:10};B.innerHTML=`Exercises / <spam class="search-target" id="tagret-js">${v(i)}</spam>`;const r=await c.getByFilterCategory(a);if(r!=null&&r.results.length){d.classList.add("exercises_list"),d.classList.remove("muscles-list"),y(r),j.innerHTML="";const{totalPages:n}=r;S(n,a),_(1)}else l.info("Oops. please, try other category this list empty :(")}catch(a){l.error(a.message)}}function y(t){if(t.results.length){const e=t.results.map(({_id:s,target:i,rating:a,name:r,burnedCalories:n,time:h,bodyPart:E})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${i.toString().length>8?i.slice(0,8)+"...":i}</div>
          <p class="exercises_rating">${a.toFixed(1)}</p>
          <div class="rating-container-not-cursore">
            <svg class="exercises_start_icon" width="56px" height="18px" data-id=${s}>
              <use xlink:href="${m}#icon-star" data-id=${s}></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${s}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_arrow_icon" width="56px" height="18px" data-id=${s}>
              <use xlink:href="${m}#icon-arrow" data-id=${s}></use>
              />
            </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24px" height="24px">
            <use xlink:href="${m}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${r.toString().length>20?r.slice(0,20)+"...":r} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${n||""} / ${h||"your wish"} min</span>
            </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
          <p class="exercises_list_item_bottom_list_item_text">
            Body part: <span>${x(E,5)}</span>
          </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
<p class="exercises_list_item_bottom_list_item_text"">Target: <span>${x(i,7)}</span></p>
</li>
      </ul>
        </div>
    </li>`).join("");d.innerHTML=e}}const $=document.querySelector(".form-js");$.addEventListener("submit",O);async function O(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),a={[s.toLocaleLowerCase().replaceAll(" ","")]:e,page:1,limit:10},r=await c.getByFilterCategory(a);$.reset(),y(r)}const w=document.querySelector("#subscribe-form"),u=w.querySelector("#email");w.addEventListener("submit",R);async function R(t){t.preventDefault();const{value:e}=u;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){l.info("Enter the following sample email - 'test@gmail.com'"),u.value="";return}try{const i=await c.addSubscription({email:e});l.success(i.message)}catch(i){console.log(i)}finally{u.value=""}}const C=document.createElement("div");C.id="spinner-container";document.body.appendChild(C);const D={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new k(D);
//# sourceMappingURL=commonHelpers2.js.map
