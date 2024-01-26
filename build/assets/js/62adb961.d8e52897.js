"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[51458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={title:"Seata:Bridging Data and Applications",keywords:["Seata","Distributed Transactions","Data Consistency","Microservices"],description:"This article introduces the past, present, and future evolution of Seata.",author:"Ji Min - Founder of the Seata Open Source Community, Leader of the Distributed Transactions Team",date:"June 30, 2023"},s=void 0,r={permalink:"/blog/seata-connect-data-and-application",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-connect-data-and-application.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-connect-data-and-application.md",title:"Seata:Bridging Data and Applications",description:"This article introduces the past, present, and future evolution of Seata.",date:"2023-06-30T00:00:00.000Z",formattedDate:"June 30, 2023",tags:[],readingTime:13.905,hasTruncateMarker:!1,authors:[{name:"Ji Min - Founder of the Seata Open Source Community, Leader of the Distributed Transactions Team"}],frontMatter:{title:"Seata:Bridging Data and Applications",keywords:["Seata","Distributed Transactions","Data Consistency","Microservices"],description:"This article introduces the past, present, and future evolution of Seata.",author:"Ji Min - Founder of the Seata Open Source Community, Leader of the Distributed Transactions Team",date:"June 30, 2023"},prevItem:{title:"Seata-Raft Storage Mode in Depth and Getting Started",permalink:"/blog/seata-raft-detailed-explanation"},nextItem:{title:"Observability Practices in Seata",permalink:"/blog/seata-observable-practice"}},c={authorsImageUrls:[void 0]},l=[{value:"From TXC/GTS to Seata",id:"from-txcgts-to-seata",level:3},{value:"The Origin of Distributed Transactions",id:"the-origin-of-distributed-transactions",level:4},{value:"The Evolution of Distributed Transactions",id:"the-evolution-of-distributed-transactions",level:4}],d={toc:l},u="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article mainly introduces the evolutionary journey of distributed transactions from internal development to commercialization and open source, as well as the current progress and future planning of the Seata community.\nSeata is an open-source distributed transaction solution designed to provide a comprehensive solution for distributed transactions under modern microservices architecture. Seata offers complete distributed transaction solutions, including AT, TCC, Saga, and XA transaction modes, supporting various programming languages and data storage schemes. Seata also provides easy-to-use APIs, extensive documentation, and examples to facilitate quick development and deployment for enterprises applying Seata.\n",(0,o.kt)("strong",{parentName:"p"},"Seata's advantages lie in its high availability, high performance, and high scalability, and it does not require extra complex operations for horizontal scaling.")," Seata is currently used in thousands of customer business systems on Alibaba Cloud, and its reliability has been recognized and applied by major industry manufacturers.\nAs an open-source project, the Seata community is also expanding continuously, becoming an important platform for developers to exchange, share, and learn, attracting more and more attention and support from enterprises.\nToday, I will primarily share about Seata on the following three topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"From TXC/GTS to Seata")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Latest developments in the Seata community")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Future planning for the Seata community"),(0,o.kt)("br",null))),(0,o.kt)("h3",{id:"from-txcgts-to-seata"},"From TXC/GTS to Seata"),(0,o.kt)("h4",{id:"the-origin-of-distributed-transactions"},"The Origin of Distributed Transactions"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Product Matrix",src:n(43743).Z,width:"1468",height:"1316"}),"\nSeata is internally codenamed TXC (taobao transaction constructor) within Alibaba, a name with a strong organizational structure flavor. TXC originated from Alibaba's Wushi (Five Color Stones) project, which in ancient mythology were the stones used by the goddess N\xfcwa to mend the heavens, symbolizing Alibaba's important milestone in the evolution from monolithic architecture to distributed architecture. During this project, a batch of epoch-making Internet middleware was developed, including the well-known \"Big Three\":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"HSF service invocation framework"),"\nSolves service communication issues after the transition from monolithic applications to service-oriented architectures."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TDDL database sharding framework"),"\nAddresses storage capacity and connection count issues of databases at scale."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MetaQ messaging framework"),"\nAddresses asynchronous invocation issues.\nThe birth of the Big Three satisfied the basic requirements of microservices-based business development, but the data consistency issues that arose after microservices were not properly addressed, lacking a unified solution. The likelihood of data consistency issues in microservices is much higher than in monolithic applications, and the increased complexity of moving from in-process calls to network calls exacerbates the production of exceptional scenarios. The increase in service hops also makes it impossible for upstream and downstream services to coordinate data rollback in the event of a business processing exception. TXC was born to address the pain points of data consistency at the application architecture layer, and the core data consistency scenarios it aimed to address included:"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Consistency across services.")," Coordinates rollback of upstream and downstream service nodes in the event of system exceptions such as call timeouts and business exceptions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data consistency in database sharding.")," Ensures internal transactions during logical SQL operations on business layers are consistent across different data shards."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data consistency in message sending.")," Addresses the inconsistency between data operations and successful message sending.\nTo overcome the common scenarios encountered, TXC was seamlessly integrated with the Big Three. When businesses use the Big Three for development, they are completely unaware of TXC's presence in the background, do not have to consider the design of data consistency, and leave it to the framework to ensure, allowing businesses to focus more on their own development, greatly improving development efficiency.",(0,o.kt)("br",null),"![GTS Architecture](/img/blog/GTS\u67b6\u6784.jpg) TXC has been widely used within Alibaba Group for many years and has been baptized by the surging traffic of large-scale events like Singles' Day, significantly improving business development efficiency and ensuring data accuracy, eliminating financial and reputational issues caused by data inconsistencies. With the continuous evolution of the architecture, **a standard three-node cluster can now handle peak values of nearly 100K TPS and millisecond-level transaction processing. In terms of availability and performance, it has reached a four-nines SLA guarantee, ensuring no failures throughout the year even in unattended conditions.**",(0,o.kt)("br",null))),(0,o.kt)("h4",{id:"the-evolution-of-distributed-transactions"},"The Evolution of Distributed Transactions"),(0,o.kt)("p",null,"The birth of new things is always accompanied by doubts. Is middleware capable of ensuring data consistency reliable? The initial birth of TXC was just a vague theory, lacking theoretical models and engineering practice. After we conducted MVP (Minimum Viable Product) model testing and promoted business deployment, we often encountered faults and frequently had to wake up in the middle of the night to deal with issues, wearing wristbands to sleep to cope with emergency responses. These were the most painful years I went through technically after taking over the team.\n",(0,o.kt)("img",{alt:"Evolution of Distributed Transactions",src:n(63054).Z,width:"1488",height:"702"}),"\nSubsequently, we had extensive discussions and systematic reviews. We first needed to define the consistency problem. Were we to achieve majority consensus consistency like RAFT, solve database consistency issues like Google Spanner, or something else? Looking at the top-down layered structure from the application node, it mainly includes development frameworks, service invocation frameworks, data middleware, database drivers, and databases. We had to decide at which layer to solve the data consistency problem. We compared the consistency requirements, universality, implementation complexity, and business integration costs faced when solving data consistency issues at different levels. In the end, we weighed the pros and cons, decided to keep the implementation complexity to ourselves, and adopted the AT mode initially as a consistency component. We needed to ensure high consistency, but not be locked into specific database implementations, ensuring the generality of scenarios and the business integration costs were low enough to be easily implemented. This is also why TXC initially adopted the AT mode.\n",(0,o.kt)("strong",{parentName:"p"},"A distributed transaction is not just a framework; it's a system.")," We defined the consistency problem in theory, abstractly conceptualized modes, roles, actions, and isolation, etc. From an engineering practice perspective, we defined the programming model, including low-intrusion annotations, simple method templates, and flexible APIs, and defined basic and enhanced transaction capabilities (e.g., how to support a large number of activities at low cost), as well as capabilities in operations, security, performance, observability, and high availability.\n",(0,o.kt)("img",{alt:"Transaction Logical Model",src:n(75147).Z,width:"1482",height:"656"}),"\nWhat problems do distributed transactions solve? A classic and tangible example is the money transfer scenario. The transfer process includes subtracting balance and adding balance, how do we ensure the atomicity of the operation? Without any intervention, these two steps may encounter various problems, such as account B being canceled or service call timeouts, etc.\n",(0,o.kt)("strong",{parentName:"p"},"Timeout issues have always been a difficult problem to solve in distributed applications"),"; we cannot accurately know whether service B has executed and in what order. From a data perspective, this means the money in account B may not be successfully added. After the service-oriented transformation, each node only has partial information, while the transaction itself requires global coordination of all nodes, thus requiring a centralized role with a god's-eye view, capable of obtaining all information, which is the ",(0,o.kt)("strong",{parentName:"p"},"TC (transaction coordinator)"),", used to globally coordinate the transaction state. The ",(0,o.kt)("strong",{parentName:"p"},"TM (Transaction Manager)")," is the role that drives the generation of transaction proposals. However, even gods nod off, and their judgments are not always correct, so we need an ",(0,o.kt)("strong",{parentName:"p"},"RM (resource manager)")," role to verify the authenticity of the transaction as a representative of the soul. This is TXC's most basic philosophical model. We have methodologically verified that its data consistency is very complete, of course, our cognition is bounded. Perhaps the future will prove we were turkey engineers, but under current circumstances, its model is already sufficient to solve most existing problems.\n",(0,o.kt)("img",{alt:"Distributed Transaction Performance",src:n(25028).Z,width:"1494",height:"674"}),"\n",(0,o.kt)("strong",{parentName:"p"},"After years of architectural evolution, from the perspective of transaction single-link latency, TXC takes an average of about 0.2 milliseconds to process at the start of the transaction and about 0.4 milliseconds for branch registration, with the entire transaction's additional latency within the millisecond range. This is also the theoretical limit value we have calculated. In terms of throughput, the TPS of a single node reaches 30,000 times/second, and the TPS of a standard cluster is close to 100,000 times/second.")),(0,o.kt)("br",null),"#### Seata Open Source Why go open source? This is a question many people have asked me. In 2017, we commercialized the GTS (Global Transaction Service) product sold on Alibaba Cloud, with both public and private cloud forms. At this time, the internal group developed smoothly, but we encountered various problems in the process of commercialization. The problems can be summed up in two main categories: **First, developers are quite lacking in the theory of distributed transactions,** most people do not even understand what local transactions are, let alone distributed transactions. **Second, there are problems with product maturity,** often encountering various strange scenario issues, leading to a sharp rise in support and delivery costs, and R&D turning into after-sales customer service. We reflected on why we encountered so many problems. The main issue here is that Alibaba Group internally has a unified language stack and unified technology stack, and our polishing of specific scenarios is very mature. Serving Alibaba, one company, and serving thousands of enterprises on the cloud is fundamentally different, which also made us realize that our product's scenario ecology was not well developed. On GitHub, more than 80% of open-source software is basic software, and basic software primarily solves the problem of scenario universality, so it cannot be locked in by a single enterprise, like Linux, which has a large number of community distributions. Therefore, in order to make our product better, we chose to open source and co-build with developers to popularize more enterprise users. ![Alibaba Open Source](/img/blog/\u963f\u91cc\u5f00\u6e90.jpg) Alibaba's open-source journey has gone through three main stages. **The first stage is the stage where Dubbo is located, where developers contribute out of love,** Dubbo has been open sourced for over 10 years, and time has fully proven that Dubbo is an excellent open-source software, and its microkernel plugin extensibility design is an important reference for me when I initially open sourced Seata. When designing software, we need to consider which is more important between extensibility and performance, whether we are doing a three-year design, a five-year design, or a ten-year design that meets business development. While solving the 0-1 service call problem, can we predict the governance problems after the 1-100 scale-up? **The second stage is the closed loop of open source and commercialization, where commercialization feeds back into the open-source community, promoting the development of the open-source community.** I think cloud manufacturers are more likely to do open source well for the following reasons: - First, the cloud is a scaled economy, which must be established on a stable and mature kernel foundation, packaging its product capabilities including high availability, maintenance-free, and elasticity on top of it. An unstable kernel will inevitably lead to excessive delivery and support costs, and high penetration of the R&D team's support Q&A will prevent large-scale replication, and high penetration rates will prevent rapid evolution and iteration of products. - Second, commercial products know business needs better. Our internal technical teams often YY requirements from a development perspective, and what they make is not used by anyone, and thus does not form a value conversion. The business requirements collected through commercialization are all real, so its open source kernel must also evolve in this direction. Failure to evolve in this direction will inevitably lead to architectural splits on both sides, increasing the team's maintenance costs. - Finally, the closed loop of open source and commercialization can promote better development of both parties. If the open-source kernel often has various problems, would you believe that its commercial product is good enough? **The third stage is systematization and standardization.** First, systematization is the basis of open-source solutions. Alibaba's open-source projects are mostly born out of internal e-commerce scenario practices. For example, Higress is used to connect Ant Group's gateways; Nacos carries services with millions of instances and tens of millions of connections; Sentinel provides degradation and throttling capabilities for high availability during major promotions; and Seata ensures transaction data consistency. This set of systematized open-source solutions is designed based on the best practices of Alibaba's e-commerce ecosystem. Second, standardization is another important feature. Taking OpenSergo as an example, it is both a standard and an implementation. In the past few years, the number of domestic open-source projects has exploded. However, the capabilities of various open-source products vary greatly, and many compatibility issues arise when integrating with each other. Therefore, open-source projects like OpenSergo can define some standardized capabilities and interfaces and provide some implementations, which will greatly help the development of the entire open-source ecosystem.",(0,o.kt)("br",null),"### Latest Developments in the Seata Community #### Introduction to the Seata Community ![Community Introduction](/img/blog/\u793e\u533a\u7b80\u4ecb.jpg) **At present, Seata has open-sourced 4 transaction modes, including AT, TCC, Saga, and XA, and is actively exploring other viable transaction solutions.** Seata has integrated with more than 10 mainstream RPC frameworks and relational databases, and has integrated or been integrated relationships with more than 20 communities. In addition, we are also exploring languages other than Java in the multi-language system, such as Golang, PHP, Python, and JS. Seata has been applied to business systems by thousands of customers. Seata applications have become more mature, with successful cooperation with the community in the financial business scenarios of CITIC Bank and Everbright Bank, and successfully adopted into core accounting systems. The landing of microservices systems in financial scenarios is very stringent, which also marks a new level of maturity for Seata's kernel.",(0,o.kt)("br",null),"#### Seata Ecosystem Expansion ![Ecosystem Expansion](/img/blog/\u6269\u5c55\u751f\u6001.jpg) **Seata adopts a microkernel and plugin architecture design, exposing rich extension points in APIs, registry configuration centers, storage modes, lock control, SQL parsers, load balancing, transport, protocol encoding and decoding, observability, and more.** This allows businesses to easily perform flexible extensions and select technical components.",(0,o.kt)("br",null),"#### Seata Application Cases ![Application Cases](/img/blog/\u5e94\u7528\u6848\u4f8b.jpg) **Case 1: China Aviation Information's Air Travel Project** The China Aviation Information Air Travel project introduced Seata in the 0.2 version to solve the data consistency problem of ticket and coupon business, greatly improving development efficiency, reducing asset losses caused by data inconsistency, and enhancing user interaction experience. **Case 2: Didi Chuxing's Two-Wheeler Business Unit** Didi Chuxing's Two-Wheeler Business Unit introduced Seata in version 0.6.1, solving the data consistency problem of business processes such as blue bicycles, electric vehicles, and assets, optimizing the user experience, and reducing asset loss. **Case 3: Meituan's Infrastructure** Meituan's infrastructure team developed the internal distributed transaction solution Swan based on the open-source Seata project, which is used to solve distributed transaction problems within Meituan's various businesses. **Case 4: Hema Town** Hema Town uses Seata to control the flower-stealing process in game interactions, significantly shortening the development cycle from 20 days to 5 days, effectively reducing development costs.",(0,o.kt)("br",null),"#### Evolution of Seata Transaction Modes ![Mode Evolution](/img/blog/\u6a21\u5f0f\u6f14\u8fdb.jpg)",(0,o.kt)("br",null),"#### Current Progress of Seata - Support for Oracle and PostgreSQL multi-primary keys. - Support for Dubbo3. - Support for Spring Boot3. - Support for JDK 17. - Support for ARM64 images. - Support for multiple registration models. - Extended support for various SQL syntaxes. - Support for GraalVM Native Image. - Support for Redis lua storage mode.",(0,o.kt)("br",null),"### Seata 2.x Development Planning ![Development Planning](/img/blog/\u53d1\u5c55\u89c4\u5212.jpg) Mainly includes the following aspects: - **Storage/Protocol/Features** Explore storage and computing separation in Raft cluster mode; better experience, unify the current 4 transaction mode APIs; compatible with GTS protocol; support Saga annotations; support distributed lock control; support data perspective insight and governance. - **Ecosystem** Support more databases, more service frameworks, while exploring support for the domestic trust creation ecosystem; support the MQ ecosystem; further enhance APM support. - **Solutions** In addition to supporting microservices ecosystems, explore multi-cloud solutions; closer to cloud-native solutions; add security and traffic protection capabilities; achieve self-convergence of core components in the architecture. - **Multi-Language Ecosystem** Java is the most mature in the multi-language ecosystem, continue to improve other supported programming languages, while exploring Transaction Mesh solutions that are independent of languages. - **R&D Efficiency/Experience** Improve test coverage, prioritize quality, compatibility, and stability; restructure the official website's documentation to improve the hit rate of document searches; simplify operations and deployment on the experience side, achieve one-click installation and metadata simplification; console supports transaction control and online analysis capabilities.",(0,o.kt)("p",null,"In one sentence, the 2.x plan is summarized as: ",(0,o.kt)("strong",{parentName:"p"},"Bigger scenarios, bigger ecosystems, from usable to user-friendly.")),(0,o.kt)("br",null),"### Contact Information for the Seata Community ![Contact Information](/img/blog/\u8054\u7cfb\u65b9\u5f0f.jpg)")}p.isMDXComponent=!0},75147:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u4e8b\u52a1\u903b\u8f91\u6a21\u578b-bd13bfb9738e5aca63823d268e543280.jpg"},43743:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u4ea7\u54c1\u77e9\u9635-911645846cd62c27fb3e2aaef802b52e.jpg"},25028:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u5206\u5e03\u5f0f\u4e8b\u52a1\u6027\u80fd-379ce638304757417a8ed74fe07fc69c.jpg"},63054:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u5206\u5e03\u5f0f\u4e8b\u52a1\u6f14\u8fdb-cd118286fd5a0add7ecf5775e381a1f5.jpg"}}]);