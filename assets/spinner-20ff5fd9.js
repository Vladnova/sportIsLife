var V=Object.defineProperty;var Z=(t,e,s)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var v=(t,e,s)=>(Z(t,typeof e!="symbol"?e+"":e,s),s);import{g as ee,a as te,i as se,b as ne,G as L,s as oe,c as ae,d as m,S as ie}from"./vendor-c6a8d4ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const B=document.getElementById("home"),N=document.getElementById("favorites"),q=document.getElementById("home-text"),I=document.getElementById("favorites-text");document.getElementById("navigation");const re=window.location.href.toString();let le=re.slice(-10);const ce=()=>{le==="index.html"?(B.classList.add("active"),q.classList.add("black"),N.classList.remove("active"),I.classList.remove("black")):(B.classList.remove("active"),q.classList.remove("black"),N.classList.add("active"),I.classList.add("black"))};ce();const de=document.getElementById("burger-button"),_=document.getElementById("burger"),ue=document.getElementById("burger-button-close"),me=async()=>{document.getElementById("header").classList.remove("container"),_.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},ge=async t=>{document.getElementById("header").classList.add("container"),_.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},pe=t=>{t.key==="Escape"&&_.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};de.addEventListener("click",me);ue.addEventListener("click",ge);document.addEventListener("keydown",pe);const he={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},fe=ee().length?te():se(he),P=ne(fe),ye=new L,h=document.getElementById("sign-in"),f=document.getElementById("sign-out"),k=document.getElementById("user");k.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(f.classList.remove("display-none"),h.classList.add("display-none"));const ve=async()=>{await oe(P,ye).then(t=>{L.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,k.innerHTML=s.email,f.classList.remove("display-none"),h.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=L.credentialFromError(t);console.log(e)})},be=async()=>{await ae(P).then(()=>{k.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),f.classList.add("display-none"),h.classList.remove("display-none")};h.addEventListener("click",ve);f.addEventListener("click",be);const i=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/quote`))()}async getByFilterName(e){return await i.handleErrors(async()=>{const a=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await i.handleErrors(async()=>{const a=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await i.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await i.fetchJson(`${i.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await i.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await i.fetchJson(`${i.BASE_URL}/subscription`,a)})()}};let g=i;v(g,"BASE_URL","https://your-energy.b.goit.study/api");const c=new g,p=document.querySelector(".filter-list-js");p.addEventListener("click",Le);async function Le(t){t.preventDefault();const{target:e}=t;let s,a;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.dataset.name),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.parentNode.dataset.name);const n={[s]:[a],keyword:"pull",page:1,limit:10},o=await c.getByFilterCategory(n);o!=null&&o.results.length?(p.classList.add("exercises_list"),p.classList.remove("muscles-list"),R(o)):alert("Oops. please, try other category this list empty :)")}catch(n){console.log(n.message)}}function R(t){if(t.results.length){const e=t.results.map(({_id:s,target:a,rating:n,name:o,burnedCalories:r,time:d})=>`
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
    </li>`).join("");p.innerHTML=e}}const F=document.querySelector(".form-js");F.addEventListener("submit",we);async function we(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),n={[s.toLocaleLowerCase().replaceAll(" ","")]:e,keyword:"pull",page:1,limit:10},o=await c.getByFilterCategory(n);F.reset(),R(o)}function Ee(t){return"*".repeat(t)}function j(t){return`<div class="modal-info">
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
        <p class="rating-modal">${t.rating} ${Ee(t.rating)}</p>
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
      </div>`}function Se(t){return`<div class="modal-get-raiting">
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
  </div>`}const l=class{open(){(!l.loaderEl||l.loaderEl.classList.contains("js-loader"))&&(l.loaderEl.style.display="block")}close(){l.loaderEl&&(l.loaderEl.style.display="none")}};let b=l;v(b,"loaderEl",document.querySelector(".js-loader"));class D{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const xe=new D,_e=document.querySelector(".filter-list-js");let C="";const ke=async t=>{const{target:e}=t;if(e.nodeName==="BUTTON"&&e.nodeName==="BUTTON")return C=e.dataset.id,Be(C)};_e.addEventListener("click",ke);const Be=async t=>{let e=await c.getOneExercises(t);e.favotite=!1,xe.open(j(e))},w=document.querySelector(".pagination-numbers"),Ne=document.querySelector(".muscles-list");let E=1;try{w.addEventListener("click",qe),w.addEventListener("click",U)}catch(t){console.log(t)}async function qe(t){const{totalPages:e,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),a={filter:s,page:t.target.textContent,limit:12,totalPages:e};if(a.page===E)return;const o=(await c.getByFilterName(a)).results;Ne.innerHTML=K(o),E=a.page,Me()}const Ie=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),w.appendChild(e)};function Ce(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)Ie(e)}function Me(t){S(),document.querySelectorAll(".pagination-number").forEach(e=>{Number(e.getAttribute("page-index"))&&e.addEventListener("click",()=>{S()})})}function S(t){U(),handlePageButtonsStatus()}function U(){document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))==E&&t.classList.add("active")})}const $e=document.querySelector(".wrap-button"),J=document.querySelector(".muscles-list"),Te=document.querySelector(".pagination-numbers");$e.addEventListener("click",Ae);document.addEventListener("DOMContentLoaded",()=>{z({filter:"Muscles",page:1,limit:12})});async function Ae(t){t.preventDefault();const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const a=e.dataset.name;console.log(e.classList),e.classList.contains("btn-filter")&&[...s.children].forEach(r=>{r.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:a,page:1,limit:12};J.innerHTML="",z(n)}async function z(t){document.querySelector(".filter-list-js").classList.remove("exercises_list");try{const e=await c.getByFilterName(t),s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}J.insertAdjacentHTML("beforeend",K(s));const{totalPages:a}=e,n=JSON.stringify({totalPages:a,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),Te.innerHTML="",Ce(),S(1)}catch(e){console.log(e.message)}}function K(t){return t.map(({filter:s,name:a,imgURL:n})=>{let o=s.toLocaleLowerCase().replaceAll(" ","");return o==="bodyparts"&&(o="bodypart"),`
        <li class="muscles-item"  data-name=${a} data-filter=${o}>
        <a href="" class="muscles-link">
        <img class="muscles-image" src="${n}" alt="${a}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${a}</p>
            </div>
            </a>
           </li>
          `}).join("")}const u={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",Oe);async function Oe(){const t=new Date().toDateString(),{date:e,quote:s,author:a}=JSON.parse(localStorage.getItem("quote"));if(t!==e){const n=await c.getQuotes(),{author:o,quote:r}=n,d={author:o,quote:r,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(d)),u.quoteText.innerHTML=r,u.quoteAuthor.innerHTML=o}else u.quoteText.innerHTML=s,u.quoteAuthor.innerHTML=a}function He(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","./img/svg/sprite.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}He();const x=new D,Pe=document.querySelector(".exercises_list");let M,$,T,A;Pe.addEventListener("click",Ue);function Re(t){return t.classList.contains("exercises_btn_start")||t.classList.contains("exercises_btn_start_text")||t.classList.contains("exercises_btn_start_icon")}const Q={_id:"64f389465ae26083f39b17c2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0037.gif",name:"barbell decline wide-grip pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:307,time:3,popularity:7416};function Fe(t){t.preventDefault(),A=document.querySelector(".raiting-form-submit");const e=A.dataset.id;console.log("Add send raiting logic"),console.log("exerciseID example =>",e)}function je(){x.close(),x.open(Se(Q._id)),T=document.querySelector(".raiting-form"),T.addEventListener("submit",Fe)}function De(){console.log("Add favorite logic")}function Ue({target:t}){Re(t)&&(x.open(j(Q)),$=document.querySelector(".add-favorite"),M=document.querySelector(".add-rating"),M.addEventListener("click",je),$.addEventListener("click",De))}const G=document.querySelector(".rating"),y=G.querySelectorAll(".star");y.forEach((t,e)=>{t.addEventListener("mouseover",()=>Je(e)),t.addEventListener("mouseout",Y),t.addEventListener("click",()=>ze(e+1))});function Je(t){Y();for(let e=0;e<=t;e++)y[e].classList.add("hovered")}function Y(){y.forEach(t=>{t.classList.remove("hovered")})}function ze(t){G.setAttribute("data-rating",t),y.forEach((e,s)=>{s+1<=t?e.classList.add("selected"):e.classList.remove("selected")}),console.log(t)}m.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",onOpening:function(){console.log("callback abriu!")},onClosing:function(){console.log("callback fechou!")}});class Ke{error(e){m.error({title:"Помилка",message:e})}success(e){m.success({title:"OK",message:e})}info(e){m.info({title:"Привіт",message:e})}}const O=new Ke,W=document.querySelector("#subscribe-form"),H=W.querySelector("#email"),Qe=t=>{t.preventDefault();const{value:e}=H;c.addSubscription({email:e}).then(()=>{O.success("Your email has been added to subscriptions!"),H.value=""}).catch(s=>{throw O.error("Opps. Somethig wrong"),s})};W.addEventListener("submit",Qe);const X=document.createElement("div");X.id="spinner-container";document.body.appendChild(X);const Ge={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new ie(Ge);
//# sourceMappingURL=spinner-20ff5fd9.js.map
