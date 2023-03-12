"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,d=c["".concat(p,".").concat(m)]||c[m]||f[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"filter",title:"filter"},o=void 0,l={unversionedId:"api/gen/filter",id:"api/gen/filter",title:"filter",description:"A higher-order function that takes a function as its argument and returns a",source:"@site/docs/api/gen/filter.mdx",sourceDirName:"api/gen",slug:"/api/gen/filter",permalink:"/ts-lib/api/gen/filter",draft:!1,editUrl:"https://github.com/JamieMason/ts-lib/tree/master/site/docs/api/gen/filter.mdx",tags:[],version:"current",frontMatter:{id:"filter",title:"filter"},sidebar:"sidebar",previous:{title:"unwrapOrElse",permalink:"/ts-lib/api/result/unwrap-or-else"},next:{title:"map",permalink:"/ts-lib/api/gen/map"}},p={},s=[],u={toc:s},c="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A higher-order function that takes a function as its argument and returns a\nnew function that can be used to filter values from a generator."),(0,i.kt)("p",null,"The returned function takes a generator as its argument and returns a new\ngenerator that only yields the values that pass the filter function."),(0,i.kt)("p",null,"The filter function applies the filter function to each value generated by\nthe input generator, and only yields the values for which the filter function\nreturns ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". Any values for which the filter function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," are\ndiscarded."),(0,i.kt)("p",null,"In summary, the filter function is a powerful tool for working with\ngenerators in JavaScript and TypeScript. By using it to filter values from a\ngenerator, we can easily create new generators that yield only the values\nthat meet our specific criteria. This can help us write more efficient and\nfocused code, and can make it easier to work with large or complex data\nsets."),(0,i.kt)("p",null,"In this example, we then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pipe")," function to create a pipeline of\ngenerators and filters."),(0,i.kt)("p",null,"We start with the ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," function, which generates a sequence of numbers\nstarting from ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ending at ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," (inclusive). We then apply the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),"\nfunction to the pipeline to filter out even numbers using the ",(0,i.kt)("inlineCode",{parentName:"p"},"isEvenNumber"),"\nguard function, and then apply the ",(0,i.kt)("inlineCode",{parentName:"p"},"take")," function to limit the number of\nvalues generated to ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,i.kt)("p",null,"Finally, we use a ",(0,i.kt)("inlineCode",{parentName:"p"},"for...of")," loop to iterate over the 5 even numbers\ngenerated by the pipeline, and log them to the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'ts-lib/fn/pipe';\nimport { filter } from 'ts-lib/gen/filter';\nimport { range } from 'ts-lib/gen/range';\nimport { take } from 'ts-lib/gen/take';\nimport { isEvenNumber } from 'ts-lib/guard/is-even-number';\n\nconst evenNumbers = pipe(range(0, 100), filter(isEvenNumber), take(5));\n\nfor (const value of evenNumbers) {\n  console.log(value);\n  // 0\n  // 2\n  // 4\n  // 6\n  // 8\n}\n")))}f.isMDXComponent=!0}}]);