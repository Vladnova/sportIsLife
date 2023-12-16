var Z=Object.defineProperty;var V=(t,e,s)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var E=(t,e,s)=>(V(t,typeof e!="symbol"?e+"":e,s),s);import{g as ee,a as te,i as se,b as ae,G as N,s as oe,c as ne,d as g,S as ie}from"./vendor-c6a8d4ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const C=document.getElementById("home"),T=document.getElementById("favorites"),_=document.getElementById("home-text"),j=document.getElementById("favorites-text");document.getElementById("navigation");const re=window.location.href.toString();let le=re.slice(-10);const ce=()=>{le==="index.html"?(C.classList.add("active"),_.classList.add("black"),T.classList.remove("active"),j.classList.remove("black")):(C.classList.remove("active"),_.classList.remove("black"),T.classList.add("active"),j.classList.add("black"))};ce();const de=document.getElementById("burger-button"),q=document.getElementById("burger"),ue=document.getElementById("burger-button-close"),me=async()=>{document.getElementById("header").classList.remove("container"),q.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},ge=async t=>{document.getElementById("header").classList.add("container"),q.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},pe=t=>{t.key==="Escape"&&q.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};de.addEventListener("click",me);ue.addEventListener("click",ge);document.addEventListener("keydown",pe);const fe={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},he=ee().length?te():se(fe),U=ae(he),ve=new N,L=document.getElementById("sign-in"),S=document.getElementById("sign-out"),k=document.getElementById("user");k.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(S.classList.remove("display-none"),L.classList.add("display-none"));const ye=async()=>{await oe(U,ve).then(t=>{N.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,k.innerHTML=s.email,S.classList.remove("display-none"),L.classList.add("display-none")}).catch(t=>{t.message,t.customData.email;const e=N.credentialFromError(t);console.log(e)})},be=async()=>{await ne(U).then(()=>{k.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),S.classList.add("display-none"),L.classList.remove("display-none")};L.addEventListener("click",ye);S.addEventListener("click",be);const r=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/quote`))()}async getByFilterName(e){return await r.handleErrors(async()=>{const a=new URLSearchParams({...e});return await r.fetchJson(`${r.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await r.handleErrors(async()=>{const a=new URLSearchParams({...e});return await r.fetchJson(`${r.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await r.handleErrors(async()=>{const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await r.fetchJson(`${r.BASE_URL}/exercises/${e}/rating`,o)})()}async addSubscription(e){return await r.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await r.fetchJson(`${r.BASE_URL}/subscription`,a)})()}};let p=r;E(p,"BASE_URL","https://your-energy.b.goit.study/api");const d=new p,u=class{open(){console.log("loader ------>open"),(!u.loaderEl||u.loaderEl.classList.contains("js-loader"))&&(u.loaderEl.style.display="block")}close(){u.loaderEl&&(u.loaderEl.style.display="none"),console.log("loader ------>close")}};let w=u;E(w,"loaderEl",document.querySelector(".js-loader"));const c="/sportIsLife/assets/sprite-ffba578a.svg",f=document.querySelector(".filter-list-js");f.addEventListener("click",Le);async function Le(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.nodeName!=="P"&e.nodeName!=="H3")return;document.querySelector(".form-js").classList.remove("hidden-form");let s,a;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,a=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,a=e.parentNode.parentNode.dataset.alt);const o={[s]:[a],page:1,limit:10},n=await d.getByFilterCategory(o);n!=null&&n.results.length?(f.classList.add("exercises_list"),f.classList.remove("muscles-list"),D(n)):alert("Oops. please, try other category this list empty :)")}catch(o){console.log(o.message)}}function D(t){if(t.results.length){const e=t.results.map(({_id:s,target:a,rating:o,name:n,burnedCalories:i,time:l})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${a.toString().length>8?a.slice(0,8)+"...":a}</div>
          <p class="exercises_rating">${o.toFixed(1)}</p>
          <div class="rating-container">
            <span class="star selected">&#9733;</span>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${s}>Start

            <svg class="exercises_btn_start_icon" width="56px" height="18px">
              <use xlink:href="${c}#icon-arrow"></use>
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24px" height="24px">
            <use xlink:href="${c}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${n.toString().length>20?n.slice(0,20)+"...":n} </h3>
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
    </li>`).join("");f.innerHTML=e}}const J=document.querySelector(".form-js");J.addEventListener("submit",Se);async function Se(t){console.log("2"),t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;const{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),o={[s.toLocaleLowerCase().replaceAll(" ","")]:e,keyword:"pull",page:1,limit:10},n=await d.getByFilterCategory(o);J.reset(),D(n)}console.log("test2");function Ee(t){const e=(t%1).toFixed(1)*100;let s='<div class="rating-container" data-rating="0">';for(let a=1;a<=t+1;a+=1)a<=t?s+=`<span class="star-js selected" data-value="${a}">&#9733;</span>`:e>0&&(s+=`<span class="star-js last-star-js" style="
                    background: linear-gradient(
                      to right,
                      var(--stars-background-active-color) ${e}%,
                      rgba(244, 244, 244, 0.2) ${100-e}%
                    );
                    display: inline-block;
                    background-clip: text;
                  " data-value="${a}">&#9733;</span>`);for(let a=t+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}">&#9733;</span>`;return s+"</div>"}function we(t){return t?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${c}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${c}#icon-heart"></use>
                </svg>
              </button>`}function B(t){return`<div class="modal-info" data-id="${t._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img class="modal-img" src="${t.gifUrl}" alt="${t.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${t.name}</h3>
        <div class="rating-modal-container-wrapper"><p>${t.rating.toFixed(1)}</p>${Ee(t.rating)}</div>
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
        <div class="refresh-button-js" data-favorite="${t.favorite}">
          ${we(t.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`}function xe(t){return`<div class="modal-get-raiting" data-id="${t}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
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
  </div>`}class Ne{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=1,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const m=new Ne,$e=document.querySelector(".filter-list-js");let M="";const qe=async t=>{const{target:e}=t;if(e.nodeName==="BUTTON"&&e.nodeName==="BUTTON")return M=e.dataset.id,ke(M)};$e.addEventListener("click",qe);const ke=async t=>{let e=await d.getOneExercises(t);e.favotite=!1,m.open(B(e))};g.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class Be{error(e){g.error({title:"Error",message:e})}success(e){g.success({title:"OK",message:e})}info(e){g.info({title:"Info",message:e})}}const h=new Be,z=document.querySelector("#subscribe-form"),x=z.querySelector("#email");z.addEventListener("submit",Ie);async function Ie(t){t.preventDefault();const{value:e}=x;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){h.info("Enter the following sample email - 'test@gmail.com'"),x.value="";return}try{const a=await d.addSubscription({email:e});h.success(a.message)}catch(a){console.log(a)}finally{x.value=""}}const $=document.querySelector(".pagination-numbers"),Ce=document.querySelector(".muscles-list");let v=1;try{$.addEventListener("click",Te),$.addEventListener("click",I)}catch(t){console.log(t)}async function Te(t){const{totalPages:e,categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),a={filter:s,page:t.target.textContent,limit:12,totalPages:e};if(a.page===v)return;const n=(await d.getByFilterName(a)).results;Ce.innerHTML=Y(n),v=a.page,I()}const _e=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),$.appendChild(e)};function je(){const{totalPages:t}=JSON.parse(localStorage.getItem("infoRequest"));if(t!==1)for(let e=1;e<=t;e++)_e(e)}function I(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{Q(e)})})}function Q(t){v=t,I(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==v&&e.classList.add("active")})}const Me=document.querySelector(".wrap-button"),K=document.querySelector(".muscles-list"),Oe=document.querySelector(".pagination-numbers");Me.addEventListener("click",Ae);document.addEventListener("DOMContentLoaded",()=>{G({filter:"Muscles",page:1,limit:12})});async function Ae(t){t.preventDefault();const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const a=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(i=>{i.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const o={filter:a,page:1,limit:12};K.innerHTML="",G(o)}async function G(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await d.getByFilterName(t),s=e.results;if(!e||s.length===0){console.log("Sorry, we didn't find anything according to your request.");return}K.insertAdjacentHTML("beforeend",Y(s));const{totalPages:a}=e,o=JSON.stringify({totalPages:a,categoryName:t.filter});localStorage.setItem("infoRequest",o),document.querySelector(".filter-list-js").classList.add("muscles-list"),Oe.innerHTML="",je(),Q(1)}catch(e){console.log(e.message)}}function Y(t){return t.map(({filter:s,name:a,imgURL:o})=>{let n=s.toLocaleLowerCase().replaceAll(" ","");return n==="bodyparts"&&(n="bodypart"),`

        <li class="muscles-item"  data-name=${a} data-filter=${n}>

        <a href="" class="muscles-link" data-alt="${a}">
        <img class="muscles-image" src="${o}" alt="${a}"  >
        <div class="muscles-box-menu">
           <h3 class="muscles-small-title">${s}</h3>
           <p class="muscles-text">${a}</p>
            </div>
            </a>
           </li>
          `}).join("")}const y={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",He);async function He(){const t=localStorage.getItem("quote");if(t){const e=new Date().toDateString(),{date:s,quote:a,author:o}=JSON.parse(t);e!==s?O():(y.quoteText.innerHTML=a,y.quoteAuthor.innerHTML=o)}else O()}async function O(){const t=await d.getQuotes(),{author:e,quote:s}=t,a={author:e,quote:s,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(a)),y.quoteText.innerHTML=s,y.quoteAuthor.innerHTML=e}function Re(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${c}#icon-arrow`),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}Re();function Fe(){const t=document.querySelector(".rating-container-js"),e=t.querySelectorAll(".star-js");let s=t.querySelector(".user-rating-js");e.forEach((i,l)=>{i.addEventListener("mouseover",()=>a(l)),i.addEventListener("mouseout",o),i.addEventListener("click",()=>n(l+1))});function a(i){o();for(let l=0;l<=i;l++)e[l].classList.add("hovered"),s.textContent=`${l+1}`}function o(){e.forEach(i=>{const l=t.dataset.rating;i.classList.remove("hovered"),s.textContent=`${l||0}`})}function n(i){t.setAttribute("data-rating",i),e.forEach((l,X)=>{X+1<=i?l.classList.add("selected"):l.classList.remove("selected")})}}const b=[];function Pe(t){b.push(t),localStorage.setItem("favorites",JSON.stringify(b))}const Ue=t=>{console.log(b),console.log(t),localStorage.setItem("favorites",JSON.stringify([...b.filter(e=>e._id!==t)]))};console.log(c);const De=document.querySelector(".filter-list-js");let A="",H,R,F,P;async function Je(t){t.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,o=document.querySelector(".raiting-form-field-input").value,n=document.querySelector(".raiting-form-field-comment").value,i={rate:Number(a),email:o,review:n},l=await d.addExercisesRate(e,i);l.message?h.error(`${l.message}`):(h.success(`Thank you for your mark - ${i.rate} for ${l.name}`),m.close())}async function ze(){const t=document.querySelector(".modal-info").dataset.id;m.close(),m.open(xe(t)),Fe(),P=document.querySelector(".raiting-form"),P.addEventListener("submit",Je)}async function Qe(t){const e=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;if(e.dataset.favorite==="false"){e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${c}#icon-trash"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="true";let a=await d.getOneExercises(s);Pe(a)}else e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${c}#icon-heart"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="false",getRatingButton.style.fontSize="16px",Ue(s)}function Ke({target:t}){if(t.nodeName==="BUTTON"){if(t.nodeName==="BUTTON")return A=t.dataset.id,H=Ge(A);ifStartButton(t)&&m.open(B(H))}}De.addEventListener("click",Ke);const Ge=async t=>{let e=await d.getOneExercises(t);const s=localStorage.getItem("favorites");console.log(s),s!==null&&JSON.parse(s).find(({_id:n})=>n===t)?e.favorite=!0:e.favorite=!1,m.open(B(e)),F=document.querySelector(".refresh-button-js"),R=document.querySelector(".add-rating"),R.addEventListener("click",ze),F.addEventListener("click",Qe)},W=document.createElement("div");W.id="spinner-container";document.body.appendChild(W);const Ye={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new ie(Ye);
//# sourceMappingURL=spinner-c982a0d2.js.map
