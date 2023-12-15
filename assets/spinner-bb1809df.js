var G=Object.defineProperty;var Y=(t,e,s)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var y=(t,e,s)=>(Y(t,typeof e!="symbol"?e+"":e,s),s);import{g as W,a as V,i as X,b as Z,G as b,s as ee,c as te,S as se}from"./vendor-938032cf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const k=document.getElementById("home"),B=document.getElementById("favorites"),q=document.getElementById("home-text"),N=document.getElementById("favorites-text");document.getElementById("navigation");const ne=window.location.href.toString();let oe=ne.slice(-10);const ae=()=>{oe==="index.html"?(k.classList.add("active"),q.classList.add("black"),B.classList.remove("active"),N.classList.remove("black")):(k.classList.remove("active"),q.classList.remove("black"),B.classList.add("active"),N.classList.add("black"))};ae();const ie=document.getElementById("burger-button"),x=document.getElementById("burger"),re=document.getElementById("burger-button-close"),le=async()=>{document.getElementById("header").classList.remove("container"),x.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},ce=async t=>{document.getElementById("header").classList.add("container"),x.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},de=t=>{t.key==="Escape"&&x.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};ie.addEventListener("click",le);re.addEventListener("click",ce);document.addEventListener("keydown",de);const ue={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},me=W().length?V():X(ue),H=Z(me),ge=new b,p=document.getElementById("sign-in"),h=document.getElementById("sign-out"),_=document.getElementById("user");_.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(h.classList.remove("display-none"),p.classList.add("display-none"));const pe=async()=>{await ee(H,ge).then(t=>{b.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,_.innerHTML=s.email,h.classList.remove("display-none"),p.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=b.credentialFromError(t);console.log(e)})},he=async()=>{await te(H).then(()=>{_.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),h.classList.add("display-none"),p.classList.remove("display-none")};p.addEventListener("click",pe);h.addEventListener("click",he);function fe(t){return"*".repeat(t)}function O(t){return`<div class="modal-info">
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
        <p class="rating-modal">${t.rating} ${fe(t.rating)}</p>
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
      </div>`}function ye(t){return`<div class="modal-get-raiting">
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
  </div>`}const i=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/quote`))()}async getByFilterName(e){return await i.handleErrors(async()=>{const o=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/filters?${o}`)})()}async getByFilterCategory(e){return await i.handleErrors(async()=>{const o=new URLSearchParams({...e});return await i.fetchJson(`${i.BASE_URL}/exercises?${o}`)})()}async getOneExercises(e){return await i.handleErrors(async()=>await i.fetchJson(`${i.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await i.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await i.fetchJson(`${i.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await i.handleErrors(async()=>{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await i.fetchJson(`${i.BASE_URL}/subscription`,o)})()}};let g=i;y(g,"BASE_URL","https://your-energy.b.goit.study/api");const c=new g,l=class{open(){(!l.loaderEl||l.loaderEl.classList.contains("js-loader"))&&(l.loaderEl.style.display="block")}close(){l.loaderEl&&(l.loaderEl.style.display="none")}};let v=l;y(v,"loaderEl",document.querySelector(".js-loader"));class P{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const ve=new P,be=document.querySelector(".filter-list-js");let M="";const Le=async t=>{const{target:e}=t;if(e.nodeName==="BUTTON"&&e.nodeName==="BUTTON")return M=e.dataset.id,we(M)};be.addEventListener("click",Le);const we=async t=>{let e=await c.getOneExercises(t);e.favotite=!1,ve.open(O(e))},L=document.querySelector(".pagination-numbers"),Ee=document.querySelector(".muscles-list");let w=1;try{L.addEventListener("click",Se),L.addEventListener("click",R)}catch(t){console.log(t)}async function Se(t){const{totalPages:e,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),o={filter:s,page:t.target.textContent,limit:12,totalPages:e};if(o.page===w)return;const a=(await c.getByFilterName(o)).results;Ee.innerHTML=U(a),w=o.page,ke()}const xe=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),L.appendChild(e)};function _e(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)xe(e)}function ke(t){E(),document.querySelectorAll(".pagination-number").forEach(e=>{Number(e.getAttribute("page-index"))&&e.addEventListener("click",()=>{E()})})}function E(t){R(),handlePageButtonsStatus()}function R(){document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))==w&&t.classList.add("active")})}const Be=document.querySelector(".wrap-button"),F=document.querySelector(".muscles-list"),qe=document.querySelector(".pagination-numbers");Be.addEventListener("click",Ne);document.addEventListener("DOMContentLoaded",()=>{j({filter:"Muscles",page:1,limit:12})});async function Ne(t){t.preventDefault();const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const o=e.dataset.name;console.log(e.classList),e.classList.contains("btn-filter")&&[...s.children].forEach(r=>{r.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:o,page:1,limit:12};F.innerHTML="",j(n)}async function j(t){document.querySelector(".filter-list-js").classList.remove("exercises_list");try{const e=await c.getByFilterName(t),s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}F.insertAdjacentHTML("beforeend",U(s));const{totalPages:o}=e,n=JSON.stringify({totalPages:o,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),qe.innerHTML="",_e(),E(1)}catch(e){console.log(e.message)}}function U(t){return t.map(({filter:s,name:o,imgURL:n})=>{let a=s.toLocaleLowerCase().replaceAll(" ","");return a==="bodyparts"&&(a="bodypart"),`
        <li class="muscles-item"  data-name=${o} data-filter=${a}>
        <a href="" class="muscles-link">
        <img class="muscles-image" src="${n}" alt="${o}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${o}</p>
            </div>
            </a>
           </li>
          `}).join("")}const m={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",Me);async function Me(){const t=new Date().toDateString(),{date:e,quote:s,author:o}=JSON.parse(localStorage.getItem("quote"));if(t!==e){const n=await c.getQuotes(),{author:a,quote:r}=n,u={author:a,quote:r,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(u)),m.quoteText.innerHTML=r,m.quoteAuthor.innerHTML=a}else m.quoteText.innerHTML=s,m.quoteAuthor.innerHTML=o}function Ie(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","./img/svg/sprite.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}Ie();const S=new P,$e=document.querySelector(".exercises_list");let I,$,C,T;$e.addEventListener("click",Oe);function Ce(t){return t.classList.contains("exercises_btn_start")||t.classList.contains("exercises_btn_start_text")||t.classList.contains("exercises_btn_start_icon")}const D={_id:"64f389465ae26083f39b17c2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0037.gif",name:"barbell decline wide-grip pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:307,time:3,popularity:7416};function Te(t){t.preventDefault(),T=document.querySelector(".raiting-form-submit");const e=T.dataset.id;console.log("Add send raiting logic"),console.log("exerciseID example =>",e)}function Ae(){S.close(),S.open(ye(D._id)),C=document.querySelector(".raiting-form"),C.addEventListener("submit",Te)}function He(){console.log("Add favorite logic")}function Oe({target:t}){Ce(t)&&(S.open(O(D)),$=document.querySelector(".add-favorite"),I=document.querySelector(".add-rating"),I.addEventListener("click",Ae),$.addEventListener("click",He))}const J=document.querySelector(".rating"),f=J.querySelectorAll(".star");f.forEach((t,e)=>{t.addEventListener("mouseover",()=>Pe(e)),t.addEventListener("mouseout",z),t.addEventListener("click",()=>Re(e+1))});function Pe(t){z();for(let e=0;e<=t;e++)f[e].classList.add("hovered")}function z(){f.forEach(t=>{t.classList.remove("hovered")})}function Re(t){J.setAttribute("data-rating",t),f.forEach((e,s)=>{s+1<=t?e.classList.add("selected"):e.classList.remove("selected")}),console.log(t)}const d=document.querySelector(".filter-list-js");d.addEventListener("click",Fe);async function Fe(t){t.preventDefault();const{target:e}=t;let s,o;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,o=e.parentNode.parentNode.dataset.name),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,o=e.parentNode.parentNode.parentNode.dataset.name);const n={[s]:[o],keyword:"pull",page:1,limit:10},a=await c.getByFilterCategory(n);a!=null&&a.results.length?(d.innerHTML="",d.classList.add("exercises_list"),d.classList.remove("muscles-list"),d.insertAdjacentHTML("afterbegin",je(a))):alert("Oops. please, try other category this list empty :)")}catch(n){console.log(n.message)}}function je(t){if(t.results.length)return t.results.map(({_id:s,target:o,rating:n,name:a,burnedCalories:r,time:u})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${o}</div>
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
        <h3 class="exercises_list_item_middle_title" id="name">${a.toString().length>21?a.slice(0,21)+"...":a} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${r||""} / ${u||"your wish"} min</span>
            </p>
          </li>
        </ul>
        </div>
    </li>`).join("")}const K=document.querySelector("#subscribe-form"),A=K.querySelector("#email"),Ue=t=>{t.preventDefault();const{value:e}=A;c.addSubscription({email:e}).then(()=>{A.value=""})};K.addEventListener("submit",Ue);const Q=document.createElement("div");Q.id="spinner-container";document.body.appendChild(Q);const De={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new se(De);
//# sourceMappingURL=spinner-bb1809df.js.map
