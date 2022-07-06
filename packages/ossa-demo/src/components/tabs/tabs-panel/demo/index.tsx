import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../../demoBlock";
import DemoHeader from "../../../demoHeader";
import DemoTable from "../../../demoTable";
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
      list: ["color", "normal / warning / error / 色值", "String", "normal"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [],
};

export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰
  return (
    <View className={classNames(classObject)}>
      <DemoHeader title='Demo XXX'></DemoHeader>
      <DemoBlock title='普通'>
        <View className='block-section'>
          <View className='inline-item'>
            <Text>这里写demo</Text>
          </View>
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
