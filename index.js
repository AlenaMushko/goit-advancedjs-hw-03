import{a as M,i as c,S}from"./assets/vendor-GN5hr8qZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const $="52943742-ef4895d686f7f0b07a1c6f293",P="https://pixabay.com/api/";async function y(t,r=1,s=40){const a={key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:s};try{const{data:e}=await M.get(P,{params:a});return e}catch(e){throw new Error(`Failed to fetch images: ${e.message}`)}}function L(t,r,s=!1){const a=t.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}" class="gallery-link">
        <img 
          src="${e.webformatURL}" 
          alt="${e.tags}" 
          loading="lazy"
          class="gallery-image"
        />
        <div class="gallery-info">
          <p class="info-item">
            <b>Likes</b> <span class="info-item-value">${e.likes}</span>
          </p>
          <p class="info-item">
            <b>Views</b> <span class="info-item-value">${e.views}</span>
          </p>
          <p class="info-item">
            <b>Comments</b> <span class="info-item-value">${e.comments}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b> <span class="info-item-value">${e.downloads}</span>
          </p>
        </div>
      </a>
    </li>
  `).join("");s?r.insertAdjacentHTML("beforeend",a):r.innerHTML=a}function q(t){t.innerHTML=""}function b(t){t.classList.remove("is-hidden")}function u(t){t.classList.add("is-hidden")}const g=document.querySelector(".form"),m=document.querySelector(".gallery"),i=document.querySelector(".spinner"),v=document.querySelector("#load-more-container"),R=document.querySelector("#load-more-button");let l=null,h="",n=1,p=0,d=0;g.addEventListener("submit",async t=>{t.preventDefault();const r=g.searchQuery.value.trim();if(!r){c.warning({title:"Warning",message:"Please enter at least 1 character",position:"topRight"});return}h=r,n=1,p=0,d=0,q(m),w(),b(i);try{const s=await y(r,n);u(i),s.hits&&s.hits.length>0?(p=s.totalHits,d=Math.ceil(p/40),L(s.hits,m),l?l.refresh():l=new S(".gallery a",{captionsData:"alt",captionDelay:250}),n<d&&A()):c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(s){u(i),c.error({message:`An error occurred: ${s.message}`,position:"topRight"})}});function A(){v.classList.remove("is-hidden")}function w(){v.classList.add("is-hidden")}R.addEventListener("click",async()=>{if(h){n+=1,b(i);try{const t=await y(h,n);u(i),L(t.hits,m,!0),l&&l.refresh(),n>=d&&(w(),c.info({message:"You have reached the end of the search results",position:"topRight"}))}catch(t){u(i),c.error({message:`An error occurred: ${t.message}`,position:"topRight"})}}});
//# sourceMappingURL=index.js.map
