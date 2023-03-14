"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,d=c["".concat(o,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"flatten",title:"flatten",tags:["result","transform","transform-result"]},l=void 0,s={unversionedId:"api/result/flatten",id:"api/result/flatten",title:"flatten",description:"Summary",source:"@site/docs/api/result/flatten.mdx",sourceDirName:"api/result",slug:"/api/result/flatten",permalink:"/tightrope/api/result/flatten",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/result/flatten.mdx",tags:[{label:"result",permalink:"/tightrope/tags/result"},{label:"transform",permalink:"/tightrope/tags/transform"},{label:"transform-result",permalink:"/tightrope/tags/transform-result"}],version:"current",frontMatter:{id:"flatten",title:"flatten",tags:["result","transform","transform-result"]},sidebar:"sidebar",previous:{title:"expectErr",permalink:"/tightrope/api/result/expect-err"},next:{title:"fromError",permalink:"/tightrope/api/result/from-error"}},o={},p=[{value:"Summary",id:"summary",level:2},{value:"Examples",id:"examples",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"See also",id:"see-also",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A function that recursively unwraps nested ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result"))," objects to return the\ninnermost ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),". It takes a value which can be a regular value, an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/ok"},(0,a.kt)("inlineCode",{parentName:"a"},"Ok")),",\nan ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/err"},(0,a.kt)("inlineCode",{parentName:"a"},"Err")),", or a nested ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),"."),(0,a.kt)("p",null,"If the value is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," , ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/flatten"},(0,a.kt)("inlineCode",{parentName:"a"},"flatten"))," returns the value as is. If the value is\nan ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"flatten")," returns the value as is. If the value is a nested\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"flatten")," recursively unwraps it until it reaches the innermost\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object and returns it."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"In this contrived example we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"pipe")," function to pass a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"12"),"\nthrough a series of function calls."),(0,a.kt)("p",null,"The first function called is ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/from-success"},(0,a.kt)("inlineCode",{parentName:"a"},"fromSuccess")),", which wraps the value in an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok"),"\ninstance. This ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," instance is then passed as the input to two more\n",(0,a.kt)("inlineCode",{parentName:"p"},"fromSuccess")," calls, which each wrap the value again in a nested ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok"),"\ninstance."),(0,a.kt)("p",null,"Finally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"flatten")," function is called using ",(0,a.kt)("inlineCode",{parentName:"p"},"pipe"),", which will\nrecursively unwrap any nested ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," instances to get the innermost value. In\nthis case, the nested ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," instances are unwrapped to reveal the value of\n",(0,a.kt)("inlineCode",{parentName:"p"},"12"),", which is returned as an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," instance in the ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { flatten } from 'tightrope/result/flatten';\nimport { fromSuccess } from 'tightrope/result/from-success';\nimport type { Ok } from 'tightrope/result/ok';\n\nconst result: Ok<number> = pipe(\n  12,\n  fromSuccess,\n  fromSuccess,\n  fromSuccess,\n  flatten,\n);\n// result will be Ok(12)\n")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"flatten")," function is useful when working with nested ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," instances."),(0,a.kt)("p",null,"When you have a sequence of operations that return ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," instances, each\nof which may have their own nested ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," instances, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"flatten"),"\nto combine them into a single ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," instance. This can make it easier to\nwork with the overall result, since you don't have to keep unwrapping nested\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," instances at each step."),(0,a.kt)("p",null,"Common use cases for ",(0,a.kt)("inlineCode",{parentName:"p"},"flatten")," include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Working with nested API responses or database queries, where each operation\nreturns a ",(0,a.kt)("inlineCode",{parentName:"li"},"Result")," instance."),(0,a.kt)("li",{parentName:"ul"},"Combining multiple ",(0,a.kt)("inlineCode",{parentName:"li"},"Result")," instances from different sources, such as\nmultiple API calls, into a single result that can be used by the rest of\nyour code."),(0,a.kt)("li",{parentName:"ul"},"Handling error conditions where multiple ",(0,a.kt)("inlineCode",{parentName:"li"},"Result")," instances may be nested\ninside each other, such as when validating a complex data structure.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/core/result/enum.Result.html#method.flatten"},"https://doc.rust-lang.org/core/result/enum.Result.html#method.flatten"))))}m.isMDXComponent=!0}}]);