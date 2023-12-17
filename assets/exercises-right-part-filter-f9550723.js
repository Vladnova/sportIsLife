var U=Object.defineProperty;var F=(e,t,s)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var w=(e,t,s)=>(F(e,typeof t!="symbol"?t+"":t,s),s);import{g as J,a as P,i as z,b as D,G as _,s as K,c as Y,d as v}from"./vendor-c6a8d4ef.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();function G(){document.querySelector(".filter-list-js").classList.add("hidden-form");const t=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",t.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const c="/sportIsLife/assets/sprite-ffba578a.svg",f=(e,t)=>e.length<=t?e:`${e.slice(0,t)}...`;function Q(e){const t=document.querySelector(".filter-list-js");t.classList.remove("hidden-form"),e.length>6&&(t.style.overflowY="scroll");const s=e.map(({_id:a,target:o,name:n,bodyPart:r,burnedCalories:l,time:L})=>`
  <li class="favourites_list_item" id=${a}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${f(o,6)}</span>
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
      <h3 class="favourites_list_item_middle_title">${f(n,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${l}/${L}</span>
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
  </li>`).join("");t.innerHTML=s}function S(){const e=JSON.parse(localStorage.getItem("favorites"));if(!(e!=null&&e.length)){G();return}Q(e)}const k=document.getElementById("home"),x=document.getElementById("favorites"),I=document.getElementById("home-text"),j=document.getElementById("favorites-text");document.getElementById("navigation");const W=window.location.href.toString();let X=W.slice(-14);const V=()=>{X==="favorites.html"?(k.classList.remove("active"),I.classList.remove("black"),x.classList.add("active"),j.classList.add("black"),S()):(k.classList.add("active"),I.classList.add("black"),x.classList.remove("active"),j.classList.remove("black"))};V();const Z=document.getElementById("burger-button"),$=document.getElementById("burger"),ee=document.getElementById("burger-button-close"),te=async()=>{document.getElementById("header").classList.remove("container"),$.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},se=async e=>{document.getElementById("header").classList.add("container"),$.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},ae=e=>{e.key==="Escape"&&$.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};Z.addEventListener("click",te);ee.addEventListener("click",se);document.addEventListener("keydown",ae);const oe={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},ie=J().length?P():z(oe),R=D(ie),ne=new _,g=document.getElementById("sign-in"),y=document.getElementById("sign-out"),B=document.getElementById("user");B.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(y.classList.remove("display-none"),g.classList.add("display-none"));const re=async()=>{await K(R,ne).then(e=>{_.credentialFromResult(e).accessToken;const s=e.user;localStorage.user=s.email,B.innerHTML=s.email,y.classList.remove("display-none"),g.classList.add("display-none")}).catch(e=>{e.message,e.customData.email;const t=_.credentialFromError(e);console.log(t)})},le=async()=>{await Y(R).then(()=>{B.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(e=>{console.log(e.message)}),y.classList.add("display-none"),g.classList.remove("display-none")};g.addEventListener("click",re);y.addEventListener("click",le);function ce(e){const t=(e%1).toFixed(1)*100;let s='<div class="rating-container" data-rating="0">';for(let a=1;a<=e+1;a+=1)a<=e?s+=`<span class="star-js selected" data-value="${a}">&#9733;</span>`:t>0&&(s+=`<span class="star-js last-star-js" style="
                    background: linear-gradient(
                      to right,
                      var(--stars-background-active-color) ${t}%,
                      rgba(244, 244, 244, 0.2) ${100-t}%
                    );
                    display: inline-block;
                    background-clip: text;
                  " data-value="${a}">&#9733;</span>`);for(let a=e+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}">&#9733;</span>`;return s+"</div>"}function de(e){return e?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${c}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${c}#icon-heart"></use>
                </svg>
              </button>`}function H(e){return`<div class="modal-info" data-id="${e._id}">
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
        <h3 class="title-card-modal">${e.name}</h3>
        <div class="rating-modal-container-wrapper"><p>${e.rating.toFixed(1)}</p>${ce(e.rating)}</div>
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
          ${de(e.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`}function ue(e){return`<div class="modal-get-raiting" data-id="${e}">
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
  </div>`}const i=class{static handleErrors(t){return async()=>{try{return await t()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(t,s){return(await fetch(t,s)).json()}async getQuotes(){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/quote`))()}async getByFilterName(t){return await i.handleErrors(async()=>{const a=new URLSearchParams({...t});return await i.fetchJson(`${i.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(t){return await i.handleErrors(async()=>{const a=new URLSearchParams({...t});return await i.fetchJson(`${i.BASE_URL}/exercises?${a}`)})()}async getOneExercises(t){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/exercises/${t}`))()}async addExercisesRate(t,s){return await i.handleErrors(async()=>{const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await i.fetchJson(`${i.BASE_URL}/exercises/${t}/rating`,o)})()}async addSubscription(t){return await i.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await i.fetchJson(`${i.BASE_URL}/subscription`,a)})()}};let h=i;w(h,"BASE_URL","https://your-energy.b.goit.study/api");const b=new h,d=class{open(){console.log("loader ------>open"),(!d.loaderEl||d.loaderEl.classList.contains("js-loader"))&&(d.loaderEl.style.display="block")}close(){d.loaderEl&&(d.loaderEl.style.display="none"),console.log("loader ------>close")}};let E=d;w(E,"loaderEl",document.querySelector(".js-loader"));class me{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=t=>this.closeEsc(t),this.overlayClickHandler=t=>this.closeBack(t)}open(t){this.overlay.innerHTML=t,this.overlay.style.zIndex=3,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(t){t.key==="Escape"&&this.close()}closeBack(t){t.target===this.overlay&&this.close()}}const m=new me,fe=document.querySelector(".filter-list-js");let q="";const pe=async e=>{const{target:t}=e;if(t.nodeName==="BUTTON"&&t.nodeName==="BUTTON")return q=t.dataset.id,ve(q)};fe.addEventListener("click",pe);const ve=async e=>{let t=await b.getOneExercises(e);t.favotite=!1,m.open(H(t))};function he(){const e=document.createElement("button");e.className="scroll-up-button hidden";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 32 32"),t.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${c}#icon-arrow`),t.appendChild(s),e.appendChild(t),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?e.classList.remove("hidden"):e.classList.add("hidden")}),document.body.appendChild(e)}he();function ge(){const e=document.querySelector(".rating-container-js"),t=e.querySelectorAll(".star-js");let s=e.querySelector(".user-rating-js");t.forEach((r,l)=>{r.addEventListener("mouseover",()=>a(l)),r.addEventListener("mouseout",o),r.addEventListener("click",()=>n(l+1))});function a(r){o();for(let l=0;l<=r;l++)t[l].classList.add("hovered"),s.textContent=`${l+1}`}function o(){t.forEach(r=>{const l=e.dataset.rating;r.classList.remove("hovered"),s.textContent=`${l||0}`})}function n(r){e.setAttribute("data-rating",r),t.forEach((l,L)=>{L+1<=r?l.classList.add("selected"):l.classList.remove("selected")})}}let u=[];const p=JSON.parse(localStorage.getItem("favorites"));p!=null&&p.length&&u.push(...p);function ye(e){u.push(e),localStorage.setItem("favorites",JSON.stringify(u))}const A=e=>{u=u.filter(t=>t._id!==e),localStorage.setItem("favorites",JSON.stringify([...u]))};v.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class be{error(t){v.error({title:"Error",message:t})}success(t){v.success({title:"OK",message:t})}info(t){v.info({title:"Info",message:t})}}const O=new be,Le=document.querySelector(".filter-list-js");let T="";const we=["BUTTON","svg","use","P"];let M,N,C;async function Ee(e){e.preventDefault();const t=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,o=document.querySelector(".raiting-form-field-input").value,n=document.querySelector(".raiting-form-field-comment").value,r={rate:Number(a),email:o,review:n},l=await b.addExercisesRate(t,r);l.message?O.error(`${l.message}`):(O.success(`Thank you for your mark - ${r.rate} for ${l.name}`),m.close())}async function _e(){const e=document.querySelector(".modal-info").dataset.id;m.close(),m.open(ue(e)),ge(),C=document.querySelector(".raiting-form"),C.addEventListener("submit",Ee)}async function Se(e){const t=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;if(t.dataset.favorite==="false"){t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${c}#icon-trash"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="true";let a=await b.getOneExercises(s);ye(a)}else{t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${c}#icon-heart"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="false",A(s);let o=window.location.href.toString().slice(-14);console.log(o),o==="favorites.html"&&S()}}function $e({target:e}){if(we.includes(e.nodeName)&&e.classList[0]!=="favourites_btn_trash_icon"&&e.classList[0]!=="favourites_btn_workout")return T=e.dataset.id,Be(T);if(e.classList[0]==="favourites_btn_trash_icon"){const t=e.dataset.id;A(t),S()}}Le.addEventListener("click",$e);const Be=async e=>{let t=await b.getOneExercises(e);const s=localStorage.getItem("favorites");s!==null&&JSON.parse(s).find(({_id:n})=>n===e)?t.favorite=!0:t.favorite=!1,m.open(H(t)),N=document.querySelector(".refresh-button-js"),M=document.querySelector(".add-rating"),M.addEventListener("click",_e),N.addEventListener("click",Se)};export{b as f,O as m,c as s};
//# sourceMappingURL=exercises-right-part-filter-f9550723.js.map
