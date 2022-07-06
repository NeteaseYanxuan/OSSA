import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsCheckbox, OsCheckboxOption } from "ossaui";
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
  title: "API-OsCheckboxOption",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["value", "选中值，必选", "Array<number | string>", "-"],
    },
    {
      list: ["optionValue", "选项值，必选", "number | string", "-"],
    },
    {
      list: ["isDisabled", "失效状态，可选", "boolean", "false"],
    },
  ],
};
const initialListEvent = {
  title: "Event-OsCheckboxOption",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClick", "点击时触发，必选", "value"],
    },
  ],
};

export default function Index() {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰
  const [v1, setV1] = useState([0]);
  const [v2, setV2] = useState([0]);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: "Checkbox 复选框",
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title='Checkbox 复选框'></DemoHeader>
      <DemoBlock title='基础' subTitle='普通'>
        <OsCheckbox>
          <OsCheckboxOption value={v1} optionValue={0} onClick={setV1}>
            选项A
          </OsCheckboxOption>
          <OsCheckboxOption value={v1} optionValue={1} onClick={setV1}>
            选项B
          </OsCheckboxOption>
        </OsCheckbox>
      </DemoBlock>

      <DemoBlock subTitle='选项内容自定义'>
        <OsCheckbox>
          <OsCheckboxOption value={v2} optionValue={0} onClick={setV2}>
            <View className='custom-option'>
              <Image
                className='custom-option__img'
                src='http://yanxuan.nosdn.127.net/25223742d4031d15c48c93a0b7b760c0.jpg?imageView&thumbnail=172x172&quality=95'
              />
              <View className='custom-option__content'>
                <View className='custom-option__title'>西装</View>
                <View className='custom-option__sub-title'>
                  帅气的办公室吸睛装扮
                </View>
                <View className='custom-option__price'>￥299</View>
              </View>
            </View>
          </OsCheckboxOption>
          <OsCheckboxOption value={v2} optionValue={1} onClick={setV2}>
            <View className='custom-option'>
              <Image
                className='custom-option__img'
                src='https://yanxuan.nosdn.127.net/b3dec0eb768d27301afab1b4a43f30cb.png?quality=95&thumbnail=172x172&imageView'
              />
              <View className='custom-option__content'>
                <View className='custom-option__title'>
                  网易智造四季全屋循环扇
                </View>
                <View className='custom-option__sub-title'>
                  源自日本，全屋空气对流循环
                </View>
                <View className='custom-option__price'>￥248.1</View>
              </View>
            </View>
          </OsCheckboxOption>
        </OsCheckbox>
      </DemoBlock>

      <DemoBlock title='禁用' subTitle='普通'>
        <OsCheckbox>
          <OsCheckboxOption
            value={v1}
            optionValue={0}
            onClick={setV1}
            isDisabled
          >
            选项A
          </OsCheckboxOption>
          <OsCheckboxOption
            value={v1}
            optionValue={1}
            onClick={setV1}
            isDisabled
          >
            选项B
          </OsCheckboxOption>
        </OsCheckbox>
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
