/*! For license information please see 4225.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[4225],{"9802":function(e,t,r){"use strict";r.d(t,{"Ee":function(){return E},"xv":function(){return x},"G7":function(){return d}});var a=r(9901),n=r(9641),o=r(3114),c=r(8193),l=r(3341),s=r(5076),i=r(7666),u=r(10),m=r(1195),p=r(7629);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,m.Z)(e);if(t){var n=(0,m.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,u.Z)(this,r)}}a.createElement;var f="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||v.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var o=e.ref.current,c=n[r],l=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&o.setAttribute(r,c),t===f){if("scrollTop"===r)return void(o.mpScrollTop=c);if("scrollLeft"===r)return void(o.mpScrollLeft=c);if("scrollIntoView"===r)return void(o.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),i=c;return t===f&&"scroll"===s&&(i=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,i]),o.addEventListener(s,i)}return"string"==typeof c||"number"==typeof c?(o.setAttribute(r,c),void(o[r]=c)):"boolean"==typeof c?c?(o[r]=!0,o.setAttribute(r,c)):(o[r]=!1,o.removeAttribute(r)):void(o[r]=c)}if("string"==typeof c)return void o.setAttribute(r,c);if(!c)return void o.removeAttribute(r);if(a)if("string"==typeof l)o.style.cssText="";else for(var u in l)updateStyle(o,u,"");for(var m in c)updateStyle(o,m,c[m])}else o.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),o=(r.className||r.class||"").split(" "),c=[];return a.forEach((function(e){o.indexOf(e)>-1?(c.push(e),o=o.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,p.Z)(c),(0,p.Z)(o))).join(" ")}(o,a,n):c}var h=function reactifyWebComponent(e){var t=function(t){(0,i.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,l.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,a.createRef)(),t}return(0,s.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,o.Z)(t,2),a=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(a,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,a.createElement)(e,o,r)}}]),Index}(a.Component);return a.forwardRef((function(e,r){return a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))},d=(h("taro-cover-image-core"),h("taro-cover-view-core"),h("taro-match-media-core"),h("taro-movable-area-core"),h("taro-movable-view-core"),h("taro-page-container-core"),h("taro-root-portal-core"),h("taro-scroll-view-core"),h("taro-share-element-core"),h("taro-swiper-core"),h("taro-swiper-item-core"),h("taro-view-core")),x=(h("taro-icon-core"),h("taro-progress-core"),h("taro-rich-text-core"),h("taro-text-core")),E=(h("taro-button-core"),h("taro-checkbox-core"),h("taro-checkbox-group-core"),h("taro-editor-core"),h("taro-form-core"),h("taro-keyboard-accessory-core"),h("taro-label-core"),h("taro-picker-core"),h("taro-picker-view-core"),h("taro-picker-view-column-core"),h("taro-radio-core"),h("taro-radio-group-core"),h("taro-slider-core"),h("taro-switch-core"),h("taro-textarea-core"),h("taro-functional-page-navigator-core"),h("taro-navigator-core"),h("taro-audio-core"),h("taro-camera-core"),h("taro-image-core"));h("taro-live-player-core"),h("taro-video-core"),h("taro-voip-room-core"),h("taro-map-core"),h("taro-canvas-core"),h("taro-web-view-core"),h("taro-ad-core"),h("taro-ad-custom-core"),h("taro-official-account-core"),h("taro-open-data-core"),h("taro-navigation-bar-core"),h("taro-page-meta-core"),h("taro-custom-wrapper-core")},"4353":function(e,t,r){"use strict";r.d(t,{"tq":function(){return o},"t3":function(){return c},"G7":function(){return l},"xv":function(){return s},"zx":function(){return i},"gx":function(){return u},"Ee":function(){return m},"gO":function(){return p},"fV":function(){return f}});var a=r(9901),n=r(7924),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core"),(0,n.Z)("taro-movable-view-core"),(0,n.Z)("taro-page-container-core"),(0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core"),(0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),c=(0,n.Z)("taro-swiper-item-core"),l=(0,n.Z)("taro-view-core"),s=((0,n.Z)("taro-icon-core"),(0,n.Z)("taro-progress-core"),(0,n.Z)("taro-rich-text-core"),(0,n.Z)("taro-text-core")),i=(0,n.Z)("taro-button-core"),u=((0,n.Z)("taro-checkbox-core"),(0,n.Z)("taro-checkbox-group-core"),(0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core"),(0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core"),(0,n.Z)("taro-picker-core"),(0,n.Z)("taro-picker-view-core"),(0,n.Z)("taro-picker-view-column-core"),(0,n.Z)("taro-radio-core"),(0,n.Z)("taro-radio-group-core"),(0,n.Z)("taro-slider-core"),(0,n.Z)("taro-switch-core"),(0,n.Z)("taro-textarea-core")),m=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core"),(0,n.Z)("taro-image-core")),p=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-live-pusher-core"),(0,n.Z)("taro-video-core"),(0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-web-view-core"),(0,n.Z)("taro-page-meta-core"),a.Fragment),f=(0,n.Z)("taro-custom-wrapper-core")},"7924":function(e,t,r){"use strict";var a=r(9641),n=r(3114),o=r(8193),c=r(3341),l=r(5076),s=r(7666),i=r(10),u=r(1195),m=r(7629),p=r(9901);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,u.Z)(e);if(t){var n=(0,u.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,i.Z)(this,r)}}p.createElement;var f="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||v.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var o=e.ref.current,c=n[r],l=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&o.setAttribute(r,c),t===f){if("scrollTop"===r)return void(o.mpScrollTop=c);if("scrollLeft"===r)return void(o.mpScrollLeft=c);if("scrollIntoView"===r)return void(o.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),i=c;return t===f&&"scroll"===s&&(i=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,i]),o.addEventListener(s,i)}return"string"==typeof c||"number"==typeof c?(o.setAttribute(r,c),void(o[r]=c)):"boolean"==typeof c?c?(o[r]=!0,o.setAttribute(r,c)):(o[r]=!1,o.removeAttribute(r)):void(o[r]=c)}if("string"==typeof c)return void o.setAttribute(r,c);if(!c)return void o.removeAttribute(r);if(a)if("string"==typeof l)o.style.cssText="";else for(var u in l)updateStyle(o,u,"");for(var p in c)updateStyle(o,p,c[p])}else o.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),o=(r.className||r.class||"").split(" "),c=[];return a.forEach((function(e){o.indexOf(e)>-1?(c.push(e),o=o.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,m.Z)(c),(0,m.Z)(o))).join(" ")}(o,a,n):c}t.Z=function reactifyWebComponent(e){var t=function(t){(0,s.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,c.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,p.createRef)(),t}return(0,l.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,o.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,n.Z)(t,2),a=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(a,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,a=t.dangerouslySetInnerHTML,n={"ref":this.ref};return a&&(n.dangerouslySetInnerHTML=a),(0,p.createElement)(e,n,r)}}]),Index}(p.Component);return p.forwardRef((function(e,r){return p.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"2002":function(e,t,r){"use strict";r.d(t,{"ZT":function(){return setNavigationBarTitle}});var a=r(9830),n=r(8081),o=r(9359);(0,n.tA)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=(0,n.jc)(e);if(!t.flag){var r={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var c=e.title,l=e.success,s=e.fail,i=e.complete,u=new o.N({"name":"setNavigationBarTitle","success":l,"fail":s,"complete":i});return c&&"string"==typeof c?((0,a.Td)(c),u.success()):u.fail({"errMsg":(0,n.Hl)({"para":"title","correct":"String","wrong":c})})}(0,n.tA)("hideNavigationBarLoading"),(0,n.tA)("hideHomeButton")},"9359":function(e,t,r){"use strict";r.d(t,{"N":function(){return o}});var a=r(3341),n=r(5076),o=function(){function MethodHandler(e){var t=e.name,r=e.success,n=e.fail,o=e.complete;(0,a.Z)(this,MethodHandler),this.methodName=t,this.__success=r,this.__fail=n,this.__complete=o}return(0,n.Z)(MethodHandler,[{"key":"success","value":function success(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.resolve.bind(Promise);return e.errMsg||(e.errMsg="".concat(this.methodName,":ok")),"function"==typeof this.__success&&this.__success(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}},{"key":"fail","value":function fail(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.reject.bind(Promise);return e.errMsg?e.errMsg="".concat(this.methodName,":fail ").concat(e.errMsg):e.errMsg="".concat(this.methodName,":fail"),console.error(e.errMsg),"function"==typeof this.__fail&&this.__fail(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}}]),MethodHandler}()},"1601":function(e,t,r){"use strict";r.d(t,{"Z":function(){return f}});var a=r(9641),n=r(3341),o=r(5076),c=r(7666),l=r(4756),s=r(9901),i=r(9802),u=r(7608),m=r.n(u),p=r(1250),f=function(e){(0,c.Z)(DemoBlock,e);var t=(0,l.Z)(DemoBlock);function DemoBlock(){return(0,n.Z)(this,DemoBlock),t.apply(this,arguments)}return(0,o.Z)(DemoBlock,[{"key":"render","value":function render(){var e,t,r=["block","block__title","block__subTitle"],n=[(e={},(0,a.Z)(e,"block--hide-padding",this.props.hidePd),(0,a.Z)(e,"block--hide-mb",this.props.hideMb),e),(0,a.Z)({},"block__title--hide-padding",this.props.hidePd)],o=this.props,c=o.customStyle,l=o.className;return(0,p.jsxs)(i.G7,{"className":m()(r[0],n[0],l),"style":c,"children":[(0,p.jsxs)(i.G7,{"className":"block__header","children":[this.props.title&&(0,p.jsx)(i.G7,{"className":m()(r[1],n[1]),"children":this.props.title}),this.props.subTitle&&(0,p.jsx)(i.G7,{"className":m()(r[2]),"children":this.props.subTitle})]}),(0,p.jsx)(i.G7,{"className":m()((t={},(0,a.Z)(t,"block__body",!0),(0,a.Z)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(s.Component)},"8120":function(e,t,r){"use strict";r.d(t,{"Z":function(){return h}});var a=r(7950),n=r(3341),o=r(5076),c=r(7666),l=r(4756),s=r(9901),i=r(1232),u=r(6070),m=r(9802),p=r(7608),f=r.n(p),v=r(1250),h=function(e){(0,c.Z)(DemoHeader,e);var t=(0,l.Z)(DemoHeader);function DemoHeader(){return(0,n.Z)(this,DemoHeader),t.apply(this,arguments)}return(0,o.Z)(DemoHeader,[{"key":"onClick","value":function onClick(){this.props.onClick?this.props.onClick():(0,i.T8)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=u.ZPm.getEnv()!==u.ZPm.ENV_TYPE.WEB?"hide-split-line":"",r=this.props.icon;return(0,v.jsxs)(m.G7,{"className":f()(e[0],t),"children":[u.ZPm.getEnv()===u.ZPm.ENV_TYPE.WEB&&(0,v.jsx)(a.Z,{"type":"detail-home","onClick":this.onClick.bind(this)}),u.ZPm.getEnv()!==u.ZPm.ENV_TYPE.WEB&&r&&(0,v.jsx)(a.Z,{"type":r,"size":44,"customStyle":{"marginRight":u.ZPm.pxTransform(18)}}),(0,v.jsx)(m.G7,{"className":f()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(s.Component)},"7929":function(e,t,r){"use strict";r.d(t,{"Z":function(){return p}});var a=r(3341),n=r(5076),o=r(7666),c=r(4756),l=r(9901),s=r(9802),i=r(7608),u=r.n(i),m=r(1250),p=function(e){(0,o.Z)(DemoTable,e);var t=(0,c.Z)(DemoTable);function DemoTable(){return(0,a.Z)(this,DemoTable),t.apply(this,arguments)}return(0,n.Z)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var r=t.head,a=t.data,n=t.title,o={};r&&r.length&&(o.width=100/r.length+"%");var c={};return a&&a.length&&(c.width=100/a.length+"%"),(0,m.jsxs)(s.G7,{"className":u()(e[0]),"children":[n&&(0,m.jsx)(s.G7,{"className":u()(e[1]),"children":this.props.list.title}),(0,m.jsxs)(s.G7,{"className":u()(e[2]),"children":[r&&r.length?(0,m.jsx)(s.G7,{"className":u()(e[3]),"children":r.map((function(t){return(0,m.jsx)(s.G7,{"style":o,"className":u()(e[4]),"children":t},t)}))}):null,a&&a.length?(0,m.jsx)(s.G7,{"children":a.map((function(e,t){return(0,m.jsx)(s.G7,{"className":"table__tr","children":e.list.map((function(e){return(0,m.jsx)(s.G7,{"className":"table__td","style":c,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(l.Component)},"4225":function(e,t,r){"use strict";r.r(t),r.d(t,{"default":function(){return Index}});var a=r(3114),n=r(7629),o=r(9901),c=r(6070),l=r(8081),s=r(9359),i=r(4353),u=r(7608),m=r.n(u),p=r(7950),f=r(8612);var v=c.ZPm.getEnv();function _onClick(e,t,r,a){var o=e.multiple,c=e.max,i=void 0===c?99:c,u={};o&&((0,f.r)("Upload","max","multiple"),u.count=99),i&&(u.count=i),function chooseImage(e){var t=(0,l.jc)(e);if(!t.flag){var r={"errMsg":"chooseImage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var a=e.count,o=void 0===a?1:a,c=e.success,i=e.fail,u=e.complete,m=e.imageId,p=void 0===m?"taroChooseImage":m,f=e.sourceType,v=void 0===f?["album","camera"]:f,h=new s.N({"name":"chooseImage","success":c,"fail":i,"complete":u}),d={"tempFilePaths":[],"tempFiles":[]},x=v&&v.toString(),E=["user","environment","camera"];if(o&&"number"!=typeof o)return d.errMsg=(0,l.Hl)({"para":"count","correct":"Number","wrong":o}),h.fail(d);var y=document.getElementById(p);if(y)o>1?y.setAttribute("multiple","multiple"):y.removeAttribute("multiple"),E.indexOf(x)>-1?y.setAttribute("capture",x):y.removeAttribute("capture");else{var g=document.createElement("input");g.setAttribute("type","file"),g.setAttribute("id",p),o>1&&g.setAttribute("multiple","multiple"),E.indexOf(x)>-1&&g.setAttribute("capture",x),g.setAttribute("accept","image/*"),g.setAttribute("style","position: fixed; top: -4000px; left: -3000px; z-index: -300;"),document.body.appendChild(g),y=document.getElementById(p)}return new Promise((function(e){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!0),y&&(y.dispatchEvent(t),y.onchange=function(t){var r=t.target;if(r){var a=r.files||[],o=(0,n.Z)(a);o&&o.forEach((function(e){var t,r,a=new Blob([e],{"type":e.type}),n=URL.createObjectURL(a);null===(t=d.tempFilePaths)||void 0===t||t.push(n),null===(r=d.tempFiles)||void 0===r||r.push({"path":n,"size":e.size,"type":e.type,"originalFileObj":e})})),h.success(d,e),r.value=""}})}))}(u).then((function(o){var c=o.tempFiles;!function setNewFiles(e,t,r,a,o,c){var l,s=[].concat((0,n.Z)(t),(0,n.Z)(a));o(s),s.length>=r&&c(!1);null===(l=e.onChange)||void 0===l||l.call(e,s.slice(0,r),"add",0)}(e,t,i,c,r,a)})).catch(e.onFail)}function Upload(e){var t={},r=Object.assign({},e.customStyle),n=(0,o.useState)(true),l=(0,a.Z)(n,2),s=l[0],u=l[1],f=(0,o.useState)(e.files),h=(0,a.Z)(f,2),d=h[0],x=void 0===d?[]:d,E=h[1],y={"position":"absolute","right":c.ZPm.pxTransform(-18),"top":c.ZPm.pxTransform(-18),"zIndex":1};return o.createElement(i.G7,{"className":m()("ossa-upload",t,e.className),"style":r},o.createElement(i.G7,{"className":"ossa-upload__list"},x&&x.length>0&&x.map((function(t,r){return o.createElement(i.G7,{"className":"ossa-upload__item","key":t.path},o.createElement(i.Ee,{"className":"ossa-upload__item__img","src":t.path,"onClick":function onClick(){return function onImageClick(e,t,r){var a;null===(a=e.onImageClick)||void 0===a||a.call(e,t,r)}(e,r,t)}}),o.createElement(p.Z,{"size":36,"type":"upload-delete","customStyle":y,"onClick":function onClick(){return function onRemoveImg(e,t,r,a,n){var o,l=e.max,s=void 0===l?99:l;v===c.ZPm.ENV_TYPE.WEB&&window.URL.revokeObjectURL(r[t].path);var i=r.filter((function(e,r){return r!==t}));a(i),i.length>=s?n(!1):n(!0),null===(o=e.onChange)||void 0===o||o.call(e,i,"remove",t)}(e,r,x,E,u)}}))})),s&&o.createElement(i.G7,{"className":"ossa-upload__btn","onClick":function onClick(){_onClick(e,x,E,u)}},o.createElement(p.Z,{"type":"photo","size":48,"color":"#d8d8d8","customStyle":{"margin":"".concat(c.ZPm.pxTransform(25)," auto ").concat(c.ZPm.pxTransform(8))}}),o.createElement(i.G7,{"className":"ossa-upload__input"}))))}Upload.defaultProps={"max":99,"multiple":!0,"length":4,"file":[]},Upload.options={"addGlobalClass":!0};var h=r(9641),d=r(2002),x=r(9802),E=r(1601),y=r(8120),g=r(7929),N=r(1250);var b={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["max","最大数量，可选","number","99"]},{"list":["multiple","开始多张传输，可选，`multiple`属性在未来版本中将被删除，请使用`max`代替","boolean","true"]},{"list":["customStyle","自定义样式，可选","object","-"]},{"list":["className","自定义类名，可选","string","-"]}]},Z={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onChange","上传成功回调(此时可自行将图片上传至服务器)","(files: FileItem[], operationType: 'add' | 'remove', index: number) => void(注：1.index在operationType为remove时有效；）"]},{"list":["onImageClick","图片列表点击回调","(index: number, file: ImageFile) => void"]},{"list":["onFail","上传失败触发","(err: TaroGeneral.CallbackResult) => void"]}]};function _onChange(e,t,r){console.log("图片文件:"),console.log(e),console.log("操作类型:"+t),console.log("图片索引:"+r)}function _onFail(e){console.log("上传失败，失败信息："+JSON.stringify(e))}function onClick(e,t){console.log("图片文件:"),console.log(t),console.log("图片索引:"+e)}var _="Upload 图片上传";function Index(e){var t=(0,o.useState)(b),r=(0,a.Z)(t,1)[0],n=(0,o.useState)(Z),l=(0,a.Z)(n,1)[0],s=function demo_getClassObject(){return(0,h.Z)({"page":!0},"demo-upload",!0)}();return(0,o.useEffect)((function(){(0,d.ZT)({"title":_})}),[]),(0,N.jsxs)(x.G7,{"className":m()(s),"children":[(0,N.jsx)(y.Z,{"title":_}),(0,N.jsx)(E.Z,{"title":"普通","fullScreen":!0,"children":(0,N.jsx)(x.G7,{"style":{"paddingLeft":c.ZPm.pxTransform(20)},"children":(0,N.jsx)(Upload,{"onChange":function onChange(e,t,r){return _onChange(e,t,r)},"onImageClick":function onImageClick(e,t){return onClick(e,t)},"onFail":function onFail(e){return _onFail(e)}})})}),(0,N.jsx)(E.Z,{"title":"限制上传数量(2张)","fullScreen":!0,"children":(0,N.jsx)(x.G7,{"style":{"paddingLeft":c.ZPm.pxTransform(20)},"children":(0,N.jsx)(Upload,{"max":2,"onChange":function onChange(e,t,r){return _onChange(e,t,r)},"onImageClick":function onImageClick(e,t){return onClick(e,t)},"onFail":function onFail(e){return _onFail(e)}})})}),(0,N.jsx)(E.Z,{"title":"限制上传数量(1张)","fullScreen":!0,"children":(0,N.jsx)(x.G7,{"style":{"paddingLeft":c.ZPm.pxTransform(20)},"children":(0,N.jsx)(Upload,{"max":1,"onChange":function onChange(e,t,r){return _onChange(e,t,r)},"onImageClick":function onImageClick(e,t){return onClick(e,t)},"onFail":function onFail(e){return _onFail(e)}})})}),(0,N.jsx)(E.Z,{"children":(0,N.jsx)(g.Z,{"list":r})}),(0,N.jsx)(E.Z,{"children":(0,N.jsx)(g.Z,{"list":l})})]})}},"7950":function(e,t,r){"use strict";r.d(t,{"Z":function(){return Icon}});var a=r(9641),n=r(9901),o=r(6070),c=r(4353),l=r(7608),s=r.n(l);function Icon(e){var t=function getClassObject(e){var t=e.type;return(0,a.Z)({},"ossa-icon--".concat(t),t)}(e),r=Object.assign(function getStyleObj(e){var t={},r=e.color,a=e.size,n=e.type;return r&&(t.color=r),a&&(t.fontSize=o.ZPm.pxTransform(a)),"home"===n||"subject"===n||"classify"===n||"cart"===n||"user"===n?t.color="#666":"grade"===n||"add-photo"===n||"check"===n?t.color="#ccc":"collect-selected"===n?t.color="#f48f18":"grade-selected"===n?t.color="#fab646":"record"===n&&(t.color="#ff8462"),t}(e),e.customStyle),l=e.type,i=e.className;return n.createElement(c.G7,{"className":s()("ossa-icon",t,i),"style":r,"onClick":function onClick(t){return function _onClick(e,t){var r;null===(r=t.onClick)||void 0===r||r.call(t,e)}(t,e)}},"avatar"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"delete-input"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"cart"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"cart-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"check-irrevocable"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"check-selected"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"close-h5"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"close-native-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"close-native"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"invisible"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"like-selected"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"sort-high"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"sort-low"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"subject-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"subject"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"voice"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"voice-close"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"upload-delete"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"classify"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"classify-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"share-circle"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"})),"share-circle-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"})),"detail-cart-pressed"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"detail-cart"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"my-group-buying-select"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"shopping-mall-select"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"}),n.createElement(c.xv,{"className":"path7"})),"shopping-mall"===l&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"}),n.createElement(c.xv,{"className":"path7"})))}Icon.defaultProps={"type":"","size":40},Icon.options={"addGlobalClass":!0}},"8612":function(e,t,r){"use strict";r.d(t,{"r":function(){return warnDeprecatedProp},"j":function(){return deprecatedProp}});var a=new Set;function warnDeprecatedProp(e,t,r){var n="在 ".concat(e," 组件当中的 '").concat(r,"' 属性将在未来的版本中废弃，请使用 '").concat(t,"' 代替!");a.has(n)||(a.add(n),console.warn("%c🚨 ".concat(n),"font-weight: 800;"))}function deprecatedProp(e,t,r){return void 0!==t&&r&&r.oldPropName,null!=e?e:t}},"7608":function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var o=classNames.apply(null,r);o&&e.push(o)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0===(r=function(){return classNames}.apply(t,[]))||(e.exports=r)}()},"5472":function(e,t,r){"use strict";r(2458);var a=r(9901),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;n=o("react.element"),t.Fragment=o("react.fragment")}var c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var a,o={},i=null,u=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,a)&&!s.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{"$$typeof":n,"type":e,"key":i,"ref":u,"props":o,"_owner":c.current}}t.jsx=q,t.jsxs=q},"1250":function(e,t,r){"use strict";e.exports=r(5472)}}]);