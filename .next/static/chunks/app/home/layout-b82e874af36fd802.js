(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{2601:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(8960)},3746:function(e,t,r){Promise.resolve().then(r.bind(r,376))},376:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7437),i=r(4839),o=r(1396),c=r.n(o),a=r(4033),u=r(5587);function s(){let{genre:e,handleChangeGenre:t}=(0,u.useHuluContext)(),r=(0,a.usePathname)();return(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{className:"flex text-l px-10 sm:px-20 sm:text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll   scrollbar-hide",children:Object.entries(i.Z).map(i=>{let[o,{title:a}]=i;return(0,n.jsx)(c(),{className:"last:pr-24 cursor-pointer capitalize transition duration-100 transform hover:scale-125 hover:text-black dark:hover:text-white active:text-red-500 ".concat(r.includes("/home/".concat(o))||e===o?"text-red-500":""),href:"/home/".concat(o),onClick:()=>t(o),children:a},o)})})})}},5587:function(e,t,r){"use strict";r.r(t),r.d(t,{HuluProvider:function(){return u},useHuluContext:function(){return s}});var n=r(7437),i=r(2265);let o={genre:"fetchTrending",path:"home",query:"",page:2};function c(e,t){switch(t.type){case"genre/change":return{...e,genre:t.payload};case"query/change":return{...e,query:t.payload};case"path/change":return{...e,path:t.payload};case"query/reset":return{...e,query:""};default:throw Error("Invalid action type")}}let a=(0,i.createContext)();function u(e){let{children:t}=e,[{genre:r,page:u,query:s,path:l},h]=(0,i.useReducer)(c,o);return(0,n.jsx)(a.Provider,{value:{genre:r,handleChangeGenre:function(e){e!==r&&h({type:"genre/change",payload:e})},handleChangeQuery:function(e){h({type:"query/change",payload:e})},query:s,page:u,path:l,handleChangePath:function(e){e!==l&&h({type:"path/change",payload:e})},handleResetQuery:function(){h({type:"query/reset"})}},children:t})}function s(){let e=(0,i.useContext)(a);if(void 0===e)throw Error("MovieContext was used outside of PostProvider");return e}},4839:function(e,t,r){"use strict";let n=r(2601).env.API_KEY;t.Z={fetchTrending:{title:"Trending",url:"/trending/movie/week?api_key=".concat(n,"&language=en-US")},fetchTopRated:{title:"Top-Rated",url:"/movie/top_rated?api_key=".concat(n,"&language=en-US")},fetchComedy:{title:"Comedy",url:"/discover/movie?api_key=".concat(n,"&with_genres=35")},fetchHorrorMovies:{title:"Horror",url:"/discover/movie?api_key=".concat(n,"&with_genres=27")},fetchMystery:{title:"Mystery",url:"/discover/movie?api_key=".concat(n,"&with_genres=9648")},fetchAction:{title:"Action",url:"/discover/movie?api_key=".concat(n,"&with_genres=28")},fetchSciFi:{title:"Sci-Fi",url:"/discover/movie?api_key=".concat(n,"&with_genres=878")},fetchWestern:{title:"Western",url:"/discover/movie?api_key=".concat(n,"&with_genres=37")},fetchAnimation:{title:"Animation",url:"/discover/movie?api_key=".concat(n,"&with_genres=16")},fetchTV:{title:"TV Movie",url:"/discover/movie?api_key=".concat(n,"&with_genres=10770")},fetchRomance:{title:"Romance",url:"/discover/movie?api_key=".concat(n,"&with_genres=10749")},fetchFantasy:{title:"Fantasy",url:"/discover/movie?api_key=".concat(n,"&with_genres=14")},fetchHistory:{title:"History",url:"/discover/movie?api_key=".concat(n,"&with_genres=36")},fetchAdventure:{title:"Adventure",url:"/discover/movie?api_key=".concat(n,"&with_genres=12")},fetchDocumentary:{title:"Documentary",url:"/discover/movie?api_key=".concat(n,"&with_genres=99")},fetchFamily:{title:"Family",url:"/discover/movie?api_key=".concat(n,"&with_genres=10751")},fetchThriller:{title:"Thriller",url:"/discover/movie?api_key=".concat(n,"&with_genres=53")},fetchWar:{title:"War",url:"/discover/movie?api_key=".concat(n,"&with_genres=10752")},fetchMusic:{title:"Music",url:"/discover/movie?api_key=".concat(n,"&with_genres=10402")},fetchCrime:{title:"Crime",url:"/discover/movie?api_key=".concat(n,"&with_genres=80")},fetchDrama:{title:"Drama",url:"/discover/movie?api_key=".concat(n,"&with_genres=18")}}},8960:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function c(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var u=[],s=!1,l=-1;function h(){s&&n&&(s=!1,n.length?u=n.concat(u):l=-1,u.length&&f())}function f(){if(!s){var e=a(h);s=!0;for(var t=u.length;t;){for(n=u,u=[];++l<t;)n&&n[l].run();l=-1,t=u.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||s||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},c=!0;try{t[e](o,o.exports,n),c=!1}finally{c&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},622:function(e,t,r){"use strict";var n=r(2265),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,o={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:s,ref:l,props:o,_owner:a.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},7437:function(e,t,r){"use strict";e.exports=r(622)},1396:function(e,t,r){e.exports=r(5250)},4033:function(e,t,r){e.exports=r(5313)}},function(e){e.O(0,[250,971,938,744],function(){return e(e.s=3746)}),_N_E=e.O()}]);