var B=Object.defineProperty;var M=(t,e,s)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var g=(t,e,s)=>(M(t,typeof e!="symbol"?e+"":e,s),s);import{g as S,a as $,i as k,b as O,G as l,s as A,c as I}from"./vendor-18779182.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const R={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},C=S().length?$():k(R),m=O(C),F=new l,d=document.getElementById("sign-in"),u=document.getElementById("sign-out"),y=document.getElementById("user"),T=async()=>{await A(m,F).then(t=>{l.credentialFromResult(t).accessToken;const s=t.user;console.log(s.uid),localStorage.user=s.email,y.innerHTML=s.email,u.classList.remove("display-none"),d.classList.add("display-none")}).catch(t=>{t.message;const e=t.customData.email;console.log(e);const s=l.credentialFromError(t);console.log(s)})},U=async()=>{await I(m).then(()=>{y.innerHTML="",console.log("Sign-out successful.")}).catch(t=>{console.log(t.message)}),u.classList.add("display-none"),d.classList.remove("display-none")};d.addEventListener("click",T);u.addEventListener("click",U);const q=document.getElementById("burger-button"),h=document.getElementById("burger"),j=document.getElementById("burger-button-close"),N=async()=>{h.classList.remove("visually-hidden"),console.log("1")},J=async()=>{h.classList.add("visually-hidden")};q.addEventListener("click",N);j.addEventListener("click",J);const f=document.getElementById("home"),x=document.getElementById("favorites"),P=document.getElementById("home-text"),H=document.getElementById("favorites-text"),b=async()=>{f.classList.remove("active"),P.remove("black"),x.classList.add("active"),H.classList.add("black")};f.addEventListener("click",b);x.addEventListener("click",b);const o=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/quote`))()}async getByFilterName(e){return await o.handleErrors(async()=>{const a=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await o.handleErrors(async()=>{const a=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await o.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await o.fetchJson(`${o.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await o.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await o.fetchJson(`${o.BASE_URL}/subscription`,a)})()}};let i=o;g(i,"BASE_URL","https://your-energy.b.goit.study/api");const p=new i,D={bodypart:"Muscles",page:1,limit:12},w=document.querySelector(".muscles-list");window.addEventListener("DOMContentLoaded",K);async function K(){try{const t=await p.getByFilterName(D);console.log("filter-->",t);const e=t.results;if(t.length===0||t===void 0){console.log("Sorry, we didn't find anything according to your request.");return}w.insertAdjacentHTML("beforeend",W(e))}catch(t){console.log(t.message)}}console.log(w);function W(t){return t.map(({_id:s,filter:a,name:n,imgURL:r})=>` 
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
          `).join("")}const z={bodypart:"back",exercises:"lats",equipment:"barbell",keyword:"pull",page:1,limit:10},G=document.querySelector(".exercises-list");window.addEventListener("DOMContentLoaded",Q);async function Q(){try{const t=await p.getByFilterCategory(z),e=t.results;if(t.length===0||t===void 0){console.log("Sorry, we didn't find anything according to your request.");return}G.insertAdjacentHTML("beforeend",Y(e))}catch(t){console.log(t.message)}}function Y(t){return t.map(({_id:s,bodyPart:a,equipment:n,gifUrl:r,name:c,target:L,description:Z,rating:v,burnedCalories:E,time:_,popularity:ee})=>` 
        <li class="exercises-item" id="${s}">
        <!-- rating-menu -->
        <div class="rating-menu">
        <div class="rating-div">
        <button type="button" class="rating-menu-text">WORKOUT</button>
        <p class="exercises-rating">${v}</p>
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
           <p class="exercises-text">Body part:<span class="exercises-span">${a}</span></p>
           <p class="exercises-text">Target:<span class="exercises-span">${L}</span></p>
           </div>
           <!-- exercises-text-box -->
           </li>
          `).join("")}const V={pagesList:document.querySelector(".js-pagination")};V.pagesList.addEventListener("click",X);async function X(t){const e={bodypart:"Muscles",page:t.target.textContent,limit:12},s=await p.getByFilterName(e);console.log("filter-->",s)}
//# sourceMappingURL=pagination-77d8f1e0.js.map
