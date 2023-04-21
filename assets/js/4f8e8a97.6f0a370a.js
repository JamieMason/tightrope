"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"take",title:"take",tags:["generator","transducer"]},i=void 0,l={unversionedId:"api/gen/take",id:"api/gen/take",title:"take",description:"Do not yield values after count values have been yielded.",source:"@site/docs/api/gen/take.mdx",sourceDirName:"api/gen",slug:"/api/gen/take",permalink:"/tightrope/api/gen/take",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/gen/take.mdx",tags:[{label:"generator",permalink:"/tightrope/tags/generator"},{label:"transducer",permalink:"/tightrope/tags/transducer"}],version:"current",frontMatter:{id:"take",title:"take",tags:["generator","transducer"]},sidebar:"sidebar",previous:{title:"split",permalink:"/tightrope/api/gen/split"},next:{title:"takeLast",permalink:"/tightrope/api/gen/take-last"}},s={},p=[{value:"Example",id:"example",level:2},{value:"Use Cases",id:"use-cases",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Do not ",(0,r.kt)("inlineCode",{parentName:"p"},"yield")," values after ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," values have been yielded."),(0,r.kt)("p",null,"A higher-order function that takes a number amount as its argument and returns a new function that can be used to\ntake the first amount values generated by a generator."),(0,r.kt)("p",null,"The returned function takes a generator as its argument and returns a new generator that yields at most the first\namount values generated by the input generator."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's an example of how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"take")," function to take the first three values generated by a range generator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { range } from 'tightrope/gen/range';\nimport { take } from 'tightrope/gen/take';\n\nconst gen = pipe(range(1, 10), take(3));\n\nfor (const value of gen) {\n  console.log(value); // 1, 2, 3\n}\n")),(0,r.kt)("p",null,"In this example, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pipe")," function to create a new generator that takes the first three values generated by\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," generator."),(0,r.kt)("p",null,"We create a new generator ",(0,r.kt)("inlineCode",{parentName:"p"},"gen")," that is the result of applying the ",(0,r.kt)("inlineCode",{parentName:"p"},"pipe")," function to the ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," generator."),(0,r.kt)("p",null,"We use a ",(0,r.kt)("inlineCode",{parentName:"p"},"for...of")," loop to iterate over the values generated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"gen")," generator and log them to the console."),(0,r.kt)("p",null,"The output of the code should be ",(0,r.kt)("inlineCode",{parentName:"p"},"1, 2, 3"),"."),(0,r.kt)("p",null,"In summary, the ",(0,r.kt)("inlineCode",{parentName:"p"},"take")," function is a useful tool for limiting the number of values generated by a generator. By using\nit in combination with other functions from tightrope, we can create powerful and flexible pipelines that help us\nwrite more efficient and focused code."),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"Here are some common use cases for the ",(0,r.kt)("inlineCode",{parentName:"p"},"take")," function:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Limiting the size of data: You may need to limit the size of a dataset to improve performance or prevent memory\nissues. The ",(0,r.kt)("inlineCode",{parentName:"li"},"take")," function can be used to limit the number of items processed at any one time."),(0,r.kt)("li",{parentName:"ol"},"Extracting a subset of data: If you are working with a large dataset, you may need to extract a subset of the data\nthat meets certain criteria. The ",(0,r.kt)("inlineCode",{parentName:"li"},"take")," function can be used to extract the first n items that meet your\ncriteria."),(0,r.kt)("li",{parentName:"ol"},"Creating a sample: If you are working with a large dataset and want to create a smaller sample for testing or\nexploration, the ",(0,r.kt)("inlineCode",{parentName:"li"},"take")," function can be used to extract a random or fixed number of items from the dataset.")),(0,r.kt)("p",null,"Overall, the ",(0,r.kt)("inlineCode",{parentName:"p"},"take")," function is a versatile tool that can be used in a variety of contexts to limit the size of data\nor extract subsets of data from a larger dataset."))}m.isMDXComponent=!0}}]);