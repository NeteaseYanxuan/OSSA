/*! For license information please see 6337.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[6337],{"9802":function(e,t,r){"use strict";r.d(t,{"Ee":function(){return y},"xv":function(){return x},"G7":function(){return v}});var a=r(9901),n=r(9641),c=r(3114),o=r(8193),s=r(3341),l=r(5076),i=r(7666),m=r(10),u=r(1195),p=r(7629);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,u.Z)(e);if(t){var n=(0,u.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,m.Z)(this,r)}}a.createElement;var d="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||h.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var c=e.ref.current,o=n[r],s=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,o),t===d){if("scrollTop"===r)return void(c.mpScrollTop=o);if("scrollLeft"===r)return void(c.mpScrollLeft=o);if("scrollIntoView"===r)return void(c.mpScrollIntoView=o)}if("function"==typeof o&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),i=o;return t===d&&"scroll"===l&&(i=function fn(e){e instanceof CustomEvent&&o.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,i]),c.addEventListener(l,i)}return"string"==typeof o||"number"==typeof o?(c.setAttribute(r,o),void(c[r]=o)):"boolean"==typeof o?o?(c[r]=!0,c.setAttribute(r,o)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=o)}if("string"==typeof o)return void c.setAttribute(r,o);if(!o)return void c.removeAttribute(r);if(a)if("string"==typeof s)c.style.cssText="";else for(var m in s)updateStyle(c,m,"");for(var u in o)updateStyle(c,u,o[u])}else c.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),o=[];return a.forEach((function(e){c.indexOf(e)>-1?(o.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&o.push(e)})),(o=[].concat((0,p.Z)(o),(0,p.Z)(c))).join(" ")}(c,a,n):o}var f=function reactifyWebComponent(e){var t=function(t){(0,i.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,s.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,a.createRef)(),t}return(0,l.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,o.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,c.Z)(t,2),a=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(a,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,c={"ref":this.ref};return n&&(c.dangerouslySetInnerHTML=n),(0,a.createElement)(e,c,r)}}]),Index}(a.Component);return a.forwardRef((function(e,r){return a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))},v=(f("taro-cover-image-core"),f("taro-cover-view-core"),f("taro-match-media-core"),f("taro-movable-area-core"),f("taro-movable-view-core"),f("taro-page-container-core"),f("taro-root-portal-core"),f("taro-scroll-view-core"),f("taro-share-element-core"),f("taro-swiper-core"),f("taro-swiper-item-core"),f("taro-view-core")),x=(f("taro-icon-core"),f("taro-progress-core"),f("taro-rich-text-core"),f("taro-text-core")),y=(f("taro-button-core"),f("taro-checkbox-core"),f("taro-checkbox-group-core"),f("taro-editor-core"),f("taro-form-core"),f("taro-keyboard-accessory-core"),f("taro-label-core"),f("taro-picker-core"),f("taro-picker-view-core"),f("taro-picker-view-column-core"),f("taro-radio-core"),f("taro-radio-group-core"),f("taro-slider-core"),f("taro-switch-core"),f("taro-textarea-core"),f("taro-functional-page-navigator-core"),f("taro-navigator-core"),f("taro-audio-core"),f("taro-camera-core"),f("taro-image-core"));f("taro-live-player-core"),f("taro-video-core"),f("taro-voip-room-core"),f("taro-map-core"),f("taro-canvas-core"),f("taro-web-view-core"),f("taro-ad-core"),f("taro-ad-custom-core"),f("taro-official-account-core"),f("taro-open-data-core"),f("taro-navigation-bar-core"),f("taro-page-meta-core"),f("taro-custom-wrapper-core")},"4353":function(e,t,r){"use strict";r.d(t,{"tq":function(){return c},"t3":function(){return o},"G7":function(){return s},"xv":function(){return l},"zx":function(){return i},"gx":function(){return m},"Ee":function(){return u},"gO":function(){return p},"fV":function(){return d}});var a=r(9901),n=r(7924),c=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core"),(0,n.Z)("taro-movable-view-core"),(0,n.Z)("taro-page-container-core"),(0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core"),(0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),o=(0,n.Z)("taro-swiper-item-core"),s=(0,n.Z)("taro-view-core"),l=((0,n.Z)("taro-icon-core"),(0,n.Z)("taro-progress-core"),(0,n.Z)("taro-rich-text-core"),(0,n.Z)("taro-text-core")),i=(0,n.Z)("taro-button-core"),m=((0,n.Z)("taro-checkbox-core"),(0,n.Z)("taro-checkbox-group-core"),(0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core"),(0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core"),(0,n.Z)("taro-picker-core"),(0,n.Z)("taro-picker-view-core"),(0,n.Z)("taro-picker-view-column-core"),(0,n.Z)("taro-radio-core"),(0,n.Z)("taro-radio-group-core"),(0,n.Z)("taro-slider-core"),(0,n.Z)("taro-switch-core"),(0,n.Z)("taro-textarea-core")),u=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core"),(0,n.Z)("taro-image-core")),p=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-live-pusher-core"),(0,n.Z)("taro-video-core"),(0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-web-view-core"),(0,n.Z)("taro-page-meta-core"),a.Fragment),d=(0,n.Z)("taro-custom-wrapper-core")},"7924":function(e,t,r){"use strict";var a=r(9641),n=r(3114),c=r(8193),o=r(3341),s=r(5076),l=r(7666),i=r(10),m=r(1195),u=r(7629),p=r(9901);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,m.Z)(e);if(t){var n=(0,m.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,i.Z)(this,r)}}p.createElement;var d="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||h.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var c=e.ref.current,o=n[r],s=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,o),t===d){if("scrollTop"===r)return void(c.mpScrollTop=o);if("scrollLeft"===r)return void(c.mpScrollLeft=o);if("scrollIntoView"===r)return void(c.mpScrollIntoView=o)}if("function"==typeof o&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),i=o;return t===d&&"scroll"===l&&(i=function fn(e){e instanceof CustomEvent&&o.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,i]),c.addEventListener(l,i)}return"string"==typeof o||"number"==typeof o?(c.setAttribute(r,o),void(c[r]=o)):"boolean"==typeof o?o?(c[r]=!0,c.setAttribute(r,o)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=o)}if("string"==typeof o)return void c.setAttribute(r,o);if(!o)return void c.removeAttribute(r);if(a)if("string"==typeof s)c.style.cssText="";else for(var m in s)updateStyle(c,m,"");for(var p in o)updateStyle(c,p,o[p])}else c.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),o=[];return a.forEach((function(e){c.indexOf(e)>-1?(o.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&o.push(e)})),(o=[].concat((0,u.Z)(o),(0,u.Z)(c))).join(" ")}(c,a,n):o}t.Z=function reactifyWebComponent(e){var t=function(t){(0,l.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,o.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,p.createRef)(),t}return(0,s.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,n.Z)(t,2),a=r[0],c=r[1];e.ref.current&&e.ref.current.removeEventListener(a,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,a=t.dangerouslySetInnerHTML,n={"ref":this.ref};return a&&(n.dangerouslySetInnerHTML=a),(0,p.createElement)(e,n,r)}}]),Index}(p.Component);return p.forwardRef((function(e,r){return p.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"2002":function(e,t,r){"use strict";r.d(t,{"ZT":function(){return setNavigationBarTitle}});var a=r(9830),n=r(8081),c=r(9359);(0,n.tA)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=(0,n.jc)(e);if(!t.flag){var r={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var o=e.title,s=e.success,l=e.fail,i=e.complete,m=new c.N({"name":"setNavigationBarTitle","success":s,"fail":l,"complete":i});return o&&"string"==typeof o?((0,a.Td)(o),m.success()):m.fail({"errMsg":(0,n.Hl)({"para":"title","correct":"String","wrong":o})})}(0,n.tA)("hideNavigationBarLoading"),(0,n.tA)("hideHomeButton")},"9359":function(e,t,r){"use strict";r.d(t,{"N":function(){return c}});var a=r(3341),n=r(5076),c=function(){function MethodHandler(e){var t=e.name,r=e.success,n=e.fail,c=e.complete;(0,a.Z)(this,MethodHandler),this.methodName=t,this.__success=r,this.__fail=n,this.__complete=c}return(0,n.Z)(MethodHandler,[{"key":"success","value":function success(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.resolve.bind(Promise);return e.errMsg||(e.errMsg="".concat(this.methodName,":ok")),"function"==typeof this.__success&&this.__success(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}},{"key":"fail","value":function fail(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.reject.bind(Promise);return e.errMsg?e.errMsg="".concat(this.methodName,":fail ").concat(e.errMsg):e.errMsg="".concat(this.methodName,":fail"),console.error(e.errMsg),"function"==typeof this.__fail&&this.__fail(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}}]),MethodHandler}()},"6337":function(e,t,r){"use strict";r.r(t),r.d(t,{"default":function(){return Index}});var a=r(828),n=r(3114),c=r(9901),o=r(2002),s=r(9802),l=r(1601),i=r(8120),m=r(7929),u=r(1250),p={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["type","default | primary | special1 | special2，可选","string","default,特殊按钮用于sku"]},{"list":["shape","round | square，可选","string","square(默认有4px圆角)"]},{"list":["icon","icon名称，参考OsIcon，可选","string","-"]},{"list":["size","min | small | normal | large | block，可选","string","normal,特殊按钮不生效"]},{"list":["color","文字颜色，可选","string","-"]},{"list":["bgColor","背景色，可选","string","-"]},{"list":["bdColor","描边色，可选","string","-"]},{"list":["startBgColor","填充渐变开始色，可选","string","-（仅对primary按钮生效且与endBgColor配合使用）"]},{"list":["endBgColor","填充渐变结束色，可选","string","-（仅对primary按钮生效且与startBgColor配合使用）"]},{"list":["isDisabled","是否禁用，可选","boolean","false"]},{"list":["customStyle","自定义样式，可选","object","-"]},{"list":["className","自定义类名，可选","string","-"]}]},d={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onClick","点击时触发","event对象"]}]};var h="Button 按钮";function Index(e){var t=(0,c.useState)(p),r=(0,n.Z)(t,1)[0],f=(0,c.useState)(d),v=(0,n.Z)(f,1)[0];return(0,c.useEffect)((function(){(0,o.ZT)({"title":h})}),[]),(0,u.jsxs)(s.G7,{"className":"demo-button","children":[(0,u.jsx)(i.Z,{"title":h}),(0,u.jsxs)(l.Z,{"title":"类型","hideMb":!0,"children":[(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"onClick":function onClick(e){!function _onClick(e){console.log(e),console.log("你点击了线框按钮！")}(e)},"type":"default","children":"线框按钮"})}),(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"primary","onClick":function onClick(){return function onClick2(){console.log("你点击了色块按钮!")}()},"children":"色块按钮"})})]}),(0,u.jsxs)(l.Z,{"hideMb":!0,"children":[(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"special1","children":"特殊按钮1"})}),(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"special2","children":"特殊按钮2"})})]}),(0,u.jsxs)(l.Z,{"title":"禁用态","hideMb":!0,"children":[(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"default","disabled":!0,"children":"线框按钮"})}),(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"primary","disabled":!0,"children":"色块按钮"})})]}),(0,u.jsxs)(l.Z,{"title":"按钮形状","hideMb":!0,"children":[(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"default","shape":"square","children":"线框默认"})}),(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"default","shape":"round","children":"线框腰圆"})})]}),(0,u.jsxs)(l.Z,{"hideMb":!0,"children":[(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"primary","shape":"square","children":"色块默认"})}),(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"primary","shape":"round","children":"色块腰圆"})})]}),(0,u.jsxs)(l.Z,{"title":"按钮尺寸","hideMb":!0,"children":[(0,u.jsx)(s.G7,{"className":"button-item--block","children":(0,u.jsx)(a.Z,{"size":"normal","children":"线框normal"})}),(0,u.jsx)(s.G7,{"className":"button-item--block","children":(0,u.jsx)(a.Z,{"size":"small","children":"线框small"})}),(0,u.jsx)(s.G7,{"className":"button-item--block","children":(0,u.jsx)(a.Z,{"size":"min","children":"线框min"})})]}),(0,u.jsxs)(l.Z,{"hideMb":!0,"children":[(0,u.jsx)(s.G7,{"className":"button-item--block","children":(0,u.jsx)(a.Z,{"type":"primary","size":"block","children":"色块block，界面长按钮"})}),(0,u.jsx)(s.G7,{"className":"button-item--block","children":(0,u.jsx)(a.Z,{"type":"primary","size":"large","children":"色块large，弹框按钮"})}),(0,u.jsx)(s.G7,{"className":"button-item--block","children":(0,u.jsx)(a.Z,{"type":"primary","size":"normal","children":"色块normal"})}),(0,u.jsx)(s.G7,{"className":"button-item--block","children":(0,u.jsx)(a.Z,{"type":"primary","size":"small","children":"色块small"})}),(0,u.jsx)(s.G7,{"className":"button-item--block","children":(0,u.jsx)(a.Z,{"type":"primary","size":"min","children":"色块min"})})]}),(0,u.jsxs)(l.Z,{"title":"带Icon","hideMb":!0,"children":[(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"default","icon":"collect","children":"普通按钮"})}),(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"primary","icon":"collect","children":"色块按钮"})}),(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"special1","icon":"collect","children":"特殊按钮1"})}),(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"special2","icon":"collect","children":"特殊按钮2"})}),(0,u.jsx)(s.G7,{"className":"button-item--block","children":(0,u.jsx)(a.Z,{"type":"primary","size":"block","icon":"collect","children":"色块按钮"})})]}),(0,u.jsxs)(l.Z,{"title":"自定义颜色","hideMb":!0,"children":[(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"default","color":"#DD1A21","children":"自定义字体颜色"})}),(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"default","bdColor":"#DD1A21","children":"自定义边框颜色"})}),(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"primary","bgColor":"#DD1A21","children":"自定义背景颜色"})}),(0,u.jsx)(s.G7,{"className":"button-item","children":(0,u.jsx)(a.Z,{"type":"primary","bdColor":"transparent","startBgColor":"#EB767A","endBgColor":"#DD1A21","children":"自定义渐变色"})})]}),(0,u.jsx)(l.Z,{"children":(0,u.jsx)(m.Z,{"list":r})}),(0,u.jsx)(l.Z,{"children":(0,u.jsx)(m.Z,{"list":v})})]})}},"1601":function(e,t,r){"use strict";r.d(t,{"Z":function(){return d}});var a=r(9641),n=r(3341),c=r(5076),o=r(7666),s=r(4756),l=r(9901),i=r(9802),m=r(7608),u=r.n(m),p=r(1250),d=function(e){(0,o.Z)(DemoBlock,e);var t=(0,s.Z)(DemoBlock);function DemoBlock(){return(0,n.Z)(this,DemoBlock),t.apply(this,arguments)}return(0,c.Z)(DemoBlock,[{"key":"render","value":function render(){var e,t,r=["block","block__title","block__subTitle"],n=[(e={},(0,a.Z)(e,"block--hide-padding",this.props.hidePd),(0,a.Z)(e,"block--hide-mb",this.props.hideMb),e),(0,a.Z)({},"block__title--hide-padding",this.props.hidePd)],c=this.props,o=c.customStyle,s=c.className;return(0,p.jsxs)(i.G7,{"className":u()(r[0],n[0],s),"style":o,"children":[(0,p.jsxs)(i.G7,{"className":"block__header","children":[this.props.title&&(0,p.jsx)(i.G7,{"className":u()(r[1],n[1]),"children":this.props.title}),this.props.subTitle&&(0,p.jsx)(i.G7,{"className":u()(r[2]),"children":this.props.subTitle})]}),(0,p.jsx)(i.G7,{"className":u()((t={},(0,a.Z)(t,"block__body",!0),(0,a.Z)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(l.Component)},"8120":function(e,t,r){"use strict";r.d(t,{"Z":function(){return f}});var a=r(7950),n=r(3341),c=r(5076),o=r(7666),s=r(4756),l=r(9901),i=r(1232),m=r(6070),u=r(9802),p=r(7608),d=r.n(p),h=r(1250),f=function(e){(0,o.Z)(DemoHeader,e);var t=(0,s.Z)(DemoHeader);function DemoHeader(){return(0,n.Z)(this,DemoHeader),t.apply(this,arguments)}return(0,c.Z)(DemoHeader,[{"key":"onClick","value":function onClick(){this.props.onClick?this.props.onClick():(0,i.T8)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=m.ZPm.getEnv()!==m.ZPm.ENV_TYPE.WEB?"hide-split-line":"",r=this.props.icon;return(0,h.jsxs)(u.G7,{"className":d()(e[0],t),"children":[m.ZPm.getEnv()===m.ZPm.ENV_TYPE.WEB&&(0,h.jsx)(a.Z,{"type":"detail-home","onClick":this.onClick.bind(this)}),m.ZPm.getEnv()!==m.ZPm.ENV_TYPE.WEB&&r&&(0,h.jsx)(a.Z,{"type":r,"size":44,"customStyle":{"marginRight":m.ZPm.pxTransform(18)}}),(0,h.jsx)(u.G7,{"className":d()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(l.Component)},"7929":function(e,t,r){"use strict";r.d(t,{"Z":function(){return p}});var a=r(3341),n=r(5076),c=r(7666),o=r(4756),s=r(9901),l=r(9802),i=r(7608),m=r.n(i),u=r(1250),p=function(e){(0,c.Z)(DemoTable,e);var t=(0,o.Z)(DemoTable);function DemoTable(){return(0,a.Z)(this,DemoTable),t.apply(this,arguments)}return(0,n.Z)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var r=t.head,a=t.data,n=t.title,c={};r&&r.length&&(c.width=100/r.length+"%");var o={};return a&&a.length&&(o.width=100/a.length+"%"),(0,u.jsxs)(l.G7,{"className":m()(e[0]),"children":[n&&(0,u.jsx)(l.G7,{"className":m()(e[1]),"children":this.props.list.title}),(0,u.jsxs)(l.G7,{"className":m()(e[2]),"children":[r&&r.length?(0,u.jsx)(l.G7,{"className":m()(e[3]),"children":r.map((function(t){return(0,u.jsx)(l.G7,{"style":c,"className":m()(e[4]),"children":t},t)}))}):null,a&&a.length?(0,u.jsx)(l.G7,{"children":a.map((function(e,t){return(0,u.jsx)(l.G7,{"className":"table__tr","children":e.list.map((function(e){return(0,u.jsx)(l.G7,{"className":"table__td","style":o,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(s.Component)},"828":function(e,t,r){"use strict";r.d(t,{"Z":function(){return Button}});var a=r(3114),n=r(9641),c=r(9901),o=r(6070),s=r(4353),l=r(7608),i=r.n(l),m=r(7950),__rest=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},u={"default":"default","primary":"primary","special1":"special1","special2":"special2"},p={"min":"min","small":"small","normal":"normal","large":"large","block":"block"};function Button(e){var t=(0,c.useState)(false),r=(0,a.Z)(t,2),l=r[0],d=r[1],h=function getClassObject(e,t){var r,a=e.size,c=void 0===a?"normal":a,o=e.type,s=void 0===o?"default":o,l=e.disabled,i=void 0!==l&&l,m=e.shape,d=void 0===m?"round":m,h="ossa-button--".concat(p[c]),f="ossa-button--".concat(u[s]),v=(r={},(0,n.Z)(r,h,function getSize(e,t){var r=e.type;return"special1"===r||"special2"===r?"":t}(e,p[c])),(0,n.Z)(r,"ossa-button--is-disabled",i),(0,n.Z)(r,f,u[s]),(0,n.Z)(r,"ossa-button--circle","round"===d),(0,n.Z)(r,"ossa-button--is-active",t),r);return v}(e,l),f=Object.assign(function getStyleObj(e){var t=e.type,r=e.color,a=e.bdColor,n=e.bgColor,c=e.startBgColor,o=e.endBgColor,s={};return r&&(s.color=r),a&&(s["border-color"]=a),n&&(s.background=n),c&&o&&"primary"===t&&(s["background-image"]="linear-gradient(225deg, ".concat(c," 0%, ").concat(o," 100%)")),s}(e),e.customStyle),v=e.icon,x=e.className,y=e.size,b=(e.type,__rest(e,["icon","className","size","type"])),E=v&&c.createElement(m.Z,{"type":v,"customStyle":{"color":"inherit","marginRight":"block"===y||"large"===y?o.ZPm.pxTransform(16):o.ZPm.pxTransform(4)}});return c.createElement(s.zx,Object.assign({},b,{"className":i()("ossa-button","ossa-button2","",h,x),"style":f,"onClick":function onClick(t){return function _onClick(e,t){var r;t.disabled||null===(r=t.onClick)||void 0===r||r.call(t,e)}(t,e)},"onTouchStart":function onTouchStart(){return function _onTouchStart(e,t,r){e.disabled||t(!r)}(e,d,l)},"onTouchEnd":function onTouchEnd(){return function _onTouchEnd(e,t,r){e.disabled||t(!r)}(e,d,l)}}),E,c.createElement(s.G7,{"className":"ossa-button__text"},e.children))}Button.defaultProps={"type":"default","size":"normal","disabled":!1,"circle":!0,"shape":"square"},Button.options={"addGlobalClass":!0}},"7950":function(e,t,r){"use strict";r.d(t,{"Z":function(){return Icon}});var a=r(9641),n=r(9901),c=r(6070),o=r(4353),s=r(7608),l=r.n(s);function Icon(e){var t=function getClassObject(e){var t=e.type;return(0,a.Z)({},"ossa-icon--".concat(t),t)}(e),r=Object.assign(function getStyleObj(e){var t={},r=e.color,a=e.size,n=e.type;return r&&(t.color=r),a&&(t.fontSize=c.ZPm.pxTransform(a)),"home"===n||"subject"===n||"classify"===n||"cart"===n||"user"===n?t.color="#666":"grade"===n||"add-photo"===n||"check"===n?t.color="#ccc":"collect-selected"===n?t.color="#f48f18":"grade-selected"===n?t.color="#fab646":"record"===n&&(t.color="#ff8462"),t}(e),e.customStyle),s=e.type,i=e.className;return n.createElement(o.G7,{"className":l()("ossa-icon",t,i),"style":r,"onClick":function onClick(t){return function _onClick(e,t){var r;null===(r=t.onClick)||void 0===r||r.call(t,e)}(t,e)}},"avatar"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"})),"delete-input"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"cart"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"cart-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"check-irrevocable"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"check-selected"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"close-h5"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"})),"close-native-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"close-native"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"invisible"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"like-selected"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"sort-high"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"sort-low"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"subject-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"subject"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"voice"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"voice-close"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"upload-delete"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"})),"classify"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"classify-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"share-circle"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"}),n.createElement(o.xv,{"className":"path6"})),"share-circle-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"}),n.createElement(o.xv,{"className":"path6"})),"detail-cart-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"detail-cart"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"my-group-buying-select"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"shopping-mall-select"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"}),n.createElement(o.xv,{"className":"path6"}),n.createElement(o.xv,{"className":"path7"})),"shopping-mall"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"}),n.createElement(o.xv,{"className":"path6"}),n.createElement(o.xv,{"className":"path7"})))}Icon.defaultProps={"type":"","size":40},Icon.options={"addGlobalClass":!0}},"7608":function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var c=classNames.apply(null,r);c&&e.push(c)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0===(r=function(){return classNames}.apply(t,[]))||(e.exports=r)}()},"5472":function(e,t,r){"use strict";r(2458);var a=r(9901),n=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),c("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var a,c={},i=null,m=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(m=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(c[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===c[a]&&(c[a]=t[a]);return{"$$typeof":n,"type":e,"key":i,"ref":m,"props":c,"_owner":o.current}}t.jsx=q,t.jsxs=q},"1250":function(e,t,r){"use strict";e.exports=r(5472)}}]);