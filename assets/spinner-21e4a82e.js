var j=Object.defineProperty;var z=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var S=(e,t,s)=>(z(e,typeof t!="symbol"?t+"":t,s),s);import{g as K,a as Q,i as G,b as Y,G as f,s as W,c as V,S as X}from"./vendor-938032cf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const x=document.getElementById("home"),_=document.getElementById("favorites"),k=document.getElementById("home-text"),q=document.getElementById("favorites-text");document.getElementById("navigation");const Z=window.location.href.toString();let ee=Z.slice(-10);const te=()=>{ee==="index.html"?(x.classList.add("active"),k.classList.add("black"),_.classList.remove("active"),q.classList.remove("black")):(x.classList.remove("active"),k.classList.remove("black"),_.classList.add("active"),q.classList.add("black"))};te();const se=document.getElementById("burger-button"),w=document.getElementById("burger"),ne=document.getElementById("burger-button-close"),oe=async()=>{w.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},ie=async e=>{w.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},ae=e=>{e.key==="Escape"&&w.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};se.addEventListener("click",oe);ne.addEventListener("click",ie);document.addEventListener("keydown",ae);const re={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},ce=K().length?Q():G(re),$=Y(ce),le=new f,g=document.getElementById("sign-in"),p=document.getElementById("sign-out"),E=document.getElementById("user");E.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(p.classList.remove("display-none"),g.classList.add("display-none"));const de=async()=>{await W($,le).then(e=>{f.credentialFromResult(e).accessToken;const s=e.user;localStorage.user=s.email,E.innerHTML=s.email,p.classList.remove("display-none"),g.classList.add("display-none")}).catch(e=>{e.message,e.customData.email;const t=f.credentialFromError(e);console.log(t)})},ue=async()=>{await V($).then(()=>{E.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(e=>{console.log(e.message)}),p.classList.add("display-none"),g.classList.remove("display-none")};g.addEventListener("click",de);p.addEventListener("click",ue);function me(e){return"*".repeat(e)}function ge(e){return`<div class="modal-info">
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
        <p class="rating-modal">${e.rating} ${me(e.rating)}</p>
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
      </div>`}function pe(e){return`<div class="modal-get-raiting">
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
  </div>`}class A{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=t=>this.closeEsc(t),this.overlayClickHandler=t=>this.closeBack(t)}open(t){this.overlay.innerHTML=t,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(t){t.key==="Escape"&&this.close()}closeBack(t){t.target===this.overlay&&this.close()}}new A;const a=class{static handleErrors(t){return async()=>{try{return await t()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(t,s){return(await fetch(t,s)).json()}async getQuotes(){return await a.handleErrors(async()=>await a.fetchJson(`${a.BASE_URL}/quote`))()}async getByFilterName(t){return await a.handleErrors(async()=>{const o=new URLSearchParams({...t});return await a.fetchJson(`${a.BASE_URL}/filters?${o}`)})()}async getByFilterCategory(t){return await a.handleErrors(async()=>{const o=new URLSearchParams({...t});return await a.fetchJson(`${a.BASE_URL}/exercises?${o}`)})()}async getOneExercises(t){return await a.handleErrors(async()=>await a.fetchJson(`${a.BASE_URL}/exercises/${t}`))()}async addExercisesRate(t,s){return await a.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await a.fetchJson(`${a.BASE_URL}/exercises/${t}/rating`,n)})()}async addSubscription(t){return await a.handleErrors(async()=>{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await a.fetchJson(`${a.BASE_URL}/subscription`,o)})()}};let m=a;S(m,"BASE_URL","https://your-energy.b.goit.study/api");const l=new m,y=document.querySelector(".pagination-numbers"),he=document.querySelector(".muscles-list");let v=1;try{y.addEventListener("click",fe),y.addEventListener("click",T)}catch(e){console.log(e)}async function fe(e){const{totalPages:t,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),o={filter:s,page:e.target.textContent,limit:12,totalPages:t};if(o.page===v)return;const i=(await l.getByFilterName(o)).results;he.innerHTML=O(i),v=o.page,be()}const ye=e=>{const t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),y.appendChild(t)};function ve(){const{totalPages:e}=JSON.parse(localStorage.getItem("infoRequest"));if(e!==1)for(let t=1;t<=e;t++)ye(t)}function be(e){b(),document.querySelectorAll(".pagination-number").forEach(t=>{Number(t.getAttribute("page-index"))&&t.addEventListener("click",()=>{b()})})}function b(e){T(),handlePageButtonsStatus()}function T(){document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==v&&e.classList.add("active")})}const Le=document.querySelector(".wrap-button"),H=document.querySelector(".muscles-list"),we=document.querySelector(".pagination-numbers");Le.addEventListener("click",Ee);document.addEventListener("DOMContentLoaded",()=>{P({filter:"Muscles",page:1,limit:12})});async function Ee(e){e.preventDefault();const{target:t,currentTarget:s}=e;if(t.nodeName!=="BUTTON")return;const o=t.dataset.name;console.log(t.classList),t.classList.contains("btn-filter")&&[...s.children].forEach(r=>{r.firstElementChild.classList.remove("btn-filter-active")}),t.classList.add("btn-filter-active");const n={filter:o,page:1,limit:12};H.innerHTML="",P(n),document.querySelector(".filter-list-js").classList.add("muscles-section")}async function P(e){try{const t=await l.getByFilterName(e),s=t.results;if(!t||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}H.insertAdjacentHTML("beforeend",O(s));const{totalPages:o}=t,n=JSON.stringify({totalPages:o,categoryName:e.filter});localStorage.setItem("infoRequest",n),we.innerHTML="",ve(),b(1)}catch(t){console.log(t.message)}}function O(e){return e.map(({filter:s,name:o,imgURL:n})=>{let i=s.toLocaleLowerCase().replaceAll(" ","");return i==="bodyparts"&&(i="bodypart"),`
        <li class="muscles-item"  data-name=${o} data-filter=${i}>
        <a href="" class="muscles-link">
        <img class="muscles-image" src="${n}" alt="${o}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${o}</p>
            </div>
            </a>
           </li>
          `}).join("")}const u={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",Se);async function Se(){const e=new Date().toDateString(),{date:t,quote:s,author:o}=JSON.parse(localStorage.getItem("quote"));if(e!==t){const n=await l.getQuotes(),{author:i,quote:r}=n,d={author:i,quote:r,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(d)),u.quoteText.innerHTML=r,u.quoteAuthor.innerHTML=i}else u.quoteText.innerHTML=s,u.quoteAuthor.innerHTML=o}function xe(){const e=document.createElement("button");e.className="scroll-up-button hidden";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 32 32"),t.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","img/icons.svg#icon-arrow"),t.appendChild(s),e.appendChild(t),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?e.classList.remove("hidden"):e.classList.add("hidden")}),document.body.appendChild(e)}xe();const L=new A,_e=document.querySelector(".exercises_list");let B,N,M,I;_e.addEventListener("click",Me);function ke(e){return e.classList.contains("exercises_btn_start")||e.classList.contains("exercises_btn_start_text")||e.classList.contains("exercises_btn_start_icon")}const R={_id:"64f389465ae26083f39b17c2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0037.gif",name:"barbell decline wide-grip pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:307,time:3,popularity:7416};function qe(e){e.preventDefault(),I=document.querySelector(".raiting-form-submit");const t=I.dataset.id;console.log("Add send raiting logic"),console.log("exerciseID example =>",t)}function Be(){L.close(),L.open(pe(R._id)),M=document.querySelector(".raiting-form"),M.addEventListener("submit",qe)}function Ne(){console.log("Add favorite logic")}function Me({target:e}){ke(e)&&(L.open(ge(R)),N=document.querySelector(".add-favorite"),B=document.querySelector(".add-rating"),B.addEventListener("click",Be),N.addEventListener("click",Ne))}const F=document.querySelector(".rating"),h=F.querySelectorAll(".star");h.forEach((e,t)=>{e.addEventListener("mouseover",()=>Ie(t)),e.addEventListener("mouseout",D),e.addEventListener("click",()=>Ce(t+1))});function Ie(e){D();for(let t=0;t<=e;t++)h[t].classList.add("hovered")}function D(){h.forEach(e=>{e.classList.remove("hovered")})}function Ce(e){F.setAttribute("data-rating",e),h.forEach((t,s)=>{s+1<=e?t.classList.add("selected"):t.classList.remove("selected")}),console.log(e)}const c=document.querySelector(".filter-list-js");c.addEventListener("click",$e);async function $e(e){e.preventDefault();const{target:t}=e;let s,o;try{t.nodeName==="IMG"&&(s=t.parentNode.parentNode.dataset.filter,o=t.parentNode.parentNode.dataset.name),(t.nodeName==="P"||t.nodeName==="H3")&&(s=t.parentNode.parentNode.parentNode.dataset.filter,o=t.parentNode.parentNode.parentNode.dataset.name);const n={[s]:[o],keyword:"pull",page:1,limit:10},i=await l.getByFilterCategory(n);i.results.length?(c.innerHTML="",document.querySelector(".muscles-section").classList.remove("muscles-section"),c.classList.remove("muscles-list"),c.classList.add("exercises_list"),c.insertAdjacentHTML("afterbegin",Ae(i))):alert("Oops. please, try other category this list empty :)")}catch(n){console.log(n.message)}}function Ae(e){if(e.results.length)return e.results.map(({_id:s,target:o,rating:n,name:i,burnedCalories:r,time:d})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${o}</div>
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
        <h3 class="exercises_list_item_middle_title">${i}</h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${r||""} / ${d||"your wish"} min</span>
            </p>
          </li>
        </ul>
        </div>
    </li>`).join("")}const U=document.querySelector("#subscribe-form"),C=U.querySelector("#email"),Te=e=>{e.preventDefault();const{value:t}=C;l.addSubscription({email:t}).then(()=>{C.value=""})};U.addEventListener("submit",Te);const J=document.createElement("div");J.id="spinner-container";document.body.appendChild(J);const He={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new X(He);
//# sourceMappingURL=spinner-21e4a82e.js.map
