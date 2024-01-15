(()=>{var e={};e.id=26,e.ids=[26],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},3768:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c});var t=r(482),i=r(9108),a=r(2563),n=r.n(a),l=r(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(s,o);let c=["",{children:["search",{children:["movie",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3646)),"C:\\Users\\USER\\my-personal-builds\\hulu-clone-co\\src\\app\\search\\movie\\[id]\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8336)),"C:\\Users\\USER\\my-personal-builds\\hulu-clone-co\\src\\app\\search\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,9098)),"C:\\Users\\USER\\my-personal-builds\\hulu-clone-co\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\USER\\my-personal-builds\\hulu-clone-co\\src\\app\\search\\movie\\[id]\\page.jsx"],m="/search/movie/[id]/page",u={require:r,loadChunk:()=>Promise.resolve()},h=new t.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/search/movie/[id]/page",pathname:"/search/movie/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4648:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.bind(r,4651))},4651:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>c});var t=r(2295),i=r(8284),a=r(783),n=r.n(a),l=r(1470),o=r(6580);function c({results:e}){let{handleChangeGenre:s}=(0,o.useHuluContext)(),r=e?.list.slice(0,8),a=Object.keys(l.Z).find(s=>s.includes(e?.name));return(0,t.jsxs)("div",{children:[!e?.name.includes("&")&&(0,t.jsxs)(n(),{className:"ml-20",href:`$/home/${a}`,onClick:()=>s(a),children:[" More "," ",t.jsx("span",{className:"font-semibold ",children:e?.name})," "," movies"]}),t.jsx("div",{className:" flex gap-x-2.5 max-w-6xl mx-auto px-5 py-4 overflow-x-scroll scrollbar-hide ",children:r?.map(e=>t.jsx(i.default,{movie:e},e.id))})]})}},8284:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>c});var t=r(2295),i=r(6580),a=r(1223),n=r.n(a),l=r(783),o=r.n(l);function c({movie:e}){let{path:s}=(0,i.useHuluContext)();return t.jsx("div",{className:"w-40 mx-4 sm:w-60 cursor-pointer sm:p-3 hover:shadow-slate-400 sm:hover:scale-105 shadow-md rounded-lg border  border-slate-400 transition-shadow duration-200 group",children:(0,t.jsxs)(o(),{href:`/${s}/movie/${e.id}`,children:[t.jsx(n(),{src:`https://image.tmdb.org/t/p/original/${e.backdrop_path||e.poster_path}`,width:500,height:300,className:"rounded-t-lg overflow-hidden group-hover:opacity-80 transition-opacity duration-200",style:{maxWidth:"100%",height:"auto"},placeholder:"blur",blurDataURL:"/spinner.svg",alt:"image is not available"}),(0,t.jsxs)("div",{className:"p-2",children:[t.jsx("p",{className:"truncate text-md",children:e.overview}),t.jsx("h2",{className:"truncate text-lg font-bold",children:e.title||e.name})]})]})})}},1470:(e,s,r)=>{"use strict";r.d(s,{Z:()=>i});let t=process.env.API_KEY,i={fetchTrending:{title:"Trending",url:`/trending/movie/week?api_key=${t}&language=en-US`},fetchTopRated:{title:"Top-Rated",url:`/movie/top_rated?api_key=${t}&language=en-US`},fetchComedy:{title:"Comedy",url:`/discover/movie?api_key=${t}&with_genres=35`},fetchHorrorMovies:{title:"Horror",url:`/discover/movie?api_key=${t}&with_genres=27`},fetchMystery:{title:"Mystery",url:`/discover/movie?api_key=${t}&with_genres=9648`},fetchAction:{title:"Action",url:`/discover/movie?api_key=${t}&with_genres=28`},fetchSciFi:{title:"Sci-Fi",url:`/discover/movie?api_key=${t}&with_genres=878`},fetchWestern:{title:"Western",url:`/discover/movie?api_key=${t}&with_genres=37`},fetchAnimation:{title:"Animation",url:`/discover/movie?api_key=${t}&with_genres=16`},fetchTV:{title:"TV Movie",url:`/discover/movie?api_key=${t}&with_genres=10770`},fetchRomance:{title:"Romance",url:`/discover/movie?api_key=${t}&with_genres=10749`},fetchFantasy:{title:"Fantasy",url:`/discover/movie?api_key=${t}&with_genres=14`},fetchHistory:{title:"History",url:`/discover/movie?api_key=${t}&with_genres=36`},fetchAdventure:{title:"Adventure",url:`/discover/movie?api_key=${t}&with_genres=12`},fetchDocumentary:{title:"Documentary",url:`/discover/movie?api_key=${t}&with_genres=99`},fetchFamily:{title:"Family",url:`/discover/movie?api_key=${t}&with_genres=10751`},fetchThriller:{title:"Thriller",url:`/discover/movie?api_key=${t}&with_genres=53`},fetchWar:{title:"War",url:`/discover/movie?api_key=${t}&with_genres=10752`},fetchMusic:{title:"Music",url:`/discover/movie?api_key=${t}&with_genres=10402`},fetchCrime:{title:"Crime",url:`/discover/movie?api_key=${t}&with_genres=80`},fetchDrama:{title:"Drama",url:`/discover/movie?api_key=${t}&with_genres=18`}}},8336:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(5036),i=r(5563);function a({children:e}){return(0,t.jsxs)(t.Fragment,{children:[t.jsx(i.ZP,{keywords:"movies...",type:"search"}),e]})}},3646:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>n});var t=r(5036),i=r(2462),a=r(8390);async function n({params:{id:e=null}}){let s=await (0,i.Cd)(e);return t.jsx(a.Z,{movie:s})}},8390:(e,s,r)=>{"use strict";r.d(s,{Z:()=>o});var t=r(5036),i=r(5904),a=r.n(i),n=r(2558),l=r(2462);async function o({movie:e}){let s=e.genres.map(s=>(0,l.yy)(s,e.id)),r=await Promise.all(s);return(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsxs)("div",{className:"p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6",children:[t.jsx(a(),{src:`https://image.tmdb.org/t/p/original/${e.backdrop_path||e.poster_path}`,width:500,height:300,className:"rounded-lg",style:{maxWidth:"100%",height:"100%"},placeholder:"blur",blurDataURL:"/spinner.svg",alt:"Movie poster"}),(0,t.jsxs)("div",{className:"p-2",children:[t.jsx("h2",{className:"text-lg mb-3 font-bold",children:e.title||e.name}),(0,t.jsxs)("p",{className:"text-lg mb-3",children:[t.jsx("span",{className:"font-semibold mr-1",children:"Overview:"}),e.overview]}),(0,t.jsxs)("p",{className:"mb-3",children:[t.jsx("span",{className:"font-semibold mr-1",children:"Date Released:"}),e.release_date||e.first_air_date]}),(0,t.jsxs)("p",{className:"mb-3",children:[t.jsx("span",{className:"font-semibold mr-1",children:"Genre:"}),e.genres.map(e=>e.name).join(", ")]}),e.budget?(0,t.jsxs)("p",{className:"mb-3",children:[t.jsx("span",{className:"font-semibold mr-1",children:"Budget:"}),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.budget)]}):null,e.revenue?(0,t.jsxs)("p",{className:"mb-3",children:[t.jsx("span",{className:"font-semibold mr-1",children:"Revenue:"}),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.revenue)]}):null,(0,t.jsxs)("p",{className:"mb-3",children:[t.jsx("span",{className:"font-semibold mr-1",children:"Movie location:"}),e.production_countries.map(e=>e.name).join(", ")]}),(0,t.jsxs)("p",{className:"mb-3",children:[t.jsx("span",{className:"font-semibold mr-1",children:"Languages:"}),e.spoken_languages.map(e=>e.english_name).join(", ")]}),(0,t.jsxs)("p",{className:"mb-3",children:[t.jsx("span",{className:"font-semibold mr-1",children:"Rating:"}),e.vote_count]})]})]}),t.jsx(n.Z,{arrayList:r})]})}},2558:(e,s,r)=>{"use strict";r.d(s,{Z:()=>o});var t=r(5036);let i=(0,r(6843).createProxy)(String.raw`C:\Users\USER\my-personal-builds\hulu-clone-co\src\components\RelatedMovies.jsx`),{__esModule:a,$$typeof:n}=i,l=i.default;function o({arrayList:e}){return t.jsx("div",{className:"",children:e.map((e,s)=>t.jsx(l,{results:e},s))})}}};var s=require("../../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[961,313,587],()=>r(3768));module.exports=t})();