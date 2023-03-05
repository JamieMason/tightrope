"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),c=a,b=p["".concat(u,".").concat(c)]||p[c]||m[c]||i;return r?n.createElement(b,l(l({ref:t},d),{},{components:r})):n.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"guard_is_whole_number",title:"Module: guard/is-whole-number",sidebar_label:"guard/is-whole-number",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/modules/guard_is_whole_number",id:"api/modules/guard_is_whole_number",title:"Module: guard/is-whole-number",description:"Guards Functions",source:"@site/docs/api/modules/guard_is_whole_number.md",sourceDirName:"api/modules",slug:"/api/modules/guard_is_whole_number",permalink:"/ts-lib/api/modules/guard_is_whole_number",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"guard_is_whole_number",title:"Module: guard/is-whole-number",sidebar_label:"guard/is-whole-number",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"guard/is-whitespace",permalink:"/ts-lib/api/modules/guard_is_whitespace"},next:{title:"guard/is-within-range",permalink:"/ts-lib/api/modules/guard_is_within_range"}},u={},s=[{value:"Guards Functions",id:"guards-functions",level:2},{value:"isWholeNumber",id:"iswholenumber",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"guards-functions"},"Guards Functions"),(0,a.kt)("h3",{id:"iswholenumber"},"isWholeNumber"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isWholeNumber"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"): value is number"),(0,a.kt)("p",null,"Asserts that a value is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," with no positive decimal places."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"unknown")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"8"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"value is number"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/14ef573/src/guard/is-whole-number.ts#L10"},"guard/is-whole-number.ts:10")))}m.isMDXComponent=!0}}]);