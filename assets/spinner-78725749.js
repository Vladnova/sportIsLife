var W=Object.defineProperty;var V=(t,e,s)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var y=(t,e,s)=>(V(t,typeof e!="symbol"?e+"":e,s),s);import{g as X,a as Z,i as ee,b as te,G as b,s as se,c as ne,S as oe}from"./vendor-938032cf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const k=document.getElementById("home"),B=document.getElementById("favorites"),N=document.getElementById("home-text"),q=document.getElementById("favorites-text");document.getElementById("navigation");const ae=window.location.href.toString();let ie=ae.slice(-10);const re=()=>{ie==="index.html"?(k.classList.add("active"),N.classList.add("black"),B.classList.remove("active"),q.classList.remove("black")):(k.classList.remove("active"),N.classList.remove("black"),B.classList.add("active"),q.classList.add("black"))};re();const le=document.getElementById("burger-button"),x=document.getElementById("burger"),ce=document.getElementById("burger-button-close"),de=async()=>{document.getElementById("header").classList.remove("container"),x.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},ue=async t=>{document.getElementById("header").classList.add("container"),x.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},me=t=>{t.key==="Escape"&&x.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};le.addEventListener("click",de);ce.addEventListener("click",ue);document.addEventListener("keydown",me);const ge={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},pe=X().length?Z():ee(ge),H=te(pe),he=new b,p=document.getElementById("sign-in"),h=document.getElementById("sign-out"),_=document.getElementById("user");_.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(h.classList.remove("display-none"),p.classList.add("display-none"));const fe=async()=>{await se(H,he).then(t=>{b.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,_.innerHTML=s.email,h.classList.remove("display-none"),p.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=b.credentialFromError(t);console.log(e)})},ye=async()=>{await ne(H).then(()=>{_.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),h.classList.add("display-none"),p.classList.remove("display-none")};p.addEventListener("click",fe);h.addEventListener("click",ye);const i=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/quote`))()}async getByFilterName(e){return await i.handleErrors(async()=>{const a=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await i.handleErrors(async()=>{const a=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await i.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await i.fetchJson(`${i.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await i.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await i.fetchJson(`${i.BASE_URL}/subscription`,a)})()}};let m=i;y(m,"BASE_URL","https://your-energy.b.goit.study/api");const c=new m,g=document.querySelector(".filter-list-js");g.addEventListener("click",ve);async function ve(t){t.preventDefault();const{target:e}=t;let s,a;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.dataset.name),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.parentNode.dataset.name);const n={[s]:[a],keyword:"pull",page:1,limit:10},o=await c.getByFilterCategory(n);o!=null&&o.results.length?(g.classList.add("exercises_list"),g.classList.remove("muscles-list"),O(o)):alert("Oops. please, try other category this list empty :)")}catch(n){console.log(n.message)}}function O(t){if(t.results.length){const e=t.results.map(({_id:s,target:a,rating:n,name:o,burnedCalories:r,time:d})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${a}</div>
          <p class="exercises_rating">${n.toFixed(1)}</p>
          <div class="exercises_list_item_icon_star">
            <svg class="exercises_list_item_icon_svg_star" width="18px" height="18px">
              <use xlink:href="./img/svg/sprite.svg#icon-star" fill=""></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${s}>Start

            <svg class="exercises_btn_start_icon" width="56px" height="18px">
              <use xlink:href="./img/svg/sprite.svg#icon-arrow"></use>
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24px" height="24px">
            <use xlink:href="./img/svg/sprite.svg#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${o.toString().length>21?o.slice(0,21)+"...":o} </h3>
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
    </li>`).join("");g.innerHTML=e}}const P=document.querySelector(".form-js");P.addEventListener("submit",be);async function be(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),n={[s.toLocaleLowerCase().replaceAll(" ","")]:e,keyword:"pull",page:1,limit:10},o=await c.getByFilterCategory(n);P.reset(),O(o)}function Le(t){return"*".repeat(t)}function R(t){return`<div class="modal-info">
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
        <p class="rating-modal">${t.rating} ${Le(t.rating)}</p>
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
      </div>`}function we(t){return`<div class="modal-get-raiting">
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
  </div>`}const l=class{open(){(!l.loaderEl||l.loaderEl.classList.contains("js-loader"))&&(l.loaderEl.style.display="block")}close(){l.loaderEl&&(l.loaderEl.style.display="none")}};let v=l;y(v,"loaderEl",document.querySelector(".js-loader"));class F{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const Ee=new F,Se=document.querySelector(".filter-list-js");let I="";const xe=async t=>{const{target:e}=t;if(e.nodeName==="BUTTON"&&e.nodeName==="BUTTON")return I=e.dataset.id,_e(I)};Se.addEventListener("click",xe);const _e=async t=>{let e=await c.getOneExercises(t);e.favotite=!1,Ee.open(R(e))},L=document.querySelector(".pagination-numbers"),ke=document.querySelector(".muscles-list");let w=1;try{L.addEventListener("click",Be),L.addEventListener("click",j)}catch(t){console.log(t)}async function Be(t){const{totalPages:e,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),a={filter:s,page:t.target.textContent,limit:12,totalPages:e};if(a.page===w)return;const o=(await c.getByFilterName(a)).results;ke.innerHTML=J(o),w=a.page,Ie()}const Ne=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),L.appendChild(e)};function qe(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)Ne(e)}function Ie(t){E(),document.querySelectorAll(".pagination-number").forEach(e=>{Number(e.getAttribute("page-index"))&&e.addEventListener("click",()=>{E()})})}function E(t){j(),handlePageButtonsStatus()}function j(){document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))==w&&t.classList.add("active")})}const Ce=document.querySelector(".wrap-button"),D=document.querySelector(".muscles-list"),Me=document.querySelector(".pagination-numbers");Ce.addEventListener("click",$e);document.addEventListener("DOMContentLoaded",()=>{U({filter:"Muscles",page:1,limit:12})});async function $e(t){t.preventDefault();const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const a=e.dataset.name;console.log(e.classList),e.classList.contains("btn-filter")&&[...s.children].forEach(r=>{r.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:a,page:1,limit:12};D.innerHTML="",U(n)}async function U(t){document.querySelector(".filter-list-js").classList.remove("exercises_list");try{const e=await c.getByFilterName(t),s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}D.insertAdjacentHTML("beforeend",J(s));const{totalPages:a}=e,n=JSON.stringify({totalPages:a,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),Me.innerHTML="",qe(),E(1)}catch(e){console.log(e.message)}}function J(t){return t.map(({filter:s,name:a,imgURL:n})=>{let o=s.toLocaleLowerCase().replaceAll(" ","");return o==="bodyparts"&&(o="bodypart"),`
        <li class="muscles-item"  data-name=${a} data-filter=${o}>
        <a href="" class="muscles-link">
        <img class="muscles-image" src="${n}" alt="${a}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${a}</p>
            </div>
            </a>
           </li>
          `}).join("")}const u={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",Ae);async function Ae(){const t=new Date().toDateString(),{date:e,quote:s,author:a}=JSON.parse(localStorage.getItem("quote"));if(t!==e){const n=await c.getQuotes(),{author:o,quote:r}=n,d={author:o,quote:r,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(d)),u.quoteText.innerHTML=r,u.quoteAuthor.innerHTML=o}else u.quoteText.innerHTML=s,u.quoteAuthor.innerHTML=a}function Te(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","./img/svg/sprite.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}Te();const S=new F,He=document.querySelector(".exercises_list");let C,M,$,A;He.addEventListener("click",je);function Oe(t){return t.classList.contains("exercises_btn_start")||t.classList.contains("exercises_btn_start_text")||t.classList.contains("exercises_btn_start_icon")}const z={_id:"64f389465ae26083f39b17c2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0037.gif",name:"barbell decline wide-grip pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:307,time:3,popularity:7416};function Pe(t){t.preventDefault(),A=document.querySelector(".raiting-form-submit");const e=A.dataset.id;console.log("Add send raiting logic"),console.log("exerciseID example =>",e)}function Re(){S.close(),S.open(we(z._id)),$=document.querySelector(".raiting-form"),$.addEventListener("submit",Pe)}function Fe(){console.log("Add favorite logic")}function je({target:t}){Oe(t)&&(S.open(R(z)),M=document.querySelector(".add-favorite"),C=document.querySelector(".add-rating"),C.addEventListener("click",Re),M.addEventListener("click",Fe))}const K=document.querySelector(".rating"),f=K.querySelectorAll(".star");f.forEach((t,e)=>{t.addEventListener("mouseover",()=>De(e)),t.addEventListener("mouseout",Q),t.addEventListener("click",()=>Ue(e+1))});function De(t){Q();for(let e=0;e<=t;e++)f[e].classList.add("hovered")}function Q(){f.forEach(t=>{t.classList.remove("hovered")})}function Ue(t){K.setAttribute("data-rating",t),f.forEach((e,s)=>{s+1<=t?e.classList.add("selected"):e.classList.remove("selected")}),console.log(t)}const G=document.querySelector("#subscribe-form"),T=G.querySelector("#email"),Je=t=>{t.preventDefault();const{value:e}=T;c.addSubscription({email:e}).then(()=>{T.value=""})};G.addEventListener("submit",Je);const Y=document.createElement("div");Y.id="spinner-container";document.body.appendChild(Y);const ze={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new oe(ze);
//# sourceMappingURL=spinner-78725749.js.map
