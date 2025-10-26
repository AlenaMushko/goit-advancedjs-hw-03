import{a as M,i as c,S}from"./assets/vendor-GN5hr8qZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const $="52943742-ef4895d686f7f0b07a1c6f293",P="https://pixabay.com/api/";async function y(t,r=1,o=40){const a={key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:o};try{const{data:e}=await M.get(P,{params:a});return e}catch(e){throw new Error(`Failed to fetch images: ${e.message}`)}}function L(t,r,o=!1){const a=t.map(e=>`
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
  `).join("");o?r.insertAdjacentHTML("beforeend",a):r.innerHTML=a}function q(t){t.innerHTML=""}function b(t){t.classList.remove("is-hidden")}function u(t){t.classList.add("is-hidden")}const g=document.querySelector(".form"),p=document.querySelector(".gallery"),i=document.querySelector(".loader"),v=document.querySelector("#load-more-container"),R=document.querySelector("#load-more-button");let l=null,h="",n=1,m=0,d=0;g.addEventListener("submit",async t=>{t.preventDefault();const r=g.searchQuery.value.trim();if(!r){c.warning({title:"Warning",message:"Please enter at least 1 character",position:"topRight"});return}h=r,n=1,m=0,d=0,q(p),w(),b(i);try{const o=await y(r,n);u(i),o.hits&&o.hits.length>0?(m=o.totalHits,d=Math.ceil(m/40),L(o.hits,p),l?l.refresh():l=new S(".gallery a",{captionsData:"alt",captionDelay:250}),n<d&&A()):c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(o){u(i),c.error({message:`An error occurred: ${o.message}`,position:"topRight"})}});function A(){v.classList.remove("is-hidden")}function w(){v.classList.add("is-hidden")}R.addEventListener("click",async()=>{if(h){n+=1,b(i);try{const t=await y(h,n);u(i),L(t.hits,p,!0),l&&l.refresh(),n>=d&&(w(),c.info({message:"You have reached the end of the search results",position:"topRight"}))}catch(t){u(i),c.error({message:`An error occurred: ${t.message}`,position:"topRight"})}}});
//# sourceMappingURL=index.js.map
