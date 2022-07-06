import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsRate } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-rate"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["title", "标题，可选", "string", "-"],
    },
    {
      list: [
        "selectedIcon",
        "选中时icon，取值参考OsIcon，可选",
        "string",
        "grade-selected",
      ],
    },
    {
      list: ["icon", "未选中时icon，取值参考OsIcon，可选", "string", "grade"],
    },
    {
      list: ["selectedIconColor", "选中icon颜色，可选", "string", "#FAB646"],
    },
    {
      list: ["color", "未选中icon颜色，可选", "string", "#CCCCCC"],
    },
    {
      list: [
        "options",
        "分数对应的结果，可选",
        "Array<string>",
        "['非常差', '差', '一般', '满意', '非常满意']",
      ],
    },
    {
      list: ["isShowResult", "展示分值对应的结果，可选", "boolean", "true"],
    },
    {
      list: ["value", "当前分值索引(从0开始)，可选", "number", "0"],
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
      list: ["onChange", "评分改变时触发", "(item)当前分值对象"],
    },
  ],
};

const initialOptions = ["1个赞", "2个赞", "3个赞", "4个赞", "5个赞"];

function onChange(item: object) {
  console.log(item);
}

const demoTitle = "Rate 评分";
export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);
  const [listEvent] = useState(initialListEvent);
  const [options3] = useState(initialOptions);
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
        <OsRate
          title='评分'
          onChange={(item) => {
            onChange(item);
          }}
        ></OsRate>
      </DemoBlock>

      <DemoBlock title='最小尺寸'>
        <OsRate type='small' value={2} isShowResult={false}></OsRate>
      </DemoBlock>

      <DemoBlock title='自定义图标'>
        <OsRate
          title='评分'
          value={3}
          selectedIcon='like-selected'
          icon='like'
          options={options3}
        ></OsRate>
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
