---
sidebar_position: 33
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/countdown/demo/index'
---

# Countdown 倒计时

## 介绍
倒计时

## 用法
### 目标时间的倒计时
```jsx 
<OsCountdown targetDate='2023-01-01' onEnd={() => { console.log('倒计时结束') }}>
  {f => <View>离2023-01-01还有{f.days + '天' + f.hours + '小时' + f.minutes + ':' + f.seconds + ":" + f.milliseconds}</View>}
</OsCountdown>
<OsCountdown format='dd天HH小时mm分钟ss秒' className='cd5' targetDate='2023-01-01' onEnd={() => { console.log('倒计时结束') }} />
```
### 剩余时间的倒计时
```jsx
const [showCd, setShowCd] = useState(false)
```
```jsx 
{
  !showCd ?
    <OsButton className='cd2-btn' onClick={() => { setShowCd(true) }}>开始倒计时</OsButton>
    : <OsCountdown className='cd2' remainTime={5000} onEnd={() => { setTimeout(() => { setShowCd(false) }, 1000) }}>
      {f => <View>{Math.round(f.remainTime / 1000)}</View>}
    </OsCountdown>
}
```
### 可切换间隔的倒计时
```jsx 
<OsCountdown remainTime={20000} interval={100} onEnd={() => { console.log('倒计时结束') }}>
  {f => <View>{f.seconds + ":" + Math.round(f.milliseconds/ 100)}</View>}
</OsCountdown>
```
## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|targetDate|目标时间，基于new Date(targetDate)换算毫秒数，可选|number \| string|-|
|remainTime|剩余时间毫秒数，可选|number|0|
|interval|切换时间间隔，可选|number|1000|
|format|格式化（d: 天，H：小时，m：分钟，s：秒），可选|string|HH:mm:ss|


### 方法
|函数名|说明|参数|
|------|------|------|
|onEnd|倒计时结束时触发，可选|-|

