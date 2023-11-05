"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[20928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"Introduction",keywords:["Seata","Registry Center"],description:"Registry Center Introduction."},a="Introduction",s={unversionedId:"user/registry/index",id:"version-v1.4/user/registry/index",title:"Introduction",description:"Registry Center Introduction.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.4/user/registry/index.md",sourceDirName:"user/registry",slug:"/user/registry/",permalink:"/en/docs/v1.4/user/registry/",draft:!1,tags:[],version:"v1.4",frontMatter:{title:"Introduction",keywords:["Seata","Registry Center"],description:"Registry Center Introduction."},sidebar:"docs",previous:{title:"Zookeeper Configuration Center",permalink:"/en/docs/v1.4/user/configuration/zookeeper"},next:{title:"Nacos Registry Center",permalink:"/en/docs/v1.4/user/registry/nacos"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'What is a registry center? The registry center can be considered as the "address book" in a microservices architecture, which records the mapping relationship between services and service addresses. In a distributed architecture, services are registered here, and when a service needs to call other services, it looks up the address of the service here and makes the call. For example, the Seata client (TM, RM) discovers the address of the Seata server (TC) cluster and communicates with each other.'),(0,o.kt)("li",{parentName:"ul"},"What is the difference between Seata's registry center and the registry centers of Dubbo and Spring Cloud? In a broad sense, there is no difference. The only difference is that the registry centers of Dubbo and Spring Cloud only work for their own components, while Seata's registry center also works for Seata itself. (Note: The registry centers of Dubbo and Spring Cloud are not related to Seata)"),(0,o.kt)("li",{parentName:"ul"},"What registry centers does Seata support?",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Eureka"),(0,o.kt)("li",{parentName:"ol"},"Consul"),(0,o.kt)("li",{parentName:"ol"},"Nacos"),(0,o.kt)("li",{parentName:"ol"},"Etcd"),(0,o.kt)("li",{parentName:"ol"},"ZooKeeper"),(0,o.kt)("li",{parentName:"ol"},"Sofa"),(0,o.kt)("li",{parentName:"ol"},"Redis"),(0,o.kt)("li",{parentName:"ol"},"File (direct connection)")))))}d.isMDXComponent=!0}}]);