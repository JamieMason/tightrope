"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,c=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return r?n.createElement(c,o(o({ref:t},m),{},{components:r})):n.createElement(c,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={id:"map-err",title:"mapErr",tags:["errors","left-biased","result","transform","transform-value"]},o=void 0,p={unversionedId:"api/result/map-err",id:"api/result/map-err",title:"mapErr",description:"Summary",source:"@site/docs/api/result/map-err.mdx",sourceDirName:"api/result",slug:"/api/result/map-err",permalink:"/tightrope/api/result/map-err",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/result/map-err.mdx",tags:[{label:"errors",permalink:"/tightrope/tags/errors"},{label:"left-biased",permalink:"/tightrope/tags/left-biased"},{label:"result",permalink:"/tightrope/tags/result"},{label:"transform",permalink:"/tightrope/tags/transform"},{label:"transform-value",permalink:"/tightrope/tags/transform-value"}],version:"current",frontMatter:{id:"map-err",title:"mapErr",tags:["errors","left-biased","result","transform","transform-value"]},sidebar:"sidebar",previous:{title:"map",permalink:"/tightrope/api/result/map"},next:{title:"match",permalink:"/tightrope/api/result/match"}},s={},l=[{value:"Summary",id:"summary",level:2},{value:"Example",id:"example",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"See also",id:"see-also",level:2}],m={toc:l},u="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/map-err"},(0,a.kt)("inlineCode",{parentName:"a"},"mapErr"))," function is used to transform the error value inside an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/err"},(0,a.kt)("inlineCode",{parentName:"a"},"Err")),"\nvariant of a ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result")),"."),(0,a.kt)("p",null,"If the input ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),", the function applies ",(0,a.kt)("inlineCode",{parentName:"p"},"mapFn")," to the error\nvalue and returns a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object with the transformed error value. If\nthe input ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/ok"},(0,a.kt)("inlineCode",{parentName:"a"},"Ok")),", it simply returns the input ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object\nunmodified."),(0,a.kt)("p",null,"This function is similar to ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/map"},(0,a.kt)("inlineCode",{parentName:"a"},"map")),", but instead of transforming the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok"),"\nvalue, it transforms the ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," value."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want to recover from an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," and turn it into an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok"),", use\n",(0,a.kt)("a",{parentName:"p",href:"https://jamiemason.github.io/tightrope/api/result/or-else"},"[",(0,a.kt)("inlineCode",{parentName:"a"},"orElse"),"](/tightrope/api/result/or-else)")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://jamiemason.github.io/tightrope/api/result/or"},"[",(0,a.kt)("inlineCode",{parentName:"a"},"or"),"](/tightrope/api/result/or)"),".")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"divide")," function returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result<number, string>"),"\nwith an error message if the second argument is zero. The pipeline then uses\n",(0,a.kt)("inlineCode",{parentName:"p"},"mapErr")," to transform any error messages to uppercase, then a 2nd time to a\nnative ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," instance."),(0,a.kt)("p",null,"The resulting ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object has an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," instance with its message in\nuppercase."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Result } from 'tightrope/result';\nimport { pipe } from 'tightrope/fn/pipe';\nimport { Err } from 'tightrope/result/err';\nimport { mapErr } from 'tightrope/result/map-err';\nimport { Ok } from 'tightrope/result/ok';\nimport { unwrapErr } from 'tightrope/result/unwrap-err';\n\n// Define a function that returns a result with an error\nfunction divide(a: number, b: number): Result<number, string> {\n  if (b === 0) {\n    return new Err('Cannot divide by zero');\n  }\n  return new Ok(a / b);\n}\n\n// Create a pipeline that divides two numbers and maps any error messages to\n// uppercase\nconst result = pipe(\n  divide(10, 0), // returns Err(\"Cannot divide by zero\")\n  mapErr((msg) => msg.toUpperCase()), // returns Err(\"CANNOT DIVIDE BY ZERO\")\n  mapErr((msg) => new Error(msg)), // returns Err(new Error(\"CANNOT DIVIDE BY ZERO\"))\n  unwrapErr,\n);\n\nconsole.log(result); // outputs: Error(\"CANNOT DIVIDE BY ZERO\")\n")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"Some common use cases of ",(0,a.kt)("inlineCode",{parentName:"p"},"mapErr")," include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mapping an error to a more user-friendly error message or to a different\nerror type."),(0,a.kt)("li",{parentName:"ul"},"Transforming an error into a value that can be used downstream in a pipeline.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/core/result/enum.Result.html#method.map_err"},"https://doc.rust-lang.org/core/result/enum.Result.html#method.map_err")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jamiemason.github.io/tightrope/api/result/map"},"https://jamiemason.github.io/tightrope/api/result/map")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jamiemason.github.io/tightrope/api/result/or-else"},"https://jamiemason.github.io/tightrope/api/result/or-else")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jamiemason.github.io/tightrope/api/result/or"},"https://jamiemason.github.io/tightrope/api/result/or"))))}h.isMDXComponent=!0}}]);