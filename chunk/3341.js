/*! For license information please see 3341.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[3341],{"9802":function(e,t,a){"use strict";a.d(t,{"Ee":function(){return y},"xv":function(){return x},"G7":function(){return v}});var r=a(9901),n=a(9641),o=a(3114),c=a(8193),l=a(3341),s=a(5076),i=a(7666),u=a(10),p=a(1195),m=a(7629);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var a,r=(0,p.Z)(e);if(t){var n=(0,p.Z)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,u.Z)(this,a)}}r.createElement;var d="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,a){/^--/.test(t)?e.style.setProperty(t,a):"number"!=typeof a||h.test(t)?e.style[t]=a:e.style[t]=a+"px"}function updateProp(e,t,a,r,n){var o=e.ref.current,c=n[a],l=r?r[a]:void 0;if("children"!==a)if("classname"!==a.toLowerCase()){if("style"!==a){if(/^data-.+/.test(a)&&o.setAttribute(a,c),t===d){if("scrollTop"===a)return void(o.mpScrollTop=c);if("scrollLeft"===a)return void(o.mpScrollLeft=c);if("scrollIntoView"===a)return void(o.mpScrollIntoView=c)}if("function"==typeof c&&a.match(/^on[A-Z]/)){var s=a.substr(2).toLowerCase(),i=c;return t===d&&"scroll"===s&&(i=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,i]),o.addEventListener(s,i)}return"string"==typeof c||"number"==typeof c?(o.setAttribute(a,c),void(o[a]=c)):"boolean"==typeof c?c?(o[a]=!0,o.setAttribute(a,c)):(o[a]=!1,o.removeAttribute(a)):void(o[a]=c)}if("string"==typeof c)return void o.setAttribute(a,c);if(!c)return void o.removeAttribute(a);if(r)if("string"==typeof l)o.style.cssText="";else for(var u in l)updateStyle(o,u,"");for(var p in c)updateStyle(o,p,c[p])}else o.className=r?function getClassName(e,t,a){var r=Array.from(e.classList),n=(t.className||t.class||"").split(" "),o=(a.className||a.class||"").split(" "),c=[];return r.forEach((function(e){o.indexOf(e)>-1?(c.push(e),o=o.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,m.Z)(c),(0,m.Z)(o))).join(" ")}(o,r,n):c}var f=function reactifyWebComponent(e){var t=function(t){(0,i.Z)(Index,t);var a=_createSuper(Index);function Index(e){var t;return(0,l.Z)(this,Index),(t=a.call(this,e)).eventHandlers=[],t.ref=(0,r.createRef)(),t}return(0,s.Z)(Index,[{"key":"update","value":function update(t){var a=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(r){"children"===r||"key"===r||r in a.props||updateProp(a,e,r,t,a.props)})),Object.keys(this.props).forEach((function(r){updateProp(a,e,r,t,a.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var a=(0,o.Z)(t,2),r=a[0],n=a[1];e.ref.current&&e.ref.current.removeEventListener(r,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,a=t.children,n=t.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,r.createElement)(e,o,a)}}]),Index}(r.Component);return r.forwardRef((function(e,a){return r.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":a}))}))},v=(f("taro-cover-image-core"),f("taro-cover-view-core"),f("taro-match-media-core"),f("taro-movable-area-core"),f("taro-movable-view-core"),f("taro-page-container-core"),f("taro-root-portal-core"),f("taro-scroll-view-core"),f("taro-share-element-core"),f("taro-swiper-core"),f("taro-swiper-item-core"),f("taro-view-core")),x=(f("taro-icon-core"),f("taro-progress-core"),f("taro-rich-text-core"),f("taro-text-core")),y=(f("taro-button-core"),f("taro-checkbox-core"),f("taro-checkbox-group-core"),f("taro-editor-core"),f("taro-form-core"),f("taro-keyboard-accessory-core"),f("taro-label-core"),f("taro-picker-core"),f("taro-picker-view-core"),f("taro-picker-view-column-core"),f("taro-radio-core"),f("taro-radio-group-core"),f("taro-slider-core"),f("taro-switch-core"),f("taro-textarea-core"),f("taro-functional-page-navigator-core"),f("taro-navigator-core"),f("taro-audio-core"),f("taro-camera-core"),f("taro-image-core"));f("taro-live-player-core"),f("taro-video-core"),f("taro-voip-room-core"),f("taro-map-core"),f("taro-canvas-core"),f("taro-web-view-core"),f("taro-ad-core"),f("taro-ad-custom-core"),f("taro-official-account-core"),f("taro-open-data-core"),f("taro-navigation-bar-core"),f("taro-page-meta-core"),f("taro-custom-wrapper-core")},"4353":function(e,t,a){"use strict";a.d(t,{"tq":function(){return o},"t3":function(){return c},"G7":function(){return l},"xv":function(){return s},"zx":function(){return i},"gx":function(){return u},"Ee":function(){return p},"gO":function(){return m},"fV":function(){return d}});var r=a(9901),n=a(7924),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core"),(0,n.Z)("taro-movable-view-core"),(0,n.Z)("taro-page-container-core"),(0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core"),(0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),c=(0,n.Z)("taro-swiper-item-core"),l=(0,n.Z)("taro-view-core"),s=((0,n.Z)("taro-icon-core"),(0,n.Z)("taro-progress-core"),(0,n.Z)("taro-rich-text-core"),(0,n.Z)("taro-text-core")),i=(0,n.Z)("taro-button-core"),u=((0,n.Z)("taro-checkbox-core"),(0,n.Z)("taro-checkbox-group-core"),(0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core"),(0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core"),(0,n.Z)("taro-picker-core"),(0,n.Z)("taro-picker-view-core"),(0,n.Z)("taro-picker-view-column-core"),(0,n.Z)("taro-radio-core"),(0,n.Z)("taro-radio-group-core"),(0,n.Z)("taro-slider-core"),(0,n.Z)("taro-switch-core"),(0,n.Z)("taro-textarea-core")),p=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core"),(0,n.Z)("taro-image-core")),m=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-live-pusher-core"),(0,n.Z)("taro-video-core"),(0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-web-view-core"),(0,n.Z)("taro-page-meta-core"),r.Fragment),d=(0,n.Z)("taro-custom-wrapper-core")},"1449":function(e,t,a){"use strict";var r=a(9641),n=a(9901);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=(0,a(7924).Z)("taro-input-core");n.createElement;t.Z=n.forwardRef((function(e,t){var a=_objectSpread({},e);return a.hasOwnProperty("focus")&&(a.autoFocus=Boolean(a.focus),delete a.focus),n.createElement(o,_objectSpread(_objectSpread({},a),{},{"ref":t}))}))},"7924":function(e,t,a){"use strict";var r=a(9641),n=a(3114),o=a(8193),c=a(3341),l=a(5076),s=a(7666),i=a(10),u=a(1195),p=a(7629),m=a(9901);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var a,r=(0,u.Z)(e);if(t){var n=(0,u.Z)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,i.Z)(this,a)}}m.createElement;var d="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,a){/^--/.test(t)?e.style.setProperty(t,a):"number"!=typeof a||h.test(t)?e.style[t]=a:e.style[t]=a+"px"}function updateProp(e,t,a,r,n){var o=e.ref.current,c=n[a],l=r?r[a]:void 0;if("children"!==a)if("classname"!==a.toLowerCase()){if("style"!==a){if(/^data-.+/.test(a)&&o.setAttribute(a,c),t===d){if("scrollTop"===a)return void(o.mpScrollTop=c);if("scrollLeft"===a)return void(o.mpScrollLeft=c);if("scrollIntoView"===a)return void(o.mpScrollIntoView=c)}if("function"==typeof c&&a.match(/^on[A-Z]/)){var s=a.substr(2).toLowerCase(),i=c;return t===d&&"scroll"===s&&(i=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,i]),o.addEventListener(s,i)}return"string"==typeof c||"number"==typeof c?(o.setAttribute(a,c),void(o[a]=c)):"boolean"==typeof c?c?(o[a]=!0,o.setAttribute(a,c)):(o[a]=!1,o.removeAttribute(a)):void(o[a]=c)}if("string"==typeof c)return void o.setAttribute(a,c);if(!c)return void o.removeAttribute(a);if(r)if("string"==typeof l)o.style.cssText="";else for(var u in l)updateStyle(o,u,"");for(var m in c)updateStyle(o,m,c[m])}else o.className=r?function getClassName(e,t,a){var r=Array.from(e.classList),n=(t.className||t.class||"").split(" "),o=(a.className||a.class||"").split(" "),c=[];return r.forEach((function(e){o.indexOf(e)>-1?(c.push(e),o=o.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,p.Z)(c),(0,p.Z)(o))).join(" ")}(o,r,n):c}t.Z=function reactifyWebComponent(e){var t=function(t){(0,s.Z)(Index,t);var a=_createSuper(Index);function Index(e){var t;return(0,c.Z)(this,Index),(t=a.call(this,e)).eventHandlers=[],t.ref=(0,m.createRef)(),t}return(0,l.Z)(Index,[{"key":"update","value":function update(t){var a=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(r){"children"===r||"key"===r||r in a.props||updateProp(a,e,r,t,a.props)})),Object.keys(this.props).forEach((function(r){updateProp(a,e,r,t,a.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,o.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var a=(0,n.Z)(t,2),r=a[0],o=a[1];e.ref.current&&e.ref.current.removeEventListener(r,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,a=t.children,r=t.dangerouslySetInnerHTML,n={"ref":this.ref};return r&&(n.dangerouslySetInnerHTML=r),(0,m.createElement)(e,n,a)}}]),Index}(m.Component);return m.forwardRef((function(e,a){return m.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":a}))}))}},"2727":function(e,t,a){"use strict";a.d(t,{"ZT":function(){return setNavigationBarTitle}});var r=a(7882),n=a(7047),o=a(2731);(0,n.tA)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=(0,n.jc)(e);if(!t.flag){var a={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(a.errMsg),Promise.reject(a)}var c=e.title,l=e.success,s=e.fail,i=e.complete,u=new o.N({"name":"setNavigationBarTitle","success":l,"fail":s,"complete":i});return c&&"string"==typeof c?((0,r.Td)(c),u.success()):u.fail({"errMsg":(0,n.Hl)({"para":"title","correct":"String","wrong":c})})}(0,n.tA)("hideNavigationBarLoading"),(0,n.tA)("hideHomeButton")},"2731":function(e,t,a){"use strict";a.d(t,{"N":function(){return o}});var r=a(3341),n=a(5076),o=function(){function MethodHandler(e){var t=e.name,a=e.success,n=e.fail,o=e.complete;(0,r.Z)(this,MethodHandler),this.methodName=t,this.__success=a,this.__fail=n,this.__complete=o}return(0,n.Z)(MethodHandler,[{"key":"success","value":function success(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.resolve.bind(Promise);return e.errMsg||(e.errMsg="".concat(this.methodName,":ok")),"function"==typeof this.__success&&this.__success(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}},{"key":"fail","value":function fail(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.reject.bind(Promise);return e.errMsg?e.errMsg="".concat(this.methodName,":fail ").concat(e.errMsg):e.errMsg="".concat(this.methodName,":fail"),console.error(e.errMsg),"function"==typeof this.__fail&&this.__fail(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}}]),MethodHandler}()},"6925":function(e,t,a){"use strict";a.d(t,{"Z":function(){return d}});var r=a(9641),n=a(3341),o=a(5076),c=a(7666),l=a(4756),s=a(9901),i=a(9802),u=a(7608),p=a.n(u),m=a(1250),d=function(e){(0,c.Z)(DemoBlock,e);var t=(0,l.Z)(DemoBlock);function DemoBlock(){return(0,n.Z)(this,DemoBlock),t.apply(this,arguments)}return(0,o.Z)(DemoBlock,[{"key":"render","value":function render(){var e,t,a=["block","block__title","block__subTitle"],n=[(e={},(0,r.Z)(e,"block--hide-padding",this.props.hidePd),(0,r.Z)(e,"block--hide-mb",this.props.hideMb),e),(0,r.Z)({},"block__title--hide-padding",this.props.hidePd)],o=this.props,c=o.customStyle,l=o.className;return(0,m.jsxs)(i.G7,{"className":p()(a[0],n[0],l),"style":c,"children":[(0,m.jsxs)(i.G7,{"className":"block__header","children":[this.props.title&&(0,m.jsx)(i.G7,{"className":p()(a[1],n[1]),"children":this.props.title}),this.props.subTitle&&(0,m.jsx)(i.G7,{"className":p()(a[2]),"children":this.props.subTitle})]}),(0,m.jsx)(i.G7,{"className":p()((t={},(0,r.Z)(t,"block__body",!0),(0,r.Z)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(s.Component)},"3946":function(e,t,a){"use strict";a.d(t,{"Z":function(){return f}});var r=a(2875),n=a(3341),o=a(5076),c=a(7666),l=a(4756),s=a(9901),i=a(3932),u=a(1245),p=a(9802),m=a(7608),d=a.n(m),h=a(1250),f=function(e){(0,c.Z)(DemoHeader,e);var t=(0,l.Z)(DemoHeader);function DemoHeader(){return(0,n.Z)(this,DemoHeader),t.apply(this,arguments)}return(0,o.Z)(DemoHeader,[{"key":"onClick","value":function onClick(){this.props.onClick?this.props.onClick():(0,i.T8)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=u.ZPm.getEnv()!==u.ZPm.ENV_TYPE.WEB?"hide-split-line":"",a=this.props.icon;return(0,h.jsxs)(p.G7,{"className":d()(e[0],t),"children":[u.ZPm.getEnv()===u.ZPm.ENV_TYPE.WEB&&(0,h.jsx)(r.Z,{"type":"detail-home","onClick":this.onClick.bind(this)}),u.ZPm.getEnv()!==u.ZPm.ENV_TYPE.WEB&&a&&(0,h.jsx)(r.Z,{"type":a,"size":44,"customStyle":{"marginRight":u.ZPm.pxTransform(18)}}),(0,h.jsx)(p.G7,{"className":d()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(s.Component)},"2776":function(e,t,a){"use strict";a.d(t,{"Z":function(){return m}});var r=a(3341),n=a(5076),o=a(7666),c=a(4756),l=a(9901),s=a(9802),i=a(7608),u=a.n(i),p=a(1250),m=function(e){(0,o.Z)(DemoTable,e);var t=(0,c.Z)(DemoTable);function DemoTable(){return(0,r.Z)(this,DemoTable),t.apply(this,arguments)}return(0,n.Z)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var a=t.head,r=t.data,n=t.title,o={};a&&a.length&&(o.width=100/a.length+"%");var c={};return r&&r.length&&(c.width=100/r.length+"%"),(0,p.jsxs)(s.G7,{"className":u()(e[0]),"children":[n&&(0,p.jsx)(s.G7,{"className":u()(e[1]),"children":this.props.list.title}),(0,p.jsxs)(s.G7,{"className":u()(e[2]),"children":[a&&a.length?(0,p.jsx)(s.G7,{"className":u()(e[3]),"children":a.map((function(t){return(0,p.jsx)(s.G7,{"style":o,"className":u()(e[4]),"children":t},t)}))}):null,r&&r.length?(0,p.jsx)(s.G7,{"children":r.map((function(e,t){return(0,p.jsx)(s.G7,{"className":"table__tr","children":e.list.map((function(e){return(0,p.jsx)(s.G7,{"className":"table__td","style":c,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(l.Component)},"4077":function(e,t,a){"use strict";a.r(t),a.d(t,{"default":function(){return Index}});var r=a(3114),n=a(9641),o=a(9901),c=a(1245),l=a(4353),s=a(1449),i=a(7608),u=a.n(i),p=a(2875);var m=a(5302);var d=function onInput(e,t){var a,r=t.detail.value;"bankcard"===e.type&&(r=r.replace(/(\s)/g,"")),null===(a=e.onChange)||void 0===a||a.call(e,r)};function OsInput(e){var t,a,i,h=function getClassObject(e){var t;return t={},(0,n.Z)(t,"ossa-input--type-".concat(e.type),!0),(0,n.Z)(t,"ossa-input--underline",e.showSplitLine&&"bankcard"!==e.type),(0,n.Z)(t,"ossa-input--disabled",e.isDisabled),t}(e),f=(0,o.useState)(!1),v=(0,r.Z)(f,2),x=v[0],y=v[1],b="text";"number"!==e.type&&"bankcard"!==e.type||(b="digit");var E=(0,m.j)(e.disabled,e.isDisabled,{"newPropName":"disabled","oldPropName":"isDisabled","moduleName":"Input"}),N=(0,m.j)(e.readonly,e.isReadonly,{"newPropName":"disabled","oldPropName":"isDisabled","moduleName":"Input"});(0,o.useEffect)((function(){var t;"textarea"===e.type&&e.maxLength&&e.maxLength>0&&(e.maxLength>=j.length||null===(t=e.onChange)||void 0===t||t.call(e,j.slice(0,e.maxLength)))}),[e.value,e.type,e.maxLength]);var g=function onFocus(t){var a;c.ZPm.getEnv()===c.ZPm.ENV_TYPE.WEB&&function isAndroid(){return/(android)/i.test(navigator.userAgent)}()&&"password"===e.type&&setTimeout((function(){t.currentTarget&&t.currentTarget.scrollIntoView&&t.currentTarget.scrollIntoView(!0)}),1),null===(a=e.onFocus)||void 0===a||a.call(e,t)},Z=function onBlur(t){var a;null===(a=e.onBlur)||void 0===a||a.call(e,t)},j=e.value||"",w=!e.disabledClear&&!E&&!N&&e.value&&"textarea"!==e.type,_=!N&&!E,k=(0,m.j)(e.showCount,e.countDown,{"newPropName":"showCount","oldPropName":"countDown","moduleName":"Input"});return o.createElement(l.G7,{"className":u()(["ossa-input"],h,e.className),"style":e.customStyle},e.label&&o.createElement(l.xv,{"className":u()((0,n.Z)({},"ossa-input__label",!0))},e.label),o.createElement(l.G7,{"className":"ossa-input__input-wrapper"},"textarea"===e.type?o.createElement(l.gx,Object.assign({},(null===(a=null==e?void 0:e.taroProps)||void 0===a?void 0:a.textareaProps)||{},{"value":j,"className":u()((0,n.Z)({},"ossa-input__input--textarea",!0)),"maxlength":e.maxLength,"autoHeight":!1,"showConfirmBar":!0,"disabled":!_,"placeholder":e.placeholder,"placeholderStyle":e.placeholderStyle,"placeholderClass":e.placeholderClass,"onInput":function onInput(t){d(e,t)},"onFocus":g,"onBlur":Z})):o.createElement(s.Z,Object.assign({},(null===(i=null==e?void 0:e.taroProps)||void 0===i?void 0:i.inputProps)||{},{"value":j,"type":b,"password":!x&&"password"===e.type,"className":u()((t={},(0,n.Z)(t,"ossa-input__input",!0),(0,n.Z)(t,"ossa-input__input--type-password",!x&&"password"===e.type&&j.length),t)),"disabled":!_,"placeholder":e.placeholder,"placeholderStyle":e.placeholderStyle,"placeholderClass":e.placeholderClass,"onInput":function onInput(t){d(e,t)},"onFocus":g,"onBlur":Z})),w&&o.createElement(l.G7,{"className":"ossa-input__del-ico"},o.createElement(p.Z,{"size":28,"type":"delete-input","onClick":function onClick(){!function onClickDeleteIcon(e){var t;null===(t=e.onChange)||void 0===t||t.call(e,"")}(e)}}))),"textarea"===e.type&&k&&o.createElement(l.G7,{"className":"ossa-input__count-down"},Number(e.maxLength)-j.length),"password"===e.type&&o.createElement(p.Z,{"className":"ossa-input__visible-ico","customStyle":{"marginLeft":c.ZPm.pxTransform(16)},"size":40,"type":x?"visible":"invisible","onClick":function onClick(){!function onClickVisibleIcon(){y(!x)}()}}))}OsInput.defaultProps={"type":"text","placeholder":"","placeholderStyle":"","title":"","maxLength":500,"isDisabled":!1,"isReadonly":!1,"disabled":!1,"readonly":!1,"disabledClear":!1,"showSplitLine":!0,"value":""},OsInput.options={"addGlobalClass":!0};var h=a(2727),f=a(9802),v=a(6925),x=a(3946),y=a(2776),b=a(1250);var E={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["type","输入框类型，可选","text | number | password | bankcard | textarea","text"]},{"list":["value","表单值，可选","string","-"]},{"list":["placeholder","placeholder，可选","string","-"]},{"list":["placeholderStyle","placeholder样式，只支持小程序，可选","string","-"]},{"list":["placeholderClass","placeholder样式类，可选","string","-"]},{"list":["label","表单说明，可选","string","-"]},{"list":["maxLength","最大字符数，可选","number","500"]},{"list":["isReadonly","是否可编辑，可选，`isReadonly`属性在未来版本中将被删除，请使用`readonly`代替","boolean","false"]},{"list":["readonly","是否可编辑，可选","boolean","false"]},{"list":["isDisabled","表单是否失效，可选，`isDisabled`属性在未来版本中将被删除，请使用`disabled`代替","boolean","false"]},{"list":["disabled","表单是否失效，可选","boolean","false"]},{"list":["disabledClear","是否隐藏一键删除按钮，可选","boolean","false"]},{"list":["showSplitLine","是否展示底部分割线，当`type`为`bankcard`时无效，可选","boolean","true"]},{"list":["countDown","是否显示字符计数器，textarea有效，可选。`countDown`字段将在未来版本中被移除,请使用`showCount`代替","boolean","false"]},{"list":["showCount","是否显示字符计数器，textarea有效，可选","boolean","false"]},{"list":["taroProps","除了上述属性之外 taro 支持的 属性","{inputProps, textareaProps}","-"]}]},N={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onChange","表单值变化时调用，可选","表单值"]},{"list":["onFocus","表单聚焦时调用，可选","事件对象"]},{"list":["onBlur","表单值失焦时调用，可选","事件对象"]}]};function Index(e){var t=(0,o.useState)(E),a=(0,r.Z)(t,1)[0],c=(0,o.useState)(N),l=(0,r.Z)(c,1)[0],s=function demo_getClassObject(){return(0,n.Z)({"page":!0},"demo-input",!0)}(),i=(0,o.useState)("186"),p=(0,r.Z)(i,2),m=p[0],d=p[1],g=(0,o.useState)("186"),Z=(0,r.Z)(g,2),j=Z[0],w=Z[1],_=(0,o.useState)("网易严选秉承网易一贯的严谨态度，深入世界各地，严格把关所有商品的产地"),k=(0,r.Z)(_,2),O=k[0],P=k[1],S=(0,o.useState)("123"),C=(0,r.Z)(S,2),G=C[0],I=C[1],D=(0,o.useState)("不可编辑的input"),T=(0,r.Z)(D,2),L=T[0],H=T[1],R=(0,o.useState)("不可编辑的textarea"),B=(0,r.Z)(R,2),A=B[0],M=B[1],V=(0,o.useState)("662712399"),W=(0,r.Z)(V,2),U=W[0],z=W[1],K=(0,o.useState)("662712"),F=(0,r.Z)(K,2),Y=F[0],$=F[1];return(0,o.useEffect)((function(){(0,h.ZT)({"title":"Input 输入框"})}),[]),(0,b.jsxs)(f.G7,{"className":u()(s),"children":[(0,b.jsx)(x.Z,{"title":"Input 输入框"}),(0,b.jsx)(v.Z,{"title":"普通","subTitle":"有标题","children":(0,b.jsx)(f.G7,{"className":"block-section","children":(0,b.jsx)(OsInput,{"label":"标题","placeholder":"默认文案","placeholderStyle":"color: #7f7f7f;","value":m,"onChange":function onChange(e){d(e)}})})}),(0,b.jsx)(v.Z,{"subTitle":"没有标题","children":(0,b.jsx)(f.G7,{"className":"block-section","children":(0,b.jsx)(OsInput,{"placeholder":"默认文案","placeholderStyle":"color: #7f7f7f;","value":j,"onChange":function onChange(e){w(e)}})})}),(0,b.jsx)(v.Z,{"subTitle":"银行卡","children":(0,b.jsx)(f.G7,{"className":"block-section","children":(0,b.jsx)(OsInput,{"type":"bankcard","placeholder":"银行行卡/礼品卡号","value":U,"onChange":function onChange(e){z(e)}})})}),(0,b.jsx)(v.Z,{"subTitle":"密码输入框","children":(0,b.jsx)(f.G7,{"className":"block-section","children":(0,b.jsx)(OsInput,{"type":"password","placeholder":"请输入密码","value":Y,"onChange":function onChange(e){$(e)}})})}),(0,b.jsx)(v.Z,{"subTitle":"数字输入框","children":(0,b.jsx)(f.G7,{"className":"block-section","children":(0,b.jsx)(OsInput,{"type":"number","placeholder":"请输入数字","value":G,"onChange":function onChange(e){I(e)}})})}),(0,b.jsx)(v.Z,{"subTitle":"多行输入","children":(0,b.jsx)(f.G7,{"className":"block-section","children":(0,b.jsx)(OsInput,{"type":"textarea","placeholder":"请输入文本","value":O,"onChange":function onChange(e){P(e)},"showCount":!0,"maxLength":200})})}),(0,b.jsx)(v.Z,{"subTitle":"不可编辑","children":(0,b.jsxs)(f.G7,{"className":"block-section","children":[(0,b.jsx)(OsInput,{"label":"标题","placeholder":"请输入文本","value":L,"onChange":function onChange(e){H(e)},"readonly":!0}),(0,b.jsx)(OsInput,{"label":"标题","placeholder":"请输入文本","value":L,"onChange":function onChange(e){H(e)},"disabled":!0}),(0,b.jsx)(OsInput,{"type":"textarea","label":"标题","placeholder":"请输入文本","value":A,"onChange":function onChange(e){M(e)},"showCount":!0,"disabled":!0})]})}),(0,b.jsx)(v.Z,{"children":(0,b.jsx)(y.Z,{"list":a})}),(0,b.jsx)(v.Z,{"children":(0,b.jsx)(y.Z,{"list":l})})]})}},"2875":function(e,t,a){"use strict";a.d(t,{"Z":function(){return Icon}});var r=a(9641),n=a(9901),o=a(1245),c=a(4353),l=a(7608),s=a.n(l);function Icon(e){var t=function getClassObject(e){var t=e.type;return(0,r.Z)({},"ossa-icon--".concat(t),t)}(e),a=Object.assign(function getStyleObj(e){var t={},a=e.color,r=e.size,n=e.type;return a&&(t.color=a),r&&(t.fontSize=o.ZPm.pxTransform(r)),"home"===n||"subject"===n||"classify"===n||"cart"===n||"user"===n?t.color="#666":"grade"===n||"add-photo"===n||"check"===n?t.color="#ccc":"collect-selected"===n?t.color="#f48f18":"grade-selected"===n?t.color="#fab646":"record"===n&&(t.color="#ff8462"),t}(e),e.customStyle),l=e.type,i=e.className;return n.createElement(c.G7,{"className":s()("ossa-icon",t,i),"style":a,"onClick":function onClick(t){return function _onClick(e,t){var a;null===(a=t.onClick)||void 0===a||a.call(t,e)}(t,e)}},"avatar"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"delete-input"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"cart"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"cart-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"check-irrevocable"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"check-selected"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"close-h5"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"close-native-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"close-native"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"invisible"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"like-selected"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"sort-high"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"sort-low"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"subject-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"subject"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"voice"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"voice-close"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"upload-delete"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"classify"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"classify-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"share-circle"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"})),"share-circle-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"})),"detail-cart-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"detail-cart"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"my-group-buying-select"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"shopping-mall-select"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"}),n.createElement(c.xv,{"className":"path7"})),"shopping-mall"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"}),n.createElement(c.xv,{"className":"path7"})))}Icon.defaultProps={"type":"","size":40},Icon.options={"addGlobalClass":!0}},"5302":function(e,t,a){"use strict";a.d(t,{"j":function(){return deprecatedProp}});new Set;function deprecatedProp(e,t,a){return void 0!==t&&a&&a.oldPropName,null!=e?e:t}},"7608":function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)){if(a.length){var o=classNames.apply(null,a);o&&e.push(o)}}else if("object"===n){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var c in a)r.call(a,c)&&a[c]&&e.push(c)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0===(a=function(){return classNames}.apply(t,[]))||(e.exports=a)}()},"5472":function(e,t,a){"use strict";a(2458);var r=a(9901),n=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;n=o("react.element"),o("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,a){var r,o={},i=null,u=null;for(r in void 0!==a&&(i=""+a),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{"$$typeof":n,"type":e,"key":i,"ref":u,"props":o,"_owner":c.current}}t.jsx=q,t.jsxs=q},"1250":function(e,t,a){"use strict";e.exports=a(5472)}}]);