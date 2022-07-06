import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsTabBar } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-tabbar"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["value", "当前选中的标签索引值，从0开始，可选", "number", "0"],
    },
    {
      list: ["tabsArr", "数据渲染，必选", "<Array><API-TabsArr>", "-"],
    },
    {
      list: ["defaultColor", "默认填充色，可选", "string", "#7F7F7F"],
    },
    {
      list: ["activeColor", "高亮填充色，可选", "string", "#DD1A21"],
    },
    {
      list: ["isfixedBt", "是否固定在页面底部，可选", "boolean", "false"],
    },
    {
      list: ["space", "icon与文案垂直间距，可选", "number", 10],
    },
    {
      list: ["className", "自定义类名，可选", "string", "-"],
    },
    {
      list: ["customStyle", "自定义样式，可选", "object", "-"],
    },
  ],
};
const initialTabsApi = {
  title: "API-TabsArr",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: [
        "icon",
        "icon名称，取值参考OsIcon Tabbar分类，必选",
        "string",
        "-",
      ],
    },
    {
      list: [
        "selectedIcon",
        "选中icon名称，取值参考OsIcon Tabbar分类，必选",
        "string",
        "-",
      ],
    },
    {
      list: ["text", "tabbar文案，必选", "string", "-"],
    },
    {
      list: [
        "useCustomIcon",
        "是否使用自定义icon，允许icon/selectedIcon传入自定义的组件",
        "boolean",
        "false",
      ],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClick", "点击时触发", "(item)当前点击的标签，从0开始"],
    },
  ],
};
const initialTabsArr = [
  {
    icon: "home",
    selectedIcon: "home-pressed",
    text: "首页",
  },
  {
    icon: "classify",
    selectedIcon: "classify-pressed",
    text: "分类",
  },
  {
    icon: "subject",
    selectedIcon: "subject-pressed",
    text: "识物",
  },
  {
    icon: "cart",
    selectedIcon: "cart-pressed",
    text: "购物车",
  },
  {
    icon: "user",
    selectedIcon: "user-pressed",
    text: "个人",
  },
];

function onClick(item: object) {
  console.log(item);
}

const demoTitle = "TabBar 标签栏";
export default function Index() {
  const [listApi] = useState(initialListApi);
  const [tabs] = useState(initialTabsApi);
  const [listEvent] = useState(initialListEvent);
  const [tabsArr] = useState(initialTabsArr);
  const classObject = getClassObject(); //组件修饰

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock fullScreen title="基础">
        <OsTabBar
          value={2}
          tabsArr={tabsArr}
          onClick={(item) => onClick(item)}
        ></OsTabBar>
      </DemoBlock>

      <DemoBlock fullScreen title="固定底部">
        <OsTabBar
          tabsArr={tabsArr}
          isfixedBt
          onClick={(item) => onClick(item)}
        ></OsTabBar>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={tabs}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>
    </View>
  );
}
