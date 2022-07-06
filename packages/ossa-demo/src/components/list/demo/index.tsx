import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsList, OsBadge } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    ["page"]: true,
    ["demo-list"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["type", "default | custom，可选", "string", "default"],
    },
    {
      list: ["title", "标题，可选", "string", "-"],
    },
    {
      list: ["subTitle", "副标题，可选", "string", "-"],
    },
    {
      list: ["desc", "描述，可选", "string", "-"],
    },
    {
      list: ["rightIcon", "右侧icon，取值参考OsIcon，可选", "string", "-"],
    },
    {
      list: ["leftIcon", "左侧icon，取值参考OsIcon，可选", "string", "-"],
    },
    {
      list: ["showSplitLine", "展示分割线，可选", "boolean", "true"],
    },
    {
      list: ["color", "标题颜色，可选", "string", "#333333"],
    },
    {
      list: ["descColor", "副标题或者描述字体颜色，可选", "string", "#7f7f7f"],
    },
    {
      list: ["bgColor", "背景色，可选", "string", "#ffffff"],
    },
    {
      list: ["activeBgColor", "激活态背景色，可选", "string", "#f9f9f9"],
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
      list: ["onClick", "点击时触发", "event 对象"],
    },
  ],
};

const demoTitle = "List 列表";

function onClick(e) {
  console.log("你点击了列表");
}

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
      <DemoBlock title="基础" fullScreen>
        <OsList title="我是标题" onClick={(e) => onClick(e)}></OsList>
        <OsList
          title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题"
          onClick={(e) => onClick(e)}
        ></OsList>
      </DemoBlock>

      <DemoBlock title="带副标题" fullScreen>
        <OsList title="我是标题" subTitle="我是副标题"></OsList>
      </DemoBlock>

      <DemoBlock title="带左侧icon" fullScreen>
        <OsList title="我是标题" leftIcon="record"></OsList>
        <OsList
          title="我是标题"
          rightIcon="arrows"
          subTitle="副标题"
          leftIcon="record"
        ></OsList>
      </DemoBlock>

      <DemoBlock title="右侧带icon" fullScreen>
        <OsList title="我是标题" rightIcon="arrows"></OsList>
      </DemoBlock>

      <DemoBlock title="带描述" fullScreen>
        <OsList title="我是标题" desc="描述文字"></OsList>

        <OsList title="我是标题" desc="描述文字" rightIcon="arrows"></OsList>

        <OsList
          title="我是标题"
          desc="描述文字"
          rightIcon="arrows"
          leftIcon="record"
        ></OsList>
      </DemoBlock>

      <DemoBlock title="内容自定义" fullScreen>
        <OsList
          title="我是标题"
          subTitle="我是副标题"
          type="custom"
          rightIcon="arrows"
        >
          <OsBadge type="list"></OsBadge>
        </OsList>
      </DemoBlock>

      <DemoBlock title="内容自定义" fullScreen>
        <OsList desc="这里是自定义例举例" type="custom">
          <Image
            className="list--test__image"
            src="http://yanxuan.nosdn.127.net/25223742d4031d15c48c93a0b7b760c0.jpg?imageView&thumbnail=160x0&quality=95"
          ></Image>
        </OsList>
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
