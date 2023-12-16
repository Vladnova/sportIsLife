var Y=Object.defineProperty;var W=(t,e,s)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var b=(t,e,s)=>(W(t,typeof e!="symbol"?e+"":e,s),s);import{g as X,a as Z,i as V,b as ee,G as S,s as te,c as se,d as u,S as ae}from"./vendor-c6a8d4ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const N=document.getElementById("home"),$=document.getElementById("favorites"),I=document.getElementById("home-text"),C=document.getElementById("favorites-text");document.getElementById("navigation");const ne=window.location.href.toString();let oe=ne.slice(-10);const ie=()=>{oe==="index.html"?(N.classList.add("active"),I.classList.add("black"),$.classList.remove("active"),C.classList.remove("black")):(N.classList.remove("active"),I.classList.remove("black"),$.classList.add("active"),C.classList.add("black"))};ie();const re=document.getElementById("burger-button"),k=document.getElementById("burger"),le=document.getElementById("burger-button-close"),ce=async()=>{document.getElementById("header").classList.remove("container"),k.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},de=async t=>{document.getElementById("header").classList.add("container"),k.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},ue=t=>{t.key==="Escape"&&k.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};re.addEventListener("click",ce);le.addEventListener("click",de);document.addEventListener("keydown",ue);const me={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},ge=X().length?Z():V(me),R=ee(ge),pe=new S,v=document.getElementById("sign-in"),y=document.getElementById("sign-out"),B=document.getElementById("user");B.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(y.classList.remove("display-none"),v.classList.add("display-none"));const fe=async()=>{await te(R,pe).then(t=>{S.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,B.innerHTML=s.email,y.classList.remove("display-none"),v.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=S.credentialFromError(t);console.log(e)})},he=async()=>{await se(R).then(()=>{B.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),y.classList.add("display-none"),v.classList.remove("display-none")};v.addEventListener("click",fe);y.addEventListener("click",he);const r=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/quote`))()}async getByFilterName(e){return await r.handleErrors(async()=>{const a=new URLSearchParams({...e});return await r.fetchJson(`${r.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await r.handleErrors(async()=>{const a=new URLSearchParams({...e});return await r.fetchJson(`${r.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await r.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await r.fetchJson(`${r.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await r.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await r.fetchJson(`${r.BASE_URL}/subscription`,a)})()}};let m=r;b(m,"BASE_URL","https://your-energy.b.goit.study/api");const c=new m,g=document.querySelector(".filter-list-js");g.addEventListener("click",ve);async function ve(t){t.preventDefault(),document.querySelector(".form-js").classList.remove("hidden-form");const{target:e}=t;let s,a;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,a=e.alt,console.log(e.alt)),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.dataset.alt,console.log(`----->${a}`));const n={[s]:[a],keyword:"pull",page:1,limit:10},o=await c.getByFilterCategory(n);o!=null&&o.results.length?(g.classList.add("exercises_list"),g.classList.remove("muscles-list"),O(o)):alert("Oops. please, try other category this list empty :)")}catch(n){console.log(n.message)}}function O(t){if(t.results.length){const e=t.results.map(({_id:s,target:a,rating:n,name:o,burnedCalories:i,time:l})=>(console.log(a),`
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
        <h3 class="exercises_list_item_middle_title" id="name">${o.toString().length>20?o.slice(0,20)+"...":o} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${i||""} / ${l||"your wish"} min</span>
            </p>
          </li>
        </ul>
        </div>
    </li>`)).join("");g.innerHTML=e}}const P=document.querySelector(".form-js");P.addEventListener("submit",ye);async function ye(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),n={[s.toLocaleLowerCase().replaceAll(" ","")]:e,keyword:"pull",page:1,limit:10},o=await c.getByFilterCategory(n);P.reset(),O(o)}console.log("test2");function be(t){const e=(t%1).toFixed(1)*100;let s='<div class="rating-container" data-rating="0">';for(let a=1;a<=t+1;a+=1)a<=t?s+=`<span class="star-js selected" data-value="${a}">&#9733;</span>`:e>0&&(s+=`<span class="star-js last-star-js" style="
                    background: linear-gradient(
                      to right,
                      var(--stars-background-active-color) ${e}%,
                      rgba(244, 244, 244, 0.2) ${100-e}%
                    );
                    display: inline-block;
                    background-clip: text;
                  " data-value="${a}">&#9733;</span>`);for(let a=t+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}">&#9733;</span>`;return s+"</div>"}function F(t){return`<div class="modal-info" data-id="${t._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="./img/svg/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img class="modal-img" src="${t.gifUrl}" alt="${t.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${t.name}</h3>
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
        <div class="refresh-button-js" data-favorite="false">
          <button class="add-favorite-js" type="button">
            <span>Add to favorites</span>
            <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
              <use href="./img/svg/sprite.svg#icon-heart"></use>
            </svg>
          </button>
        </div>
        <button class="add-rating" type="button">Give a rating</button>
      </div>`}function Le(t){return`<div class="modal-get-raiting" data-id="${t}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="./img/svg/sprite.svg#icon-close"></use>
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
  </div>`}const d=class{open(){(!d.loaderEl||d.loaderEl.classList.contains("js-loader"))&&(d.loaderEl.style.display="block")}close(){d.loaderEl&&(d.loaderEl.style.display="none")}};let L=d;b(L,"loaderEl",document.querySelector(".js-loader"));class Ee{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const p=new Ee;u.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class Se{error(e){u.error({title:"Error",message:e})}success(e){u.success({title:"OK",message:e})}info(e){u.info({title:"Info",message:e})}}const f=new Se,U=document.querySelector("#subscribe-form"),E=U.querySelector("#email");U.addEventListener("submit",we);async function we(t){t.preventDefault();const{value:e}=E;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){f.info("Enter the following sample email - 'test@gmail.com'"),E.value="";return}try{const a=await c.addSubscription({email:e});f.success(a.message)}catch(a){console.log(a)}finally{E.value=""}}const w=document.querySelector(".pagination-numbers"),xe=document.querySelector(".muscles-list");let x=1;try{w.addEventListener("click",qe),w.addEventListener("click",D)}catch(t){console.log(t)}async function qe(t){const{totalPages:e,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),a={filter:s,page:t.target.textContent,limit:12,totalPages:e};if(a.page===x)return;const o=(await c.getByFilterName(a)).results;xe.innerHTML=Q(o),x=a.page,Ne()}const ke=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),w.appendChild(e)};function Be(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)ke(e)}function Ne(t){q(),document.querySelectorAll(".pagination-number").forEach(e=>{Number(e.getAttribute("page-index"))&&e.addEventListener("click",()=>{q()})})}function q(t){D(),handlePageButtonsStatus()}function D(){document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))==x&&t.classList.add("active")})}const $e=document.querySelector(".wrap-button"),J=document.querySelector(".muscles-list"),Ie=document.querySelector(".pagination-numbers");$e.addEventListener("click",Ce);document.addEventListener("DOMContentLoaded",()=>{z({filter:"Muscles",page:1,limit:12})});async function Ce(t){t.preventDefault();const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const a=e.dataset.name;console.log(e.classList),e.classList.contains("btn-filter")&&[...s.children].forEach(i=>{i.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active"),console.log(`------>${a}`);const n={filter:a,page:1,limit:12};J.innerHTML="",z(n)}async function z(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await c.getByFilterName(t),s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}J.insertAdjacentHTML("beforeend",Q(s));const{totalPages:a}=e,n=JSON.stringify({totalPages:a,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),Ie.innerHTML="",Be(),q(1)}catch(e){console.log(e.message)}}function Q(t){return t.map(({filter:s,name:a,imgURL:n})=>{console.log(a);let o=s.toLocaleLowerCase().replaceAll(" ","");return a.includes(" ")&&console.log(" -----> я куку"),o==="bodyparts"&&(o="bodypart"),`
        <li class="muscles-item"  alt=${a} data-filter=${o}>
        <a href="" class="muscles-link" data-alt="${a}">
        <img class="muscles-image" src="${n}" alt="${a}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${a}</p>
            </div>
            </a>
           </li>
          `}).join("")}const h={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",_e);async function _e(){const t=localStorage.getItem("quote");if(t){const e=new Date().toDateString(),{date:s,quote:a,author:n}=JSON.parse(t);e!==s?_():(h.quoteText.innerHTML=a,h.quoteAuthor.innerHTML=n)}else _()}async function _(){const t=await c.getQuotes(),{author:e,quote:s}=t,a={author:e,quote:s,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(a)),h.quoteText.innerHTML=s,h.quoteAuthor.innerHTML=e}function Me(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","/img/svg/sprite.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}Me();function Te(){const t=document.querySelector(".rating-container-js"),e=t.querySelectorAll(".star-js");let s=t.querySelector(".user-rating-js");e.forEach((i,l)=>{i.addEventListener("mouseover",()=>a(l)),i.addEventListener("mouseout",n),i.addEventListener("click",()=>o(l+1))});function a(i){n();for(let l=0;l<=i;l++)e[l].classList.add("hovered"),s.textContent=`${l+1}`}function n(){e.forEach(i=>{const l=t.dataset.rating;i.classList.remove("hovered"),s.textContent=`${l||0}`})}function o(i){t.setAttribute("data-rating",i),e.forEach((l,G)=>{G+1<=i?l.classList.add("selected"):l.classList.remove("selected")})}}const je=document.querySelector(".filter-list-js");let M="",T,j,A,H;async function Ae(t){t.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,n=document.querySelector(".raiting-form-field-input").value,o=document.querySelector(".raiting-form-field-comment").value,i={rate:Number(a),email:n,review:o},l=await c.addExercisesRate(e,i);l.message?f.error(`${l.message}`):f.success(`Thank you for your mark - ${i.rate} for ${l.name}`)}async function He(){const t=document.querySelector(".modal-info").dataset.id;p.close(),p.open(Le(t)),Te(),H=document.querySelector(".raiting-form"),H.addEventListener("submit",Ae)}function Re(){const t=document.querySelector(".refresh-button-js"),e=document.querySelector(".add-rating");t.dataset.favorite==="false"?(t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="./img/svg/sprite.svg#icon-trash"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="true",e.style.fontSize="15px"):(t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="./img/svg/sprite.svg#icon-heart"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="false",e.style.fontSize="16px")}function Oe({target:t}){if(t.nodeName==="BUTTON"){if(t.nodeName==="BUTTON")return M=t.dataset.id,T=Pe(M);ifStartButton(t)&&p.open(F(T))}}je.addEventListener("click",Oe);const Pe=async t=>{let e=await c.getOneExercises(t);e.favotite=!1,p.open(F(e)),A=document.querySelector(".refresh-button-js"),j=document.querySelector(".add-rating"),j.addEventListener("click",He),A.addEventListener("click",Re)},K=document.createElement("div");K.id="spinner-container";document.body.appendChild(K);const Fe={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new ae(Fe);
//# sourceMappingURL=spinner-be414d2b.js.map
