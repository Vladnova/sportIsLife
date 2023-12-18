var J=Object.defineProperty;var D=(e,t,s)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var B=(e,t,s)=>(D(e,typeof t!="symbol"?t+"":t,s),s);import{i as P,g as z,a as Q,b as K,c as G,d as Y,e as R,s as W,G as w,f as X,h as Z,j as g}from"./vendor-ac1aa0cc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();function V(){document.querySelector(".filter-list-js").classList.add("hidden-form");const t=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",t.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const l="/sportIsLife/assets/sprite-9db62079.svg",f=(e,t)=>e.length<=t?e:`${e.slice(0,t)}...`;function ee(e){const t=document.querySelector(".filter-list-js");t.classList.remove("hidden-form"),e.length>6?t.classList.add("scroll"):t.classList.remove("scroll");const s=e.map(({_id:a,target:o,name:n,bodyPart:r,burnedCalories:c,time:L})=>`
  <li class="favourites_list_item" id=${a}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${f(o,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${a}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${a}>
            <use class="favourites_btn_trash_icon" href="${l}#icon-trash" data-id=${a}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${a}>
          <p class="favourites_btn_start_text" data-id=${a}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${a}>
            <use href="${l}#icon-arrow" data-id=${a}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${l}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${f(n,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${c}/${L}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${f(r,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${f(o,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");t.innerHTML=s}const te={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},A=P(te),S=z(A),E=Q(A),se=async e=>{const t=S.currentUser;if(t){const s=e;try{W(R(E,t.email,e._id),s)}catch(a){console.log(a.message)}}},ae=async e=>{const t=localStorage.getItem("user");if(t)try{Y(R(E,t,e))}catch(s){console.log(s.message)}},U=async()=>{const e=localStorage.getItem("user"),t=[];if(!e)return;(await K(G(E,e))).forEach(a=>{t.push(a.data())}),localStorage.setItem("favorites",JSON.stringify(t))};function m(){U();const e=JSON.parse(localStorage.getItem("favorites"));if(!(e!=null&&e.length)){V();return}ee(e)}const I=document.getElementById("home"),q=document.getElementById("favorites"),k=document.getElementById("home-text"),j=document.getElementById("favorites-text");document.getElementById("navigation");const oe=document.getElementById("sign-in-js"),ne=document.getElementById("sign-out"),ie=window.location.href.toString();let re=ie.slice(-14);const ce=()=>{re==="favorites.html"?(I.classList.remove("active"),k.classList.remove("black"),q.classList.add("active"),j.classList.add("black"),oe.classList.add("visually-hidden"),ne.classList.add("visually-hidden"),m()):(I.classList.add("active"),k.classList.add("black"),q.classList.remove("active"),j.classList.remove("black"))};ce();const le=document.getElementById("burger-button"),x=document.getElementById("burger"),de=document.getElementById("burger-button-close"),ue=async()=>{document.getElementById("header").classList.remove("container"),x.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},me=async e=>{document.getElementById("header").classList.add("container"),x.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},fe=e=>{e.key==="Escape"&&x.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};le.addEventListener("click",ue);de.addEventListener("click",me);document.addEventListener("keydown",fe);const he=new w,d=document.getElementById("sign-in"),b=document.getElementById("sign-out"),$=document.getElementById("user");$.innerHTML=localStorage.getItem("user");const ge=window.location.href.toString();localStorage.getItem("user")&&(b.classList.remove("display-none"),d.classList.add("display-none"),d.style.display="none");const ve=async()=>{await X(S,he).then(e=>{w.credentialFromResult(e).accessToken;const s=e.user;localStorage.user=s.email,$.innerHTML=localStorage.getItem("user"),b.classList.remove("display-none"),d.classList.add("display-none"),d.style.display="none",U()}).catch(e=>{const t=e.message;console.log(t),w.credentialFromError(e)})},pe=async()=>{await Z(S).then(()=>{$.innerHTML="",localStorage.removeItem("user"),ge.slice(-14)===favorites.html&&m()}).catch(e=>{console.log(e.message)}),b.classList.add("display-none"),d.classList.remove("display-none"),d.style.display="flex",localStorage.removeItem("favorites")};d.addEventListener("click",ve);b.addEventListener("click",pe);class ye{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=t=>this.closeEsc(t),this.overlayClickHandler=t=>this.closeBack(t)}open(t){this.overlay.innerHTML=t,this.overlay.style.zIndex=3,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(t){t.key==="Escape"&&this.close()}closeBack(t){t.target===this.overlay&&this.close()}}const p=new ye,i=class{static handleErrors(t){return async()=>{try{return await t()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(t,s){return(await fetch(t,s)).json()}async getQuotes(){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/quote`))()}async getByFilterName(t){return await i.handleErrors(async()=>{const a=new URLSearchParams({...t});return await i.fetchJson(`${i.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(t){return await i.handleErrors(async()=>{const a=new URLSearchParams({...t});return await i.fetchJson(`${i.BASE_URL}/exercises?${a}`)})()}async getOneExercises(t){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/exercises/${t}`))()}async addExercisesRate(t,s){return await i.handleErrors(async()=>{const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await i.fetchJson(`${i.BASE_URL}/exercises/${t}/rating`,o)})()}async addSubscription(t){return await i.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await i.fetchJson(`${i.BASE_URL}/subscription`,a)})()}};let v=i;B(v,"BASE_URL","https://your-energy.b.goit.study/api");const _=new v,y={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",be);async function be(){const e=localStorage.getItem("quote");if(e){const t=new Date().toDateString(),{date:s,quote:a,author:o}=JSON.parse(e);t!==s?C():(y.quoteText.innerHTML=a,y.quoteAuthor.innerHTML=o)}else C()}async function C(){const e=await _.getQuotes(),{author:t,quote:s}=e,a={author:t,quote:s,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(a)),y.quoteText.innerHTML=s,y.quoteAuthor.innerHTML=t}function _e(){const e=document.createElement("button");e.className="scroll-up-button hidden";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 32 32"),t.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${l}#icon-arrow`),t.appendChild(s),e.appendChild(t),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?e.classList.remove("hidden"):e.classList.add("hidden")}),document.body.appendChild(e)}_e();function Le(e){if(e)return e[0].toUpperCase()+e.slice(1)}function we(e){const t=(e%1).toFixed(1)*100;let s='<div class="rating-container-not-cursore" data-rating="0">';for(let a=1;a<=e+1;a+=1)a<=e?s+=`<span class="star-js selected" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js selected">
              <use xlink:href="${l}#icon-star"></use>
              />
            </svg></span>`:t>0&&(s+=`<span class="last-star-js" data-value="${a}"><svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
                    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
                    <defs>
                    <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
                    <stop offset="${100-t}%" stop-color="rgba(244, 244, 244, 0.20)" />
                    <stop offset="${t}%" stop-color="#EEA10C" />
                    </linearGradient>
                    </defs>
                  </svg></span>`);for(let a=e+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js">
              <use xlink:href="${l}#icon-star"></use>
              />
            </svg></span>`;return s+"</div>"}function Se(e){return e?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${l}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${l}#icon-heart"></use>
                </svg>
              </button>`}function Ee(e){return`<div class="modal-info" data-id="${e._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${l}#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img loading="lazy" class="modal-img" src="${e.gifUrl}" alt="${e.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${Le(e.name)}</h3>
        <div class="rating-modal-container-wrapper"><p>${e.rating.toFixed(1)}</p>${we(e.rating)}</div>
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
        <use href="${l}#icon-close"></use>
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <div class="rating-container-js rating-container" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          <span class="star-js" data-value="1"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${l}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="2"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${l}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="3"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${l}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="4"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${l}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="5"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${l}#icon-star"></use>
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
  </div>`}function $e(){const e=document.querySelector(".rating-container-js"),t=e.querySelectorAll(".exercises_btn_start_icon_rating");let s=e.querySelector(".user-rating-js");t.forEach((r,c)=>{r.addEventListener("mouseover",()=>a(c)),r.addEventListener("mouseout",o),r.addEventListener("click",()=>n(c+1))});function a(r){o();for(let c=0;c<=r;c++)t[c].classList.add("hovered"),s.textContent=`${c+1}`}function o(){t.forEach(r=>{const c=e.dataset.rating;r.classList.remove("hovered"),s.textContent=`${c||0}`})}function n(r){e.setAttribute("data-rating",r),t.forEach((c,L)=>{L+1<=r?c.classList.add("selected"):c.classList.remove("selected")})}}let u=[];const h=JSON.parse(localStorage.getItem("favorites"));h!=null&&h.length&&u.push(...h);function Be(e){se(e),u.push(e),localStorage.setItem("favorites",JSON.stringify(u))}const F=e=>{ae(e),u=u.filter(t=>t._id!==e),localStorage.setItem("favorites",JSON.stringify([...u]))};g.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class Ie{error(t){g.error({title:"Error",message:t})}success(t){g.success({title:"OK",message:t})}info(t){g.info({title:"Info",message:t})}}const M=new Ie,qe=document.querySelector(".filter-list-js");let O="";const ke=["BUTTON","svg","use","P"];let T,H,N;async function je(e){e.preventDefault();const t=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,o=document.querySelector(".raiting-form-field-input").value,n=document.querySelector(".raiting-form-field-comment").value,r={rate:Number(a),email:o,review:n},c=await _.addExercisesRate(t,r);c.message?M.error(`${c.message}`):(M.success(`Thank you for your mark - ${r.rate} for ${c.name}`),p.close())}async function Ce(){const e=document.querySelector(".modal-info").dataset.id;p.close(),p.open(xe(e)),$e(),N=document.querySelector(".raiting-form"),N.addEventListener("submit",je)}async function Me(e){const t=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;let o=window.location.href.toString().slice(-14);if(t.dataset.favorite==="false"){t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${l}#icon-trash"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="true";let n=await _.getOneExercises(s);Be(n),o==="favorites.html"&&m()}else t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${l}#icon-heart"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="false",F(s),o==="favorites.html"&&m()}function Oe({target:e}){if(ke.includes(e.nodeName)&&e.classList[0]!=="favourites_btn_trash_icon"&&e.classList[0]!=="favourites_btn_workout")return O=e.dataset.id,Te(O);if(e.classList[0]==="favourites_btn_trash_icon"){const t=e.dataset.id;F(t),m()}}qe.addEventListener("click",Oe);const Te=async e=>{let t=await _.getOneExercises(e);const s=localStorage.getItem("favorites");s!==null&&JSON.parse(s).find(({_id:n})=>n===e)?t.favorite=!0:t.favorite=!1,p.open(Ee(t)),H=document.querySelector(".refresh-button-js"),T=document.querySelector(".add-rating"),T.addEventListener("click",Ce),H.addEventListener("click",Me)};export{f as a,Le as c,_ as f,M as m,l as s};
//# sourceMappingURL=exercises-right-part-filter-ef915edb.js.map
