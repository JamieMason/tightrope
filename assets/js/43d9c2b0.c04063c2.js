"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4755],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=s(a),k=r,N=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(N,i(i({ref:t},o),{},{components:a})):n.createElement(N,i({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3550:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={id:"guard_has",title:"Module: guard/has",sidebar_label:"guard/has",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"api/modules/guard_has",id:"api/modules/guard_has",title:"Module: guard/has",description:"Guards Functions",source:"@site/docs/api/modules/guard_has.md",sourceDirName:"api/modules",slug:"/api/modules/guard_has",permalink:"/ts-lib/api/modules/guard_has",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"guard_has",title:"Module: guard/has",sidebar_label:"guard/has",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"guard/every",permalink:"/ts-lib/api/modules/guard_every"},next:{title:"guard/has-compare",permalink:"/ts-lib/api/modules/guard_has_compare"}},d={},s=[{value:"Guards Functions",id:"guards-functions",level:2},{value:"has",id:"has",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"Returns",id:"returns-6",level:5},{value:"Defined in",id:"defined-in-2",level:4}],o={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"guards-functions"},"Guards Functions"),(0,r.kt)("h3",{id:"has"},"has"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"has"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"guard"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Do this value have a property at the given path which passes the given Guard?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const hasArrayOfNumbersAt = has(isArrayOfNumbers);\nconst isAdult = has(isGreaterThan(18), 'age');\nconst isEmpty = has(eq(0), 'length');\n\nhasArrayOfNumbersAt('coords', { coords: [100, 50] });\n// true\nisAdult({ age: 28 });\n// true\nisEmpty('');\n// true\nisEmpty([]);\n// true\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"guard")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ts-lib/api/modules/fn_types#unaryguard"},(0,r.kt)("inlineCode",{parentName:"a"},"UnaryGuard")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/7be0c05/src/typegen.ts#L29"},"typegen.ts:29")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"has"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"guard"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),"): (",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Do this value have a property at the given path which passes the given Guard?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const hasArrayOfNumbersAt = has(isArrayOfNumbers);\nconst isAdult = has(isGreaterThan(18), 'age');\nconst isEmpty = has(eq(0), 'length');\n\nhasArrayOfNumbersAt('coords', { coords: [100, 50] });\n// true\nisAdult({ age: 28 });\n// true\nisEmpty('');\n// true\nisEmpty([]);\n// true\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"guard")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ts-lib/api/modules/fn_types#unaryguard"},(0,r.kt)("inlineCode",{parentName:"a"},"UnaryGuard")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/7be0c05/src/typegen.ts#L30"},"typegen.ts:30")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"has"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"guard"),"): (",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => (",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Do this value have a property at the given path which passes the given Guard?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const hasArrayOfNumbersAt = has(isArrayOfNumbers);\nconst isAdult = has(isGreaterThan(18), 'age');\nconst isEmpty = has(eq(0), 'length');\n\nhasArrayOfNumbersAt('coords', { coords: [100, 50] });\n// true\nisAdult({ age: 28 });\n// true\nisEmpty('');\n// true\nisEmpty([]);\n// true\n")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"guard")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ts-lib/api/modules/fn_types#unaryguard"},(0,r.kt)("inlineCode",{parentName:"a"},"UnaryGuard")))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"path"),"): (",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h5",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h5",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h5",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h5",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/7be0c05/src/typegen.ts#L31"},"typegen.ts:31")))}u.isMDXComponent=!0}}]);