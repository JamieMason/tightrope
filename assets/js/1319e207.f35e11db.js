"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,d=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"map",title:"map",tags:["generator","transform"]},i=void 0,p={unversionedId:"api/gen/map",id:"api/gen/map",title:"map",description:"Transform and yield each value produced by a generator.",source:"@site/docs/api/gen/map.mdx",sourceDirName:"api/gen",slug:"/api/gen/map",permalink:"/tightrope/api/gen/map",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/gen/map.mdx",tags:[{label:"generator",permalink:"/tightrope/tags/generator"},{label:"transform",permalink:"/tightrope/tags/transform"}],version:"current",frontMatter:{id:"map",title:"map",tags:["generator","transform"]},sidebar:"sidebar",previous:{title:"fromNodeStream",permalink:"/tightrope/api/gen/from-node-stream"},next:{title:"mapAsync",permalink:"/tightrope/api/gen/map-async"}},l={},s=[{value:"Example",id:"example",level:2},{value:"Use Cases",id:"use-cases",level:2}],m={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Transform and ",(0,r.kt)("inlineCode",{parentName:"p"},"yield")," each value produced by a generator."),(0,r.kt)("p",null,"A higher-order function that takes a function as its argument and returns a new function that can be used to\ntransform values from a generator."),(0,r.kt)("p",null,"The returned function takes a generator as its argument and returns a new generator that yields the transformed\nvalues."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/tightrope/api/gen/map"},(0,r.kt)("inlineCode",{parentName:"a"},"map"))," function applies the transformation function to each value generated by the input generator, and yields the\ntransformed values in the output generator. The transformation function can be any function that takes a single input\nvalue and returns a single output value of any type."),(0,r.kt)("p",null,"In summary, the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," function is a powerful tool for working with generators in JavaScript and TypeScript. By using\nit to transform values from a generator, we can easily create new generators that yield the transformed values\naccording to our specific criteria. This can help us write more efficient and focused code, and can make it easier to\nwork with large or complex data sets."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"In this example, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pipe")," function to create a pipeline of generators and maps that double the values\ngenerated by the range function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { map } from 'tightrope/gen/map';\nimport { multiply } from 'tightrope/number/multiply';\nimport { range } from 'tightrope/gen/range';\nimport { take } from 'tightrope/gen/take';\n\nconst doubledNumbers = pipe(range(0, 100), map(multiply(2)), take(5));\n\nfor (const value of doubledNumbers) {\n  console.log(value);\n}\n")),(0,r.kt)("p",null,"We start with the ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," function, which generates a sequence of numbers starting from ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". We then apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),"\nfunction to the pipeline to double each value generated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," function, and then apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"take")," function\nto limit the number of values generated to ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,r.kt)("p",null,"Finally, we use a ",(0,r.kt)("inlineCode",{parentName:"p"},"for...of")," loop to iterate over the 5 doubled numbers generated by the pipeline, and log them to\nthe console."),(0,r.kt)("p",null,"When we run this example, we should see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// 2\n// 4\n// 6\n// 8\n// 10\n")),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"Common use cases for ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Transforming data"),": transform data from one form to another. For example, we can use map to convert an array of\nnumbers into an array of strings, or to extract a specific property from an array of objects."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Computing values"),": compute new values based on existing values. For example, we can use map to calculate the\nsquare of each number in an array, or to compute the distance between each pair of points in a set of\ncoordinates."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Reorganizing data"),": reorganize data into a different format by extracting or manipulating specific values. For\nexample, we can use map to extract only the names of a set of users from an array of user objects, or to extract\nonly the titles of a set of books from an array of book objects."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Simplifying data"),": simplify complex data structures by extracting or manipulating specific values. For example, we\ncan use map to extract only the numeric values from an array of mixed data types."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Generating new sequences"),": generate new sequences of values based on some input data. For example, we can use map\nto generate a new array of values based on some mathematical function, or to generate a new array of values based\non some conditional logic.")))}c.isMDXComponent=!0}}]);