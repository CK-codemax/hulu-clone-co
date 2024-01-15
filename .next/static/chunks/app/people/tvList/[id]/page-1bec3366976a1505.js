(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867,501,375],{7972:function(e,t,r){Promise.resolve().then(r.bind(r,95))},7447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return c},default:function(){return u}});let n=r(1024),a=r(8630),o=r(6184),i=r(1749),s=n._(r(536)),c=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=i.Image},95:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7437),a=r(5587),o=r(6691),i=r.n(o),s=r(8210),c=r(1396),u=r.n(c);function l(e){let{movie:t}=e,{path:r}=(0,a.useHuluContext)();return(0,n.jsx)("div",{className:"cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:hover:scale-105 sm:border-slate-400 sm:m-2 transition-shadow duration-200 group",children:(0,n.jsxs)(u(),{href:"/tv/individual/".concat(t.id),children:[(0,n.jsx)(i(),{src:"".concat("https://image.tmdb.org/t/p/original/").concat(t.backdrop_path||t.poster_path),width:500,height:300,className:"sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200",style:{maxWidth:"100%",height:"auto"},placeholder:"blur",blurDataURL:"/spinner.svg",alt:"image is not available"}),(0,n.jsxs)("div",{className:"p-2",children:[(0,n.jsx)("p",{className:"line-clamp-2 text-md",children:t.overview}),(0,n.jsx)("h2",{className:"truncate text-lg font-bold",children:t.title||t.name}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("p",{children:t.release_date||t.first_air_date}),(0,n.jsx)(s.Z,{className:"h-5 ml-2"}),(0,n.jsx)("p",{children:t.vote_count})]})]})]})})}},5587:function(e,t,r){"use strict";r.r(t),r.d(t,{HuluProvider:function(){return c},useHuluContext:function(){return u}});var n=r(7437),a=r(2265);let o={genre:"fetchTrending",path:"home",query:"",page:2};function i(e,t){switch(t.type){case"genre/change":return{...e,genre:t.payload};case"query/change":return{...e,query:t.payload};case"path/change":return{...e,path:t.payload};case"query/reset":return{...e,query:""};default:throw Error("Invalid action type")}}let s=(0,a.createContext)();function c(e){let{children:t}=e,[{genre:r,page:c,query:u,path:l},d]=(0,a.useReducer)(i,o);return(0,n.jsx)(s.Provider,{value:{genre:r,handleChangeGenre:function(e){e!==r&&d({type:"genre/change",payload:e})},handleChangeQuery:function(e){d({type:"query/change",payload:e})},query:u,page:c,path:l,handleChangePath:function(e){e!==l&&d({type:"path/change",payload:e})},handleResetQuery:function(){d({type:"query/reset"})}},children:t})}function u(){let e=(0,a.useContext)(s);if(void 0===e)throw Error("MovieContext was used outside of PostProvider");return e}},622:function(e,t,r){"use strict";var n=r(2265),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,o={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(7447)},1396:function(e,t,r){e.exports=r(5250)},8210:function(e,t,r){"use strict";var n=r(2265);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"}))});t.Z=a}},function(e){e.O(0,[250,749,971,938,744],function(){return e(e.s=7972)}),_N_E=e.O()}]);