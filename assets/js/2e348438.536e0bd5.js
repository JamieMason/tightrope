"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={id:"is-valid-date",title:"isValidDate",tags:["dates","guard"]},o=void 0,l={unversionedId:"api/guard/is-valid-date",id:"api/guard/is-valid-date",title:"isValidDate",description:"Asserts that a value is an instance of Date whose internal value is valid.",source:"@site/docs/api/guard/is-valid-date.mdx",sourceDirName:"api/guard",slug:"/api/guard/is-valid-date",permalink:"/tightrope/api/guard/is-valid-date",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/guard/is-valid-date.mdx",tags:[{label:"dates",permalink:"/tightrope/tags/dates"},{label:"guard",permalink:"/tightrope/tags/guard"}],version:"current",frontMatter:{id:"is-valid-date",title:"isValidDate",tags:["dates","guard"]},sidebar:"sidebar",previous:{title:"isUndefined",permalink:"/tightrope/api/guard/is-undefined"},next:{title:"isVisibleString",permalink:"/tightrope/api/guard/is-visible-string"}},s={},p=[],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Asserts that a value is an instance of ",(0,n.kt)("inlineCode",{parentName:"p"},"Date")," whose internal value is valid.\n",(0,n.kt)("inlineCode",{parentName:"p"},"Date")," is little like ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," in that it is a container for a value. For\nexample, ",(0,n.kt)("inlineCode",{parentName:"p"},"new Date('wut?')")," is a valid ",(0,n.kt)("inlineCode",{parentName:"p"},"Date")," which wraps a value that is not\nvalid."))}u.isMDXComponent=!0}}]);