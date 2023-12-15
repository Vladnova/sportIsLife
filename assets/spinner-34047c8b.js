var O=Object.defineProperty;var $=(t,e,s)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var w=(t,e,s)=>($(t,typeof e!="symbol"?e+"":e,s),s);import{g as R,a as F,i as U,b as j,G as h,s as J,c as K,S as D}from"./vendor-938032cf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const E=document.getElementById("home"),x=document.getElementById("favorites"),S=document.getElementById("home-text"),_=document.getElementById("favorites-text");document.getElementById("navigation");const z=window.location.href.toString();let k=z.slice(-10);const G=()=>{console.log(k),k==="index.html"?(E.classList.add("active"),S.classList.add("black"),x.classList.remove("active"),_.classList.remove("black")):(E.classList.remove("active"),S.classList.remove("black"),x.classList.add("active"),_.classList.add("black"))};G();const Y=document.getElementById("burger-button"),b=document.getElementById("burger"),Q=document.getElementById("burger-button-close"),W=async()=>{b.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},V=async t=>{b.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},X=t=>{t.key==="Escape"&&b.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};Y.addEventListener("click",W);Q.addEventListener("click",V);document.addEventListener("keydown",X);const Z={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},ee=R().length?F():U(Z),I=j(ee),te=new h,m=document.getElementById("sign-in"),g=document.getElementById("sign-out"),L=document.getElementById("user");L.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(g.classList.remove("display-none"),m.classList.add("display-none"));const se=async()=>{await J(I,te).then(t=>{h.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,L.innerHTML=s.email,g.classList.remove("display-none"),m.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=h.credentialFromError(t);console.log(e)})},ne=async()=>{await K(I).then(()=>{L.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),g.classList.add("display-none"),m.classList.remove("display-none")};m.addEventListener("click",se);g.addEventListener("click",ne);const ae=document.querySelector(".modal-js");ae.addEventListener("click",ce);class ie{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.handleEscapeKey(e),this.overlayClickHandler=e=>this.handleOverlayClick(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),document.querySelector(".modal-button-close").addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.modal.classList.add("visually-hidden"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}handleEscapeKey(e){e.key==="Escape"&&this.close()}handleOverlayClick(e){e.target===this.overlay&&this.close()}}const oe=new ie,re=`<div class="modal-get-raiting">
    <button class="modal-button-close" id="button-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <use href="./img/icons.svg#icon-close" />
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <p class="rating-modal">4.0 riting ****</p>
      </div>
      <form class="form raiting-form">
        <label class="raiting-form-field">
          <input
            type="Email"
            class="raiting-form-field-input"
            name="user_email"
            placeholder="Email"
            required
          />
        </label>
        <label class="form-comment">
          <textarea
            class="raiting-form-field-comment"
            name="user_comment"
            placeholder="Your comment"
          ></textarea>
        </label>
        <button class="raiting-form-submit">Send</button>
      </form>
    </div>
  </div>`;function ce(t){oe.open(re)}const i=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/quote`))()}async getByFilterName(e){return await i.handleErrors(async()=>{const a=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await i.handleErrors(async()=>{const a=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await i.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await i.fetchJson(`${i.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await i.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await i.fetchJson(`${i.BASE_URL}/subscription`,a)})()}};let d=i;w(d,"BASE_URL","https://your-energy.b.goit.study/api");const p=new d,y=document.querySelector(".pagination-numbers"),le=document.querySelector(".muscles-list"),f=document.getElementById("next-button"),v=document.getElementById("prev-button");let de=5,u=1;try{y.addEventListener("click",ue),y.addEventListener("click",M)}catch(t){console.log(t)}async function ue(t){const{totalPages:e,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),a={filter:s,page:t.target.textContent,limit:12,totalPages:e},o=(await p.getByFilterName(a)).results;le.innerHTML=H(o),u=a.page,pe()}const me=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),y.appendChild(e)};function ge(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)me(e)}function pe(t){c(),v.addEventListener("click",()=>{c()}),f.addEventListener("click",()=>{c()}),document.querySelectorAll(".pagination-number").forEach(e=>{Number(e.getAttribute("page-index"))&&e.addEventListener("click",()=>{c()})})}function c(t){M(),he()}function M(){document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))==u&&t.classList.add("active")})}const B=t=>{t.classList.add("disabled"),t.setAttribute("disabled",!0)},N=t=>{t&&(t.classList.remove("disabled"),t.removeAttribute("disabled"))},he=()=>{u===1?B(v):N(v),de===u?B(f):N(f)},ye=document.querySelector(".wrap-button"),A=document.querySelector(".muscles-list"),fe=document.querySelector(".pagination-numbers");ye.addEventListener("click",ve);document.addEventListener("DOMContentLoaded",()=>{q({filter:"Muscles",page:1,limit:12})});async function ve(t){t.preventDefault();const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const a=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(r=>{r.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:a,page:1,limit:12};A.innerHTML="",q(n)}async function q(t){try{const e=await p.getByFilterName(t),s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}A.insertAdjacentHTML("beforeend",H(s));const{totalPages:a}=e,n=JSON.stringify({totalPages:a,categoryName:t.filter});localStorage.setItem("infoRequest",n),fe.innerHTML="",ge(),c(1)}catch(e){console.log(e.message)}}function H(t){return t.map(({filter:s,name:a,imgURL:n})=>`
        <li class="muscles-item"  data-name=${a} data-filter=${s.toLocaleLowerCase().replaceAll(" ","")}>
        <a href="" class="muscles-link class="muscles-box-menu"">
        <img class="muscles-image" src="${n}" alt="${a}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${a}</p>
            </div>
            </a>
           </li>
          `).join("")}function be(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","img/icons.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}be();const l=document.querySelector(".filter-list-js");document.querySelector(".exercises_list");l.addEventListener("click",Le);async function Le(t){t.preventDefault();const{target:e}=t;let s,a;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.dataset.name),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.parentNode.dataset.name);const n={[s]:[a],keyword:"pull",page:1,limit:10};l.innerHTML="",document.querySelector(".muscles-section").classList.remove("muscles-section"),l.classList.remove("muscles-list"),l.classList.add("exercises_list");const o=await p.getByFilterCategory(n);l.insertAdjacentHTML("beforeend",we(o))}catch(n){console.log(n.message)}}function we(t){if(t.results.length)return t.results.map(({_id:s,target:a,rating:n})=>(console.log(s),`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${a}</div>
          <p class="exercises_rating">${n}.0</p>
          <div class="exercises_list_item_icon_star">
            <svg class="exercises_list_item_icon_svg_star" width="18px" height="18px">
              <use xlink:href="./img/icons.svg#icon-star" fill=""></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right">
          <button class="exercises_btn_start">
            <p class="exercises_btn_start_text">start</p>
            <svg class="exercises_btn_start_icon" width="56px" height="18px">
              <use xlink:href="../img/icons.svg#icon-arrow"></use>
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24px" height="24px">
            <use xlink:href="./img/icons.svg#icon-running-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title">Air bike</h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>312 / 3 min</span>
            </p>
          </li>`)).join("");{const e="<p>Sorry</p>";return console.log("sorry"),e}}const T=document.querySelector("#subscribe-form"),C=T.querySelector("#email"),Ee=t=>{t.preventDefault();const{value:e}=C;p.addSubscription({email:e}).then(()=>{C.value=""})};T.addEventListener("submit",Ee);const P=document.createElement("div");P.id="spinner-container";document.body.appendChild(P);const xe={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new D(xe);
//# sourceMappingURL=spinner-34047c8b.js.map
