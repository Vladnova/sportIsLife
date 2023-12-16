var K=Object.defineProperty;var Q=(t,e,s)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var x=(t,e,s)=>(Q(t,typeof e!="symbol"?e+"":e,s),s);import{g as G,a as Y,i as W,b as X,G as y,s as Z,c as V,d as u,S as ee}from"./vendor-c6a8d4ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const q=document.getElementById("home"),N=document.getElementById("favorites"),B=document.getElementById("home-text"),k=document.getElementById("favorites-text");document.getElementById("navigation");const te=window.location.href.toString();let se=te.slice(-10);const ae=()=>{se==="index.html"?(q.classList.add("active"),B.classList.add("black"),N.classList.remove("active"),k.classList.remove("black")):(q.classList.remove("active"),B.classList.remove("black"),N.classList.add("active"),k.classList.add("black"))};ae();const ne=document.getElementById("burger-button"),w=document.getElementById("burger"),oe=document.getElementById("burger-button-close"),ie=async()=>{document.getElementById("header").classList.remove("container"),w.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},re=async t=>{document.getElementById("header").classList.add("container"),w.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},ce=t=>{t.key==="Escape"&&w.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};ne.addEventListener("click",ie);oe.addEventListener("click",re);document.addEventListener("keydown",ce);const le={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},de=G().length?Y():W(le),A=X(de),ue=new y,h=document.getElementById("sign-in"),f=document.getElementById("sign-out"),E=document.getElementById("user");E.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(f.classList.remove("display-none"),h.classList.add("display-none"));const me=async()=>{await Z(A,ue).then(t=>{y.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,E.innerHTML=s.email,f.classList.remove("display-none"),h.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=y.credentialFromError(t);console.log(e)})},ge=async()=>{await V(A).then(()=>{E.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),f.classList.add("display-none"),h.classList.remove("display-none")};h.addEventListener("click",me);f.addEventListener("click",ge);const r=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/quote`))()}async getByFilterName(e){return await r.handleErrors(async()=>{const a=new URLSearchParams({...e});return await r.fetchJson(`${r.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await r.handleErrors(async()=>{const a=new URLSearchParams({...e});return await r.fetchJson(`${r.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await r.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await r.fetchJson(`${r.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await r.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await r.fetchJson(`${r.BASE_URL}/subscription`,a)})()}};let m=r;x(m,"BASE_URL","https://your-energy.b.goit.study/api");const l=new m,g=document.querySelector(".filter-list-js");g.addEventListener("click",pe);async function pe(t){t.preventDefault();const{target:e}=t;let s,a;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.dataset.name),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.parentNode.dataset.name);const n={[s]:[a],keyword:"pull",page:1,limit:10},o=await l.getByFilterCategory(n);o!=null&&o.results.length?(g.classList.add("exercises_list"),g.classList.remove("muscles-list"),j(o)):alert("Oops. please, try other category this list empty :)")}catch(n){console.log(n.message)}}function j(t){if(t.results.length){const e=t.results.map(({_id:s,target:a,rating:n,name:o,burnedCalories:i,time:c})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${a}</div>
          <p class="exercises_rating">${n.toFixed(1)}</p>
          <div class="rating-container">
            <span class="star selected">&#9733;</span>
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
              Burned calories: <span>${i||""} / ${c||"your wish"} min</span>
            </p>
          </li>
        </ul>
        </div>
    </li>`).join("");g.innerHTML=e}}const H=document.querySelector(".form-js");H.addEventListener("submit",he);async function he(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),n={[s.toLocaleLowerCase().replaceAll(" ","")]:e,keyword:"pull",page:1,limit:10},o=await l.getByFilterCategory(n);H.reset(),j(o)}class fe{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const p=new fe;u.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class ve{error(e){u.error({title:"Error",message:e})}success(e){u.success({title:"OK",message:e})}info(e){u.info({title:"Info",message:e})}}const _=new ve,R=document.querySelector("#subscribe-form"),v=R.querySelector("#email");R.addEventListener("submit",ye);async function ye(t){t.preventDefault();const{value:e}=v;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){_.info("Enter the following sample email - 'test@gmail.com'"),v.value="";return}try{const a=await l.addSubscription({email:e});_.success(a.message)}catch(a){console.log(a)}finally{v.value=""}}const b=document.querySelector(".pagination-numbers"),be=document.querySelector(".muscles-list");let L=1;try{b.addEventListener("click",Le),b.addEventListener("click",O)}catch(t){console.log(t)}async function Le(t){const{totalPages:e,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),a={filter:s,page:t.target.textContent,limit:12,totalPages:e};if(a.page===L)return;const o=(await l.getByFilterName(a)).results;be.innerHTML=U(o),L=a.page,Ee()}const Se=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),b.appendChild(e)};function we(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)Se(e)}function Ee(t){S(),document.querySelectorAll(".pagination-number").forEach(e=>{Number(e.getAttribute("page-index"))&&e.addEventListener("click",()=>{S()})})}function S(t){O(),handlePageButtonsStatus()}function O(){document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))==L&&t.classList.add("active")})}const xe=document.querySelector(".wrap-button"),P=document.querySelector(".muscles-list"),qe=document.querySelector(".pagination-numbers");xe.addEventListener("click",Ne);document.addEventListener("DOMContentLoaded",()=>{F({filter:"Muscles",page:1,limit:12})});async function Ne(t){t.preventDefault();const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const a=e.dataset.name;console.log(e.classList),e.classList.contains("btn-filter")&&[...s.children].forEach(i=>{i.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:a,page:1,limit:12};P.innerHTML="",F(n)}async function F(t){document.querySelector(".filter-list-js").classList.remove("exercises_list");try{const e=await l.getByFilterName(t),s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}P.insertAdjacentHTML("beforeend",U(s));const{totalPages:a}=e,n=JSON.stringify({totalPages:a,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),qe.innerHTML="",we(),S(1)}catch(e){console.log(e.message)}}function U(t){return t.map(({filter:s,name:a,imgURL:n})=>{let o=s.toLocaleLowerCase().replaceAll(" ","");return o==="bodyparts"&&(o="bodypart"),`
        <li class="muscles-item"  data-name=${a} data-filter=${o}>
        <a href="" class="muscles-link">
        <img class="muscles-image" src="${n}" alt="${a}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${a}</p>
            </div>
            </a>
           </li>
          `}).join("")}const d={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",Be);async function Be(){const t=new Date().toDateString(),{date:e,quote:s,author:a}=JSON.parse(localStorage.getItem("quote"));if(t!==e){const n=await l.getQuotes(),{author:o,quote:i}=n,c={author:o,quote:i,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(c)),d.quoteText.innerHTML=i,d.quoteAuthor.innerHTML=o}else d.quoteText.innerHTML=s,d.quoteAuthor.innerHTML=a}function ke(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","/img/svg/sprite.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}ke();function _e(t){let e='<div class="rating-container" data-rating="0">';for(let s=1;s<=5;s+=1)s<=t?e+=`<span class="star-js selected" data-value="${s}">&#9733;</span>`:e+=`<span class="star-js" data-value="${s}">&#9733;</span>`;return e+"</div>"}function D(t){return`<div class="modal-info" data-id="${t._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="heart-icon">
        <use href="./img/svg/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img class="modal-img" src="${t.gifUrl}" alt="${t.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${t.name}</h3>
        <div class="rating-modal-container-wrapper"><p>${t.rating.toFixed(1)}</p>${_e(t.rating)}</div>
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
        <div class="refresh-button-js" data-favorite="false">
          <button class="add-favorite-js" type="button">
            <span>Add to favorites</span>
            <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
              <use href="./img/svg/sprite.svg#icon-heart"></use>
            </svg>
          </button>
        </div>
        <button class="add-rating" type="button">Give a rating</button>
      </div>`}function Ie(t){return`<div class="modal-get-raiting" data-id="${t}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="heart-icon">
        <use href="./img/svg/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <div class="rating-container-js" data-rating="" data-id="">
          <p class="user-rating-js">0.0</p>
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
  </div>`}function Ce(){const t=document.querySelector(".rating-container-js"),e=t.querySelectorAll(".star-js");let s=t.querySelector(".user-rating-js");e.forEach((i,c)=>{i.addEventListener("mouseover",()=>a(c)),i.addEventListener("mouseout",n),i.addEventListener("click",()=>o(c+1))});function a(i){n();for(let c=0;c<=i;c++)e[c].classList.add("hovered"),s.textContent=`${c+1}.0`}function n(){e.forEach(i=>{const c=t.dataset.rating;i.classList.remove("hovered"),s.textContent=`${c}.0`})}function o(i){t.setAttribute("data-rating",i),e.forEach((c,z)=>{z+1<=i?c.classList.add("selected"):c.classList.remove("selected")})}}const Me=document.querySelector(".filter-list-js");let I="",C,M,$,T;async function $e(t){t.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,n=document.querySelector(".raiting-form-field-input").value,o=document.querySelector(".raiting-form-field-comment").value,i={rate:Number(a),email:n,review:o},c=await l.addExercisesRate(e,i);console.log(c)}async function Te(){const t=document.querySelector(".modal-info").dataset.id;p.close(),p.open(Ie(t)),Ce(),T=document.querySelector(".raiting-form"),T.addEventListener("submit",$e)}function Ae(){const t=document.querySelector(".refresh-button-js"),e=document.querySelector(".add-rating");t.dataset.favorite==="false"?(t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="./img/svg/sprite.svg#icon-trash"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="true",e.style.fontSize="15px"):(t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="./img/svg/sprite.svg#icon-heart"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="false",e.style.fontSize="16px"),console.log(t.dataset.favorite)}function je({target:t}){if(t.nodeName==="BUTTON"){if(t.nodeName==="BUTTON")return I=t.dataset.id,C=He(I);ifStartButton(t)&&p.open(D(C))}}Me.addEventListener("click",je);const He=async t=>{let e=await l.getOneExercises(t);e.favotite=!1,p.open(D(e)),$=document.querySelector(".refresh-button-js"),M=document.querySelector(".add-rating"),M.addEventListener("click",Te),$.addEventListener("click",Ae)},J=document.createElement("div");J.id="spinner-container";document.body.appendChild(J);const Re={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new ee(Re);
//# sourceMappingURL=spinner-417948c6.js.map
