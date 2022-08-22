(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"117":function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var n=i(2),c=i(3),a=i(10),s=i(11),r=i(17),l=i(16),o=i(23),b=i(115),u=i(116),j=i.n(u),d=i(119),h=(i(118),i(114)),O=function(e){Object(a.a)(DemoHeader,e);var t=Object(s.a)(DemoHeader);function DemoHeader(){return Object(n.a)(this,DemoHeader),t.apply(this,arguments)}return Object(c.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(l.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=o.a.getEnv()!==o.a.ENV_TYPE.WEB?"hide-split-line":"",i=this.props.icon;return Object(h.jsxs)(b.i,{"className":j()(e[0],t),"children":[o.a.getEnv()===o.a.ENV_TYPE.WEB&&Object(h.jsx)(d.j,{"type":"detail-home","onClick":this.onClick.bind(this)}),o.a.getEnv()!==o.a.ENV_TYPE.WEB&&i&&Object(h.jsx)(d.j,{"type":i,"size":44,"customStyle":{"marginRight":o.a.pxTransform(18)}}),Object(h.jsx)(b.i,{"className":j()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(r.Component)},"118":function(e,t,i){},"120":function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i(4),c=i(2),a=i(3),s=i(10),r=i(11),l=i(17),o=i(115),b=i(116),u=i.n(b),j=(i(121),i(114)),d=function(e){Object(s.a)(DemoBlock,e);var t=Object(r.a)(DemoBlock);function DemoBlock(){return Object(c.a)(this,DemoBlock),t.apply(this,arguments)}return Object(a.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,i=["block","block__title","block__subTitle"],c=[(e={},Object(n.a)(e,"block--hide-padding",this.props.hidePd),Object(n.a)(e,"block--hide-mb",this.props.hideMb),e),Object(n.a)({},"block__title--hide-padding",this.props.hidePd)],a=this.props,s=a.customStyle,r=a.className;return Object(j.jsxs)(o.i,{"className":u()(i[0],c[0],r),"style":s,"children":[Object(j.jsxs)(o.i,{"className":"block__header","children":[this.props.title&&Object(j.jsx)(o.i,{"className":u()(i[1],c[1]),"children":this.props.title}),this.props.subTitle&&Object(j.jsx)(o.i,{"className":u()(i[2]),"children":this.props.subTitle})]}),Object(j.jsx)(o.i,{"className":u()((t={},Object(n.a)(t,"block__body",!0),Object(n.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(l.Component)},"121":function(e,t,i){},"122":function(e,t,i){"use strict";i.d(t,"a",(function(){return j}));var n=i(2),c=i(3),a=i(10),s=i(11),r=i(17),l=i(115),o=i(116),b=i.n(o),u=(i(123),i(114)),j=function(e){Object(a.a)(DemoTable,e);var t=Object(s.a)(DemoTable);function DemoTable(){return Object(n.a)(this,DemoTable),t.apply(this,arguments)}return Object(c.a)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var i=t.head,n=t.data,c=t.title,a={};i&&i.length&&(a.width=100/i.length+"%");var s={};return n&&n.length&&(s.width=100/n.length+"%"),Object(u.jsxs)(l.i,{"className":b()(e[0]),"children":[c&&Object(u.jsx)(l.i,{"className":b()(e[1]),"children":this.props.list.title}),Object(u.jsxs)(l.i,{"className":b()(e[2]),"children":[i&&i.length?Object(u.jsx)(l.i,{"className":b()(e[3]),"children":i.map((function(t){return Object(u.jsx)(l.i,{"style":a,"className":b()(e[4]),"children":t},t)}))}):null,n&&n.length?Object(u.jsx)(l.i,{"children":n.map((function(e,t){return Object(u.jsx)(l.i,{"className":"table__tr","children":e.list.map((function(e){return Object(u.jsx)(l.i,{"className":"table__td","style":s,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(r.Component)},"123":function(e,t,i){},"124":function(e,t,i){"use strict";i.d(t,"a",(function(){return setNavigationBarTitle}));var n=i(14),c=i(9);Object(c.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(c.c)(e);if(!t.flag){var i={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(i.errMsg),Promise.reject(i)}var a=e.title,s=e.success,r=e.fail,l=e.complete,o=new n.a({"name":"setNavigationBarTitle","success":s,"fail":r,"complete":l});return a&&"string"==typeof a?(document.title!==a&&(document.title=a),o.success()):o.fail({"errMsg":Object(c.a)({"para":"title","correct":"String","wrong":a})})}Object(c.d)("hideNavigationBarLoading"),Object(c.d)("hideHomeButton")},"167":function(e,t,i){},"204":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return Index}));var n=i(15),c=i(4),a=i(17),s=i(124),r=i(115),l=i(116),o=i.n(l),b=i(120),u=i(117),j=i(122),d=i(119),h=(i(167),i(114));var O={"title":"API","head":["函数","说明","类型","参数"],"data":[{"list":["isShow","是否展示，必选","boolean","false"]},{"list":["text","内容，必选","string","-"]},{"list":["duration","持续时间、毫秒，可选","number","2000"]},{"list":["className","自定义类名，可选","string","-"]},{"list":["customStyle","自定义样式，可选","object","-"]}]},m={"title":"Event API","head":["参数","说明","参数"],"data":[{"list":["onClose","toast消失时触发，必选","-"]}]};function Index(e){var t=Object(a.useState)(O),i=Object(n.a)(t,1)[0],l=Object(a.useState)(m),p=Object(n.a)(l,1)[0],f=Object(a.useState)(""),x=Object(n.a)(f,2),g=x[0],_=x[1],k=Object(a.useState)(""),v=Object(n.a)(k,2),N=v[0],y=void 0===N?2e3:N,C=v[1],T=Object(a.useState)(!1),D=Object(n.a)(T,2),B=D[0],E=D[1],w=function getClassObject(){return Object(c.a)({"page":!0},"toast-demo",!0)}();function _onClick(e){C(e.duration),E(!0),_(e.text)}return Object(a.useEffect)((function(){Object(s.a)({"title":"Toast 轻提示"})}),[]),Object(h.jsxs)(r.i,{"className":o()(w),"children":[Object(h.jsx)(u.a,{"title":"Toast 轻提示"}),Object(h.jsx)(b.a,{"title":"基础","children":Object(h.jsx)(d.e,{"type":"primary","onClick":function onClick(){return _onClick({"text":"操作成功","duration":500})},"size":"block","children":"点击出toast,展示0.5s"})}),Object(h.jsx)(b.a,{"title":"长文本","children":Object(h.jsx)(d.e,{"type":"primary","onClick":function onClick(){return _onClick({"text":"操作成功操作成功操作成功操作成功操作成功操作成功操作成功"})},"size":"block","children":"点击出长文本"})}),Object(h.jsx)(b.a,{"children":Object(h.jsx)(j.a,{"list":i})}),Object(h.jsx)(b.a,{"children":Object(h.jsx)(j.a,{"list":p})}),Object(h.jsx)(d.E,{"isShow":B,"text":g,"duration":y,"onClose":function onClose(){!function _onClose(){console.log("关闭了"),E(!1)}()}})]})}}}]);