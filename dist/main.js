(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("div");t.appendChild(n);const d=document.createElement("div");d.classList.add("headerRightSide");const a=document.createElement("div");a.classList.add("headerButton");const c=document.createElement("h4"),o=document.createElement("button");o.setAttribute("id","menuTab"),o.textContent="Menu",c.appendChild(o),a.appendChild(c),d.appendChild(a);const l=document.createElement("div");l.classList.add("headerButton");const m=document.createElement("h4"),i=document.createElement("button");i.setAttribute("id","contactTab"),i.textContent="Contact Us",m.appendChild(i),l.appendChild(m),d.appendChild(l),t.appendChild(d),e.appendChild(t);const p=document.createElement("main"),u=document.createElement("h1");u.id="centerLogo",u.textContent="Food N' Stuff",p.appendChild(u);const r=document.createElement("img");r.setAttribute("src","../src/restaurant.jpg"),p.appendChild(r),e.appendChild(p);const s=document.createElement("footer"),h=document.createElement("p");h.textContent="Food, you need it, we make it. Stuff is available on request.",s.appendChild(h);const C=document.createElement("p");C.innerHTML='<a href="https://stocksnap.io/photo/restaurant-bar-THXU08ODDE">Photo</a> by <a href="https://stocksnap.io/author/aftaputtagunawan">Afta Putta Gunawan</a> on <a href="https://stocksnap.io">StockSnap</a>',s.appendChild(C),e.appendChild(s)}function t(){const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("div");n.classList.add("headerLogo","headerButton");const d=document.createElement("button");d.setAttribute("id","homeTab"),d.textContent="Food N' Stuff",n.appendChild(d),t.appendChild(n);const a=document.createElement("div");a.classList.add("headerRightSide");const c=document.createElement("div");c.classList.add("headerButton");const o=document.createElement("h4"),l=document.createElement("button");l.setAttribute("id","menuTab"),l.textContent="Menu",o.appendChild(l),c.appendChild(o),a.appendChild(c);const m=document.createElement("div");m.classList.add("headerButton");const i=document.createElement("h4"),p=document.createElement("button");p.setAttribute("id","contactTab"),p.textContent="Contact Us",i.appendChild(p),m.appendChild(i),a.appendChild(m),t.appendChild(a),e.appendChild(t);const u=document.createElement("main"),r=document.createElement("h1");r.textContent="Menu",u.appendChild(r);const s=document.createElement("h2");s.textContent="Food",u.appendChild(s);const h=document.createElement("div");h.classList.add("menuItem");const C=document.createElement("div"),E=document.createElement("h3");E.textContent="Burger",C.appendChild(E);const x=document.createElement("h5");x.textContent="A burger... Comes with Lettuce, Tomato, and Onion.",C.appendChild(x),h.appendChild(C);const b=document.createElement("div"),v=document.createElement("h4");v.textContent="$7",b.appendChild(v),h.appendChild(b),u.appendChild(h);const f=document.createElement("div");f.classList.add("menuItem");const L=document.createElement("div"),S=document.createElement("h3");S.textContent="Vegan Burger",L.appendChild(S);const T=document.createElement("h5");T.textContent="A burger... minus the burger. Black Bean patty, comes with Lettuce, Tomato, and Onion.",L.appendChild(T),f.appendChild(L);const y=document.createElement("div"),g=document.createElement("h4");g.textContent="$7",y.appendChild(g),f.appendChild(y),u.appendChild(f);const A=document.createElement("h2");A.textContent="Stuff",u.appendChild(A);const B=document.createElement("div");B.classList.add("menuItem");const M=document.createElement("div"),k=document.createElement("h3");k.textContent="Coffee",M.appendChild(k);const q=document.createElement("h5");q.textContent="You'll take it black.",M.appendChild(q),B.appendChild(M);const w=document.createElement("div"),F=document.createElement("h4");F.textContent="$1",w.appendChild(F),B.appendChild(w),u.appendChild(B);const P=document.createElement("div");P.classList.add("menuItem");const I=document.createElement("div"),U=document.createElement("h3");U.textContent="lemonade",I.appendChild(U);const H=document.createElement("h5");H.textContent="Fresh squeezed, at some point.",I.appendChild(H),P.appendChild(I);const N=document.createElement("div"),O=document.createElement("h4");O.textContent="$1",N.appendChild(O),P.appendChild(N),u.appendChild(P),e.appendChild(u)}function n(){const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("div");n.classList.add("headerLogo","headerButton");const d=document.createElement("button");d.setAttribute("id","homeTab"),d.textContent="Food N' Stuff",n.appendChild(d),t.appendChild(n);const a=document.createElement("div");a.classList.add("headerRightSide");const c=document.createElement("div");c.classList.add("headerButton");const o=document.createElement("h4"),l=document.createElement("button");l.setAttribute("id","menuTab"),l.textContent="Menu",o.appendChild(l),c.appendChild(o),a.appendChild(c);const m=document.createElement("div");m.classList.add("headerButton");const i=document.createElement("h4"),p=document.createElement("button");p.setAttribute("id","contactTab"),p.textContent="Contact Us",i.appendChild(p),m.appendChild(i),a.appendChild(m),t.appendChild(a),e.appendChild(t);const u=document.createElement("main"),r=document.createElement("h1");r.textContent="Contact Us",u.appendChild(r);const s=document.createElement("h2");s.textContent="Business Hours",u.appendChild(s);const h=document.createElement("ul"),C=document.createElement("li"),E=document.createElement("span");E.textContent="Monday-Thursday",C.appendChild(E);const x=document.createElement("span");x.textContent="11AM - 7PM",C.appendChild(x),h.appendChild(C);const b=document.createElement("li"),v=document.createElement("span");v.textContent="Friday-Saturday",b.appendChild(v);const f=document.createElement("span");f.textContent="11AM - 9PM",b.appendChild(f),h.appendChild(b);const L=document.createElement("li"),S=document.createElement("span");S.textContent="Sundays",L.appendChild(S);const T=document.createElement("span");T.textContent="11AM - 4PM",L.appendChild(T),h.appendChild(L),u.appendChild(h);const y=document.createElement("h2");y.textContent="Store Phone: ";const g=document.createElement("span");g.textContent="(101)555-5555",y.appendChild(g),u.appendChild(y);const A=document.createElement("h2");A.textContent="Owner Email: ";const B=document.createElement("span");B.textContent="You Don't Need It",A.appendChild(B),u.appendChild(A),e.appendChild(u)}document.onload=function d(a){document.querySelector("#content").innerHTML="",a();try{document.querySelector("#homeTab").addEventListener("click",(function(){return d(e)}))}catch(e){if(!(e instanceof TypeError))throw e}document.querySelector("#menuTab").addEventListener("click",(function(){return d(t)})),document.querySelector("#contactTab").addEventListener("click",(function(){return d(n)}))}(e)})();