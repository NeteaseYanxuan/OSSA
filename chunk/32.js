(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"118":function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var c=i(2),s=i(3),a=i(10),n=i(11),r=i(17),l=i(16),o=i(23),d=i(115),b=i(116),j=i.n(b),u=i(117),p=(i(119),i(114)),h=function(e){Object(a.a)(DemoHeader,e);var t=Object(n.a)(DemoHeader);function DemoHeader(){return Object(c.a)(this,DemoHeader),t.apply(this,arguments)}return Object(s.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(l.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=o.a.getEnv()!==o.a.ENV_TYPE.WEB?"hide-split-line":"",i=this.props.icon;return Object(p.jsxs)(d.i,{"className":j()(e[0],t),"children":[o.a.getEnv()===o.a.ENV_TYPE.WEB&&Object(p.jsx)(u.k,{"type":"detail-home","onClick":this.onClick.bind(this)}),o.a.getEnv()!==o.a.ENV_TYPE.WEB&&i&&Object(p.jsx)(u.k,{"type":i,"size":44,"customStyle":{"marginRight":o.a.pxTransform(18)}}),Object(p.jsx)(d.i,{"className":j()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(r.Component)},"119":function(e,t,i){},"120":function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var c=i(4),s=i(2),a=i(3),n=i(10),r=i(11),l=i(17),o=i(115),d=i(116),b=i.n(d),j=(i(121),i(114)),u=function(e){Object(n.a)(DemoBlock,e);var t=Object(r.a)(DemoBlock);function DemoBlock(){return Object(s.a)(this,DemoBlock),t.apply(this,arguments)}return Object(a.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,i=["block","block__title","block__subTitle"],s=[(e={},Object(c.a)(e,"block--hide-padding",this.props.hidePd),Object(c.a)(e,"block--hide-mb",this.props.hideMb),e),Object(c.a)({},"block__title--hide-padding",this.props.hidePd)],a=this.props,n=a.customStyle,r=a.className;return Object(j.jsxs)(o.i,{"className":b()(i[0],s[0],r),"style":n,"children":[Object(j.jsxs)(o.i,{"className":"block__header","children":[this.props.title&&Object(j.jsx)(o.i,{"className":b()(i[1],s[1]),"children":this.props.title}),this.props.subTitle&&Object(j.jsx)(o.i,{"className":b()(i[2]),"children":this.props.subTitle})]}),Object(j.jsx)(o.i,{"className":b()((t={},Object(c.a)(t,"block__body",!0),Object(c.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(l.Component)},"121":function(e,t,i){},"124":function(e,t,i){"use strict";i.d(t,"a",(function(){return setNavigationBarTitle}));var c=i(14),s=i(9);Object(s.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(s.c)(e);if(!t.flag){var i={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(i.errMsg),Promise.reject(i)}var a=e.title,n=e.success,r=e.fail,l=e.complete,o=new c.a({"name":"setNavigationBarTitle","success":n,"fail":r,"complete":l});return a&&"string"==typeof a?(document.title!==a&&(document.title=a),o.success()):o.fail({"errMsg":Object(s.a)({"para":"title","correct":"String","wrong":a})})}Object(s.d)("hideNavigationBarLoading"),Object(s.d)("hideHomeButton")},"148":function(e,t,i){},"182":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return Index}));var c=i(4),s=i(17),a=i(124),n=i(115),r=i(116),l=i.n(r),o=i(120),d=i(118),b=(i(148),i(114));var j=[{"size":54,"id":"large-price","desc":"使用场景: 超大强调价格等"},{"size":40,"id":"title-protruding","desc":"行高60px, 使用场景: 突出标题等"},{"size":36,"id":"navbar-title","desc":"行高52px, 使用场景: Navbar标题等"},{"size":32,"id":"module-title","desc":"行高48px, 使用场景: 模块Title名等"},{"size":30,"id":"navbar-right-title","desc":"行高44px, 使用场景: Navbar右上角文字按钮等"},{"size":28,"id":"desc","desc":"行高40px, 使用场景: 常规描述文字等 "},{"size":28,"id":"multi-lines","desc":"行高44px, 使用场景: 多文本阅读文字等 "},{"size":24,"id":"sub-desc","desc":"行高36px, 使用场景: 次要描述文字等"},{"size":22,"id":"tag","desc":"行高32px, 使用场景: 标签文字等"},{"size":20,"id":"tag-1","desc":"行高30px, 使用场景: 标签文字等"},{"size":18,"id":"badge","desc":"行高24px, 使用场景: 数量角标文字等"}];function Index(e){var t=function getClassObject(){return Object(c.a)({"page":!0},"demo-font",!0)}();return Object(s.useEffect)((function(){Object(a.a)({"title":"Font 文字"})}),[]),Object(b.jsxs)(n.i,{"className":l()(t),"children":[Object(b.jsx)(d.a,{"title":"Font 文字"}),Object(b.jsx)(o.a,{"title":"规范","children":Object(b.jsxs)(n.i,{"className":"block-section","children":[Object(b.jsx)(n.i,{"className":"paragraph","children":"1.为确保移动终端的通用性，iOS平台选用 PingFang SC 作为中文字体, San Francisco作为数字和英文字体; Android平台选用Android默认字体。"}),Object(b.jsxs)(n.i,{"className":"paragraph","children":["2.标点符号使用半角符号 ( 切换成英文输入符号+一个空格 ) 。"," "]}),Object(b.jsx)(n.i,{"className":"paragraph","children":"3.文字行高用文字字号乘以1.25或1.5或1.75倍来定义, 默认1.5倍作为标准行高, 具体行高可视界面效果灵活处理, 最好是取4的倍数。"}),Object(b.jsx)(n.i,{"className":"paragraph","children":"4.文字字重有Light、Regular、Semibold三种, 以Light为主, 具体字重可视界面效果灵活处理。"})]})}),Object(b.jsx)(o.a,{"title":"示例","children":j.map((function(e,t){return Object(b.jsx)(n.i,{"className":"block-section","children":Object(b.jsxs)(n.i,{"className":l()("layout","layout--flex","layout--flex--align-center"),"children":[Object(b.jsx)(n.i,{"className":l()("col","col--2","col--font-size"),"children":Object(b.jsxs)(n.i,{"className":"font-size","children":[e.size,"px"]})}),Object(b.jsx)(n.i,{"className":l()("col","col--10"),"children":Object(b.jsxs)(n.i,{"className":"font-scene","children":[Object(b.jsx)(n.i,{"className":l()("font-demo","font--".concat(e.id)),"children":"严选好物用心生活"}),Object(b.jsx)(n.i,{"className":"font-desc","children":e.desc})]})})]})},e.id)}))})]})}}}]);