var P=Object.defineProperty;var T=(t,e,s)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var v=(t,e,s)=>(T(t,typeof e!="symbol"?e+"":e,s),s);import{g as O,a as R,i as U,b as j,G as u,s as F,c as J,S as K}from"./vendor-938032cf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const D=document.querySelector(".modal-js");D.addEventListener("click",Q);class z{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.handleEscapeKey(e),this.overlayClickHandler=e=>this.handleOverlayClick(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),document.querySelector(".modal-button-close").addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.modal.classList.add("visually-hidden"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}handleEscapeKey(e){e.key==="Escape"&&this.close()}handleOverlayClick(e){e.target===this.overlay&&this.close()}}const Y=new z,G=`<div class="modal-get-raiting">
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
  </div>`;function Q(t){Y.open(G)}const W={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},V=O().length?R():U(W),x=j(V),X=new u,h=document.getElementById("sign-in"),y=document.getElementById("sign-out"),f=document.getElementById("user");f.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(y.classList.remove("display-none"),h.classList.add("display-none"));const Z=async()=>{await F(x,X).then(t=>{u.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,f.innerHTML=s.email}).catch(t=>{t.message,t.customData.email;const e=u.credentialFromError(t);console.log(e)})},_=async()=>{await J(x).then(()=>{f.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),y.classList.add("display-none"),h.classList.remove("display-none")};h.addEventListener("click",Z);y.addEventListener("click",_);const ee=document.getElementById("burger-button"),I=document.getElementById("burger"),te=document.getElementById("burger-button-close"),se=async()=>{I.classList.remove("visually-hidden")},ne=async()=>{I.classList.add("visually-hidden")};ee.addEventListener("click",se);te.addEventListener("click",ne);const b=document.getElementById("home"),L=document.getElementById("favorites"),w=document.getElementById("home-text"),E=document.getElementById("favorites-text");document.getElementById("navigation");const oe=window.location.href.toString();let ae=oe.slice(-10);const re=()=>{ae==="index.html"?(b.classList.add("active"),w.classList.add("black"),L.classList.remove("active"),E.classList.remove("black")):(b.classList.remove("active"),w.classList.remove("black"),L.classList.add("active"),E.classList.add("black"))};re();const o=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/quote`))()}async getByFilterName(e){return await o.handleErrors(async()=>{const a=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await o.handleErrors(async()=>{const a=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await o.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await o.fetchJson(`${o.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await o.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await o.fetchJson(`${o.BASE_URL}/subscription`,a)})()}};let i=o;v(i,"BASE_URL","https://your-energy.b.goit.study/api");const C=new i,ce=document.querySelector(".wrap-button"),ie=document.querySelector(".muscles-list"),le=document.querySelector("#Muscles");ce.addEventListener("click",q);async function q(t){t.preventDefault();const e=t.target,s=e.textContent;le.classList.remove("btn-filter-active"),e.classList.contains("btn-filter")&&document.querySelectorAll(".wrap-list-btn").forEach(r=>{r.classList.remove("btn-filter-active")}),e.parentNode.classList.add("btn-filter-active");const a={filter:s,page:1,limit:12};ie.innerHTML="",N(a)}const m=document.querySelector(".pagination-numbers"),de=document.querySelector(".muscles-list"),g=document.getElementById("next-button"),p=document.getElementById("prev-button");let ue=5,l=1;try{m.addEventListener("click",me),m.addEventListener("click",A)}catch(t){console.log(t)}async function me(t){const e={bodypart:"Muscles",page:t.target.textContent,limit:12,totalPages:5},s=await C.getByFilterName(e),a=s.results;de.innerHTML=$(a),l=e.page,he(),console.log("filter-->",s)}const ge=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),m.appendChild(e)};function pe(t){for(let e=1;e<=t;e++)ge(e)}function he(t){c(),p.addEventListener("click",()=>{c()}),g.addEventListener("click",()=>{c()}),document.querySelectorAll(".pagination-number").forEach(e=>{Number(e.getAttribute("page-index"))&&e.addEventListener("click",()=>{c()})})}function c(t){A(),ye()}function A(){document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))==l&&t.classList.add("active")})}const S=t=>{t.classList.add("disabled"),t.setAttribute("disabled",!0)},B=t=>{t.classList.remove("disabled"),t.removeAttribute("disabled")},ye=()=>{l===1?S(p):B(p),ue===l?S(g):B(g)},fe=document.querySelector(".muscles-list"),k=document.querySelector("#Muscles"),M=document.querySelector("#Body parts"),ve=document.querySelector("#Equipment");q();document.addEventListener("DOMContentLoaded",()=>{N({filter:"Muscles",page:1,limit:12})});const be=5;async function N(t){try{const e=await C.getByFilterName(t);console.log("filter-->",e);const s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}fe.insertAdjacentHTML("beforeend",$(s)),t.filter==="Muscles"?k.classList.add("btn-filter-active"):t.filter==="Body parts"?(k.classList.remove("btn-filter-active"),M.classList.add("btn-filter-active")):t.filter==="Equipment"&&(M.classList.remove("btn-filter-active"),ve.classList.add("btn-filter-active")),c(1)}catch(e){console.log(e.message)}}pe(be);function $(t){return t.map(({_id:s,filter:a,name:n,imgURL:r})=>`
        <li class="muscles-item" id="${s}">
        <a href="" class="muscles-link" id="${s}">
        <img class="muscles-image" src="${r}" alt="${n}" id="${s}">
          <!-- box-menu -->
          <div class="muscles-box-menu">
             <h3 class="muscles-small-title" id="${s}">${a}</h3>
             <p class="muscles-text" id="${s}">${n}</p>
              </div>
           <!-- box-menu -->
            </a>
           </li>
          `).join("")}const Le=document.querySelector(".exercises-list");console.log(Le);function we(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","img/icons.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}we();const H=document.createElement("div");H.id="spinner-container";document.body.appendChild(H);const Ee={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new K(Ee);
//# sourceMappingURL=spinner-4799ee33.js.map