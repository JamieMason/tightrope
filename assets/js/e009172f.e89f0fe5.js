"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3871],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,g=c["".concat(s,".").concat(y)]||c[y]||d[y]||i;return n?t.createElement(g,o(o({ref:r},p),{},{components:n})):t.createElement(g,o({ref:r},p))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3690:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=n(7462),a=(n(7294),n(3905));const i={id:"is-array-including-only",title:"isArrayIncludingOnly",tags:["arrays","guard","multiple-conditions"]},o=void 0,l={unversionedId:"api/guard/is-array-including-only",id:"api/guard/is-array-including-only",title:"isArrayIncludingOnly",description:"Asserts that a value is an Array including only the values provided in the given allowedValues array and no",source:"@site/docs/api/guard/is-array-including-only.mdx",sourceDirName:"api/guard",slug:"/api/guard/is-array-including-only",permalink:"/tightrope/api/guard/is-array-including-only",draft:!1,editUrl:"https://github.com/JamieMason/tightrope/tree/master/site/docs/api/guard/is-array-including-only.mdx",tags:[{label:"arrays",permalink:"/tightrope/tags/arrays"},{label:"guard",permalink:"/tightrope/tags/guard"},{label:"multiple-conditions",permalink:"/tightrope/tags/multiple-conditions"}],version:"current",frontMatter:{id:"is-array-including-only",title:"isArrayIncludingOnly",tags:["arrays","guard","multiple-conditions"]},sidebar:"sidebar",previous:{title:"isArrayIncludingAnyOf",permalink:"/tightrope/api/guard/is-array-including-any-of"},next:{title:"isArrayOf",permalink:"/tightrope/api/guard/is-array-of"}},s={},u=[],p={toc:u},c="wrapper";function d(e){let{components:r,...n}=e;return(0,a.kt)(c,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Asserts that a value is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," including only the values provided in the given ",(0,a.kt)("inlineCode",{parentName:"p"},"allowedValues")," array and no\nothers. The order and number of times each value appears in either array does not matter. Returns true unless ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\ncontains a value which does not feature in ",(0,a.kt)("inlineCode",{parentName:"p"},"allowedValues"),"."))}d.isMDXComponent=!0}}]);