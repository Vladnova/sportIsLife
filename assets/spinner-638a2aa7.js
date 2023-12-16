var U=Object.defineProperty;var J=(t,e,s)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var y=(t,e,s)=>(J(t,typeof e!="symbol"?e+"":e,s),s);import{g as D,a as z,i as Q,b as K,G as b,s as G,c as W,d,S as X}from"./vendor-c6a8d4ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const N=document.getElementById("home"),B=document.getElementById("favorites"),q=document.getElementById("home-text"),$=document.getElementById("favorites-text");document.getElementById("navigation");const Y=window.location.href.toString();let Z=Y.slice(-10);const V=()=>{Z==="index.html"?(N.classList.add("active"),q.classList.add("black"),B.classList.remove("active"),$.classList.remove("black")):(N.classList.remove("active"),q.classList.remove("black"),B.classList.add("active"),$.classList.add("black"))};V();const ee=document.getElementById("burger-button"),S=document.getElementById("burger"),te=document.getElementById("burger-button-close"),se=async()=>{document.getElementById("header").classList.remove("container"),S.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},oe=async t=>{document.getElementById("header").classList.add("container"),S.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},ne=t=>{t.key==="Escape"&&S.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};ee.addEventListener("click",se);te.addEventListener("click",oe);document.addEventListener("keydown",ne);const ae={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},ie=D().length?z():Q(ae),C=K(ie),re=new b,p=document.getElementById("sign-in"),h=document.getElementById("sign-out"),x=document.getElementById("user");x.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(h.classList.remove("display-none"),p.classList.add("display-none"));const le=async()=>{await G(C,re).then(t=>{b.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,x.innerHTML=s.email,h.classList.remove("display-none"),p.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=b.credentialFromError(t);console.log(e)})},ce=async()=>{await W(C).then(()=>{x.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),h.classList.add("display-none"),p.classList.remove("display-none")};p.addEventListener("click",le);h.addEventListener("click",ce);const i=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/quote`))()}async getByFilterName(e){return await i.handleErrors(async()=>{const o=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/filters?${o}`)})()}async getByFilterCategory(e){return await i.handleErrors(async()=>{const o=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/exercises?${o}`)})()}async getOneExercises(e){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await i.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await i.fetchJson(`${i.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await i.handleErrors(async()=>{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await i.fetchJson(`${i.BASE_URL}/subscription`,o)})()}};let u=i;y(u,"BASE_URL","https://your-energy.b.goit.study/api");const c=new u,m=document.querySelector(".filter-list-js");m.addEventListener("click",de);async function de(t){t.preventDefault(),document.querySelector(".form-js").classList.remove("hidden-form");const{target:e}=t;let s,o;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,o=e.alt,console.log(e.alt)),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,o=e.parentNode.parentNode.dataset.alt,console.log(`----->${o}`));const n={[s]:[o],keyword:"pull",page:1,limit:10},a=await c.getByFilterCategory(n);a!=null&&a.results.length?(m.classList.add("exercises_list"),m.classList.remove("muscles-list"),T(a)):alert("Oops. please, try other category this list empty :)")}catch(n){console.log(n.message)}}function T(t){if(t.results.length){const e=t.results.map(({_id:s,target:o,rating:n,name:a,burnedCalories:r,time:k})=>(console.log(o),`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${o}</div>
          <p class="exercises_rating">${n.toFixed(1)}</p>
          <div class="rating-container">
            <span class="star selected">&#9733;</span>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${s}>Start
           
            <svg class="exercises_btn_start_icon" width="56px" height="18px">
              <use xlink:href="./img/svg/sprite.svg#icon-arrow"></use>
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24px" height="24px">
            <use xlink:href="./img/svg/sprite.svg#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${a.toString().length>20?a.slice(0,20)+"...":a} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${r||""} / ${k||"your wish"} min</span>
            </p>
          </li>
        </ul>
        </div>
    </li>`)).join("");m.innerHTML=e}}const A=document.querySelector(".form-js");A.addEventListener("submit",ue);async function ue(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),n={[s.toLocaleLowerCase().replaceAll(" ","")]:e,keyword:"pull",page:1,limit:10},a=await c.getByFilterCategory(n);A.reset(),T(a)}console.log("test2");function me(t){const e=(t%1).toFixed(1)*100;let s='<div class="rating-container" data-rating="0">';for(let o=1;o<=t+1;o+=1)o<=t?s+=`<span class="star-js selected" data-value="${o}">&#9733;</span>`:e>0&&(s+=`<span class="star-js last-star-js" style="
                    background: linear-gradient(
                      to right,
                      var(--stars-background-active-color) ${e}%,
                      rgba(244, 244, 244, 0.2) ${100-e}%
                    );
                    display: inline-block;
                    background-clip: text;
                  " data-value="${o}">&#9733;</span>`);for(let o=t+1;o<=5;o+=1)s+=`<span class="star-js" data-value="${o}">&#9733;</span>`;return s+"</div>"}function ge(t){return`<div class="modal-info" data-id="${t._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="./img/svg/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img class="modal-img" src="${t.gifUrl}" alt="${t.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${t.name}</h3>
        <div class="rating-modal-container-wrapper"><p>${t.rating.toFixed(1)}</p>${me(t.rating)}</div>
      </div>
      <hr class="modal-decoration-line" />
      <ul class="modal-table">
        <li>
          <h4 class="title-collum">Target</h4>
          <p class="data-collumn">${t.target}</p>
        </li>
        <li>
          <h4 class="title-collum">Body Part</h4>
          <p class="data-collumn">${t.bodyPart}</p>
        </li>
        <li>
          <h4 class="title-collum">Equipment</h4>
          <p class="data-collumn">${t.equipment}</p>
        </li>
        <li>
          <h4 class="title-collum">Popular</h4>
          <p class="data-collumn">${t.popularity}</p>
        </li>
        <li>
          <h4 class="title-collum">Burned Calories</h4>
          <p class="data-collumn">${t.burnedCalories}/${t.time} min</p>
        </li>
      </ul>
      <hr class="modal-decoration-line" />
      <p class="about-exercise">
        ${t.description}
      </p>
      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="false">
          <button class="add-favorite-js" type="button">
            <span>Add to favorites</span>
            <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
              <use href="./img/svg/sprite.svg#icon-heart"></use>
            </svg>
          </button>
        </div>
        <button class="add-rating" type="button">Give a rating</button>
      </div>`}const l=class{open(){(!l.loaderEl||l.loaderEl.classList.contains("js-loader"))&&(l.loaderEl.style.display="block")}close(){l.loaderEl&&(l.loaderEl.style.display="none")}};let f=l;y(f,"loaderEl",document.querySelector(".js-loader"));class pe{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const he=new pe,ye=document.querySelector(".filter-list-js");let I="";const fe=async t=>{const{target:e}=t;if(console.log(e),e.nodeName==="BUTTON"&&e.nodeName==="BUTTON")return I=e.dataset.id,ve(I)};ye.addEventListener("click",fe);const ve=async t=>{console.log("1");let e=await c.getOneExercises(t);e.favotite=!1,he.open(ge(e))};d.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class be{error(e){d.error({title:"Error",message:e})}success(e){d.success({title:"OK",message:e})}info(e){d.info({title:"Info",message:e})}}const _=new be,O=document.querySelector("#subscribe-form"),v=O.querySelector("#email");O.addEventListener("submit",Le);async function Le(t){t.preventDefault();const{value:e}=v;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){_.info("Enter the following sample email - 'test@gmail.com'"),v.value="";return}try{const o=await c.addSubscription({email:e});_.success(o.message)}catch(o){console.log(o)}finally{v.value=""}}const L=document.querySelector(".pagination-numbers"),we=document.querySelector(".muscles-list");let w=1;try{L.addEventListener("click",Ee),L.addEventListener("click",H)}catch(t){console.log(t)}async function Ee(t){const{totalPages:e,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),o={filter:s,page:t.target.textContent,limit:12,totalPages:e};if(o.page===w)return;const a=(await c.getByFilterName(o)).results;we.innerHTML=R(a),w=o.page,ke()}const Se=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),L.appendChild(e)};function xe(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)Se(e)}function ke(t){E(),document.querySelectorAll(".pagination-number").forEach(e=>{Number(e.getAttribute("page-index"))&&e.addEventListener("click",()=>{E()})})}function E(t){H(),handlePageButtonsStatus()}function H(){document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))==w&&t.classList.add("active")})}const Ne=document.querySelector(".wrap-button"),P=document.querySelector(".muscles-list"),Be=document.querySelector(".pagination-numbers");Ne.addEventListener("click",qe);document.addEventListener("DOMContentLoaded",()=>{j({filter:"Muscles",page:1,limit:12})});async function qe(t){t.preventDefault();const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const o=e.dataset.name;console.log(e.classList),e.classList.contains("btn-filter")&&[...s.children].forEach(r=>{r.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active"),console.log(`------>${o}`);const n={filter:o,page:1,limit:12};P.innerHTML="",j(n)}async function j(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await c.getByFilterName(t),s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}P.insertAdjacentHTML("beforeend",R(s));const{totalPages:o}=e,n=JSON.stringify({totalPages:o,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),Be.innerHTML="",xe(),E(1)}catch(e){console.log(e.message)}}function R(t){return t.map(({filter:s,name:o,imgURL:n})=>{console.log(o);let a=s.toLocaleLowerCase().replaceAll(" ","");return o.includes(" ")&&console.log(" -----> я куку"),a==="bodyparts"&&(a="bodypart"),`
        <li class="muscles-item"  alt=${o} data-filter=${a}>
        <a href="" class="muscles-link" data-alt="${o}">
        <img class="muscles-image" src="${n}" alt="${o}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${o}</p>
            </div>
            </a>
           </li>
          `}).join("")}const g={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",$e);async function $e(){const t=localStorage.getItem("quote");if(t){const e=new Date().toDateString(),{date:s,quote:o,author:n}=JSON.parse(t);e!==s?M():(g.quoteText.innerHTML=o,g.quoteAuthor.innerHTML=n)}else M()}async function M(){const t=await c.getQuotes(),{author:e,quote:s}=t,o={author:e,quote:s,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(o)),g.quoteText.innerHTML=s,g.quoteAuthor.innerHTML=e}function Ie(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","/img/svg/sprite.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}Ie();const F=document.createElement("div");F.id="spinner-container";document.body.appendChild(F);const _e={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new X(_e);
//# sourceMappingURL=spinner-638a2aa7.js.map
