(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"117":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(2),a=n(3),c=n(10),s=n(11),r=n(17),l=n(16),o=n(23),u=n(115),b=n(116),d=n.n(b),j=n(119),h=(n(118),n(114)),m=function(e){Object(c.a)(DemoHeader,e);var t=Object(s.a)(DemoHeader);function DemoHeader(){return Object(i.a)(this,DemoHeader),t.apply(this,arguments)}return Object(a.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(l.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=o.a.getEnv()!==o.a.ENV_TYPE.WEB?"hide-split-line":"",n=this.props.icon;return Object(h.jsxs)(u.i,{"className":d()(e[0],t),"children":[o.a.getEnv()===o.a.ENV_TYPE.WEB&&Object(h.jsx)(j.j,{"type":"detail-home","onClick":this.onClick.bind(this)}),o.a.getEnv()!==o.a.ENV_TYPE.WEB&&n&&Object(h.jsx)(j.j,{"type":n,"size":44,"customStyle":{"marginRight":o.a.pxTransform(18)}}),Object(h.jsx)(u.i,{"className":d()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(r.Component)},"118":function(e,t,n){},"120":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var i=n(4),a=n(2),c=n(3),s=n(10),r=n(11),l=n(17),o=n(115),u=n(116),b=n.n(u),d=(n(121),n(114)),j=function(e){Object(s.a)(DemoBlock,e);var t=Object(r.a)(DemoBlock);function DemoBlock(){return Object(a.a)(this,DemoBlock),t.apply(this,arguments)}return Object(c.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,n=["block","block__title","block__subTitle"],a=[(e={},Object(i.a)(e,"block--hide-padding",this.props.hidePd),Object(i.a)(e,"block--hide-mb",this.props.hideMb),e),Object(i.a)({},"block__title--hide-padding",this.props.hidePd)],c=this.props,s=c.customStyle,r=c.className;return Object(d.jsxs)(o.i,{"className":b()(n[0],a[0],r),"style":s,"children":[Object(d.jsxs)(o.i,{"className":"block__header","children":[this.props.title&&Object(d.jsx)(o.i,{"className":b()(n[1],a[1]),"children":this.props.title}),this.props.subTitle&&Object(d.jsx)(o.i,{"className":b()(n[2]),"children":this.props.subTitle})]}),Object(d.jsx)(o.i,{"className":b()((t={},Object(i.a)(t,"block__body",!0),Object(i.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(l.Component)},"121":function(e,t,n){},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(2),a=n(3),c=n(10),s=n(11),r=n(17),l=n(115),o=n(116),u=n.n(o),b=(n(123),n(114)),d=function(e){Object(c.a)(DemoTable,e);var t=Object(s.a)(DemoTable);function DemoTable(){return Object(i.a)(this,DemoTable),t.apply(this,arguments)}return Object(a.a)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var n=t.head,i=t.data,a=t.title,c={};n&&n.length&&(c.width=100/n.length+"%");var s={};return i&&i.length&&(s.width=100/i.length+"%"),Object(b.jsxs)(l.i,{"className":u()(e[0]),"children":[a&&Object(b.jsx)(l.i,{"className":u()(e[1]),"children":this.props.list.title}),Object(b.jsxs)(l.i,{"className":u()(e[2]),"children":[n&&n.length?Object(b.jsx)(l.i,{"className":u()(e[3]),"children":n.map((function(t){return Object(b.jsx)(l.i,{"style":c,"className":u()(e[4]),"children":t},t)}))}):null,i&&i.length?Object(b.jsx)(l.i,{"children":i.map((function(e,t){return Object(b.jsx)(l.i,{"className":"table__tr","children":e.list.map((function(e){return Object(b.jsx)(l.i,{"className":"table__td","style":s,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(r.Component)},"123":function(e,t,n){},"124":function(e,t,n){"use strict";n.d(t,"a",(function(){return setNavigationBarTitle}));var i=n(14),a=n(9);Object(a.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(a.c)(e);if(!t.flag){var n={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(n.errMsg),Promise.reject(n)}var c=e.title,s=e.success,r=e.fail,l=e.complete,o=new i.a({"name":"setNavigationBarTitle","success":s,"fail":r,"complete":l});return c&&"string"==typeof c?(document.title!==c&&(document.title=c),o.success()):o.fail({"errMsg":Object(a.a)({"para":"title","correct":"String","wrong":c})})}Object(a.d)("hideNavigationBarLoading"),Object(a.d)("hideHomeButton")},"166":function(e,t,n){},"203":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Index}));var i=n(15),a=n(4),c=n(17),s=n(124),r=n(115),l=n(116),o=n.n(l),u=n(120),b=n(117),d=n(122),j=n(119),h=(n(166),n(114));var m={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["placeholder","默认文案，可选","string","搜索商品，共X件好物"]},{"list":["showSplitLine","展示分割线，可选","boolean","true"]},{"list":["padding","容器左右内边距，可选","number","30"]},{"list":["bgColor","容器背景色，可选","string","#FAFAFA"]},{"list":["color","输入文字颜色，可选","string","#333333"]},{"list":["className","自定义类名，可选","string","-"]},{"list":["customStyle","自定义样式，可选","object","-"]}]},p={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onChange","输入框值改变时触发的事件","event: CommonEvent, value: string"]},{"list":["onClear","点击清除icon时触发","-"]},{"list":["onFocus","聚焦时触发","event"]},{"list":["onBlur","失去焦点时触发","event"]}]};function Index(e){var t=Object(c.useState)(m),n=Object(i.a)(t,1)[0],l=Object(c.useState)(p),O=Object(i.a)(l,1)[0],f=function getClassObject(){return Object(a.a)({"page":!0},"demo-search",!0)}();return Object(c.useEffect)((function(){Object(s.a)({"title":"Search 搜索"})}),[]),Object(h.jsxs)(r.i,{"className":o()(f),"children":[Object(h.jsx)(b.a,{"title":"Search 搜索"}),Object(h.jsx)(u.a,{"title":"普通","children":Object(h.jsx)(j.v,{"onChange":function onChange(e,t){return function _onChange(e,t){console.log(t)}(0,t)}})}),Object(h.jsx)(u.a,{"children":Object(h.jsx)(d.a,{"list":n})}),Object(h.jsx)(u.a,{"children":Object(h.jsx)(d.a,{"list":O})})]})}}}]);