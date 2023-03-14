"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1126],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(t),h=a,d=c["".concat(u,".").concat(h)]||c[h]||m[h]||i;return t?n.createElement(d,o(o({ref:r},s),{},{components:t})):n.createElement(d,o({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9954:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={id:"unwrap-err",title:"unwrapErr"},o=void 0,p={unversionedId:"api/result/unwrap-err",id:"api/result/unwrap-err",title:"unwrapErr",description:"Summary",source:"@site/docs/api/result/unwrap-err.mdx",sourceDirName:"api/result",slug:"/api/result/unwrap-err",permalink:"/tightrope/api/result/unwrap-err",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/result/unwrap-err.mdx",tags:[],version:"current",frontMatter:{id:"unwrap-err",title:"unwrapErr"},sidebar:"sidebar",previous:{title:"unwrap",permalink:"/tightrope/api/result/unwrap"},next:{title:"unwrapOr",permalink:"/tightrope/api/result/unwrap-or"}},u={},l=[{value:"Summary",id:"summary",level:2},{value:"Example",id:"example",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"See also",id:"see-also",level:2}],s={toc:l},c="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/unwrap-err"},(0,a.kt)("inlineCode",{parentName:"a"},"unwrapErr"))," function is used to extract the error value out of a ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result")),"\nobject if it's in the ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/err"},(0,a.kt)("inlineCode",{parentName:"a"},"Err"))," variant. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object is in the ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/ok"},(0,a.kt)("inlineCode",{parentName:"a"},"Ok")),"\nvariant, it will throw a native ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example, we're using ",(0,a.kt)("inlineCode",{parentName:"p"},"pipe")," to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object with an error\nmessage using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," constructor. Then we're passing that ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," to extract the error message. Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object is in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," variant, ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," will return the error message string."),(0,a.kt)("p",null,"In the second example, since result is in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," variant, ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," will\nthrow an error with a message saying that it encountered an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," variant\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { Err } from 'tightrope/result/err';\nimport { Ok } from 'tightrope/result/ok';\nimport { unwrapErr } from 'tightrope/result/unwrap-err';\n\nconst err1: string = pipe(new Err('Error message'), unwrapErr);\n// 'Error message'\n\nconst err2: string = pipe(new Ok('Success!'), unwrapErr);\n// throws: Error('unwrapErr encountered Ok<Success!>')\n")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," is used when you have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object and you want to access\nthe error value inside an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," variant. It is often used in scenarios where\nyou know that the result is an error and you want to access the error value\ndirectly without having to handle it in an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," case."),(0,a.kt)("p",null,"For example, if you have a function that returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," object and you\nknow that it will always return an error in a certain scenario, you can use\n",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," to access the error value without having to handle it in an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),"\ncase."),(0,a.kt)("p",null,"Another use case for ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," is in test cases, where you want to check\nthat a function returns an error with a specific error message. You can use\n",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," to access the error message and then compare it with the expected\nvalue."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/expect-err"},(0,a.kt)("inlineCode",{parentName:"a"},"expectErr"))," function and ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," function have different use cases."),(0,a.kt)("p",{parentName:"admonition"},"You would use ",(0,a.kt)("inlineCode",{parentName:"p"},"expectErr")," when you want to explicitly check for an error\ncondition and throw an error if the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is not an error. It is useful\nfor catching programming errors or unexpected behavior."),(0,a.kt)("p",{parentName:"admonition"},"On the other hand, you would use ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," when you are certain that the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is an error and you want to get the value inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," variant.\nThis is useful when you want to propagate the error up the call stack or when\nyou want to handle the error in some specific way."),(0,a.kt)("p",{parentName:"admonition"},"In general, you should use ",(0,a.kt)("inlineCode",{parentName:"p"},"expectErr")," when you want to catch and handle\nunexpected error conditions and use ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrapErr")," when you want to propagate\nerrors or handle them in a specific way.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap_err"},"https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap_err")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jamiemason.github.io/tightrope/api/result/expect-err"},"https://jamiemason.github.io/tightrope/api/result/expect-err"))))}m.isMDXComponent=!0}}]);