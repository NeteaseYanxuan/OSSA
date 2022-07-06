import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { CommonEvent } from "@tarojs/components/types/common";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsDatePicker, OsList } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["type", "time | date | complete，必选", "string", "-"],
    },
    {
      list: ["value", "选中的时间，格式由type决定，必选", "string", "-"],
    },
    {
      list: [
        "fields",
        "有效值 year,month,day\n表示选择器的粒度\ntype=date时有效，可选",
        "string",
        "-",
      ],
    },
    {
      list: ["start", "有效日期范围的开始\n由type决定，可选", "string", "-"],
    },
    {
      list: ["end", "有效日期范围的结束\n由type决定，可选", "string", "-"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onConfirm", "点击确认按钮时触发，可选", "选中值"],
    },
    {
      list: ["onCancel", "点击取消按钮时触发，可选", "-"],
    },
  ],
};

export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰

  const [time, setTime] = useState("16:6");
  const [date, setDate] = useState("2019-7-25");
  const [dateMonth, setDateMonth] = useState("2019-7");
  const [dateComplete, setDateComplete] = useState("2019-7-1 20:01");

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: "DatePicker 时间选择器",
    });
  }, []);

  const onConfirm = (e: CommonEvent) => {
    console.log(e.detail);
    setTime(e.detail.value);
  };

  const onDateConfirm = (e: CommonEvent) => {
    console.log("date change:", e.detail);
    setDate(e.detail.value);
  };

  const onDateMonthConfirm = (e: CommonEvent) => {
    console.log("date change:", e.detail);
    setDateMonth(e.detail.value);
  };

  const onDateCompleteConfirm = (e: CommonEvent) => {
    console.log("date change:", e.detail);
    setDateComplete(e.detail.value);
  };
  return (
    <View className={classNames(classObject)}>
      <DemoHeader title='DatePicker 时间选择器'></DemoHeader>
      <DemoBlock title='选择时间'>
        <View className='block-section'>
          <OsDatePicker
            type='time'
            value={time}
            start='00:00'
            end='23:59'
            onConfirm={onConfirm}
          >
            <OsList title='选择时间' desc={time}></OsList>
          </OsDatePicker>
        </View>
      </DemoBlock>
      <DemoBlock title='选择日期'>
        <View className='block-section'>
          <OsDatePicker
            type='date'
            value={date}
            start='1988-8-29'
            end='2030-8-29'
            onConfirm={onDateConfirm}
          >
            <OsList title='选择日期' desc={date}></OsList>
          </OsDatePicker>
        </View>
      </DemoBlock>

      <DemoBlock title='选择年月'>
        <View className='block-section'>
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
        </View>
      </DemoBlock>

      <DemoBlock title='选择日期和时间'>
        <View className='block-section'>
          <OsDatePicker
            type='complete'
            value={dateComplete}
            start='1988-8-1'
            end='2030-8-1'
            onConfirm={onDateCompleteConfirm}
          >
            <OsList title='选择日期和时间' desc={dateComplete}></OsList>
          </OsDatePicker>
        </View>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>
    </View>
  );
}

interface Props {}
