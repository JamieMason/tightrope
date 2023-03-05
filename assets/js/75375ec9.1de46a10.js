"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},o="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),o=p(n),b=a,k=o["".concat(d,".").concat(b)]||o[b]||m[b]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=b;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[o]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"guard_is_divisible_by",title:"Module: guard/is-divisible-by",sidebar_label:"guard/is-divisible-by",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/modules/guard_is_divisible_by",id:"api/modules/guard_is_divisible_by",title:"Module: guard/is-divisible-by",description:"Guards Functions",source:"@site/docs/api/modules/guard_is_divisible_by.md",sourceDirName:"api/modules",slug:"/api/modules/guard_is_divisible_by",permalink:"/ts-lib/api/modules/guard_is_divisible_by",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"guard_is_divisible_by",title:"Module: guard/is-divisible-by",sidebar_label:"guard/is-divisible-by",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"guard/is-decimal-number",permalink:"/ts-lib/api/modules/guard_is_decimal_number"},next:{title:"guard/is-empty-array",permalink:"/ts-lib/api/modules/guard_is_empty_array"}},d={},p=[{value:"Guards Functions",id:"guards-functions",level:2},{value:"isDivisibleBy",id:"isdivisibleby",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],u={toc:p},o="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"guards-functions"},"Guards Functions"),(0,a.kt)("h3",{id:"isdivisibleby"},"isDivisibleBy"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isDivisibleBy"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Asserts that a value is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," which results in a whole number when\ndivided by another."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"...args")),(0,a.kt)("td",{parentName:"tr",align:"left"},"[",(0,a.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),"]")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/14ef573/src/fn/curry2.ts#L10"},"fn/curry2.ts:10")),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isDivisibleBy"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Arity2Last1"),"<(",(0,a.kt)("inlineCode",{parentName:"p"},"other"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),") => value is number",">"),(0,a.kt)("p",null,"Asserts that a value is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," which results in a whole number when\ndivided by another."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"...args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ts-lib/api/modules/fn_types#args0"},(0,a.kt)("inlineCode",{parentName:"a"},"Args0")),"<(",(0,a.kt)("inlineCode",{parentName:"td"},"other"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),") => value is number",">")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Arity2Last1"),"<(",(0,a.kt)("inlineCode",{parentName:"p"},"other"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),") => value is number",">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/14ef573/src/fn/curry2.ts#L11"},"fn/curry2.ts:11")),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isDivisibleBy"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Asserts that a value is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," which results in a whole number when\ndivided by another."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"...args")),(0,a.kt)("td",{parentName:"tr",align:"left"},"[other: number, value: unknown]")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/14ef573/src/fn/curry2.ts#L12"},"fn/curry2.ts:12")),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isDivisibleBy"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"never")),(0,a.kt)("p",null,"Asserts that a value is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," which results in a whole number when\ndivided by another."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"never")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/14ef573/src/fn/curry2.ts#L13"},"fn/curry2.ts:13")))}m.isMDXComponent=!0}}]);