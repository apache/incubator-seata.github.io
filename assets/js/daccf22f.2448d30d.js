"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[32127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Detailed Explanation of seata-golang Communication Model",keywords:["seata","seata-golang","seata-go","getty","distributed transaction"],description:"This article provides a detailed explanation of the underlying RPC communication implementation in seata-golang.",author:"xiaomin.liu",date:"2021/01/04"},i=void 0,l={permalink:"/blog/seata-golang-communication-mode",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-golang-communication-mode.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-golang-communication-mode.md",title:"Detailed Explanation of seata-golang Communication Model",description:"This article provides a detailed explanation of the underlying RPC communication implementation in seata-golang.",date:"2021-01-04T00:00:00.000Z",formattedDate:"January 4, 2021",tags:[],readingTime:0,hasTruncateMarker:!1,authors:[{name:"xiaomin.liu"}],frontMatter:{title:"Detailed Explanation of seata-golang Communication Model",keywords:["seata","seata-golang","seata-go","getty","distributed transaction"],description:"This article provides a detailed explanation of the underlying RPC communication implementation in seata-golang.",author:"xiaomin.liu",date:"2021/01/04"},prevItem:{title:"Analysis of Seata Configuration Management Principles",permalink:"/blog/seata-config-manager"},nextItem:{title:"Analysis of Seata Data Source Proxy",permalink:"/blog/seata-datasource-proxy"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);