(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{190:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var i=a(0),o=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),h=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=h(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,n=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=h(a),u=i,d=l["".concat(n,".").concat(u)]||l[u]||b[u]||r;return a?o.a.createElement(d,c(c({ref:t},p),{},{components:a})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,n[1]=c;for(var p=2;p<r;p++)n[p]=a[p];return o.a.createElement.apply(null,n)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return h}));var i=a(3),o=a(7),r=(a(0),a(190)),n={title:"Wechaty Puppet Service",sidebar_label:"Service"},c={unversionedId:"specifications/service",id:"specifications/service",isDocsHomePage:!1,title:"Wechaty Puppet Service",description:"Recently, the Wechaty community has grown fast, we have more and more multi-language Wechaty (Python, Go, .NET, Java, PHP, Scala, etc) and puppet service providers (WXWork, Donut, Rock, PadLocal, etc).",source:"@site/docs/specifications/service.md",slug:"/specifications/service",permalink:"/docs/specifications/service",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specifications/service.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1612367599,sidebar_label:"Service",sidebar:"docs",previous:{title:"Wechaty Puppet",permalink:"/docs/specifications/puppet"},next:{title:"Wechaty Puppet Service Token",permalink:"/docs/specifications/token"}},s=[{value:"The Discovery",id:"the-discovery",children:[]},{value:"The Registration",id:"the-registration",children:[{value:"1. Registration the Token with Docker",id:"1-registration-the-token-with-docker",children:[]},{value:"2. Register the Token with Protocol",id:"2-register-the-token-with-protocol",children:[]}]},{value:"Registration Process Discussion",id:"registration-process-discussion",children:[]},{value:"Related Resources",id:"related-resources",children:[]}],p={toc:s};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Recently, the Wechaty community has grown fast, we have more and more multi-language Wechaty (Python, Go, .NET, Java, PHP, Scala, etc) and puppet service providers (WXWork, Donut, Rock, PadLocal, etc)."),Object(r.b)("p",null,"To make our ecosystem keep clean and healthy, I'd like to write this post as a draft specification for the Wechaty Puppet Service Registration & Discovery, which is the core system for support our ",Object(r.b)("strong",{parentName:"p"},"token"),"."),Object(r.b)("h2",{id:"the-discovery"},"The Discovery"),Object(r.b)("p",null,"When a Wechaty user is using a ",Object(r.b)("strong",{parentName:"p"},"token")," with Wechaty, the Wechaty will use that ",Object(r.b)("strong",{parentName:"p"},"token")," to connect to the specific puppet service."),Object(r.b)("p",null,"The mechanism behind is the ",Object(r.b)("strong",{parentName:"p"},"Puppet Service Discovery"),", which can resolve the IP of gGRPC service by the token, is implemented by the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"construct a URL: ",Object(r.b)("inlineCode",{parentName:"p"},"https://api.chatie.io/v0/hosties/${TOKEN}"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"make a GET request to the URL, and expect to get the following json object:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'{"ip":"1.2.3.4","port":1234}\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"the above ",Object(r.b)("inlineCode",{parentName:"p"},"1.2.3.4")," will be the gRPC server, and the port ",Object(r.b)("inlineCode",{parentName:"p"},"1234")," is the gRPC port.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"if the token is not registered, then the GET request will get a HTTP 404 with the below object:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'{"ip":"0.0.0.0","port":0}\n')))),Object(r.b)("p",null,"That's the Wechaty Puppet Service Discovery."),Object(r.b)("p",null,"For the Wechaty SDK, we should support the following environment variables so that the users can switch between different languages without any changes:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__"))),Object(r.b)("h2",{id:"the-registration"},"The Registration"),Object(r.b)("p",null,"In order to publish a Wechaty Puppet Service Token to the Wechaty community, we need to register this token by following the Wechaty Puppet Service Registration process."),Object(r.b)("p",null,"There at least have two way to do the registration to publish tokens:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"By running a Wechaty docker command"),Object(r.b)("li",{parentName:"ol"},"By following the Wechaty Puppet Service Registration Protocol")),Object(r.b)("h3",{id:"1-registration-the-token-with-docker"},"1. Registration the Token with Docker"),Object(r.b)("p",null,"We have an issue describing the steps in details:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1986"},"How to create your own Wechaty Puppet Service Token with the Web Protocol #1986")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1985"},"Using your Puppet PadPlus token with Python, Java, and Go Wechaty #1985"))),Object(r.b)("p",null,"Through the above steps, you can publish a token with any existing wechaty puppets."),Object(r.b)("p",null,"Related issues:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/python-wechaty/issues/58"},"https://github.com/wechaty/python-wechaty/issues/58")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1984"},"https://github.com/wechaty/wechaty/issues/1984")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1153"},"https://github.com/wechaty/wechaty/issues/1153"))),Object(r.b)("h3",{id:"2-register-the-token-with-protocol"},"2. Register the Token with Protocol"),Object(r.b)("p",null,"The current process can be described as the following two steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"puppet server")," sends a WebSocket connection to ",Object(r.b)("inlineCode",{parentName:"li"},"wss://api.chatie.io/v0/websocket"),", with an HTTP authorization header  ",Object(r.b)("inlineCode",{parentName:"li"},"Token rock_token_here"),". After the connection has been established, the ",Object(r.b)("inlineCode",{parentName:"li"},"api.chatie.io")," service will register your token online. (refer to the source code at ",Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L236"},"https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L236"),")"),Object(r.b)("li",{parentName:"ol"},"When a puppet service discovery query has been sent to ",Object(r.b)("inlineCode",{parentName:"li"},"api.chatie.io")," like ",Object(r.b)("inlineCode",{parentName:"li"},"https://api.chatie.io/v0/hosties/puppet_rock_token")," has been visited, the ",Object(r.b)("inlineCode",{parentName:"li"},"api.chatie.io")," will send a JSONRPC to you via the WebSocket connection, with the method name ",Object(r.b)("inlineCode",{parentName:"li"},"hostieGrpcPort"),", and you need to return your service port so that it can be returned to the user. (refer to the source code at ",Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L363"},"https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L363"),")")),Object(r.b)("p",null,"You can learn more about the registration protocol via this discussion: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-service/issues/98"},"Support rock puppet service provider. #98")),Object(r.b)("h2",{id:"registration-process-discussion"},"Registration Process Discussion"),Object(r.b)("p",null,"The current process can be described as the following two steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"Wechaty Puppet Server")," sends a WebSocket connection to ",Object(r.b)("inlineCode",{parentName:"li"},"wss://api.chatie.io/v0/websocket"),", with an HTTP authorization header  ",Object(r.b)("inlineCode",{parentName:"li"},"Token puppet_servcie_token_here"),". After the connection has been established, the ",Object(r.b)("inlineCode",{parentName:"li"},"api.chatie.io")," service will register your token online. (refer to the source code at ",Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L236"},"https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L236"),")"),Object(r.b)("li",{parentName:"ol"},"When a Wechaty Puppet Service Discovery Query has been sent to ",Object(r.b)("inlineCode",{parentName:"li"},"api.chatie.io")," like ",Object(r.b)("inlineCode",{parentName:"li"},"https://api.chatie.io/v0/hosties/puppet_service_token")," has been visited, the ",Object(r.b)("inlineCode",{parentName:"li"},"api.chatie.io")," will send a JSONRPC to you via the WebSocket connection, with the method name ",Object(r.b)("inlineCode",{parentName:"li"},"hostieGrpcPort"),", and you need to return your service port so that it can be returned to the user. (refer to the source code at ",Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L363"},"https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L363"),")")),Object(r.b)("p",null,"The above two steps are the current way we are working with our service. So please feel free to read the source code from the links above, then I believe you can register multiple rock puppet token to our service with the same IP and Port without any problem."),Object(r.b)("p",null,"See: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-service/issues/98"},"https://github.com/wechaty/wechaty-puppet-service/issues/98")),Object(r.b)("h2",{id:"related-resources"},"Related Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Wechaty Puppet Service gRPC: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/grpc"},"https://github.com/wechaty/grpc"))))}h.isMDXComponent=!0}}]);