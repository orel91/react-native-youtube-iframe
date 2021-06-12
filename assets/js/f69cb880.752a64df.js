(self.webpackChunkreact_native_youtube_iframe=self.webpackChunkreact_native_youtube_iframe||[]).push([[615],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5141:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return l}});var n=r(4034),o=r(9973),a=(r(7294),r(3905)),i={id:"self-host-remote-source",title:"Self Host Static HTML page that handles the player"},u={unversionedId:"self-host-remote-source",id:"self-host-remote-source",isDocsHomePage:!1,title:"Self Host Static HTML page that handles the player",description:"Prior to v2.0.0, this package would generate HTML required for the youtube iframe and serve it as raw HTML string.",source:"@site/../docs/self_host.mdx",sourceDirName:".",slug:"/self-host-remote-source",permalink:"/react-native-youtube-iframe/self-host-remote-source",version:"current",frontMatter:{id:"self-host-remote-source",title:"Self Host Static HTML page that handles the player"},sidebar:"sideBar",previous:{title:"Module Methods",permalink:"/react-native-youtube-iframe/module-methods"},next:{title:"Google Play Store",permalink:"/react-native-youtube-iframe/play-store-compatibility"}},s=[],c={toc:s};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Prior to ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.0.0"),", this package would generate HTML required for the youtube iframe and serve it as raw HTML string.\nThis meant that the base URL would be ",(0,a.kt)("inlineCode",{parentName:"p"},"'about:blank'"),' and leading to a number of videos showing a "embed not allowed" error message.'),(0,a.kt)("p",null,"To mitigate this - the webpage had to be uploaded on to a trustable remote source (github pages).\nThe source code of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LonelyCpp/react-native-youtube-iframe/blob/master/iframe.html"},"static HTML")," is minified and uploaded as a part of the documentation website ",(0,a.kt)("a",{parentName:"p",href:"https://lonelycpp.github.io/react-native-youtube-iframe/iframe.html"},"here"),"."),(0,a.kt)("p",null,"For whatever reason, if you would like to host this page on your own web server - the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LonelyCpp/react-native-youtube-iframe/blob/master/iframe.html"},"static HTML")," source can be hosted as it is. ",(0,a.kt)("em",{parentName:"p"},"(not recommended since manual update will be required)")))}l.isMDXComponent=!0}}]);