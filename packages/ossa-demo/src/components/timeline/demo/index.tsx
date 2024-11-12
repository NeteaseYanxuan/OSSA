import React, { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import { OsTimeline } from "ossaui";
import DemoTable from "../../demoTable";
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-tag"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["items", "时间轴数据", "Array", "[]"],
    },
    {
      list: ["onClick", "点击时触发，可选", "event对象", ""],
    },
    {
      list: ["pending", "是否有未完成项", "boolean", "false"],
    },
  ],
};

const initialItemApi = {
  title: '',
  head: ["items参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["title", "标题", "string", ""],
    },
    {
      list: ["color", "颜色", "string", ""],
    },
    {
      list: ["icon", "图标", "string", ""],
    },
    {
      list: ["content", "内容", "Array", ""],
    },
    {
      list: ["iconColor", "图标颜色", "string", "#7F7F7F"],
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
  ],
};

export default function Index() {
  const [listApi] = useState(initialListApi);
  const [listItemApi] = useState(initialItemApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: "Timeline 时间轴",
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title='Timeline 时间轴'></DemoHeader>
      <DemoBlock title='基础用法'>
        <View className='block-section'>
          <OsTimeline
            items={[
              { title: "刷牙洗脸" },
              { title: "吃早餐" },
              { title: "上班" },
              { title: "睡觉" },
            ]}
          ></OsTimeline>
        </View>
      </DemoBlock>

      <DemoBlock title='设置颜色'>
        <View className='block-section'>
          <OsTimeline
            items={[
              { title: "刷牙洗脸" },
              { title: "吃早餐", color: "green" },
              { title: "上班", color: "red" },
              { title: "睡觉", color: "yellow" },
            ]}
          ></OsTimeline>
        </View>
      </DemoBlock>

      <DemoBlock title='使用Icon'>
        <View className='block-section'>
          <OsTimeline
            items={[
              {
                title: "刷牙洗脸",
                iconColor: "#07c160",
                icon: "check-selected",
              },
              { title: "吃早餐", icon: "record", iconColor: "#07c160" },
              { title: "上班", icon: "classify", iconColor: "#F48F18" },
              { title: "睡觉", icon: "delete-pressed", iconColor: "#d9d9d9" },
            ]}
          ></OsTimeline>
        </View>
      </DemoBlock>

      <DemoBlock title='丰富内容'>
        <View className='block-section'>
          <OsTimeline
            pending
            items={[
              {
                title: "刷牙洗脸",
                content: ["大概8:00"],
                iconColor: "#07c160",
                icon: "check-selected",
              },
              {
                title: "吃早餐",
                content: ["牛奶+面包", "餐后记得吃药"],
                icon: "record",
                iconColor: "#F48F18",
              },
              {
                title: "上班",
                iconColor: "#d9d9d9",
                content: ["查看邮件", "写PPT", "发送PPT给领导"],
                icon: "avatar",
              },
              {
                title: "睡觉",
                content: ["不超过23:00"],
                icon: "choose-selected",
                iconColor: "#07c160",
              },
            ]}
          ></OsTimeline>
        </View>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listItemApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>
    </View>
  );
}
