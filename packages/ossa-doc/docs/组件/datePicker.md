---
sidebar_position: 8
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/datePicker/demo/index'
---

# DatePicker 时间选择器

## 介绍
// TODO

## 用法
### 选择时间
```jsx
<OsDatePicker
  type='time'
  value={time}
  start='00:00'
  end='23:59'
  onConfirm={onConfirm}
>
  <OsList title='选择时间' desc={time}></OsList>
</OsDatePicker>
<OsList title='选择时间' desc={time}></OsList>
```
### 选择日期
```jsx
<OsDatePicker
  type='date'
  value={date}
  start='1988-8-29'
  end='2030-8-29'
  onConfirm={onDateConfirm}
>
  <OsList title='选择日期' desc={date}></OsList>
</OsDatePicker>
<OsList title='选择日期' desc={date}></OsList>
```
### 选择年月
```jsx
<OsDatePicker
  type='date'
  fields='month'
  value={dateMonth}
  start='1988-8'
  end='2030-8'
  onConfirm={onDateMonthConfirm}
>
  <OsList title='选择年月' desc={dateMonth}></OsList>
</OsDatePicker>
<OsList title='选择年月' desc={dateMonth}></OsList>
```
### 选择日期和时间
```jsx
<OsDatePicker
  type='complete'
  value={dateComplete}
  start='1988-8-1'
  end='2030-8-1'
  onConfirm={onDateCompleteConfirm}
>
  <OsList title='选择日期和时间' desc={dateComplete}></OsList>
</OsDatePicker>
<OsList title='选择日期和时间' desc={dateComplete}></OsList>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|time \| date \| complete，必选|string|-|
|value|选中的时间，格式由type决定，必选|string|-|
|fields|有效值 year,month,day
表示选择器的粒度
type=date时有效，可选|string|-|
|start|有效日期范围的开始
由type决定，可选|string|-|
|end|有效日期范围的结束
由type决定，可选|string|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onConfirm|点击确认按钮时触发，可选|选中值|
|onCancel|点击取消按钮时触发，可选|-|

