"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[795],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=o(t),k=r,f=s["".concat(u,".").concat(k)]||s[k]||m[k]||i;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=k;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d[s]="string"==typeof e?e:r,l[1]=d;for(var o=2;o<i;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6627:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const i={id:"guard_is_array_including_all_of",title:"Module: guard/is-array-including-all-of",sidebar_label:"guard/is-array-including-all-of",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"api/modules/guard_is_array_including_all_of",id:"api/modules/guard_is_array_including_all_of",title:"Module: guard/is-array-including-all-of",description:"Guards Functions",source:"@site/docs/api/modules/guard_is_array_including_all_of.md",sourceDirName:"api/modules",slug:"/api/modules/guard_is_array_including_all_of",permalink:"/ts-lib/api/modules/guard_is_array_including_all_of",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"guard_is_array_including_all_of",title:"Module: guard/is-array-including-all-of",sidebar_label:"guard/is-array-including-all-of",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"guard/is-array",permalink:"/ts-lib/api/modules/guard_is_array"},next:{title:"guard/is-array-including-any-of",permalink:"/ts-lib/api/modules/guard_is_array_including_any_of"}},u={},o=[{value:"Guards Functions",id:"guards-functions",level:2},{value:"isArrayIncludingAllOf",id:"isarrayincludingallof",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:o},s="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"guards-functions"},"Guards Functions"),(0,r.kt)("h3",{id:"isarrayincludingallof"},"isArrayIncludingAllOf"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isArrayIncludingAllOf"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Asserts that ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," including all of the values provided in\n",(0,r.kt)("inlineCode",{parentName:"p"},"requiredValues"),". It could also include additional values or be in a\ndifferent order, but if every value in ",(0,r.kt)("inlineCode",{parentName:"p"},"requiredValues")," features in ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"\nthen this will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[], ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"]")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/14ef573/src/fn/curry2.ts#L10"},"fn/curry2.ts:10")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isArrayIncludingAllOf"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Arity2Last1"),"<(",(0,r.kt)("inlineCode",{parentName:"p"},"requiredValues"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),"[], ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Asserts that ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," including all of the values provided in\n",(0,r.kt)("inlineCode",{parentName:"p"},"requiredValues"),". It could also include additional values or be in a\ndifferent order, but if every value in ",(0,r.kt)("inlineCode",{parentName:"p"},"requiredValues")," features in ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"\nthen this will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ts-lib/api/modules/fn_types#args0"},(0,r.kt)("inlineCode",{parentName:"a"},"Args0")),"<(",(0,r.kt)("inlineCode",{parentName:"td"},"requiredValues"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[], ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),">")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Arity2Last1"),"<(",(0,r.kt)("inlineCode",{parentName:"p"},"requiredValues"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),"[], ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/14ef573/src/fn/curry2.ts#L11"},"fn/curry2.ts:11")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isArrayIncludingAllOf"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Asserts that ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," including all of the values provided in\n",(0,r.kt)("inlineCode",{parentName:"p"},"requiredValues"),". It could also include additional values or be in a\ndifferent order, but if every value in ",(0,r.kt)("inlineCode",{parentName:"p"},"requiredValues")," features in ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"\nthen this will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[requiredValues: unknown[], value: unknown]")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/14ef573/src/fn/curry2.ts#L12"},"fn/curry2.ts:12")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isArrayIncludingAllOf"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"never")),(0,r.kt)("p",null,"Asserts that ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," including all of the values provided in\n",(0,r.kt)("inlineCode",{parentName:"p"},"requiredValues"),". It could also include additional values or be in a\ndifferent order, but if every value in ",(0,r.kt)("inlineCode",{parentName:"p"},"requiredValues")," features in ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"\nthen this will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"never")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/14ef573/src/fn/curry2.ts#L13"},"fn/curry2.ts:13")))}m.isMDXComponent=!0}}]);