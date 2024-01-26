"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[72253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Seata New Feature Support -- Undo_Log Compression",author:"chd",keywords:["Seata","undo_log","compress"],date:"2021/05/07"},s="Seata New Feature Support -- Undo_Log Compression",i={permalink:"/blog/seata-feature-undo-log-compress",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-feature-undo-log-compress.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-feature-undo-log-compress.md",title:"Seata New Feature Support -- Undo_Log Compression",description:"Current Situation & Pain Points",date:"2021-05-07T00:00:00.000Z",formattedDate:"May 7, 2021",tags:[],readingTime:3.785,hasTruncateMarker:!1,authors:[{name:"chd"}],frontMatter:{title:"Seata New Feature Support -- Undo_Log Compression",author:"chd",keywords:["Seata","undo_log","compress"],date:"2021/05/07"},prevItem:{title:"Analysis of Seata's Distributed UUID Generator Based on Improved Snowflake Algorithm",permalink:"/blog/seata-analysis-UUID-generator"},nextItem:{title:"Seata Deadlock Issue Caused by ConcurrentHashMap",permalink:"/blog/seata-dsproxy-deadlock"}},l={authorsImageUrls:[void 0]},p=[{value:"Current Situation &amp; Pain Points",id:"current-situation--pain-points",level:2},{value:"Brainstorming",id:"brainstorming",level:2},{value:"Feasibility Analysis",id:"feasibility-analysis",level:2},{value:"Compression Ratio Test:",id:"compression-ratio-test",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Implementation Approach",id:"implementation-approach",level:4},{value:"Partial Code",id:"partial-code",level:4},{value:"peroration",id:"peroration",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"current-situation--pain-points"},"Current Situation & Pain Points"),(0,a.kt)("p",null,"For Seata, it records the before and after data of DML operations to perform possible rollback operations, and stores this data in a blob field in the database. For batch operations such as insert, update, delete, etc., the number of affected rows may be significant, concatenated into a large field inserted into the database, which may lead to the following issues:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Exceeding the maximum write limit for a single database operation (such as the ",(0,a.kt)("inlineCode",{parentName:"li"},"max_allowed_package")," parameter in MySQL)."),(0,a.kt)("li",{parentName:"ol"},"Significant network IO and database disk IO overhead due to a large amount of data.")),(0,a.kt)("h2",{id:"brainstorming"},"Brainstorming"),(0,a.kt)("p",null,"For the first issue, the ",(0,a.kt)("inlineCode",{parentName:"p"},"max_allowed_package"),' parameter limit can be increased based on the actual situation of the business to avoid the "query is too large" problem. For the second issue, increasing bandwidth and using high-performance SSD as the database storage medium can help.'),(0,a.kt)("p",null,"The above solutions involve external or costly measures. Is there a framework-level solution to address the pain points mentioned above?"),(0,a.kt)("p",null,"Considering the root cause of the pain points mentioned above, the problem lies in the generation of excessively large data fields. Therefore, if the corresponding data can be compressed at the business level before data transmission and storage, theoretically, it can solve the problems mentioned above."),(0,a.kt)("h2",{id:"feasibility-analysis"},"Feasibility Analysis"),(0,a.kt)("p",null,"Combining the brainstorming above, in practical development, when large batch operations are required, they are often scheduled during periods of relatively low user activity and low concurrency. At such times, CPU and memory resources can be relatively more utilized to quickly complete the corresponding operations. Therefore, by consuming CPU and memory resources to compress rollback data, the size of data transmission and storage can be reduced."),(0,a.kt)("p",null,"At this point, two things need to be demonstrated:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"After compression, it can reduce the pressure on network IO and database disk IO. This can be measured by the total time taken for data compression + storage in the database."),(0,a.kt)("li",{parentName:"ol"},"After compression, the efficiency of compression compared to the original data size. This can be measured by the data size before and after compression.")),(0,a.kt)("p",null,"Testing the time spent on compressing network usage:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/22959373/95567752-f55ddf80-0a55-11eb-8092-1f1d99855bdd.png",alt:"image"})),(0,a.kt)("h2",{id:"compression-ratio-test"},"Compression Ratio Test:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/22959373/95567834-0ad30980-0a56-11eb-9d7e-48b74babbea4.png",alt:"image"})),(0,a.kt)("p",null,"The test results clearly indicate that using gzip or zip compression can significantly reduce the pressure on the database and network transmission. At the same time, it can substantially decrease the size of the stored data."),(0,a.kt)("h3",{id:"implementation"},"Implementation"),(0,a.kt)("h4",{id:"implementation-approach"},"Implementation Approach"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/22959373/116281711-8f039900-a7bc-11eb-91f8-82afdbb9f932.png",alt:"Compression"})),(0,a.kt)("h4",{id:"partial-code"},"Partial Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Whether to enable undo_log compression, default is true\nseata.client.undo.compress.enable=true\n\n# Compressor type, default is zip, generally recommended to be zip\nseata.client.undo.compress.type=zip\n\n# Compression threshold for enabling compression, default is 64k\nseata.client.undo.compress.threshold=64k\n")),(0,a.kt)("p",null,"Determining Whether the Undo_Log Compression Feature is Enabled and if the Compression Threshold is Reached"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"protected boolean needCompress(byte[] undoLogContent) {\n// 1. Check whether undo_log compression is enabled (1.4.2 Enabled by Default).\n// 2. Check whether the compression threshold has been reached (64k by default).\n// If both return requirements are met, the corresponding undoLogContent is compressed\n    return ROLLBACK_INFO_COMPRESS_ENABLE \n        && undoLogContent.length > ROLLBACK_INFO_COMPRESS_THRESHOLD;\n}\n")),(0,a.kt)("p",null,"Initiating Compression for Undo_Log After Determining the Need"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// If you need to compress, compress undo_log\nif (needCompress(undoLogContent)) {\n    // Gets the compression type, default zip\n    compressorType = ROLLBACK_INFO_COMPRESS_TYPE;\n    //Get the corresponding compressor and compress it\n    undoLogContent = CompressorFactory.getCompressor(compressorType.getCode()).compress(undoLogContent);\n}\n// else does not need to compress and does not need to do anything\n")),(0,a.kt)("p",null,"Save the compression type synchronously to the database for use when rolling back:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"protected String buildContext(String serializer, CompressorType compressorType) {\n    Map<String, String> map = new HashMap<>();\n    map.put(UndoLogConstants.SERIALIZER_KEY, serializer);\n    // Save the compression type to the database\n    map.put(UndoLogConstants.COMPRESSOR_TYPE_KEY, compressorType.name());\n    return CollectionUtils.encodeMap(map);\n}\n")),(0,a.kt)("p",null,"Decompress the corresponding information when rolling back:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"protected byte[] getRollbackInfo(ResultSet rs) throws SQLException  {\n    // Gets a byte array of rollback information saved to the database\n    byte[] rollbackInfo = rs.getBytes(ClientTableColumnsName.UNDO_LOG_ROLLBACK_INFO);\n    // Gets the compression type\n    // getOrDefault uses the default value CompressorType.NONE to directly upgrade 1.4.2+ to compatible versions earlier than 1.4.2\n    String rollbackInfoContext = rs.getString(ClientTableColumnsName.UNDO_LOG_CONTEXT);\n    Map<String, String> context = CollectionUtils.decodeMap(rollbackInfoContext);\n    CompressorType compressorType = CompressorType.getByName(context.getOrDefault(UndoLogConstants.COMPRESSOR_TYPE_KEY,\n    CompressorType.NONE.name()));\n    // Get the corresponding compressor and uncompress it\n    return CompressorFactory.getCompressor(compressorType.getCode())\n        .decompress(rollbackInfo);\n}\n")),(0,a.kt)("h3",{id:"peroration"},"peroration"),(0,a.kt)("p",null,"By compressing undo_log, Seata can further improve its performance when processing large amounts of data at the framework level. At the same time, it also provides the corresponding switch and relatively reasonable default value, which is convenient for users to use out of the box, but also convenient for users to adjust according to actual needs, so that the corresponding function is more suitable for the actual use scenario."))}u.isMDXComponent=!0}}]);