(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"118":function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var c=i(2),a=i(3),n=i(10),s=i(11),r=i(17),l=i(16),o=i(23),b=i(115),j=i(116),d=i.n(j),u=i(117),h=(i(119),i(114)),O=function(e){Object(n.a)(DemoHeader,e);var t=Object(s.a)(DemoHeader);function DemoHeader(){return Object(c.a)(this,DemoHeader),t.apply(this,arguments)}return Object(a.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(l.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=o.a.getEnv()!==o.a.ENV_TYPE.WEB?"hide-split-line":"",i=this.props.icon;return Object(h.jsxs)(b.i,{"className":d()(e[0],t),"children":[o.a.getEnv()===o.a.ENV_TYPE.WEB&&Object(h.jsx)(u.k,{"type":"detail-home","onClick":this.onClick.bind(this)}),o.a.getEnv()!==o.a.ENV_TYPE.WEB&&i&&Object(h.jsx)(u.k,{"type":i,"size":44,"customStyle":{"marginRight":o.a.pxTransform(18)}}),Object(h.jsx)(b.i,{"className":d()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(r.Component)},"119":function(e,t,i){},"120":function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var c=i(4),a=i(2),n=i(3),s=i(10),r=i(11),l=i(17),o=i(115),b=i(116),j=i.n(b),d=(i(121),i(114)),u=function(e){Object(s.a)(DemoBlock,e);var t=Object(r.a)(DemoBlock);function DemoBlock(){return Object(a.a)(this,DemoBlock),t.apply(this,arguments)}return Object(n.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,i=["block","block__title","block__subTitle"],a=[(e={},Object(c.a)(e,"block--hide-padding",this.props.hidePd),Object(c.a)(e,"block--hide-mb",this.props.hideMb),e),Object(c.a)({},"block__title--hide-padding",this.props.hidePd)],n=this.props,s=n.customStyle,r=n.className;return Object(d.jsxs)(o.i,{"className":j()(i[0],a[0],r),"style":s,"children":[Object(d.jsxs)(o.i,{"className":"block__header","children":[this.props.title&&Object(d.jsx)(o.i,{"className":j()(i[1],a[1]),"children":this.props.title}),this.props.subTitle&&Object(d.jsx)(o.i,{"className":j()(i[2]),"children":this.props.subTitle})]}),Object(d.jsx)(o.i,{"className":j()((t={},Object(c.a)(t,"block__body",!0),Object(c.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(l.Component)},"121":function(e,t,i){},"122":function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var c=i(2),a=i(3),n=i(10),s=i(11),r=i(17),l=i(115),o=i(116),b=i.n(o),j=(i(123),i(114)),d=function(e){Object(n.a)(DemoTable,e);var t=Object(s.a)(DemoTable);function DemoTable(){return Object(c.a)(this,DemoTable),t.apply(this,arguments)}return Object(a.a)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var i=t.head,c=t.data,a=t.title,n={};i&&i.length&&(n.width=100/i.length+"%");var s={};return c&&c.length&&(s.width=100/c.length+"%"),Object(j.jsxs)(l.i,{"className":b()(e[0]),"children":[a&&Object(j.jsx)(l.i,{"className":b()(e[1]),"children":this.props.list.title}),Object(j.jsxs)(l.i,{"className":b()(e[2]),"children":[i&&i.length?Object(j.jsx)(l.i,{"className":b()(e[3]),"children":i.map((function(t){return Object(j.jsx)(l.i,{"style":n,"className":b()(e[4]),"children":t},t)}))}):null,c&&c.length?Object(j.jsx)(l.i,{"children":c.map((function(e,t){return Object(j.jsx)(l.i,{"className":"table__tr","children":e.list.map((function(e){return Object(j.jsx)(l.i,{"className":"table__td","style":s,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(r.Component)},"123":function(e,t,i){},"124":function(e,t,i){"use strict";i.d(t,"a",(function(){return setNavigationBarTitle}));var c=i(14),a=i(9);Object(a.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(a.c)(e);if(!t.flag){var i={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(i.errMsg),Promise.reject(i)}var n=e.title,s=e.success,r=e.fail,l=e.complete,o=new c.a({"name":"setNavigationBarTitle","success":s,"fail":r,"complete":l});return n&&"string"==typeof n?(document.title!==n&&(document.title=n),o.success()):o.fail({"errMsg":Object(a.a)({"para":"title","correct":"String","wrong":n})})}Object(a.d)("hideNavigationBarLoading"),Object(a.d)("hideHomeButton")},"163":function(e,t,i){},"202":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return Index}));var c=i(15),a=i(4),n=i(17),s=i(124),r=i(115),l=i(116),o=i.n(l),b=i(120),j=i(118),d=i(122),u=i(117),h=(i(163),i(114));var O={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["color","色值，可选","string","#DD1A21"]},{"list":["size","尺寸，可选","number","34"]},{"list":["className","自定义类名，可选","string","-"]},{"list":["customStyle","自定义样式，可选","object","-"]}]},m={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["-","-","-","-"]}]};function Index(e){var t=Object(n.useState)(O),i=Object(c.a)(t,1)[0],l=Object(n.useState)(m),p=Object(c.a)(l,1)[0],f=function getClassObject(){return Object(a.a)({"page":!0},"loading-demo",!0)}();return Object(n.useEffect)((function(){Object(s.a)({"title":"Loading 加载"})}),[]),Object(h.jsxs)(r.i,{"className":o()(f),"children":[Object(h.jsx)(j.a,{"title":"Loading 加载"}),Object(h.jsx)(b.a,{"title":"基础","children":Object(h.jsx)(u.o,{})}),Object(h.jsx)(b.a,{"title":"自定义尺寸","children":Object(h.jsx)(u.o,{"size":60})}),Object(h.jsx)(b.a,{"title":"自定义颜色","children":Object(h.jsx)(u.o,{"color":"blue"})}),Object(h.jsx)(b.a,{"children":Object(h.jsx)(d.a,{"list":i})}),Object(h.jsx)(b.a,{"children":Object(h.jsx)(d.a,{"list":p})})]})}}}]);