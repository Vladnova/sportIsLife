var $=Object.defineProperty;var O=(t,e,s)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var E=(t,e,s)=>(O(t,typeof e!="symbol"?e+"":e,s),s);import{g as R,a as j,i as F,b as U,G as g,s as J,c as K,S as D}from"./vendor-938032cf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const x=document.getElementById("home"),_=document.getElementById("favorites"),k=document.getElementById("home-text"),S=document.getElementById("favorites-text");document.getElementById("navigation");const z=window.location.href.toString();let B=z.slice(-10);const G=()=>{console.log(B),B==="index.html"?(x.classList.add("active"),k.classList.add("black"),_.classList.remove("active"),S.classList.remove("black")):(x.classList.remove("active"),k.classList.remove("black"),_.classList.add("active"),S.classList.add("black"))};G();const Y=document.getElementById("burger-button"),b=document.getElementById("burger"),Q=document.getElementById("burger-button-close"),W=async()=>{b.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},V=async t=>{b.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},X=t=>{t.key==="Escape"&&b.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};Y.addEventListener("click",W);Q.addEventListener("click",V);document.addEventListener("keydown",X);const Z={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},ee=R().length?j():F(Z),I=U(ee),te=new g,u=document.getElementById("sign-in"),m=document.getElementById("sign-out"),L=document.getElementById("user");L.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(m.classList.remove("display-none"),u.classList.add("display-none"));const se=async()=>{await J(I,te).then(t=>{g.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,L.innerHTML=s.email,m.classList.remove("display-none"),u.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=g.credentialFromError(t);console.log(e)})},ne=async()=>{await K(I).then(()=>{L.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),m.classList.add("display-none"),u.classList.remove("display-none")};u.addEventListener("click",se);m.addEventListener("click",ne);const ie=document.querySelector(".modal-js");ie.addEventListener("click",ce);class oe{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.handleEscapeKey(e),this.overlayClickHandler=e=>this.handleOverlayClick(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),document.querySelector(".modal-button-close").addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.modal.classList.add("visually-hidden"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}handleEscapeKey(e){e.key==="Escape"&&this.close()}handleOverlayClick(e){e.target===this.overlay&&this.close()}}const ae=new oe,re=`<div class="modal-get-raiting">
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
  </div>`;function ce(t){ae.open(re)}const o=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/quote`))()}async getByFilterName(e){return await o.handleErrors(async()=>{const i=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/filters?${i}`)})()}async getByFilterCategory(e){return await o.handleErrors(async()=>{const i=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/exercises?${i}`)})()}async getOneExercises(e){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await o.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await o.fetchJson(`${o.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await o.handleErrors(async()=>{const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await o.fetchJson(`${o.BASE_URL}/subscription`,i)})()}};let l=o;E(l,"BASE_URL","https://your-energy.b.goit.study/api");const w=new l,h=document.querySelector(".pagination-numbers"),le=document.querySelector(".muscles-list"),y=document.getElementById("next-button"),f=document.getElementById("prev-button");let de=5,d=1;try{h.addEventListener("click",ue),h.addEventListener("click",A)}catch(t){console.log(t)}async function ue(t){const e={bodypart:"Muscles",page:t.target.textContent,limit:12,totalPages:5},s=await w.getByFilterName(e),i=s.results;le.innerHTML=P(i),d=e.page,ge(),console.log("filter-->",s)}const me=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),h.appendChild(e)};function pe(t){for(let e=1;e<=t;e++)me(e)}function ge(t){r(),f.addEventListener("click",()=>{r()}),y.addEventListener("click",()=>{r()}),document.querySelectorAll(".pagination-number").forEach(e=>{Number(e.getAttribute("page-index"))&&e.addEventListener("click",()=>{r()})})}function r(t){A(),he()}function A(){document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))==d&&t.classList.add("active")})}const N=t=>{t.classList.add("disabled"),t.setAttribute("disabled",!0)},M=t=>{t.classList.remove("disabled"),t.removeAttribute("disabled")},he=()=>{d===1?N(f):M(f),de===d?N(y):M(y)},ye=document.querySelector(".wrap-button"),q=document.querySelector(".muscles-list"),v=document.querySelector("#Muscles"),C=document.querySelector("#Body parts"),fe=document.querySelector("#Equipment");ye.addEventListener("click",be);document.addEventListener("DOMContentLoaded",()=>{H({filter:"Muscles",page:1,limit:12})});const ve=5;async function be(t){t.preventDefault();const e=t.target,s=e.dataset.name;console.log(s),v.classList.remove("btn-filter-active"),e.classList.contains("btn-filter")&&document.querySelectorAll(".wrap-list-btn").forEach(a=>{a.classList.remove("btn-filter-active")}),e.parentNode.classList.add("btn-filter-active");const i={filter:s,page:1,limit:12};q.innerHTML="",H(i)}async function H(t){try{const e=await w.getByFilterName(t);console.log("filter-->",e);const s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}t.filter==="Muscles"?v.classList.add("btn-filter-active"):t.filter==="Body parts"?(v.classList.remove("btn-filter-active"),C.classList.add("btn-filter-active")):t.filter==="Equipment"&&(C.classList.remove("btn-filter-active"),fe.classList.add("btn-filter-active")),q.insertAdjacentHTML("beforeend",P(s)),r(1)}catch(e){console.log(e.message)}}pe(ve);function P(t){return t.map(({filter:s,name:i,imgURL:n})=>`
        <li class="muscles-item"  data-name=${i} data-filter=${s.toLocaleLowerCase().replaceAll(" ","")}>
        <a href="" class="muscles-link class="muscles-box-menu"">
        <img class="muscles-image" src="${n}" alt="${i}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${i}</p>
            </div>
          <!-- box-menu -->
            </a>
           </li>
          `).join("")}function Le(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","img/icons.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}Le();const c=document.querySelector(".filter-list-js");document.querySelector(".exercises_list");c.addEventListener("click",we);async function we(t){t.preventDefault();const{target:e}=t;let s,i;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,i=e.parentNode.parentNode.dataset.name),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,i=e.parentNode.parentNode.parentNode.dataset.name);const n={[s]:[i],keyword:"pull",page:1,limit:10};c.innerHTML="",document.querySelector(".muscles-section").classList.remove("muscles-section"),c.classList.remove("muscles-list"),c.classList.add("exercises_list");const a=await w.getByFilterCategory(n);c.insertAdjacentHTML("beforeend",Ee(a))}catch(n){console.log(n.message)}}function Ee(t){if(t.results.length)return t.results.map(({_id:s,target:i,rating:n})=>(console.log(s),`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${i}</div>
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
          </li>`)).join("");{const e="<p>Sorry</p>";return console.log("sorry"),e}}const T=document.createElement("div");T.id="spinner-container";document.body.appendChild(T);const xe={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new D(xe);
//# sourceMappingURL=spinner-5fb858f1.js.map
