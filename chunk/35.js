(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"118":function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var n=i(2),a=i(3),r=i(10),c=i(11),o=i(17),d=i(16),s=i(23),l=i(115),u=i(116),j=i.n(u),b=i(117),h=(i(119),i(114)),p=function(e){Object(r.a)(DemoHeader,e);var t=Object(c.a)(DemoHeader);function DemoHeader(){return Object(n.a)(this,DemoHeader),t.apply(this,arguments)}return Object(a.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(d.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=s.a.getEnv()!==s.a.ENV_TYPE.WEB?"hide-split-line":"",i=this.props.icon;return Object(h.jsxs)(l.i,{"className":j()(e[0],t),"children":[s.a.getEnv()===s.a.ENV_TYPE.WEB&&Object(h.jsx)(b.k,{"type":"detail-home","onClick":this.onClick.bind(this)}),s.a.getEnv()!==s.a.ENV_TYPE.WEB&&i&&Object(h.jsx)(b.k,{"type":i,"size":44,"customStyle":{"marginRight":s.a.pxTransform(18)}}),Object(h.jsx)(l.i,{"className":j()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(o.Component)},"119":function(e,t,i){},"185":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return b}));var n=i(2),a=i(3),r=i(10),c=i(11),o=i(17),d=i(16),s=i(115),l=i(117),u=i(118),j=i(114),b=function(e){Object(r.a)(Index,e);var t=Object(c.a)(Index);function Index(e){var i;return Object(n.a)(this,Index),(i=t.call(this,e)).state={"list":[{"title":"Badge 徽标","id":"badge"},{"title":"Tag 标签","id":"tag"},{"title":"List 列表","id":"list"},{"title":"Carousel 走马灯","id":"carousel"},{"title":"ImagePreview 图片预览","id":"imagePreview"},{"title":"NoticeBar 通告栏","id":"noticeBar"}]},i}return Object(a.a)(Index,[{"key":"onClick","value":function onClick(e){var t=e.currentTarget.dataset.id;Object(d.e)({"url":"/components/".concat(t,"/demo/index")})}},{"key":"render","value":function render(){var e=this,t=this.state.list;return Object(j.jsxs)(s.i,{"className":"index page","children":[Object(j.jsx)(u.a,{"title":"数据展示","icon":"data-display"}),t.map((function(t){return Object(j.jsx)(s.i,{"data-id":t.id,"onClick":e.onClick,"children":Object(j.jsx)(l.n,{"rightIcon":"arrows","children":t.title})},t.id)}))]})}}]),Index}(o.Component)}}]);