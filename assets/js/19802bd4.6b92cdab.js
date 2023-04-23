"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={id:"skip",title:"skip",tags:["generator"]},o=void 0,p={unversionedId:"api/gen/skip",id:"api/gen/skip",title:"skip",description:"Do not yield values until after first ignoring count values.",source:"@site/docs/api/gen/skip.mdx",sourceDirName:"api/gen",slug:"/api/gen/skip",permalink:"/tightrope/api/gen/skip",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/gen/skip.mdx",tags:[{label:"generator",permalink:"/tightrope/tags/generator"}],version:"current",frontMatter:{id:"skip",title:"skip",tags:["generator"]},sidebar:"sidebar",previous:{title:"reduceEach",permalink:"/tightrope/api/gen/reduce-each"},next:{title:"split",permalink:"/tightrope/api/gen/split"}},s={},l=[{value:"Example",id:"example",level:2},{value:"Use Cases",id:"use-cases",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Do not ",(0,a.kt)("inlineCode",{parentName:"p"},"yield")," values until after first ignoring ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," values."),(0,a.kt)("p",null,"A higher-order function that takes a number ",(0,a.kt)("inlineCode",{parentName:"p"},"num")," as its argument and returns a new function that can be used to skip\nthe first ",(0,a.kt)("inlineCode",{parentName:"p"},"num")," values generated by a generator."),(0,a.kt)("p",null,"The returned function takes a generator as its argument and returns a new generator that yields all the values\ngenerated by the input generator except for the first ",(0,a.kt)("inlineCode",{parentName:"p"},"num")," values."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Here's an example of how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"skip")," function to skip the first two values generated by a ",(0,a.kt)("inlineCode",{parentName:"p"},"range")," generator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { range } from 'tightrope/gen/range';\nimport { skip } from 'tightrope/gen/skip';\n\nconst gen = pipe(range(1, 10), skip(2));\n\nfor (const value of gen) {\n  console.log(value); // 3, 4, 5, 6, 7, 8, 9, 10\n}\n")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"Common use cases for the ",(0,a.kt)("inlineCode",{parentName:"p"},"skip")," function:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Skipping the first ",(0,a.kt)("inlineCode",{parentName:"li"},"n")," items in a sequence: You may need to skip the first ",(0,a.kt)("inlineCode",{parentName:"li"},"n")," items in a sequence of data, either\nbecause they are not relevant to your use case or because you have already processed them."),(0,a.kt)("li",{parentName:"ol"},"Paginating data: If you are working with large datasets, you may need to paginate the data to improve performance.\nThe ",(0,a.kt)("inlineCode",{parentName:"li"},"skip")," function can be used to skip the first ",(0,a.kt)("inlineCode",{parentName:"li"},"n")," items in each page of data."),(0,a.kt)("li",{parentName:"ol"},"Splitting data into batches: If you are processing data in batches, you may need to skip the first ",(0,a.kt)("inlineCode",{parentName:"li"},"n")," items in each\nbatch to avoid processing duplicate data."),(0,a.kt)("li",{parentName:"ol"},"Skipping headers or footers in a file: If you are processing a file with a header or footer, you may need to skip\nthose lines before processing the rest of the file.")),(0,a.kt)("p",null,"Overall, the skip function is a useful tool for skipping over irrelevant or already-processed data in a sequence, and\ncan be used in a variety of contexts to improve the efficiency and readability of your code."))}d.isMDXComponent=!0}}]);