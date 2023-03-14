"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7259],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"expect-err",title:"expectErr",tags:["errors","result","unsafe","unwrap"]},o=void 0,p={unversionedId:"api/result/expect-err",id:"api/result/expect-err",title:"expectErr",description:"Summary",source:"@site/docs/api/result/expect-err.mdx",sourceDirName:"api/result",slug:"/api/result/expect-err",permalink:"/tightrope/api/result/expect-err",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/result/expect-err.mdx",tags:[{label:"errors",permalink:"/tightrope/tags/errors"},{label:"result",permalink:"/tightrope/tags/result"},{label:"unsafe",permalink:"/tightrope/tags/unsafe"},{label:"unwrap",permalink:"/tightrope/tags/unwrap"}],version:"current",frontMatter:{id:"expect-err",title:"expectErr",tags:["errors","result","unsafe","unwrap"]},sidebar:"sidebar",previous:{title:"expect",permalink:"/tightrope/api/result/expect"},next:{title:"flatten",permalink:"/tightrope/api/result/flatten"}},l={},s=[{value:"Summary",id:"summary",level:2},{value:"Example",id:"example",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"See also",id:"see-also",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A higher-order function that takes a message and returns a function that can\nbe used to assert that a given ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result"))," is an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/err"},(0,a.kt)("inlineCode",{parentName:"a"},"Err"))," and return its value."),(0,a.kt)("p",null,"It takes a string message as an argument and returns a function that takes a\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," and throws a native ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," with the provided message if the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/ok"},(0,a.kt)("inlineCode",{parentName:"a"},"Ok")),", otherwise it returns the inner value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example, ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/expect-err"},(0,a.kt)("inlineCode",{parentName:"a"},"expectErr"))," is used to throw a native ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," if the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok"),". If the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),", then the function returns\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Result } from 'tightrope/result';\nimport { pipe } from 'tightrope/fn/pipe';\nimport { Err } from 'tightrope/result/err';\nimport { expectErr } from 'tightrope/result/expect-err';\nimport { Ok } from 'tightrope/result/ok';\n\nfunction divide(a: number, b: number): Result<number, string> {\n  if (b === 0) {\n    return new Err('Cannot divide by zero');\n  }\n  return new Ok(a / b);\n}\n\nconst result = pipe(divide(10, 0), expectErr('Error: expected Err'));\n// returns: Err('Cannot divide by zero')\n\n// throws new Error('Error: expected Err')\nconst result2 = pipe(divide(10, 5), expectErr('Error: expected Err'));\n")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expectErr")," is commonly used when you want to handle the error case of a\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object, but don't want to handle the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," case explicitly. It is\nuseful when you want to throw an error if the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object is not an\n",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),", or if the error message should be customized."),(0,a.kt)("p",null,"One common use case is in error handling, where you expect a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object\nto contain an error value and you want to handle it in a specific way.\nAnother use case is in testing, where you want to assert that a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),"\nobject contains an error value and you want to throw an error if it does\nnot."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"expectErr")," function and ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/unwrap-err"},(0,a.kt)("inlineCode",{parentName:"a"},"unwrapErr"))," function have different use cases."),(0,a.kt)("p",{parentName:"admonition"},"You would use ",(0,a.kt)("inlineCode",{parentName:"p"},"expectErr")," when you want to explicitly check for an error\ncondition and throw an error if the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is not an error. It is useful\nfor catching programming errors or unexpected behavior."),(0,a.kt)("p",{parentName:"admonition"},"On the other hand, you would use ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," when you are certain that the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is an error and you want to get the value inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," variant.\nThis is useful when you want to propagate the error up the call stack or when\nyou want to handle the error in some specific way."),(0,a.kt)("p",{parentName:"admonition"},"In general, you should use ",(0,a.kt)("inlineCode",{parentName:"p"},"expectErr")," when you want to catch and handle\nunexpected error conditions and use ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," when you want to propagate\nerrors or handle them in a specific way.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/core/result/enum.Result.html#method.expect_err"},"https://doc.rust-lang.org/core/result/enum.Result.html#method.expect_err")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jamiemason.github.io/tightrope/api/result/unwrap-err"},"https://jamiemason.github.io/tightrope/api/result/unwrap-err"))))}m.isMDXComponent=!0}}]);