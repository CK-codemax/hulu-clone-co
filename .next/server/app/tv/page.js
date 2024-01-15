(()=>{var e={};e.id=501,e.ids=[501],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},5789:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(482),n=r(9108),a=r(2563),o=r.n(a),i=r(8300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["tv",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9618)),"C:\\Users\\USER\\my-personal-builds\\hulu-clone-co\\src\\app\\tv\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,7607)),"C:\\Users\\USER\\my-personal-builds\\hulu-clone-co\\src\\app\\tv\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,9098)),"C:\\Users\\USER\\my-personal-builds\\hulu-clone-co\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\USER\\my-personal-builds\\hulu-clone-co\\src\\app\\tv\\page.jsx"],u="/tv/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/tv/page",pathname:"/tv",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9557:(e,t,r)=>{Promise.resolve().then(r.bind(r,6216))},2254:(e,t,r)=>{e.exports=r(4767)},6216:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(2295),n=r(6580),a=r(1223),o=r.n(a),i=r(2104),l=r(783),c=r.n(l);function d({movie:e}){let{path:t}=(0,n.useHuluContext)();return s.jsx("div",{className:"cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:hover:scale-105 sm:border-slate-400 sm:m-2 transition-shadow duration-200 group",children:(0,s.jsxs)(c(),{href:`/tv/individual/${e.id}`,children:[s.jsx(o(),{src:`https://image.tmdb.org/t/p/original/${e.backdrop_path||e.poster_path}`,width:500,height:300,className:"sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200",style:{maxWidth:"100%",height:"auto"},placeholder:"blur",blurDataURL:"/spinner.svg",alt:"image is not available"}),(0,s.jsxs)("div",{className:"p-2",children:[s.jsx("p",{className:"line-clamp-2 text-md",children:e.overview}),s.jsx("h2",{className:"truncate text-lg font-bold",children:e.title||e.name}),(0,s.jsxs)("div",{className:"flex items-center",children:[s.jsx("p",{children:e.release_date||e.first_air_date}),s.jsx(i.Z,{className:"h-5 ml-2"}),s.jsx("p",{children:e.vote_count})]})]})]})})}},7607:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(5036),n=r(5563);function a({children:e}){return(0,s.jsxs)(s.Fragment,{children:[s.jsx(n.ZP,{keywords:"tvshows, series...",type:"tv"}),e]})}},9618:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(5036),n=r(2462),a=r(1213);async function o(){let e=(await (0,n.KT)()).results.filter(e=>null!==e.backdrop_path&&""!==e.overview||null!==e.poster_path&&""!==e.overview);return(0,s.jsxs)("div",{children:[e&&0===e.length&&s.jsx("h1",{className:"text-center pt-6",children:"No results found"}),e&&s.jsx(a.Z,{movies:e})]})}},1213:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(5036);let n=(0,r(6843).createProxy)(String.raw`C:\Users\USER\my-personal-builds\hulu-clone-co\src\components\TvThumbNail.jsx`),{__esModule:a,$$typeof:o}=n,i=n.default;var l=r(5998);function c({movies:e}){let t=(0,l.b)(e);return s.jsx("div",{className:"sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4",children:t?.map(e=>s.jsx(i,{movie:e},e.id))})}},5998:(e,t,r)=>{"use strict";function s(e){return e?.filter(e=>null!==e.backdrop_path||null!==e.poster_path)}r.d(t,{b:()=>s})},2104:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(3729);let n=s.forwardRef(function({title:e,titleId:t,...r},n){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"}))})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[961,587],()=>r(5789));module.exports=s})();