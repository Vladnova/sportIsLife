var Q=Object.defineProperty;var K=(e,t,s)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var E=(e,t,s)=>(K(e,typeof t!="symbol"?t+"":t,s),s);import{i as G,g as Y,a as W,b as X,c as Z,d as V,e as F,s as ee,G as x,f as te,h as se,j as y}from"./vendor-79031006.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();function ae(){document.querySelector(".filter-list-js").classList.add("hidden-form");const t=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",t.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const c="/sportIsLife/assets/sprite-9db62079.svg",v=(e,t)=>e.length<=t?e:`${e.slice(0,t)}...`;function oe(e){const t=document.querySelector(".filter-list-js");t.classList.remove("hidden-form"),e.length>6&&(t.style.overflowY="scroll");const s=e.map(({_id:a,target:o,name:n,bodyPart:r,burnedCalories:l,time:w})=>`
  <li class="favourites_list_item" id=${a}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${v(o,6)}</span>
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
      <h3 class="favourites_list_item_middle_title">${v(n,16)}</h3>
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
            Body part: <span>${v(r,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${v(o,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");t.innerHTML=s}const ne={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},D=G(ne),$=Y(D),B=W(D),ie=async e=>{const t=$.currentUser;if(t){const s=e;try{ee(F(B,t.email,e._id),s),console.log("done")}catch(a){console.log(a.message)}}},re=async e=>{const t=localStorage.getItem("user");if(t)try{V(F(B,t,e)),console.log("delete")}catch(s){console.log(s.message)}},J=async()=>{const e=localStorage.getItem("user"),t=[];(await X(Z(B,e))).forEach(a=>{t.push(a.data())}),localStorage.setItem("favorites",JSON.stringify(t))};function f(){J();const e=JSON.parse(localStorage.getItem("favorites"));if(!(e!=null&&e.length)){ae();return}oe(e)}const j=document.getElementById("home"),k=document.getElementById("favorites"),C=document.getElementById("home-text"),O=document.getElementById("favorites-text");document.getElementById("navigation");const le=document.getElementById("sign-in-js"),ce=document.getElementById("sign-out"),de=window.location.href.toString();let ue=de.slice(-14);const me=()=>{ue==="favorites.html"?(j.classList.remove("active"),C.classList.remove("black"),k.classList.add("active"),O.classList.add("black"),le.classList.add("visually-hidden"),ce.classList.add("visually-hidden"),f()):(j.classList.add("active"),C.classList.add("black"),k.classList.remove("active"),O.classList.remove("black"))};me();const fe=document.getElementById("burger-button"),I=document.getElementById("burger"),he=document.getElementById("burger-button-close"),ge=async()=>{document.getElementById("header").classList.remove("container"),I.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},ve=async e=>{document.getElementById("header").classList.add("container"),I.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},pe=e=>{e.key==="Escape"&&I.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};fe.addEventListener("click",ge);he.addEventListener("click",ve);document.addEventListener("keydown",pe);const ye=new x,u=document.getElementById("sign-in"),L=document.getElementById("sign-out"),q=document.getElementById("user");q.innerHTML=localStorage.getItem("user");const be=window.location.href.toString();localStorage.getItem("user")&&(L.classList.remove("display-none"),u.classList.add("display-none"),u.style.display="none");const _e=async()=>{await te($,ye).then(e=>{x.credentialFromResult(e).accessToken;const s=e.user;localStorage.user=s.email,f(),J(),q.innerHTML=s.email,L.classList.remove("display-none"),u.classList.add("display-none"),u.style.display="none"}).catch(e=>{e.message,e.customData.email;const t=x.credentialFromError(e);console.log(t)})},Le=async()=>{await se($).then(()=>{q.innerHTML="",localStorage.removeItem("user");let e=be.slice(-14);console.log(e),e===favorites.html&&f()}).catch(e=>{console.log(e.message)}),L.classList.add("display-none"),u.classList.remove("display-none"),u.style.display="flex",localStorage.removeItem("favorites")};u.addEventListener("click",_e);L.addEventListener("click",Le);function we(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ee(e){const t=(e%1).toFixed(1)*100;let s='<div class="rating-container-not-cursore" data-rating="0">';for(let a=1;a<=e+1;a+=1)a<=e?s+=`<span class="star-js selected" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js selected">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>`:t>0&&(s+=`<span class="last-star-js" data-value="${a}"><svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
                    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
                    <defs>
                    <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4E4E4E"/>
                    <stop offset="${t*100}" stop-color="#EEA10C"/>
                    </linearGradient>
                    </defs>
                  </svg></span>`);for(let a=e+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>`;return s+"</div>"}function Se(e){return e?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${c}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${c}#icon-heart"></use>
                </svg>
              </button>`}function P(e){return`<div class="modal-info" data-id="${e._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img class="modal-img" src="${e.gifUrl}" alt="${e.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${we(e.name)}</h3>
        <div class="rating-modal-container-wrapper"><p>${e.rating.toFixed(1)}</p>${Ee(e.rating)}</div>
      </div>
      <hr class="modal-decoration-line" />
      <ul class="modal-table">
        <li>
          <h4 class="title-collum">Target</h4>
          <p class="data-collumn">${e.target}</p>
        </li>
        <li>
          <h4 class="title-collum">Body Part</h4>
          <p class="data-collumn">${e.bodyPart}</p>
        </li>
        <li>
          <h4 class="title-collum">Equipment</h4>
          <p class="data-collumn">${e.equipment}</p>
        </li>
        <li>
          <h4 class="title-collum">Popular</h4>
          <p class="data-collumn">${e.popularity}</p>
        </li>
        <li>
          <h4 class="title-collum">Burned Calories</h4>
          <p class="data-collumn">${e.burnedCalories}/${e.time} min</p>
        </li>
      </ul>
      <hr class="modal-decoration-line" />
      <p class="about-exercise">
        ${e.description}
      </p>
      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="${e.favorite}">
          ${Se(e.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`}function xe(e){return`<div class="modal-get-raiting" data-id="${e}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <div class="rating-container-js rating-container" data-rating="" data-id="">
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
  </div>`}const i=class{static handleErrors(t){return async()=>{try{return await t()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(t,s){return(await fetch(t,s)).json()}async getQuotes(){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/quote`))()}async getByFilterName(t){return await i.handleErrors(async()=>{const a=new URLSearchParams({...t});return await i.fetchJson(`${i.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(t){return await i.handleErrors(async()=>{const a=new URLSearchParams({...t});return await i.fetchJson(`${i.BASE_URL}/exercises?${a}`)})()}async getOneExercises(t){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/exercises/${t}`))()}async addExercisesRate(t,s){return await i.handleErrors(async()=>{const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await i.fetchJson(`${i.BASE_URL}/exercises/${t}/rating`,o)})()}async addSubscription(t){return await i.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await i.fetchJson(`${i.BASE_URL}/subscription`,a)})()}};let b=i;E(b,"BASE_URL","https://your-energy.b.goit.study/api");const g=new b,d=class{open(){console.log("loader ------>open"),(!d.loaderEl||d.loaderEl.classList.contains("js-loader"))&&(d.loaderEl.style.display="block")}close(){d.loaderEl&&(d.loaderEl.style.display="none"),console.log("loader ------>close")}};let S=d;E(S,"loaderEl",document.querySelector(".js-loader"));class $e{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=t=>this.closeEsc(t),this.overlayClickHandler=t=>this.closeBack(t)}open(t){this.overlay.innerHTML=t,this.overlay.style.zIndex=3,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(t){t.key==="Escape"&&this.close()}closeBack(t){t.target===this.overlay&&this.close()}}const h=new $e,Be=document.querySelector(".filter-list-js");let T="";const Ie=async e=>{const{target:t}=e;if(t.nodeName==="BUTTON"&&t.nodeName==="BUTTON")return T=t.dataset.id,qe(T)};Be.addEventListener("click",Ie);const qe=async e=>{let t=await g.getOneExercises(e);t.favotite=!1,h.open(P(t))},_={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",je);async function je(){const e=localStorage.getItem("quote");if(e){const t=new Date().toDateString(),{date:s,quote:a,author:o}=JSON.parse(e);t!==s?M():(_.quoteText.innerHTML=a,_.quoteAuthor.innerHTML=o)}else M()}async function M(){const e=await g.getQuotes(),{author:t,quote:s}=e,a={author:t,quote:s,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(a)),_.quoteText.innerHTML=s,_.quoteAuthor.innerHTML=t}function ke(){const e=document.createElement("button");e.className="scroll-up-button hidden";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 32 32"),t.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${c}#icon-arrow`),t.appendChild(s),e.appendChild(t),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?e.classList.remove("hidden"):e.classList.add("hidden")}),document.body.appendChild(e)}ke();function Ce(){const e=document.querySelector(".rating-container-js"),t=e.querySelectorAll(".exercises_btn_start_icon_rating");let s=e.querySelector(".user-rating-js");t.forEach((r,l)=>{r.addEventListener("mouseover",()=>a(l)),r.addEventListener("mouseout",o),r.addEventListener("click",()=>n(l+1))});function a(r){o();for(let l=0;l<=r;l++)t[l].classList.add("hovered"),s.textContent=`${l+1}`}function o(){t.forEach(r=>{const l=e.dataset.rating;r.classList.remove("hovered"),s.textContent=`${l||0}`})}function n(r){e.setAttribute("data-rating",r),t.forEach((l,w)=>{w+1<=r?l.classList.add("selected"):l.classList.remove("selected")})}}let m=[];const p=JSON.parse(localStorage.getItem("favorites"));p!=null&&p.length&&m.push(...p);function Oe(e){ie(e),m.push(e),localStorage.setItem("favorites",JSON.stringify(m))}const z=e=>{re(e),m=m.filter(t=>t._id!==e),localStorage.setItem("favorites",JSON.stringify([...m]))};y.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class Te{error(t){y.error({title:"Error",message:t})}success(t){y.success({title:"OK",message:t})}info(t){y.info({title:"Info",message:t})}}const N=new Te,Me=document.querySelector(".filter-list-js");let H="";const Ne=["BUTTON","svg","use","P"];let A,R,U;async function He(e){e.preventDefault();const t=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,o=document.querySelector(".raiting-form-field-input").value,n=document.querySelector(".raiting-form-field-comment").value,r={rate:Number(a),email:o,review:n},l=await g.addExercisesRate(t,r);l.message?N.error(`${l.message}`):(N.success(`Thank you for your mark - ${r.rate} for ${l.name}`),h.close())}async function Ae(){const e=document.querySelector(".modal-info").dataset.id;h.close(),h.open(xe(e)),Ce(),U=document.querySelector(".raiting-form"),U.addEventListener("submit",He)}async function Re(e){const t=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;let o=window.location.href.toString().slice(-14);if(t.dataset.favorite==="false"){t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${c}#icon-trash"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="true";let n=await g.getOneExercises(s);Oe(n),o==="favorites.html"&&f()}else t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${c}#icon-heart"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="false",z(s),o==="favorites.html"&&f()}function Ue({target:e}){if(Ne.includes(e.nodeName)&&e.classList[0]!=="favourites_btn_trash_icon"&&e.classList[0]!=="favourites_btn_workout")return H=e.dataset.id,Fe(H);if(e.classList[0]==="favourites_btn_trash_icon"){const t=e.dataset.id;z(t),f()}}Me.addEventListener("click",Ue);const Fe=async e=>{let t=await g.getOneExercises(e);const s=localStorage.getItem("favorites");s!==null&&JSON.parse(s).find(({_id:n})=>n===e)?t.favorite=!0:t.favorite=!1,h.open(P(t)),R=document.querySelector(".refresh-button-js"),A=document.querySelector(".add-rating"),A.addEventListener("click",Ae),R.addEventListener("click",Re)};export{we as a,v as c,g as f,N as m,c as s};
//# sourceMappingURL=exercises-right-part-filter-deaf2406.js.map
