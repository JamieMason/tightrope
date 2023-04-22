"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={id:"unwrap-or-else",title:"unwrapOrElse",tags:["errors","left-biased","result","transform","transform-result","unwrap"]},o=void 0,l={unversionedId:"api/result/unwrap-or-else",id:"api/result/unwrap-or-else",title:"unwrapOrElse",description:"Extract value from an Ok or from a fallback () => Ok if an Err.",source:"@site/docs/api/result/unwrap-or-else.mdx",sourceDirName:"api/result",slug:"/api/result/unwrap-or-else",permalink:"/tightrope/api/result/unwrap-or-else",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/result/unwrap-or-else.mdx",tags:[{label:"errors",permalink:"/tightrope/tags/errors"},{label:"left-biased",permalink:"/tightrope/tags/left-biased"},{label:"result",permalink:"/tightrope/tags/result"},{label:"transform",permalink:"/tightrope/tags/transform"},{label:"transform-result",permalink:"/tightrope/tags/transform-result"},{label:"unwrap",permalink:"/tightrope/tags/unwrap"}],version:"current",frontMatter:{id:"unwrap-or-else",title:"unwrapOrElse",tags:["errors","left-biased","result","transform","transform-result","unwrap"]},sidebar:"sidebar",previous:{title:"unwrapOr",permalink:"/tightrope/api/result/unwrap-or"},next:{title:"Generators",permalink:"/tightrope/api/gen"}},p={},u=[{value:"Example",id:"example",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"See also",id:"see-also",level:2}],s={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Extract value from an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Ok"))," or from a fallback ",(0,a.kt)("inlineCode",{parentName:"p"},"() => Ok")," if an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Err")),"."),(0,a.kt)("p",null,"Unwrap the value inside an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," variant of a ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result"))," object, and in the case that the result is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," variant,\nthe function allows you to map the error value to a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object."),(0,a.kt)("p",null,"The function takes in a mapping function as its argument, which is used to transform the error value to a new\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object. The mapping function should take in the error value and return a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object with a different\n",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," type."),(0,a.kt)("p",null,"The return value of the ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/unwrap-or-else"},(0,a.kt)("inlineCode",{parentName:"a"},"unwrapOrElse"))," function is a function that takes in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object as its argument, and\nreturns either the unwrapped ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," value, or the new transformed ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," value if the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),"\nvariant."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"unwrapOrElse")," will throw if the fallback ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),".")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In Example 1, ",(0,a.kt)("inlineCode",{parentName:"p"},"divide(10, 2)")," returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," result, so the ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapOrElse")," function is not triggered, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"pipe"),"\nfunction returns ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,a.kt)("p",null,"In Example 2, ",(0,a.kt)("inlineCode",{parentName:"p"},"divide(10, 0)")," returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," result because it is trying to divide by zero. The ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapOrElse"),"\nfunction is triggered, and it returns a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," result with the value ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),". The pipe function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport type { Result } from 'tightrope/result';\nimport { Err } from 'tightrope/result';\nimport { Ok } from 'tightrope/result';\nimport { unwrapOrElse } from 'tightrope/result/unwrap-or-else';\n\nfunction divide(a: number, b: number): Result<number, string> {\n  return b === 0 ? new Err('Cannot divide by zero') : new Ok(a / b);\n}\n\n// Example 1: Ok result\nconst okResult = pipe(\n  divide(10, 2),\n  unwrapOrElse((err) => new Err(`Error occurred: ${err}`)),\n);\n\nconsole.log(okResult); // Output: 5\n\n// Example 2: Error result\nconst errorResult = pipe(\n  divide(10, 0),\n  unwrapOrElse<string, number>(() => new Ok(-1)),\n);\n\nconsole.log(errorResult); // Output: -1\n")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapOrElse")," function is used when you want to try to unwrap a value from a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," but also provide a\nfallback value if the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," contains an error. Some common use cases of ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapOrElse")," include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Providing a default value"),": If you have a ",(0,a.kt)("inlineCode",{parentName:"li"},"Result")," that might contain an error, but you still want to use the\nvalue contained in it, you can use ",(0,a.kt)("inlineCode",{parentName:"li"},"unwrapOrElse")," to provide a default value if the ",(0,a.kt)("inlineCode",{parentName:"li"},"Result")," is an error. For\nexample, you could use ",(0,a.kt)("inlineCode",{parentName:"li"},"unwrapOrElse")," to get a value from a config file, falling back to a default value if the\nconfig file is not present or contains an error."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Recovering from errors"),": If you have a ",(0,a.kt)("inlineCode",{parentName:"li"},"Result")," that might contain an error, but you can recover from the error,\nyou can use ",(0,a.kt)("inlineCode",{parentName:"li"},"unwrapOrElse")," to recover from the error and continue with the operation. For example, you could use\n",(0,a.kt)("inlineCode",{parentName:"li"},"unwrapOrElse")," to retry a network request with a different URL if the original request failed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Providing detailed error messages"),": If you have a ",(0,a.kt)("inlineCode",{parentName:"li"},"Result")," that might contain an error, but you want to provide a\nmore detailed error message, you can use ",(0,a.kt)("inlineCode",{parentName:"li"},"unwrapOrElse")," to replace the error with a more detailed error message.\nFor example, you could use ",(0,a.kt)("inlineCode",{parentName:"li"},"unwrapOrElse")," to add additional information to an error message that was returned from\na third-party library.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap_or_else"},"https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap_or_else")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jamiemason.github.io/tightrope/api/result/unwrap-or"},"https://jamiemason.github.io/tightrope/api/result/unwrap-or")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jamiemason.github.io/tightrope/api/result/unwrap"},"https://jamiemason.github.io/tightrope/api/result/unwrap")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jamiemason.github.io/tightrope/api/result/match"},"https://jamiemason.github.io/tightrope/api/result/match"))))}d.isMDXComponent=!0}}]);