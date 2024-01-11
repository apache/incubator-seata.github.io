"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[58917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),b=n,g=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return r?o.createElement(g,a(a({ref:t},l),{},{components:r})):o.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:n,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},95953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const i={title:"New contributor guide",keywords:["Seata","contributor"],description:"This is a guide for new comers who wants to contribute to Seata."},a="New contributor guide",u={unversionedId:"developers/contributor-guide/new-contributor-guide_dev",id:"version-v1.3/developers/contributor-guide/new-contributor-guide_dev",title:"New contributor guide",description:"This is a guide for new comers who wants to contribute to Seata.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.3/developers/contributor-guide/new-contributor-guide_dev.md",sourceDirName:"developers/contributor-guide",slug:"/developers/contributor-guide/new-contributor-guide_dev",permalink:"/docs/v1.3/developers/contributor-guide/new-contributor-guide_dev",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.3/developers/contributor-guide/new-contributor-guide_dev.md",tags:[],version:"v1.3",frontMatter:{title:"New contributor guide",keywords:["Seata","contributor"],description:"This is a guide for new comers who wants to contribute to Seata."},sidebar:"developers",next:{title:"Test coverage guide",permalink:"/docs/v1.3/developers/contributor-guide/test-coverage-guide_dev"}},s={},c=[{value:"Subscribe to the mailing list",id:"subscribe-to-the-mailing-list",level:3},{value:"Reporting issue",id:"reporting-issue",level:3},{value:"Sending pull request",id:"sending-pull-request",level:3},{value:"Code convention",id:"code-convention",level:3}],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"new-contributor-guide"},"New contributor guide"),(0,n.kt)("p",null,"This is a guide for new comers who wants to contribute to Seata."),(0,n.kt)("h3",{id:"subscribe-to-the-mailing-list"},"Subscribe to the mailing list"),(0,n.kt)("p",null,"subscribe: ",(0,n.kt)("a",{parentName:"p",href:"mailto:dev-subscribe@seata.apache.org"},"dev-subscribe@seata.apache.org"),"\nunsubscribe: ",(0,n.kt)("a",{parentName:"p",href:"mailto:dev-unsubscribe@seata.apache.org"},"dev-unsubscribe@seata.apache.org")),(0,n.kt)("h3",{id:"reporting-issue"},"Reporting issue"),(0,n.kt)("p",null,"You can always reporting an issue to Seata via Github ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/issues"},"Issues"),"."),(0,n.kt)("p",null,"If you are reporting bugs, please refer to the issue report ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/issues/new?template=BUG_REPORT.md"},"template"),"."),(0,n.kt)("p",null,"If you are reporting feature, please refer to the issue report ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/issues/new?template=FEATURE_REQUEST.md"},"template"),"."),(0,n.kt)("p",null,"If you are reporting regular issues, like raise an question, you can open an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/issues/new"},"regular issue"),"."),(0,n.kt)("h3",{id:"sending-pull-request"},"Sending pull request"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Follow the checklist in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/blob/develop/.github/PULL_REQUEST_TEMPLATE.md"},"pull request template")),(0,n.kt)("li",{parentName:"ul"},"Before you sending out the pull request, please sync your forked repository with remote repository, this will make your pull request simple and clear. See guide below:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream git@github.com:apache/incubator-seata.git\ngit fetch upstream\ngit rebase upstream/master\ngit checkout -b your_awesome_patch\n... add some work\ngit push origin your_awesome_patch\n")),(0,n.kt)("h3",{id:"code-convention"},"Code convention"),(0,n.kt)("p",null,"Please check the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/develop/CONTRIBUTING.md"},"CONTRIBUTING.md")," for code convention."))}d.isMDXComponent=!0}}]);