"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3522],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),c=n,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return t?a.createElement(f,o(o({ref:r},p),{},{components:t})):a.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5718:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(7462),n=(t(7294),t(3905));const i={id:"guard_is_array_of_numbers",title:"Module: guard/is-array-of-numbers",sidebar_label:"guard/is-array-of-numbers",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"api/modules/guard_is_array_of_numbers",id:"api/modules/guard_is_array_of_numbers",title:"Module: guard/is-array-of-numbers",description:"Guards Functions",source:"@site/docs/api/modules/guard_is_array_of_numbers.md",sourceDirName:"api/modules",slug:"/api/modules/guard_is_array_of_numbers",permalink:"/ts-lib/api/modules/guard_is_array_of_numbers",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"guard_is_array_of_numbers",title:"Module: guard/is-array-of-numbers",sidebar_label:"guard/is-array-of-numbers",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"guard/is-array-of-booleans",permalink:"/ts-lib/api/modules/guard_is_array_of_booleans"},next:{title:"guard/is-array-of-objects",permalink:"/ts-lib/api/modules/guard_is_array_of_objects"}},l={},u=[{value:"Guards Functions",id:"guards-functions",level:2},{value:"isArrayOfNumbers",id:"isarrayofnumbers",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:u},d="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"guards-functions"},"Guards Functions"),(0,n.kt)("h3",{id:"isarrayofnumbers"},"isArrayOfNumbers"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"isArrayOfNumbers"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"values"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Asserts that a value is an ",(0,n.kt)("inlineCode",{parentName:"p"},"Array")," containing only ",(0,n.kt)("inlineCode",{parentName:"p"},"Number")," values."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"isArrayOfNumbers([12, 0, 14]);\n")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"values")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/JamieMason/ts-lib/blob/afd57ec/src/typegen.ts#L63"},"typegen.ts:63")))}m.isMDXComponent=!0}}]);