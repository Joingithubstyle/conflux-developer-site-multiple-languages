(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(178)),i={},c={unversionedId:"conflux-rust/core/src/pos/config/management/operational/README",id:"conflux-rust/core/src/pos/config/management/operational/README",isDocsHomePage:!1,title:"Diem Operational Tool",description:"The diem-operational-tool provides a tool for operators to perform maintenance functions",source:"@site/docs/conflux-rust/core/src/pos/config/management/operational/README.md",sourceDirName:"conflux-rust/core/src/pos/config/management/operational",slug:"/conflux-rust/core/src/pos/config/management/operational/README",permalink:"/conflux-rust/core/src/pos/config/management/operational/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-rust/core/src/pos/config/management/operational/README.md",version:"current",frontMatter:{}},l=[{value:"Important Notes",id:"important-notes",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"diem-operational-tool")," provides a tool for operators to perform maintenance functions\non the Diem blockchain post-genesis.  The functionality of the tool is\ndictated by the organization of nodes within the system:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Validator owners (OW) that have accounts on the blockchain. These accounts contain\na validator configuration and specify a validator operator."),Object(a.b)("li",{parentName:"ul"},"Validator operators (OP) that have accounts on the blockchain. These\naccounts have the ability to update validator configuration.")),Object(a.b)("h3",{id:"important-notes"},"Important Notes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A namespace in Vault is represented as a subdirectory for secrets and a\nprefix followed by ",Object(a.b)("inlineCode",{parentName:"li"},"__")," for transit, e.g., ",Object(a.b)("inlineCode",{parentName:"li"},"namespace__"),"."),Object(a.b)("li",{parentName:"ul"},"A namespace in GitHub is represented by a subdirectory"),Object(a.b)("li",{parentName:"ul"},"The GitHub repository and repository owner translate into the following url:\n",Object(a.b)("inlineCode",{parentName:"li"},"https://github.org/REPOSITORY_OWNER/REPOSITORY")),Object(a.b)("li",{parentName:"ul"},"The owner-address is intentionally set as all 0s as it is unused at this\npoint in time.")))}u.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);