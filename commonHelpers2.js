import{f as n,s as d,c as _,m as h,a as k}from"./assets/exercises-right-part-filter-012c652d.js";import{S as C}from"./assets/vendor-5cb48af9.js";const l=document.querySelector(".filter-list-js");l.addEventListener("click",E);async function E(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.nodeName!=="P"&e.nodeName!=="H3")return;document.querySelector(".form-js").classList.remove("hidden-form");let i,s;try{e.nodeName==="IMG"&&(i=e.parentNode.parentNode.dataset.filter,s=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(i=e.parentNode.parentNode.parentNode.dataset.filter,s=e.parentNode.parentNode.dataset.alt);const r={[i]:[s],page:1,limit:10},a=await n.getByFilterCategory(r);a!=null&&a.results.length?(l.classList.add("exercises_list"),l.classList.remove("muscles-list"),v(a)):alert("Oops. please, try other category this list empty :)")}catch(r){console.log(r.message)}}function v(t){if(t.results.length){const e=t.results.map(({_id:i,target:s,rating:r,name:a,burnedCalories:o,time:f,bodyPart:w})=>`
      <li class="exercises_list_item" id=${i}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${s.toString().length>8?s.slice(0,8)+"...":s}</div>
          <p class="exercises_rating">${r.toFixed(1)}</p>
          <div class="rating-container">
            <svg class="exercises_btn_start_icon" width="56px" height="18px" data-id=${i}>
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
              Burned calories: <span>${o||""} / ${f||"your wish"} min</span>
            </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
          <p class="exercises_list_item_bottom_list_item_text">
            Body part: <span>${_(w,5)}</span>
          </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
<p class="exercises_list_item_bottom_list_item_text"">Target: <span>${_(s,7)}</span></p>
</li>
      </ul>
        </div>
    </li>`).join("");l.innerHTML=e}}const x=document.querySelector(".form-js");x.addEventListener("submit",T);async function T(t){console.log("2"),t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:i}=JSON.parse(localStorage.getItem("infoRequest")),r={[i.toLocaleLowerCase().replaceAll(" ","")]:e,keyword:"pull",page:1,limit:10},a=await n.getByFilterCategory(r);x.reset(),v(a)}const S=document.querySelector("#subscribe-form"),m=S.querySelector("#email");S.addEventListener("submit",M);async function M(t){t.preventDefault();const{value:e}=m;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){h.info("Enter the following sample email - 'test@gmail.com'"),m.value="";return}try{const s=await n.addSubscription({email:e});h.success(s.message)}catch(s){console.log(s)}finally{m.value=""}}const g=document.querySelector(".pagination-numbers"),A=document.querySelector(".muscles-list");let c=1;try{g.addEventListener("click",I),g.addEventListener("click",p)}catch(t){console.log(t)}async function I(t){const{totalPages:e,categoryName:i}=JSON.parse(localStorage.getItem("infoRequest")),s={filter:i,page:t.target.textContent,limit:12,totalPages:e};if(s.page===c)return;const a=(await n.getByFilterName(s)).results;A.innerHTML=q(a),c=s.page,p()}const P=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),g.appendChild(e)};function D(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)P(e)}function p(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{b(e)})})}function b(t){c=t,p(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==c&&e.classList.add("active")})}const H=document.querySelector(".wrap-button"),N=document.querySelector(".muscles-list"),O=document.querySelector(".pagination-numbers");H.addEventListener("click",j);document.addEventListener("DOMContentLoaded",()=>{L({filter:"Muscles",page:1,limit:12})});async function j(t){t.preventDefault();const{target:e,currentTarget:i}=t;if(e.nodeName!=="BUTTON")return;const s=e.dataset.name;e.classList.contains("btn-filter")&&[...i.children].forEach(o=>{o.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const r={filter:s,page:1,limit:12};N.innerHTML="",L(r)}async function L(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await n.getByFilterName(t),i=e.results;if(!e||i.length===0){console.log("Sorry, we didn't find anything according to your request.");return}N.insertAdjacentHTML("beforeend",q(i));const{totalPages:s}=e,r=JSON.stringify({totalPages:s,categoryName:t.filter});localStorage.setItem("infoRequest",r),document.querySelector(".filter-list-js").classList.add("muscles-list"),O.innerHTML="",D(),b(1)}catch(e){console.log(e.message)}}function q(t){return t.map(({filter:i,name:s,imgURL:r})=>{let a=i.toLocaleLowerCase().replaceAll(" ","");return a==="bodyparts"&&(a="bodypart"),`

        <li class="muscles-item"  data-name=${s} data-filter=${a}>

        <a href="" class="muscles-link" data-alt="${s}">
        <img class="muscles-image" src="${r}" alt="${s}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${k(s)}</h3>
           <p class="muscles-text">${i}</p>
            </div>
            </a>
           </li>
          `}).join("")}const u={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",F);async function F(){const t=localStorage.getItem("quote");if(t){const e=new Date().toDateString(),{date:i,quote:s,author:r}=JSON.parse(t);e!==i?y():(u.quoteText.innerHTML=s,u.quoteAuthor.innerHTML=r)}else y()}async function y(){const t=await n.getQuotes(),{author:e,quote:i}=t,s={author:e,quote:i,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(s)),u.quoteText.innerHTML=i,u.quoteAuthor.innerHTML=e}const $=document.createElement("div");$.id="spinner-container";document.body.appendChild($);const B={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new C(B);
//# sourceMappingURL=commonHelpers2.js.map
