import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsNoticeBar } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-notice-bar"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["closeable", "是否显示关闭按钮，可选", "boolean", "false"],
    },
    {
      list: ["scrollable", "文字是否可滚动，可选", "boolean", "false"],
    },
    {
      list: ["speed", "文字滚动速度，可选", "number", "16"],
    },
    {
      list: ["leftIcon", "左侧Icon，可选", "OsIcon", "-"],
    },
    {
      list: ["more", "是否显示更多按钮，可选", "boolean", "false"],
    },
    {
      list: ["color", "文字颜色，可选", "string", "#f48f18"],
    },
    {
      list: ["bgColor", "背景颜色，可选", "string", "#fff8d8"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClick", "点击时触发，可选", "event对象"],
    },
    {
      list: ["onClose", "点击关闭按钮时触发，可选", "event对象"],
    },
  ],
};

export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰

  const [show, setShow] = useState(true);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: "NoticeBar 通知栏",
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title='NoticeBar 通知栏'></DemoHeader>
      <DemoBlock title='基础' subTitle='默认'>
        <View className='block-section'>
          <OsNoticeBar leftIcon='inform'>
            你可能已经注意到了，我们使用let关键字来代替var
          </OsNoticeBar>
        </View>
      </DemoBlock>
      <DemoBlock subTitle='滚动'>
        <View className='block-section'>
          <OsNoticeBar leftIcon='inform' scrollable>
            你可能已经注意到了，我们使用let关键字来代替var
          </OsNoticeBar>
        </View>
      </DemoBlock>
      <DemoBlock subTitle='自定义滚动速度'>
        <View className='block-section'>
          <OsNoticeBar leftIcon='inform' scrollable speed={60}>
            你可能已经注意到了，我们使用let关键字来代替var
          </OsNoticeBar>
        </View>
      </DemoBlock>
      <DemoBlock title='通告栏模式' subTitle='关闭'>
        <View className='block-section'>
          {show ? (
            <OsNoticeBar
              closeable
              onClick={() => {
                console.log("关闭");
                setShow(false);
              }}
            >
              你可能已经注意到了，我们使用let关键字来代替var
            </OsNoticeBar>
          ) : null}
        </View>
      </DemoBlock>
      <DemoBlock subTitle='跳转'>
        <View className='block-section'>
          <OsNoticeBar more onClick={() => console.log("跳转")}>
            你可能已经注意到了，我们使用let关键字来代替var
          </OsNoticeBar>
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
