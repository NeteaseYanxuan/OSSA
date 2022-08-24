(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n(2),a=n(3),c=n(10),s=n(11),l=n(17),r=n(16),o=n(23),u=n(115),d=n(116),b=n.n(d),j=n(117),h=(n(119),n(114)),p=function(e){Object(c.a)(DemoHeader,e);var t=Object(s.a)(DemoHeader);function DemoHeader(){return Object(i.a)(this,DemoHeader),t.apply(this,arguments)}return Object(a.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(r.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=o.a.getEnv()!==o.a.ENV_TYPE.WEB?"hide-split-line":"",n=this.props.icon;return Object(h.jsxs)(u.i,{"className":b()(e[0],t),"children":[o.a.getEnv()===o.a.ENV_TYPE.WEB&&Object(h.jsx)(j.k,{"type":"detail-home","onClick":this.onClick.bind(this)}),o.a.getEnv()!==o.a.ENV_TYPE.WEB&&n&&Object(h.jsx)(j.k,{"type":n,"size":44,"customStyle":{"marginRight":o.a.pxTransform(18)}}),Object(h.jsx)(u.i,{"className":b()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(l.Component)},"119":function(e,t,n){},"120":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var i=n(4),a=n(2),c=n(3),s=n(10),l=n(11),r=n(17),o=n(115),u=n(116),d=n.n(u),b=(n(121),n(114)),j=function(e){Object(s.a)(DemoBlock,e);var t=Object(l.a)(DemoBlock);function DemoBlock(){return Object(a.a)(this,DemoBlock),t.apply(this,arguments)}return Object(c.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,n=["block","block__title","block__subTitle"],a=[(e={},Object(i.a)(e,"block--hide-padding",this.props.hidePd),Object(i.a)(e,"block--hide-mb",this.props.hideMb),e),Object(i.a)({},"block__title--hide-padding",this.props.hidePd)],c=this.props,s=c.customStyle,l=c.className;return Object(b.jsxs)(o.i,{"className":d()(n[0],a[0],l),"style":s,"children":[Object(b.jsxs)(o.i,{"className":"block__header","children":[this.props.title&&Object(b.jsx)(o.i,{"className":d()(n[1],a[1]),"children":this.props.title}),this.props.subTitle&&Object(b.jsx)(o.i,{"className":d()(n[2]),"children":this.props.subTitle})]}),Object(b.jsx)(o.i,{"className":d()((t={},Object(i.a)(t,"block__body",!0),Object(i.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(r.Component)},"121":function(e,t,n){},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(2),a=n(3),c=n(10),s=n(11),l=n(17),r=n(115),o=n(116),u=n.n(o),d=(n(123),n(114)),b=function(e){Object(c.a)(DemoTable,e);var t=Object(s.a)(DemoTable);function DemoTable(){return Object(i.a)(this,DemoTable),t.apply(this,arguments)}return Object(a.a)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var n=t.head,i=t.data,a=t.title,c={};n&&n.length&&(c.width=100/n.length+"%");var s={};return i&&i.length&&(s.width=100/i.length+"%"),Object(d.jsxs)(r.i,{"className":u()(e[0]),"children":[a&&Object(d.jsx)(r.i,{"className":u()(e[1]),"children":this.props.list.title}),Object(d.jsxs)(r.i,{"className":u()(e[2]),"children":[n&&n.length?Object(d.jsx)(r.i,{"className":u()(e[3]),"children":n.map((function(t){return Object(d.jsx)(r.i,{"style":c,"className":u()(e[4]),"children":t},t)}))}):null,i&&i.length?Object(d.jsx)(r.i,{"children":i.map((function(e,t){return Object(d.jsx)(r.i,{"className":"table__tr","children":e.list.map((function(e){return Object(d.jsx)(r.i,{"className":"table__td","style":s,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(l.Component)},"123":function(e,t,n){},"124":function(e,t,n){"use strict";n.d(t,"a",(function(){return setNavigationBarTitle}));var i=n(14),a=n(9);Object(a.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(a.c)(e);if(!t.flag){var n={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(n.errMsg),Promise.reject(n)}var c=e.title,s=e.success,l=e.fail,r=e.complete,o=new i.a({"name":"setNavigationBarTitle","success":s,"fail":l,"complete":r});return c&&"string"==typeof c?(document.title!==c&&(document.title=c),o.success()):o.fail({"errMsg":Object(a.a)({"para":"title","correct":"String","wrong":c})})}Object(a.d)("hideNavigationBarLoading"),Object(a.d)("hideHomeButton")},"172":function(e,t,n){},"209":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Index}));var i=n(15),a=n(4),c=n(17),s=n(124),l=n(23),r=n(115),o=n(116),u=n.n(o),d=n(120),b=n(118),j=n(122),h=n(117),p=(n(172),n(114));var m={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["max","最大数量，可选","number","infinity"]},{"list":["multiple","开始多张传输，可选","boolean","true"]},{"list":["customStyle","自定义样式，可选","object","-"]},{"list":["className","自定义类名，可选","string","-"]}]},O={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onChange","上传成功回调(此时可自行将图片上传至服务器)","(files: Array, operationType: string, index: number) => void(注：1.index在operationType为remove时有效；2.严选安卓APP此处生成的图片链接为base64）"]},{"list":["onFail","上传失败触发","(data: object) => void"]}]};function Index(e){var t=Object(c.useState)(m),n=Object(i.a)(t,1)[0],o=Object(c.useState)(O),f=Object(i.a)(o,1)[0],g=function getClassObject(){return Object(a.a)({"page":!0},"demo-upload",!0)}();return Object(c.useEffect)((function(){Object(s.a)({"title":"Upload 图片上传"})}),[]),Object(p.jsxs)(r.i,{"className":u()(g),"children":[Object(p.jsx)(b.a,{"title":"Upload 图片上传"}),Object(p.jsx)(d.a,{"title":"普通","fullScreen":!0,"children":Object(p.jsx)(r.i,{"style":{"paddingLeft":l.a.pxTransform(20)},"children":Object(p.jsx)(h.H,{"onChange":function onChange(e,t,n){return function _onChange(e,t,n){console.log("图片文件:"),console.log(e),console.log("操作类型:"+t),console.log("图片索引:"+n)}(e,t,n)},"onFail":function onFail(e){return function _onFail(e){console.log("上传失败，失败信息："+JSON.stringify(e))}(e)}})})}),Object(p.jsx)(d.a,{"children":Object(p.jsx)(j.a,{"list":n})}),Object(p.jsx)(d.a,{"children":Object(p.jsx)(j.a,{"list":f})})]})}}}]);