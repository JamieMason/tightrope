"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,h=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"reduce",title:"reduce",tags:["generator","transform","transform-value"]},o=void 0,l={unversionedId:"api/gen/reduce",id:"api/gen/reduce",title:"reduce",description:"A higher-order function that takes a reducer function as its argument and",source:"@site/docs/api/gen/reduce.mdx",sourceDirName:"api/gen",slug:"/api/gen/reduce",permalink:"/tightrope/api/gen/reduce",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/gen/reduce.mdx",tags:[{label:"generator",permalink:"/tightrope/tags/generator"},{label:"transform",permalink:"/tightrope/tags/transform"},{label:"transform-value",permalink:"/tightrope/tags/transform-value"}],version:"current",frontMatter:{id:"reduce",title:"reduce",tags:["generator","transform","transform-value"]},sidebar:"sidebar",previous:{title:"range",permalink:"/tightrope/api/gen/range"},next:{title:"reduceEach",permalink:"/tightrope/api/gen/reduce-each"}},u={},p=[{value:"Example",id:"example",level:2},{value:"<code>reduce</code> or <code>reduceEach</code>?",id:"reduce-or-reduceeach",level:2},{value:"See also",id:"see-also",level:2}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A higher-order function that takes a reducer function as its argument and\nreturns a new function that can be used to reduce the values generated by a\ngenerator to a single value."),(0,a.kt)("p",null,"The returned function takes a generator as its argument and returns a new\ngenerator that yields the final result of the reduction operation."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"reduce")," function works by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"reduceEach")," function to generate a\nsequence of partial results for the reduction operation, and then returning\nthe final result of the reduction operation."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"reducer")," function takes two arguments: an ",(0,a.kt)("inlineCode",{parentName:"p"},"accumulator")," value that\nrepresents the current state of the reduction operation, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\ngenerated by the input generator. The reducer function applies some operation\nto the accumulator value and the input value, and returns a new accumulator\nvalue that represents the updated state of the reduction operation."),(0,a.kt)("p",null,"If an initial value is provided, it will be used as the initial state of the\nreduction operation. If no initial value is provided, the first value\ngenerated by the input generator will be used as the initial state."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example, we use the pipe function to create a pipeline of functions\nthat generate a series of numbers, double each number using ",(0,a.kt)("inlineCode",{parentName:"p"},"multiply(2)"),",\nand then calculate the sum of the resulting values."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We define a ",(0,a.kt)("inlineCode",{parentName:"li"},"sum")," function that takes two numbers as input and returns their\nsum."),(0,a.kt)("li",{parentName:"ol"},"We use the ",(0,a.kt)("inlineCode",{parentName:"li"},"range")," function to generate a series of numbers from ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ol"},"We use the ",(0,a.kt)("a",{parentName:"li",href:"/tightrope/api/gen/map"},(0,a.kt)("inlineCode",{parentName:"a"},"map"))," function with ",(0,a.kt)("inlineCode",{parentName:"li"},"multiply(2)")," to double each number in the\nseries."),(0,a.kt)("li",{parentName:"ol"},"We use the ",(0,a.kt)("inlineCode",{parentName:"li"},"reduce")," function to calculate the sum of the resulting values."),(0,a.kt)("li",{parentName:"ol"},"We use a ",(0,a.kt)("inlineCode",{parentName:"li"},"for...of")," loop to iterate over the values generated by\n",(0,a.kt)("inlineCode",{parentName:"li"},"doubledSum"),", which will be one value, the final total, which should be\n",(0,a.kt)("inlineCode",{parentName:"li"},"110"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { map } from 'tightrope/gen/map';\nimport { range } from 'tightrope/gen/range';\nimport { reduce } from 'tightrope/gen/reduce';\nimport { multiply } from 'tightrope/number/multiply';\n\nfunction sum(acc: number, curr: number): number {\n  return acc + curr;\n}\n\nconst doubledSum = pipe(range(1, 10), map(multiply(2)), reduce(sum));\n\nfor (const value of doubledSum) {\n  console.log(value); // 110\n}\n")),(0,a.kt)("h2",{id:"reduce-or-reduceeach"},(0,a.kt)("inlineCode",{parentName:"h2"},"reduce")," or ",(0,a.kt)("inlineCode",{parentName:"h2"},"reduceEach"),"?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"reduce")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"reduceEach")," are very similar functions, and it can be difficult\nto decide which one to use in a given situation. Here are some guidelines to\nhelp you decide:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"reduce")," if you want to perform a reduction operation on the entire\nsequence of values generated by a generator, and you only need to return a\nsingle value."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"reduceEach")," if you want to perform a reduction operation on each\nindividual value generated by a generator, and you need to return a\nsequence of partial results.")),(0,a.kt)("p",null,"In general, the choice between ",(0,a.kt)("inlineCode",{parentName:"p"},"reduce")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"reduceEach")," will depend on the\nspecific requirements of your problem, as well as the nature of the data you\nare working with."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you need to perform a simple reduction operation on a single sequence of\nvalues, ",(0,a.kt)("inlineCode",{parentName:"li"},"reduce")," may be the better choice."),(0,a.kt)("li",{parentName:"ul"},"If you need to perform a more complex reduction operation that involves\nmultiple sequences of values, or if you need to return a sequence of\npartial results, ",(0,a.kt)("inlineCode",{parentName:"li"},"reduceEach")," may be the better choice.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jamiemason.github.io/tightrope/api/gen/reduce-each"},"https://jamiemason.github.io/tightrope/api/gen/reduce-each"))))}d.isMDXComponent=!0}}]);