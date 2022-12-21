/*! For license information please see 6031.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[6031],{"9802":function(e,t,r){"use strict";r.d(t,{"Ee":function(){return y},"xv":function(){return x},"G7":function(){return v}});var a=r(9901),n=r(9641),o=r(3114),c=r(8193),s=r(3341),l=r(5076),i=r(7666),u=r(10),m=r(1195),p=r(7629);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,m.Z)(e);if(t){var n=(0,m.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,u.Z)(this,r)}}a.createElement;var f="taro-scroll-view-core",d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||d.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var o=e.ref.current,c=n[r],s=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&o.setAttribute(r,c),t===f){if("scrollTop"===r)return void(o.mpScrollTop=c);if("scrollLeft"===r)return void(o.mpScrollLeft=c);if("scrollIntoView"===r)return void(o.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),i=c;return t===f&&"scroll"===l&&(i=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,i]),o.addEventListener(l,i)}return"string"==typeof c||"number"==typeof c?(o.setAttribute(r,c),void(o[r]=c)):"boolean"==typeof c?c?(o[r]=!0,o.setAttribute(r,c)):(o[r]=!1,o.removeAttribute(r)):void(o[r]=c)}if("string"==typeof c)return void o.setAttribute(r,c);if(!c)return void o.removeAttribute(r);if(a)if("string"==typeof s)o.style.cssText="";else for(var u in s)updateStyle(o,u,"");for(var m in c)updateStyle(o,m,c[m])}else o.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),o=(r.className||r.class||"").split(" "),c=[];return a.forEach((function(e){o.indexOf(e)>-1?(c.push(e),o=o.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,p.Z)(c),(0,p.Z)(o))).join(" ")}(o,a,n):c}var h=function reactifyWebComponent(e){var t=function(t){(0,i.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,s.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,a.createRef)(),t}return(0,l.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,o.Z)(t,2),a=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(a,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,a.createElement)(e,o,r)}}]),Index}(a.Component);return a.forwardRef((function(e,r){return a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))},v=(h("taro-cover-image-core"),h("taro-cover-view-core"),h("taro-match-media-core"),h("taro-movable-area-core"),h("taro-movable-view-core"),h("taro-page-container-core"),h("taro-root-portal-core"),h("taro-scroll-view-core"),h("taro-share-element-core"),h("taro-swiper-core"),h("taro-swiper-item-core"),h("taro-view-core")),x=(h("taro-icon-core"),h("taro-progress-core"),h("taro-rich-text-core"),h("taro-text-core")),y=(h("taro-button-core"),h("taro-checkbox-core"),h("taro-checkbox-group-core"),h("taro-editor-core"),h("taro-form-core"),h("taro-keyboard-accessory-core"),h("taro-label-core"),h("taro-picker-core"),h("taro-picker-view-core"),h("taro-picker-view-column-core"),h("taro-radio-core"),h("taro-radio-group-core"),h("taro-slider-core"),h("taro-switch-core"),h("taro-textarea-core"),h("taro-functional-page-navigator-core"),h("taro-navigator-core"),h("taro-audio-core"),h("taro-camera-core"),h("taro-image-core"));h("taro-live-player-core"),h("taro-video-core"),h("taro-voip-room-core"),h("taro-map-core"),h("taro-canvas-core"),h("taro-web-view-core"),h("taro-ad-core"),h("taro-ad-custom-core"),h("taro-official-account-core"),h("taro-open-data-core"),h("taro-navigation-bar-core"),h("taro-page-meta-core"),h("taro-custom-wrapper-core")},"4353":function(e,t,r){"use strict";r.d(t,{"tq":function(){return o},"t3":function(){return c},"G7":function(){return s},"xv":function(){return l},"zx":function(){return i},"gx":function(){return u},"Ee":function(){return m},"gO":function(){return p},"fV":function(){return f}});var a=r(9901),n=r(7924),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core"),(0,n.Z)("taro-movable-view-core"),(0,n.Z)("taro-page-container-core"),(0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core"),(0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),c=(0,n.Z)("taro-swiper-item-core"),s=(0,n.Z)("taro-view-core"),l=((0,n.Z)("taro-icon-core"),(0,n.Z)("taro-progress-core"),(0,n.Z)("taro-rich-text-core"),(0,n.Z)("taro-text-core")),i=(0,n.Z)("taro-button-core"),u=((0,n.Z)("taro-checkbox-core"),(0,n.Z)("taro-checkbox-group-core"),(0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core"),(0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core"),(0,n.Z)("taro-picker-core"),(0,n.Z)("taro-picker-view-core"),(0,n.Z)("taro-picker-view-column-core"),(0,n.Z)("taro-radio-core"),(0,n.Z)("taro-radio-group-core"),(0,n.Z)("taro-slider-core"),(0,n.Z)("taro-switch-core"),(0,n.Z)("taro-textarea-core")),m=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core"),(0,n.Z)("taro-image-core")),p=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-live-pusher-core"),(0,n.Z)("taro-video-core"),(0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-web-view-core"),(0,n.Z)("taro-page-meta-core"),a.Fragment),f=(0,n.Z)("taro-custom-wrapper-core")},"1449":function(e,t,r){"use strict";var a=r(9641),n=r(9901);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o=(0,r(7924).Z)("taro-input-core");n.createElement;t.Z=n.forwardRef((function(e,t){var r=_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),n.createElement(o,_objectSpread(_objectSpread({},r),{},{"ref":t}))}))},"7924":function(e,t,r){"use strict";var a=r(9641),n=r(3114),o=r(8193),c=r(3341),s=r(5076),l=r(7666),i=r(10),u=r(1195),m=r(7629),p=r(9901);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,u.Z)(e);if(t){var n=(0,u.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,i.Z)(this,r)}}p.createElement;var f="taro-scroll-view-core",d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||d.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var o=e.ref.current,c=n[r],s=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&o.setAttribute(r,c),t===f){if("scrollTop"===r)return void(o.mpScrollTop=c);if("scrollLeft"===r)return void(o.mpScrollLeft=c);if("scrollIntoView"===r)return void(o.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),i=c;return t===f&&"scroll"===l&&(i=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,i]),o.addEventListener(l,i)}return"string"==typeof c||"number"==typeof c?(o.setAttribute(r,c),void(o[r]=c)):"boolean"==typeof c?c?(o[r]=!0,o.setAttribute(r,c)):(o[r]=!1,o.removeAttribute(r)):void(o[r]=c)}if("string"==typeof c)return void o.setAttribute(r,c);if(!c)return void o.removeAttribute(r);if(a)if("string"==typeof s)o.style.cssText="";else for(var u in s)updateStyle(o,u,"");for(var p in c)updateStyle(o,p,c[p])}else o.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),o=(r.className||r.class||"").split(" "),c=[];return a.forEach((function(e){o.indexOf(e)>-1?(c.push(e),o=o.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,m.Z)(c),(0,m.Z)(o))).join(" ")}(o,a,n):c}t.Z=function reactifyWebComponent(e){var t=function(t){(0,l.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,c.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,p.createRef)(),t}return(0,s.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,o.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,n.Z)(t,2),a=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(a,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,a=t.dangerouslySetInnerHTML,n={"ref":this.ref};return a&&(n.dangerouslySetInnerHTML=a),(0,p.createElement)(e,n,r)}}]),Index}(p.Component);return p.forwardRef((function(e,r){return p.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"2727":function(e,t,r){"use strict";r.d(t,{"ZT":function(){return setNavigationBarTitle}});var a=r(7882),n=r(7047),o=r(2731);(0,n.tA)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=(0,n.jc)(e);if(!t.flag){var r={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var c=e.title,s=e.success,l=e.fail,i=e.complete,u=new o.N({"name":"setNavigationBarTitle","success":s,"fail":l,"complete":i});return c&&"string"==typeof c?((0,a.Td)(c),u.success()):u.fail({"errMsg":(0,n.Hl)({"para":"title","correct":"String","wrong":c})})}(0,n.tA)("hideNavigationBarLoading"),(0,n.tA)("hideHomeButton")},"2731":function(e,t,r){"use strict";r.d(t,{"N":function(){return o}});var a=r(3341),n=r(5076),o=function(){function MethodHandler(e){var t=e.name,r=e.success,n=e.fail,o=e.complete;(0,a.Z)(this,MethodHandler),this.methodName=t,this.__success=r,this.__fail=n,this.__complete=o}return(0,n.Z)(MethodHandler,[{"key":"success","value":function success(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.resolve.bind(Promise);return e.errMsg||(e.errMsg="".concat(this.methodName,":ok")),"function"==typeof this.__success&&this.__success(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}},{"key":"fail","value":function fail(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.reject.bind(Promise);return e.errMsg?e.errMsg="".concat(this.methodName,":fail ").concat(e.errMsg):e.errMsg="".concat(this.methodName,":fail"),console.error(e.errMsg),"function"==typeof this.__fail&&this.__fail(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}}]),MethodHandler}()},"6925":function(e,t,r){"use strict";r.d(t,{"Z":function(){return f}});var a=r(9641),n=r(3341),o=r(5076),c=r(7666),s=r(4756),l=r(9901),i=r(9802),u=r(7608),m=r.n(u),p=r(1250),f=function(e){(0,c.Z)(DemoBlock,e);var t=(0,s.Z)(DemoBlock);function DemoBlock(){return(0,n.Z)(this,DemoBlock),t.apply(this,arguments)}return(0,o.Z)(DemoBlock,[{"key":"render","value":function render(){var e,t,r=["block","block__title","block__subTitle"],n=[(e={},(0,a.Z)(e,"block--hide-padding",this.props.hidePd),(0,a.Z)(e,"block--hide-mb",this.props.hideMb),e),(0,a.Z)({},"block__title--hide-padding",this.props.hidePd)],o=this.props,c=o.customStyle,s=o.className;return(0,p.jsxs)(i.G7,{"className":m()(r[0],n[0],s),"style":c,"children":[(0,p.jsxs)(i.G7,{"className":"block__header","children":[this.props.title&&(0,p.jsx)(i.G7,{"className":m()(r[1],n[1]),"children":this.props.title}),this.props.subTitle&&(0,p.jsx)(i.G7,{"className":m()(r[2]),"children":this.props.subTitle})]}),(0,p.jsx)(i.G7,{"className":m()((t={},(0,a.Z)(t,"block__body",!0),(0,a.Z)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(l.Component)},"3946":function(e,t,r){"use strict";r.d(t,{"Z":function(){return h}});var a=r(2875),n=r(3341),o=r(5076),c=r(7666),s=r(4756),l=r(9901),i=r(3932),u=r(1245),m=r(9802),p=r(7608),f=r.n(p),d=r(1250),h=function(e){(0,c.Z)(DemoHeader,e);var t=(0,s.Z)(DemoHeader);function DemoHeader(){return(0,n.Z)(this,DemoHeader),t.apply(this,arguments)}return(0,o.Z)(DemoHeader,[{"key":"onClick","value":function onClick(){this.props.onClick?this.props.onClick():(0,i.T8)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=u.ZPm.getEnv()!==u.ZPm.ENV_TYPE.WEB?"hide-split-line":"",r=this.props.icon;return(0,d.jsxs)(m.G7,{"className":f()(e[0],t),"children":[u.ZPm.getEnv()===u.ZPm.ENV_TYPE.WEB&&(0,d.jsx)(a.Z,{"type":"detail-home","onClick":this.onClick.bind(this)}),u.ZPm.getEnv()!==u.ZPm.ENV_TYPE.WEB&&r&&(0,d.jsx)(a.Z,{"type":r,"size":44,"customStyle":{"marginRight":u.ZPm.pxTransform(18)}}),(0,d.jsx)(m.G7,{"className":f()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(l.Component)},"2776":function(e,t,r){"use strict";r.d(t,{"Z":function(){return p}});var a=r(3341),n=r(5076),o=r(7666),c=r(4756),s=r(9901),l=r(9802),i=r(7608),u=r.n(i),m=r(1250),p=function(e){(0,o.Z)(DemoTable,e);var t=(0,c.Z)(DemoTable);function DemoTable(){return(0,a.Z)(this,DemoTable),t.apply(this,arguments)}return(0,n.Z)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var r=t.head,a=t.data,n=t.title,o={};r&&r.length&&(o.width=100/r.length+"%");var c={};return a&&a.length&&(c.width=100/a.length+"%"),(0,m.jsxs)(l.G7,{"className":u()(e[0]),"children":[n&&(0,m.jsx)(l.G7,{"className":u()(e[1]),"children":this.props.list.title}),(0,m.jsxs)(l.G7,{"className":u()(e[2]),"children":[r&&r.length?(0,m.jsx)(l.G7,{"className":u()(e[3]),"children":r.map((function(t){return(0,m.jsx)(l.G7,{"style":o,"className":u()(e[4]),"children":t},t)}))}):null,a&&a.length?(0,m.jsx)(l.G7,{"children":a.map((function(e,t){return(0,m.jsx)(l.G7,{"className":"table__tr","children":e.list.map((function(e){return(0,m.jsx)(l.G7,{"className":"table__td","style":c,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(s.Component)},"6031":function(e,t,r){"use strict";r.r(t),r.d(t,{"default":function(){return Index}});var a=r(5176),n=r(1326),o=r(2875),c=r(3341),s=r(5076),l=r(7666),i=r(4756),u=r(9641),m=r(9901),p=r(4353),f=r(7608),d=r.n(f),h=r(5302);function onLeftIconClick(e,t){var r;null===(r=e.onLeftIconClick)||void 0===r||r.call(e,t)}function onLeftTextClick(e,t){var r;null===(r=e.onLeftTextClick)||void 0===r||r.call(e,t)}function onRightIconClick(e,t){var r;null===(r=e.onRightIconClick)||void 0===r||r.call(e,t)}function onRightTextClick(e,t){var r;null===(r=e.onRightTextClick)||void 0===r||r.call(e,t)}var v=function(e){(0,l.Z)(NavBar,e);var t=(0,i.Z)(NavBar);function NavBar(e){return(0,c.Z)(this,NavBar),t.call(this,e)}return(0,s.Z)(NavBar,[{"key":"renderSideContent","value":function renderSideContent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"left",r=e.type,a=e.iconColor,n=e.leftIcons,c=e.leftTexts,s=e.leftSlot,l=e.rightIcons,i=e.rightTexts,u=e.rightSlot,f={"left":n,"right":l},d={"left":c,"right":i},h={"left":s,"right":u},v={"left":onLeftIconClick,"right":onRightIconClick},x={"left":onLeftTextClick,"right":onRightTextClick};return"custom"!==r&&h[t]?m.createElement(p.G7,{"className":"ossa-navbar--".concat(t)},h[t]):"custom"!==r?m.createElement(p.G7,{"className":"ossa-navbar--".concat(t)},f[t]&&m.createElement(p.G7,{"className":"ossa-navbar__".concat(t,"Icons")},f[t].map((function(r){return m.createElement(o.Z,{"type":r,"color":a,"key":r,"size":40,"customStyle":{"verticalAlign":"top"},"onClick":function onClick(){return v[t](e,r)}})}))),d[t]&&m.createElement(p.G7,{"className":"ossa-navbar__".concat(t,"Txts")},d[t].map((function(r){return m.createElement(p.xv,{"className":"ossa-navbar__".concat(t,"Txt"),"key":r.id,"onClick":function onClick(){return x[t](e,r.id)}},r.text)})))):void 0}},{"key":"render","value":function render(){var e=this.props,t=function getClassObject(e){var t,r=e.type,a=e.showSplitLine;return t={},(0,u.Z)(t,"ossa-navbar--".concat(r),r),(0,u.Z)(t,"ossa-navbar--show-split-line",a),t}(e),r=Object.assign({},e.customStyle),a=e.type,n=e.title,o=e.middleSlot,c="string"==typeof(0,h.j)(n,o,{"newPropName":"title","oldPropName":"middleSlot","moduleName":"NavBar"});return m.createElement(p.G7,{"className":d()("ossa-navbar",t,e.className),"style":r},this.renderSideContent(e,"left"),"2column"!==a&&"custom"!==a&&m.createElement(p.G7,{"className":"ossa-navbar--middle"},c?n&&m.createElement(p.G7,{"className":"ossa-navbar__title"},n):n),this.renderSideContent(e,"right"),"custom"===a&&e.children)}}]),NavBar}(m.Component);v.options={"addGlobalClass":!0},v.defaultProps={"type":"3column","showSplitLine":!0,"title":"","iconColor":""};var x=r(3114),y=r(2727),g=r(9802),E=r(6925),N=r(3946),b=r(2776),Z=r(1250);var k={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["type","2column | 3column | custom，可选","string","3column"]},{"list":["title","导航标题，可选","ReactChild","-"]},{"list":["middleSlot","自定义左侧内容，存在时覆盖title，但比custom优先级低，可选，`middleSlot`属性将在未来的版本中被删除，请使用`title`替代","any","-"]},{"list":["leftIcons","左侧icon,取值参考OsIcon，可选","Array<string>","-"]},{"list":["leftTexts","左侧文案，可选","Array<API-Texts>","-"]},{"list":["leftSlot","自定义左侧内容，存在时覆盖leftIcons和leftTexts，但比custom优先级低，可选","ReactChild","-"]},{"list":["rightIcons","右侧icon,取值参考OsIcon，可选","Array<string>","-"]},{"list":["rightTexts","右侧文案，可选","Array<API-Texts>","-"]},{"list":["rightSlot","自定义右侧内容，存在时覆盖rightIcons和rightTexts，但比custom优先级低，可选","ReactChild","-"]},{"list":["showSplitLine","展示分割线，可选","boolean","true"]},{"list":["custom","自定义整个导航，会用custom中的内容作为整个导航的内容，覆盖所有icon/text/title/slot，可选","ReactChild","-"]},{"list":["iconColor","icon的颜色，仅当使用ossa提供的icon时有效，可选","string","#7f7f7f"]},{"list":["className","自定义类名，可选","string","-"]},{"list":["customStyle","自定义样式，可选","object","-"]}]},j={"title":"API-Texts","head":["参数","说明","类型","默认值"],"data":[{"list":["id","文案标识","number","-"]},{"list":["text","文案","string","-"]}]},_={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onLeftIconClick","点击左侧icon时触发","当前点击icon的名称"]},{"list":["onLeftTextClick","点击左侧文案时触发","当前点击文案的id"]},{"list":["onRightIconClick","点击右侧icon时触发","当前点击icon的名称"]},{"list":["onRightTextClick","点击右侧文案时触发","当前点击文案的id"]}]},w=["return"],C=[{"id":1,"text":"按钮"}],S=[{"id":1,"text":"返回"}],O=["search","detail-cart"],P=["detail-home"],T=[{"id":1,"text":"按钮"},{"id":2,"text":"领券"},{"id":3,"text":"分享"}];function demo_onLeftIconClick(e){console.log("点击icon名称："+e)}function demo_onRightTextClick(e){console.log("点击文案id："+e)}function demo_onRightIconClick(e){console.log("点击icon名称："+e)}function demo_onLeftTextClick(e){console.log("点击文案id："+e)}var I="NavBar 导航栏";function Index(e){var t=(0,m.useState)(k),r=(0,x.Z)(t,1)[0],c=(0,m.useState)(_),s=(0,x.Z)(c,1)[0],l=(0,m.useState)(w),i=(0,x.Z)(l,1)[0],p=(0,m.useState)(S),f=(0,x.Z)(p,1)[0],h=(0,m.useState)(C),G=(0,x.Z)(h,1)[0],R=(0,m.useState)(P),L=(0,x.Z)(R,1)[0],D=(0,m.useState)(O),A=(0,x.Z)(D,1)[0],B=(0,m.useState)(T),H=(0,x.Z)(B,1)[0],M=(0,m.useState)(j),z=(0,x.Z)(M,1)[0],F=function demo_getClassObject(){return(0,u.Z)({"page":!0},"demo-navbar",!0)}();return(0,m.useEffect)((function(){(0,y.ZT)({"title":I})}),[]),(0,Z.jsxs)(g.G7,{"className":d()(F),"children":[(0,Z.jsx)(N.Z,{"title":I}),(0,Z.jsx)(E.Z,{"title":"基础","fullScreen":!0,"children":(0,Z.jsx)(v,{"title":"标题","leftIcons":i,"rightTexts":G,"onLeftIconClick":demo_onLeftIconClick.bind(this),"onRightTextClick":demo_onRightTextClick.bind(this)})}),(0,Z.jsx)(E.Z,{"title":"标题自定义","fullScreen":!0,"children":(0,Z.jsx)(v,{"title":(0,Z.jsxs)(Z.Fragment,{"children":[(0,Z.jsx)(o.Z,{"type":"home","size":40,"customStyle":{"verticalAlign":"baseline"}})," 首页"]}),"leftIcons":i,"rightTexts":G,"onLeftIconClick":demo_onLeftIconClick.bind(this),"onRightTextClick":demo_onRightTextClick.bind(this)})}),(0,Z.jsx)(E.Z,{"fullScreen":!0,"title":"左侧定制","children":(0,Z.jsx)(v,{"title":"标题","leftIcons":i,"rightTexts":G,"leftTexts":f,"onLeftTextClick":demo_onLeftTextClick.bind(this)})}),(0,Z.jsx)(E.Z,{"fullScreen":!0,"title":"右侧定制","children":(0,Z.jsx)(v,{"title":"标题","leftIcons":L,"rightIcons":A,"onRightIconClick":demo_onRightIconClick.bind(this)})}),(0,Z.jsx)(E.Z,{"fullScreen":!0,"title":"2列均分导航","children":(0,Z.jsx)(v,{"type":"2column","title":"标题","rightTexts":H})}),(0,Z.jsx)(E.Z,{"fullScreen":!0,"title":"自定义导航","children":(0,Z.jsx)(v,{"type":"custom","showSplitLine":!1,"children":(0,Z.jsxs)(g.G7,{"className":"custom-nabbar","children":[(0,Z.jsx)(g.G7,{"className":"navbar--left","children":(0,Z.jsx)(o.Z,{"type":"return","size":40,"customStyle":{"verticalAlign":"top"}})}),(0,Z.jsx)(g.G7,{"className":"navbar--middle","children":(0,Z.jsx)(n.Z,{"padding":0,"showSplitLine":!1})}),(0,Z.jsx)(g.G7,{"className":"navbar--right","children":(0,Z.jsx)(a.Z,{"type":"info","info":9,"children":(0,Z.jsx)(o.Z,{"type":"detail-cart","customStyle":{"verticalAlign":"top"}})})})]})})}),(0,Z.jsx)(E.Z,{"children":(0,Z.jsx)(b.Z,{"list":r})}),(0,Z.jsx)(E.Z,{"children":(0,Z.jsx)(b.Z,{"list":z})}),(0,Z.jsx)(E.Z,{"children":(0,Z.jsx)(b.Z,{"list":s})})]})}},"5176":function(e,t,r){"use strict";r.d(t,{"Z":function(){return Badge}});var a=r(9641),n=r(9901),o=r(4353),c=r(7608),s=r.n(c),l={"dot":"dot","info":"info","text":"text","list":"list"};function isEmptyType(e){return"dot"===e||"text"===e||"list"===e}function onClick(e,t){var r;null===(r=e.onClick)||void 0===r||r.call(e,t)}function Badge(e){var t=function getClassObjectRoot(e){var t=e.type,r=void 0===t?"dot":t;return(0,a.Z)({},"ossa-badge--".concat(l[r]),l[r])}(e),r=function getClassObjectChild(e){var t,r=e.type,n=void 0===r?"dot":r,o=e.info,c=void 0===o?"0":o;return t={},(0,a.Z)(t,"ossa-badge__info--".concat(l[n]),n),(0,a.Z)(t,"ossa-ph-badge--is-widthAuto",c.length>1||c>9),t}(e),c=function getInfo(e){var t=e.type,r=e.max,a=void 0===r?99:r,n=e.info,o=void 0===n?0:n;return isEmptyType(t)?"":String(a&&o>a?a+"+":o)}(e),i=e.type,u=void 0===i?"dot":i,m=e.isShow&&(isEmptyType(u)||!!c&&"0"!==c),p=e.customStyle;return n.createElement(o.G7,{"className":s()("ossa-badge",t,e.className),"onClick":onClick.bind(this,e),"style":p},e.children,m&&n.createElement(o.G7,{"className":s()(r)},c))}Badge.defaultProps={"isShow":!0,"type":"dot"},Badge.options={"addGlobalClass":!0}},"2875":function(e,t,r){"use strict";r.d(t,{"Z":function(){return Icon}});var a=r(9641),n=r(9901),o=r(1245),c=r(4353),s=r(7608),l=r.n(s);function Icon(e){var t=function getClassObject(e){var t=e.type;return(0,a.Z)({},"ossa-icon--".concat(t),t)}(e),r=Object.assign(function getStyleObj(e){var t={},r=e.color,a=e.size,n=e.type;return r&&(t.color=r),a&&(t.fontSize=o.ZPm.pxTransform(a)),"home"===n||"subject"===n||"classify"===n||"cart"===n||"user"===n?t.color="#666":"grade"===n||"add-photo"===n||"check"===n?t.color="#ccc":"collect-selected"===n?t.color="#f48f18":"grade-selected"===n?t.color="#fab646":"record"===n&&(t.color="#ff8462"),t}(e),e.customStyle),s=e.type,i=e.className;return n.createElement(c.G7,{"className":l()("ossa-icon",t,i),"style":r,"onClick":function onClick(t){return function _onClick(e,t){var r;null===(r=t.onClick)||void 0===r||r.call(t,e)}(t,e)}},"avatar"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"delete-input"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"cart"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"cart-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"check-irrevocable"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"check-selected"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"close-h5"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"close-native-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"close-native"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"invisible"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"like-selected"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"sort-high"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"sort-low"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"subject-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"subject"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"voice"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"voice-close"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"upload-delete"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"classify"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"classify-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"share-circle"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"})),"share-circle-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"})),"detail-cart-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"detail-cart"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"my-group-buying-select"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"shopping-mall-select"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"}),n.createElement(c.xv,{"className":"path7"})),"shopping-mall"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"}),n.createElement(c.xv,{"className":"path7"})))}Icon.defaultProps={"type":"","size":40},Icon.options={"addGlobalClass":!0}},"1326":function(e,t,r){"use strict";r.d(t,{"Z":function(){return Index}});var a=r(3114),n=r(9641),o=r(9901),c=r(1245),s=r(4353),l=r(1449),i=r(7608),u=r.n(i),m=r(2875);function Index(e){var t=function getClassObject(e){var t=e.showSplitLine;return(0,n.Z)({},"ossa-search--show-split-line",t)}(e),r=Object.assign(function getStyleObj(e){var t=e.color,r=e.bgColor,a=e.padding,n=void 0===a?30:a;return{"color":t,"background":r,"paddingRight":c.ZPm.pxTransform(n),"paddingLeft":c.ZPm.pxTransform(n)}}(e),e.customStyle),i=(0,o.useState)(e.value),p=(0,a.Z)(i,2),f=p[0],d=void 0===f?"":f,h=p[1],v=(0,o.useState)(!1),x=(0,a.Z)(v,2),y=x[0],g=x[1],E=e.color,N=e.placeholder,b=e.className;return o.createElement(s.G7,{"className":u()("ossa-search",t,b),"style":r},o.createElement(s.G7,{"className":"ossa-search__wrap"},y&&o.createElement(m.Z,{"type":"search-little","customStyle":{"marginLeft":c.ZPm.pxTransform(20),"marginRight":c.ZPm.pxTransform(8),"position":"absolute","top":"50%","transform":"translateY(-50%)"},"size":28}),o.createElement(s.G7,{"className":"ossa-search__form","onClick":function onClick(){g(!0)}},o.createElement(l.Z,Object.assign({},e.taroProps||{},{"className":u()("ossa-search__input"),"type":"text","focus":y,"confirmType":"search","value":d,"placeholder":y?N:"","onInput":function onInput(t){return function onChange(e,t,r){var a;r(e.target.value),null===(a=t.onChange)||void 0===a||a.call(t,e,e.target.value)}(t,e,h)},"onConfirm":function onConfirm(t){return function _onConfirm(e,t,r){var a;null===(a=t.onConfirm)||void 0===a||a.call(t,e,r)}(t,e,d)},"onBlur":function onBlur(t){return function _onBlur(e,t){var r;null===(r=t.onBlur)||void 0===r||r.call(t,e)}(t,e)},"onFocus":function onFocus(t){return function _onFocus(e,t,r){var a;r(!0),null===(a=t.onFocus)||void 0===a||a.call(t,e)}(t,e,g)},"style":{"color":E},"placeholderClass":"ossa-search__input--placehoder-style"})),!d&&o.createElement(s.G7,{"className":"ossa-search__placeholder","style":{"textAlign":y?"left":"center"}},!y&&o.createElement(m.Z,{"type":"search-little","customStyle":{"marginLeft":c.ZPm.pxTransform(20),"marginRight":c.ZPm.pxTransform(8)},"size":28}),!y&&o.createElement(s.xv,null,N))),d.length>0&&y&&o.createElement(m.Z,{"type":"delete-input","customStyle":{"marginLeft":c.ZPm.pxTransform(20),"marginRight":c.ZPm.pxTransform(20)},"size":28,"color":"#cccccc","onClick":function onClick(){return function onClear(e,t){t(!1),e("")}(h,g)}})),y&&o.createElement(s.xv,{"className":"ossa-search--cancel","style":{"color":E},"onClick":function onClick(){return function onCancel(e,t){e(""),t(!1)}(h,g)}},"取消"))}Index.defaultProps={"padding":30,"showSplitLine":!0,"current":"","color":"#333333","placeholder":"搜索商品，共X款好物","bgColor":"#FAFAFA"},Index.options={"addGlobalClass":!0}},"5302":function(e,t,r){"use strict";r.d(t,{"r":function(){return warnDeprecatedProp},"j":function(){return deprecatedProp}});var a=new Set;function warnDeprecatedProp(e,t,r){var n="在 ".concat(e," 组件当中的 '").concat(r,"' 属性将在未来的版本中废弃，请使用 '").concat(t,"' 代替!");a.has(n)||(a.add(n),console.warn("%c🚨 ".concat(n),"font-weight: 800;"))}function deprecatedProp(e,t,r){return void 0!==t&&r&&r.oldPropName,null!=e?e:t}},"7608":function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var o=classNames.apply(null,r);o&&e.push(o)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0===(r=function(){return classNames}.apply(t,[]))||(e.exports=r)}()},"5472":function(e,t,r){"use strict";r(2458);var a=r(9901),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;n=o("react.element"),t.Fragment=o("react.fragment")}var c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var a,o={},i=null,u=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{"$$typeof":n,"type":e,"key":i,"ref":u,"props":o,"_owner":c.current}}t.jsx=q,t.jsxs=q},"1250":function(e,t,r){"use strict";e.exports=r(5472)}}]);