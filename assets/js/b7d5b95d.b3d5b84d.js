"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8296],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(t),m=o,d=l["".concat(u,".").concat(m)]||l[m]||f[m]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={id:"flow",title:"flow"},i=void 0,c={unversionedId:"api/fn/flow",id:"api/fn/flow",title:"flow",description:"A higher-order function that takes any number of functions as its arguments",source:"@site/docs/api/fn/flow.mdx",sourceDirName:"api/fn",slug:"/api/fn/flow",permalink:"/tightrope/api/fn/flow",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/fn/flow.mdx",tags:[],version:"current",frontMatter:{id:"flow",title:"flow"},sidebar:"sidebar",previous:{title:"curry",permalink:"/tightrope/api/fn/curry"},next:{title:"get",permalink:"/tightrope/api/fn/get"}},u={},p=[],s={toc:p},l="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A higher-order function that takes any number of functions as its arguments\nand returns a new function that applies each function in sequence, passing\nthe result of each function as the argument to the next function."),(0,o.kt)("p",null,"In this example, we first define three functions: ",(0,o.kt)("inlineCode",{parentName:"p"},"addOne"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"double"),", and\n",(0,o.kt)("inlineCode",{parentName:"p"},"square"),". We then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"flow")," function to create a new function\n",(0,o.kt)("inlineCode",{parentName:"p"},"composedFn")," that composes these three functions together. We can then call\n",(0,o.kt)("inlineCode",{parentName:"p"},"composedFn")," with an argument to get the result of applying the composed\nfunctions in sequence."),(0,o.kt)("p",null,"Note that the flow function applies the functions in left to right order, so\nthe first function given as an argument is applied first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { flow } from 'tightrope/fn/flow';\n\n// Define some functions to compose\nfunction addOne(n: number): number {\n  return n + 1;\n}\n\nfunction double(n: number): number {\n  return n * 2;\n}\n\nfunction square(n: number): number {\n  return n * n;\n}\n\n// Use flow to create a new function that composes the other functions\nconst composedFn = flow(addOne, double, square);\n\n// Call the composed function with an argument\nconst result = composedFn(3); // returns 64\n")))}f.isMDXComponent=!0}}]);