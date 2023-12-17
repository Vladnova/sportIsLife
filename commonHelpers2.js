import{f as i,s as p,m as y}from"./assets/exercises-right-part-filter-0029268d.js";import{S as w}from"./assets/vendor-c6a8d4ef.js";const c=document.querySelector(".filter-list-js");c.addEventListener("click",C);async function C(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.nodeName!=="P"&e.nodeName!=="H3")return;document.querySelector(".form-js").classList.remove("hidden-form");let a,s;try{e.nodeName==="IMG"&&(a=e.parentNode.parentNode.dataset.filter,s=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(a=e.parentNode.parentNode.parentNode.dataset.filter,s=e.parentNode.parentNode.dataset.alt);const n={[a]:[s],page:1,limit:10},r=await i.getByFilterCategory(n);r!=null&&r.results.length?(c.classList.add("exercises_list"),c.classList.remove("muscles-list"),_(r)):alert("Oops. please, try other category this list empty :)")}catch(n){console.log(n.message)}}function _(t){if(t.results.length){const e=t.results.map(({_id:a,target:s,rating:n,name:r,burnedCalories:o,time:f})=>`
      <li class="exercises_list_item" id=${a}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${s.toString().length>8?s.slice(0,8)+"...":s}</div>
          <p class="exercises_rating">${n.toFixed(1)}</p>
          <div class="rating-container">
            <span class="star selected">&#9733;</span>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${a}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_start_icon" width="56px" height="18px" data-id=${a}>
              <use xlink:href="${p}#icon-arrow" data-id=${a}></use>
              />
            </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24px" height="24px">
            <use xlink:href="${p}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${r.toString().length>20?r.slice(0,20)+"...":r} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${o||""} / ${f||"your wish"} min</span>
            </p>
          </li>
        </ul>
        </div>
    </li>`).join("");c.innerHTML=e}}const v=document.querySelector(".form-js");v.addEventListener("submit",k);async function k(t){console.log("2"),t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:a}=JSON.parse(localStorage.getItem("infoRequest")),n={[a.toLocaleLowerCase().replaceAll(" ","")]:e,keyword:"pull",page:1,limit:10},r=await i.getByFilterCategory(n);v.reset(),_(r)}const S=document.querySelector("#subscribe-form"),d=S.querySelector("#email");S.addEventListener("submit",E);async function E(t){t.preventDefault();const{value:e}=d;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){y.info("Enter the following sample email - 'test@gmail.com'"),d.value="";return}try{const s=await i.addSubscription({email:e});y.success(s.message)}catch(s){console.log(s)}finally{d.value=""}}const m=document.querySelector(".pagination-numbers"),$=document.querySelector(".muscles-list");let l=1;try{m.addEventListener("click",T),m.addEventListener("click",g)}catch(t){console.log(t)}async function T(t){const{totalPages:e,categoryName:a}=JSON.parse(localStorage.getItem("infoRequest")),s={filter:a,page:t.target.textContent,limit:12,totalPages:e};if(s.page===l)return;const r=(await i.getByFilterName(s)).results;$.innerHTML=L(r),l=s.page,g()}const M=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),m.appendChild(e)};function A(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)M(e)}function g(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{x(e)})})}function x(t){l=t,g(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==l&&e.classList.add("active")})}const I=document.querySelector(".wrap-button"),N=document.querySelector(".muscles-list"),P=document.querySelector(".pagination-numbers");I.addEventListener("click",D);document.addEventListener("DOMContentLoaded",()=>{b({filter:"Muscles",page:1,limit:12})});async function D(t){t.preventDefault();const{target:e,currentTarget:a}=t;if(e.nodeName!=="BUTTON")return;const s=e.dataset.name;e.classList.contains("btn-filter")&&[...a.children].forEach(o=>{o.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:s,page:1,limit:12};N.innerHTML="",b(n)}async function b(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await i.getByFilterName(t),a=e.results;if(!e||a.length===0){console.log("Sorry, we didn't find anything according to your request.");return}N.insertAdjacentHTML("beforeend",L(a));const{totalPages:s}=e,n=JSON.stringify({totalPages:s,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),P.innerHTML="",A(),x(1)}catch(e){console.log(e.message)}}function L(t){return t.map(({filter:a,name:s,imgURL:n})=>{let r=a.toLocaleLowerCase().replaceAll(" ","");return r==="bodyparts"&&(r="bodypart"),`

        <li class="muscles-item"  data-name=${s} data-filter=${r}>

        <a href="" class="muscles-link" data-alt="${s}">
        <img class="muscles-image" src="${n}" alt="${s}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${a}</h3>
           <p class="muscles-text">${s}</p>
            </div>
            </a>
           </li>
          `}).join("")}const u={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",H);async function H(){const t=localStorage.getItem("quote");if(t){const e=new Date().toDateString(),{date:a,quote:s,author:n}=JSON.parse(t);e!==a?h():(u.quoteText.innerHTML=s,u.quoteAuthor.innerHTML=n)}else h()}async function h(){const t=await i.getQuotes(),{author:e,quote:a}=t,s={author:e,quote:a,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(s)),u.quoteText.innerHTML=a,u.quoteAuthor.innerHTML=e}const q=document.createElement("div");q.id="spinner-container";document.body.appendChild(q);const O={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new w(O);
//# sourceMappingURL=commonHelpers2.js.map
