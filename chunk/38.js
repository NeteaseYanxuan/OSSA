(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n(2),a=n(3),r=n(10),c=n(11),o=n(17),d=n(16),s=n(23),l=n(115),u=n(116),j=n.n(u),b=n(117),h=(n(119),n(114)),p=function(e){Object(r.a)(DemoHeader,e);var t=Object(c.a)(DemoHeader);function DemoHeader(){return Object(i.a)(this,DemoHeader),t.apply(this,arguments)}return Object(a.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(d.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=s.a.getEnv()!==s.a.ENV_TYPE.WEB?"hide-split-line":"",n=this.props.icon;return Object(h.jsxs)(l.i,{"className":j()(e[0],t),"children":[s.a.getEnv()===s.a.ENV_TYPE.WEB&&Object(h.jsx)(b.k,{"type":"detail-home","onClick":this.onClick.bind(this)}),s.a.getEnv()!==s.a.ENV_TYPE.WEB&&n&&Object(h.jsx)(b.k,{"type":n,"size":44,"customStyle":{"marginRight":s.a.pxTransform(18)}}),Object(h.jsx)(l.i,{"className":j()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(o.Component)},"119":function(e,t,n){},"181":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var i=n(2),a=n(3),r=n(10),c=n(11),o=n(17),d=n(16),s=n(115),l=n(117),u=n(118),j=n(114),b=function(e){Object(r.a)(Index,e);var t=Object(c.a)(Index);function Index(e){var n;return Object(i.a)(this,Index),(n=t.call(this,e)).state={"list":[{"title":"Color 规范","id":"color"},{"title":"Font 文字","id":"font"},{"title":"Layout 布局","id":"layout"},{"title":"Icon 图标","id":"icon"},{"title":"Button 按钮","id":"button"}]},n}return Object(a.a)(Index,[{"key":"onClick","value":function onClick(e){var t=e.currentTarget.dataset.id;"font"===t?Object(d.e)({"url":"/pages/general/".concat(t,"/index")}):Object(d.e)({"url":"/components/".concat(t,"/demo/index")})}},{"key":"render","value":function render(){var e=this,t=this.state.list;return Object(j.jsxs)(s.i,{"className":"index page","children":[Object(j.jsx)(u.a,{"title":"基础组件","icon":"general"}),t.map((function(t){return Object(j.jsx)(s.i,{"data-id":t.id,"onClick":e.onClick,"children":Object(j.jsx)(l.n,{"rightIcon":"arrows","children":t.title})},t.id)}))]})}}]),Index}(o.Component)}}]);