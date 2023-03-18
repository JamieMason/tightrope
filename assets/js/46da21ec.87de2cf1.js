"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,d=c["".concat(l,".").concat(m)]||c[m]||f[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"is-result",title:"isResult",tags:["guard","result"]},o=void 0,s={unversionedId:"api/result/is-result",id:"api/result/is-result",title:"isResult",description:"Check if value is an instance of either the Ok or Err classes.",source:"@site/docs/api/result/is-result.mdx",sourceDirName:"api/result",slug:"/api/result/is-result",permalink:"/tightrope/api/result/is-result",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/result/is-result.mdx",tags:[{label:"guard",permalink:"/tightrope/tags/guard"},{label:"result",permalink:"/tightrope/tags/result"}],version:"current",frontMatter:{id:"is-result",title:"isResult",tags:["guard","result"]},sidebar:"sidebar",previous:{title:"isOk",permalink:"/tightrope/api/result/is-ok"},next:{title:"iter",permalink:"/tightrope/api/result/iter"}},l={},p=[],u={toc:p},c="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Check if value is an instance of either the ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/ok"},(0,a.kt)("inlineCode",{parentName:"a"},"Ok"))," or ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/err"},(0,a.kt)("inlineCode",{parentName:"a"},"Err"))," classes."),(0,a.kt)("p",null,"You would use ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/is-result"},(0,a.kt)("inlineCode",{parentName:"a"},"isResult"))," when you want to check if a value is a ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result"))," instance, regardless of whether it contains\nan ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," variant."))}f.isMDXComponent=!0}}]);