(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"117":function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var c=i(2),a=i(3),s=i(10),n=i(11),l=i(17),r=i(16),o=i(23),j=i(115),d=i(116),b=i.n(d),u=i(119),h=(i(118),i(114)),m=function(e){Object(s.a)(DemoHeader,e);var t=Object(n.a)(DemoHeader);function DemoHeader(){return Object(c.a)(this,DemoHeader),t.apply(this,arguments)}return Object(a.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(r.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=o.a.getEnv()!==o.a.ENV_TYPE.WEB?"hide-split-line":"",i=this.props.icon;return Object(h.jsxs)(j.i,{"className":b()(e[0],t),"children":[o.a.getEnv()===o.a.ENV_TYPE.WEB&&Object(h.jsx)(u.j,{"type":"detail-home","onClick":this.onClick.bind(this)}),o.a.getEnv()!==o.a.ENV_TYPE.WEB&&i&&Object(h.jsx)(u.j,{"type":i,"size":44,"customStyle":{"marginRight":o.a.pxTransform(18)}}),Object(h.jsx)(j.i,{"className":b()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(l.Component)},"118":function(e,t,i){},"120":function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var c=i(4),a=i(2),s=i(3),n=i(10),l=i(11),r=i(17),o=i(115),j=i(116),d=i.n(j),b=(i(121),i(114)),u=function(e){Object(n.a)(DemoBlock,e);var t=Object(l.a)(DemoBlock);function DemoBlock(){return Object(a.a)(this,DemoBlock),t.apply(this,arguments)}return Object(s.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,i=["block","block__title","block__subTitle"],a=[(e={},Object(c.a)(e,"block--hide-padding",this.props.hidePd),Object(c.a)(e,"block--hide-mb",this.props.hideMb),e),Object(c.a)({},"block__title--hide-padding",this.props.hidePd)],s=this.props,n=s.customStyle,l=s.className;return Object(b.jsxs)(o.i,{"className":d()(i[0],a[0],l),"style":n,"children":[Object(b.jsxs)(o.i,{"className":"block__header","children":[this.props.title&&Object(b.jsx)(o.i,{"className":d()(i[1],a[1]),"children":this.props.title}),this.props.subTitle&&Object(b.jsx)(o.i,{"className":d()(i[2]),"children":this.props.subTitle})]}),Object(b.jsx)(o.i,{"className":d()((t={},Object(c.a)(t,"block__body",!0),Object(c.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(r.Component)},"121":function(e,t,i){},"122":function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var c=i(2),a=i(3),s=i(10),n=i(11),l=i(17),r=i(115),o=i(116),j=i.n(o),d=(i(123),i(114)),b=function(e){Object(s.a)(DemoTable,e);var t=Object(n.a)(DemoTable);function DemoTable(){return Object(c.a)(this,DemoTable),t.apply(this,arguments)}return Object(a.a)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var i=t.head,c=t.data,a=t.title,s={};i&&i.length&&(s.width=100/i.length+"%");var n={};return c&&c.length&&(n.width=100/c.length+"%"),Object(d.jsxs)(r.i,{"className":j()(e[0]),"children":[a&&Object(d.jsx)(r.i,{"className":j()(e[1]),"children":this.props.list.title}),Object(d.jsxs)(r.i,{"className":j()(e[2]),"children":[i&&i.length?Object(d.jsx)(r.i,{"className":j()(e[3]),"children":i.map((function(t){return Object(d.jsx)(r.i,{"style":s,"className":j()(e[4]),"children":t},t)}))}):null,c&&c.length?Object(d.jsx)(r.i,{"children":c.map((function(e,t){return Object(d.jsx)(r.i,{"className":"table__tr","children":e.list.map((function(e){return Object(d.jsx)(r.i,{"className":"table__td","style":n,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(l.Component)},"123":function(e,t,i){},"124":function(e,t,i){"use strict";i.d(t,"a",(function(){return setNavigationBarTitle}));var c=i(14),a=i(9);Object(a.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(a.c)(e);if(!t.flag){var i={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(i.errMsg),Promise.reject(i)}var s=e.title,n=e.success,l=e.fail,r=e.complete,o=new c.a({"name":"setNavigationBarTitle","success":n,"fail":l,"complete":r});return s&&"string"==typeof s?(document.title!==s&&(document.title=s),o.success()):o.fail({"errMsg":Object(a.a)({"para":"title","correct":"String","wrong":s})})}Object(a.d)("hideNavigationBarLoading"),Object(a.d)("hideHomeButton")},"151":function(e,t,i){},"190":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return Index}));var c=i(15),a=i(17),s=i(124),n=i(115),l=i(120),r=i(117),o=i(122),j=i(119),d=(i(151),i(114)),b={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["type","dot | info | text | list，可选","string","dot"]},{"list":["isShow","展示徽标，可选","booelan","true"]},{"list":["info","角标值，可选","number | string","9"]},{"list":["max","角标阀值，可选","number","99(>99显示99+)"]},{"list":["className","自定义类名，可选","string","-"]},{"list":["customStyle","自定义样式，可选","object","-"]}]},u={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onClick","点击时触发","-"]}]};function Index(){var e=Object(a.useState)(b),t=Object(c.a)(e,1)[0],i=Object(a.useState)(u),h=Object(c.a)(i,1)[0];return Object(a.useEffect)((function(){Object(s.a)({"title":"Badge 徽标"})}),[]),Object(d.jsxs)(n.i,{"className":"demo-badge","children":[Object(d.jsx)(r.a,{"title":"Badge 徽标"}),Object(d.jsx)(l.a,{"title":"dot","children":Object(d.jsx)(n.i,{"className":"badge-item","children":Object(d.jsx)(j.d,{"children":Object(d.jsx)(j.j,{"className":"icon","type":"inform","customStyle":{"verticalAlign":"top"}})})})}),Object(d.jsx)(l.a,{"title":"info","subTitle":"文字","children":Object(d.jsx)(n.i,{"className":"badge-item","children":Object(d.jsx)(j.d,{"type":"info","info":"新品","children":Object(d.jsx)(j.j,{"type":"detail-cart","className":"icon","customStyle":{"verticalAlign":"top"}})})})}),Object(d.jsx)(l.a,{"subTitle":"数字","children":Object(d.jsx)(n.i,{"className":"badge-item","children":Object(d.jsx)(j.d,{"type":"info","info":"9","children":Object(d.jsx)(j.j,{"type":"detail-cart","className":"icon","customStyle":{"verticalAlign":"top"}})})})}),Object(d.jsx)(l.a,{"title":"text","children":Object(d.jsx)(n.i,{"className":"badge-item","children":Object(d.jsx)(j.d,{"type":"text","children":"待评价待评价"})})}),Object(d.jsx)(l.a,{"title":"列表红点","fullScreen":!0,"children":Object(d.jsx)(j.m,{"title":"我是标题我是标题我是标题我是标题我是标题我是标题我是标题","type":"custom","rightIcon":"arrows","children":Object(d.jsx)(j.d,{"type":"list"})})}),Object(d.jsx)(l.a,{"children":Object(d.jsx)(o.a,{"list":t})}),Object(d.jsx)(l.a,{"children":Object(d.jsx)(o.a,{"list":h})})]})}}}]);