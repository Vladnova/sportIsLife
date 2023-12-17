import{f as n,s as d,c as f,m as _,a as k}from"./assets/exercises-right-part-filter-2bcd1e06.js";import{S as w}from"./assets/vendor-5cb48af9.js";const c=document.querySelector(".filter-list-js");c.addEventListener("click",C);async function C(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.nodeName!=="P"&e.nodeName!=="H3")return;document.querySelector(".form-js").classList.remove("hidden-form");let i,s;try{e.nodeName==="IMG"&&(i=e.parentNode.parentNode.dataset.filter,s=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(i=e.parentNode.parentNode.parentNode.dataset.filter,s=e.parentNode.parentNode.dataset.alt);const r={[i]:[s],page:1,limit:10},a=await n.getByFilterCategory(r);a!=null&&a.results.length?(c.classList.add("exercises_list"),c.classList.remove("muscles-list"),y(a)):alert("Oops. please, try other category this list empty :)")}catch(r){console.log(r.message)}}function y(t){if(t.results.length){const e=t.results.map(({_id:i,target:s,rating:r,name:a,burnedCalories:l,time:g,bodyPart:$})=>`
      <li class="exercises_list_item" id=${i}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${s.toString().length>8?s.slice(0,8)+"...":s}</div>
          <p class="exercises_rating">${r.toFixed(1)}</p>
          <div class="rating-container-not-cursore">
            <svg class="exercises_start_icon" width="56px" height="18px" data-id=${i}>
              <use xlink:href="${d}#icon-star" data-id=${i}></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${i}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_arrow_icon" width="56px" height="18px" data-id=${i}>
              <use xlink:href="${d}#icon-arrow" data-id=${i}></use>
              /> 
            </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24px" height="24px">
            <use xlink:href="${d}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${a.toString().length>20?a.slice(0,20)+"...":a} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${l||""} / ${g||"your wish"} min</span>
            </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
          <p class="exercises_list_item_bottom_list_item_text">
            Body part: <span>${f($,5)}</span>
          </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
<p class="exercises_list_item_bottom_list_item_text"">Target: <span>${f(s,7)}</span></p>
</li>
      </ul>
        </div>
    </li>`).join("");c.innerHTML=e}}const h=document.querySelector(".form-js");h.addEventListener("submit",E);async function E(t){console.log("2"),t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:i}=JSON.parse(localStorage.getItem("infoRequest")),r={[i.toLocaleLowerCase().replaceAll(" ","")]:e,keyword:"pull",page:1,limit:10},a=await n.getByFilterCategory(r);h.reset(),y(a)}const v=document.querySelector("#subscribe-form"),m=v.querySelector("#email");v.addEventListener("submit",q);async function q(t){t.preventDefault();const{value:e}=m;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){_.info("Enter the following sample email - 'test@gmail.com'"),m.value="";return}try{const s=await n.addSubscription({email:e});_.success(s.message)}catch(s){console.log(s)}finally{m.value=""}}const u=document.querySelector(".pagination-numbers"),T=document.querySelector(".muscles-list");let o=1;try{u.addEventListener("click",A),u.addEventListener("click",p)}catch(t){console.log(t)}async function A(t){const{totalPages:e,categoryName:i}=JSON.parse(localStorage.getItem("infoRequest")),s={filter:i,page:t.target.textContent,limit:12,totalPages:e};if(s.page===o)return;const a=(await n.getByFilterName(s)).results;T.innerHTML=S(a),o=s.page,p()}const I=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),u.appendChild(e)};function M(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)I(e)}function p(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{x(e)})})}function x(t){o=t,p(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==o&&e.classList.add("active")})}const P=document.querySelector(".wrap-button"),b=document.querySelector(".muscles-list"),j=document.querySelector(".pagination-numbers");P.addEventListener("click",F);document.addEventListener("DOMContentLoaded",()=>{N({filter:"Muscles",page:1,limit:12})});async function F(t){t.preventDefault();const{target:e,currentTarget:i}=t;if(e.nodeName!=="BUTTON")return;const s=e.dataset.name;e.classList.contains("btn-filter")&&[...i.children].forEach(l=>{l.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const r={filter:s,page:1,limit:12};b.innerHTML="",N(r)}async function N(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await n.getByFilterName(t),i=e.results;if(!e||i.length===0){console.log("Sorry, we didn't find anything according to your request.");return}b.insertAdjacentHTML("beforeend",S(i));const{totalPages:s}=e,r=JSON.stringify({totalPages:s,categoryName:t.filter});localStorage.setItem("infoRequest",r),document.querySelector(".filter-list-js").classList.add("muscles-list"),j.innerHTML="",M(),x(1)}catch(e){console.log(e.message)}}function S(t){return t.map(({filter:i,name:s,imgURL:r})=>{let a=i.toLocaleLowerCase().replaceAll(" ","");return a==="bodyparts"&&(a="bodypart"),`

        <li class="muscles-item"  data-name=${s} data-filter=${a}>

        <a href="" class="muscles-link" data-alt="${s}">
        <img class="muscles-image" src="${r}" alt="${s}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${k(s)}</h3>
           <p class="muscles-text">${i}</p>
            </div>
            </a>
           </li>
          `}).join("")}const L=document.createElement("div");L.id="spinner-container";document.body.appendChild(L);const B={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new w(B);
//# sourceMappingURL=commonHelpers2.js.map
