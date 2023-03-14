"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,d=c["".concat(l,".").concat(m)]||c[m]||f[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"is-ok",title:"isOk",tags:["guard","result"]},o=void 0,s={unversionedId:"api/result/is-ok",id:"api/result/is-ok",title:"isOk",description:"isOk is useful for checking if a value is an instance of the Ok class,",source:"@site/docs/api/result/is-ok.mdx",sourceDirName:"api/result",slug:"/api/result/is-ok",permalink:"/tightrope/api/result/is-ok",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/result/is-ok.mdx",tags:[{label:"guard",permalink:"/tightrope/tags/guard"},{label:"result",permalink:"/tightrope/tags/result"}],version:"current",frontMatter:{id:"is-ok",title:"isOk",tags:["guard","result"]},sidebar:"sidebar",previous:{title:"isErr",permalink:"/tightrope/api/result/is-err"},next:{title:"isResult",permalink:"/tightrope/api/result/is-result"}},l={},p=[{value:"See also",id:"see-also",level:2}],u={toc:p},c="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/is-ok"},(0,a.kt)("inlineCode",{parentName:"a"},"isOk"))," is useful for checking if a value is an instance of the ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/ok"},(0,a.kt)("inlineCode",{parentName:"a"},"Ok"))," class,\nwhich can be used to handle error cases in a program flow that uses the\n",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result"))," type."),(0,a.kt)("p",null,"For example, it can be used to check if the result of a function that returns\na ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," or an ",(0,a.kt)("a",{parentName:"p",href:"/tightrope/api/result/err"},(0,a.kt)("inlineCode",{parentName:"a"},"Err")),", and take different actions depending on\nthe outcome."),(0,a.kt)("p",null,"It can also be used for validation or error checking, to make sure that the\nvalue passed to a function or module is of the expected type."),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/core/result/enum.Result.html#method.is_ok"},"https://doc.rust-lang.org/core/result/enum.Result.html#method.is_ok"))))}f.isMDXComponent=!0}}]);