/*! For license information please see 3851.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[3851],{"5346":function(t,r,a){"use strict";a.d(r,{"gO":function(){return P},"zx":function(){return w},"fV":function(){return k},"Ee":function(){return S},"II":function(){return j},"tq":function(){return O},"t3":function(){return Z},"xv":function(){return N},"gx":function(){return _},"G7":function(){return g}});var o=a(9901),c=a(4012),l=a(7386),i=a(5700),u=a(1769),p=a(3888),m=a(5953),d=a(2432),h=a(6110),v=a(9574);function ownKeys(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.push.apply(a,o)}return a}function _objectSpread(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(a),!0).forEach((function(r){(0,c.Z)(t,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))}))}return t}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var a,o=(0,h.Z)(t);if(r){var c=(0,h.Z)(this).constructor;a=Reflect.construct(o,arguments,c)}else a=o.apply(this,arguments);return(0,d.Z)(this,a)}}o.createElement;var y="taro-scroll-view-core";function updateStyle(t,r,a){/^--/.test(r)?t.style.setProperty(r,a):t.style[r]=a}function updateProp(t,r,a,o,c){var l=t.ref.current,i=c[a],u=o?o[a]:void 0;if("children"!==a)if("classname"!==a.toLowerCase()){if("style"!==a){if(/^data-.+/.test(a)&&l.setAttribute(a,i),r===y){if("scrollTop"===a)return void(l.mpScrollTop=i);if("scrollLeft"===a)return void(l.mpScrollLeft=i);if("scrollIntoView"===a)return void(l.mpScrollIntoView=i)}if("function"==typeof i&&a.match(/^on[A-Z]/)){var p=a.substr(2).toLowerCase(),m=i;return r===y&&"scroll"===p&&(m=function fn(t){t instanceof CustomEvent&&i.apply(null,Array.from(arguments))}),t.eventHandlers.push([p,m]),l.addEventListener(p,m)}return"string"==typeof i||"number"==typeof i?(l.setAttribute(a,i),void(l[a]=i)):"boolean"==typeof i?i?(l[a]=!0,l.setAttribute(a,i)):(l[a]=!1,l.removeAttribute(a)):void(l[a]=i)}if("string"==typeof i)return void l.setAttribute(a,i);if(!i)return void l.removeAttribute(a);if(o)if("string"==typeof u)l.style.cssText="";else for(var d in u)updateStyle(l,d,"");for(var h in i)updateStyle(l,h,i[h])}else l.className=o?function getClassName(t,r,a){var o=Array.from(t.classList),c=(r.className||r.class||"").split(" "),l=(a.className||a.class||"").split(" "),i=[];return o.forEach((function(t){l.indexOf(t)>-1?(i.push(t),l=l.filter((function(r){return r!==t}))):-1===c.indexOf(t)&&i.push(t)})),(i=[].concat((0,v.Z)(i),(0,v.Z)(l))).join(" ")}(l,o,c):i}var b=function reactifyWebComponent(t){var r=function(r){(0,m.Z)(Index,r);var a=_createSuper(Index);function Index(t){var r;return(0,u.Z)(this,Index),(r=a.call(this,t)).eventHandlers=[],r.ref=(0,o.createRef)(),r}return(0,p.Z)(Index,[{"key":"update","value":function update(r){var a=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(o){"children"===o||"key"===o||o in a.props||updateProp(a,t,o,r,a.props)})),Object.keys(this.props).forEach((function(o){updateProp(a,t,o,r,a.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(t){this.update(t)}},{"key":"componentDidMount","value":function componentDidMount(){var t=this.props.forwardRef;"function"==typeof t?t(this.ref.current):t&&"object"===(0,i.Z)(t)&&t.hasOwnProperty("current")?t.current=this.ref.current:"string"==typeof t&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var t=this;this.eventHandlers.forEach((function(r){var a=(0,l.Z)(r,2),o=a[0],c=a[1];t.ref.current&&t.ref.current.removeEventListener(o,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,a=r.children,c=r.dangerouslySetInnerHTML,l={"ref":this.ref};return c&&(l.dangerouslySetInnerHTML=c),(0,o.createElement)(t,l,a)}}]),Index}(o.Component);return o.forwardRef((function(t,a){return o.createElement(r,_objectSpread(_objectSpread({},t),{},{"forwardRef":a}))}))};function input_ownKeys(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.push.apply(a,o)}return a}function input_objectSpread(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?input_ownKeys(Object(a),!0).forEach((function(r){(0,c.Z)(t,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):input_ownKeys(Object(a)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))}))}return t}var x=b("taro-input-core"),E=(o.createElement,o.forwardRef((function(t,r){var a=input_objectSpread({},t);return a.hasOwnProperty("focus")&&(a.autoFocus=Boolean(a.focus),delete a.focus),o.createElement(x,input_objectSpread(input_objectSpread({},a),{},{"ref":r}))}))),g=b("taro-view-core"),N=(b("taro-icon-core"),b("taro-progress-core"),b("taro-rich-text-core"),b("taro-text-core")),w=b("taro-button-core"),j=(b("taro-checkbox-core"),b("taro-checkbox-group-core"),b("taro-editor-core"),b("taro-form-core"),E),_=(b("taro-label-core"),b("taro-picker-core"),b("taro-picker-view-core"),b("taro-picker-view-column-core"),b("taro-radio-core"),b("taro-radio-group-core"),b("taro-slider-core"),b("taro-switch-core"),b("taro-cover-image-core"),b("taro-textarea-core")),O=(b("taro-cover-view-core"),b("taro-movable-area-core"),b("taro-movable-view-core"),b("taro-scroll-view-core"),b("taro-swiper-core")),Z=b("taro-swiper-item-core"),S=(b("taro-functional-page-navigator-core"),b("taro-navigator-core"),b("taro-audio-core"),b("taro-camera-core"),b("taro-image-core")),P=(b("taro-live-player-core"),b("taro-video-core"),b("taro-map-core"),b("taro-canvas-core"),b("taro-ad-core"),b("taro-official-account-core"),b("taro-open-data-core"),b("taro-web-view-core"),b("taro-navigation-bar-core"),o.Fragment),k=b("taro-custom-wrapper-core")},"4566":function(t,r,a){"use strict";a.d(r,{"Ee":function(){return N},"xv":function(){return g},"G7":function(){return E}});var o=a(9901),c=a(4012),l=a(7386),i=a(5700),u=a(1769),p=a(3888),m=a(5953),d=a(2432),h=a(6110),v=a(9574);function ownKeys(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.push.apply(a,o)}return a}function _objectSpread(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(a),!0).forEach((function(r){(0,c.Z)(t,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))}))}return t}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var a,o=(0,h.Z)(t);if(r){var c=(0,h.Z)(this).constructor;a=Reflect.construct(o,arguments,c)}else a=o.apply(this,arguments);return(0,d.Z)(this,a)}}o.createElement;var y="taro-scroll-view-core",b=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(t,r,a){/^--/.test(r)?t.style.setProperty(r,a):"number"!=typeof a||b.test(r)?t.style[r]=a:t.style[r]=a+"px"}function updateProp(t,r,a,o,c){var l=t.ref.current,i=c[a],u=o?o[a]:void 0;if("children"!==a)if("classname"!==a.toLowerCase()){if("style"!==a){if(/^data-.+/.test(a)&&l.setAttribute(a,i),r===y){if("scrollTop"===a)return void(l.mpScrollTop=i);if("scrollLeft"===a)return void(l.mpScrollLeft=i);if("scrollIntoView"===a)return void(l.mpScrollIntoView=i)}if("function"==typeof i&&a.match(/^on[A-Z]/)){var p=a.substr(2).toLowerCase(),m=i;return r===y&&"scroll"===p&&(m=function fn(t){t instanceof CustomEvent&&i.apply(null,Array.from(arguments))}),t.eventHandlers.push([p,m]),l.addEventListener(p,m)}return"string"==typeof i||"number"==typeof i?(l.setAttribute(a,i),void(l[a]=i)):"boolean"==typeof i?i?(l[a]=!0,l.setAttribute(a,i)):(l[a]=!1,l.removeAttribute(a)):void(l[a]=i)}if("string"==typeof i)return void l.setAttribute(a,i);if(!i)return void l.removeAttribute(a);if(o)if("string"==typeof u)l.style.cssText="";else for(var d in u)updateStyle(l,d,"");for(var h in i)updateStyle(l,h,i[h])}else l.className=o?function getClassName(t,r,a){var o=Array.from(t.classList),c=(r.className||r.class||"").split(" "),l=(a.className||a.class||"").split(" "),i=[];return o.forEach((function(t){l.indexOf(t)>-1?(i.push(t),l=l.filter((function(r){return r!==t}))):-1===c.indexOf(t)&&i.push(t)})),(i=[].concat((0,v.Z)(i),(0,v.Z)(l))).join(" ")}(l,o,c):i}var x=function reactifyWebComponent(t){var r=function(r){(0,m.Z)(Index,r);var a=_createSuper(Index);function Index(t){var r;return(0,u.Z)(this,Index),(r=a.call(this,t)).eventHandlers=[],r.ref=(0,o.createRef)(),r}return(0,p.Z)(Index,[{"key":"update","value":function update(r){var a=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(o){"children"===o||"key"===o||o in a.props||updateProp(a,t,o,r,a.props)})),Object.keys(this.props).forEach((function(o){updateProp(a,t,o,r,a.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(t){this.update(t)}},{"key":"componentDidMount","value":function componentDidMount(){var t=this.props.forwardRef;"function"==typeof t?t(this.ref.current):t&&"object"===(0,i.Z)(t)&&t.hasOwnProperty("current")?t.current=this.ref.current:"string"==typeof t&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var t=this;this.eventHandlers.forEach((function(r){var a=(0,l.Z)(r,2),o=a[0],c=a[1];t.ref.current&&t.ref.current.removeEventListener(o,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,a=r.children,c=r.dangerouslySetInnerHTML,l={"ref":this.ref};return c&&(l.dangerouslySetInnerHTML=c),(0,o.createElement)(t,l,a)}}]),Index}(o.Component);return o.forwardRef((function(t,a){return o.createElement(r,_objectSpread(_objectSpread({},t),{},{"forwardRef":a}))}))},E=(x("taro-cover-image-core"),x("taro-cover-view-core"),x("taro-match-media-core"),x("taro-movable-area-core"),x("taro-movable-view-core"),x("taro-page-container-core"),x("taro-root-portal-core"),x("taro-scroll-view-core"),x("taro-share-element-core"),x("taro-swiper-core"),x("taro-swiper-item-core"),x("taro-view-core")),g=(x("taro-icon-core"),x("taro-progress-core"),x("taro-rich-text-core"),x("taro-text-core")),N=(x("taro-button-core"),x("taro-checkbox-core"),x("taro-checkbox-group-core"),x("taro-editor-core"),x("taro-form-core"),x("taro-keyboard-accessory-core"),x("taro-label-core"),x("taro-picker-core"),x("taro-picker-view-core"),x("taro-picker-view-column-core"),x("taro-radio-core"),x("taro-radio-group-core"),x("taro-slider-core"),x("taro-switch-core"),x("taro-textarea-core"),x("taro-functional-page-navigator-core"),x("taro-navigator-core"),x("taro-audio-core"),x("taro-camera-core"),x("taro-image-core"));x("taro-live-player-core"),x("taro-video-core"),x("taro-voip-room-core"),x("taro-map-core"),x("taro-canvas-core"),x("taro-web-view-core"),x("taro-ad-core"),x("taro-ad-custom-core"),x("taro-official-account-core"),x("taro-open-data-core"),x("taro-navigation-bar-core"),x("taro-page-meta-core"),x("taro-custom-wrapper-core")},"6264":function(t,r,a){"use strict";var o=a(6710),c=a(9901),l=a(6681).Z.px2rem;r.Z=function Image(t){var r=t.imgStyle,a=t.image,i=(0,c.useState)(r||null),u=(0,o.Z)(i,2),p=u[0],m=u[1];return c.createElement("img",{"className":"x-prize-pic","mode":"widthFix","style":p,"src":a,"onLoad":function handleImageLoaded(t){var a=r||{};if(t.target&&t.target.naturalWidth){var o=t.target,c=o.naturalWidth;o.naturalHeight;m(Object.assign(Object.assign({},a),{"width":l(c),"height":"fit-content"}))}else{var i=t.detail,u=i.width;i.height;m(Object.assign(Object.assign({},a),{"width":l(u),"height":"fit-content"}))}}})}},"6681":function(t,r,a){"use strict";a.d(r,{"Z":function(){return o}});var o={"px2rem":function px2rem(t){var r=100;if("undefined"!=typeof process&&process&&process.env)return t+"rpx";try{return window.getComputedStyle(document.getElementsByTagName("html")[0])?(r=(window.getComputedStyle(document.getElementsByTagName("html")[0])["font-size"]||window.getComputedStyle(document.body)["font-size"]).replace(/[a-zA-Z]+$/,""),"".concat(t/r,"rem")):t+"rpx"}catch(t){r=(window.getComputedStyle(document.getElementsByTagName("html")[0])["font-size"]||window.getComputedStyle(document.body)["font-size"]).replace(/[a-zA-Z]+$/,"")}return"".concat(t/r,"rem")},"cls":function cls(t,r){if(!r)return t;if("string"==typeof r)return t.replace(/\s*$/,"")+" "+r;var a="";for(var o in r)r[o]&&(a+=" "+o);return t.replace(/\s*$/,"")+a}}},"808":function(t,r,a){"use strict";a.d(r,{"Z":function(){return y}});var o=a(326),c=a(3270),l=a(3961),i=a(6845),u=a(9912),p=a(9901),m=a(4566),d=a(3849),h=a.n(d),v=a(1250),y=function(t){(0,i.Z)(DemoBlock,t);var r=(0,u.Z)(DemoBlock);function DemoBlock(){return(0,c.Z)(this,DemoBlock),r.apply(this,arguments)}return(0,l.Z)(DemoBlock,[{"key":"render","value":function render(){var t,r,a=["block","block__title","block__subTitle"],c=[(t={},(0,o.Z)(t,"block--hide-padding",this.props.hidePd),(0,o.Z)(t,"block--hide-mb",this.props.hideMb),t),(0,o.Z)({},"block__title--hide-padding",this.props.hidePd)],l=this.props,i=l.customStyle,u=l.className;return(0,v.jsxs)(m.G7,{"className":h()(a[0],c[0],u),"style":i,"children":[(0,v.jsxs)(m.G7,{"className":"block__header","children":[this.props.title&&(0,v.jsx)(m.G7,{"className":h()(a[1],c[1]),"children":this.props.title}),this.props.subTitle&&(0,v.jsx)(m.G7,{"className":h()(a[2]),"children":this.props.subTitle})]}),(0,v.jsx)(m.G7,{"className":h()((r={},(0,o.Z)(r,"block__body",!0),(0,o.Z)(r,"block__body--fullscreen",this.props.fullScreen),r)),"children":this.props.children})]})}}]),DemoBlock}(p.Component)},"2902":function(t,r,a){"use strict";a.d(r,{"Z":function(){return x}});var o=a(4733),c=a(3270),l=a(3961),i=a(6845),u=a(9912),p=a(9901),m=a(3743),d=a(7364),h=a(4566),v=a(3849),y=a.n(v),b=a(1250),x=function(t){(0,i.Z)(DemoHeader,t);var r=(0,u.Z)(DemoHeader);function DemoHeader(){return(0,c.Z)(this,DemoHeader),r.apply(this,arguments)}return(0,l.Z)(DemoHeader,[{"key":"onClick","value":function onClick(){this.props.onClick?this.props.onClick():(0,m.T8)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var t=["header","header__title"],r=d.ZPm.getEnv()!==d.ZPm.ENV_TYPE.WEB?"hide-split-line":"",a=this.props.icon;return(0,b.jsxs)(h.G7,{"className":y()(t[0],r),"children":[d.ZPm.getEnv()===d.ZPm.ENV_TYPE.WEB&&(0,b.jsx)(o.Z,{"type":"detail-home","onClick":this.onClick.bind(this)}),d.ZPm.getEnv()!==d.ZPm.ENV_TYPE.WEB&&a&&(0,b.jsx)(o.Z,{"type":a,"size":44,"customStyle":{"marginRight":d.ZPm.pxTransform(18)}}),(0,b.jsx)(h.G7,{"className":y()(t[1]),"children":this.props.title})]})}}]),DemoHeader}(p.Component)},"4558":function(t,r,a){"use strict";a.d(r,{"Z":function(){return v}});var o=a(3270),c=a(3961),l=a(6845),i=a(9912),u=a(9901),p=a(4566),m=a(3849),d=a.n(m),h=a(1250),v=function(t){(0,l.Z)(DemoTable,t);var r=(0,i.Z)(DemoTable);function DemoTable(){return(0,o.Z)(this,DemoTable),r.apply(this,arguments)}return(0,c.Z)(DemoTable,[{"key":"render","value":function render(){var t=["table","table__title","table__content","table__head","table__head__item"],r=this.props.list||{};if(!r)return null;var a=r.head,o=r.data,c=r.title,l={};a&&a.length&&(l.width=100/a.length+"%");var i={};return o&&o.length&&(i.width=100/o.length+"%"),(0,h.jsxs)(p.G7,{"className":d()(t[0]),"children":[c&&(0,h.jsx)(p.G7,{"className":d()(t[1]),"children":this.props.list.title}),(0,h.jsxs)(p.G7,{"className":d()(t[2]),"children":[a&&a.length?(0,h.jsx)(p.G7,{"className":d()(t[3]),"children":a.map((function(r){return(0,h.jsx)(p.G7,{"style":l,"className":d()(t[4]),"children":r},r)}))}):null,o&&o.length?(0,h.jsx)(p.G7,{"children":o.map((function(t,r){return(0,h.jsx)(p.G7,{"className":"table__tr","children":t.list.map((function(t){return(0,h.jsx)(p.G7,{"className":"table__td","style":i,"children":t},t)}))},r)}))}):null]})]})}}]),DemoTable}(u.Component)},"3851":function(t,r,a){"use strict";a.r(r),a.d(r,{"default":function(){return N}});var o=a(7538),c=a(9901),l=a(3743),i=a(8205),u=a(9123),p=a(6710),m=a(6681),d=a(6264),h=m.Z.px2rem,v=m.Z.cls,y=function BigWheel(t){t.appEnv;var r=t.className,a=void 0===r?"":r,o=t.style,l=void 0===o?{}:o,m=t.config,y=t.prizeGroup,b=t.onPlay,x=m||{},E=x.size,g=void 0===E?600:E,N=x.turntableImage,w=x.pointerImage,j=x.prize,_=x.animation,O=x.offsetRotate,Z=void 0===O?0:O,S=x.prizeOffset,P=x.prizeScale,k=_||{},T=k.duration,I=void 0===T?4e3:T,z=k.mode,C=void 0===z?"ease-in-out":z,G=j||{},A=G.fontSize,D=G.textColor,R=(0,c.useState)([]),H=(0,p.Z)(R,2),L=H[0],W=H[1],B=(0,c.useState)(0),M=(0,p.Z)(B,2),U=M[0],K=M[1],V=(0,c.useState)(!1),$=(0,p.Z)(V,2),Y=$[0],J=$[1],Q=(0,c.useState)([]),X=(0,p.Z)(Q,2),ee=X[0],te=X[1];(0,c.useEffect)((function(){y&&W(ae(y))}),[y]);var re=(0,c.useMemo)((function(){return{"WebkitTransition":"transform ".concat(I,"ms ").concat(C),"transition":"transform ".concat(I,"ms ").concat((null==_?void 0:_.mode)||"ease-in-out"),"WebkitTransform":"rotate(".concat(U,"deg)"),"transform":"rotate(".concat(U,"deg)"),"background":"url(".concat(N,") no-repeat center top"),"backgroundSize":"100%"}}),[I,C,U,N]),ne=(0,c.useMemo)((function(){return{"maxWidth":"".concat(h(g/3))}}),[g]),ae=function formatPrizeList(t){var r=P||.7,a=[],o=t.length;if(!(o<=0)){var c=360/o,l=c/2,i=[];return t.forEach((function(t,o){var u=-(o*c+l)+Z,p={"WebkitTransform":"translate(-50%, 0) rotate(".concat(u,"deg)"),"transform":"translate(-50%, 0) rotate(".concat(u,"deg)"),"width":"".concat(h(g/2*r)),"height":"".concat(h(g/2))},m={"transform":"scale(".concat(r,")"),"marginTop":S?"".concat(h(S)):void 0},d={"fontSize":"".concat(h(A||g/20)),"maxWidth":"".concat(h(g/2*r*r)),"transform":"scale(".concat(r,")"),"color":D};i.push(Object.assign(Object.assign({},t),{"style":p,"imgStyle":m,"fontStyle":d})),a.push(o*c+l-Z)})),te([].concat(a)),i}},oe=function Rotating(t){return new Promise((function(r,a){J(!0);var o,c=0,l=U+3600,p=(0,u.Z)(y);try{var m=function _loop(){var a=o.value;if(a.id===t){var i=l+ee[c]-U%360;return K(i),setTimeout((function(){J(!1),r(a)}),500+I),{"v":void 0}}c++};for(p.s();!(o=p.n()).done;){var d=m();if("object"===(0,i.Z)(d))return d.v}}catch(t){p.e(t)}finally{p.f()}K(l),setTimeout((function(){J(!1),a()}),500+I)}))},ce=(0,c.useState)({"maxWidth":"100%","width":"auto","height":"auto"}),se=(0,p.Z)(ce,2),le=se[0];se[1];return c.createElement("div",{"className":v("loki-bigwheel x-wheel",a),"style":l},c.createElement("div",{"className":"x-wheel-main","style":{"width":"".concat(h(g)),"height":"".concat(h(g))}},c.createElement("div",{"className":"x-wheel-pointer","style":ne,"onClick":function startGame(){Y||b&&b((function(t){return oe(t)}))}},c.createElement(d.Z,{"image":w,"imgStyle":le})),c.createElement("div",{"className":"x-wheel-bg","style":re},c.createElement("ul",{"className":"x-prize-list"},null==L?void 0:L.map((function(t,r){return c.createElement("li",{"key":(null==t?void 0:t.id)||r,"className":"x-prize-item","style":null==t?void 0:t.style},c.createElement(d.Z,Object.assign({},t)),c.createElement("div",{"className":"prize-type","style":t.fontStyle},(null==t?void 0:t.name)||""))}))))))},b=a(2902),x=a(808),E=a(4558),g=a(1250),N=function Index(){var t=function handlePlay(t){t(4).then((function(t){console.log("中奖啦 >>>>>>",t)}),(function(){console.log("未中奖")}))},r={"size":300,"prizeOffset":20,"turntableImage":"https://yanxuan.nosdn.127.net/static-union/1659516044835746.png","pointerImage":"https://yanxuan.nosdn.127.net/static-union/16595160444ef771.png","prize":{"textColor":"#222222"}},a=[{"id":1,"image":"https://yanxuan.nosdn.127.net/static-union/1659516044c3a18c.png"},{"id":2,"image":"https://yanxuan.nosdn.127.net/static-union/165951604487ef12.png"},{"id":3,"image":"https://yanxuan.nosdn.127.net/static-union/165951604419ac9a.png"},{"id":4,"image":"https://yanxuan.nosdn.127.net/static-union/1659516044816161.png"}];return(0,g.jsxs)("div",{"className":"index page","children":[(0,g.jsx)(b.Z,{"title":"大转盘","icon":"general","onClick":function handleJumpHome(){(0,l.T8)({"url":"/pages/loki/index"})}}),(0,g.jsx)(x.Z,{"title":"基本用法","children":(0,g.jsx)(y,{"config":r,"prizeGroup":a,"onPlay":t})}),(0,g.jsx)(x.Z,{"title":"转盘大小 size","subTitle":"转盘大小 size设置为：200","children":(0,g.jsx)(y,{"config":(0,o.Z)((0,o.Z)({},r),{},{"size":200}),"prizeGroup":a,"onPlay":t})}),(0,g.jsx)(x.Z,{"title":"奖品偏移角度 offsetRotate","subTitle":"奖品偏移角度offsetRotate设置为：45","children":(0,g.jsx)(y,{"config":(0,o.Z)((0,o.Z)({},r),{},{"offsetRotate":45}),"prizeGroup":a,"onPlay":t})}),(0,g.jsx)(x.Z,{"title":"奖品偏移 prizeOffset","subTitle":"奖品偏移 prizeOffset设置为：0","children":(0,g.jsx)(y,{"config":(0,o.Z)((0,o.Z)({},r),{},{"prizeOffset":0}),"prizeGroup":a,"onPlay":t})}),(0,g.jsx)(x.Z,{"title":"奖品缩放 prizeScale","subTitle":"奖品缩放prizeScale设置为：.5","children":(0,g.jsx)(y,{"config":(0,o.Z)((0,o.Z)({},r),{},{"prizeScale":.5}),"prizeGroup":a,"onPlay":t})}),(0,g.jsx)(x.Z,{"title":"奖品设置 prize","subTitle":"奖品设置 prize：{ textColor: 'red', fontSize: 12 }","children":(0,g.jsx)(y,{"config":(0,o.Z)((0,o.Z)({},r),{},{"prize":{"fontSize":12,"textColor":"red"}}),"prizeGroup":[{"id":1,"image":"https://yanxuan.nosdn.127.net/static-union/1659516044c3a18c.png","name":"199减5红包"},{"id":2,"image":"https://yanxuan.nosdn.127.net/static-union/165951604487ef12.png","name":"99减5红包"},{"id":3,"image":"https://yanxuan.nosdn.127.net/static-union/165951604419ac9a.png","name":"5元直减红包"},{"id":4,"image":"https://yanxuan.nosdn.127.net/static-union/1659516044816161.png","name":"700加油红包"}],"onPlay":t})}),(0,g.jsx)(x.Z,{"children":(0,g.jsx)(E.Z,{"list":{"title":"转盘配置","head":["参数","说明","类型","默认值"],"data":[{"list":["size","转盘大小","number","600"]},{"list":["turntableImage","转盘图片","string","/"]},{"list":["pointerImage","指针图片","number | string","/"]},{"list":["offsetRotate","奖品偏移角度，具体详见奖品偏移角度部分","number","0"]},{"list":["prizeOffset","奖品偏移量用于设置奖品距离转盘边缘的距离，具体详见奖品配置部分","number","0"]},{"list":["prizeScale","奖品缩放","[0, 1]","1"]},{"list":["prize","奖品其他配置，具体详见奖品配置部分","object","/"]}]}})}),(0,g.jsx)(x.Z,{"children":(0,g.jsx)(E.Z,{"list":{"title":"奖品配置","head":["参数","说明","类型","默认值"],"data":[{"list":["id","奖品id","number","/"]},{"list":["name","奖品名称","string","/"]},{"list":["image","奖品图片","string","/"]}]}})}),(0,g.jsx)(x.Z,{"children":(0,g.jsx)(E.Z,{"list":{"title":"Event","head":["函数名","说明","类型"],"data":[{"list":["onPlay","开始抽奖事件","(finish: (prizeId) => Promise) => void"]}]}})})]})}},"4733":function(t,r,a){"use strict";a.d(r,{"Z":function(){return Icon}});var o=a(326),c=a(9901),l=a(7364),i=a(5346),u=a(3849),p=a.n(u);function Icon(t){var r=function getClassObject(t){var r=t.type;return(0,o.Z)({},"ossa-icon--".concat(r),r)}(t),a=Object.assign(function getStyleObj(t){var r={},a=t.color,o=t.size,c=t.type;return a&&(r.color=a),o&&(r.fontSize=l.ZPm.pxTransform(o)),"home"===c||"subject"===c||"classify"===c||"cart"===c||"user"===c?r.color="#666":"grade"===c||"add-photo"===c||"check"===c?r.color="#ccc":"collect-selected"===c?r.color="#f48f18":"grade-selected"===c?r.color="#fab646":"record"===c&&(r.color="#ff8462"),r}(t),t.customStyle),u=t.type,m=t.className;return c.createElement(i.G7,{"className":p()("ossa-icon",r,m),"style":a,"onClick":function onClick(r){return function _onClick(t,r){var a;null===(a=r.onClick)||void 0===a||a.call(r,t)}(r,t)}},"avatar"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"})),"delete-input"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"})),"cart"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"}),c.createElement(i.xv,{"className":"path5"})),"cart-pressed"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"}),c.createElement(i.xv,{"className":"path5"})),"check-irrevocable"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"})),"check-selected"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"})),"close-h5"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"})),"close-native-pressed"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"}),c.createElement(i.xv,{"className":"path5"})),"close-native"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"}),c.createElement(i.xv,{"className":"path5"})),"invisible"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"}),c.createElement(i.xv,{"className":"path5"})),"like-selected"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"})),"sort-high"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"})),"sort-low"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"})),"subject-pressed"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"})),"subject"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"})),"voice"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"})),"voice-close"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"})),"upload-delete"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"})),"classify"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"})),"classify-pressed"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"})),"share-circle"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"}),c.createElement(i.xv,{"className":"path5"}),c.createElement(i.xv,{"className":"path6"})),"share-circle-pressed"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"}),c.createElement(i.xv,{"className":"path5"}),c.createElement(i.xv,{"className":"path6"})),"detail-cart-pressed"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"}),c.createElement(i.xv,{"className":"path5"})),"detail-cart"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"}),c.createElement(i.xv,{"className":"path5"})),"my-group-buying-select"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"})),"shopping-mall-select"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"}),c.createElement(i.xv,{"className":"path5"}),c.createElement(i.xv,{"className":"path6"}),c.createElement(i.xv,{"className":"path7"})),"shopping-mall"===u&&c.createElement(i.G7,null,c.createElement(i.xv,{"className":"path1"}),c.createElement(i.xv,{"className":"path2"}),c.createElement(i.xv,{"className":"path3"}),c.createElement(i.xv,{"className":"path4"}),c.createElement(i.xv,{"className":"path5"}),c.createElement(i.xv,{"className":"path6"}),c.createElement(i.xv,{"className":"path7"})))}Icon.defaultProps={"type":"","size":40},Icon.options={"addGlobalClass":!0}},"3849":function(t,r){var a;!function(){"use strict";var o={}.hasOwnProperty;function classNames(){for(var t=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var c=typeof a;if("string"===c||"number"===c)t.push(a);else if(Array.isArray(a)){if(a.length){var l=classNames.apply(null,a);l&&t.push(l)}}else if("object"===c)if(a.toString===Object.prototype.toString)for(var i in a)o.call(a,i)&&a[i]&&t.push(i);else t.push(a.toString())}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):void 0===(a=function(){return classNames}.apply(r,[]))||(t.exports=a)}()},"5472":function(t,r,a){"use strict";a(2458);var o=a(9901),c=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;c=l("react.element"),l("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,p={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(t,r,a){var o,l={},m=null,d=null;for(o in void 0!==a&&(m=""+a),void 0!==r.key&&(m=""+r.key),void 0!==r.ref&&(d=r.ref),r)u.call(r,o)&&!p.hasOwnProperty(o)&&(l[o]=r[o]);if(t&&t.defaultProps)for(o in r=t.defaultProps)void 0===l[o]&&(l[o]=r[o]);return{"$$typeof":c,"type":t,"key":m,"ref":d,"props":l,"_owner":i.current}}r.jsx=q,r.jsxs=q},"1250":function(t,r,a){"use strict";t.exports=a(5472)},"7408":function(t,r,a){"use strict";function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,o=new Array(r);a<r;a++)o[a]=t[a];return o}a.d(r,{"Z":function(){return _arrayLikeToArray}})},"1769":function(t,r,a){"use strict";function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}a.d(r,{"Z":function(){return _classCallCheck}})},"3888":function(t,r,a){"use strict";function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){return r&&_defineProperties(t.prototype,r),a&&_defineProperties(t,a),Object.defineProperty(t,"prototype",{"writable":!1}),t}a.d(r,{"Z":function(){return _createClass}})},"4012":function(t,r,a){"use strict";function _defineProperty(t,r,a){return r in t?Object.defineProperty(t,r,{"value":a,"enumerable":!0,"configurable":!0,"writable":!0}):t[r]=a,t}a.d(r,{"Z":function(){return _defineProperty}})},"6110":function(t,r,a){"use strict";function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}a.d(r,{"Z":function(){return _getPrototypeOf}})},"5953":function(t,r,a){"use strict";function _setPrototypeOf(t,r){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,r){return t.__proto__=r,t},_setPrototypeOf(t,r)}function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{"constructor":{"value":t,"writable":!0,"configurable":!0}}),Object.defineProperty(t,"prototype",{"writable":!1}),r&&_setPrototypeOf(t,r)}a.d(r,{"Z":function(){return _inherits}})},"2432":function(t,r,a){"use strict";a.d(r,{"Z":function(){return _possibleConstructorReturn}});var o=a(5700);function _possibleConstructorReturn(t,r){if(r&&("object"===(0,o.Z)(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}},"7386":function(t,r,a){"use strict";a.d(r,{"Z":function(){return _slicedToArray}});var o=a(235);function _slicedToArray(t,r){return function _arrayWithHoles(t){if(Array.isArray(t))return t}(t)||function _iterableToArrayLimit(t,r){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var o,c,l=[],i=!0,u=!1;try{for(a=a.call(t);!(i=(o=a.next()).done)&&(l.push(o.value),!r||l.length!==r);i=!0);}catch(t){u=!0,c=t}finally{try{i||null==a.return||a.return()}finally{if(u)throw c}}return l}}(t,r)||(0,o.Z)(t,r)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"9574":function(t,r,a){"use strict";a.d(r,{"Z":function(){return _toConsumableArray}});var o=a(7408);var c=a(235);function _toConsumableArray(t){return function _arrayWithoutHoles(t){if(Array.isArray(t))return(0,o.Z)(t)}(t)||function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,c.Z)(t)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"5700":function(t,r,a){"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}a.d(r,{"Z":function(){return _typeof}})},"235":function(t,r,a){"use strict";a.d(r,{"Z":function(){return _unsupportedIterableToArray}});var o=a(7408);function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return(0,o.Z)(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,o.Z)(t,r):void 0}}},"9123":function(t,r,a){"use strict";a.d(r,{"Z":function(){return _createForOfIteratorHelper}});var o=a(9684);function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=(0,o.Z)(t))||r&&t&&"number"==typeof t.length){a&&(t=a);var c=0,l=function F(){};return{"s":l,"n":function n(){return c>=t.length?{"done":!0}:{"done":!1,"value":t[c++]}},"e":function e(t){throw t},"f":l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,p=!1;return{"s":function s(){a=a.call(t)},"n":function n(){var t=a.next();return u=t.done,t},"e":function e(t){p=!0,i=t},"f":function f(){try{u||null==a.return||a.return()}finally{if(p)throw i}}}}}}]);