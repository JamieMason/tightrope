"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"get",title:"get"},o=void 0,p={unversionedId:"api/fn/get",id:"api/fn/get",title:"get",description:"Summary",source:"@site/docs/api/fn/get.mdx",sourceDirName:"api/fn",slug:"/api/fn/get",permalink:"/tightrope/api/fn/get",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/fn/get.mdx",tags:[],version:"current",frontMatter:{id:"get",title:"get"},sidebar:"sidebar",previous:{title:"flow",permalink:"/tightrope/api/fn/flow"},next:{title:"identity",permalink:"/tightrope/api/fn/identity"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Example",id:"example",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A curried function that takes two arguments: a string ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"origin"),"\nobject. It returns the value at the specified path in the object, or\n",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," if the path does not exist."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example, we first define an object ",(0,a.kt)("inlineCode",{parentName:"p"},"obj")," that has a nested property\n",(0,a.kt)("inlineCode",{parentName:"p"},"foo.bar")," with a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"42"),". We then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," function to retrieve\nthe value at this path in the object by passing the path and object as\narguments. Note that we also specify the type of the expected value (",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\nin this case) as a type argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { get } from 'tightrope/fn/get';\n\n// Define an object to query\nconst obj = {\n  foo: {\n    bar: 42,\n  },\n};\n\n// Use get to retrieve a value from the object\nconst result = get<number>('foo.bar', obj); // returns 42\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," function works by splitting the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," argument on the ",(0,a.kt)("inlineCode",{parentName:"p"},"."),"\ncharacter, then using the resulting array of property names to recursively\naccess nested properties in the ",(0,a.kt)("inlineCode",{parentName:"p"},"origin")," object. If any of the intermediate\nproperties do not exist or are not objects, the function returns\n",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," function is implemented using the ",(0,a.kt)("inlineCode",{parentName:"p"},"curry")," function, which allows us\nto partially apply the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," argument and reuse the function with different\n",(0,a.kt)("inlineCode",{parentName:"p"},"origin")," objects."))}m.isMDXComponent=!0}}]);