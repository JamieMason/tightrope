"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6906],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"iter",title:"iter",tags:["data-source","generator","result","right-biased"]},o=void 0,l={unversionedId:"api/result/iter",id:"api/result/iter",title:"iter",description:"Create a generator which yields the Ok variant of a Result.",source:"@site/docs/api/result/iter.mdx",sourceDirName:"api/result",slug:"/api/result/iter",permalink:"/tightrope/api/result/iter",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/result/iter.mdx",tags:[{label:"data-source",permalink:"/tightrope/tags/data-source"},{label:"generator",permalink:"/tightrope/tags/generator"},{label:"result",permalink:"/tightrope/tags/result"},{label:"right-biased",permalink:"/tightrope/tags/right-biased"}],version:"current",frontMatter:{id:"iter",title:"iter",tags:["data-source","generator","result","right-biased"]},sidebar:"sidebar",previous:{title:"isResult",permalink:"/tightrope/api/result/is-result"},next:{title:"map",permalink:"/tightrope/api/result/map"}},p={},s=[{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}],u={toc:s},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a generator which yields the ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/ok"},(0,a.kt)("inlineCode",{parentName:"a"},"Ok"))," variant of a ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result")),"."),(0,a.kt)("p",null,"It takes in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," as an argument and returns a generator function that yields the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," value if it exists. If\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/err"},(0,a.kt)("inlineCode",{parentName:"a"},"Err")),", nothing is yielded."),(0,a.kt)("p",null,"To use the ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/iter"},(0,a.kt)("inlineCode",{parentName:"a"},"iter"))," function, you can call it and pass in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," instance as an argument, and then iterate over the\ngenerated values using a ",(0,a.kt)("inlineCode",{parentName:"p"},"for...of")," loop or any other method that can consume a generator."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The number ",(0,a.kt)("inlineCode",{parentName:"li"},"42")," is passed through the ",(0,a.kt)("a",{parentName:"li",href:"/tightrope/api/result/from-success"},(0,a.kt)("inlineCode",{parentName:"a"},"fromSuccess"))," function to create an ",(0,a.kt)("inlineCode",{parentName:"li"},"Ok")," variant of ",(0,a.kt)("inlineCode",{parentName:"li"},"Result"),"."),(0,a.kt)("li",{parentName:"ol"},"Next, the ",(0,a.kt)("inlineCode",{parentName:"li"},"iter")," function is used to create a generator that will yield the value inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"Ok")," variant."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("a",{parentName:"li",href:"/tightrope/api/result/map"},(0,a.kt)("inlineCode",{parentName:"a"},"map"))," function from the ",(0,a.kt)("inlineCode",{parentName:"li"},"tightrope/gen")," module is then used to multiply the yielded value by ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,a.kt)("li",{parentName:"ol"},"Finally, the generator is iterated through using a ",(0,a.kt)("inlineCode",{parentName:"li"},"for...of")," loop, and each yielded value is logged to the console.\nIn this case, the value ",(0,a.kt)("inlineCode",{parentName:"li"},"84")," is logged to the console.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { iter } from 'tightrope/result/iter';\nimport { fromSuccess } from 'tightrope/result/from-success';\nimport { map } from 'tightrope/gen/map';\nimport { multiply } from 'tightrope/number/multiply';\n\nconst gen = pipe(42, fromSuccess, iter(), map(multiply(2)));\n\nfor (const value of gen) {\n  console.log(value); // outputs: 84\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is not an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok"),", nothing will be yielded, so the ",(0,a.kt)("inlineCode",{parentName:"p"},"for...of")," loop will not execute.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator"))))}c.isMDXComponent=!0}}]);