"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[251],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2748:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],u={},a=void 0,s={unversionedId:"test_execution",id:"test_execution",title:"test_execution",description:"Local Test Execution",source:"@site/docs/test_execution.md",sourceDirName:".",slug:"/test_execution",permalink:"/test_execution",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test_execution.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"reporting_alternatives",permalink:"/reporting_alternatives"},next:{title:"testcase_writing_styles",permalink:"/testcase_writing_styles"}},l={},p=[{value:"Local Test Execution",id:"local-test-execution",level:2},{value:"Execution on Docker",id:"execution-on-docker",level:2},{value:"Execution on CI Systems",id:"execution-on-ci-systems",level:2},{value:"Execution on Kubernetes",id:"execution-on-kubernetes",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-execution"},"Test Execution"),(0,i.kt)("h2",{id:"local-test-execution"},"Local Test Execution"),(0,i.kt)("h2",{id:"execution-on-docker"},"Execution on Docker"),(0,i.kt)("h2",{id:"execution-on-ci-systems"},"Execution on CI Systems"),(0,i.kt)("h2",{id:"execution-on-kubernetes"},"Execution on Kubernetes"))}d.isMDXComponent=!0}}]);