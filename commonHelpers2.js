var M=Object.defineProperty;var A=(t,e,s)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var N=(t,e,s)=>(A(t,typeof e!="symbol"?e+"":e,s),s);import{f as c,m as o,c as S,s as g,a as L}from"./assets/exercises-right-part-filter-16037eef.js";import{S as P}from"./assets/vendor-79031006.js";const l=class{open(){console.log("loader ------>open"),(!l.loaderEl||l.loaderEl.classList.contains("js-loader"))&&(l.loaderEl.style.display="block")}close(){l.loaderEl&&(l.loaderEl.style.display="none"),console.log("loader ------>close")}};let p=l;N(p,"loaderEl",document.querySelector(".js-loader"));const j=document.querySelector(".wrap-button"),$=document.querySelector(".muscles-list"),H=document.querySelector(".pagination-numbers"),I=document.querySelector(".title-exercises");j.addEventListener("click",B);document.addEventListener("DOMContentLoaded",()=>{E({filter:"Muscles",page:1,limit:12})});async function B(t){t.preventDefault(),I.innerHTML="Exercises";const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const i=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(n=>{n.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const r={filter:i,page:1,limit:12};$.innerHTML="",E(r)}async function E(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await c.getByFilterName(t),s=e.results;if(!e||s.length===0){o.error("Sorry, we didn't find anything according to your request.");return}$.insertAdjacentHTML("beforeend",_(s)),_(s);const{totalPages:i}=e,r=JSON.stringify({totalPages:i,categoryName:t.filter});localStorage.setItem("infoRequest",r),document.querySelector(".filter-list-js").classList.add("muscles-list"),H.innerHTML="",h(i,t),u(1)}catch(e){console.log(e.message)}}function _(t){return t.map(({filter:s,name:i,imgURL:r})=>{let a=s.toLocaleLowerCase().replaceAll(" ","");return a==="bodyparts"&&(a="bodypart"),`
      <li class="muscles-item" data-name=${i} data-filter=${a}>
      <a href="" class="muscles-link" data-alt="${i}">
        <img loading="lazy" class="muscles-image" src="${r}" alt="${i}" >
        <div class="muscles-box-menu">
          <h3 class="muscles-small-title">${S(i)}</h3>
          <p class="muscles-text">${s}</p>
        </div>
      </a>
    </li>
    `}).join("")}const y=document.querySelector(".pagination-numbers"),F=document.querySelector(".muscles-list");let d=1;try{y.addEventListener("click",O),y.addEventListener("click",v)}catch(t){console.log(t)}let q;async function O(t){const e={...q,page:t.target.textContent};if(t.target.nodeName==="BUTTON"&&e.page!==d){if(e.filter){const i=(await c.getByFilterName(e)).results;F.innerHTML=_(i)}else{const s=await c.getByFilterCategory(e);x(s)}d=e.page,v()}}const R=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),y.appendChild(e)};function h(t,e){if(q=e,t!==1)for(let s=1;s<=t;s++)R(s)}function v(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{u(e)})})}function u(t){d=t,v(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==d&&e.classList.add("active")})}const z=document.querySelector(".pagination-numbers"),m=document.querySelector(".filter-list-js"),D=document.querySelector(".title-exercises");m.addEventListener("click",G);async function G(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.nodeName!=="P"&e.nodeName!=="H3")return;document.querySelector(".form-js").classList.remove("hidden-form");let s,i;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,i=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,i=e.parentNode.parentNode.dataset.alt);const r={[s]:i,page:1,limit:10};D.innerHTML=`Exercises / <spam class="search-target" id="tagret-js">${S(i)}</spam>`;const a=await c.getByFilterCategory(r);if(a!=null&&a.results.length){m.classList.add("exercises_list"),m.classList.remove("muscles-list"),x(a),z.innerHTML="";const{totalPages:n}=a;h(n,r),u(1)}else o.info("Oops. please, try other category this list empty :(")}catch(r){o.error(r.message)}}function x(t){if(t.results.length){const e=t.results.map(({_id:s,target:i,rating:r,name:a,burnedCalories:n,time:b,bodyPart:T})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${i.toString().length>8?i.slice(0,8)+"...":i}</div>
          <p class="exercises_rating">${r.toFixed(1)}</p>
          <div class="rating-container-not-cursore">
            <svg class="exercises_start_icon" width="56" height="18" data-id=${s}>
              <use xlink:href="${g}#icon-star" data-id=${s}></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${s}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id=${s}>
              <use xlink:href="${g}#icon-arrow" data-id=${s}></use>
              />
            </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
            <use xlink:href="${g}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${a.toString().length>20?a.slice(0,20)+"...":a} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${n||""} / ${b||"your wish"} min</span>
            </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
          <p class="exercises_list_item_bottom_list_item_text">
            Body part: <span>${L(T,5)}</span>
          </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
<p class="exercises_list_item_bottom_list_item_text"">Target: <span>${L(i,7)}</span></p>
</li>
      </ul>
        </div>
    </li>`).join("");m.innerHTML=e}}const k=document.querySelector(".form-js"),J=document.querySelector(".pagination-numbers");k.addEventListener("submit",U);async function U(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),r={[s.toLocaleLowerCase().replaceAll(" ","")]:e,page:1,limit:10};try{const a=await c.getByFilterCategory(r);J.innerHTML="";const{totalPages:n}=a;h(n,r),u(1),k.reset(),x(a)}catch{}}const C=document.querySelector("#subscribe-form"),f=C.querySelector("#email");C.addEventListener("submit",Z);async function Z(t){t.preventDefault();const{value:e}=f;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){o.info("Enter the following sample email - 'test@gmail.com'"),f.value="";return}try{const i=await c.addSubscription({email:e});o.success(i.message)}catch(i){console.log(i)}finally{f.value=""}}const w=document.createElement("div");w.id="spinner-container";document.body.appendChild(w);const K={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new P(K);
//# sourceMappingURL=commonHelpers2.js.map
