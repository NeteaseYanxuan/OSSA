(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var i=n(2),c=n(3),a=n(10),s=n(11),l=n(17),r=n(16),o=n(23),d=n(115),j=n(116),b=n.n(j),u=n(117),h=(n(119),n(114)),O=function(e){Object(a.a)(DemoHeader,e);var t=Object(s.a)(DemoHeader);function DemoHeader(){return Object(i.a)(this,DemoHeader),t.apply(this,arguments)}return Object(c.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(r.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=o.a.getEnv()!==o.a.ENV_TYPE.WEB?"hide-split-line":"",n=this.props.icon;return Object(h.jsxs)(d.i,{"className":b()(e[0],t),"children":[o.a.getEnv()===o.a.ENV_TYPE.WEB&&Object(h.jsx)(u.k,{"type":"detail-home","onClick":this.onClick.bind(this)}),o.a.getEnv()!==o.a.ENV_TYPE.WEB&&n&&Object(h.jsx)(u.k,{"type":n,"size":44,"customStyle":{"marginRight":o.a.pxTransform(18)}}),Object(h.jsx)(d.i,{"className":b()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(l.Component)},"119":function(e,t,n){},"120":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(4),c=n(2),a=n(3),s=n(10),l=n(11),r=n(17),o=n(115),d=n(116),j=n.n(d),b=(n(121),n(114)),u=function(e){Object(s.a)(DemoBlock,e);var t=Object(l.a)(DemoBlock);function DemoBlock(){return Object(c.a)(this,DemoBlock),t.apply(this,arguments)}return Object(a.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,n=["block","block__title","block__subTitle"],c=[(e={},Object(i.a)(e,"block--hide-padding",this.props.hidePd),Object(i.a)(e,"block--hide-mb",this.props.hideMb),e),Object(i.a)({},"block__title--hide-padding",this.props.hidePd)],a=this.props,s=a.customStyle,l=a.className;return Object(b.jsxs)(o.i,{"className":j()(n[0],c[0],l),"style":s,"children":[Object(b.jsxs)(o.i,{"className":"block__header","children":[this.props.title&&Object(b.jsx)(o.i,{"className":j()(n[1],c[1]),"children":this.props.title}),this.props.subTitle&&Object(b.jsx)(o.i,{"className":j()(n[2]),"children":this.props.subTitle})]}),Object(b.jsx)(o.i,{"className":j()((t={},Object(i.a)(t,"block__body",!0),Object(i.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(r.Component)},"121":function(e,t,n){},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(2),c=n(3),a=n(10),s=n(11),l=n(17),r=n(115),o=n(116),d=n.n(o),j=(n(123),n(114)),b=function(e){Object(a.a)(DemoTable,e);var t=Object(s.a)(DemoTable);function DemoTable(){return Object(i.a)(this,DemoTable),t.apply(this,arguments)}return Object(c.a)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var n=t.head,i=t.data,c=t.title,a={};n&&n.length&&(a.width=100/n.length+"%");var s={};return i&&i.length&&(s.width=100/i.length+"%"),Object(j.jsxs)(r.i,{"className":d()(e[0]),"children":[c&&Object(j.jsx)(r.i,{"className":d()(e[1]),"children":this.props.list.title}),Object(j.jsxs)(r.i,{"className":d()(e[2]),"children":[n&&n.length?Object(j.jsx)(r.i,{"className":d()(e[3]),"children":n.map((function(t){return Object(j.jsx)(r.i,{"style":a,"className":d()(e[4]),"children":t},t)}))}):null,i&&i.length?Object(j.jsx)(r.i,{"children":i.map((function(e,t){return Object(j.jsx)(r.i,{"className":"table__tr","children":e.list.map((function(e){return Object(j.jsx)(r.i,{"className":"table__td","style":s,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(l.Component)},"123":function(e,t,n){},"124":function(e,t,n){"use strict";n.d(t,"a",(function(){return setNavigationBarTitle}));var i=n(14),c=n(9);Object(c.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(c.c)(e);if(!t.flag){var n={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(n.errMsg),Promise.reject(n)}var a=e.title,s=e.success,l=e.fail,r=e.complete,o=new i.a({"name":"setNavigationBarTitle","success":s,"fail":l,"complete":r});return a&&"string"==typeof a?(document.title!==a&&(document.title=a),o.success()):o.fail({"errMsg":Object(c.a)({"para":"title","correct":"String","wrong":a})})}Object(c.d)("hideNavigationBarLoading"),Object(c.d)("hideHomeButton")},"175":function(e,t,n){},"212":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Index}));var i=n(15),c=n(4),a=n(17),s=n(124),l=n(115),r=n(116),o=n.n(r),d=n(120),j=n(118),b=n(122),u=n(117),h=(n(175),n(114));var O={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["type","time | date | complete，必选","string","-"]},{"list":["value","选中的时间，格式由type决定，必选","string","-"]},{"list":["fields","有效值 year,month,day\n表示选择器的粒度\ntype=date时有效，可选","string","-"]},{"list":["start","有效日期范围的开始\n由type决定，可选","string","-"]},{"list":["end","有效日期范围的结束\n由type决定，可选","string","-"]}]},m={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onConfirm","点击确认按钮时触发，可选","选中值"]},{"list":["onCancel","点击取消按钮时触发，可选","-"]}]};function Index(e){var t=Object(a.useState)(O),n=Object(i.a)(t,1)[0],r=Object(a.useState)(m),p=Object(i.a)(r,1)[0],f=function getClassObject(){return Object(c.a)({"page":!0},"demo",!0)}(),g=Object(a.useState)("16:6"),x=Object(i.a)(g,2),v=x[0],k=x[1],_=Object(a.useState)("2019-7-25"),N=Object(i.a)(_,2),y=N[0],D=N[1],C=Object(a.useState)("2019-7"),T=Object(i.a)(C,2),B=T[0],E=T[1],w=Object(a.useState)("2019-7-1 20:01"),S=Object(i.a)(w,2),P=S[0],H=S[1];Object(a.useEffect)((function(){Object(s.a)({"title":"DatePicker 时间选择器"})}),[]);return Object(h.jsxs)(l.i,{"className":o()(f),"children":[Object(h.jsx)(j.a,{"title":"DatePicker 时间选择器"}),Object(h.jsx)(d.a,{"title":"选择时间","children":Object(h.jsx)(l.i,{"className":"block-section","children":Object(h.jsx)(u.j,{"type":"time","value":v,"start":"00:00","end":"23:59","onConfirm":function onConfirm(e){console.log(e.detail),k(e.detail.value)},"children":Object(h.jsx)(u.n,{"title":"选择时间","desc":v})})})}),Object(h.jsx)(d.a,{"title":"选择日期","children":Object(h.jsx)(l.i,{"className":"block-section","children":Object(h.jsx)(u.j,{"type":"date","value":y,"start":"1988-8-29","end":"2030-8-29","onConfirm":function onDateConfirm(e){console.log("date change:",e.detail),D(e.detail.value)},"children":Object(h.jsx)(u.n,{"title":"选择日期","desc":y})})})}),Object(h.jsx)(d.a,{"title":"选择年月","children":Object(h.jsx)(l.i,{"className":"block-section","children":Object(h.jsx)(u.j,{"type":"date","fields":"month","value":B,"start":"1988-8","end":"2030-8","onConfirm":function onDateMonthConfirm(e){console.log("date change:",e.detail),E(e.detail.value)},"children":Object(h.jsx)(u.n,{"title":"选择年月","desc":B})})})}),Object(h.jsx)(d.a,{"title":"选择日期和时间","children":Object(h.jsx)(l.i,{"className":"block-section","children":Object(h.jsx)(u.j,{"type":"complete","value":P,"start":"1988-8-1","end":"2030-8-1","onConfirm":function onDateCompleteConfirm(e){console.log("date change:",e.detail),H(e.detail.value)},"children":Object(h.jsx)(u.n,{"title":"选择日期和时间","desc":P})})})}),Object(h.jsx)(d.a,{"children":Object(h.jsx)(b.a,{"list":n})}),Object(h.jsx)(d.a,{"children":Object(h.jsx)(b.a,{"list":p})})]})}}}]);