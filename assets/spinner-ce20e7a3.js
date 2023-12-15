var D=Object.defineProperty;var z=(e,t,s)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var E=(e,t,s)=>(z(e,typeof t!="symbol"?t+"":t,s),s);import{g as K,a as G,i as Y,b as Q,G as p,s as W,c as V,S as X}from"./vendor-938032cf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const x=document.getElementById("home"),S=document.getElementById("favorites"),_=document.getElementById("home-text"),k=document.getElementById("favorites-text");document.getElementById("navigation");const Z=window.location.href.toString();let B=Z.slice(-10);const ee=()=>{console.log(B),B==="index.html"?(x.classList.add("active"),_.classList.add("black"),S.classList.remove("active"),k.classList.remove("black")):(x.classList.remove("active"),_.classList.remove("black"),S.classList.add("active"),k.classList.add("black"))};ee();const te=document.getElementById("burger-button"),b=document.getElementById("burger"),se=document.getElementById("burger-button-close"),ne=async()=>{b.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},oe=async e=>{b.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},ie=e=>{e.key==="Escape"&&b.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};te.addEventListener("click",ne);se.addEventListener("click",oe);document.addEventListener("keydown",ie);const ae={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},re=K().length?G():Y(ae),$=Q(re),le=new p,d=document.getElementById("sign-in"),u=document.getElementById("sign-out"),L=document.getElementById("user");L.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(u.classList.remove("display-none"),d.classList.add("display-none"));const ce=async()=>{await W($,le).then(e=>{p.credentialFromResult(e).accessToken;const s=e.user;localStorage.user=s.email,L.innerHTML=s.email,u.classList.remove("display-none"),d.classList.add("display-none")}).catch(e=>{e.message,e.customData.email;const t=p.credentialFromError(e);console.log(t)})},de=async()=>{await V($).then(()=>{L.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(e=>{console.log(e.message)}),u.classList.add("display-none"),d.classList.remove("display-none")};d.addEventListener("click",ce);u.addEventListener("click",de);function ue(e){return"*".repeat(e)}function me(e){return`<div class="modal-info">
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
        <p class="rating-modal">${e.rating} ${ue(e.rating)}</p>
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
      </div>`}function ge(e){return`<div class="modal-get-raiting">
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
  </div>`}class A{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=t=>this.closeEsc(t),this.overlayClickHandler=t=>this.closeBack(t)}open(t){this.overlay.innerHTML=t,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(t){t.key==="Escape"&&this.close()}closeBack(t){t.target===this.overlay&&this.close()}}new A;const a=class{static handleErrors(t){return async()=>{try{return await t()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(t,s){return(await fetch(t,s)).json()}async getQuotes(){return await a.handleErrors(async()=>await a.fetchJson(`${a.BASE_URL}/quote`))()}async getByFilterName(t){return await a.handleErrors(async()=>{const n=new URLSearchParams({...t});return await a.fetchJson(`${a.BASE_URL}/filters?${n}`)})()}async getByFilterCategory(t){return await a.handleErrors(async()=>{const n=new URLSearchParams({...t});return await a.fetchJson(`${a.BASE_URL}/exercises?${n}`)})()}async getOneExercises(t){return await a.handleErrors(async()=>await a.fetchJson(`${a.BASE_URL}/exercises/${t}`))()}async addExercisesRate(t,s){return await a.handleErrors(async()=>{const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await a.fetchJson(`${a.BASE_URL}/exercises/${t}/rating`,o)})()}async addSubscription(t){return await a.handleErrors(async()=>{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await a.fetchJson(`${a.BASE_URL}/subscription`,n)})()}};let c=a;E(c,"BASE_URL","https://your-energy.b.goit.study/api");const m=new c,h=document.querySelector(".pagination-numbers"),pe=document.querySelector(".muscles-list");let f=1;try{h.addEventListener("click",he),h.addEventListener("click",H)}catch(e){console.log(e)}async function he(e){const{totalPages:t,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),n={filter:s,page:e.target.textContent,limit:12,totalPages:t};if(n.page===f)return;const i=(await m.getByFilterName(n)).results;pe.innerHTML=R(i),f=n.page,ye()}const fe=e=>{const t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),h.appendChild(t)};function ve(){const{totalPages:e}=JSON.parse(localStorage.getItem("infoRequest"));if(e!==1)for(let t=1;t<=e;t++)fe(t)}function ye(e){v(),document.querySelectorAll(".pagination-number").forEach(t=>{Number(t.getAttribute("page-index"))&&t.addEventListener("click",()=>{v()})})}function v(e){H(),handlePageButtonsStatus()}function H(){document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==f&&e.classList.add("active")})}const be=document.querySelector(".wrap-button"),P=document.querySelector(".muscles-list"),Le=document.querySelector(".pagination-numbers");be.addEventListener("click",we);document.addEventListener("DOMContentLoaded",()=>{T({filter:"Muscles",page:1,limit:12})});async function we(e){e.preventDefault();const{target:t,currentTarget:s}=e;if(t.nodeName!=="BUTTON")return;const n=t.dataset.name;console.log(t.classList),t.classList.contains("btn-filter")&&[...s.children].forEach(r=>{r.firstElementChild.classList.remove("btn-filter-active")}),t.classList.add("btn-filter-active");const o={filter:n,page:1,limit:12};P.innerHTML="",T(o),document.querySelector(".filter-list-js").classList.add("muscles-section")}async function T(e){try{const t=await m.getByFilterName(e),s=t.results;if(!t||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}P.insertAdjacentHTML("beforeend",R(s));const{totalPages:n}=t,o=JSON.stringify({totalPages:n,categoryName:e.filter});localStorage.setItem("infoRequest",o),Le.innerHTML="",ve(),v(1)}catch(t){console.log(t.message)}}function R(e){return e.map(({filter:s,name:n,imgURL:o})=>{console.log(s);let i=s.toLocaleLowerCase().replaceAll(" ","");return console.log(s),console.log(i),i==="bodyparts"&&(i="bodypart"),`
        <li class="muscles-item"  data-name=${n} data-filter=${i}>
        <a href="" class="muscles-link">
        <img class="muscles-image" src="${o}" alt="${n}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${n}</p>
            </div>
            </a>
           </li>
          `}).join("")}function Ee(){const e=document.createElement("button");e.className="scroll-up-button hidden";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 32 32"),t.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","img/icons.svg#icon-arrow"),t.appendChild(s),e.appendChild(t),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?e.classList.remove("hidden"):e.classList.add("hidden")}),document.body.appendChild(e)}Ee();const y=new A,xe=document.querySelector(".exercises_list");let N,I,M,q;xe.addEventListener("click",Ne);function Se(e){return e.classList.contains("exercises_btn_start")||e.classList.contains("exercises_btn_start_text")||e.classList.contains("exercises_btn_start_icon")}const O={_id:"64f389465ae26083f39b17c2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0037.gif",name:"barbell decline wide-grip pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:307,time:3,popularity:7416};function _e(e){e.preventDefault(),q=document.querySelector(".raiting-form-submit");const t=q.dataset.id;console.log("Add send raiting logic"),console.log("exerciseID example =>",t)}function ke(){y.close(),y.open(ge(O._id)),M=document.querySelector(".raiting-form"),M.addEventListener("submit",_e)}function Be(){console.log("Add favorite logic")}function Ne({target:e}){Se(e)&&(y.open(me(O)),I=document.querySelector(".add-favorite"),N=document.querySelector(".add-rating"),N.addEventListener("click",ke),I.addEventListener("click",Be))}const F=document.querySelector(".rating"),g=F.querySelectorAll(".star");g.forEach((e,t)=>{e.addEventListener("mouseover",()=>Ie(t)),e.addEventListener("mouseout",U),e.addEventListener("click",()=>Me(t+1))});function Ie(e){U();for(let t=0;t<=e;t++)g[t].classList.add("hovered")}function U(){g.forEach(e=>{e.classList.remove("hovered")})}function Me(e){F.setAttribute("data-rating",e),g.forEach((t,s)=>{s+1<=e?t.classList.add("selected"):t.classList.remove("selected")}),console.log(e)}const l=document.querySelector(".filter-list-js");l.addEventListener("click",qe);async function qe(e){e.preventDefault();const{target:t}=e;let s,n;try{t.nodeName==="IMG"&&(s=t.parentNode.parentNode.dataset.filter,n=t.parentNode.parentNode.dataset.name,console.log(s),console.log(n)),(t.nodeName==="P"||t.nodeName==="H3")&&(s=t.parentNode.parentNode.parentNode.dataset.filter,n=t.parentNode.parentNode.parentNode.dataset.name,console.log(s),console.log(n));const o={[s]:[n],keyword:"pull",page:1,limit:10};l.innerHTML="",document.querySelector(".muscles-section").classList.remove("muscles-section"),l.classList.remove("muscles-list"),l.classList.add("exercises_list");const i=await m.getByFilterCategory(o);l.insertAdjacentHTML("afterbegin",Ce(i))}catch(o){console.log(o.message)}}function Ce(e){if(console.log(e.results),e.results.length)return e.results.map(({_id:s,target:n,rating:o,name:i,burnedCalories:r,time:w})=>(console.log(s),`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${n}</div>
          <p class="exercises_rating">${o}.0</p>
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
        <h3 class="exercises_list_item_middle_title">${i}</h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${r||""} / ${w||"your wish"} min</span>
            </p>
          </li>
        </ul>
        </div>
    </li>`)).join("");console.log("sorry")}const j=document.querySelector("#subscribe-form"),C=j.querySelector("#email"),$e=e=>{e.preventDefault();const{value:t}=C;m.addSubscription({email:t}).then(()=>{C.value=""})};j.addEventListener("submit",$e);const J=document.createElement("div");J.id="spinner-container";document.body.appendChild(J);const Ae={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new X(Ae);
//# sourceMappingURL=spinner-ce20e7a3.js.map
