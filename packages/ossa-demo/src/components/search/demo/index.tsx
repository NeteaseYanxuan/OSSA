import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsSearch } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-search"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["placeholder", "默认文案，可选", "string", "搜索商品，共X件好物"],
    },
    {
      list: ["showSplitLine", "展示分割线，可选", "boolean", "true"],
    },
    {
      list: ["padding", "容器左右内边距，可选", "number", "30"],
    },
    {
      list: ["bgColor", "容器背景色，可选", "string", "#FAFAFA"],
    },
    {
      list: ["color", "输入文字颜色，可选", "string", "#333333"],
    },
    {
      list: ["className", "自定义类名，可选", "string", "-"],
    },
    {
      list: ["customStyle", "自定义样式，可选", "object", "-"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: [
        "onChange",
        "输入框值改变时触发的事件",
        "event: CommonEvent, value: string",
      ],
    },
    {
      list: ["onClear", "点击清除icon时触发", "-"],
    },
    {
      list: ["onFocus", "聚焦时触发", "event"],
    },
    {
      list: ["onBlur", "失去焦点时触发", "event"],
    },
    // ,
    // {
    //   list:['onConfirm','默认提交回调','evane']
    // }
  ],
};

function onChange(e: any, value: string) {
  console.log(value);
}

const demoTitle = "Search 搜索";
export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);

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
      <DemoBlock title="普通">
        <OsSearch onChange={(e, value) => onChange(e, value)}></OsSearch>
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
