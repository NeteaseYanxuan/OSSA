(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c=n(2),i=n(3),s=n(10),o=n(11),l=n(17),a=n(16),r=n(23),j=n(115),b=n(116),u=n.n(b),d=n(117),m=(n(119),n(114)),h=function(e){Object(s.a)(DemoHeader,e);var t=Object(o.a)(DemoHeader);function DemoHeader(){return Object(c.a)(this,DemoHeader),t.apply(this,arguments)}return Object(i.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(a.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=r.a.getEnv()!==r.a.ENV_TYPE.WEB?"hide-split-line":"",n=this.props.icon;return Object(m.jsxs)(j.i,{"className":u()(e[0],t),"children":[r.a.getEnv()===r.a.ENV_TYPE.WEB&&Object(m.jsx)(d.k,{"type":"detail-home","onClick":this.onClick.bind(this)}),r.a.getEnv()!==r.a.ENV_TYPE.WEB&&n&&Object(m.jsx)(d.k,{"type":n,"size":44,"customStyle":{"marginRight":r.a.pxTransform(18)}}),Object(m.jsx)(j.i,{"className":u()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(l.Component)},"119":function(e,t,n){},"120":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(4),i=n(2),s=n(3),o=n(10),l=n(11),a=n(17),r=n(115),j=n(116),b=n.n(j),u=(n(121),n(114)),d=function(e){Object(o.a)(DemoBlock,e);var t=Object(l.a)(DemoBlock);function DemoBlock(){return Object(i.a)(this,DemoBlock),t.apply(this,arguments)}return Object(s.a)(DemoBlock,[{"key":"render","value":function render(){var e,t,n=["block","block__title","block__subTitle"],i=[(e={},Object(c.a)(e,"block--hide-padding",this.props.hidePd),Object(c.a)(e,"block--hide-mb",this.props.hideMb),e),Object(c.a)({},"block__title--hide-padding",this.props.hidePd)],s=this.props,o=s.customStyle,l=s.className;return Object(u.jsxs)(r.i,{"className":b()(n[0],i[0],l),"style":o,"children":[Object(u.jsxs)(r.i,{"className":"block__header","children":[this.props.title&&Object(u.jsx)(r.i,{"className":b()(n[1],i[1]),"children":this.props.title}),this.props.subTitle&&Object(u.jsx)(r.i,{"className":b()(n[2]),"children":this.props.subTitle})]}),Object(u.jsx)(r.i,{"className":b()((t={},Object(c.a)(t,"block__body",!0),Object(c.a)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(a.Component)},"121":function(e,t,n){},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(2),i=n(3),s=n(10),o=n(11),l=n(17),a=n(115),r=n(116),j=n.n(r),b=(n(123),n(114)),u=function(e){Object(s.a)(DemoTable,e);var t=Object(o.a)(DemoTable);function DemoTable(){return Object(c.a)(this,DemoTable),t.apply(this,arguments)}return Object(i.a)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var n=t.head,c=t.data,i=t.title,s={};n&&n.length&&(s.width=100/n.length+"%");var o={};return c&&c.length&&(o.width=100/c.length+"%"),Object(b.jsxs)(a.i,{"className":j()(e[0]),"children":[i&&Object(b.jsx)(a.i,{"className":j()(e[1]),"children":this.props.list.title}),Object(b.jsxs)(a.i,{"className":j()(e[2]),"children":[n&&n.length?Object(b.jsx)(a.i,{"className":j()(e[3]),"children":n.map((function(t){return Object(b.jsx)(a.i,{"style":s,"className":j()(e[4]),"children":t},t)}))}):null,c&&c.length?Object(b.jsx)(a.i,{"children":c.map((function(e,t){return Object(b.jsx)(a.i,{"className":"table__tr","children":e.list.map((function(e){return Object(b.jsx)(a.i,{"className":"table__td","style":o,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(l.Component)},"123":function(e,t,n){},"124":function(e,t,n){"use strict";n.d(t,"a",(function(){return setNavigationBarTitle}));var c=n(14),i=n(9);Object(i.d)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(i.c)(e);if(!t.flag){var n={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(n.errMsg),Promise.reject(n)}var s=e.title,o=e.success,l=e.fail,a=e.complete,r=new c.a({"name":"setNavigationBarTitle","success":o,"fail":l,"complete":a});return s&&"string"==typeof s?(document.title!==s&&(document.title=s),r.success()):r.fail({"errMsg":Object(i.a)({"para":"title","correct":"String","wrong":s})})}Object(i.d)("hideNavigationBarLoading"),Object(i.d)("hideHomeButton")},"169":function(e,t,n){},"206":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Index}));var c=n(15),i=n(4),s=n(17),o=n(124),l=n(115),a=n(116),r=n.n(a),j=n(120),b=n(118),u=n(122),d=n(117),m=(n(169),n(114));var h={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["isShow","是否显示弹窗，必选","boolean","false"]},{"list":["title","弹窗标题，可选","string","-"]},{"list":["content","弹窗内容，可选","string","-"]},{"list":["cancelText","取消按钮文案，可选","string","-"]},{"list":["confirmText","确认按钮文案，可选","string","-"]},{"list":["disableCancelBtn","置灰取消按钮，可选","boolean","false"]},{"list":["disableConfirmBtn","置灰确认按钮，可选","boolean","false"]},{"list":["closeOnClickMask","点击遮罩是否隐藏弹窗，可选","boolean","false"]},{"list":["custom","是否仅保留遮罩，完全自定义弹窗内容，可选","boolean","false"]},{"list":["showCloseIcon","是否显示关闭icon，可选","boolean","true"]},{"list":["closeIconPosition","关闭icon位置，可选","top-left | top-right | bottom-left | bottom-right | top | bottom","top-right"]}]},O={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onClose","弹窗关闭时的回调，可选","-"]},{"list":["onCancel","点击取消按钮时的回调，可选","-"]},{"list":["onConfirm","弹窗确认按钮时的回调，可选","-"]}]};function Index(e){var t=Object(s.useState)(h),n=Object(c.a)(t,1)[0],a=Object(s.useState)(O),f=Object(c.a)(a,1)[0],x=function getClassObject(){return Object(i.a)({"page":!0},"demo-modal",!0)}(),p=Object(s.useState)(!1),C=Object(c.a)(p,2),g=C[0],k=C[1],N=Object(s.useState)(!1),_=Object(c.a)(N,2),v=_[0],T=_[1],w=Object(s.useState)(!1),y=Object(c.a)(w,2),B=y[0],D=y[1],S=Object(s.useState)(!1),E=Object(c.a)(S,2),P=E[0],M=E[1],H=Object(s.useState)(!1),I=Object(c.a)(H,2),V=I[0],W=I[1];return Object(s.useEffect)((function(){Object(o.a)({"title":"Modal 对话框"})}),[]),Object(m.jsxs)(l.i,{"className":r()(x),"children":[Object(m.jsx)(b.a,{"title":"Modal 对话框"}),Object(m.jsx)(j.a,{"title":"基础","children":Object(m.jsx)(l.i,{"className":"block-section","children":Object(m.jsx)(l.i,{"className":"inline-item","children":Object(m.jsx)(d.e,{"onClick":function onClick(){k(!0)},"children":"基础"})})})}),Object(m.jsx)(j.a,{"title":"单个按钮","children":Object(m.jsx)(l.i,{"className":"block-section","children":Object(m.jsx)(l.i,{"className":"inline-item","children":Object(m.jsx)(d.e,{"onClick":function onClick(){T(!0)},"children":"单个按钮"})})})}),Object(m.jsx)(j.a,{"title":"高级用法","subTitle":"内容插槽自定义","children":Object(m.jsx)(l.i,{"className":"block-section","children":Object(m.jsx)(l.i,{"className":"inline-item","children":Object(m.jsx)(d.e,{"onClick":function onClick(){D(!0)},"children":"高级用法1"})})})}),Object(m.jsx)(j.a,{"subTitle":"内容实例自定义","children":Object(m.jsx)(l.i,{"className":"block-section","children":Object(m.jsx)(l.i,{"className":"inline-item","children":Object(m.jsx)(d.e,{"onClick":function onClick(){M(!0)},"children":"高级用法2"})})})}),Object(m.jsx)(j.a,{"subTitle":"按钮置灰","children":Object(m.jsx)(l.i,{"className":"block-section","children":Object(m.jsx)(l.i,{"className":"inline-item","children":Object(m.jsx)(d.e,{"onClick":function onClick(){W(!0)},"children":"高级用法3"})})})}),Object(m.jsx)(j.a,{"children":Object(m.jsx)(u.a,{"list":n})}),Object(m.jsx)(j.a,{"children":Object(m.jsx)(u.a,{"list":f})}),Object(m.jsx)(d.p,{"title":"基础弹窗","cancelText":"取消","confirmText":"确定啊","content":"这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文","isShow":g,"onCancel":function onCancel(){return k(!1)},"onClose":function onClose(){return k(!1)},"onConfirm":function onConfirm(){return k(!1)}}),Object(m.jsx)(d.p,{"title":"单个按钮","cancelText":"取消","content":"这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文","isShow":v,"showCloseIcon":!1,"onCancel":function onCancel(){return T(!1)},"onClose":function onClose(){return T(!1)},"onConfirm":function onConfirm(){return T(!1)}}),Object(m.jsx)(d.p,{"cancelText":"取消","isShow":B,"closeIconPosition":"bottom","onCancel":function onCancel(){return D(!1)},"onClose":function onClose(){return D(!1)},"onConfirm":function onConfirm(){return D(!1)},"children":Object(m.jsxs)(l.i,{"className":"custom-content","children":[Object(m.jsx)(l.i,{"className":"custom-content__title","children":"活动优惠"}),Object(m.jsxs)(l.i,{"className":"custom-content__row","children":[Object(m.jsx)(l.g,{"children":"套装"}),Object(m.jsx)(l.g,{"children":"-￥18.00"})]}),Object(m.jsxs)(l.i,{"className":"custom-content__row","children":[Object(m.jsx)(l.g,{"children":"满额减"}),Object(m.jsx)(l.g,{"children":"-￥18.00"})]}),Object(m.jsxs)(l.i,{"className":"custom-content__row","children":[Object(m.jsx)(l.g,{"children":"全场满额减"}),Object(m.jsx)(l.g,{"children":"-￥18.00"})]})]})}),Object(m.jsx)(d.p,{"cancelText":"取消","isShow":P,"onCancel":function onCancel(){return M(!1)},"onClose":function onClose(){return M(!1)},"onConfirm":function onConfirm(){return M(!1)},"className":"custom-demo","children":Object(m.jsx)(l.i,{"className":"custom-content-1","children":Object(m.jsx)(l.c,{"className":"custom-content-1__img","src":"https://yanxuan.nosdn.127.net/15565188113590869.png?imageView&thumbnail=630x336&quality=95","mode":"aspectFill"})})}),Object(m.jsx)(d.p,{"cancelText":"取消","confirmText":"确定","closeOnClickMask":!0,"isShow":V,"disableConfirmBtn":!0,"onCancel":function onCancel(){return W(!1)},"onConfirm":function onConfirm(){return W(!1)},"onClose":function onClose(){return W(!1)},"children":Object(m.jsx)(l.i,{"className":"custom-content-1","children":Object(m.jsx)(l.c,{"className":"custom-content-1__img","src":"https://yanxuan.nosdn.127.net/15565188113590869.png?imageView&thumbnail=630x336&quality=95","mode":"aspectFill"})})})]})}}}]);