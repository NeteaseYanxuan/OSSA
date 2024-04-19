---
sidebar_position: 22
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/picker/demo/index'
---

# Picker 选择器

## 介绍
选择器

## 用法
### 普通
```jsx
const range = ["中国", "美国", "日本", "泰国", "印度"];
const [vNormal, setVNormal] = useState(0);

<OsPicker
  range={range}
  value={vNormal}
  onCancel={() => console.log("cancel")}
  onConfirm={() => setVNormal(value as number)}
>
  <OsList title='国籍' desc={range[vNormal]}></OsList>
</OsPicker>
```

### 多列
```jsx
const multiRange = [
  ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
  ["上午", "下午", "晚上"],
];
const [vMulti, setVMulti] = useState([0, 0]);

<OsPicker
  title='时间'
  mode='multiSelector'
  range={multiRange}
  value={vMulti}
  onCancel={() => {
    console.log("cancel");
  }}
  onConfirm={(value) => setVMulti(value as number[])}
  onChange={(value) => {
    console.log(value);
  }}
>
  <OsList title='时间' desc={multiRange.map((rang, index) => rang[vMulti[index]]).join(',')}></OsList>
</OsPicker>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|title|标题，可选|string|-|
|isShow|是否显示，传入布尔值可手动控制，可选|boolean|-|
|mode|类型，mode 为 selector 时为一维数组，mode 为 multiSelector 时为二维数组，可选|'selector'\|'multiSelector'|'selector'|
|range|取值范围，必选|(number\|string)[]|-|
|value|取值索引，必选|number|0|


### 方法
|函数名|说明|参数|
|------|------|------|
|onConfirm|点击确认按钮时触发，可选|(value) => void|
|onCancel|点击取消按钮时触发，可选|() => void|
|onChange|值改变时触发，可选|(value) => void|

