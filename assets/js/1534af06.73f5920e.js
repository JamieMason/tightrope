"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6662],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={id:"map-or-else",title:"mapOrElse",tags:["option","result","right-biased","transform","transform-option","unwrap"]},i=void 0,p={unversionedId:"api/option/map-or-else",id:"api/option/map-or-else",title:"mapOrElse",description:"Applies the provided function to the contained value of Some, or returns the result of evaluating the provided",source:"@site/docs/api/option/map-or-else.mdx",sourceDirName:"api/option",slug:"/api/option/map-or-else",permalink:"/tightrope/api/option/map-or-else",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/option/map-or-else.mdx",tags:[{label:"option",permalink:"/tightrope/tags/option"},{label:"result",permalink:"/tightrope/tags/result"},{label:"right-biased",permalink:"/tightrope/tags/right-biased"},{label:"transform",permalink:"/tightrope/tags/transform"},{label:"transform-option",permalink:"/tightrope/tags/transform-option"},{label:"unwrap",permalink:"/tightrope/tags/unwrap"}],version:"current",frontMatter:{id:"map-or-else",title:"mapOrElse",tags:["option","result","right-biased","transform","transform-option","unwrap"]},sidebar:"sidebar",previous:{title:"mapOr",permalink:"/tightrope/api/option/map-or"},next:{title:"none",permalink:"/tightrope/api/option/none"}},l={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Applies the provided function to the contained value of ",(0,o.kt)("inlineCode",{parentName:"p"},"Some"),", or returns the result of evaluating the provided\nfallback function if the ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"None")))}m.isMDXComponent=!0}}]);