import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsPicker, OsList } from "ossaui";
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
      list: ["range", "取值范围，必选", "Array<number|string>", "-"],
    },
    {
      list: ["value", "取值索引，必选", "number", "0"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onConfirm", "点击确认按钮时触发，可选", "-"],
    },
    {
      list: ["onCancel", "点击取消按钮时触发，可选", "-"],
    },
  ],
};

const range = ["中国", "美国", "日本", "泰国", "印度"];

export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰
  const [vNormal, setVNormal] = useState(2);
  const onConfirmNormal = (value) => {
    setVNormal(Number(value));
  };

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: "Picker 选择器",
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title="Picker 选择器"></DemoHeader>
      <DemoBlock title="普通">
        <View className="block-section">
          <OsPicker
            range={range}
            value={vNormal}
            onCancel={() => {
              console.log("cancel");
            }}
            onConfirm={onConfirmNormal}
          >
            <OsList title="国籍" desc={range[vNormal]}></OsList>
          </OsPicker>
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
