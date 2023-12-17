var z=Object.defineProperty;var K=(t,e,s)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var L=(t,e,s)=>(K(t,typeof e!="symbol"?e+"":e,s),s);import{i as G,g as Y,a as Q,b as W,c as X,d as Z,e as R,s as V,G as S,f as ee,h as te,j as v}from"./vendor-5cb48af9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();function se(){document.querySelector(".filter-list-js").classList.add("hidden-form");const e=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",e.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const c="/sportIsLife/assets/sprite-9db62079.svg",g=(t,e)=>t.length<=e?t:`${t.slice(0,e)}...`;function ae(t){const e=document.querySelector(".filter-list-js");e.classList.remove("hidden-form"),t.length>6&&(e.style.overflowY="scroll");const s=t.map(({_id:a,target:o,name:n,bodyPart:r,burnedCalories:l,time:w})=>`
  <li class="favourites_list_item" id=${a}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${g(o,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${a}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${a}>
            <use class="favourites_btn_trash_icon" href="${c}#icon-trash" data-id=${a}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${a}>
          <p class="favourites_btn_start_text" data-id=${a}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${a}>
            <use href="${c}#icon-arrow" data-id=${a}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${c}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${g(n,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${l}/${w}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${g(r,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${g(o,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");e.innerHTML=s}const oe={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},F=G(oe),x=Y(F),$=Q(F),ie=async t=>{const e=x.currentUser;if(e){const s=t;try{V(R($,e.email,t._id),s),console.log("done")}catch(a){console.log(a.message)}}},ne=async t=>{const e=localStorage.getItem("user");if(e)try{Z(R($,e.email,t)),console.log("delete")}catch(s){console.log(s.message)}},A=async()=>{const t=localStorage.getItem("user"),e=[];(await W(X($,t))).forEach(a=>{e.push(a.data())}),console.log("----->kjhkhkj"),localStorage.setItem("favotitesCurentUser",JSON.stringify(e))};function f(){A();const t=JSON.parse(localStorage.getItem("favorites")),e=JSON.parse(localStorage.getItem("favotitesCurentUser")),s=e||t;if(!(t!=null&&t.length)&!(e!=null&&e.length)){se();return}ae(s)}const I=document.getElementById("home"),j=document.getElementById("favorites"),C=document.getElementById("home-text"),q=document.getElementById("favorites-text");document.getElementById("navigation");const re=window.location.href.toString();let le=re.slice(-14);const ce=()=>{le==="favorites.html"?(I.classList.remove("active"),C.classList.remove("black"),j.classList.add("active"),q.classList.add("black"),f()):(I.classList.add("active"),C.classList.add("black"),j.classList.remove("active"),q.classList.remove("black"))};ce();const de=document.getElementById("burger-button"),B=document.getElementById("burger"),ue=document.getElementById("burger-button-close"),me=async()=>{document.getElementById("header").classList.remove("container"),B.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},fe=async t=>{document.getElementById("header").classList.add("container"),B.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},ge=t=>{t.key==="Escape"&&B.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};de.addEventListener("click",me);ue.addEventListener("click",fe);document.addEventListener("keydown",ge);const he=new S,y=document.getElementById("sign-in"),b=document.getElementById("sign-out"),k=document.getElementById("user");k.innerHTML=localStorage.getItem("user");const J=window.location.href.toString();localStorage.getItem("user")&&(b.classList.remove("display-none"),y.classList.add("display-none"));const ve=async()=>{await ee(x,he).then(t=>{S.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,A();let a=J.slice(-14);console.log(a),f(),k.innerHTML=s.email,b.classList.remove("display-none"),y.classList.add("display-none"),localStorage.removeItem("favotites")}).catch(t=>{t.message,t.customData.email;const e=S.credentialFromError(t);console.log(e)})},pe=async()=>{await te(x).then(()=>{k.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful."),localStorage.removeItem("favotitesCurentUser"),localStorage.removeItem("favotites");let t=J.slice(-14);console.log(t),t===favorites.html&&f()}).catch(t=>{console.log(t.message)}),b.classList.add("display-none"),y.classList.remove("display-none")};y.addEventListener("click",ve);b.addEventListener("click",pe);function ye(t){return t.charAt(0).toUpperCase()+t.slice(1)}function be(t){const e=(t%1).toFixed(1)*100;let s='<div class="rating-container" data-rating="0">';for(let a=1;a<=t+1;a+=1)a<=t?s+=`<span class="star-js selected" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js selected">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>`:e>0&&(s+=`<span class="last-star-js" data-value="${a}"><svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
                    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
                    <defs>
                    <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4E4E4E"/>
                    <stop offset="${e*100}" stop-color="#EEA10C"/>
                    </linearGradient>
                    </defs>
                  </svg></span>`);for(let a=t+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>`;return s+"</div>"}function _e(t){return t?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${c}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${c}#icon-heart"></use>
                </svg>
              </button>`}function P(t){return`<div class="modal-info" data-id="${t._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img class="modal-img" src="${t.gifUrl}" alt="${t.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${ye(t.name)}</h3>
        <div class="rating-modal-container-wrapper"><p>${t.rating.toFixed(1)}</p>${be(t.rating)}</div>
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
          ${_e(t.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`}function we(t){return`<div class="modal-get-raiting" data-id="${t}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <div class="rating-container-js" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          <span class="star-js" data-value="1"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="2"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="3"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="4"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="5"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
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
  </div>`}const i=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/quote`))()}async getByFilterName(e){return await i.handleErrors(async()=>{const a=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await i.handleErrors(async()=>{const a=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await i.handleErrors(async()=>{const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await i.fetchJson(`${i.BASE_URL}/exercises/${e}/rating`,o)})()}async addSubscription(e){return await i.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await i.fetchJson(`${i.BASE_URL}/subscription`,a)})()}};let p=i;L(p,"BASE_URL","https://your-energy.b.goit.study/api");const _=new p,d=class{open(){console.log("loader ------>open"),(!d.loaderEl||d.loaderEl.classList.contains("js-loader"))&&(d.loaderEl.style.display="block")}close(){d.loaderEl&&(d.loaderEl.style.display="none"),console.log("loader ------>close")}};let E=d;L(E,"loaderEl",document.querySelector(".js-loader"));class Le{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=3,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const m=new Le,Ee=document.querySelector(".filter-list-js");let O="";const Se=async t=>{const{target:e}=t;if(e.nodeName==="BUTTON"&&e.nodeName==="BUTTON")return O=e.dataset.id,xe(O)};Ee.addEventListener("click",Se);const xe=async t=>{let e=await _.getOneExercises(t);e.favotite=!1,m.open(P(e))};function $e(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${c}#icon-arrow`),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}$e();function Be(){const t=document.querySelector(".rating-container-js"),e=t.querySelectorAll(".exercises_btn_start_icon_rating");let s=t.querySelector(".user-rating-js");e.forEach((r,l)=>{r.addEventListener("mouseover",()=>a(l)),r.addEventListener("mouseout",o),r.addEventListener("click",()=>n(l+1))});function a(r){o();for(let l=0;l<=r;l++)e[l].classList.add("hovered"),s.textContent=`${l+1}`}function o(){e.forEach(r=>{const l=t.dataset.rating;r.classList.remove("hovered"),s.textContent=`${l||0}`})}function n(r){t.setAttribute("data-rating",r),e.forEach((l,w)=>{w+1<=r?l.classList.add("selected"):l.classList.remove("selected")})}}let u=[];const h=JSON.parse(localStorage.getItem("favorites"));h!=null&&h.length&&u.push(...h);function ke(t){const e=localStorage.getItem("user");e&&ie(t),e||(u.push(t),localStorage.setItem("favorites",JSON.stringify(u)))}const D=t=>{localStorage.getItem("user")&&ne(t),u=u.filter(s=>s._id!==t),localStorage.setItem("favorites",JSON.stringify([...u]))};v.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class Ie{error(e){v.error({title:"Error",message:e})}success(e){v.success({title:"OK",message:e})}info(e){v.info({title:"Info",message:e})}}const M=new Ie,je=document.querySelector(".filter-list-js");let N="";const Ce=["BUTTON","svg","use","P"];let T,U,H;async function qe(t){t.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,o=document.querySelector(".raiting-form-field-input").value,n=document.querySelector(".raiting-form-field-comment").value,r={rate:Number(a),email:o,review:n},l=await _.addExercisesRate(e,r);l.message?M.error(`${l.message}`):(M.success(`Thank you for your mark - ${r.rate} for ${l.name}`),m.close())}async function Oe(){const t=document.querySelector(".modal-info").dataset.id;m.close(),m.open(we(t)),Be(),H=document.querySelector(".raiting-form"),H.addEventListener("submit",qe)}async function Me(t){const e=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;if(e.dataset.favorite==="false"){e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${c}#icon-trash"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="true";let a=await _.getOneExercises(s);ke(a)}else{e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${c}#icon-heart"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="false",D(s);let o=window.location.href.toString().slice(-14);console.log(o),o==="favorites.html"&&f()}}function Ne({target:t}){if(Ce.includes(t.nodeName)&&t.classList[0]!=="favourites_btn_trash_icon"&&t.classList[0]!=="favourites_btn_workout")return N=t.dataset.id,Te(N);if(t.classList[0]==="favourites_btn_trash_icon"){const e=t.dataset.id;D(e),f()}}je.addEventListener("click",Ne);const Te=async t=>{let e=await _.getOneExercises(t);const s=localStorage.getItem("favorites");s!==null&&JSON.parse(s).find(({_id:n})=>n===t)?e.favorite=!0:e.favorite=!1,m.open(P(e)),U=document.querySelector(".refresh-button-js"),T=document.querySelector(".add-rating"),T.addEventListener("click",Oe),U.addEventListener("click",Me)};export{ye as a,g as c,_ as f,M as m,c as s};
//# sourceMappingURL=exercises-right-part-filter-012c652d.js.map
