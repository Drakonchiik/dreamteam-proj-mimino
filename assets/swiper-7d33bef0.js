(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}})();(()=>{const t=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),e=()=>{const s=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!s),t.classList.toggle("is-open");const o=s?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};n.addEventListener("click",e),l.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(t.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(n){for(var l=this,e=(l.document||l.ownerDocument).querySelectorAll(n),s=0;e[s]&&e[s]!==l;)++s;return Boolean(e[s])}),typeof t.closest!="function"&&(t.closest=function(n){for(var l=this;l&&l.nodeType===1;){if(l.matches(n))return l;l=l.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),n=document.querySelector(".js-overlay-modal"),l=document.querySelectorAll(".js-modal-close");t.forEach(function(e){e.addEventListener("click",function(s){s.preventDefault();var o=this.getAttribute("data-modal"),r=document.querySelector('.modal[data-modal="'+o+'"]');r.classList.add("active"),n.classList.add("active")})}),l.forEach(function(e){e.addEventListener("click",function(s){var o=this.closest(".modal");o.classList.remove("active"),n.classList.remove("active")})}),document.body.addEventListener("keyup",function(e){var s=e.keyCode;s==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),n.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});$(document).ready(()=>{$("#custom-input-date").datepicker({dateFormat:"dd/mm/yy"})});var f,a,v,T,k,u,m,L,E;f=document.getElementsByClassName("table-custom-select");T=f.length;for(a=0;a<T;a++){for(u=f[a].getElementsByTagName("select")[0],k=u.length,m=document.createElement("DIV"),m.setAttribute("class","select-selected"),m.innerHTML=u.options[u.selectedIndex].innerHTML,f[a].appendChild(m),L=document.createElement("DIV"),L.setAttribute("class","select-items select-hide"),v=1;v<k;v++)E=document.createElement("DIV"),E.innerHTML=u.options[v].innerHTML,E.addEventListener("click",function(t){var n,l,e,s,o,r,d;for(s=this.parentNode.parentNode.getElementsByTagName("select")[0],r=s.length,o=this.parentNode.previousSibling,l=0;l<r;l++)if(s.options[l].innerHTML==this.innerHTML){for(s.selectedIndex=l,o.innerHTML=this.innerHTML,n=this.parentNode.getElementsByClassName("same-as-selected"),d=n.length,e=0;e<d;e++)n[e].removeAttribute("class");this.setAttribute("class","same-as-selected");break}o.click()}),L.appendChild(E);f[a].appendChild(L),m.addEventListener("click",function(t){t.stopPropagation(),A(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function A(t){var n,l,e,s,o,r=[];for(n=document.getElementsByClassName("select-items"),l=document.getElementsByClassName("select-selected"),s=n.length,o=l.length,e=0;e<o;e++)t==l[e]?r.push(e):l[e].classList.remove("select-arrow-active");for(e=0;e<s;e++)r.indexOf(e)&&n[e].classList.add("select-hide")}document.addEventListener("click",A);$(document).ready(function(){$("#phone").mask("+38 (999) 99-99-999")});var h,c,b,C,N,p,y,x,V;h=document.getElementsByClassName("price-custom-select");C=h.length;for(c=0;c<C;c++){for(p=h[c].getElementsByTagName("select")[0],N=p.length,y=document.createElement("DIV"),y.setAttribute("class","select-selected"),y.innerHTML=p.options[p.selectedIndex].innerHTML,h[c].appendChild(y),x=document.createElement("DIV"),x.setAttribute("class","select-items select-hide"),b=1;b<N;b++)V=document.createElement("DIV"),V.innerHTML=p.options[b].innerHTML,V.addEventListener("click",function(t){var n,l,e,s,o,r,d;for(s=this.parentNode.parentNode.getElementsByTagName("select")[0],r=s.length,o=this.parentNode.previousSibling,l=0;l<r;l++)if(s.options[l].innerHTML==this.innerHTML){for(s.selectedIndex=l,o.innerHTML=this.innerHTML,n=this.parentNode.getElementsByClassName("same-as-selected"),d=n.length,e=0;e<d;e++)n[e].removeAttribute("class");this.setAttribute("class","same-as-selected");break}o.click()}),x.appendChild(V);h[c].appendChild(x),y.addEventListener("click",function(t){t.stopPropagation(),H(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function H(t){var n,l,e,s,o,r=[];for(n=document.getElementsByClassName("select-items"),l=document.getElementsByClassName("select-selected"),s=n.length,o=l.length,e=0;e<o;e++)t==l[e]?r.push(e):l[e].classList.remove("select-arrow-active");for(e=0;e<s;e++)r.indexOf(e)&&n[e].classList.add("select-hide")}document.addEventListener("click",H);console.clear();const I=document.querySelector(".container"),i=document.querySelectorAll(".card");let w=0,S=120,P=1,g=.1,B=1,M=0;for(let t=0;t<i.length;t++)i[t].style.setProperty("--xVal",`${w}%`),i[t].style.setProperty("--sVal",`${P}`),i[t].style.setProperty("--z-index",`${B}`),w+=S,P-=g,B--;const q=()=>{M<i.length-1&&(i.forEach(t=>{let n=parseFloat(t.style.getPropertyValue("--xVal").replace("%","")),l=parseFloat(t.style.getPropertyValue("--sVal")),e=parseFloat(t.style.getPropertyValue("--z-index"));t.style.setProperty("--xVal",`${n-S}%`),n<=0?(t.style.setProperty("--sVal",`${l-g}`),t.style.setProperty("--z-index",e-1)):(t.style.setProperty("--sVal",`${l+g}`),t.style.setProperty("--z-index",e+1))}),M++)},z=()=>{M&&(i.forEach(t=>{let n=parseFloat(t.style.getPropertyValue("--xVal").replace("%","")),l=parseFloat(t.style.getPropertyValue("--sVal")),e=parseFloat(t.style.getPropertyValue("--z-index"));t.style.setProperty("--xVal",`${n+S}%`),n<0?(t.style.setProperty("--sVal",`${l+g}`),t.style.setProperty("--z-index",e+1)):(t.style.setProperty("--sVal",`${l-g}`),t.style.setProperty("--z-index",e-1))}),M--)};I.addEventListener("wheel",t=>{t.deltaY===100?q():z()});new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});
