var j=Object.defineProperty;var D=(t,e,s)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var w=(t,e,s)=>(D(t,typeof e!="symbol"?e+"":e,s),s);import{g as z,a as K,i as G,b as Y,G as p,s as Q,c as W,S as V}from"./vendor-938032cf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const E=document.getElementById("home"),x=document.getElementById("favorites"),S=document.getElementById("home-text"),_=document.getElementById("favorites-text");document.getElementById("navigation");const X=window.location.href.toString();let k=X.slice(-10);const Z=()=>{console.log(k),k==="index.html"?(E.classList.add("active"),S.classList.add("black"),x.classList.remove("active"),_.classList.remove("black")):(E.classList.remove("active"),S.classList.remove("black"),x.classList.add("active"),_.classList.add("black"))};Z();const ee=document.getElementById("burger-button"),b=document.getElementById("burger"),te=document.getElementById("burger-button-close"),se=async()=>{b.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},ne=async t=>{b.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},ie=t=>{t.key==="Escape"&&b.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};ee.addEventListener("click",se);te.addEventListener("click",ne);document.addEventListener("keydown",ie);const oe={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},ae=z().length?K():G(oe),C=Y(ae),re=new p,d=document.getElementById("sign-in"),u=document.getElementById("sign-out"),L=document.getElementById("user");L.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(u.classList.remove("display-none"),d.classList.add("display-none"));const ce=async()=>{await Q(C,re).then(t=>{p.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,L.innerHTML=s.email,u.classList.remove("display-none"),d.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=p.credentialFromError(t);console.log(e)})},le=async()=>{await W(C).then(()=>{L.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),u.classList.add("display-none"),d.classList.remove("display-none")};d.addEventListener("click",ce);u.addEventListener("click",le);function de(t){return"*".repeat(t)}function ue(t){return`<div class="modal-info">
     <button class="modal-button-close" id="button-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <use href="./img/icons.svg#icon-close" />
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img class="modal-img" src="${t.gifUrl}" alt="${t.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${t.name}</h3>
        <p class="rating-modal">${t.rating} ${de(t.rating)}</p>
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
        <button class="add-favorite" type="button">
          <span>Add to favorites</span><span>❤️</span>
        </button>
        <button class="add-rating" type="button">Give a rating</button>
      </div>`}function me(t){return`<div class="modal-get-raiting">
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
        <button class="raiting-form-submit" type="submit" data-id="${t}">Send</button>
      </form>
    </div>
  </div>`}class ${constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}new $;const o=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/quote`))()}async getByFilterName(e){return await o.handleErrors(async()=>{const i=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/filters?${i}`)})()}async getByFilterCategory(e){return await o.handleErrors(async()=>{const i=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/exercises?${i}`)})()}async getOneExercises(e){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await o.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await o.fetchJson(`${o.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await o.handleErrors(async()=>{const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await o.fetchJson(`${o.BASE_URL}/subscription`,i)})()}};let l=o;w(l,"BASE_URL","https://your-energy.b.goit.study/api");const m=new l,h=document.querySelector(".pagination-numbers"),ge=document.querySelector(".muscles-list");let f=1;try{h.addEventListener("click",pe),h.addEventListener("click",A)}catch(t){console.log(t)}async function pe(t){const{totalPages:e,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),i={filter:s,page:t.target.textContent,limit:12,totalPages:e};if(i.page===f)return;const a=(await m.getByFilterName(i)).results;ge.innerHTML=T(a),f=i.page,ve()}const he=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),h.appendChild(e)};function fe(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)he(e)}function ve(t){v(),document.querySelectorAll(".pagination-number").forEach(e=>{Number(e.getAttribute("page-index"))&&e.addEventListener("click",()=>{v()})})}function v(t){A(),handlePageButtonsStatus()}function A(){document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))==f&&t.classList.add("active")})}const ye=document.querySelector(".wrap-button"),H=document.querySelector(".muscles-list"),be=document.querySelector(".pagination-numbers");ye.addEventListener("click",Le);document.addEventListener("DOMContentLoaded",()=>{P({filter:"Muscles",page:1,limit:12})});async function Le(t){t.preventDefault();const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const i=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(r=>{r.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:i,page:1,limit:12};H.innerHTML="",P(n)}async function P(t){try{const e=await m.getByFilterName(t),s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}H.insertAdjacentHTML("beforeend",T(s));const{totalPages:i}=e,n=JSON.stringify({totalPages:i,categoryName:t.filter});localStorage.setItem("infoRequest",n),be.innerHTML="",fe(),v(1)}catch(e){console.log(e.message)}}function T(t){return t.map(({filter:s,name:i,imgURL:n})=>`
        <li class="muscles-item"  data-name=${i} data-filter=${s.toLocaleLowerCase().replaceAll(" ","")}>
        <a href="" class="muscles-link class="muscles-box-menu"">
        <img class="muscles-image" src="${n}" alt="${i}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${i}</p>
            </div>
            </a>
           </li>
          `).join("")}function we(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","img/icons.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}we();const y=new $,Ee=document.querySelector(".exercises_list");let B,N,I,M;Ee.addEventListener("click",Be);function xe(t){return t.classList.contains("exercises_btn_start")||t.classList.contains("exercises_btn_start_text")||t.classList.contains("exercises_btn_start_icon")}const R={_id:"64f389465ae26083f39b17c2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0037.gif",name:"barbell decline wide-grip pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:307,time:3,popularity:7416};function Se(t){t.preventDefault(),M=document.querySelector(".raiting-form-submit");const e=M.dataset.id;console.log("Add send raiting logic"),console.log("exerciseID example =>",e)}function _e(){y.close(),y.open(me(R._id)),I=document.querySelector(".raiting-form"),I.addEventListener("submit",Se)}function ke(){console.log("Add favorite logic")}function Be({target:t}){xe(t)&&(y.open(ue(R)),N=document.querySelector(".add-favorite"),B=document.querySelector(".add-rating"),B.addEventListener("click",_e),N.addEventListener("click",ke))}const O=document.querySelector(".rating"),g=O.querySelectorAll(".star");g.forEach((t,e)=>{t.addEventListener("mouseover",()=>Ne(e)),t.addEventListener("mouseout",F),t.addEventListener("click",()=>Ie(e+1))});function Ne(t){F();for(let e=0;e<=t;e++)g[e].classList.add("hovered")}function F(){g.forEach(t=>{t.classList.remove("hovered")})}function Ie(t){O.setAttribute("data-rating",t),g.forEach((e,s)=>{s+1<=t?e.classList.add("selected"):e.classList.remove("selected")}),console.log(t)}const c=document.querySelector(".filter-list-js");document.querySelector(".exercises_list");c.addEventListener("click",Me);async function Me(t){t.preventDefault();const{target:e}=t;let s,i;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,i=e.parentNode.parentNode.dataset.name),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,i=e.parentNode.parentNode.parentNode.dataset.name);const n={[s]:[i],keyword:"pull",page:1,limit:10};c.innerHTML="",document.querySelector(".muscles-section").classList.remove("muscles-section"),c.classList.remove("muscles-list"),c.classList.add("exercises_list");const a=await m.getByFilterCategory(n);c.insertAdjacentHTML("beforeend",qe(a))}catch(n){console.log(n.message)}}function qe(t){if(t.results.length)return t.results.map(({_id:s,target:i,rating:n})=>(console.log(s),`
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
          </li>`)).join("");{const e="<p>Sorry</p>";return console.log("sorry"),e}}const U=document.querySelector("#subscribe-form"),q=U.querySelector("#email"),Ce=t=>{t.preventDefault();const{value:e}=q;m.addSubscription({email:e}).then(()=>{q.value=""})};U.addEventListener("submit",Ce);const J=document.createElement("div");J.id="spinner-container";document.body.appendChild(J);const $e={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new V($e);
//# sourceMappingURL=spinner-e2566311.js.map
