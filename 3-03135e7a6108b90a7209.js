(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{202:function(e,t,n){var r=n(8),i=n(64),a=n(39),o=n(9),s=n(10),d=n(13),u=n(207),l=(n(5).Reflect||{}).construct,c=d(function(){function e(){}return!(l(function(){},[],e)instanceof e)}),f=!d(function(){l(function(){})});r(r.S+r.F*(c||f),"Reflect",{construct:function(e,t){a(e),o(t);var n=arguments.length<3?e:a(arguments[2]);if(f&&!c)return l(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(u.apply(e,r))}var d=n.prototype,p=i(s(d)?d:Object.prototype),g=Function.apply.call(e,p,t);return s(g)?g:p}})},206:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&i(a,n.prototype),a}).apply(null,arguments)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(12),n(7),n(6),n(15),n(131),n(95),n(1),n(202),n(95),n(202),n(131),n(12),n(7),n(6),n(1),n(15);var s=n(0),d=n(65),u=d.useMDXComponents,l=d.mdx,c=n(101).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,i=e.children,o=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["scope","components","children"]),d=u(n),f=c(t),p=s.useMemo(function(){if(!i)return null;var e=a({React:s,mdx:l},f),t=Object.keys(e),n=t.map(function(t){return e[t]});return r(Function,["_fn"].concat(t,[""+i])).apply(void 0,[{}].concat(n))},[i,t]);return s.createElement(p,a({components:d},o))}},207:function(e,t,n){"use strict";var r=n(39),i=n(10),a=n(135),o=[].slice,s={};e.exports=Function.bind||function(e){var t=r(this),n=o.call(arguments,1),d=function(){var r=n.concat(o.call(arguments));return this instanceof d?function(e,t,n){if(!(t in s)){for(var r=[],i=0;i<t;i++)r[i]="a["+i+"]";s[t]=Function("F,a","return new F("+r.join(",")+")")}return s[t](e,n)}(t,r.length,r):a(t,r,e)};return i(t.prototype)&&(d.prototype=t.prototype),d}},212:function(e,t,n){"use strict";n(7),n(6),n(1),n(40),n(140),n(231);var r=n(19);t.__esModule=!0,t.default=void 0;var i,a=r(n(63)),o=r(n(70)),s=r(n(133)),d=r(n(134)),u=r(n(0)),l=r(n(4)),c=function(e){var t=(0,d.default)({},e),n=t.resolutions,r=t.sizes,i=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,n=e.fixed;return(t&&t[0]||n&&n[0]).src},p=Object.create({}),g=function(e){var t=c(e),n=f(t);return p[n]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,y=h&&window.IntersectionObserver,b=new WeakMap;function v(e){return e.map(function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},r&&u.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:a}),u.default.createElement("source",{media:i,srcSet:n,sizes:a}))})}function w(e){var t=[],n=[];return e.forEach(function(e){return(e.media?t:n).push(e)}),t.concat(n)}function S(e){return e.map(function(e){var t=e.src,n=e.media,r=e.tracedSVG;return u.default.createElement("source",{key:t,media:n,srcSet:r})})}function E(e){return e.map(function(e){var t=e.src,n=e.media,r=e.base64;return u.default.createElement("source",{key:t,media:n,srcSet:r})})}function I(e,t){var n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:n)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var O=function(e,t){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return n&&(n.observe(e),b.set(e,t)),function(){n.unobserve(e),b.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)}).join("")+"<img "+u+o+s+n+r+t+a+i+d+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,n=e.imageVariants,r=e.generateSources,i=e.spreadProps,a=u.default.createElement(C,(0,d.default)({src:t},i));return n.length>1?u.default.createElement("picture",null,r(n),a):a},C=u.default.forwardRef(function(e,t){var n=e.sizes,r=e.srcSet,i=e.src,a=e.style,o=e.onLoad,l=e.onError,c=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return u.default.createElement("img",(0,d.default)({sizes:n,srcSet:r,src:i},p,{onLoad:o,onError:l,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});C.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var _=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=h&&g(t),n.addNoScript=!(t.critical&&!t.fadeIn),n.useIOSupport=!m&&y&&!t.critical&&!n.seenBefore;var r=t.critical||h&&(m||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=u.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=c(e),n=f(t),p[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=c(this.props),t=e.title,n=e.alt,r=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,w=e.itemProp,I=e.loading,O=e.draggable,_=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,q=(0,d.default)({opacity:_?1:0,transition:j?"opacity "+y+"ms":"none"},s),D="boolean"==typeof h?"lightgray":h,k={transitionDelay:y+"ms"},V=(0,d.default)({opacity:this.state.imgLoaded?0:1},j&&k,s,f),z={title:t,alt:this.state.isVisible?"":n,style:V,className:p};if(g){var T=g,x=T[0];return u.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},u.default.createElement(b,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),D&&u.default.createElement(b,{title:t,style:(0,d.default)({backgroundColor:D,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&k)}),x.base64&&u.default.createElement(R,{src:x.base64,spreadProps:z,imageVariants:T,generateSources:E}),x.tracedSVG&&u.default.createElement(R,{src:x.tracedSVG,spreadProps:z,imageVariants:T,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,v(T),u.default.createElement(C,{alt:n,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:n,title:t,loading:I},x,{imageVariants:T}))}}))}if(m){var N=m,P=N[0],M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},a);return"inherit"===a.display&&delete M.display,u.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},D&&u.default.createElement(b,{title:t,style:(0,d.default)({backgroundColor:D,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},j&&k)}),P.base64&&u.default.createElement(R,{src:P.base64,spreadProps:z,imageVariants:N,generateSources:E}),P.tracedSVG&&u.default.createElement(R,{src:P.tracedSVG,spreadProps:z,imageVariants:N,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,v(N),u.default.createElement(C,{alt:n,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:n,title:t,loading:I},P,{imageVariants:N}))}}))}return null},t}(u.default.Component);_.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),q=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});_.propTypes={resolutions:j,sizes:q,fixed:l.default.oneOfType([j,l.default.arrayOf(j)]),fluid:l.default.oneOfType([q,l.default.arrayOf(q)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var D=_;t.default=D},217:function(e,t,n){"use strict";n(29),n(49),n(12),n(15),n(7),n(6),n(1),n(40),n(71);var r=n(19);t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var i=this,a=arguments,o=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,a)},t),o&&e.apply(i,a)}},t.isReactElement=a,t.shallowComparison=function(e,t){for(var n=new Set(Object.keys(e),Object.keys(t)),r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}var s=o;if(e[s]!==t[s]&&!a(e[s]))return!0}return!1};var i=r(n(0));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some(function(e){return i.default.isValidElement(e)})}},231:function(e,t,n){"use strict";n(213)("fixed",function(e){return function(){return e(this,"tt","","")}})},256:function(e,t,n){"use strict";var r=n(19);t.__esModule=!0,t.default=void 0;var i=r(n(257));t.Disqus=i.default;var a=r(n(258));t.CommentCount=a.default;var o=i.default;t.default=o},257:function(e,t,n){"use strict";var r=n(19);t.__esModule=!0,t.default=void 0;var i=r(n(134)),a=r(n(133)),o=r(n(63)),s=r(n(0)),d=r(n(4)),u=n(217),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="leemulvey-com",t.config?n.config=t.config:n.config={identifier:t.identifier,url:t.url,title:t.title},n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,u.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,u.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},n.render=function(){var e=this.props,t=(e.config,(0,a.default)(e,["config"]));return s.default.createElement("div",(0,i.default)({id:"disqus_thread"},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},t}(s.default.Component);t.default=l,l.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),identifier:d.default.string,title:d.default.string,url:d.default.string}},258:function(e,t,n){"use strict";var r=n(19);t.__esModule=!0,t.default=void 0;var i=r(n(134)),a=r(n(133)),o=r(n(63)),s=r(n(0)),d=r(n(4)),u=n(217),l=(0,u.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="leemulvey-com",n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,r=(0,a.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,i.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},r,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),n)},t}(s.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),placeholder:d.default.string}}}]);
//# sourceMappingURL=3-03135e7a6108b90a7209.js.map