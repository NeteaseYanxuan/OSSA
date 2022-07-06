import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsButton, OsToast } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["toast-demo"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["函数", "说明", "类型", "参数"],
  data: [
    {
      list: ["isShow", "是否展示，必选", "boolean", "false"],
    },
    {
      list: ["text", "内容，必选", "string", "-"],
    },
    {
      list: ["duration", "持续时间、毫秒，可选", "number", "2000"],
    },
    {
      list: ["className", "自定义类名，可选", "string", "-"],
    },
    {
      list: ["customStyle", "自定义样式，可选", "object", "-"],
    },
  ],
};

const initialObjetcApi = {
  title: "Event API",
  head: ["参数", "说明", "参数"],
  data: [
    {
      list: ["onClose", "toast消失时触发，必选", "-"],
    },
  ],
};

const demoTitle = "Toast 轻提示";
export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);
  const [listEvent] = useState(initialObjetcApi);
  const [text, setText] = useState("");
  const [duration = 2000, setDuration] = useState("");
  const [show, setShow] = useState(false);
  const classObject = getClassObject(); //组件修饰

  function onClick(item) {
    setShow(true);
    setText(item.text);
    setDuration(item.duration);
  }

  function onClose() {
    console.log("关闭了");
    setShow(false);
  }

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock title='基础'>
        <OsButton
          type='primary'
          onClick={() => onClick({ text: "操作成功", duration: 500 })}
          size='block'
        >
          点击出toast,展示0.5s
        </OsButton>
      </DemoBlock>
      <DemoBlock title='长文本'>
        <OsButton
          type='primary'
          onClick={() =>
            onClick({
              text: "操作成功操作成功操作成功操作成功操作成功操作成功操作成功",
            })
          }
          size='block'
        >
          点击出长文本
        </OsButton>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>

      <OsToast
        isShow={show}
        text={text}
        duration={duration}
        onClose={() => {
          onClose();
        }}
      ></OsToast>
    </View>
  );
}

interface Props {}
