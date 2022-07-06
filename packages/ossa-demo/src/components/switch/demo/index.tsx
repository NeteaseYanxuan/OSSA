import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
// import './index.scss'
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsSwitch } from "ossaui";

function getClassObject() {
  const classObject = {
    page: true,
    demo: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["isChecked", "是否打开，必选", "boolean", "false"],
    },
    {
      list: ["onColor", "打开时的背景色，可选", "string", "-"],
    },
    {
      list: ["offColor", "关闭时的背景色，可选", "string", "-"],
    },
    {
      list: ["nodeColor", "滑块颜色，可选", "string", "-"],
    },
    {
      list: ["isDisabled", "禁用，可选", "boolean", "false"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onChange", "点击时触发，必选", "开关新值"],
    },
  ],
};

export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰
  const [v1, setV1] = useState(true);
  const [v2, setV2] = useState(false);
  const [v3, setV3] = useState(true);
  const [v4, setV4] = useState(false);
  const [v6, setV6] = useState(true);
  const [v7, setV7] = useState(false);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: "Switch 开关",
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title="Switch 开关"></DemoHeader>
      <DemoBlock title="基础" subTitle="on">
        <View className="block-section">
          <OsSwitch isChecked={v1} onChange={setV1}></OsSwitch>
        </View>
      </DemoBlock>

      <DemoBlock subTitle="off">
        <View className="block-section">
          <OsSwitch isChecked={v2} onChange={setV2}></OsSwitch>
        </View>
      </DemoBlock>

      <DemoBlock title="自定义颜色" subTitle="自定义on背景色">
        <View className="block-section">
          <OsSwitch
            isChecked={v3}
            onChange={setV3}
            onColor="rgb(221, 26, 33)"
          ></OsSwitch>
        </View>
      </DemoBlock>

      <DemoBlock subTitle="自定义off背景色">
        <View className="block-section">
          <OsSwitch
            isChecked={v4}
            onChange={setV4}
            offColor="#dfdfdf"
          ></OsSwitch>
        </View>
      </DemoBlock>

      <DemoBlock title="禁用" subTitle="on">
        <View className="block-section">
          <OsSwitch isChecked={v6} onChange={setV6} isDisabled></OsSwitch>
        </View>
      </DemoBlock>

      <DemoBlock subTitle="off">
        <View className="block-section">
          <OsSwitch isChecked={v7} onChange={setV7} isDisabled></OsSwitch>
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
