(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"117":function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var n=i(2),a=i(3),r=i(10),c=i(11),d=i(17),o=i(16),s=i(23),l=i(115),u=i(116),p=i.n(u),h=i(119),j=(i(118),i(114)),b=function(e){Object(r.a)(DemoHeader,e);var t=Object(c.a)(DemoHeader);function DemoHeader(){return Object(n.a)(this,DemoHeader),t.apply(this,arguments)}return Object(a.a)(DemoHeader,[{"key":"onClick","value":function onClick(){Object(o.e)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=s.a.getEnv()!==s.a.ENV_TYPE.WEB?"hide-split-line":"",i=this.props.icon;return Object(j.jsxs)(l.i,{"className":p()(e[0],t),"children":[s.a.getEnv()===s.a.ENV_TYPE.WEB&&Object(j.jsx)(h.j,{"type":"detail-home","onClick":this.onClick.bind(this)}),s.a.getEnv()!==s.a.ENV_TYPE.WEB&&i&&Object(j.jsx)(h.j,{"type":i,"size":44,"customStyle":{"marginRight":s.a.pxTransform(18)}}),Object(j.jsx)(l.i,{"className":p()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(d.Component)},"118":function(e,t,i){},"183":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return h}));var n=i(2),a=i(3),r=i(10),c=i(11),d=i(17),o=i(16),s=i(115),l=i(119),u=i(117),p=i(114),h=function(e){Object(r.a)(Index,e);var t=Object(c.a)(Index);function Index(e){var i;return Object(n.a)(this,Index),(i=t.call(this,e)).state={"list":[{"title":"Radio 单选框","id":"radio"},{"title":"Checkbox 复选框","id":"checkbox"},{"title":"Switch 开关","id":"switch"},{"title":"Rate 评分","id":"rate"},{"title":"Input 输入框","id":"input"},{"title":"Stepper 步进器","id":"stepper"},{"title":"Search 搜索","id":"search"},{"title":"DatePicker 时间选择器","id":"datePicker"},{"title":"Upload 图片上传","id":"upload"},{"title":"Picker 选择器","id":"picker"}]},i}return Object(a.a)(Index,[{"key":"onClick","value":function onClick(e){var t=e.currentTarget.dataset.id;Object(o.e)({"url":"/components/".concat(t,"/demo/index")})}},{"key":"render","value":function render(){var e=this,t=this.state.list;return Object(p.jsxs)(s.i,{"className":"index page","children":[Object(p.jsx)(u.a,{"title":"数据录入","icon":"data-entry"}),t.map((function(t){return Object(p.jsx)(s.i,{"data-id":t.id,"onClick":e.onClick,"children":Object(p.jsx)(l.m,{"rightIcon":"arrows","children":t.title})},t.id)}))]})}}]),Index}(d.Component)}}]);