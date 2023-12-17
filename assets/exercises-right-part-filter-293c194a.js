var H=Object.defineProperty;var A=(t,e,s)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var b=(t,e,s)=>(A(t,typeof e!="symbol"?e+"":e,s),s);import{g as U,a as F,i as J,b as P,G as L,s as z,c as D,d as p}from"./vendor-c6a8d4ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const B=document.getElementById("home"),$=document.getElementById("favorites"),k=document.getElementById("home-text"),I=document.getElementById("favorites-text");document.getElementById("navigation");const K=window.location.href.toString();let G=K.slice(-13);const Y=()=>{G==="favorite.html"?(B.classList.remove("active"),k.classList.remove("black"),$.classList.add("active"),I.classList.add("black")):(B.classList.add("active"),k.classList.add("black"),$.classList.remove("active"),I.classList.remove("black"))};Y();const Q=document.getElementById("burger-button"),w=document.getElementById("burger"),W=document.getElementById("burger-button-close"),X=async()=>{document.getElementById("header").classList.remove("container"),w.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},V=async t=>{document.getElementById("header").classList.add("container"),w.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},Z=t=>{t.key==="Escape"&&w.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};Q.addEventListener("click",X);W.addEventListener("click",V);document.addEventListener("keydown",Z);const _={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},ee=U().length?F():J(_),R=P(ee),te=new L,f=document.getElementById("sign-in"),v=document.getElementById("sign-out"),S=document.getElementById("user");S.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(v.classList.remove("display-none"),f.classList.add("display-none"));const se=async()=>{await z(R,te).then(t=>{L.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,S.innerHTML=s.email,v.classList.remove("display-none"),f.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=L.credentialFromError(t);console.log(e)})},ae=async()=>{await D(R).then(()=>{S.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),v.classList.add("display-none"),f.classList.remove("display-none")};f.addEventListener("click",se);v.addEventListener("click",ae);const d="/sportIsLife/assets/sprite-ffba578a.svg";function oe(t){const e=(t%1).toFixed(1)*100;let s='<div class="rating-container" data-rating="0">';for(let a=1;a<=t+1;a+=1)a<=t?s+=`<span class="star-js selected" data-value="${a}">&#9733;</span>`:e>0&&(s+=`<span class="star-js last-star-js" style="
                    background: linear-gradient(
                      to right,
                      var(--stars-background-active-color) ${e}%,
                      rgba(244, 244, 244, 0.2) ${100-e}%
                    );
                    display: inline-block;
                    background-clip: text;
                  " data-value="${a}">&#9733;</span>`);for(let a=t+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}">&#9733;</span>`;return s+"</div>"}function ne(t){return t?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${d}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${d}#icon-heart"></use>
                </svg>
              </button>`}function T(t){return`<div class="modal-info" data-id="${t._id}">
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
        <div class="rating-modal-container-wrapper"><p>${t.rating.toFixed(1)}</p>${oe(t.rating)}</div>
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
          ${ne(t.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`}function re(t){return`<div class="modal-get-raiting" data-id="${t}">
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
  </div>`}const n=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await n.handleErrors(async()=>await n.fetchJson(`${n.BASE_URL}/quote`))()}async getByFilterName(e){return await n.handleErrors(async()=>{const a=new URLSearchParams({...e});return await n.fetchJson(`${n.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await n.handleErrors(async()=>{const a=new URLSearchParams({...e});return await n.fetchJson(`${n.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await n.handleErrors(async()=>await n.fetchJson(`${n.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await n.handleErrors(async()=>{const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await n.fetchJson(`${n.BASE_URL}/exercises/${e}/rating`,o)})()}async addSubscription(e){return await n.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await n.fetchJson(`${n.BASE_URL}/subscription`,a)})()}};let h=n;b(h,"BASE_URL","https://your-energy.b.goit.study/api");const y=new h,c=class{open(){console.log("loader ------>open"),(!c.loaderEl||c.loaderEl.classList.contains("js-loader"))&&(c.loaderEl.style.display="block")}close(){c.loaderEl&&(c.loaderEl.style.display="none"),console.log("loader ------>close")}};let E=c;b(E,"loaderEl",document.querySelector(".js-loader"));class ie{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=3,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const m=new ie,le=document.querySelector(".filter-list-js");let j="";const ce=async t=>{const{target:e}=t;if(e.nodeName==="BUTTON"&&e.nodeName==="BUTTON")return j=e.dataset.id,de(j)};le.addEventListener("click",ce);const de=async t=>{let e=await y.getOneExercises(t);e.favotite=!1,m.open(T(e))};function ue(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${d}#icon-arrow`),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}ue();function me(){const t=document.querySelector(".rating-container-js"),e=t.querySelectorAll(".star-js");let s=t.querySelector(".user-rating-js");e.forEach((i,l)=>{i.addEventListener("mouseover",()=>a(l)),i.addEventListener("mouseout",o),i.addEventListener("click",()=>r(l+1))});function a(i){o();for(let l=0;l<=i;l++)e[l].classList.add("hovered"),s.textContent=`${l+1}`}function o(){e.forEach(i=>{const l=t.dataset.rating;i.classList.remove("hovered"),s.textContent=`${l||0}`})}function r(i){t.setAttribute("data-rating",i),e.forEach((l,C)=>{C+1<=i?l.classList.add("selected"):l.classList.remove("selected")})}}let u=[];const g=JSON.parse(localStorage.getItem("favorites"));g!=null&&g.length&&u.push(...g);function ge(t){u.push(t),localStorage.setItem("favorites",JSON.stringify(u))}const pe=t=>{u=u.filter(e=>e._id!==t),localStorage.setItem("favorites",JSON.stringify([...u]))};p.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class he{error(e){p.error({title:"Error",message:e})}success(e){p.success({title:"OK",message:e})}info(e){p.info({title:"Info",message:e})}}const x=new he,fe=document.querySelector(".filter-list-js");let q="",O,M,N;async function ve(t){t.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,o=document.querySelector(".raiting-form-field-input").value,r=document.querySelector(".raiting-form-field-comment").value,i={rate:Number(a),email:o,review:r},l=await y.addExercisesRate(e,i);l.message?x.error(`${l.message}`):(x.success(`Thank you for your mark - ${i.rate} for ${l.name}`),m.close())}async function ye(){const t=document.querySelector(".modal-info").dataset.id;m.close(),m.open(re(t)),me(),N=document.querySelector(".raiting-form"),N.addEventListener("submit",ve)}async function be(t){const e=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;if(e.dataset.favorite==="false"){e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${d}#icon-trash"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="true";let a=await y.getOneExercises(s);ge(a)}else e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${d}#icon-heart"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="false",pe(s)}function Ee({target:t}){if(t.nodeName==="BUTTON"||t.nodeName==="svg"||t.nodeName==="use")return q=t.dataset.id,Le(q)}fe.addEventListener("click",Ee);const Le=async t=>{let e=await y.getOneExercises(t);const s=localStorage.getItem("favorites");s!==null&&JSON.parse(s).find(({_id:r})=>r===t)?e.favorite=!0:e.favorite=!1,m.open(T(e)),M=document.querySelector(".refresh-button-js"),O=document.querySelector(".add-rating"),O.addEventListener("click",ye),M.addEventListener("click",be)};export{y as f,x as m,d as s};
//# sourceMappingURL=exercises-right-part-filter-293c194a.js.map
