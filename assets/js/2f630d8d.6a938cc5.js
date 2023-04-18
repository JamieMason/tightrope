"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"flatten",title:"flatten",tags:["result","transform","transform-result"]},l=void 0,s={unversionedId:"api/result/flatten",id:"api/result/flatten",title:"flatten",description:"Replace nested Results with one Result of the innermost value.",source:"@site/docs/api/result/flatten.mdx",sourceDirName:"api/result",slug:"/api/result/flatten",permalink:"/tightrope/api/result/flatten",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/result/flatten.mdx",tags:[{label:"result",permalink:"/tightrope/tags/result"},{label:"transform",permalink:"/tightrope/tags/transform"},{label:"transform-result",permalink:"/tightrope/tags/transform-result"}],version:"current",frontMatter:{id:"flatten",title:"flatten",tags:["result","transform","transform-result"]},sidebar:"sidebar",previous:{title:"filter",permalink:"/tightrope/api/result/filter"},next:{title:"fromGuard",permalink:"/tightrope/api/result/from-guard"}},o={},p=[{value:"Examples",id:"examples",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"See also",id:"see-also",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Replace nested Results with one ",(0,r.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,r.kt)("inlineCode",{parentName:"a"},"Result"))," of the innermost value."),(0,r.kt)("p",null,"A function that recursively unwraps nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," objects to return the innermost ",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),". It takes a value which\ncan be a regular value, an ",(0,r.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,r.kt)("inlineCode",{parentName:"a"},"Ok")),", an ",(0,r.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,r.kt)("inlineCode",{parentName:"a"},"Err")),", or a nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),"."),(0,r.kt)("p",null,"If the value is an ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," , ",(0,r.kt)("a",{parentName:"p",href:"/tightrope/api/result/flatten"},(0,r.kt)("inlineCode",{parentName:"a"},"flatten"))," returns the value as is. If the value is an ",(0,r.kt)("inlineCode",{parentName:"p"},"Err"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flatten")," returns the value as\nis. If the value is a nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flatten")," recursively unwraps it until it reaches the innermost ",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),"\nobject and returns it."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"In this contrived example we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pipe")," function to pass a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"12")," through a series of function calls."),(0,r.kt)("p",null,"The first function called is ",(0,r.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,r.kt)("inlineCode",{parentName:"a"},"Ok.create")),", which wraps the value in an ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," instance. This ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," instance is then\npassed as the input to two more ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok.create")," calls, which each wrap the value again in a nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," instance."),(0,r.kt)("p",null,"Finally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"flatten")," function is called using ",(0,r.kt)("inlineCode",{parentName:"p"},"pipe"),", which will recursively unwrap any nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," instances to\nget the innermost value. In this case, the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," instances are unwrapped to reveal the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"12"),", which is\nreturned as an ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," instance in the ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { flatten } from 'tightrope/result/flatten';\nimport { Ok.create } from 'tightrope/result/from-success';\nimport type { Ok } from 'tightrope/result';\n\nconst result: Ok<number> = pipe(12, Ok.create, Ok.create, Ok.create, flatten);\n// result will be Ok(12)\n")),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"flatten")," function is useful when working with nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," instances."),(0,r.kt)("p",null,"When you have a sequence of operations that return ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," instances, each of which may have their own nested\n",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," instances, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"flatten")," to combine them into a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," instance. This can make it easier to\nwork with the overall result, since you don't have to keep unwrapping nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," instances at each step."),(0,r.kt)("p",null,"Common use cases for ",(0,r.kt)("inlineCode",{parentName:"p"},"flatten")," include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Working with nested API responses or database queries, where each operation returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"Result")," instance."),(0,r.kt)("li",{parentName:"ul"},"Combining multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"Result")," instances from different sources, such as multiple API calls, into a single result that\ncan be used by the rest of your code."),(0,r.kt)("li",{parentName:"ul"},"Handling error conditions where multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"Result")," instances may be nested inside each other, such as when validating\na complex data structure.")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/core/result/enum.Result.html#method.flatten"},"https://doc.rust-lang.org/core/result/enum.Result.html#method.flatten"))))}m.isMDXComponent=!0}}]);