var k=Object.defineProperty;var $=(s,e,t)=>e in s?k(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var y=(s,e,t)=>($(s,typeof e!="symbol"?e+"":e,t),t);import{g as I,a as O,i as T,b as A,G as l,s as C,c as N}from"./vendor-18779182.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const R={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},U=I().length?O():T(R),L=A(U),q=new l,u=document.getElementById("sign-in"),g=document.getElementById("sign-out"),p=document.getElementById("user");p.innerHTML=localStorage.getItem("user");localStorage.getItem("user")&&(g.classList.remove("display-none"),u.classList.add("display-none"));const F=async()=>{await C(L,q).then(s=>{l.credentialFromResult(s).accessToken;const t=s.user;localStorage.user=t.email,p.innerHTML=t.email}).catch(s=>{s.message,s.customData.email;const e=l.credentialFromError(s);console.log(e)})},j=async()=>{await N(L).then(()=>{p.innerHTML="",localStorage.removeItem("user"),console.log("Sign-out successful.")}).catch(s=>{console.log(s.message)}),g.classList.add("display-none"),u.classList.remove("display-none")};u.addEventListener("click",F);g.addEventListener("click",j);const H=document.getElementById("burger-button"),w=document.getElementById("burger"),J=document.getElementById("burger-button-close"),P=async()=>{w.classList.remove("visually-hidden")},D=async()=>{w.classList.add("visually-hidden")};H.addEventListener("click",P);J.addEventListener("click",D);const h=document.getElementById("home"),f=document.getElementById("favorites"),x=document.getElementById("home-text"),b=document.getElementById("favorites-text");document.getElementById("navigation");const K=window.location.href.toString();let W=K.slice(-10);const z=()=>{W==="index.html"?(h.classList.add("active"),x.classList.add("black"),f.classList.remove("active"),b.classList.remove("black")):(h.classList.remove("active"),x.classList.remove("black"),f.classList.add("active"),b.classList.add("black"))};z();const r=class{static handleErrors(e){return async()=>{try{return await e()}catch(t){console.error("Помилка при запиті: ",t.message)}}}static async fetchJson(e,t){return(await fetch(e,t)).json()}async getQuotes(){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/quote`))()}async getByFilterName(e){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/filters?${e}&page=1&limit=12`))()}async getByFilterCategory(e){return await r.handleErrors(async()=>{const o=new URLSearchParams({...e});return await r.fetchJson(`${r.BASE_URL}/exercises?${o}`)})()}async getOneExercises(e){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,t){return await r.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await r.fetchJson(`${r.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await r.handleErrors(async()=>{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await r.fetchJson(`${r.BASE_URL}/subscription`,o)})()}};let i=r;y(i,"BASE_URL","https://your-energy.b.goit.study/api");const m=new i,G={bodypart:"back",exercises:"lats",equipment:"barbell",keyword:"pull",page:1,limit:10},v=document.querySelector(".muscles-list");async function Q(){try{const s=await m.getByFilterCategory(G);console.log("exercises-->",s);const e=s.results;if(s.length===0||s===void 0){console.log("Sorry, we didn't find anything according to your request.");return}v.insertAdjacentHTML("beforeend",Y(e))}catch(s){console.log(s.message)}}console.log(v);function Y(s){return s.map(({_id:t,bodyPart:o,equipment:n,gifUrl:a,name:c,target:B,description:te,rating:S,burnedCalories:M,time:se,popularity:ne})=>`
        <li class="exercises-item" id="${t}">
        <!-- rating-menu -->
        <div class="rating-menu">
        <div class="rating-div">
        <button type="button" class="rating-menu-text">WORKOUT</button>
        <p class="exercises-rating">${S}</p>
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
             <h3 class="exercises-small-title">${c}</h3>
              </div>
           <!-- box-menu -->

           <!-- exercises-text-box -->

           <div class="exercises-text-box">
           <p class="exercises-text">Burned calories:<span class="exercises-span">${M}</span></p>
           <p class="exercises-text">Body part:<span class="exercises-span">${o}</span></p>
           <p class="exercises-text">Target:<span class="exercises-span">${B}</span></p>
           </div>
            <!-- exercises-text-box -->
           </li>
          `).join("")}const V=document.querySelector(".wrap-button");V.addEventListener("click",X);async function X(s){if(s.target.nodeName!=="BUTTON")return;s.preventDefault();const t=s.target.textContent;t==="Body parts"?(d.innerHTML="",Q()):(d.innerHTML="",E(t))}const d=document.querySelector(".muscles-list");window.addEventListener("DOMContentLoaded",E);async function E(s){try{const e=await m.getByFilterName(s);console.log("filter-->",e);const t=e.results;if(e.length===0||e===void 0){console.log("Sorry, we didn't find anything according to your request.");return}d.insertAdjacentHTML("beforeend",Z(t))}catch(e){console.log(e.message)}}function Z(s){return s.map(({_id:t,filter:o,name:n,imgURL:a})=>`
        <li class="muscles-item" id="${t}">
        <a href="" class="muscles-link" id="${t}">
        <img class="muscles-image" src="${a}" alt="${n}" id="${t}">
          <!-- box-menu -->
          <div class="muscles-box-menu">
             <h3 class="muscles-small-title" id="${t}">${o}</h3>
             <p class="muscles-text" id="${t}">${n}</p>
              </div>
           <!-- box-menu -->
            </a>
           </li>
          `).join("")}const _={pagesList:document.querySelector(".js-pagination")};_.pagesList.addEventListener("click",ee);async function ee(s){const e={bodypart:"Muscles",page:s.target.textContent,limit:12},t=await m.getByFilterName(e);console.log("filter-->",t)}
//# sourceMappingURL=pagination-a9a5fd2a.js.map
