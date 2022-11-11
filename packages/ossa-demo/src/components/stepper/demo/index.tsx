import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsStepper } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["stepper-demo"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: [
        "value",
        "当前值，开发者需要通过 onChange 事件来更新 value 值，必选",
        "number",
        "1",
      ],
    },
    {
      list: ["max", "最大值，可选", "number", "99"],
    },
    {
      list: ["min", "最小值，可选", "number", "1"],
    },
    {
      list: ["isReadonly", "数量不可编辑，可选，`isReadonly`属性在未来版本中将被删除，请使用`readonly`代替", "boolean", "false"],
    },
    {
      list: ["readonly", "数量不可编辑，可选", "boolean", "false"],
    },
    {
      list: ["isDisabled", "不可点击，可选，`isDisabled`属性在未来版本中将被删除，请使用`disable`代替", "boolean", "false"],
    },
    {
      list: ["disabled", "不可点击，可选", "boolean", "false"],
    },
    {
      list: ["customStyle", "自定义样式，可选", "object", "-"],
    },
    {
      list: ["className", "自定义类名，可选", "string", "-"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onAdd", "点击加时触发", "当前数值"],
    },
    {
      list: ["onSubtract", "点击减时触发", "当前数值"],
    },
    {
      list: [
        "onChange",
        "输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 current 值变化，onChange 函数必选",
        "当前数值",
      ],
    },
    {
      list: ["onBlur", "输入框失去焦点时触发", "event对象"],
    },
    {
      list: ["onErrorInput", "错误输入时触发", "错误数值"],
    },
    {
      list: ["onDisabledAdd", "到达最大值之后点击增加触发", "当前数值"],
    },
    {
      list: ["onDisabledSubtract", "到达最小值之后点击增加触发", "当前数值"],
    },
  ],
};

function onAdd(value: number) {
  console.log(value);
}

function onSubtract(value: number) {
  console.log(value);
}

function onBlur(event) {
  console.log(event);
  console.log("失去焦点啦");
}

function onChange(value: number, setCurrent: Function) {
  setCurrent(value);
}

function onChange1(value: number, setCurrent1: Function) {
  setCurrent1(value);
}

function onChange2(value: number, setCurrent2: Function) {
  setCurrent2(value);
}
const initialCurrent = 1;
const initialCurrent1 = 3;
const initialCurrent2 = 4;
const demoTitle = "Stepper 步进器";
export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);
  const [current, setCurrent] = useState(initialCurrent);
  const [current1, setCurrent1] = useState(initialCurrent1);
  const [current2, setCurrent2] = useState(initialCurrent2);
  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock title='基础'>
        <OsStepper
          value={current}
          max={5}
          onAdd={(value) => onAdd(value)}
          onSubtract={(value) => onSubtract(value)}
          onChange={(value) => {
            onChange(value, setCurrent);
          }}
          onBlur={(event) => {
            onBlur(event);
          }}
          onDisabledAdd={(value) => console.log(value)}
          onDisabledSubtract={(value) => console.log(value)}
        ></OsStepper>
      </DemoBlock>

      <DemoBlock title='数量不可编辑'>
        <OsStepper
          isReadonly
          value={current1}
          onChange={(value) => {
            onChange1(value, setCurrent1);
          }}
        ></OsStepper>
      </DemoBlock>

      <DemoBlock title='不可点击'>
        <OsStepper
          isDisabled
          value={current2}
          onChange={(value) => {
            onChange2(value, setCurrent2);
          }}
        ></OsStepper>
      </DemoBlock>

      {/* <DemoBlock title='高级用法'>
        <OsStepper value={2} min={1} max={24} step={2}></OsStepper>
      </DemoBlock> */}

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
