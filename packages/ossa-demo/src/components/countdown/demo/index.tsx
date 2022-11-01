
import { useState } from "react";
import { View } from "@tarojs/components";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsCountdown, OsButton } from "ossaui";

export default function Index() {
  const [showCd, setShowCd] = useState(false)
  const initialListApi = {
    title: "API",
    head: ["参数", "说明", "类型", "默认值"],
    data: [
      {
        list: ["targetDate", "目标时间，基于new Date(targetDate)换算毫秒数，可选", "number | string", "-"],
      },
      {
        list: ["remainTime", "剩余时间毫秒数，可选", "number", "0"],
      },
      {
        list: ["interval", "切换时间间隔，可选", "number", "1000"],
      },
    ],
  };
  const initialListEvent = {
    title: "Event",
    head: ["函数名", "说明", "参数"],
    data: [
      {
        list: ["onEnd", "倒计时结束时触发，可选", "-"],
      },
    ],
  };
  return (
    <View>
      <DemoHeader title='倒计时'></DemoHeader>
      <DemoBlock title='目标时间的倒计时'>
        <OsCountdown className='cd1' targetDate='2023-01-01' onEnd={() => { console.log('倒计时结束') }}>
          {f => <View>离2023-01-01还有{f.days + '天' + f.hours + '小时' + f.minutes + '分钟' + f.seconds + "秒"}</View>}
        </OsCountdown>
      </DemoBlock>
      <DemoBlock title='剩余时间的倒计时'>
        {
          !showCd ?
            <OsButton className='cd2-btn' onClick={() => { setShowCd(true) }}>开始倒计时</OsButton>
            : <OsCountdown className='cd2' remainTime={5000} onEnd={() => { setTimeout(() => { setShowCd(false) }, 1000) }}>
              {f => <View>{Math.round(f.remainTime / 1000)}</View>}
            </OsCountdown>
        }
      </DemoBlock>
      <DemoBlock title='可切换间隔的倒计时'>
        <OsCountdown className='cd3' remainTime={20000} interval={100} onEnd={() => { console.log('倒计时结束') }}>
          {f => <View>{f.seconds + ":" + Math.round(f.milliseconds / 100)}</View>}
        </OsCountdown>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={initialListApi}></DemoTable>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={initialListEvent}></DemoTable>
      </DemoBlock>
    </View>
  );
}
