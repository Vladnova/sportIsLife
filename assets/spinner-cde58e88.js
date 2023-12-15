var G=Object.defineProperty;var Y=(e,t,s)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var x=(e,t,s)=>(Y(e,typeof t!="symbol"?t+"":t,s),s);import{g as Q,a as W,i as V,b as X,G as f,s as Z,c as ee,S as te}from"./vendor-938032cf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const S=document.getElementById("home"),_=document.getElementById("favorites"),k=document.getElementById("home-text"),B=document.getElementById("favorites-text");document.getElementById("navigation");const se=window.location.href.toString();let N=se.slice(-10);const ne=()=>{console.log(N),N==="index.html"?(S.classList.add("active"),k.classList.add("black"),_.classList.remove("active"),B.classList.remove("black")):(S.classList.remove("active"),k.classList.remove("black"),_.classList.add("active"),B.classList.add("black"))};ne();const ie=document.getElementById("burger-button"),w=document.getElementById("burger"),oe=document.getElementById("burger-button-close"),ae=async()=>{w.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},re=async e=>{w.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},ce=e=>{e.key==="Escape"&&w.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};ie.addEventListener("click",ae);oe.addEventListener("click",re);document.addEventListener("keydown",ce);const le={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},de=Q().length?W():V(le),P=X(de),ue=new f,m=document.getElementById("sign-in"),g=document.getElementById("sign-out"),E=document.getElementById("user");E.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(g.classList.remove("display-none"),m.classList.add("display-none"));const me=async()=>{await Z(P,ue).then(e=>{f.credentialFromResult(e).accessToken;const s=e.user;localStorage.user=s.email,E.innerHTML=s.email,g.classList.remove("display-none"),m.classList.add("display-none")}).catch(e=>{e.message,e.customData.email;const t=f.credentialFromError(e);console.log(t)})},ge=async()=>{await ee(P).then(()=>{E.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(e=>{console.log(e.message)}),g.classList.add("display-none"),m.classList.remove("display-none")};m.addEventListener("click",me);g.addEventListener("click",ge);function pe(e){return"*".repeat(e)}function he(e){return`<div class="modal-info">
     <button class="modal-button-close" id="button-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <use href="./img/icons.svg#icon-close" />
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img class="modal-img" src="${e.gifUrl}" alt="${e.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${e.name}</h3>
        <p class="rating-modal">${e.rating} ${pe(e.rating)}</p>
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
        <button class="add-favorite" type="button">
          <span>Add to favorites</span><span>❤️</span>
        </button>
        <button class="add-rating" type="button">Give a rating</button>
      </div>`}function fe(e){return`<div class="modal-get-raiting">
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
        <button class="raiting-form-submit" type="submit" data-id="${e}">Send</button>
      </form>
    </div>
  </div>`}class T{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=t=>this.closeEsc(t),this.overlayClickHandler=t=>this.closeBack(t)}open(t){this.overlay.innerHTML=t,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(t){t.key==="Escape"&&this.close()}closeBack(t){t.target===this.overlay&&this.close()}}new T;const o=class{static handleErrors(t){return async()=>{try{return await t()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(t,s){return(await fetch(t,s)).json()}async getQuotes(){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/quote`))()}async getByFilterName(t){return await o.handleErrors(async()=>{const i=new URLSearchParams({...t});return await o.fetchJson(`${o.BASE_URL}/filters?${i}`)})()}async getByFilterCategory(t){return await o.handleErrors(async()=>{const i=new URLSearchParams({...t});return await o.fetchJson(`${o.BASE_URL}/exercises?${i}`)})()}async getOneExercises(t){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/exercises/${t}`))()}async addExercisesRate(t,s){return await o.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await o.fetchJson(`${o.BASE_URL}/exercises/${t}/rating`,n)})()}async addSubscription(t){return await o.handleErrors(async()=>{const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await o.fetchJson(`${o.BASE_URL}/subscription`,i)})()}};let d=o;x(d,"BASE_URL","https://your-energy.b.goit.study/api");const p=new d,v=document.querySelector(".pagination-numbers"),ve=document.querySelector(".muscles-list"),y=document.getElementById("next-button"),b=document.getElementById("prev-button");let ye=5,u=1;try{v.addEventListener("click",be),v.addEventListener("click",R)}catch(e){console.log(e)}async function be(e){const{totalPages:t,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),i={filter:s,page:e.target.textContent,limit:12,totalPages:t},a=(await p.getByFilterName(i)).results;ve.innerHTML=U(a),u=i.page,Ee()}const Le=e=>{const t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),v.appendChild(t)};function we(){const{totalPages:e}=JSON.parse(localStorage.getItem("infoRequest"));if(e!==1)for(let t=1;t<=e;t++)Le(t)}function Ee(e){c(),b.addEventListener("click",()=>{c()}),y.addEventListener("click",()=>{c()}),document.querySelectorAll(".pagination-number").forEach(t=>{Number(t.getAttribute("page-index"))&&t.addEventListener("click",()=>{c()})})}function c(e){R(),xe()}function R(){document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==u&&e.classList.add("active")})}const I=e=>{e.classList.add("disabled"),e.setAttribute("disabled",!0)},C=e=>{e&&(e.classList.remove("disabled"),e.removeAttribute("disabled"))},xe=()=>{u===1?I(b):C(b),ye===u?I(y):C(y)},Se=document.querySelector(".wrap-button"),O=document.querySelector(".muscles-list"),_e=document.querySelector(".pagination-numbers");Se.addEventListener("click",ke);document.addEventListener("DOMContentLoaded",()=>{F({filter:"Muscles",page:1,limit:12})});async function ke(e){e.preventDefault();const{target:t,currentTarget:s}=e;if(t.nodeName!=="BUTTON")return;const i=t.dataset.name;t.classList.contains("btn-filter")&&[...s.children].forEach(r=>{r.firstElementChild.classList.remove("btn-filter-active")}),t.classList.add("btn-filter-active");const n={filter:i,page:1,limit:12};O.innerHTML="",F(n)}async function F(e){try{const t=await p.getByFilterName(e),s=t.results;if(!t||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}O.insertAdjacentHTML("beforeend",U(s));const{totalPages:i}=t,n=JSON.stringify({totalPages:i,categoryName:e.filter});localStorage.setItem("infoRequest",n),_e.innerHTML="",we(),c(1)}catch(t){console.log(t.message)}}function U(e){return e.map(({filter:s,name:i,imgURL:n})=>`
        <li class="muscles-item"  data-name=${i} data-filter=${s.toLocaleLowerCase().replaceAll(" ","")}>
        <a href="" class="muscles-link class="muscles-box-menu"">
        <img class="muscles-image" src="${n}" alt="${i}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${i}</p>
            </div>
            </a>
           </li>
          `).join("")}function Be(){const e=document.createElement("button");e.className="scroll-up-button hidden";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 32 32"),t.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","img/icons.svg#icon-arrow"),t.appendChild(s),e.appendChild(t),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?e.classList.remove("hidden"):e.classList.add("hidden")}),document.body.appendChild(e)}Be();const L=new T,Ne=document.querySelector(".exercises_list");let M,q,A,$;Ne.addEventListener("click",Ae);function Ie(e){return e.classList.contains("exercises_btn_start")||e.classList.contains("exercises_btn_start_text")||e.classList.contains("exercises_btn_start_icon")}const J={_id:"64f389465ae26083f39b17c2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0037.gif",name:"barbell decline wide-grip pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:307,time:3,popularity:7416};function Ce(e){e.preventDefault(),$=document.querySelector(".raiting-form-submit");const t=$.dataset.id;console.log("Add send raiting logic"),console.log("exerciseID example =>",t)}function Me(){L.close(),L.open(fe(J._id)),A=document.querySelector(".raiting-form"),A.addEventListener("submit",Ce)}function qe(){console.log("Add favorite logic")}function Ae({target:e}){Ie(e)&&(L.open(he(J)),q=document.querySelector(".add-favorite"),M=document.querySelector(".add-rating"),M.addEventListener("click",Me),q.addEventListener("click",qe))}const j=document.querySelector(".rating"),h=j.querySelectorAll(".star");h.forEach((e,t)=>{e.addEventListener("mouseover",()=>$e(t)),e.addEventListener("mouseout",D),e.addEventListener("click",()=>He(t+1))});function $e(e){D();for(let t=0;t<=e;t++)h[t].classList.add("hovered")}function D(){h.forEach(e=>{e.classList.remove("hovered")})}function He(e){j.setAttribute("data-rating",e),h.forEach((t,s)=>{s+1<=e?t.classList.add("selected"):t.classList.remove("selected")}),console.log(e)}const l=document.querySelector(".filter-list-js");document.querySelector(".exercises_list");l.addEventListener("click",Pe);async function Pe(e){e.preventDefault();const{target:t}=e;let s,i;try{t.nodeName==="IMG"&&(s=t.parentNode.parentNode.dataset.filter,i=t.parentNode.parentNode.dataset.name),(t.nodeName==="P"||t.nodeName==="H3")&&(s=t.parentNode.parentNode.parentNode.dataset.filter,i=t.parentNode.parentNode.parentNode.dataset.name);const n={[s]:[i],keyword:"pull",page:1,limit:10};l.innerHTML="",document.querySelector(".muscles-section").classList.remove("muscles-section"),l.classList.remove("muscles-list"),l.classList.add("exercises_list");const a=await p.getByFilterCategory(n);l.insertAdjacentHTML("beforeend",Te(a))}catch(n){console.log(n.message)}}function Te(e){if(e.results.length)return e.results.map(({_id:s,target:i,rating:n})=>(console.log(s),`
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
          </li>`)).join("");{const t="<p>Sorry</p>";return console.log("sorry"),t}}const z=document.querySelector("#subscribe-form"),H=z.querySelector("#email"),Re=e=>{e.preventDefault();const{value:t}=H;p.addSubscription({email:t}).then(()=>{H.value=""})};z.addEventListener("submit",Re);const K=document.createElement("div");K.id="spinner-container";document.body.appendChild(K);const Oe={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new te(Oe);
//# sourceMappingURL=spinner-cde58e88.js.map
