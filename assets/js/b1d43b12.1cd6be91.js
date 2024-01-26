"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[20963],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Source Code Analysis of Seata-XID Propagation in Dubbo",keywords:["Seata","Dubbo","distributed transaction","spring"],description:"This article explores the propagation of XID in Seata-Dubbo through source code analysis.",author:"FUNKYE",date:"2020/01/01"},i=void 0,s={permalink:"/blog/seata-analysis-dubbo-transmit-xid",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-analysis-dubbo-transmit-xid.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-analysis-dubbo-transmit-xid.md",title:"Source Code Analysis of Seata-XID Propagation in Dubbo",description:"This article explores the propagation of XID in Seata-Dubbo through source code analysis.",date:"2020-01-01T00:00:00.000Z",formattedDate:"January 1, 2020",tags:[],readingTime:0,hasTruncateMarker:!1,authors:[{name:"FUNKYE"}],frontMatter:{title:"Source Code Analysis of Seata-XID Propagation in Dubbo",keywords:["Seata","Dubbo","distributed transaction","spring"],description:"This article explores the propagation of XID in Seata-Dubbo through source code analysis.",author:"FUNKYE",date:"2020/01/01"},prevItem:{title:"Seata Config Module Source Code Analysis",permalink:"/blog/seata-analysis-config-modular"},nextItem:{title:"Seata TCC Module Source Code Analysis",permalink:"/blog/seata-analysis-tcc-modular"}},c={authorsImageUrls:[void 0]},u=[],l={toc:u},p="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);