import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import { OsButton, OsAnimate } from "ossaui";
import DemoHeader from "../../demoHeader";
import DemoBlock from "../../demoBlock";
import DemoTable from "../../demoTable";

import "./index.scss";

function getClassObject() {
  const classObject = {
    ["css-animate"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: [
        "type",
        "fadeIn / fadeOut / fadeOutDown / fadeOutUp / fadeInDown / fadeInUp",
        "string",
        "-",
      ],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClick", "点击触发", "event"],
    },
  ],
};

export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);
  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰
  const [type1, setType1] = useState("fadeIn");
  const [type2, setType2] = useState("fadeOutDown");
  const [type3, setType3] = useState("fadeInUp");
  const [btnTxt1, setBtnTxt1] = useState("点击渐隐");
  const [btnTxt2, setBtnTxt2] = useState("点击顶部飞出");
  const [btnTxt3, setBtnTxt3] = useState("点击底部飞出");

  function handleClick1() {
    setType1(type1 === "fadeIn" ? "fadeOut" : "fadeIn");
    setBtnTxt1(type1 === "fadeIn" ? "点击渐现" : "点击渐隐");
  }

  function handleClick2() {
    setType2(type2 === "fadeOutDown" ? "fadeOutUp" : "fadeOutDown");
    setBtnTxt2(type2 === "fadeOutDown" ? "点击顶部飞入" : "点击顶部飞出");
  }

  function handleClick3() {
    setType3(type3 === "fadeInDown" ? "fadeInUp" : "fadeInDown");
    setBtnTxt3(type3 === "fadeInDown" ? "点击底部飞出" : "点击底部飞入");
  }

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title='Css 样式动画'></DemoHeader>
      <DemoBlock title='种类'>
        <View className='block-section'>
          <View className='inline-item'>
            <OsButton
              type='primary'
              onClick={() => {
                handleClick1();
              }}
            >
              {btnTxt1}
            </OsButton>
            <OsAnimate type={type1}>
              <Text className='inline-item--txt'>OSSA</Text>
            </OsAnimate>
          </View>
        </View>
        <View className='block-section'>
          <View className='inline-item'>
            <OsButton
              type='primary'
              onClick={() => {
                handleClick2();
              }}
            >
              {btnTxt2}
            </OsButton>
            <OsAnimate type={type2}>
              <Text className='inline-item--txt'>OSSA</Text>
            </OsAnimate>
          </View>
        </View>
        <View className='block-section'>
          <View className='inline-item'>
            <OsButton
              type='primary'
              onClick={() => {
                handleClick3();
              }}
            >
              {btnTxt3}
            </OsButton>
            <OsAnimate type={type3}>
              <Text className='inline-item--txt'>OSSA</Text>
            </OsAnimate>
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
