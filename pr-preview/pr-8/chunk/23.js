(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"117":function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(2),i=n(3),c=n(10),s=n(11),o=n(17),l=n(16),r=n(23),u=n(115),b=n(116),d=n.n(b),j=n(119),h=(n(118),n(114)),O=function(e){Object(c.a)(DemoHeader,e);var t=Object(s.a)(DemoHeader);function DemoHeader(){return Object(a.a)(this,DemoHeader),t.apply(this,arguments)}return Object(i.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(l.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=r.a.getEnv()!==r.a.ENV_TYPE.WEB?"hide-split-line":"",n=this.props.icon;return Object(h.jsxs)(u.i,{"className":d()(e[0],t),"children":[r.a.getEnv()===r.a.ENV_TYPE.WEB&&Object(h.jsx)(j.j,{"type":"detail-home","onClick":this.onClick.bind(this)}),r.a.getEnv()!==r.a.ENV_TYPE.WEB&&n&&Object(h.jsx)(j.j,{"type":n,"size":44,"customStyle":{"marginRight":r.a.pxTransform(18)}}),Object(h.jsx)(u.i,{"className":d()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(o.Component)},"118":function(e,t,n){},"120":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(4),i=n(2),c=n(3),s=n(10),o=n(11),l=n(17),r=n(115),u=n(116),b=n.n(u),d=(n(121),n(114)),j=function(e){Object(s.a)(DemoBlock,e);var t=Object(o.a)(DemoBlock);function DemoBlock(){return Object(i.a)(this,DemoBlock),t.apply(this,arguments)}return Object(c.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,n=["block","block__title","block__subTitle"],i=[(e={},Object(a.a)(e,"block--hide-padding",this.props.hidePd),Object(a.a)(e,"block--hide-mb",this.props.hideMb),e),Object(a.a)({},"block__title--hide-padding",this.props.hidePd)],c=this.props,s=c.customStyle,o=c.className;return Object(d.jsxs)(r.i,{"className":b()(n[0],i[0],o),"style":s,"children":[Object(d.jsxs)(r.i,{"className":"block__header","children":[this.props.title&&Object(d.jsx)(r.i,{"className":b()(n[1],i[1]),"children":this.props.title}),this.props.subTitle&&Object(d.jsx)(r.i,{"className":b()(n[2]),"children":this.props.subTitle})]}),Object(d.jsx)(r.i,{"className":b()((t={},Object(a.a)(t,"block__body",!0),Object(a.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(l.Component)},"121":function(e,t,n){},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(2),i=n(3),c=n(10),s=n(11),o=n(17),l=n(115),r=n(116),u=n.n(r),b=(n(123),n(114)),d=function(e){Object(c.a)(DemoTable,e);var t=Object(s.a)(DemoTable);function DemoTable(){return Object(a.a)(this,DemoTable),t.apply(this,arguments)}return Object(i.a)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var n=t.head,a=t.data,i=t.title,c={};n&&n.length&&(c.width=100/n.length+"%");var s={};return a&&a.length&&(s.width=100/a.length+"%"),Object(b.jsxs)(l.i,{"className":u()(e[0]),"children":[i&&Object(b.jsx)(l.i,{"className":u()(e[1]),"children":this.props.list.title}),Object(b.jsxs)(l.i,{"className":u()(e[2]),"children":[n&&n.length?Object(b.jsx)(l.i,{"className":u()(e[3]),"children":n.map((function(t){return Object(b.jsx)(l.i,{"style":c,"className":u()(e[4]),"children":t},t)}))}):null,a&&a.length?Object(b.jsx)(l.i,{"children":a.map((function(e,t){return Object(b.jsx)(l.i,{"className":"table__tr","children":e.list.map((function(e){return Object(b.jsx)(l.i,{"className":"table__td","style":s,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(o.Component)},"123":function(e,t,n){},"124":function(e,t,n){"use strict";n.d(t,"a",(function(){return setNavigationBarTitle}));var a=n(14),i=n(9);Object(i.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(i.c)(e);if(!t.flag){var n={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(n.errMsg),Promise.reject(n)}var c=e.title,s=e.success,o=e.fail,l=e.complete,r=new a.a({"name":"setNavigationBarTitle","success":s,"fail":o,"complete":l});return c&&"string"==typeof c?(document.title!==c&&(document.title=c),r.success()):r.fail({"errMsg":Object(i.a)({"para":"title","correct":"String","wrong":c})})}Object(i.d)("hideNavigationBarLoading"),Object(i.d)("hideHomeButton")},"164":function(e,t,n){},"203":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Index}));var a=n(15),i=n(4),c=n(17),s=n(124),o=n(115),l=n(116),r=n.n(l),u=n(120),b=n(117),d=n(122),j=n(119),h=(n(164),n(114));var O={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["value","当前值，开发者需要通过 onChange 事件来更新 value 值，必选","number","1"]},{"list":["max","最大值，可选","number","99"]},{"list":["min","最小值，可选","number","1"]},{"list":["isReadonly","数量不可编辑，可选","boolean","false"]},{"list":["isDisabled","不可点击，可选","boolean","false"]},{"list":["customStyle","自定义样式，可选","object","-"]},{"list":["className","自定义类名，可选","string","-"]}]},m={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onAdd","点击加时触发","当前数值"]},{"list":["onSubtract","点击减时触发","当前数值"]},{"list":["onChange","输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 current 值变化，onChange 函数必选","当前数值"]},{"list":["onBlur","输入框失去焦点时触发","event对象"]},{"list":["onErrorInput","错误输入时触发","错误数值"]},{"list":["onDisabledAdd","到达最大值之后点击增加触发","当前数值"]},{"list":["onDisabledSubtract","到达最小值之后点击增加触发","当前数值"]}]};function Index(e){var t=Object(c.useState)(O),n=Object(a.a)(t,1)[0],l=Object(c.useState)(1),p=Object(a.a)(l,2),f=p[0],g=p[1],v=Object(c.useState)(3),x=Object(a.a)(v,2),_=x[0],D=x[1],N=Object(c.useState)(4),k=Object(a.a)(N,2),C=k[0],y=k[1],B=Object(c.useState)(m),S=Object(a.a)(B,1)[0],T=function getClassObject(){return Object(i.a)({"page":!0},"stepper-demo",!0)}();return Object(c.useEffect)((function(){Object(s.a)({"title":"Stepper 步进器"})}),[]),Object(h.jsxs)(o.i,{"className":r()(T),"children":[Object(h.jsx)(b.a,{"title":"Stepper 步进器"}),Object(h.jsx)(u.a,{"title":"基础","children":Object(h.jsx)(j.w,{"value":f,"max":5,"onAdd":function onAdd(e){return function _onAdd(e){console.log(e)}(e)},"onSubtract":function onSubtract(e){return function _onSubtract(e){console.log(e)}(e)},"onChange":function onChange(e){!function _onChange(e,t){t(e)}(e,g)},"onBlur":function onBlur(e){!function _onBlur(e){console.log(e),console.log("失去焦点啦")}(e)},"onDisabledAdd":function onDisabledAdd(e){return console.log(e)},"onDisabledSubtract":function onDisabledSubtract(e){return console.log(e)}})}),Object(h.jsx)(u.a,{"title":"数量不可编辑","children":Object(h.jsx)(j.w,{"isReadonly":!0,"value":_,"onChange":function onChange(e){!function onChange1(e,t){t(e)}(e,D)}})}),Object(h.jsx)(u.a,{"title":"不可点击","children":Object(h.jsx)(j.w,{"isDisabled":!0,"value":C,"onChange":function onChange(e){!function onChange2(e,t){t(e)}(e,y)}})}),Object(h.jsx)(u.a,{"children":Object(h.jsx)(d.a,{"list":n})}),Object(h.jsx)(u.a,{"children":Object(h.jsx)(d.a,{"list":S})})]})}}}]);