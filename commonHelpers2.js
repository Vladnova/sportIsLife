var H=Object.defineProperty;var C=(t,e,s)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var N=(t,e,s)=>(C(t,typeof e!="symbol"?e+"":e,s),s);import{f as o,m as c,c as S,s as g,a as L}from"./assets/exercises-right-part-filter-8cdb33ff.js";import"./assets/vendor-ac1aa0cc.js";const l=class{open(){(!l.loaderEl||l.loaderEl.classList.contains("js-loader"))&&(l.loaderEl.style.display="block")}close(){l.loaderEl&&(l.loaderEl.style.display="none")}};let f=l;N(f,"loaderEl",document.querySelector(".js-loader"));const M=document.querySelector(".wrap-button"),E=document.querySelector(".muscles-list"),A=document.querySelector(".pagination-numbers"),P=document.querySelector(".title-exercises");M.addEventListener("click",B);document.addEventListener("DOMContentLoaded",()=>{w({filter:"Muscles",page:1,limit:12})});function j(){var t=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),s=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return t+s>=e}async function B(t){t.preventDefault(),P.innerHTML="Exercises";const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const i=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(n=>{n.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const a={filter:i,page:1,limit:12};E.innerHTML="",w(a)}async function w(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await o.getByFilterName(t),s=e.results;if(!e||s.length===0){c.error("Sorry, we didn't find anything according to your request.");return}E.insertAdjacentHTML("beforeend",_(s)),window.addEventListener("scroll",function(){j()&&(console.log("Сторінка завантажилась до кінця!"),_(s))});const{totalPages:i}=e,a=JSON.stringify({totalPages:i,categoryName:t.filter});localStorage.setItem("infoRequest",a),document.querySelector(".filter-list-js").classList.add("muscles-list"),A.innerHTML="",h(i,t),u(1)}catch(e){console.log(e.message)}}function _(t){return t.map(({filter:s,name:i,imgURL:a})=>{let r=s.toLocaleLowerCase().replaceAll(" ","");return r==="bodyparts"&&(r="bodypart"),`
      <li class="muscles-item" data-name=${i} data-filter=${r}>
      <a href="" class="muscles-link" data-alt="${i}">
        <img loading="lazy" class="muscles-image" src="${a}" alt="${i}" width="290" height="242" >
        <button class="muscles-box-menu">
          <h3 class="muscles-small-title">${S(i)}</h3>
          <p class="muscles-text">${s}</p>
        </button>
      </a>
    </li>
    `}).join("")}const y=document.querySelector(".pagination-numbers"),F=document.querySelector(".muscles-list");let d=1;try{y.addEventListener("click",I),y.addEventListener("click",b)}catch(t){console.log(t)}let $;async function I(t){const e={...$,page:t.target.textContent};if(t.target.nodeName==="BUTTON"&&e.page!==d){if(e.filter){const i=(await o.getByFilterName(e)).results;F.innerHTML=_(i)}else{const s=await o.getByFilterCategory(e);v(s)}d=e.page,b()}}const O=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),y.appendChild(e)};function h(t,e){if($=e,t!==1)for(let s=1;s<=t;s++)O(s)}function b(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{u(e)})})}function u(t){d=t,b(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==d&&e.classList.add("active")})}const R=document.querySelector(".pagination-numbers"),m=document.querySelector(".filter-list-js"),D=document.querySelector(".title-exercises");m.addEventListener("click",z);async function z(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.parentNode.nodeName!=="BUTTON")return;document.querySelector(".form-js").classList.remove("hidden-form");let s,i;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,i=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,i=e.parentNode.parentNode.dataset.alt);const a={[s]:i,page:1,limit:10};D.innerHTML=`Exercises / <spam class="search-target" id="tagret-js">${S(i)}</spam>`;const r=await o.getByFilterCategory(a);if(r!=null&&r.results.length){m.classList.add("exercises_list"),m.classList.remove("muscles-list"),v(r),R.innerHTML="";const{totalPages:n}=r;h(n,a),u(1)}else c.info("Oops. please, try other category this list empty :(")}catch(a){c.error(a.message)}}function v(t){if(t.results.length){const e=t.results.map(({_id:s,target:i,rating:a,name:r,burnedCalories:n,time:x,bodyPart:k})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${i.toString().length>8?i.slice(0,8)+"...":i}</div>
          <p class="exercises_rating">${a.toFixed(1)}</p>
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
        <h3 class="exercises_list_item_middle_title" id="name">${r.toString().length>20?r.slice(0,20)+"...":r} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${n||""} / ${x||"your wish"} min</span>
            </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
          <p class="exercises_list_item_bottom_list_item_text">
            Body part: <span>${L(k,5)}</span>
          </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
<p class="exercises_list_item_bottom_list_item_text"">Target: <span>${L(i,7)}</span></p>
</li>
      </ul>
        </div>
    </li>`).join("");m.innerHTML=e}}const T=document.querySelector(".form-js"),U=document.querySelector(".pagination-numbers");T.addEventListener("submit",G);async function G(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;let{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),i=s.toLocaleLowerCase().replaceAll(" ","");i==="bodyparts"&&(i="bodypart");const a={[i]:e,page:1,limit:10};try{const r=await o.getByFilterCategory(a);r.results.length||c.info("Nothing was found for this query"),U.innerHTML="";const{totalPages:n}=r;h(n,a),u(1),T.reset(),v(r)}catch(r){console.log(r)}}const q=document.querySelector("#subscribe-form"),p=q.querySelector("#email");q.addEventListener("submit",J);async function J(t){t.preventDefault();const{value:e}=p;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){c.info("Enter the following sample email - 'test@gmail.com'"),p.value="";return}try{const i=await o.addSubscription({email:e});c.success(i.message)}catch(i){console.log(i)}finally{p.value=""}}
//# sourceMappingURL=commonHelpers2.js.map
