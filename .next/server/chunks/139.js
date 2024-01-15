exports.id=139,exports.ids=[139],exports.modules={7225:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},6163:(e,t,r)=>{Promise.resolve().then(r.bind(r,3318)),Promise.resolve().then(r.bind(r,6580)),Promise.resolve().then(r.bind(r,785))},4444:(e,t,r)=>{Promise.resolve().then(r.bind(r,9275))},3318:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var i=r(2295),o=r(1223),n=r.n(o),s=r(783),a=r.n(s),c=r(1737),l=r(5965),h=r(3952),u=r(7410),d=r(6263),p=r(6580);function v({title:e,path:t,Icon:r}){let{handleChangePath:o,path:n,handleResetQuery:s}=(0,p.useHuluContext)(),c=n===e;return(0,i.jsxs)(a(),{href:t,class:`group flex flex-col items-center cursor-pointer w-8 sm:w-16 dark:hover:text-white hover:text-gray-900 ${c?"text-red-500":""}`,onClick:()=>{o(e),s()},children:[i.jsx(r,{className:"h-5 sm:h-7 mb-1 group-hover:animate-bounce"}),i.jsx("p",{className:`text-xs md:text-sm tracking-widest uppercase opacity-0 sm:group-hover:opacity-100 ${c&&"opacity-100"}`,children:e})]})}var m=r(1043),y=r(5959),f=r(6256),g=r(3729);function _(){let{systemTheme:e,theme:t,setTheme:r}=(0,f.F)(),[o,n]=(0,g.useState)(!1);return(0,g.useEffect)(()=>n(!0),[]),i.jsx(i.Fragment,{children:o&&("dark"===("system"===t?e:t)?i.jsx(m.Z,{className:"h-5 sm:h-7 cursor-pointer text-orange-400 hover:text-[#1ce783]",onClick:()=>r("light")}):i.jsx(y.Z,{className:"h-5 sm:h-7 cursor-pointer text-black hover:text-[#1ce783]",onClick:()=>r("dark")}))})}function x(){let{genre:e,path:t}=(0,p.useHuluContext)();return(0,i.jsxs)("header",{className:"flex sm:flex-row m-5 justify-between items-center h-auto",children:[(0,i.jsxs)("div",{className:"w-[50%] flex items-center -translate-y-1.5",children:[i.jsx(a(),{href:"/",children:i.jsx(n(),{className:"object-contain w-[100px] sm:w-[200px] h-auto",alt:"hulu-logo",src:"/hulu-logo.png",width:200,height:100})}),i.jsx(_,{})]}),(0,i.jsxs)("div",{className:"flex flex-grow justify-evenly max-w-xl",children:[i.jsx(v,{title:"home",Icon:c.Z,path:`/home/${e}`}),i.jsx(v,{title:"search",Icon:l.Z,path:`/search/${e}`}),i.jsx(v,{title:"people",Icon:h.Z,path:"/people"}),i.jsx(v,{title:"tv",Icon:u.Z,path:"/tv"}),i.jsx(v,{title:"about",Icon:d.Z,path:"/about"})]})]})}},9275:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var i=r(2295),o=r(1470),n=r(783),s=r.n(n),a=r(2254),c=r(6580);function l(){let{genre:e,handleChangeGenre:t}=(0,c.useHuluContext)(),r=(0,a.usePathname)();return i.jsx("nav",{children:i.jsx("ul",{className:"flex text-l px-10 sm:px-20 sm:text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll   scrollbar-hide",children:Object.entries(o.Z).map(([o,{title:n}])=>i.jsx(s(),{className:`last:pr-24 cursor-pointer capitalize transition duration-100 transform hover:scale-125 hover:text-black dark:hover:text-white active:text-red-500 ${r.includes(`/home/${o}`)||e===o?"text-red-500":""}`,href:`/home/${o}`,onClick:()=>t(o),children:n},o))})})}},6580:(e,t,r)=>{"use strict";r.r(t),r.d(t,{HuluProvider:()=>c,useHuluContext:()=>l});var i=r(2295),o=r(3729);let n={genre:"fetchTrending",path:"home",query:"",page:2};function s(e,t){switch(t.type){case"genre/change":return{...e,genre:t.payload};case"query/change":return{...e,query:t.payload};case"path/change":return{...e,path:t.payload};case"query/reset":return{...e,query:""};default:throw Error("Invalid action type")}}let a=(0,o.createContext)();function c({children:e}){let[{genre:t,page:r,query:c,path:l},h]=(0,o.useReducer)(s,n);return i.jsx(a.Provider,{value:{genre:t,handleChangeGenre:function(e){e!==t&&h({type:"genre/change",payload:e})},handleChangeQuery:function(e){h({type:"query/change",payload:e})},query:c,page:r,path:l,handleChangePath:function(e){e!==l&&h({type:"path/change",payload:e})},handleResetQuery:function(){h({type:"query/reset"})}},children:e})}function l(){let e=(0,o.useContext)(a);if(void 0===e)throw Error("MovieContext was used outside of PostProvider");return e}},785:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(2295),o=r(6256);function n({children:e}){return i.jsx(o.f,{enableSystem:!0,attribute:"class",children:i.jsx(i.Fragment,{children:e})})}},1470:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});let i=process.env.API_KEY,o={fetchTrending:{title:"Trending",url:`/trending/movie/week?api_key=${i}&language=en-US`},fetchTopRated:{title:"Top-Rated",url:`/movie/top_rated?api_key=${i}&language=en-US`},fetchComedy:{title:"Comedy",url:`/discover/movie?api_key=${i}&with_genres=35`},fetchHorrorMovies:{title:"Horror",url:`/discover/movie?api_key=${i}&with_genres=27`},fetchMystery:{title:"Mystery",url:`/discover/movie?api_key=${i}&with_genres=9648`},fetchAction:{title:"Action",url:`/discover/movie?api_key=${i}&with_genres=28`},fetchSciFi:{title:"Sci-Fi",url:`/discover/movie?api_key=${i}&with_genres=878`},fetchWestern:{title:"Western",url:`/discover/movie?api_key=${i}&with_genres=37`},fetchAnimation:{title:"Animation",url:`/discover/movie?api_key=${i}&with_genres=16`},fetchTV:{title:"TV Movie",url:`/discover/movie?api_key=${i}&with_genres=10770`},fetchRomance:{title:"Romance",url:`/discover/movie?api_key=${i}&with_genres=10749`},fetchFantasy:{title:"Fantasy",url:`/discover/movie?api_key=${i}&with_genres=14`},fetchHistory:{title:"History",url:`/discover/movie?api_key=${i}&with_genres=36`},fetchAdventure:{title:"Adventure",url:`/discover/movie?api_key=${i}&with_genres=12`},fetchDocumentary:{title:"Documentary",url:`/discover/movie?api_key=${i}&with_genres=99`},fetchFamily:{title:"Family",url:`/discover/movie?api_key=${i}&with_genres=10751`},fetchThriller:{title:"Thriller",url:`/discover/movie?api_key=${i}&with_genres=53`},fetchWar:{title:"War",url:`/discover/movie?api_key=${i}&with_genres=10752`},fetchMusic:{title:"Music",url:`/discover/movie?api_key=${i}&with_genres=10402`},fetchCrime:{title:"Crime",url:`/discover/movie?api_key=${i}&with_genres=80`},fetchDrama:{title:"Drama",url:`/discover/movie?api_key=${i}&with_genres=18`}}},3379:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var i=r(5036);let o=(0,r(6843).createProxy)(String.raw`C:\Users\USER\my-personal-builds\hulu-clone-co\src\components\Nav.jsx`),{__esModule:n,$$typeof:s}=o,a=o.default;function c({children:e}){return(0,i.jsxs)(i.Fragment,{children:[i.jsx(a,{}),e]})}},9098:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var i=r(5036);r(5023);var o=r(6843);let n=(0,o.createProxy)(String.raw`C:\Users\USER\my-personal-builds\hulu-clone-co\src\components\Header.jsx`),{__esModule:s,$$typeof:a}=n,c=n.default,l=(0,o.createProxy)(String.raw`C:\Users\USER\my-personal-builds\hulu-clone-co\src\contexts\HuluContext.jsx`),{__esModule:h,$$typeof:u}=l;l.default;let d=(0,o.createProxy)(String.raw`C:\Users\USER\my-personal-builds\hulu-clone-co\src\contexts\HuluContext.jsx#HuluProvider`);(0,o.createProxy)(String.raw`C:\Users\USER\my-personal-builds\hulu-clone-co\src\contexts\HuluContext.jsx#useHuluContext`);let p=(0,o.createProxy)(String.raw`C:\Users\USER\my-personal-builds\hulu-clone-co\src\providers\ThemeProvider.jsx`),{__esModule:v,$$typeof:m}=p,y=p.default;function f({children:e}){return i.jsx("html",{lang:"en",children:i.jsx("body",{children:i.jsx(y,{children:(0,i.jsxs)(d,{children:[i.jsx(c,{}),e]})})})})}},2462:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>s,Cd:()=>c,_M:()=>u,Wf:()=>p,xc:()=>y,up:()=>h,vI:()=>l,yy:()=>a,MQ:()=>f,$G:()=>d,zt:()=>m,KT:()=>v});let i=process.env.API_KEY,o={fetchTrending:{title:"Trending",url:`/trending/movie/week?api_key=${i}&language=en-US`},fetchTopRated:{title:"Top-Rated",url:`/movie/top_rated?api_key=${i}&language=en-US`},fetchComedy:{title:"Comedy",url:`/discover/movie?api_key=${i}&with_genres=35`},fetchHorrorMovies:{title:"Horror",url:`/discover/movie?api_key=${i}&with_genres=27`},fetchMystery:{title:"Mystery",url:`/discover/movie?api_key=${i}&with_genres=9648`},fetchAction:{title:"Action",url:`/discover/movie?api_key=${i}&with_genres=28`},fetchSciFi:{title:"Sci-Fi",url:`/discover/movie?api_key=${i}&with_genres=878`},fetchWestern:{title:"Western",url:`/discover/movie?api_key=${i}&with_genres=37`},fetchAnimation:{title:"Animation",url:`/discover/movie?api_key=${i}&with_genres=16`},fetchTV:{title:"TV Movie",url:`/discover/movie?api_key=${i}&with_genres=10770`},fetchRomance:{title:"Romance",url:`/discover/movie?api_key=${i}&with_genres=10749`},fetchFantasy:{title:"Fantasy",url:`/discover/movie?api_key=${i}&with_genres=14`},fetchHistory:{title:"History",url:`/discover/movie?api_key=${i}&with_genres=36`},fetchAdventure:{title:"Adventure",url:`/discover/movie?api_key=${i}&with_genres=12`},fetchDocumentary:{title:"Documentary",url:`/discover/movie?api_key=${i}&with_genres=99`},fetchFamily:{title:"Family",url:`/discover/movie?api_key=${i}&with_genres=10751`},fetchThriller:{title:"Thriller",url:`/discover/movie?api_key=${i}&with_genres=53`},fetchWar:{title:"War",url:`/discover/movie?api_key=${i}&with_genres=10752`},fetchMusic:{title:"Music",url:`/discover/movie?api_key=${i}&with_genres=10402`},fetchCrime:{title:"Crime",url:`/discover/movie?api_key=${i}&with_genres=80`},fetchDrama:{title:"Drama",url:`/discover/movie?api_key=${i}&with_genres=18`}},n=process.env.API_KEY;async function s(e){let t=await fetch(`https://api.themoviedb.org/3
${o[`${e}`].url}`);if(!t.ok)throw Error("Error fetching data");return t.json()}async function a(e,t){let r=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${n}&with_genres=${e.id}`),i=(await r.json()).results.filter(e=>t!==e.id);return{name:e.name,list:i}}async function c(e){let t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${n}`);if(!t.ok)throw Error("Error fetching data");return t.json()}async function l(e){let t=await fetch(`https://api.themoviedb.org/3/search/person?api_key=${n}&query=${e}
`);if(!t.ok)throw Error("Error fetching data");return t.json()}async function h(e){let t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${n}&query=${e}&language=en-US&include_adult=false`);if(!t.ok)throw Error("Error fetching data");return t.json()}async function u(e){let t=await fetch(`https://api.themoviedb.org/3/person/${e}?api_key=${n}&append_to_response=images`);if(!t.ok)throw Error("Error fetching data");return t.json()}async function d(e){let t=await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${n}&query=${e}&language=en-US&include_adult=false&page=1`);if(!t.ok)throw Error("Error fetching data");return t.json()}async function p(e){let t=await fetch(`https://api.themoviedb.org/3/tv/${e}?api_key=${n}`);if(!t.ok)throw Error("Error fetching data");return t.json()}async function v(){let e=await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${n}&language=en-US`);if(!e.ok)throw Error("Error fetching data");return e.json()}async function m(){let e=await fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${n}&language=en-US`);if(!e.ok)throw Error("Error fetching data");return e.json()}async function y(e){let t=await fetch(`https://api.themoviedb.org/3/person/${e}/movie_credits?api_key=${n}&language=en-US`);if(!t.ok)throw Error("Error fetching data");return t.json()}async function f(e){let t=await fetch(`https://api.themoviedb.org/3/person/${e}/tv_credits?api_key=${n}&language=en-US`);if(!t.ok)throw Error("Error fetching data");return t.json()}},5023:()=>{}};