"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5202],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,h=c["".concat(l,".").concat(f)]||c[f]||m[f]||i;return r?n.createElement(h,p(p({ref:t},s),{},{components:r})):n.createElement(h,p({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,p[1]=o;for(var u=2;u<i;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={id:"expect",title:"expect",tags:["result","right-biased","unsafe","unwrap"]},p=void 0,o={unversionedId:"api/result/expect",id:"api/result/expect",title:"expect",description:"Summary",source:"@site/docs/api/result/expect.mdx",sourceDirName:"api/result",slug:"/api/result/expect",permalink:"/tightrope/api/result/expect",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/result/expect.mdx",tags:[{label:"result",permalink:"/tightrope/tags/result"},{label:"right-biased",permalink:"/tightrope/tags/right-biased"},{label:"unsafe",permalink:"/tightrope/tags/unsafe"},{label:"unwrap",permalink:"/tightrope/tags/unwrap"}],version:"current",frontMatter:{id:"expect",title:"expect",tags:["result","right-biased","unsafe","unwrap"]},sidebar:"sidebar",previous:{title:"Err",permalink:"/tightrope/api/result/err"},next:{title:"expectErr",permalink:"/tightrope/api/result/expect-err"}},l={},u=[{value:"Summary",id:"summary",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/expect"},(0,a.kt)("inlineCode",{parentName:"a"},"expect"))," to unwrap a ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result")),' when you are "certain" that the ',(0,a.kt)("inlineCode",{parentName:"p"},"Result"),"\nvalue will be an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/ok"},(0,a.kt)("inlineCode",{parentName:"a"},"Ok")),", and you want to extract the value contained in it."),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," value ever turns out to be an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/err"},(0,a.kt)("inlineCode",{parentName:"a"},"Err")),", it will throw an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),"\nwith the given message. This can be useful when you know that the value you\nwant to extract will always be an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If what you thought would be impossible ever does happen, you will want to\nknow about it, the function will throw an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," if it is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),".")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { multiply } from 'tightrope/number/multiply';\nimport { sum } from 'tightrope/number/sum';\nimport { expect } from 'tightrope/result/expect';\nimport { fromSuccess } from 'tightrope/result/from-success';\n\nconst result: number = pipe(\n  fromSuccess(10),\n  multiply(2),\n  sum(5),\n  expect(\"I can't imagine this failing\"),\n);\n\n// result will be 25\n")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/core/result/enum.Result.html#method.expect"},"https://doc.rust-lang.org/core/result/enum.Result.html#method.expect"))))}m.isMDXComponent=!0}}]);