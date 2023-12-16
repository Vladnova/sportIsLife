var X=Object.defineProperty;var Z=(t,e,s)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var L=(t,e,s)=>(Z(t,typeof e!="symbol"?e+"":e,s),s);import{g as V,a as ee,i as te,b as se,G as w,s as ae,c as ne,d as m,S as oe}from"./vendor-c6a8d4ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const I=document.getElementById("home"),C=document.getElementById("favorites"),T=document.getElementById("home-text"),_=document.getElementById("favorites-text");document.getElementById("navigation");const ie=window.location.href.toString();let re=ie.slice(-10);const le=()=>{re==="index.html"?(I.classList.add("active"),T.classList.add("black"),C.classList.remove("active"),_.classList.remove("black")):(I.classList.remove("active"),T.classList.remove("black"),C.classList.add("active"),_.classList.add("black"))};le();const ce=document.getElementById("burger-button"),k=document.getElementById("burger"),de=document.getElementById("burger-button-close"),ue=async()=>{document.getElementById("header").classList.remove("container"),k.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},me=async t=>{document.getElementById("header").classList.add("container"),k.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},ge=t=>{t.key==="Escape"&&k.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};ce.addEventListener("click",ue);de.addEventListener("click",me);document.addEventListener("keydown",ge);const pe={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},fe=V().length?ee():te(pe),F=se(fe),he=new w,y=document.getElementById("sign-in"),b=document.getElementById("sign-out"),B=document.getElementById("user");B.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(b.classList.remove("display-none"),y.classList.add("display-none"));const ve=async()=>{await ae(F,he).then(t=>{w.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,B.innerHTML=s.email,b.classList.remove("display-none"),y.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=w.credentialFromError(t);console.log(e)})},ye=async()=>{await ne(F).then(()=>{B.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),b.classList.add("display-none"),y.classList.remove("display-none")};y.addEventListener("click",ve);b.addEventListener("click",ye);const r=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/quote`))()}async getByFilterName(e){return await r.handleErrors(async()=>{const a=new URLSearchParams({...e});return await r.fetchJson(`${r.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await r.handleErrors(async()=>{const a=new URLSearchParams({...e});return await r.fetchJson(`${r.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await r.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await r.fetchJson(`${r.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await r.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await r.fetchJson(`${r.BASE_URL}/subscription`,a)})()}};let g=r;L(g,"BASE_URL","https://your-energy.b.goit.study/api");const c=new g,p=document.querySelector(".filter-list-js");p.addEventListener("click",be);async function be(t){t.preventDefault(),document.querySelector(".form-js").classList.remove("hidden-form");const{target:e}=t;let s,a;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,a=e.alt,console.log(e.alt)),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.dataset.alt,console.log(`----->${a}`));const n={[s]:[a],keyword:"pull",page:1,limit:10},o=await c.getByFilterCategory(n);o!=null&&o.results.length?(p.classList.add("exercises_list"),p.classList.remove("muscles-list"),U(o)):alert("Oops. please, try other category this list empty :)")}catch(n){console.log(n.message)}}function U(t){if(t.results.length){const e=t.results.map(({_id:s,target:a,rating:n,name:o,burnedCalories:i,time:l})=>(console.log(a),`
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
    </li>`)).join("");p.innerHTML=e}}const D=document.querySelector(".form-js");D.addEventListener("submit",Le);async function Le(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),n={[s.toLocaleLowerCase().replaceAll(" ","")]:e,keyword:"pull",page:1,limit:10},o=await c.getByFilterCategory(n);D.reset(),U(o)}console.log("test2");function Se(t){const e=(t%1).toFixed(1)*100;let s='<div class="rating-container" data-rating="0">';for(let a=1;a<=t+1;a+=1)a<=t?s+=`<span class="star-js selected" data-value="${a}">&#9733;</span>`:e>0&&(s+=`<span class="star-js last-star-js" style="
                    background: linear-gradient(
                      to right,
                      var(--stars-background-active-color) ${e}%,
                      rgba(244, 244, 244, 0.2) ${100-e}%
                    );
                    display: inline-block;
                    background-clip: text;
                  " data-value="${a}">&#9733;</span>`);for(let a=t+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}">&#9733;</span>`;return s+"</div>"}function $(t){return`<div class="modal-info" data-id="${t._id}">
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
        <div class="rating-modal-container-wrapper"><p>${t.rating.toFixed(1)}</p>${Se(t.rating)}</div>
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
      </div>`}function Ee(t){return`<div class="modal-get-raiting" data-id="${t}">
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
  </div>`}const d=class{open(){(!d.loaderEl||d.loaderEl.classList.contains("js-loader"))&&(d.loaderEl.style.display="block")}close(){d.loaderEl&&(d.loaderEl.style.display="none")}};let S=d;L(S,"loaderEl",document.querySelector(".js-loader"));class we{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const u=new we,xe=document.querySelector(".filter-list-js");let M="";const qe=async t=>{const{target:e}=t;if(console.log(e),e.nodeName==="BUTTON"&&e.nodeName==="BUTTON")return M=e.dataset.id,Ne(M)};xe.addEventListener("click",qe);const Ne=async t=>{console.log("1");let e=await c.getOneExercises(t);e.favotite=!1,u.open($(e))},f=[];function ke(t){f.push(t),localStorage.setItem("favorites",JSON.stringify(f))}const Be=t=>{console.log(f),console.log(t),localStorage.setItem("favorites",JSON.stringify([...f.filter(e=>e._id!==t)]))};m.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class $e{error(e){m.error({title:"Error",message:e})}success(e){m.success({title:"OK",message:e})}info(e){m.info({title:"Info",message:e})}}const h=new $e,J=document.querySelector("#subscribe-form"),E=J.querySelector("#email");J.addEventListener("submit",Ie);async function Ie(t){t.preventDefault();const{value:e}=E;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){h.info("Enter the following sample email - 'test@gmail.com'"),E.value="";return}try{const a=await c.addSubscription({email:e});h.success(a.message)}catch(a){console.log(a)}finally{E.value=""}}const x=document.querySelector(".pagination-numbers"),Ce=document.querySelector(".muscles-list");let q=1;try{x.addEventListener("click",Te),x.addEventListener("click",z)}catch(t){console.log(t)}async function Te(t){const{totalPages:e,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),a={filter:s,page:t.target.textContent,limit:12,totalPages:e};if(a.page===q)return;const o=(await c.getByFilterName(a)).results;Ce.innerHTML=G(o),q=a.page,je()}const _e=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),x.appendChild(e)};function Me(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)_e(e)}function je(t){N(),document.querySelectorAll(".pagination-number").forEach(e=>{Number(e.getAttribute("page-index"))&&e.addEventListener("click",()=>{N()})})}function N(t){z(),handlePageButtonsStatus()}function z(){document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))==q&&t.classList.add("active")})}const Ae=document.querySelector(".wrap-button"),Q=document.querySelector(".muscles-list"),Oe=document.querySelector(".pagination-numbers");Ae.addEventListener("click",He);document.addEventListener("DOMContentLoaded",()=>{K({filter:"Muscles",page:1,limit:12})});async function He(t){t.preventDefault();const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const a=e.dataset.name;console.log(e.classList),e.classList.contains("btn-filter")&&[...s.children].forEach(i=>{i.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active"),console.log(`------>${a}`);const n={filter:a,page:1,limit:12};Q.innerHTML="",K(n)}async function K(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await c.getByFilterName(t),s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}Q.insertAdjacentHTML("beforeend",G(s));const{totalPages:a}=e,n=JSON.stringify({totalPages:a,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),Oe.innerHTML="",Me(),N(1)}catch(e){console.log(e.message)}}function G(t){return t.map(({filter:s,name:a,imgURL:n})=>{console.log(a);let o=s.toLocaleLowerCase().replaceAll(" ","");return a.includes(" ")&&console.log(" -----> я куку"),o==="bodyparts"&&(o="bodypart"),`
        <li class="muscles-item"  alt=${a} data-filter=${o}>
        <a href="" class="muscles-link" data-alt="${a}">
        <img class="muscles-image" src="${n}" alt="${a}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${a}</p>
            </div>
            </a>
           </li>
          `}).join("")}const v={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",Re);async function Re(){const t=localStorage.getItem("quote");if(t){const e=new Date().toDateString(),{date:s,quote:a,author:n}=JSON.parse(t);e!==s?j():(v.quoteText.innerHTML=a,v.quoteAuthor.innerHTML=n)}else j()}async function j(){const t=await c.getQuotes(),{author:e,quote:s}=t,a={author:e,quote:s,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(a)),v.quoteText.innerHTML=s,v.quoteAuthor.innerHTML=e}function Pe(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","/img/svg/sprite.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}Pe();function Fe(){const t=document.querySelector(".rating-container-js"),e=t.querySelectorAll(".star-js");let s=t.querySelector(".user-rating-js");e.forEach((i,l)=>{i.addEventListener("mouseover",()=>a(l)),i.addEventListener("mouseout",n),i.addEventListener("click",()=>o(l+1))});function a(i){n();for(let l=0;l<=i;l++)e[l].classList.add("hovered"),s.textContent=`${l+1}`}function n(){e.forEach(i=>{const l=t.dataset.rating;i.classList.remove("hovered"),s.textContent=`${l||0}`})}function o(i){t.setAttribute("data-rating",i),e.forEach((l,W)=>{W+1<=i?l.classList.add("selected"):l.classList.remove("selected")})}}const Ue=document.querySelector(".filter-list-js");let A="",O,H,R,P;async function De(t){t.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,n=document.querySelector(".raiting-form-field-input").value,o=document.querySelector(".raiting-form-field-comment").value,i={rate:Number(a),email:n,review:o},l=await c.addExercisesRate(e,i);l.message?h.error(`${l.message}`):h.success(`Thank you for your mark - ${i.rate} for ${l.name}`)}async function Je(){const t=document.querySelector(".modal-info").dataset.id;u.close(),u.open(Ee(t)),Fe(),P=document.querySelector(".raiting-form"),P.addEventListener("submit",De)}async function ze(t){const e=document.querySelector(".refresh-button-js"),s=document.querySelector(".add-rating"),a=document.querySelector(".modal-info").dataset.id;if(e.dataset.favorite==="false"){e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="./img/svg/sprite.svg#icon-trash"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="true",s.style.fontSize="15px";let n=await c.getOneExercises(a);ke(n)}else e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="./img/svg/sprite.svg#icon-heart"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="false",s.style.fontSize="16px",Be(a)}function Qe({target:t}){if(t.nodeName==="BUTTON"){if(t.nodeName==="BUTTON")return A=t.dataset.id,O=Ke(A);ifStartButton(t)&&u.open($(O))}}Ue.addEventListener("click",Qe);const Ke=async t=>{let e=await c.getOneExercises(t);e.favotite=!1,u.open($(e)),R=document.querySelector(".refresh-button-js"),H=document.querySelector(".add-rating"),H.addEventListener("click",Je),R.addEventListener("click",ze)},Y=document.createElement("div");Y.id="spinner-container";document.body.appendChild(Y);const Ge={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new oe(Ge);
//# sourceMappingURL=spinner-348cfcf4.js.map
