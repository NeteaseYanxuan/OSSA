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
      list: ["title", "标题，可选", "string", "-"],
    },
    {
      list: ["isShow", "是否显示，传入布尔值可手动控制，可选", "boolean", "-"],
    },
    {
      list: ["mode", "类型，mode 为 selector 时为一维数组，mode 为 multiSelector 时为二维数组，可选", "'selector'|'multiSelector'", "'selector'"],
    },
    {
      list: ["range", "取值范围，必选", "Array<number|string> | Array<Array<number|string>", "-"],
    },
    {
      list: ["value", "取值索引，必选", "number|number[]", "0"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onConfirm", "点击确认按钮时触发，可选", "(value) => void"],
    },
    {
      list: ["onCancel", "点击取消按钮时触发，可选", "() => void"],
    },
    {
      list: ["onChange", "值改变时触发，可选", "(value) => void"],
    },
  ],
};

const range = ["中国", "美国", "日本", "泰国", "印度"];

const multiRange = [
  ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
  ["上午", "下午", "晚上"],
]

export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰
  const [vNormal, setVNormal] = useState(0);
  const [vMulti, setVMulti] = useState([0, 0]);
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
      <DemoHeader title='Picker 选择器'></DemoHeader>
      <DemoBlock title='普通'>
        <View className='block-section'>
          <OsPicker
            range={range}
            value={vNormal}
            onCancel={() => {
              console.log("cancel");
            }}
            onConfirm={onConfirmNormal}
            onChange={(value) => {
              console.log(value);
            }}
          >
            <OsList title='国籍' desc={range[vNormal]}></OsList>
          </OsPicker>
        </View>
      </DemoBlock>
      <DemoBlock title='多列'>
        <View className='block-section'>
          <OsPicker
            title='时间'
            mode='multiSelector'
            range={multiRange}
            value={vMulti}
            onCancel={() => {
              console.log("cancel");
            }}
            onConfirm={(value) => {
              console.log(value);
              setVMulti(value as number[])
            }}
            onChange={(value) => {
              console.log(value);
              if (value[0] !== vMulti[0]) {
                value[1] = 0;
              }
              setVMulti(value as number[]);
            }}
          >
            <OsList title='时间' desc={multiRange.map((rang, index) => rang[vMulti[index]]).join(',')}></OsList>
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
