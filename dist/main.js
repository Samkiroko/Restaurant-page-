!function(e){var t={};function n(d){if(t[d])return t[d].exports;var s=t[d]={i:d,l:!1,exports:{}};return e[d].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(d,s,function(t){return e[t]}.bind(null,s));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function d(){document.getElementById("about").classList.add("menu-item-selected");const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("inner-content");const n=document.createElement("h1");n.textContent="About us",t.appendChild(n);const d=document.createElement("p");d.textContent="Wasabi's Sushi Bar serves a wide selection of sushi classics, \n                                such as sashimi, nigiri and maki sushi. In addition, our sushi\n                                chefs exhibit many modern interpretations and innovations of \n                                sushi dishes in our specialty signature rolls. We take pride \n                                and passion in serving this artistic culinary form. The exclusive \n                                use of high quality and fresh ingredients is our top priority.",d.style.padding="0 20%",t.appendChild(d);const s=document.createElement("img");s.src="images/kitchen.jpeg",s.classList.add("about-img"),t.appendChild(s),e.appendChild(t)}n.r(t),function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("header");const n=document.createElement("div");n.classList.add("logo"),t.appendChild(n);const d=document.createElement("div");d.classList.add("bounce");const s=document.createElement("p");s.classList.add("arrowDown"),d.appendChild(s),t.appendChild(d),e.appendChild(t);const i=document.createElement("nav"),c=document.createElement("ul");c.classList.add("menu");const o=document.createElement("li");o.classList.add("menu-item"),o.id="about",o.textContent="About",c.appendChild(o);const a=document.createElement("li");a.classList.add("menu-item"),a.id="menu",a.textContent="Menu",c.appendChild(a);const l=document.createElement("li");l.classList.add("menu-item"),l.id="location",l.textContent="Map",c.appendChild(l),i.appendChild(c),e.appendChild(i)}(),d(),document.querySelectorAll(".menu-item").forEach(e=>e.addEventListener("click",e=>{switch(document.querySelectorAll(".menu-item").forEach(e=>e.classList.remove("menu-item-selected")),document.getElementById("content").removeChild(document.querySelector(".inner-content")),e.target.id){case"about":d();break;case"menu":!function(){const e=["Sushi","Sashimi","Rolls","Sets","Drinks","Desserts"],t=["images/sushi.jpeg","images/sashimi.jpeg","images/rolls.jpeg","images/sets.jpg","images/drinks.jpg","images/dessert.jpeg"];document.getElementById("menu").classList.add("menu-item-selected");const n=document.getElementById("content"),d=document.createElement("div");d.classList.add("inner-content");const s=document.createElement("h1");s.textContent="Our Menu",d.appendChild(s);for(let n=0;n<e.length;n++){const s=document.createElement("div");s.classList.add("product-item");const i=document.createElement("div");i.classList.add("product-picture"),i.style.backgroundImage=`url('${t[n]}')`;const c=document.createElement("h2");c.classList.add("product-name"),c.innerHTML=e[n],s.appendChild(i),s.appendChild(c),d.appendChild(s)}n.appendChild(d)}();break;case"location":!function(){document.getElementById("location").classList.add("menu-item-selected");const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("inner-content");const n=document.createElement("h1");n.textContent="Find us on the map!",t.appendChild(n);const d=document.createElement("div");d.id="map",d.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.129669844545!2d-94.1660027847306!3d36.06594118010639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96ed98726d917%3A0xd48b5b4c4cd62b42!2s313%20W%20Dickson%20St%20%23105%2C%20Fayetteville%2C%20AR%2072701!5e0!3m2!1sen!2sus!4v1569348521761!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',t.appendChild(d);const s=document.createElement("h3");s.textContent="Hours",t.appendChild(s);const i=document.createElement("p");i.textContent="Monday - Thursday: 11:30am - 9pm",t.appendChild(i);const c=document.createElement("p");c.textContent="Friday - Saturday: 11:30am - 10pm",t.appendChild(c);const o=document.createElement("p");o.textContent="Sunday: 12pm - 9pm",t.appendChild(o),e.appendChild(t)}()}}))}]);