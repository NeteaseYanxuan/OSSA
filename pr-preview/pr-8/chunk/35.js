(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"117":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(2),a=n(3),r=n(10),c=n(11),o=n(17),s=n(16),d=n(23),l=n(115),u=n(116),j=n.n(u),h=n(119),b=(n(118),n(114)),m=function(e){Object(r.a)(DemoHeader,e);var t=Object(c.a)(DemoHeader);function DemoHeader(){return Object(i.a)(this,DemoHeader),t.apply(this,arguments)}return Object(a.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(s.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=d.a.getEnv()!==d.a.ENV_TYPE.WEB?"hide-split-line":"",n=this.props.icon;return Object(b.jsxs)(l.i,{"className":j()(e[0],t),"children":[d.a.getEnv()===d.a.ENV_TYPE.WEB&&Object(b.jsx)(h.j,{"type":"detail-home","onClick":this.onClick.bind(this)}),d.a.getEnv()!==d.a.ENV_TYPE.WEB&&n&&Object(b.jsx)(h.j,{"type":n,"size":44,"customStyle":{"marginRight":d.a.pxTransform(18)}}),Object(b.jsx)(l.i,{"className":j()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(o.Component)},"118":function(e,t,n){},"189":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var i=n(2),a=n(3),r=n(10),c=n(11),o=n(17),s=n(16),d=n(115),l=n(119),u=n(117),j=n(114),h=function(e){Object(r.a)(Index,e);var t=Object(c.a)(Index);function Index(e){var n;return Object(i.a)(this,Index),(n=t.call(this,e)).state={"list":[{"title":"Css 样式动画","id":"animate"}]},n}return Object(a.a)(Index,[{"key":"onClick","value":function onClick(e){var t=e.currentTarget.dataset.id;Object(s.e)({"url":"/components/".concat(t,"/demo/index")})}},{"key":"render","value":function render(){var e=this,t=this.state.list;return Object(j.jsxs)(d.i,{"className":"index page","children":[Object(j.jsx)(u.a,{"title":"动画","icon":"animate"}),t.map((function(t){return Object(j.jsx)(d.i,{"data-id":t.id,"onClick":e.onClick,"children":Object(j.jsx)(l.m,{"rightIcon":"arrows","children":t.title})},t.id)}))]})}}]),Index}(o.Component)}}]);