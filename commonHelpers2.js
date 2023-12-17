import{f as n,s as d,m as h}from"./assets/exercises-right-part-filter-774521c6.js";import{S as w}from"./assets/vendor-c6a8d4ef.js";const c=document.querySelector(".filter-list-js");c.addEventListener("click",$);async function $(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.nodeName!=="P"&e.nodeName!=="H3")return;document.querySelector(".form-js").classList.remove("hidden-form");let s,a;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,a=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.dataset.alt);const r={[s]:[a],page:1,limit:10},i=await n.getByFilterCategory(r);i!=null&&i.results.length?(c.classList.add("exercises_list"),c.classList.remove("muscles-list"),_(i)):alert("Oops. please, try other category this list empty :)")}catch(r){console.log(r.message)}}function _(t){if(t.results.length){const e=t.results.map(({_id:s,target:a,rating:r,name:i,burnedCalories:o,time:p})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${a.toString().length>8?a.slice(0,8)+"...":a}</div>
          <p class="exercises_rating">${r.toFixed(1)}</p>
          <div class="rating-container">
            <svg class="exercises_btn_start_icon" width="56px" height="18px" data-id=${s}>
              <use xlink:href="${d}#icon-star" data-id=${s}></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${s}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_arrow_icon" width="56px" height="18px" data-id=${s}>
              <use xlink:href="${d}#icon-arrow" data-id=${s}></use>
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
        <h3 class="exercises_list_item_middle_title" id="name">${i.toString().length>20?i.slice(0,20)+"...":i} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${o||""} / ${p||"your wish"} min</span>
            </p>
          </li>
        </ul>
        </div>
    </li>`).join("");c.innerHTML=e}}const v=document.querySelector(".form-js");v.addEventListener("submit",k);async function k(t){console.log("2"),t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),r={[s.toLocaleLowerCase().replaceAll(" ","")]:e,keyword:"pull",page:1,limit:10},i=await n.getByFilterCategory(r);v.reset(),_(i)}const x=document.querySelector("#subscribe-form"),m=x.querySelector("#email");x.addEventListener("submit",C);async function C(t){t.preventDefault();const{value:e}=m;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){h.info("Enter the following sample email - 'test@gmail.com'"),m.value="";return}try{const a=await n.addSubscription({email:e});h.success(a.message)}catch(a){console.log(a)}finally{m.value=""}}const g=document.querySelector(".pagination-numbers"),E=document.querySelector(".muscles-list");let l=1;try{g.addEventListener("click",T),g.addEventListener("click",f)}catch(t){console.log(t)}async function T(t){const{totalPages:e,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),a={filter:s,page:t.target.textContent,limit:12,totalPages:e};if(a.page===l)return;const i=(await n.getByFilterName(a)).results;E.innerHTML=L(i),l=a.page,f()}const M=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),g.appendChild(e)};function A(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)M(e)}function f(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{S(e)})})}function S(t){l=t,f(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==l&&e.classList.add("active")})}const I=document.querySelector(".wrap-button"),b=document.querySelector(".muscles-list"),P=document.querySelector(".pagination-numbers");I.addEventListener("click",D);document.addEventListener("DOMContentLoaded",()=>{N({filter:"Muscles",page:1,limit:12})});async function D(t){t.preventDefault();const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const a=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(o=>{o.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const r={filter:a,page:1,limit:12};b.innerHTML="",N(r)}async function N(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await n.getByFilterName(t),s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}b.insertAdjacentHTML("beforeend",L(s));const{totalPages:a}=e,r=JSON.stringify({totalPages:a,categoryName:t.filter});localStorage.setItem("infoRequest",r),document.querySelector(".filter-list-js").classList.add("muscles-list"),P.innerHTML="",A(),S(1)}catch(e){console.log(e.message)}}function L(t){return t.map(({filter:s,name:a,imgURL:r})=>{let i=s.toLocaleLowerCase().replaceAll(" ","");return i==="bodyparts"&&(i="bodypart"),`

        <li class="muscles-item"  data-name=${a} data-filter=${i}>

        <a href="" class="muscles-link" data-alt="${a}">
        <img class="muscles-image" src="${r}" alt="${a}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${a}</p>
            </div>
            </a>
           </li>
          `}).join("")}const u={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",H);async function H(){const t=localStorage.getItem("quote");if(t){const e=new Date().toDateString(),{date:s,quote:a,author:r}=JSON.parse(t);e!==s?y():(u.quoteText.innerHTML=a,u.quoteAuthor.innerHTML=r)}else y()}async function y(){const t=await n.getQuotes(),{author:e,quote:s}=t,a={author:e,quote:s,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(a)),u.quoteText.innerHTML=s,u.quoteAuthor.innerHTML=e}const q=document.createElement("div");q.id="spinner-container";document.body.appendChild(q);const O={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new w(O);
//# sourceMappingURL=commonHelpers2.js.map
