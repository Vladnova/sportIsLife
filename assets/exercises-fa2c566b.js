var B=Object.defineProperty;var M=(t,e,s)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var p=(t,e,s)=>(M(t,typeof e!="symbol"?e+"":e,s),s);import{g as S,a as $,i as k,b as O,G as l,s as A,c as I}from"./vendor-18779182.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const R={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},T=S().length?$():k(R),m=O(T),U=new l,d=document.getElementById("sign-in"),u=document.getElementById("sign-out"),g=document.getElementById("user"),q=async()=>{await A(m,U).then(t=>{l.credentialFromResult(t).accessToken;const s=t.user;console.log(s.uid),localStorage.user=s.email,g.innerHTML=s.email,u.classList.remove("display-none"),d.classList.add("display-none")}).catch(t=>{t.message;const e=t.customData.email;console.log(e);const s=l.credentialFromError(t);console.log(s)})},C=async()=>{await I(m).then(()=>{g.innerHTML="",console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),u.classList.add("display-none"),d.classList.remove("display-none")};d.addEventListener("click",q);u.addEventListener("click",C);const F=document.getElementById("burger-button"),y=document.getElementById("burger"),j=document.getElementById("burger-button-close"),N=async()=>{y.classList.remove("visually-hidden"),console.log("1")},J=async()=>{y.classList.add("visually-hidden")};F.addEventListener("click",N);j.addEventListener("click",J);const h=document.getElementById("home"),f=document.getElementById("favorites"),P=document.getElementById("home-text"),H=document.getElementById("favorites-text"),x=async()=>{h.classList.remove("active"),P.remove("black"),f.classList.add("active"),H.classList.add("black")};h.addEventListener("click",x);f.addEventListener("click",x);const o=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/quote`))()}async getByFilterName(e){return await o.handleErrors(async()=>{const r=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/filters?${r}`)})()}async getByFilterCategory(e){return await o.handleErrors(async()=>{const r=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/exercises?${r}`)})()}async getOneExercises(e){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await o.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await o.fetchJson(`${o.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await o.handleErrors(async()=>{const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await o.fetchJson(`${o.BASE_URL}/subscription`,r)})()}};let i=o;p(i,"BASE_URL","https://your-energy.b.goit.study/api");const b=new i,D={bodypart:"Muscles",page:1,limit:12},w=document.querySelector(".muscles-list");window.addEventListener("DOMContentLoaded",K);async function K(){try{const t=await b.getByFilterName(D);console.log("filter-->",t);const e=t.results;if(t.length===0||t===void 0){console.log("Sorry, we didn't find anything according to your request.");return}w.insertAdjacentHTML("beforeend",W(e))}catch(t){console.log(t.message)}}console.log(w);function W(t){return t.map(({_id:s,filter:r,name:n,imgURL:a})=>` 
        <li class="muscles-item" id="${s}">
        <a href="" class="muscles-link" id="${s}"> 
        <img class="muscles-image" src="${a}" alt="${n}" id="${s}">
          <!-- box-menu -->
          <div class="muscles-box-menu">
             <h3 class="muscles-small-title" id="${s}">${r}</h3>
             <p class="muscles-text" id="${s}">${n}</p>
              </div>
           <!-- box-menu -->
            </a>
           </li>
          `).join("")}const z={bodypart:"back",exercises:"lats",equipment:"barbell",keyword:"pull",page:1,limit:10},G=document.querySelector(".exercises-list");window.addEventListener("DOMContentLoaded",Q);async function Q(){try{const t=await b.getByFilterCategory(z),e=t.results;if(t.length===0||t===void 0){console.log("Sorry, we didn't find anything according to your request.");return}G.insertAdjacentHTML("beforeend",Y(e))}catch(t){console.log(t.message)}}function Y(t){return t.map(({_id:s,bodyPart:r,equipment:n,gifUrl:a,name:c,target:v,description:V,rating:L,burnedCalories:E,time:X,popularity:Z})=>` 
        <li class="exercises-item" id="${s}">
        <!-- rating-menu -->
        <div class="rating-menu">
        <div class="rating-div">
        <button type="button" class="rating-menu-text">WORKOUT</button>
        <p class="exercises-rating">${L}</p>
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
           <p class="exercises-text">Burned calories:<span class="exercises-span">${E}</span></p>
           <p class="exercises-text">Body part:<span class="exercises-span">${r}</span></p>
           <p class="exercises-text">Target:<span class="exercises-span">${v}</span></p>
           </div>
           <!-- exercises-text-box -->
           </li>
          `).join("")}
//# sourceMappingURL=exercises-fa2c566b.js.map
