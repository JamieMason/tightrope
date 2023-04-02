"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[42],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,g=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"is-none",title:"isNone",tags:["errors","guard","option"]},a=void 0,p={unversionedId:"api/option/is-none",id:"api/option/is-none",title:"isNone",description:"Returns true if the given value is a None instance, false otherwise.",source:"@site/docs/api/option/is-none.mdx",sourceDirName:"api/option",slug:"/api/option/is-none",permalink:"/tightrope/api/option/is-none",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/option/is-none.mdx",tags:[{label:"errors",permalink:"/tightrope/tags/errors"},{label:"guard",permalink:"/tightrope/tags/guard"},{label:"option",permalink:"/tightrope/tags/option"}],version:"current",frontMatter:{id:"is-none",title:"isNone",tags:["errors","guard","option"]},sidebar:"sidebar",previous:{title:"Option",permalink:"/tightrope/api/option/"},next:{title:"isSome",permalink:"/tightrope/api/option/is-some"}},s={},l=[{value:"Example",id:"example",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns true if the given value is a ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," instance, false otherwise."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { isNone } from 'tightrope/option/is-none';\nimport { none } from 'tightrope/option/none';\nimport { Some } from 'tightrope/option/some';\n\nisNone(none); // true\nisNone(new Some(1)); // false\nisNone(null); // false\n")))}m.isMDXComponent=!0}}]);