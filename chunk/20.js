(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"117":function(e,t,c){"use strict";c.d(t,"a",(function(){return h}));var s=c(2),i=c(3),a=c(10),n=c(11),l=c(17),o=c(16),r=c(23),j=c(115),b=c(116),u=c.n(b),d=c(119),m=(c(118),c(114)),h=function(e){Object(a.a)(DemoHeader,e);var t=Object(n.a)(DemoHeader);function DemoHeader(){return Object(s.a)(this,DemoHeader),t.apply(this,arguments)}return Object(i.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(o.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=r.a.getEnv()!==r.a.ENV_TYPE.WEB?"hide-split-line":"",c=this.props.icon;return Object(m.jsxs)(j.i,{"className":u()(e[0],t),"children":[r.a.getEnv()===r.a.ENV_TYPE.WEB&&Object(m.jsx)(d.j,{"type":"detail-home","onClick":this.onClick.bind(this)}),r.a.getEnv()!==r.a.ENV_TYPE.WEB&&c&&Object(m.jsx)(d.j,{"type":c,"size":44,"customStyle":{"marginRight":r.a.pxTransform(18)}}),Object(m.jsx)(j.i,{"className":u()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(l.Component)},"118":function(e,t,c){},"120":function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var s=c(4),i=c(2),a=c(3),n=c(10),l=c(11),o=c(17),r=c(115),j=c(116),b=c.n(j),u=(c(121),c(114)),d=function(e){Object(n.a)(DemoBlock,e);var t=Object(l.a)(DemoBlock);function DemoBlock(){return Object(i.a)(this,DemoBlock),t.apply(this,arguments)}return Object(a.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,c=["block","block__title","block__subTitle"],i=[(e={},Object(s.a)(e,"block--hide-padding",this.props.hidePd),Object(s.a)(e,"block--hide-mb",this.props.hideMb),e),Object(s.a)({},"block__title--hide-padding",this.props.hidePd)],a=this.props,n=a.customStyle,l=a.className;return Object(u.jsxs)(r.i,{"className":b()(c[0],i[0],l),"style":n,"children":[Object(u.jsxs)(r.i,{"className":"block__header","children":[this.props.title&&Object(u.jsx)(r.i,{"className":b()(c[1],i[1]),"children":this.props.title}),this.props.subTitle&&Object(u.jsx)(r.i,{"className":b()(c[2]),"children":this.props.subTitle})]}),Object(u.jsx)(r.i,{"className":b()((t={},Object(s.a)(t,"block__body",!0),Object(s.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(o.Component)},"121":function(e,t,c){},"122":function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var s=c(2),i=c(3),a=c(10),n=c(11),l=c(17),o=c(115),r=c(116),j=c.n(r),b=(c(123),c(114)),u=function(e){Object(a.a)(DemoTable,e);var t=Object(n.a)(DemoTable);function DemoTable(){return Object(s.a)(this,DemoTable),t.apply(this,arguments)}return Object(i.a)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var c=t.head,s=t.data,i=t.title,a={};c&&c.length&&(a.width=100/c.length+"%");var n={};return s&&s.length&&(n.width=100/s.length+"%"),Object(b.jsxs)(o.i,{"className":j()(e[0]),"children":[i&&Object(b.jsx)(o.i,{"className":j()(e[1]),"children":this.props.list.title}),Object(b.jsxs)(o.i,{"className":j()(e[2]),"children":[c&&c.length?Object(b.jsx)(o.i,{"className":j()(e[3]),"children":c.map((function(t){return Object(b.jsx)(o.i,{"style":a,"className":j()(e[4]),"children":t},t)}))}):null,s&&s.length?Object(b.jsx)(o.i,{"children":s.map((function(e,t){return Object(b.jsx)(o.i,{"className":"table__tr","children":e.list.map((function(e){return Object(b.jsx)(o.i,{"className":"table__td","style":n,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(l.Component)},"123":function(e,t,c){},"124":function(e,t,c){"use strict";c.d(t,"a",(function(){return setNavigationBarTitle}));var s=c(14),i=c(9);Object(i.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(i.c)(e);if(!t.flag){var c={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(c.errMsg),Promise.reject(c)}var a=e.title,n=e.success,l=e.fail,o=e.complete,r=new s.a({"name":"setNavigationBarTitle","success":n,"fail":l,"complete":o});return a&&"string"==typeof a?(document.title!==a&&(document.title=a),r.success()):r.fail({"errMsg":Object(i.a)({"para":"title","correct":"String","wrong":a})})}Object(i.d)("hideNavigationBarLoading"),Object(i.d)("hideHomeButton")},"157":function(e,t,c){},"195":function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return Index}));var s=c(15),i=c(4),a=c(17),n=c(124),l=c(115),o=c(116),r=c.n(o),j=c(120),b=c(117),u=c(122),d=c(119),m=(c(157),c(114));var h={"title":"API-OsRadioOption","head":["参数","说明","类型","默认值"],"data":[{"list":["type","布局类型","column | row","column"]}]},O={"title":"API-OsRadioOption","head":["参数","说明","类型","默认值"],"data":[{"list":["value","选中值，必选","number | string","-"]},{"list":["optionValue","选项值，必选","number | string","-"]},{"list":["isDisabled","失效状态，可选","boolean","false"]},{"list":["isCustom","是否自定义，可选","boolean","false"]},{"list":["isReadonly","不可执行，可选","boolean","false"]}]},p={"title":"Event-OsRadioOption","head":["函数名","说明","参数"],"data":[{"list":["onClick","点击时触发，必选","value"]}]};function Index(e){var t=Object(a.useState)(O),c=Object(s.a)(t,1)[0],o=Object(a.useState)(p),x=Object(s.a)(o,1)[0],_=Object(a.useState)(0),f=Object(s.a)(_,2),N=f[0],g=f[1],v=Object(a.useState)(0),k=Object(s.a)(v,2),y=k[0],C=k[1],V=Object(a.useState)(0),D=Object(s.a)(V,2),T=D[0],w=D[1],B=Object(a.useState)(0),S=Object(s.a)(B,2),E=S[0],R=S[1],P=Object(a.useState)(0),H=Object(s.a)(P,2),q=H[0],A=H[1],I=Object(a.useState)(0),M=Object(s.a)(I,2),W=M[0],Y=M[1],J=Object(a.useState)(0),L=Object(s.a)(J,2),z=L[0],F=L[1];Object(a.useEffect)((function(){Object(n.a)({"title":"Radio 单选框"})}),[]);var G=function getClassObject(){return Object(i.a)({"page":!0},"demo",!0)}();return Object(m.jsxs)(l.i,{"className":r()(G),"children":[Object(m.jsx)(b.a,{"title":"Radio 单选框"}),Object(m.jsx)(j.a,{"title":"基础","subTitle":"普通","fullScreen":!0,"children":Object(m.jsxs)(d.s,{"children":[Object(m.jsx)(d.t,{"value":N,"optionValue":0,"onClick":g,"children":"选项A"}),Object(m.jsx)(d.t,{"value":N,"optionValue":1,"onClick":g,"children":"选项B"})]})}),Object(m.jsx)(j.a,{"subTitle":"选项内容自定义","fullScreen":!0,"children":Object(m.jsxs)(d.s,{"children":[Object(m.jsx)(d.t,{"value":y,"optionValue":0,"onClick":C,"isCustom":!0,"children":Object(m.jsxs)(l.i,{"className":"custom-option","children":[Object(m.jsx)(l.c,{"className":"custom-option__img","src":"https://yanxuan-item.nosdn.127.net/8aafd2aa11a023d69ec1dfbc062b28c7.png?quality=95&thumbnail=245x245&imageView"}),Object(m.jsxs)(l.i,{"className":"custom-option__content","children":[Object(m.jsx)(l.i,{"className":"custom-option__title","children":"西装"}),Object(m.jsx)(l.i,{"className":"custom-option__sub-title","children":"帅气的办公室吸睛装扮"}),Object(m.jsx)(l.i,{"className":"custom-option__price","children":"¥299"})]})]})}),Object(m.jsx)(d.t,{"value":y,"optionValue":1,"onClick":C,"isCustom":!0,"children":Object(m.jsxs)(l.i,{"className":"custom-option","children":[Object(m.jsx)(l.c,{"className":"custom-option__img","src":"https://yanxuan.nosdn.127.net/b3dec0eb768d27301afab1b4a43f30cb.png?quality=95&thumbnail=172x172&imageView"}),Object(m.jsxs)(l.i,{"className":"custom-option__content","children":[Object(m.jsx)(l.i,{"className":"custom-option__title","children":"网易智造四季全屋循环扇"}),Object(m.jsx)(l.i,{"className":"custom-option__sub-title","children":"源自日本，全屋空气对流循环"}),Object(m.jsx)(l.i,{"className":"custom-option__price","children":"¥248.1"})]})]})})]})}),Object(m.jsx)(j.a,{"title":"禁用","subTitle":"普通","fullScreen":!0,"children":Object(m.jsxs)(d.s,{"children":[Object(m.jsx)(d.t,{"value":T,"optionValue":0,"onClick":w,"isDisabled":!0,"children":"选项A"}),Object(m.jsx)(d.t,{"value":T,"optionValue":1,"onClick":w,"isDisabled":!0,"children":"选项B"})]})}),Object(m.jsx)(j.a,{"subTitle":"选项内容自定义","fullScreen":!0,"children":Object(m.jsxs)(d.s,{"children":[Object(m.jsx)(d.t,{"value":E,"optionValue":0,"onClick":R,"isDisabled":!0,"isCustom":!0,"children":Object(m.jsxs)(l.i,{"className":"custom-option","children":[Object(m.jsx)(l.c,{"className":"custom-option__img","src":"https://yanxuan-item.nosdn.127.net/8aafd2aa11a023d69ec1dfbc062b28c7.png?quality=95&thumbnail=245x245&imageView"}),Object(m.jsxs)(l.i,{"className":"custom-option__content","children":[Object(m.jsx)(l.i,{"className":"custom-option__title","children":"西装"}),Object(m.jsx)(l.i,{"className":"custom-option__sub-title","children":"帅气的办公室吸睛装扮"}),Object(m.jsx)(l.i,{"className":"custom-option__price","children":"¥299"})]})]})}),Object(m.jsx)(d.t,{"value":E,"optionValue":1,"onClick":R,"isDisabled":!0,"isCustom":!0,"children":Object(m.jsxs)(l.i,{"className":"custom-option","children":[Object(m.jsx)(l.c,{"className":"custom-option__img","src":"https://yanxuan.nosdn.127.net/b3dec0eb768d27301afab1b4a43f30cb.png?quality=95&thumbnail=172x172&imageView"}),Object(m.jsxs)(l.i,{"className":"custom-option__content","children":[Object(m.jsx)(l.i,{"className":"custom-option__title","children":"网易智造四季全屋循环扇"}),Object(m.jsx)(l.i,{"className":"custom-option__sub-title","children":"源自日本，全屋空气对流循环"}),Object(m.jsx)(l.i,{"className":"custom-option__price","children":"¥248.1"})]})]})})]})}),Object(m.jsx)(j.a,{"title":"不可执行","subTitle":"普通","fullScreen":!0,"children":Object(m.jsxs)(d.s,{"children":[Object(m.jsx)(d.t,{"value":q,"optionValue":0,"onClick":A,"isReadonly":!0,"children":"选项A"}),Object(m.jsx)(d.t,{"value":q,"optionValue":1,"onClick":A,"isReadonly":!0,"children":"选项B"})]})}),Object(m.jsx)(j.a,{"subTitle":"选项内容自定义","fullScreen":!0,"children":Object(m.jsxs)(d.s,{"children":[Object(m.jsx)(d.t,{"value":W,"optionValue":0,"onClick":Y,"isReadonly":!0,"isCustom":!0,"children":Object(m.jsxs)(l.i,{"className":"custom-option","children":[Object(m.jsx)(l.c,{"className":"custom-option__img","src":"https://yanxuan-item.nosdn.127.net/8aafd2aa11a023d69ec1dfbc062b28c7.png?quality=95&thumbnail=245x245&imageView"}),Object(m.jsxs)(l.i,{"className":"custom-option__content","children":[Object(m.jsx)(l.i,{"className":"custom-option__title","children":"西装"}),Object(m.jsx)(l.i,{"className":"custom-option__sub-title","children":"帅气的办公室吸睛装扮"}),Object(m.jsx)(l.i,{"className":"custom-option__price","children":"¥299"})]})]})}),Object(m.jsx)(d.t,{"value":W,"optionValue":1,"onClick":Y,"isReadonly":!0,"isCustom":!0,"children":Object(m.jsxs)(l.i,{"className":"custom-option","children":[Object(m.jsx)(l.c,{"className":"custom-option__img","src":"https://yanxuan.nosdn.127.net/b3dec0eb768d27301afab1b4a43f30cb.png?quality=95&thumbnail=172x172&imageView"}),Object(m.jsxs)(l.i,{"className":"custom-option__content","children":[Object(m.jsx)(l.i,{"className":"custom-option__title","children":"网易智造四季全屋循环扇"}),Object(m.jsx)(l.i,{"className":"custom-option__sub-title","children":"源自日本，全屋空气对流循环"}),Object(m.jsx)(l.i,{"className":"custom-option__price","children":"¥248.1"})]})]})})]})}),Object(m.jsx)(j.a,{"title":"横向布局","fullScreen":!0,"children":Object(m.jsxs)(d.s,{"type":"row","children":[Object(m.jsx)(d.t,{"value":z,"optionValue":0,"onClick":F,"type":"row","children":"选项A"}),Object(m.jsx)(d.t,{"value":z,"optionValue":1,"onClick":F,"type":"row","children":"选项B"})]})}),Object(m.jsx)(j.a,{"children":Object(m.jsx)(u.a,{"list":h})}),Object(m.jsx)(j.a,{"children":Object(m.jsx)(u.a,{"list":c})}),Object(m.jsx)(j.a,{"children":Object(m.jsx)(u.a,{"list":x})})]})}}}]);