(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"117":function(e,t,c){"use strict";c.d(t,"a",(function(){return O}));var i=c(2),n=c(3),s=c(10),a=c(11),r=c(17),l=c(16),o=c(23),b=c(115),u=c(116),d=c.n(u),j=c(119),h=(c(118),c(114)),O=function(e){Object(s.a)(DemoHeader,e);var t=Object(a.a)(DemoHeader);function DemoHeader(){return Object(i.a)(this,DemoHeader),t.apply(this,arguments)}return Object(n.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(l.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=o.a.getEnv()!==o.a.ENV_TYPE.WEB?"hide-split-line":"",c=this.props.icon;return Object(h.jsxs)(b.i,{"className":d()(e[0],t),"children":[o.a.getEnv()===o.a.ENV_TYPE.WEB&&Object(h.jsx)(j.j,{"type":"detail-home","onClick":this.onClick.bind(this)}),o.a.getEnv()!==o.a.ENV_TYPE.WEB&&c&&Object(h.jsx)(j.j,{"type":c,"size":44,"customStyle":{"marginRight":o.a.pxTransform(18)}}),Object(h.jsx)(b.i,{"className":d()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(r.Component)},"118":function(e,t,c){},"120":function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var i=c(4),n=c(2),s=c(3),a=c(10),r=c(11),l=c(17),o=c(115),b=c(116),u=c.n(b),d=(c(121),c(114)),j=function(e){Object(a.a)(DemoBlock,e);var t=Object(r.a)(DemoBlock);function DemoBlock(){return Object(n.a)(this,DemoBlock),t.apply(this,arguments)}return Object(s.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,c=["block","block__title","block__subTitle"],n=[(e={},Object(i.a)(e,"block--hide-padding",this.props.hidePd),Object(i.a)(e,"block--hide-mb",this.props.hideMb),e),Object(i.a)({},"block__title--hide-padding",this.props.hidePd)],s=this.props,a=s.customStyle,r=s.className;return Object(d.jsxs)(o.i,{"className":u()(c[0],n[0],r),"style":a,"children":[Object(d.jsxs)(o.i,{"className":"block__header","children":[this.props.title&&Object(d.jsx)(o.i,{"className":u()(c[1],n[1]),"children":this.props.title}),this.props.subTitle&&Object(d.jsx)(o.i,{"className":u()(c[2]),"children":this.props.subTitle})]}),Object(d.jsx)(o.i,{"className":u()((t={},Object(i.a)(t,"block__body",!0),Object(i.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(l.Component)},"121":function(e,t,c){},"122":function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var i=c(2),n=c(3),s=c(10),a=c(11),r=c(17),l=c(115),o=c(116),b=c.n(o),u=(c(123),c(114)),d=function(e){Object(s.a)(DemoTable,e);var t=Object(a.a)(DemoTable);function DemoTable(){return Object(i.a)(this,DemoTable),t.apply(this,arguments)}return Object(n.a)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var c=t.head,i=t.data,n=t.title,s={};c&&c.length&&(s.width=100/c.length+"%");var a={};return i&&i.length&&(a.width=100/i.length+"%"),Object(u.jsxs)(l.i,{"className":b()(e[0]),"children":[n&&Object(u.jsx)(l.i,{"className":b()(e[1]),"children":this.props.list.title}),Object(u.jsxs)(l.i,{"className":b()(e[2]),"children":[c&&c.length?Object(u.jsx)(l.i,{"className":b()(e[3]),"children":c.map((function(t){return Object(u.jsx)(l.i,{"style":s,"className":b()(e[4]),"children":t},t)}))}):null,i&&i.length?Object(u.jsx)(l.i,{"children":i.map((function(e,t){return Object(u.jsx)(l.i,{"className":"table__tr","children":e.list.map((function(e){return Object(u.jsx)(l.i,{"className":"table__td","style":a,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(r.Component)},"123":function(e,t,c){},"124":function(e,t,c){"use strict";c.d(t,"a",(function(){return setNavigationBarTitle}));var i=c(14),n=c(9);Object(n.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(n.c)(e);if(!t.flag){var c={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(c.errMsg),Promise.reject(c)}var s=e.title,a=e.success,r=e.fail,l=e.complete,o=new i.a({"name":"setNavigationBarTitle","success":a,"fail":r,"complete":l});return s&&"string"==typeof s?(document.title!==s&&(document.title=s),o.success()):o.fail({"errMsg":Object(n.a)({"para":"title","correct":"String","wrong":s})})}Object(n.d)("hideNavigationBarLoading"),Object(n.d)("hideHomeButton")},"159":function(e,t,c){},"197":function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return Index}));var i=c(15),n=c(4),s=c(17),a=c(124),r=c(115),l=c(116),o=c.n(l),b=c(120),u=c(117),d=c(122),j=c(119),h=(c(159),c(114));var O={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["value","当前选中的标签索引值，从0开始，可选","number","0"]},{"list":["tabsArr","数据渲染，必选","<Array><API-TabsArr>","-"]},{"list":["defaultColor","默认填充色，可选","string","#7F7F7F"]},{"list":["activeColor","高亮填充色，可选","string","#DD1A21"]},{"list":["isfixedBt","是否固定在页面底部，可选","boolean","false"]},{"list":["space","icon与文案垂直间距，可选","number",10]},{"list":["className","自定义类名，可选","string","-"]},{"list":["customStyle","自定义样式，可选","object","-"]}]},m={"title":"API-TabsArr","head":["参数","说明","类型","默认值"],"data":[{"list":["icon","icon名称，取值参考OsIcon Tabbar分类，必选","string","-"]},{"list":["selectedIcon","选中icon名称，取值参考OsIcon Tabbar分类，必选","string","-"]},{"list":["text","tabbar文案，必选","string","-"]},{"list":["useCustomIcon","是否使用自定义icon，允许icon/selectedIcon传入自定义的组件","boolean","false"]}]},p={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onClick","点击时触发","(item)当前点击的标签，从0开始"]}]},f=[{"icon":"home","selectedIcon":"home-pressed","text":"首页"},{"icon":"classify","selectedIcon":"classify-pressed","text":"分类"},{"icon":"subject","selectedIcon":"subject-pressed","text":"识物"},{"icon":"cart","selectedIcon":"cart-pressed","text":"购物车"},{"icon":"user","selectedIcon":"user-pressed","text":"个人"}];function _onClick(e){console.log(e)}function Index(){var e=Object(s.useState)(O),t=Object(i.a)(e,1)[0],c=Object(s.useState)(m),l=Object(i.a)(c,1)[0],x=Object(s.useState)(p),g=Object(i.a)(x,1)[0],v=Object(s.useState)(f),_=Object(i.a)(v,1)[0],k=function getClassObject(){return Object(n.a)({"page":!0},"demo-tabbar",!0)}();return Object(s.useEffect)((function(){Object(a.a)({"title":"TabBar 标签栏"})}),[]),Object(h.jsxs)(r.i,{"className":o()(k),"children":[Object(h.jsx)(u.a,{"title":"TabBar 标签栏"}),Object(h.jsx)(b.a,{"fullScreen":!0,"title":"基础","children":Object(h.jsx)(j.y,{"value":2,"tabsArr":_,"onClick":function onClick(e){return _onClick(e)}})}),Object(h.jsx)(b.a,{"fullScreen":!0,"title":"固定底部","children":Object(h.jsx)(j.y,{"tabsArr":_,"isfixedBt":!0,"onClick":function onClick(e){return _onClick(e)}})}),Object(h.jsx)(b.a,{"children":Object(h.jsx)(d.a,{"list":t})}),Object(h.jsx)(b.a,{"children":Object(h.jsx)(d.a,{"list":l})}),Object(h.jsx)(b.a,{"children":Object(h.jsx)(d.a,{"list":g})})]})}}}]);