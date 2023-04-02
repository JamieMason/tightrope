"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"expect",title:"expect",tags:["option","right-biased","unsafe","unwrap"]},o=void 0,p={unversionedId:"api/option/expect",id:"api/option/expect",title:"expect",description:"Unwraps an Option value, returning the underlying value if it is Some. If the value is None, this function",source:"@site/docs/api/option/expect.mdx",sourceDirName:"api/option",slug:"/api/option/expect",permalink:"/tightrope/api/option/expect",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/option/expect.mdx",tags:[{label:"option",permalink:"/tightrope/tags/option"},{label:"right-biased",permalink:"/tightrope/tags/right-biased"},{label:"unsafe",permalink:"/tightrope/tags/unsafe"},{label:"unwrap",permalink:"/tightrope/tags/unwrap"}],version:"current",frontMatter:{id:"expect",title:"expect",tags:["option","right-biased","unsafe","unwrap"]},sidebar:"sidebar",previous:{title:"andThen",permalink:"/tightrope/api/option/and-then"},next:{title:"filter",permalink:"/tightrope/api/option/filter"}},l={},s=[{value:"Example",id:"example",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unwraps an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/option"},(0,a.kt)("inlineCode",{parentName:"a"},"Option"))," value, returning the underlying value if it is ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/option/some"},(0,a.kt)("inlineCode",{parentName:"a"},"Some")),". If the value is ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),", this function\npanics with the provided error message."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { expect } from 'tightrope/option/expect';\nimport { Some } from 'tightrope/option/some';\nimport { none } from 'tightrope/option/none';\n\npipe(new Some(2), expect('Expected to have a value')); // 2\n\npipe(none, expect('Expected to have a value')); // throws 'Expected to have a value'\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This function is right-biased, meaning that it panics without evaluating the provided error message if the input\n",(0,a.kt)("inlineCode",{parentName:"p"},"Option")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),".")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/option/expect"},(0,a.kt)("inlineCode",{parentName:"a"},"expect"))," only when you are sure that the value is ",(0,a.kt)("inlineCode",{parentName:"p"},"Some"),". Otherwise, consider using a safer alternative such as\n",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/option/unwrap"},(0,a.kt)("inlineCode",{parentName:"a"},"unwrap")),", ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/option/unwrap-or"},(0,a.kt)("inlineCode",{parentName:"a"},"unwrapOr")),", ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/option/unwrap-or-else"},(0,a.kt)("inlineCode",{parentName:"a"},"unwrapOrElse"))," or ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/option/map"},(0,a.kt)("inlineCode",{parentName:"a"},"map"))," to handle the ",(0,a.kt)("inlineCode",{parentName:"p"},"None")," case safely.")))}m.isMDXComponent=!0}}]);