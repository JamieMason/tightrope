"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),c=a,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"and",title:"and",tags:["result","transform","transform-result"]},l=void 0,o={unversionedId:"api/result/and",id:"api/result/and",title:"and",description:"Summary",source:"@site/docs/api/result/and.mdx",sourceDirName:"api/result",slug:"/api/result/and",permalink:"/tightrope/api/result/and",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/result/and.mdx",tags:[{label:"result",permalink:"/tightrope/tags/result"},{label:"transform",permalink:"/tightrope/tags/transform"},{label:"transform-result",permalink:"/tightrope/tags/transform-result"}],version:"current",frontMatter:{id:"and",title:"and",tags:["result","transform","transform-result"]},sidebar:"sidebar",previous:{title:"sum",permalink:"/tightrope/api/number/sum"},next:{title:"andThen",permalink:"/tightrope/api/result/and-then"}},p={},s=[{value:"Summary",id:"summary",level:2},{value:"Behaviour",id:"behaviour",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/and"},(0,a.kt)("inlineCode",{parentName:"a"},"and"))," function is used to combine two ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result"))," objects, returning either\nthe first error encountered, or the second ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/ok"},(0,a.kt)("inlineCode",{parentName:"a"},"Ok"))," value if both ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),"\nobjects are successful."),(0,a.kt)("h2",{id:"behaviour"},"Behaviour"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"and")," behaves just like the ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," operator, but for support of ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," types:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Scenario"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pseudocode"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Outcome"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Ok && Err")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pipe(Ok, and(Err))")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/tightrope/api/result/err"},(0,a.kt)("inlineCode",{parentName:"a"},"Err")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Err && Ok")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pipe(Err, and(Ok))")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Err"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Err1 && Err2")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pipe(Err1, and(Err2))")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Err1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Ok1 && Ok2")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pipe(Ok1, and(Ok2))")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Ok2"))))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," function is used to combine two ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," objects\n(",(0,a.kt)("inlineCode",{parentName:"p"},"result1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"result2"),"). Since ",(0,a.kt)("inlineCode",{parentName:"p"},"result2")," is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," object, the final\nresult is also an ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," object containing the error message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { and } from 'tightrope/result/and';\nimport { divide } from 'tightrope/number/divide';\n\nconst result1 = divide(10, 5); // returns Ok(2)\nconst result2 = divide(20, 0); // returns Err(\"Cannot divide by zero\")\n\nconst finalResult = pipe(result1, and(result2));\n\nconsole.log(finalResult); // Err(\"Cannot divide by zero\")\n")),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," function is used to combine two ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," objects\n(",(0,a.kt)("inlineCode",{parentName:"p"},"result1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"result2"),"). Since both ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," objects are successful, the\nfinal result is the second ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," value (",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(5)"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'tightrope/fn/pipe';\nimport { and } from 'tightrope/result/and';\nimport { divide } from 'tightrope/number/divide';\n\nconst result1 = divide(10, 5); // returns Ok(2)\nconst result2 = divide(20, 4); // returns Ok(5)\n\nconst finalResult = pipe(result1, and(result2)); // returns Ok(5)\n\nconsole.log(finalResult); // Ok(5)\n")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://jamiemason.github.io/tightrope/api/result/or"},"http://jamiemason.github.io/tightrope/api/result/or"))))}m.isMDXComponent=!0}}]);