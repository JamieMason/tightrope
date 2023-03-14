"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4999],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),y=n,b=u["".concat(c,".").concat(y)]||u[y]||f[y]||o;return t?a.createElement(b,i(i({ref:r},p),{},{components:t})):a.createElement(b,i({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8403:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),n=(t(7294),t(3905));const o={id:"is-array-of-objects",title:"isArrayOfObjects",tags:["arrays","guard","objects"]},i=void 0,s={unversionedId:"api/guard/is-array-of-objects",id:"api/guard/is-array-of-objects",title:"isArrayOfObjects",description:"Asserts that a value is an Array containing only Object values.",source:"@site/docs/api/guard/is-array-of-objects.mdx",sourceDirName:"api/guard",slug:"/api/guard/is-array-of-objects",permalink:"/tightrope/api/guard/is-array-of-objects",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/guard/is-array-of-objects.mdx",tags:[{label:"arrays",permalink:"/tightrope/tags/arrays"},{label:"guard",permalink:"/tightrope/tags/guard"},{label:"objects",permalink:"/tightrope/tags/objects"}],version:"current",frontMatter:{id:"is-array-of-objects",title:"isArrayOfObjects",tags:["arrays","guard","objects"]},sidebar:"sidebar",previous:{title:"isArrayOfNumbers",permalink:"/tightrope/api/guard/is-array-of-numbers"},next:{title:"isArrayOfSize",permalink:"/tightrope/api/guard/is-array-of-size"}},c={},l=[{value:"Examples",id:"examples",level:2}],p={toc:l},u="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Asserts that a value is an ",(0,n.kt)("inlineCode",{parentName:"p"},"Array")," containing only ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")," values."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"isArrayOfObjects([{}, new Object()]);\n")))}f.isMDXComponent=!0}}]);