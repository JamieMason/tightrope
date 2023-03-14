"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={id:"curry",title:"curry"},o=void 0,c={unversionedId:"api/fn/curry",id:"api/fn/curry",title:"curry",description:"Summary",source:"@site/docs/api/fn/curry.mdx",sourceDirName:"api/fn",slug:"/api/fn/curry",permalink:"/tightrope/api/fn/curry",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/fn/curry.mdx",tags:[],version:"current",frontMatter:{id:"curry",title:"curry"},sidebar:"sidebar",previous:{title:"API",permalink:"/tightrope/api"},next:{title:"flow",permalink:"/tightrope/api/fn/flow"}},u={},l=[{value:"Summary",id:"summary",level:2},{value:"Example",id:"example",level:2}],p={toc:l},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A higher-order function that takes a function as its first argument and an\noptional ",(0,a.kt)("inlineCode",{parentName:"p"},"arity")," parameter indicating the number of arguments that the\nfunction expects. It returns a new function that can be partially applied,\nmeaning that it can be called with some of its arguments, and then returns a\nnew function that expects the remaining arguments."),(0,a.kt)("p",null,"It takes two parameters, ",(0,a.kt)("inlineCode",{parentName:"p"},"fn")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"arity"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"fn")," is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"F"),", which is a\ngeneric type parameter that extends ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyFn"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyFn")," is a type alias for a\nfunction that takes any number of arguments and returns any value. arity is\noptional and defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"fn.length"),", which is the number of arguments that\n",(0,a.kt)("inlineCode",{parentName:"p"},"fn")," expects."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example, we first define a function add that takes 3 arguments and\nreturns their sum. We then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"curry")," function to create a new function\n",(0,a.kt)("inlineCode",{parentName:"p"},"curriedAdd")," that is a curried version of ",(0,a.kt)("inlineCode",{parentName:"p"},"add"),". We can then call\n",(0,a.kt)("inlineCode",{parentName:"p"},"curriedAdd")," with less than all of the arguments it expects, each time\ncreating new functions that expect the remaining arguments."),(0,a.kt)("p",null,"Finally, we call the final function with all arguments to get the result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { curry } from 'tightrope/fn/curry';\n\n// Define a function to be curried\nfunction add(a: number, b: number, c: number): number {\n  return a + b + c;\n}\n\n// Use curry to create a new function that can be partially applied\nconst curriedAdd = curry(add);\n\n// Call the new function with partial arguments\nconst add1 = curriedAdd(1); // returns a new function that expects 2 more arguments\nconst add2 = add1(2); // returns a new function that expects 1 more argument\n\n// Call the final function with all arguments\nconst result = add2(3); // returns 6\n")))}m.isMDXComponent=!0}}]);