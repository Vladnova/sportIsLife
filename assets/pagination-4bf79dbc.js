var S=Object.defineProperty;var k=(s,e,t)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var m=(s,e,t)=>(k(s,typeof e!="symbol"?e+"":e,t),t);import{g as $,a as O,i as A,b as I,G as l,s as T,c as C}from"./vendor-18779182.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const N={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},R=$().length?O():A(N),y=I(R),q=new l,u=document.getElementById("sign-in"),p=document.getElementById("sign-out"),h=document.getElementById("user"),U=async()=>{await T(y,q).then(s=>{l.credentialFromResult(s).accessToken;const t=s.user;console.log(t.uid),localStorage.user=t.email,h.innerHTML=t.email,p.classList.remove("display-none"),u.classList.add("display-none")}).catch(s=>{s.message;const e=s.customData.email;console.log(e);const t=l.credentialFromError(s);console.log(t)})},F=async()=>{await C(y).then(()=>{h.innerHTML="",console.log("Sign-out successful.")}).catch(s=>{console.log(s.message)}),p.classList.add("display-none"),u.classList.remove("display-none")};u.addEventListener("click",U);p.addEventListener("click",F);const j=document.getElementById("burger-button"),f=document.getElementById("burger"),H=document.getElementById("burger-button-close"),J=async()=>{f.classList.remove("visually-hidden"),console.log("1")},P=async()=>{f.classList.add("visually-hidden")};j.addEventListener("click",J);H.addEventListener("click",P);const x=document.getElementById("home"),b=document.getElementById("favorites"),D=document.getElementById("home-text"),K=document.getElementById("favorites-text"),L=async()=>{x.classList.remove("active"),D.remove("black"),b.classList.add("active"),K.classList.add("black")};x.addEventListener("click",L);b.addEventListener("click",L);const o=class{static handleErrors(e){return async()=>{try{return await e()}catch(t){console.error("Помилка при запиті: ",t.message)}}}static async fetchJson(e,t){return(await fetch(e,t)).json()}async getQuotes(){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/quote`))()}async getByFilterName(e){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/filters?${e}&page=1&limit=12`))()}async getByFilterCategory(e){return await o.handleErrors(async()=>{const a=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,t){return await o.handleErrors(async()=>{const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await o.fetchJson(`${o.BASE_URL}/exercises/${e}/rating`,n)})()}async addSubscription(e){return await o.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await o.fetchJson(`${o.BASE_URL}/subscription`,a)})()}};let i=o;m(i,"BASE_URL","https://your-energy.b.goit.study/api");const g=new i,W={bodypart:"back",exercises:"lats",equipment:"barbell",keyword:"pull",page:1,limit:10},w=document.querySelector(".muscles-list");async function z(){try{const s=await g.getByFilterCategory(W);console.log("exercises-->",s);const e=s.results;if(s.length===0||s===void 0){console.log("Sorry, we didn't find anything according to your request.");return}w.insertAdjacentHTML("beforeend",G(e))}catch(s){console.log(s.message)}}console.log(w);function G(s){return s.map(({_id:t,bodyPart:a,equipment:n,gifUrl:r,name:c,target:E,description:_,rating:B,burnedCalories:M,time:ee,popularity:te})=>` 
        <li class="exercises-item" id="${t}">
        <!-- rating-menu -->
        <div class="rating-menu">
        <div class="rating-div">
        <button type="button" class="rating-menu-text">WORKOUT</button>
        <p class="exercises-rating">${B}</p>
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
           <p class="exercises-text">Body part:<span class="exercises-span">${a}</span></p>
           <p class="exercises-text">Target:<span class="exercises-span">${E}</span></p>
           </div>
            <!-- exercises-text-box -->
           </li>
          `).join("")}const Q=document.querySelector(".wrap-button");Q.addEventListener("click",Y);async function Y(s){if(s.target.nodeName!=="BUTTON")return;s.preventDefault();const t=s.target.textContent;t==="Body parts"?(d.innerHTML="",z()):(d.innerHTML="",v(t))}const d=document.querySelector(".muscles-list");window.addEventListener("DOMContentLoaded",v);async function v(s){try{const e=await g.getByFilterName(s);console.log("filter-->",e);const t=e.results;if(e.length===0||e===void 0){console.log("Sorry, we didn't find anything according to your request.");return}d.insertAdjacentHTML("beforeend",V(t))}catch(e){console.log(e.message)}}function V(s){return s.map(({_id:t,filter:a,name:n,imgURL:r})=>` 
        <li class="muscles-item" id="${t}">
        <a href="" class="muscles-link" id="${t}"> 
        <img class="muscles-image" src="${r}" alt="${n}" id="${t}">
          <!-- box-menu -->
          <div class="muscles-box-menu">
             <h3 class="muscles-small-title" id="${t}">${a}</h3>
             <p class="muscles-text" id="${t}">${n}</p>
              </div>
           <!-- box-menu -->
            </a>
           </li>
          `).join("")}const X={pagesList:document.querySelector(".js-pagination")};X.pagesList.addEventListener("click",Z);async function Z(s){const e={bodypart:"Muscles",page:s.target.textContent,limit:12},t=await g.getByFilterName(e);console.log("filter-->",t)}
//# sourceMappingURL=pagination-4bf79dbc.js.map
