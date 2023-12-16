var C=Object.defineProperty;var H=(t,e,s)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var y=(t,e,s)=>(H(t,typeof e!="symbol"?e+"":e,s),s);import{g as A,a as F,i as U,b as P,G as E,s as J,c as z,d as p}from"./vendor-c6a8d4ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const S=document.getElementById("home"),B=document.getElementById("favorites"),$=document.getElementById("home-text"),k=document.getElementById("favorites-text");document.getElementById("navigation");const D=window.location.href.toString();let K=D.slice(-13);const G=()=>{K==="favorite.html"?(S.classList.remove("active"),$.classList.remove("black"),B.classList.add("active"),k.classList.add("black")):(S.classList.add("active"),$.classList.add("black"),B.classList.remove("active"),k.classList.remove("black"))};G();const Y=document.getElementById("burger-button"),L=document.getElementById("burger"),Q=document.getElementById("burger-button-close"),W=async()=>{document.getElementById("header").classList.remove("container"),L.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},X=async t=>{document.getElementById("header").classList.add("container"),L.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},V=t=>{t.key==="Escape"&&L.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};Y.addEventListener("click",W);Q.addEventListener("click",X);document.addEventListener("keydown",V);const Z={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},_=A().length?F():U(Z),N=P(_),ee=new E,f=document.getElementById("sign-in"),h=document.getElementById("sign-out"),w=document.getElementById("user");w.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(h.classList.remove("display-none"),f.classList.add("display-none"));const te=async()=>{await J(N,ee).then(t=>{E.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,w.innerHTML=s.email,h.classList.remove("display-none"),f.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=E.credentialFromError(t);console.log(e)})},se=async()=>{await z(N).then(()=>{w.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),h.classList.add("display-none"),f.classList.remove("display-none")};f.addEventListener("click",te);h.addEventListener("click",se);const d="/sportIsLife/assets/sprite-ffba578a.svg";function ae(t){const e=(t%1).toFixed(1)*100;let s='<div class="rating-container" data-rating="0">';for(let a=1;a<=t+1;a+=1)a<=t?s+=`<span class="star-js selected" data-value="${a}">&#9733;</span>`:e>0&&(s+=`<span class="star-js last-star-js" style="
                    background: linear-gradient(
                      to right,
                      var(--stars-background-active-color) ${e}%,
                      rgba(244, 244, 244, 0.2) ${100-e}%
                    );
                    display: inline-block;
                    background-clip: text;
                  " data-value="${a}">&#9733;</span>`);for(let a=t+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}">&#9733;</span>`;return s+"</div>"}function oe(t){return t?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${d}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${d}#icon-heart"></use>
                </svg>
              </button>`}function R(t){return`<div class="modal-info" data-id="${t._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${d}#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img class="modal-img" src="${t.gifUrl}" alt="${t.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${t.name}</h3>
        <div class="rating-modal-container-wrapper"><p>${t.rating.toFixed(1)}</p>${ae(t.rating)}</div>
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
        <div class="refresh-button-js" data-favorite="${t.favorite}">
          ${oe(t.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`}function ne(t){return`<div class="modal-get-raiting" data-id="${t}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${d}#icon-close"></use>
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <div class="rating-container-js" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          <span class="star-js" data-value="1">&#9733;</span>
          <span class="star-js" data-value="2">&#9733;</span>
          <span class="star-js" data-value="3">&#9733;</span>
          <span class="star-js" data-value="4">&#9733;</span>
          <span class="star-js" data-value="5">&#9733;</span>
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
        <button class="raiting-form-submit" type="submit">Send</button>
      </form>
    </div>
  </div>`}const n=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await n.handleErrors(async()=>await n.fetchJson(`${n.BASE_URL}/quote`))()}async getByFilterName(e){return await n.handleErrors(async()=>{const a=new URLSearchParams({...e});return await n.fetchJson(`${n.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await n.handleErrors(async()=>{const a=new URLSearchParams({...e});return await n.fetchJson(`${n.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await n.handleErrors(async()=>await n.fetchJson(`${n.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await n.handleErrors(async()=>{const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await n.fetchJson(`${n.BASE_URL}/exercises/${e}/rating`,o)})()}async addSubscription(e){return await n.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await n.fetchJson(`${n.BASE_URL}/subscription`,a)})()}};let g=n;y(g,"BASE_URL","https://your-energy.b.goit.study/api");const v=new g,c=class{open(){console.log("loader ------>open"),(!c.loaderEl||c.loaderEl.classList.contains("js-loader"))&&(c.loaderEl.style.display="block")}close(){c.loaderEl&&(c.loaderEl.style.display="none"),console.log("loader ------>close")}};let b=c;y(b,"loaderEl",document.querySelector(".js-loader"));class ie{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=3,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const m=new ie,re=document.querySelector(".filter-list-js");let I="";const le=async t=>{const{target:e}=t;if(e.nodeName==="BUTTON"&&e.nodeName==="BUTTON")return I=e.dataset.id,ce(I)};re.addEventListener("click",le);const ce=async t=>{let e=await v.getOneExercises(t);e.favotite=!1,m.open(R(e))};function de(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${d}#icon-arrow`),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}de();function ue(){const t=document.querySelector(".rating-container-js"),e=t.querySelectorAll(".star-js");let s=t.querySelector(".user-rating-js");e.forEach((r,l)=>{r.addEventListener("mouseover",()=>a(l)),r.addEventListener("mouseout",o),r.addEventListener("click",()=>i(l+1))});function a(r){o();for(let l=0;l<=r;l++)e[l].classList.add("hovered"),s.textContent=`${l+1}`}function o(){e.forEach(r=>{const l=t.dataset.rating;r.classList.remove("hovered"),s.textContent=`${l||0}`})}function i(r){t.setAttribute("data-rating",r),e.forEach((l,T)=>{T+1<=r?l.classList.add("selected"):l.classList.remove("selected")})}}const u=[];function me(t){u.push(t),localStorage.setItem("favorites",JSON.stringify(u))}const pe=t=>{const e=u.find(({_id:s})=>s===t);u.splice(u.indexOf(e),1),localStorage.setItem("favorites",JSON.stringify([...u.filter(s=>s._id!==t)]))};p.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class ge{error(e){p.error({title:"Error",message:e})}success(e){p.success({title:"OK",message:e})}info(e){p.info({title:"Info",message:e})}}const j=new ge,fe=document.querySelector(".filter-list-js");let x="",q,O,M;async function he(t){t.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,o=document.querySelector(".raiting-form-field-input").value,i=document.querySelector(".raiting-form-field-comment").value,r={rate:Number(a),email:o,review:i},l=await v.addExercisesRate(e,r);l.message?j.error(`${l.message}`):(j.success(`Thank you for your mark - ${r.rate} for ${l.name}`),m.close())}async function ve(){const t=document.querySelector(".modal-info").dataset.id;m.close(),m.open(ne(t)),ue(),M=document.querySelector(".raiting-form"),M.addEventListener("submit",he)}async function ye(t){const e=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;if(e.dataset.favorite==="false"){e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${d}#icon-trash"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="true";let a=await v.getOneExercises(s);me(a)}else e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${d}#icon-heart"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="false",pe(s)}function be({target:t}){if(t.nodeName==="BUTTON"||t.nodeName==="svg"||t.nodeName==="use")return x=t.dataset.id,Ee(x)}fe.addEventListener("click",be);const Ee=async t=>{let e=await v.getOneExercises(t);const s=localStorage.getItem("favorites");s!==null&&JSON.parse(s).find(({_id:i})=>i===t)?e.favorite=!0:e.favorite=!1,m.open(R(e)),O=document.querySelector(".refresh-button-js"),q=document.querySelector(".add-rating"),q.addEventListener("click",ve),O.addEventListener("click",ye)};export{v as f,j as m,d as s};
//# sourceMappingURL=exercises-right-part-filter-d841afd2.js.map
