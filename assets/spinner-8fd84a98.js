var $=Object.defineProperty;var I=(t,e,s)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var h=(t,e,s)=>(I(t,typeof e!="symbol"?e+"":e,s),s);import{g as C,a as T,i as A,b as N,G as l,s as O,c as q,S as R}from"./vendor-938032cf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const U={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},F=C().length?T():A(U),x=N(F),j=new l,u=document.getElementById("sign-in"),p=document.getElementById("sign-out"),m=document.getElementById("user");m.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(p.classList.remove("display-none"),u.classList.add("display-none"));const H=async()=>{await O(x,j).then(t=>{l.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,m.innerHTML=s.email}).catch(t=>{t.message,t.customData.email;const e=l.credentialFromError(t);console.log(e)})},J=async()=>{await q(x).then(()=>{m.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),p.classList.add("display-none"),u.classList.remove("display-none")};u.addEventListener("click",H);p.addEventListener("click",J);const P=document.getElementById("burger-button"),v=document.getElementById("burger"),D=document.getElementById("burger-button-close"),z=async()=>{v.classList.remove("visually-hidden")},K=async()=>{v.classList.add("visually-hidden")};P.addEventListener("click",z);D.addEventListener("click",K);const y=document.getElementById("home"),f=document.getElementById("favorites"),w=document.getElementById("home-text"),b=document.getElementById("favorites-text");document.getElementById("navigation");const W=window.location.href.toString();let G=W.slice(-10);const Q=()=>{G==="index.html"?(y.classList.add("active"),w.classList.add("black"),f.classList.remove("active"),b.classList.remove("black")):(y.classList.remove("active"),w.classList.remove("black"),f.classList.add("active"),b.classList.add("black"))};Q();const o=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/quote`))()}async getByFilterName(e){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/filters?${e}&page=1&limit=12`))()}async getByFilterCategory(e){return await o.handleErrors(async()=>{const a=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await o.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await o.fetchJson(`${o.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await o.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await o.fetchJson(`${o.BASE_URL}/subscription`,a)})()}};let c=o;h(c,"BASE_URL","https://your-energy.b.goit.study/api");const g=new c,Y={bodypart:"back",exercises:"lats",equipment:"barbell",keyword:"pull",page:1,limit:10},L=document.querySelector(".muscles-list");async function V(){try{const t=await g.getByFilterCategory(Y);console.log("exercises-->",t);const e=t.results;if(t.length===0||t===void 0){console.log("Sorry, we didn't find anything according to your request.");return}L.insertAdjacentHTML("beforeend",X(e))}catch(t){console.log(t.message)}}console.log(L);function X(t){return t.map(({_id:s,bodyPart:a,equipment:n,gifUrl:r,name:i,target:S,description:re,rating:k,burnedCalories:M,time:ae,popularity:ie})=>`
        <li class="exercises-item" id="${s}">
        <!-- rating-menu -->
        <div class="rating-menu">
        <div class="rating-div">
        <button type="button" class="rating-menu-text">WORKOUT</button>
        <p class="exercises-rating">${k}</p>
        </div>
        <button type="button" class="exercises-btn">Start</button>
        </div>
        <!-- rating-menu -->


        <!-- box-menu -->
          <div class="exercises-box-menu">
          <span class="exercises-icon">
          <svg
            class="quote-icon-img"
            width="14"
            height="16"
            aria-label="running-man-icon"
          >
            <use href="../img/icons.svg#icon-running-man"></use>
          </svg>
        </span>
             <h3 class="exercises-small-title">${i}</h3>
              </div>
           <!-- box-menu -->

           <!-- exercises-text-box -->

           <div class="exercises-text-box">
           <p class="exercises-text">Burned calories:<span class="exercises-span">${M}</span></p>
           <p class="exercises-text">Body part:<span class="exercises-span">${a}</span></p>
           <p class="exercises-text">Target:<span class="exercises-span">${S}</span></p>
           </div>
            <!-- exercises-text-box -->
           </li>
          `).join("")}const Z=document.querySelector(".wrap-button");Z.addEventListener("click",_);async function _(t){if(t.target.nodeName!=="BUTTON")return;t.preventDefault();const s=t.target.textContent;s==="Body parts"?(d.innerHTML="",V()):(d.innerHTML="",E(s))}const d=document.querySelector(".muscles-list");window.addEventListener("DOMContentLoaded",E);async function E(t){try{const e=await g.getByFilterName(t);console.log("filter-->",e);const s=e.results;if(e.length===0||e===void 0){console.log("Sorry, we didn't find anything according to your request.");return}d.insertAdjacentHTML("beforeend",ee(s))}catch(e){console.log(e.message)}}function ee(t){return t.map(({_id:s,filter:a,name:n,imgURL:r})=>`
        <li class="muscles-item" id="${s}">
        <a href="" class="muscles-link" id="${s}">
        <img class="muscles-image" src="${r}" alt="${n}" id="${s}">
          <!-- box-menu -->
          <div class="muscles-box-menu">
             <h3 class="muscles-small-title" id="${s}">${a}</h3>
             <p class="muscles-text" id="${s}">${n}</p>
              </div>
           <!-- box-menu -->
            </a>
           </li>
          `).join("")}const te={pagesList:document.querySelector(".js-pagination")};try{te.pagesList.addEventListener("click",se)}catch(t){console.log(t)}async function se(t){const e={bodypart:"Muscles",page:t.target.textContent,limit:12},s=await g.getByFilterName(e);console.log("filter-->",s)}function ne(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","img/icons.svg#icon-arrow"),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}ne();const B=document.createElement("div");B.id="spinner-container";document.body.appendChild(B);const oe={lines:13,length:20,width:3,radius:30,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#f4f4f4",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};document.getElementById("spinner-container");new R(oe);
//# sourceMappingURL=spinner-8fd84a98.js.map
