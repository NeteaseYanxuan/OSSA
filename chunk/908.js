/*! For license information please see 908.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[908],{"9802":function(e,t,r){"use strict";r.d(t,{"Ee":function(){return b},"xv":function(){return v},"G7":function(){return x}});var a=r(9901),n=r(9641),c=r(3114),s=r(8193),o=r(3341),l=r(5076),i=r(7666),u=r(10),m=r(1195),d=r(7629);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,m.Z)(e);if(t){var n=(0,m.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,u.Z)(this,r)}}a.createElement;var p="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||h.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var c=e.ref.current,s=n[r],o=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,s),t===p){if("scrollTop"===r)return void(c.mpScrollTop=s);if("scrollLeft"===r)return void(c.mpScrollLeft=s);if("scrollIntoView"===r)return void(c.mpScrollIntoView=s)}if("function"==typeof s&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),i=s;return t===p&&"scroll"===l&&(i=function fn(e){e instanceof CustomEvent&&s.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,i]),c.addEventListener(l,i)}return"string"==typeof s||"number"==typeof s?(c.setAttribute(r,s),void(c[r]=s)):"boolean"==typeof s?s?(c[r]=!0,c.setAttribute(r,s)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=s)}if("string"==typeof s)return void c.setAttribute(r,s);if(!s)return void c.removeAttribute(r);if(a)if("string"==typeof o)c.style.cssText="";else for(var u in o)updateStyle(c,u,"");for(var m in s)updateStyle(c,m,s[m])}else c.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),s=[];return a.forEach((function(e){c.indexOf(e)>-1?(s.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&s.push(e)})),(s=[].concat((0,d.Z)(s),(0,d.Z)(c))).join(" ")}(c,a,n):s}var f=function reactifyWebComponent(e){var t=function(t){(0,i.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,o.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,a.createRef)(),t}return(0,l.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,s.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,c.Z)(t,2),a=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(a,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,c={"ref":this.ref};return n&&(c.dangerouslySetInnerHTML=n),(0,a.createElement)(e,c,r)}}]),Index}(a.Component);return a.forwardRef((function(e,r){return a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))},x=(f("taro-cover-image-core"),f("taro-cover-view-core"),f("taro-match-media-core"),f("taro-movable-area-core"),f("taro-movable-view-core"),f("taro-page-container-core"),f("taro-root-portal-core"),f("taro-scroll-view-core"),f("taro-share-element-core"),f("taro-swiper-core"),f("taro-swiper-item-core"),f("taro-view-core")),v=(f("taro-icon-core"),f("taro-progress-core"),f("taro-rich-text-core"),f("taro-text-core")),b=(f("taro-button-core"),f("taro-checkbox-core"),f("taro-checkbox-group-core"),f("taro-editor-core"),f("taro-form-core"),f("taro-keyboard-accessory-core"),f("taro-label-core"),f("taro-picker-core"),f("taro-picker-view-core"),f("taro-picker-view-column-core"),f("taro-radio-core"),f("taro-radio-group-core"),f("taro-slider-core"),f("taro-switch-core"),f("taro-textarea-core"),f("taro-functional-page-navigator-core"),f("taro-navigator-core"),f("taro-audio-core"),f("taro-camera-core"),f("taro-image-core"));f("taro-live-player-core"),f("taro-video-core"),f("taro-voip-room-core"),f("taro-map-core"),f("taro-canvas-core"),f("taro-web-view-core"),f("taro-ad-core"),f("taro-ad-custom-core"),f("taro-official-account-core"),f("taro-open-data-core"),f("taro-navigation-bar-core"),f("taro-page-meta-core"),f("taro-custom-wrapper-core")},"4353":function(e,t,r){"use strict";r.d(t,{"tq":function(){return c},"t3":function(){return s},"G7":function(){return o},"xv":function(){return l},"zx":function(){return i},"gx":function(){return u},"Ee":function(){return m},"gO":function(){return d},"fV":function(){return p}});var a=r(9901),n=r(7924),c=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core"),(0,n.Z)("taro-movable-view-core"),(0,n.Z)("taro-page-container-core"),(0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core"),(0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),s=(0,n.Z)("taro-swiper-item-core"),o=(0,n.Z)("taro-view-core"),l=((0,n.Z)("taro-icon-core"),(0,n.Z)("taro-progress-core"),(0,n.Z)("taro-rich-text-core"),(0,n.Z)("taro-text-core")),i=(0,n.Z)("taro-button-core"),u=((0,n.Z)("taro-checkbox-core"),(0,n.Z)("taro-checkbox-group-core"),(0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core"),(0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core"),(0,n.Z)("taro-picker-core"),(0,n.Z)("taro-picker-view-core"),(0,n.Z)("taro-picker-view-column-core"),(0,n.Z)("taro-radio-core"),(0,n.Z)("taro-radio-group-core"),(0,n.Z)("taro-slider-core"),(0,n.Z)("taro-switch-core"),(0,n.Z)("taro-textarea-core")),m=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core"),(0,n.Z)("taro-image-core")),d=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-live-pusher-core"),(0,n.Z)("taro-video-core"),(0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-web-view-core"),(0,n.Z)("taro-page-meta-core"),a.Fragment),p=(0,n.Z)("taro-custom-wrapper-core")},"7924":function(e,t,r){"use strict";var a=r(9641),n=r(3114),c=r(8193),s=r(3341),o=r(5076),l=r(7666),i=r(10),u=r(1195),m=r(7629),d=r(9901);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,u.Z)(e);if(t){var n=(0,u.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,i.Z)(this,r)}}d.createElement;var p="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||h.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var c=e.ref.current,s=n[r],o=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,s),t===p){if("scrollTop"===r)return void(c.mpScrollTop=s);if("scrollLeft"===r)return void(c.mpScrollLeft=s);if("scrollIntoView"===r)return void(c.mpScrollIntoView=s)}if("function"==typeof s&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),i=s;return t===p&&"scroll"===l&&(i=function fn(e){e instanceof CustomEvent&&s.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,i]),c.addEventListener(l,i)}return"string"==typeof s||"number"==typeof s?(c.setAttribute(r,s),void(c[r]=s)):"boolean"==typeof s?s?(c[r]=!0,c.setAttribute(r,s)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=s)}if("string"==typeof s)return void c.setAttribute(r,s);if(!s)return void c.removeAttribute(r);if(a)if("string"==typeof o)c.style.cssText="";else for(var u in o)updateStyle(c,u,"");for(var d in s)updateStyle(c,d,s[d])}else c.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),s=[];return a.forEach((function(e){c.indexOf(e)>-1?(s.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&s.push(e)})),(s=[].concat((0,m.Z)(s),(0,m.Z)(c))).join(" ")}(c,a,n):s}t.Z=function reactifyWebComponent(e){var t=function(t){(0,l.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,s.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,d.createRef)(),t}return(0,o.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,n.Z)(t,2),a=r[0],c=r[1];e.ref.current&&e.ref.current.removeEventListener(a,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,a=t.dangerouslySetInnerHTML,n={"ref":this.ref};return a&&(n.dangerouslySetInnerHTML=a),(0,d.createElement)(e,n,r)}}]),Index}(d.Component);return d.forwardRef((function(e,r){return d.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"2002":function(e,t,r){"use strict";r.d(t,{"ZT":function(){return setNavigationBarTitle}});var a=r(9830),n=r(8081),c=r(9359);(0,n.tA)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=(0,n.jc)(e);if(!t.flag){var r={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var s=e.title,o=e.success,l=e.fail,i=e.complete,u=new c.N({"name":"setNavigationBarTitle","success":o,"fail":l,"complete":i});return s&&"string"==typeof s?((0,a.Td)(s),u.success()):u.fail({"errMsg":(0,n.Hl)({"para":"title","correct":"String","wrong":s})})}(0,n.tA)("hideNavigationBarLoading"),(0,n.tA)("hideHomeButton")},"9359":function(e,t,r){"use strict";r.d(t,{"N":function(){return c}});var a=r(3341),n=r(5076),c=function(){function MethodHandler(e){var t=e.name,r=e.success,n=e.fail,c=e.complete;(0,a.Z)(this,MethodHandler),this.methodName=t,this.__success=r,this.__fail=n,this.__complete=c}return(0,n.Z)(MethodHandler,[{"key":"success","value":function success(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.resolve.bind(Promise);return e.errMsg||(e.errMsg="".concat(this.methodName,":ok")),"function"==typeof this.__success&&this.__success(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}},{"key":"fail","value":function fail(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.reject.bind(Promise);return e.errMsg?e.errMsg="".concat(this.methodName,":fail ").concat(e.errMsg):e.errMsg="".concat(this.methodName,":fail"),console.error(e.errMsg),"function"==typeof this.__fail&&this.__fail(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}}]),MethodHandler}()},"1601":function(e,t,r){"use strict";r.d(t,{"Z":function(){return p}});var a=r(9641),n=r(3341),c=r(5076),s=r(7666),o=r(4756),l=r(9901),i=r(9802),u=r(7608),m=r.n(u),d=r(1250),p=function(e){(0,s.Z)(DemoBlock,e);var t=(0,o.Z)(DemoBlock);function DemoBlock(){return(0,n.Z)(this,DemoBlock),t.apply(this,arguments)}return(0,c.Z)(DemoBlock,[{"key":"render","value":function render(){var e,t,r=["block","block__title","block__subTitle"],n=[(e={},(0,a.Z)(e,"block--hide-padding",this.props.hidePd),(0,a.Z)(e,"block--hide-mb",this.props.hideMb),e),(0,a.Z)({},"block__title--hide-padding",this.props.hidePd)],c=this.props,s=c.customStyle,o=c.className;return(0,d.jsxs)(i.G7,{"className":m()(r[0],n[0],o),"style":s,"children":[(0,d.jsxs)(i.G7,{"className":"block__header","children":[this.props.title&&(0,d.jsx)(i.G7,{"className":m()(r[1],n[1]),"children":this.props.title}),this.props.subTitle&&(0,d.jsx)(i.G7,{"className":m()(r[2]),"children":this.props.subTitle})]}),(0,d.jsx)(i.G7,{"className":m()((t={},(0,a.Z)(t,"block__body",!0),(0,a.Z)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(l.Component)},"8120":function(e,t,r){"use strict";r.d(t,{"Z":function(){return f}});var a=r(7950),n=r(3341),c=r(5076),s=r(7666),o=r(4756),l=r(9901),i=r(1232),u=r(6070),m=r(9802),d=r(7608),p=r.n(d),h=r(1250),f=function(e){(0,s.Z)(DemoHeader,e);var t=(0,o.Z)(DemoHeader);function DemoHeader(){return(0,n.Z)(this,DemoHeader),t.apply(this,arguments)}return(0,c.Z)(DemoHeader,[{"key":"onClick","value":function onClick(){this.props.onClick?this.props.onClick():(0,i.T8)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=u.ZPm.getEnv()!==u.ZPm.ENV_TYPE.WEB?"hide-split-line":"",r=this.props.icon;return(0,h.jsxs)(m.G7,{"className":p()(e[0],t),"children":[u.ZPm.getEnv()===u.ZPm.ENV_TYPE.WEB&&(0,h.jsx)(a.Z,{"type":"detail-home","onClick":this.onClick.bind(this)}),u.ZPm.getEnv()!==u.ZPm.ENV_TYPE.WEB&&r&&(0,h.jsx)(a.Z,{"type":r,"size":44,"customStyle":{"marginRight":u.ZPm.pxTransform(18)}}),(0,h.jsx)(m.G7,{"className":p()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(l.Component)},"7929":function(e,t,r){"use strict";r.d(t,{"Z":function(){return d}});var a=r(3341),n=r(5076),c=r(7666),s=r(4756),o=r(9901),l=r(9802),i=r(7608),u=r.n(i),m=r(1250),d=function(e){(0,c.Z)(DemoTable,e);var t=(0,s.Z)(DemoTable);function DemoTable(){return(0,a.Z)(this,DemoTable),t.apply(this,arguments)}return(0,n.Z)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var r=t.head,a=t.data,n=t.title,c={};r&&r.length&&(c.width=100/r.length+"%");var s={};return a&&a.length&&(s.width=100/a.length+"%"),(0,m.jsxs)(l.G7,{"className":u()(e[0]),"children":[n&&(0,m.jsx)(l.G7,{"className":u()(e[1]),"children":this.props.list.title}),(0,m.jsxs)(l.G7,{"className":u()(e[2]),"children":[r&&r.length?(0,m.jsx)(l.G7,{"className":u()(e[3]),"children":r.map((function(t){return(0,m.jsx)(l.G7,{"style":c,"className":u()(e[4]),"children":t},t)}))}):null,a&&a.length?(0,m.jsx)(l.G7,{"children":a.map((function(e,t){return(0,m.jsx)(l.G7,{"className":"table__tr","children":e.list.map((function(e){return(0,m.jsx)(l.G7,{"className":"table__td","style":s,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(o.Component)},"908":function(e,t,r){"use strict";r.r(t),r.d(t,{"default":function(){return demo_Index}});var a=r(9641),n=r(9901),c=r(4353),s=r(7608),o=r.n(s),l=(0,n.createContext)({}),i=l.Provider;l.Consumer;function Tabs(e){var t=function getClassObject(e){var t=e.type;return(0,a.Z)({},"ossa-tabs--".concat(t),t)}(e),r=e.customStyle,s=e.className,l=e.type;return n.createElement(i,{"value":{"type":e.type,"size":e.size}},n.createElement(c.G7,{"className":o()("ossa-tabs",t,s),"style":r},e.renderHeader,n.createElement(c.G7,{"className":o()("ossa-tabs__body","ossa-tabs--".concat(l,"__body"))},e.children)))}function Index(e){var t=e.className,r=e.customStyle,s=function tabs_panel_getClassObject(e){var t=e.index,r=e.current,n=void 0===r?0:r;return(0,a.Z)({},"ossa-tabs-panel--active",t===n)}(e),l=Object.assign({},r);return n.createElement(c.G7,{"className":o()("ossa-tabs-panel",s,t),"style":l},n.createElement(c.G7,{"className":"ossa-tabs-panel__content"},e.children))}Tabs.defaultProps={"type":"horizontal","size":"default","showSplitLine":!1},Tabs.options={"addGlobalClass":!0,"styleIsolation":"apply-shared"},Index.defaultProps={"current":0,"index":0},Index.options={"addGlobalClass":!0};var u=r(6070);function tabs_header_Index(e){var t=e.className,r=e.customStyle,s=e.bgColor,i=(0,n.useContext)(l),m=function tabs_header_getClassObject(e){var t,r=e.showSplitLine,n=e.scroll,c=e.type,s=e.size;return t={},(0,a.Z)(t,"ossa-tabs-header--".concat(c),s),(0,a.Z)(t,"ossa-tabs-header--".concat(c,"--").concat(s),s),(0,a.Z)(t,"ossa-tabs-header--show-split-line",r),(0,a.Z)(t,"ossa-tabs-header--is-scroll",n),t}(Object.assign(Object.assign({},e),i)),d=function getStyleObject(e){var t=e.space,r=e.type,a={};return t&&(a.padding="".concat("vertical"===r?u.ZPm.pxTransform(t):0," ").concat("horizontal"===r?u.ZPm.pxTransform(t):0)),a}(Object.assign(Object.assign({},e),i));return n.createElement(c.G7,{"className":o()("ossa-tabs-header",m,t),"style":r},n.createElement(c.G7,{"className":o()("ossa-tabs-header__tab"),"style":Object.assign({"background":s},d)},n.createElement(c.G7,{"className":o()("ossa-tabs-header__overflow")},n.createElement(c.G7,{"className":o()("ossa-tabs-header__scroll")},e.children))))}tabs_header_Index.defaultProps={"type":"horizontal","size":"default","space":0,"scroll":!1,"bgColor":"#fafafa","showSplitLine":!1},tabs_header_Index.options={"addGlobalClass":!0,"styleIsolation":"apply-shared"};var m=r(7950);function tabs_header_item_getClassObject(e,t){var r,n=e.type,c=e.size;return r={},(0,a.Z)(r,"ossa-tabs-item--".concat(n),n),(0,a.Z)(r,"ossa-tabs-item--".concat(n,"--").concat(c),!0),(0,a.Z)(r,"ossa-tabs-item--is-active",t),r}function tabs_header_item_Index(e){var t=e.className,r=e.customStyle,a=e.index,s=e.current,i=void 0===s?0:s,d=e.text,p=void 0===d?"":d,h=e.custom,f=e.selectedColor,x=e.icon,v=e.selectedIcon,b=(0,n.useContext)(l),y=Object.assign(function tabs_header_item_getStyleObject(e){var t=e.index,r=e.current,a=e.selectedColor,n=e.color,c={};return c.color=t===r?a:n,c}(e),r);return n.createElement(c.G7,{"className":o()("ossa-tabs-item",tabs_header_item_getClassObject(Object.assign(Object.assign({},e),b),a===i),t),"style":y,"onClick":function onClick(){return function _onClick(e){var t,r=e.index;null===(t=e.onClick)||void 0===t||t.call(e,r)}(e)}},n.createElement(c.G7,{"className":"ossa-tabs-item__underline","style":{"borderBottomColor":i===a?f:"transparent"}},n.createElement(c.G7,{"className":"ossa-tabs-item__texts"},h?a===i?e.renderSelectedCustom:e.renderCustom:n.createElement(c.gO,null,n.createElement(c.xv,{"className":"ossa-tabs-item__text"},function getText(e){return e.length>5?e.slice(0,5)+"...":e}(p)),x&&n.createElement(m.Z,{"customStyle":{"marginLeft":u.ZPm.pxTransform(8),"verticalAlign":"initial"},"size":26,"color":"inherit","type":a!==i?x:v})))))}tabs_header_item_Index.defaultProps={"type":"horizontal","size":"default","color":"#333333","selectedColor":"#dd1a21","text":"","custom":!1},tabs_header_item_Index.options={"addGlobalClass":!0};var d=r(3114),p=r(2002),h=r(9802),f=r(1601),x=r(8120),v=r(7929),b=r(1250);function Countdown(e){var t=e.time,r=void 0===t?36e4:t,a=(0,n.useState)(r),c=(0,d.Z)(a,2),s=c[0],o=c[1];return(0,n.useEffect)((function(){var e=setInterval((function(){o(s-1)}),1e3);return function(){return clearInterval(e)}}),[s]),(0,b.jsxs)(h.G7,{"className":"demo-countdown","children":[(0,b.jsx)(h.xv,{"className":"demo-countdown--text","children":"".concat(Math.floor(s/6e3)).padStart(2,"0")}),(0,b.jsx)(h.xv,{"className":"demo-countdown--text","children":"".concat(Math.floor(s/100)%60).padStart(2,"0")}),(0,b.jsx)(h.xv,{"className":"demo-countdown--text","children":"".concat(s%100).padStart(2,"0")})]})}Countdown.defaultProps={"time":36e4};var y={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["type","horizontal | vertical，可选","string","horizontal"]},{"list":["renderHeader","一个OsTabsHeader组件，必选","OsTabsHeader","-"]}]},E={"title":"API-TabsHeader","head":["参数","说明","类型","默认值"],"data":[{"list":["type","horizontal | vertical，可选","string","horizontal"]},{"list":["size","default | large，尺寸，可选","string","default"]},{"list":["showSplitLine","是否显示分割线，可选","boolean","false"]},{"list":["scroll","是否开启滚动，可选","boolean","false"]},{"list":["bgColor","背景色，可选","string","#fafafa"]},{"list":["value","当前选中索引，可选","number","0"]}]},_={"title":"API-TabsHeaderItem","head":["参数","说明","类型","默认值"],"data":[{"list":["type","horizontal | vertical，可选","string","horizontal"]},{"list":["size","default | large，尺寸，可选","string","default"]},{"list":["index","该项索引，必选","number","-"]},{"list":["current","当前索引，可选","number","0"]},{"list":["color","文字颜色，可选","string","#333333"]},{"list":["selectedColor","选中文字颜色，可选","string","#DD1A21"]},{"list":["text","tab文案，可选","string","-"]},{"list":["icon","取值参考con，可选","string","-"]},{"list":["selectIcon","取值参考Icon，可选","string","-"]},{"list":["custom","是否显示自定义组件，可选","boolean","false"]},{"list":["renderCustom","自定义组件，可选","Component","-"]},{"list":["renderSelectedCustom","选中显示的自定义组件，可选","Component","-"]}]},N=[{"text":"标签1","icon":"inform","selectedIcon":"inform"},{"text":"标签2","icon":"phone","selectedIcon":"phone"},{"text":"标签3","icon":"sort","selectedIcon":"sort-high"},{"text":"标签4","icon":"collect","selectedIcon":"collect"},{"text":"标签5","icon":"arrows","selectedIcon":"arrows"}],g=[{"text":"标签1"},{"text":"标签2"},{"text":"标签3"},{"text":"标签4"},{"text":"标签5"},{"text":"标签6"},{"text":"标签7"},{"text":"标签8"},{"text":"标签9"},{"text":"标签10"},{"text":"标签11"},{"text":"标签12"},{"text":"标签13"},{"text":"标签14"},{"text":"标签15"},{"text":"标签16"},{"text":"标签17"},{"text":"标签18"},{"text":"标签19"},{"text":"标签20"},{"text":"标签21"},{"text":"标签22"}],Z=[{"text":"标签1"},{"text":"标签2"},{"text":"标签3"},{"text":"标签4"},{"text":"标签5"},{"text":"标签6"},{"text":"标签7"},{"text":"标签8"},{"text":"标签9"},{"text":"标签10"},{"text":"标签11"},{"text":"标签12"},{"text":"标签13"},{"text":"标签14"},{"text":"标签15"},{"text":"标签16"},{"text":"标签17"},{"text":"标签18"},{"text":"标签19"}];function demo_onClick(e,t){t(e)}function onClick4(e,t){t(e)}var j="Tab 选项卡";function demo_Index(e){var t=(0,n.useState)(y),r=(0,d.Z)(t,1)[0],c=(0,n.useState)(E),s=(0,d.Z)(c,1)[0],l=(0,n.useState)(_),i=(0,d.Z)(l,1)[0],m=(0,n.useState)(g),k=(0,d.Z)(m,1)[0],C=(0,n.useState)(N),w=(0,d.Z)(C,1)[0],S=(0,n.useState)(Z),I=(0,d.Z)(S,1)[0],O=(0,n.useState)(0),P=(0,d.Z)(O,2),G=P[0],T=P[1],H=(0,n.useState)(0),D=(0,d.Z)(H,2),z=D[0],A=D[1],L=(0,n.useState)(0),R=(0,d.Z)(L,2),M=R[0],B=R[1],U=(0,n.useState)(0),W=(0,d.Z)(U,2),V=W[0],K=W[1],F=(0,n.useState)(0),Y=(0,d.Z)(F,2),$=Y[0],J=Y[1],X=function demo_getClassObject(){return(0,a.Z)({"page":!0},"demo-tabs",!0)}();return(0,n.useEffect)((function(){(0,p.ZT)({"title":j})}),[]),(0,b.jsxs)(h.G7,{"className":o()(X),"children":[(0,b.jsx)(x.Z,{"title":j}),(0,b.jsx)(f.Z,{"title":"基础（均分）","fullScreen":!0,"children":(0,b.jsxs)(Tabs,{"renderHeader":(0,b.jsxs)(tabs_header_Index,{"value":G,"children":[(0,b.jsx)(tabs_header_item_Index,{"index":0,"current":G,"text":"标签1","onClick":function onClick(e){return demo_onClick(e,T)}}),(0,b.jsx)(tabs_header_item_Index,{"index":1,"current":G,"text":"标签2","onClick":function onClick(e){return demo_onClick(e,T)}}),(0,b.jsx)(tabs_header_item_Index,{"index":2,"current":G,"text":"标签3","onClick":function onClick(e){return demo_onClick(e,T)}}),(0,b.jsx)(tabs_header_item_Index,{"index":3,"current":G,"text":"标签4","onClick":function onClick(e){return demo_onClick(e,T)}}),(0,b.jsx)(tabs_header_item_Index,{"index":4,"current":G,"text":"标签5","onClick":function onClick(e){return demo_onClick(e,T)}})]}),"children":[(0,b.jsx)(Index,{"current":G,"index":0,"customStyle":{"height":u.ZPm.pxTransform(400)},"children":(0,b.jsx)(h.G7,{"className":"tabs__content","children":"标签1内容区域"})}),(0,b.jsx)(Index,{"current":G,"index":1,"customStyle":{"height":u.ZPm.pxTransform(400)},"children":(0,b.jsx)(h.G7,{"className":"tabs__content","children":"标签2内容区域"})}),(0,b.jsx)(Index,{"current":G,"index":2,"customStyle":{"height":u.ZPm.pxTransform(400)},"children":(0,b.jsx)(h.G7,{"className":"tabs__content","children":"标签3内容区域"})}),(0,b.jsx)(Index,{"current":G,"index":3,"customStyle":{"height":u.ZPm.pxTransform(400)},"children":(0,b.jsx)(h.G7,{"className":"tabs__content","children":"标签4内容区域"})}),(0,b.jsx)(Index,{"current":G,"index":4,"customStyle":{"height":u.ZPm.pxTransform(400)},"children":(0,b.jsx)(h.G7,{"className":"tabs__content","children":"标签5内容区域"})})]})}),(0,b.jsx)(f.Z,{"title":"tab左右留间距后均分","fullScreen":!0,"children":(0,b.jsxs)(Tabs,{"size":"large","renderHeader":(0,b.jsxs)(tabs_header_Index,{"size":"large","bgColor":"#fff","space":60,"value":$,"children":[(0,b.jsx)(tabs_header_item_Index,{"size":"large","index":0,"current":$,"custom":!0,"renderCustom":(0,b.jsx)(h.xv,{"children":"标签1"}),"renderSelectedCustom":(0,b.jsx)(Countdown,{}),"onClick":function onClick(e){return onClick4(e,J)}}),(0,b.jsx)(tabs_header_item_Index,{"size":"large","index":1,"current":$,"text":"标签2","onClick":function onClick(e){return onClick4(e,J)}})]}),"children":[(0,b.jsx)(Index,{"current":$,"index":0,"customStyle":{"height":u.ZPm.pxTransform(400)},"children":(0,b.jsx)(h.G7,{"className":"tabs__content","children":"标签1内容区域"})}),(0,b.jsx)(Index,{"current":$,"index":1,"customStyle":{"height":u.ZPm.pxTransform(400)},"children":(0,b.jsx)(h.G7,{"className":"tabs__content","children":"标签2内容区域"})})]})}),(0,b.jsx)(f.Z,{"title":"横向超过5个（开启横向滚动）","fullScreen":!0,"children":(0,b.jsx)(Tabs,{"renderHeader":(0,b.jsx)(tabs_header_Index,{"scroll":!0,"children":k.map((function(e,t){return(0,b.jsx)(tabs_header_item_Index,{"index":t,"current":z,"text":e.text,"onClick":function onClick(e){return function onClick1(e,t){t(e)}(e,A)}},e.text)}))}),"children":k.map((function(e,t){return(0,b.jsx)(Index,{"current":z,"index":t,"customStyle":{"height":u.ZPm.pxTransform(400)},"children":(0,b.jsxs)(h.G7,{"className":"tabs__content","children":["标签",t+1,"内容区域"]})},e.text)}))})}),(0,b.jsx)(f.Z,{"title":"竖状(高度超过一屏，开启竖向滚动)","fullScreen":!0,"children":(0,b.jsx)(Tabs,{"type":"vertical","renderHeader":(0,b.jsx)(tabs_header_Index,{"type":"vertical","scroll":!0,"children":I.map((function(e,t){return(0,b.jsx)(tabs_header_item_Index,{"type":"vertical","index":t,"current":V,"text":e.text,"onClick":function onClick(e){return function onClick3(e,t){t(e)}(e,K)}},e.text)}))}),"children":I.map((function(e,t){return(0,b.jsx)(Index,{"current":V,"index":t,"customStyle":{"height":u.ZPm.pxTransform(400),"width":"100%","padding":"100PX 50PX"},"children":(0,b.jsxs)(h.G7,{"className":"tabs__content","children":["标签",t+1,"内容区域"]})},e.text)}))})}),(0,b.jsx)(f.Z,{"title":"带icon","fullScreen":!0,"children":(0,b.jsx)(Tabs,{"renderHeader":(0,b.jsx)(tabs_header_Index,{"children":w.map((function(e,t){return(0,b.jsx)(tabs_header_item_Index,{"index":t,"current":M,"text":e.text,"icon":e.icon,"selectedIcon":e.selectedIcon,"onClick":function onClick(e){return function onClick2(e,t){t(e)}(e,B)}},e.icon)}))}),"children":w.map((function(e,t){return(0,b.jsx)(Index,{"current":M,"index":t,"customStyle":{"height":u.ZPm.pxTransform(400),"width":"100%"},"children":(0,b.jsxs)(h.G7,{"className":"tabs__content","children":["标签",t+1,"内容区域"]})},e.text)}))})}),(0,b.jsx)(f.Z,{"children":(0,b.jsx)(v.Z,{"list":r})}),(0,b.jsx)(f.Z,{"children":(0,b.jsx)(v.Z,{"list":s})}),(0,b.jsx)(f.Z,{"children":(0,b.jsx)(v.Z,{"list":i})})]})}},"7950":function(e,t,r){"use strict";r.d(t,{"Z":function(){return Icon}});var a=r(9641),n=r(9901),c=r(6070),s=r(4353),o=r(7608),l=r.n(o);function Icon(e){var t=function getClassObject(e){var t=e.type;return(0,a.Z)({},"ossa-icon--".concat(t),t)}(e),r=Object.assign(function getStyleObj(e){var t={},r=e.color,a=e.size,n=e.type;return r&&(t.color=r),a&&(t.fontSize=c.ZPm.pxTransform(a)),"home"===n||"subject"===n||"classify"===n||"cart"===n||"user"===n?t.color="#666":"grade"===n||"add-photo"===n||"check"===n?t.color="#ccc":"collect-selected"===n?t.color="#f48f18":"grade-selected"===n?t.color="#fab646":"record"===n&&(t.color="#ff8462"),t}(e),e.customStyle),o=e.type,i=e.className;return n.createElement(s.G7,{"className":l()("ossa-icon",t,i),"style":r,"onClick":function onClick(t){return function _onClick(e,t){var r;null===(r=t.onClick)||void 0===r||r.call(t,e)}(t,e)}},"avatar"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"})),"delete-input"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"})),"cart"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"}),n.createElement(s.xv,{"className":"path5"})),"cart-pressed"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"}),n.createElement(s.xv,{"className":"path5"})),"check-irrevocable"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"})),"check-selected"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"})),"close-h5"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"})),"close-native-pressed"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"}),n.createElement(s.xv,{"className":"path5"})),"close-native"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"}),n.createElement(s.xv,{"className":"path5"})),"invisible"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"}),n.createElement(s.xv,{"className":"path5"})),"like-selected"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"})),"sort-high"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"})),"sort-low"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"})),"subject-pressed"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"})),"subject"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"})),"voice"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"})),"voice-close"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"})),"upload-delete"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"})),"classify"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"})),"classify-pressed"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"})),"share-circle"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"}),n.createElement(s.xv,{"className":"path5"}),n.createElement(s.xv,{"className":"path6"})),"share-circle-pressed"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"}),n.createElement(s.xv,{"className":"path5"}),n.createElement(s.xv,{"className":"path6"})),"detail-cart-pressed"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"}),n.createElement(s.xv,{"className":"path5"})),"detail-cart"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"}),n.createElement(s.xv,{"className":"path5"})),"my-group-buying-select"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"})),"shopping-mall-select"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"}),n.createElement(s.xv,{"className":"path5"}),n.createElement(s.xv,{"className":"path6"}),n.createElement(s.xv,{"className":"path7"})),"shopping-mall"===o&&n.createElement(s.G7,null,n.createElement(s.xv,{"className":"path1"}),n.createElement(s.xv,{"className":"path2"}),n.createElement(s.xv,{"className":"path3"}),n.createElement(s.xv,{"className":"path4"}),n.createElement(s.xv,{"className":"path5"}),n.createElement(s.xv,{"className":"path6"}),n.createElement(s.xv,{"className":"path7"})))}Icon.defaultProps={"type":"","size":40},Icon.options={"addGlobalClass":!0}},"7608":function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var c=classNames.apply(null,r);c&&e.push(c)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0===(r=function(){return classNames}.apply(t,[]))||(e.exports=r)}()},"5472":function(e,t,r){"use strict";r(2458);var a=r(9901),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var a,c={},i=null,u=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(c[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===c[a]&&(c[a]=t[a]);return{"$$typeof":n,"type":e,"key":i,"ref":u,"props":c,"_owner":s.current}}t.jsx=q,t.jsxs=q},"1250":function(e,t,r){"use strict";e.exports=r(5472)}}]);