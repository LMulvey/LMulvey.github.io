(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"CategoryList",function(){return y}),a.d(t,"default",function(){return k}),a.d(t,"pageQuery",function(){return E});a(11),a(12),a(7),a(6),a(1),a(15);var n=a(0),r=a.n(n),o=a(195),l=a(212),i=a.n(l),c=a(206),m=a.n(c),h=a(256),s=a(200),p=a(196);function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){u(e,t,a[t])})}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=o.c.p.withConfig({displayName:"post__AuthorAndDate",componentId:"ee7r1p-0"})(["text-align:right;align-self:flex-end;margin:0;flex-shrink:0;"]),g=o.c.div.withConfig({displayName:"post__TitleContainer",componentId:"ee7r1p-1"})(["display:flex;position:relative;flex-flow:row wrap;justify-content:space-between;border-bottom:1px solid rgba(0,0,0,0.15);padding-bottom:22px;margin-bottom:1.5rem;"]),b=o.c.h1.withConfig({displayName:"post__Title",componentId:"ee7r1p-2"})(["border-bottom:0;padding:0;margin:0;margin-right:25px;min-width:250px;&:hover{cursor:pointer;}"]),v=Object(o.d)(["0%{opacity:0;}25%{opacity:1;}75%{opacity:1;}100%{opacity:0;}"]),x=o.c.div.withConfig({displayName:"post__CopiedMessage",componentId:"ee7r1p-3"})(["display:block;position:absolute;background:rgba(0,0,0,0.7);border-radius:6px;padding:5px 25px;font-size:16px;color:white;font-weight:700;transform:translate(-50%,-50%);top:50%;left:50%;animation:"," "," ease-in;"],v,function(e){return e.copyAnimMs+"ms"}),z=o.c.div.withConfig({displayName:"post__BannerContainer",componentId:"ee7r1p-4"})(["position:relative;"]),w=o.c.div.withConfig({displayName:"post__CreditBadge",componentId:"ee7r1p-5"})(["position:absolute;bottom:0;right:0;display:block;margin:0 15px 15px 0;background:rgba(0,0,0,0.3);padding:5px 10px;font-size:12px;color:white;border:1px solid rgba(50,0,0,0.5);border-radius:6px;transition:transform 75ms ease-in-out;&:hover{cursor:pointer;transform:scale(1.04);}"]),y=function(e){var t=e.list,a=e.isSmall;return t&&t.length?r.a.createElement("div",{style:d({},a?{fontSize:"14px"}:{})},"Tags:"," ",t.map(function(e,a){var n=e.toLowerCase();return r.a.createElement("div",{key:n,style:{display:"inline-block",marginRight:"5px",marginBottom:"15px"}},r.a.createElement(p.a,{className:"category-link",to:"categories/"+n},e),a<t.length-1?", ":"")})):null};function k(e){var t=e.data,a=t.site,o=t.mdx,l=e.pageContext,c=l.next,d=l.prev,u=e.location.pathname,v=a.siteMetadata.siteUrl,k=Object(n.useState)(!1),E=k[0],C=k[1],O=Object(n.useRef)(null),M={identifier:o.fields.id,title:o.frontmatter.title};return r.a.createElement(s.a,{pathname:u,site:a,frontmatter:o.frontmatter,useWhitePageWrapper:!0},r.a.createElement(g,null,E?r.a.createElement(x,{copyAnimMs:1300},"Copied Post URL to Clipboard!"):null,r.a.createElement(b,null,r.a.createElement("a",{role:"button","aria-label":"Copy Post URI to Clipboard",href:"#",onClick:function(){O.current&&(C(!1),clearTimeout(O.current)),C(!0),O.current=setTimeout(function(){return C(!1)},1300);var e=document.createElement("textarea");e.value=(v+"/"+o.frontmatter.slug).replace("//","/"),e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")}catch(t){console.error("Fallback: Oops, unable to copy",t)}document.body.removeChild(e)}},o.frontmatter.title)),r.a.createElement(f,null,o.fields.static?null:r.a.createElement("em",null,o.frontmatter.date))),o.frontmatter.banner&&r.a.createElement(z,null,r.a.createElement(i.a,{sizes:o.frontmatter.banner.childImageSharp.sizes,alt:a.siteMetadata.keywords.join(", ")}),o.frontmatter.photographer&&r.a.createElement(p.a,{to:o.frontmatter.photographerUrl},r.a.createElement(w,null,"Photo by ",o.frontmatter.photographer))),r.a.createElement(m.a,null,o.code.body),r.a.createElement("div",null,r.a.createElement(y,{list:o.fields.categories}),r.a.createElement("hr",null),o.fields.static?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Disqus,{config:M}),r.a.createElement("hr",null),d&&r.a.createElement("span",null,"Previous:"," ",r.a.createElement(p.a,{to:"/"+d.fields.slug},d.fields.title)),c&&d&&" | ",c&&r.a.createElement("span",null,"Next:"," ",r.a.createElement(p.a,{to:"/"+c.fields.slug},c.fields.title)))))}var E="2088116091"},196:function(e,t,a){"use strict";a(16),a(7),a(6),a(1),a(15);var n=a(0),r=a.n(n),o=a(97);t.a=function(e){var t=e.children,a=e.to,n=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children","to"]);return/^\/(?!\/)/.test(a)?r.a.createElement(o.Link,Object.assign({to:a},n),t):r.a.createElement("a",Object.assign({href:a},n),t)}},200:function(e,t,a){"use strict";a(12),a(7),a(6),a(1),a(15);var n=a(0),r=a.n(n),o=a(203),l=a.n(o),i=a(65),c=a(195),m=(a(204),a(93),a(94),a(18)),h=a.n(m),s=a(197);a(16),a(199);var p=c.c.button.withConfig({displayName:"HeaderButton__Button",componentId:"sc-70jjnm-0"})(["margin:5px 10px;padding:5px 10px;background:rgba(255,255,255,0.5);border-radius:6px;border:none;color:rgba(0,0,0,0.8);transition:all 200ms cubic-bezier(0.175,0.885,0.32,1.275);transition-property:border,background-color,color,transform;cursor:pointer;& ",".fa-fw{color:",";transition:all 125ms ease-in;transition-property:border,background-color,color,transform;}:hover{background-color:",";color:",";transform:scale(1.2);& ",".fa-fw{color:",";}}@media (max-width:340px){font-size:0.75rem;margin:2px;padding:8px;}"],function(e){return e.icon},function(e){return e.theme.main},function(e){return e.theme.main},function(e){return e.theme.contrast},function(e){return e.icon},function(e){return e.theme.contrast});p.defaultProps={theme:{main:"#3D5757",contrast:"#FFFFFF"}};var d=function(e){var t=e.link,a=e.icon,n=e.title,o=e.theme,l=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["link","icon","title","theme"]);return r.a.createElement("a",Object.assign({href:t,rel:"noopener noreferrer"},l),r.a.createElement(p,{theme:o},r.a.createElement("i",{className:a+" fa-fw"})," ",n))},u=["Weird Dad 👨🏼‍💻","Super Weird Dad 💁🏼‍♂️","Mentor 👨🏼‍🏫","Surfboard, Surfboard 🐝","Ghost 👻","Just Frontend 🐥","Bike Dad 🚲","Sunflower 🌻","Big Daddy Developer 👱🏻‍♂️","Ask Me About GraphQL","Secretly Loves AWS","Misser of Apollo","Maybe Full Stack","Master Description Writer","Ponderer of Meowing Cats","F5 Inspiration Driver","Edmonton > Calgary","YYC DT Library Lover","Combat. Ready for Combat","Lover of All Love 🏳️‍🌈","The Little Dark Age","FIRE! Fire on the Mountain! 🔥","Jazz Hands 🤗","soundcloud.com/yevyev","Your heroes may disappoint you","Jugg Main","Pond Taker","Bean Dad","Manatee Researcher 🐋","Loki, go away","Why do I have a cat?","10k Grant Recipient","One-time 10km Runner","Hobbyist Hockey Player","Magic Tricker","Just check source for all the possibilities here"],f=function e(t){void 0===t&&(t=null);var a=u[Math.floor(Math.random()*(u.length-1))];return a===t?e(t):a},g=function(e){var t=e.pathname,a=void 0===t?"":t,o=Object(n.useState)(null),l=o[0],i=o[1],c=a.includes("blog"),m=c?"Occasional Blog Writer":f(),p=c?"Dev Blog":"Lee Mulvey",u=Object(n.useState)(m),g=u[0],w=u[1],E=function(){return w(f)},C=function(){l||(E(),i(setInterval(E,700)))},O=function(){clearInterval(l),i(null)};return r.a.createElement(b,{fluid:!0},r.a.createElement(s.Row,{justify:"between",align:"center"},r.a.createElement(s.Col,{xl:6,lg:8,md:12},r.a.createElement(h.a,{to:"/",style:{textDecoration:"none"}},r.a.createElement(v,{onMouseOver:C,onMouseLeave:O,onTouchStart:C,onTouchEnd:O},c&&r.a.createElement(x,null,"Lee Mulvey's"),r.a.createElement(z,null,p),r.a.createElement(y,{key:g},"Developer && ",g)))),r.a.createElement(s.Col,{xl:6,lg:4,md:12,justify:"center"},r.a.createElement(k,null,c&&r.a.createElement(d,{title:"Home",link:"http://www.leemulvey.com/",icon:"fal fa-home"}),r.a.createElement(d,{title:"Blog",link:"http://www.leemulvey.com/blog",icon:"fal fa-newspaper"}),r.a.createElement(d,{title:"Twitter",target:"_blank",theme:{main:"#1dcaff",contrast:"white"},link:"http://www.twitter.com/LeeMulvey",icon:"fab fa-twitter"}),r.a.createElement(d,{title:"GitHub",target:"_blank",link:"http://www.github.com/LMulvey",icon:"fab fa-github"}),r.a.createElement(d,{title:"StackOverflow",target:"_blank",theme:{main:"#FF9900",contrast:"white",color:"#FF6922"},link:"https://stackoverflow.com/users/8246359",icon:"fab fa-stack-overflow"})))))},b=Object(c.c)(s.Container).withConfig({displayName:"Header__HeaderContainer",componentId:"mvksys-0"})(["padding:22px 20px;"]),v=c.c.div.withConfig({displayName:"Header__LogoContainer",componentId:"mvksys-1"})(["display:block;position:relative;@media (max-width:991px){margin-bottom:25px;text-align:center;}"]),x=c.c.h2.withConfig({displayName:"Header__SubWordmark",componentId:"mvksys-2"})(["display:block;font-family:'flood-std',sans-serif;margin-bottom:0;padding:5px 10px;text-shadow:-3px -3px 0px transparent;border:0;line-height:1rem;background:#1a2a6c;background:linear-gradient( to right,",",#b21f1f,#4f424c );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;"],function(e){return e.theme.colours.ORANGE}),z=c.c.h1.withConfig({displayName:"Header__Wordmark",componentId:"mvksys-3"})(["display:inline-block;font-family:'flood-std',sans-serif;font-size:5rem;text-align:center;text-shadow:-5px -5px 0px white;background:#1a2a6c;background:linear-gradient( to right,",",#b21f1f,#4f424c );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;border:0;padding:20px 5px;@media (max-width:525px){font-size:3.5rem;}"],function(e){return e.theme.colours.ORANGE}),w=Object(c.d)(["0%{transform:scale(0.7);}25%{transform:scale(1.05);}100%{transform:scale(1);}"]),y=c.c.p.withConfig({displayName:"Header__Submark",componentId:"mvksys-4"})(["display:inline-block;position:absolute;bottom:-1.5rem;left:25px;min-width:120px;font-size:22px;font-weight:700;text-align:center;color:white;text-decoration:italic;text-shadow:2px 2px 0px ",";animation:"," 0.6s cubic-bezier(0.175,0.885,0.32,1.275);@media (max-width:991px){width:100%;left:0;font-size:18px;}"],function(e){return e.theme.colours.ORANGE},w),k=c.c.div.withConfig({displayName:"Header__ButtonsContainer",componentId:"mvksys-5"})(["display:flex;flex-flow:row wrap;justify-content:flex-end;align-items:center;width:100%;@media (max-width:991px){justify-content:center;}"]),E=c.c.div.withConfig({displayName:"Footer__StyledFooter",componentId:"b7sdtg-0"})(["display:flex;flex-flow:row wrap;width:100%;justify-content:flex-end;align-items:center;padding:25px;background-color:#65879c;border-top:1px solid rgba(0,0,0,0.15);@media screen and (max-width:500px){justify-content:center;}& > a{color:white;font-weight:700;font-size:1.2em;margin:0 25px 0 25px;text-decoration:none;border-bottom:3px solid transparent;transition:all 125ms ease-in;@media screen and (max-width:500px){margin-bottom:10px;font-size:1em;}&:hover{text-decoration:none;border-bottom:3px solid teal;}}"]),C=function(e){var t=e.links;return r.a.createElement(E,null,t.map(function(e){return r.a.createElement("a",{key:e.href,href:e.href,target:e.target||"_blank",alt:e.label},e.label)}))};function O(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  html, body {\n    min-width: 320px;\n  }\n\n  body {\n    height: 100%;\n    margin: 0px;\n    font-size: 18px;\n    background-color: rgb(156, 190, 211);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'  viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg transform='skewX(15)' fill='%239f9f9f' fill-opacity='0.3'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"),\n      linear-gradient(-45deg, rgb(156, 190, 211), rgb(206, 229, 240));\n    background-size: 125px, auto;\n    min-height: calc(100vh - 100px);\n  }\n\n  pre {\n    background-color: #2f1e2e !important;\n    border-radius: 4px;\n    font-size: 14px;\n  }\n\n  .gatsby-highlight {\n    background-color: #4f424c;\n    display: block;\n    margin-top: 25px;\n    margin-bottom: 25px;\n    border-radius: 16px;\n    font-size: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: #333;\n    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.15);\n  }\n  \n  h1 {\n    color: ",";\n    & a {\n      color: ",";\n      text-decoration: none;\n      border-bottom: 3px solid transparent;\n      transition: all 125ms ease-in;\n      &:hover {\n        border-bottom: 3px solid ",";\n      }\n    }\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    padding-bottom: 22px;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n\n  h3 {\n    font-size: 1.31951rem\n  }\n\n  a.category-link {\n    color: ",";\n    font-weight: 700;\n  }\n\n  .slider-list,\n  .slider-frame {\n    min-height: 500px;\n  }\n"]);return O=function(){return e},e}var M=Object(c.b)(O(),function(e){return e.theme.colours.ORANGE},function(e){return e.theme.colours.ORANGE},function(e){return e.theme.colours.ORANGE},function(e){return e.theme.colours.ORANGE},function(e){return e.theme.colours.ORANGE}),j=c.c.div.withConfig({displayName:"styles__PageWrapper",componentId:"qnbwh8-0"})(["width:100%;min-height:100vh;margin-bottom:44px;padding:50px 176px;"," @media (max-width:720px){padding:50px 88px;}@media (max-width:640px){padding:35px 50px;}"],function(e){return e.useWhitePageWrapper&&"\n    background: rgba(255, 255, 255, 0.7);\n    box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.15), 0px 2px 6px rgba(0, 0, 0, 0.15);\n  "}),_=a(205),H=c.c.h2.withConfig({displayName:"Title",componentId:"sc-1kvee10-0"})(["text-align:center;font-size:24px;font-weight:400;line-height:1.1;border-top:1px solid #f3f3f3;margin-top:20px;margin-bottom:20px;padding-top:30px;padding-bottom:10px;"]),N=c.c.h2.withConfig({displayName:"Subtitle",componentId:"sc-1kounw9-0"})([""]),A=c.c.p.withConfig({displayName:"Paragraph",componentId:"jlgdb5-0"})(["text-align:left;line-height:1.65;margin:20px 0;"]),P=a(196),L={h1:function(e){return r.a.createElement(H,e)},h2:function(e){return r.a.createElement(N,e)},p:function(e){return r.a.createElement(A,e)}},I={Link:P.a,YouTube:_.a};function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){F(e,t,a[t])})}return e}function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.a=function(e){var t=e.site,a=e.frontmatter,n=void 0===a?{}:a,o=e.pathname,m=e.children,h=e.useWhitePageWrapper,s=t.siteMetadata,p=s.title,d=s.description,u=s.keywords,f=n.keywords,b=n.description,v=(f||u).join(", "),x=b||d;return r.a.createElement(c.a,{theme:{colours:{ORANGE:"#e2662c"}}},r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:p,meta:[{name:"description",content:x},{name:"keywords",content:v}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{rel:"stylesheet",href:"https://use.typekit.net/mxs6bub.css"}),r.a.createElement("script",{defer:!0,src:"https://pro.fontawesome.com/releases/v5.0.10/js/all.js",integrity:"sha384-+1nLPoB0gaUktsZJP+ycZectl3GX7wP8Xf2PE/JHrb7X1u7Emm+v7wJMbAcPr8Ge",crossorigin:"anonymous"})),r.a.createElement(M,null),r.a.createElement(g,{pathname:o}),r.a.createElement(j,{useWhitePageWrapper:h},r.a.createElement(i.MDXProvider,{components:S({},L,I)},m)),r.a.createElement(C,{links:[{href:"mailto:hello@leemulvey.com",label:"💌 contact"},{href:"https://www.leemulvey.com/blog",label:"📓 blog"},{href:"https://www.twitter.com/leemulvey",label:"🐦 twitter",target:"_blank"},{href:"https://www.github.com",label:"👨🏼‍💻 github",target:"_blank"}]})))}}}]);
//# sourceMappingURL=component---src-templates-post-js-b8e1a763e2fc8f626725.js.map