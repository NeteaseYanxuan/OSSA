(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"117":function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var n=i(2),c=i(3),s=i(10),a=i(11),l=i(17),r=i(16),o=i(23),u=i(115),b=i(116),j=i.n(b),d=i(119),h=(i(118),i(114)),O=function(e){Object(s.a)(DemoHeader,e);var t=Object(a.a)(DemoHeader);function DemoHeader(){return Object(n.a)(this,DemoHeader),t.apply(this,arguments)}return Object(c.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(r.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=o.a.getEnv()!==o.a.ENV_TYPE.WEB?"hide-split-line":"",i=this.props.icon;return Object(h.jsxs)(u.i,{"className":j()(e[0],t),"children":[o.a.getEnv()===o.a.ENV_TYPE.WEB&&Object(h.jsx)(d.j,{"type":"detail-home","onClick":this.onClick.bind(this)}),o.a.getEnv()!==o.a.ENV_TYPE.WEB&&i&&Object(h.jsx)(d.j,{"type":i,"size":44,"customStyle":{"marginRight":o.a.pxTransform(18)}}),Object(h.jsx)(u.i,{"className":j()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(l.Component)},"118":function(e,t,i){},"120":function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i(4),c=i(2),s=i(3),a=i(10),l=i(11),r=i(17),o=i(115),u=i(116),b=i.n(u),j=(i(121),i(114)),d=function(e){Object(a.a)(DemoBlock,e);var t=Object(l.a)(DemoBlock);function DemoBlock(){return Object(c.a)(this,DemoBlock),t.apply(this,arguments)}return Object(s.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,i=["block","block__title","block__subTitle"],c=[(e={},Object(n.a)(e,"block--hide-padding",this.props.hidePd),Object(n.a)(e,"block--hide-mb",this.props.hideMb),e),Object(n.a)({},"block__title--hide-padding",this.props.hidePd)],s=this.props,a=s.customStyle,l=s.className;return Object(j.jsxs)(o.i,{"className":b()(i[0],c[0],l),"style":a,"children":[Object(j.jsxs)(o.i,{"className":"block__header","children":[this.props.title&&Object(j.jsx)(o.i,{"className":b()(i[1],c[1]),"children":this.props.title}),this.props.subTitle&&Object(j.jsx)(o.i,{"className":b()(i[2]),"children":this.props.subTitle})]}),Object(j.jsx)(o.i,{"className":b()((t={},Object(n.a)(t,"block__body",!0),Object(n.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(r.Component)},"121":function(e,t,i){},"122":function(e,t,i){"use strict";i.d(t,"a",(function(){return j}));var n=i(2),c=i(3),s=i(10),a=i(11),l=i(17),r=i(115),o=i(116),u=i.n(o),b=(i(123),i(114)),j=function(e){Object(s.a)(DemoTable,e);var t=Object(a.a)(DemoTable);function DemoTable(){return Object(n.a)(this,DemoTable),t.apply(this,arguments)}return Object(c.a)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var i=t.head,n=t.data,c=t.title,s={};i&&i.length&&(s.width=100/i.length+"%");var a={};return n&&n.length&&(a.width=100/n.length+"%"),Object(b.jsxs)(r.i,{"className":u()(e[0]),"children":[c&&Object(b.jsx)(r.i,{"className":u()(e[1]),"children":this.props.list.title}),Object(b.jsxs)(r.i,{"className":u()(e[2]),"children":[i&&i.length?Object(b.jsx)(r.i,{"className":u()(e[3]),"children":i.map((function(t){return Object(b.jsx)(r.i,{"style":s,"className":u()(e[4]),"children":t},t)}))}):null,n&&n.length?Object(b.jsx)(r.i,{"children":n.map((function(e,t){return Object(b.jsx)(r.i,{"className":"table__tr","children":e.list.map((function(e){return Object(b.jsx)(r.i,{"className":"table__td","style":a,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(l.Component)},"123":function(e,t,i){},"124":function(e,t,i){"use strict";i.d(t,"a",(function(){return setNavigationBarTitle}));var n=i(14),c=i(9);Object(c.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(c.c)(e);if(!t.flag){var i={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(i.errMsg),Promise.reject(i)}var s=e.title,a=e.success,l=e.fail,r=e.complete,o=new n.a({"name":"setNavigationBarTitle","success":a,"fail":l,"complete":r});return s&&"string"==typeof s?(document.title!==s&&(document.title=s),o.success()):o.fail({"errMsg":Object(c.a)({"para":"title","correct":"String","wrong":s})})}Object(c.d)("hideNavigationBarLoading"),Object(c.d)("hideHomeButton")},"163":function(e,t,i){},"202":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return Index}));var n=i(15),c=i(4),s=i(17),a=i(124),l=i(115),r=i(116),o=i.n(r),u=i(120),b=i(117),j=i(122),d=i(119),h=(i(163),i(114));var O={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["title","标题，可选","string","-"]},{"list":["selectedIcon","选中时icon，取值参考OsIcon，可选","string","grade-selected"]},{"list":["icon","未选中时icon，取值参考OsIcon，可选","string","grade"]},{"list":["selectedIconColor","选中icon颜色，可选","string","#FAB646"]},{"list":["color","未选中icon颜色，可选","string","#CCCCCC"]},{"list":["options","分数对应的结果，可选","Array<string>","['非常差', '差', '一般', '满意', '非常满意']"]},{"list":["isShowResult","展示分值对应的结果，可选","boolean","true"]},{"list":["value","当前分值索引(从0开始)，可选","number","0"]},{"list":["className","自定义类名，可选","string","-"]},{"list":["customStyle","自定义样式，可选","object","-"]}]},m={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onChange","评分改变时触发","(item)当前分值对象"]}]},p=["1个赞","2个赞","3个赞","4个赞","5个赞"];function Index(e){var t=Object(s.useState)(O),i=Object(n.a)(t,1)[0],r=Object(s.useState)(m),f=Object(n.a)(r,1)[0],g=Object(s.useState)(p),v=Object(n.a)(g,1)[0],x=function getClassObject(){return Object(c.a)({"page":!0},"demo-rate",!0)}();return Object(s.useEffect)((function(){Object(a.a)({"title":"Rate 评分"})}),[]),Object(h.jsxs)(l.i,{"className":o()(x),"children":[Object(h.jsx)(b.a,{"title":"Rate 评分"}),Object(h.jsx)(u.a,{"title":"基础","children":Object(h.jsx)(d.u,{"title":"评分","onChange":function onChange(e){!function _onChange(e){console.log(e)}(e)}})}),Object(h.jsx)(u.a,{"title":"最小尺寸","children":Object(h.jsx)(d.u,{"type":"small","value":2,"isShowResult":!1})}),Object(h.jsx)(u.a,{"title":"自定义图标","children":Object(h.jsx)(d.u,{"title":"评分","value":3,"selectedIcon":"like-selected","icon":"like","options":v})}),Object(h.jsx)(u.a,{"children":Object(h.jsx)(j.a,{"list":i})}),Object(h.jsx)(u.a,{"children":Object(h.jsx)(j.a,{"list":f})})]})}}}]);