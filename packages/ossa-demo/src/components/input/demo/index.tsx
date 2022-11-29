import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsInput } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-input"]: true,
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
        "输入框类型，可选",
        "text | number | password | bankcard | textarea",
        "text",
      ],
    },
    {
      list: ["value", "表单值，可选", "string", "-"],
    },
    {
      list: ["placeholder", "placeholder，可选", "string", "-"],
    },
    {
      list: [
        "placeholderStyle",
        "placeholder样式，只支持小程序，可选",
        "string",
        "-",
      ],
    },
    {
      list: ["placeholderClass", "placeholder样式类，可选", "string", "-"],
    },
    {
      list: ["label", "表单说明，可选", "string", "-"],
    },
    {
      list: ["maxLength", "最大字符数，可选", "number", "500"],
    },
    {
      list: ["isReadonly", "是否可编辑，可选，`isReadonly`属性在未来版本中将被删除，请使用`readonly`代替", "boolean", "false"],
    },
    {
      list: ["readonly", "是否可编辑，可选", "boolean", "false"],
    },
    {
      list: ["isDisabled", "表单是否失效，可选，`isDisabled`属性在未来版本中将被删除，请使用`disabled`代替", "boolean", "false"],
    },
    {
      list: ["disabled", "表单是否失效，可选", "boolean", "false"],
    },
    {
      list: ["disabledClear", "是否隐藏一键删除按钮，可选", "boolean", "false"],
    },
    {
      list: ["showSplitLine", "是否展示底部分割线，当`type`为`bankcard`时无效，可选", "boolean", "true"],
    },
    {
      list: [
        "countDown",
        "是否显示字符计数器，textarea有效，可选。`countDown`字段将在未来版本中被移除,请使用`showCount`代替",
        "boolean",
        "false",
      ],
    },
    {
      list: [
        "showCount",
        "是否显示字符计数器，textarea有效，可选",
        "boolean",
        "false",
      ],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onChange", "表单值变化时调用，可选", "表单值"],
    },
    {
      list: ["onFocus", "表单聚焦时调用，可选", "事件对象"],
    },
    {
      list: ["onBlur", "表单值失焦时调用，可选", "事件对象"],
    },
  ],
};

export default function Index(props: any) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰
  const [v1, setV1] = useState("186");
  const [v2, setV2] = useState("186");
  const [v3, setV3] = useState(
    "网易严选秉承网易一贯的严谨态度，深入世界各地，严格把关所有商品的产地"
  );
  const [v4, setV4] = useState("123");
  const [v5, setV5] = useState("不可编辑的input");
  const [v6, setV6] = useState("不可编辑的textarea");
  const [v7, setV7] = useState("662712399");
  const [v8, setV8] = useState("662712");

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: "Input 输入框",
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title='Input 输入框'></DemoHeader>
      <DemoBlock title='普通' subTitle='有标题'>
        <View className='block-section'>
          <OsInput
            label='标题'
            placeholder='默认文案'
            placeholderStyle='color: #7f7f7f;'
            value={v1}
            onChange={(v) => {
              setV1(v);
            }}
          ></OsInput>
        </View>
      </DemoBlock>
      <DemoBlock subTitle='没有标题'>
        <View className='block-section'>
          <OsInput
            placeholder='默认文案'
            placeholderStyle='color: #7f7f7f;'
            value={v2}
            onChange={(v) => {
              setV2(v);
            }}
          ></OsInput>
        </View>
      </DemoBlock>
      <DemoBlock subTitle='银行卡'>
        <View className='block-section'>
          <OsInput
            type='bankcard'
            placeholder='银行行卡/礼品卡号'
            value={v7}
            onChange={(v) => {
              setV7(v);
            }}
          ></OsInput>
        </View>
      </DemoBlock>
      <DemoBlock subTitle='密码输入框'>
        <View className='block-section'>
          <OsInput
            type='password'
            placeholder='请输入密码'
            value={v8}
            onChange={(v) => {
              setV8(v);
            }}
          ></OsInput>
        </View>
      </DemoBlock>
      <DemoBlock subTitle='数字输入框'>
        <View className='block-section'>
          <OsInput
            type='number'
            placeholder='请输入数字'
            value={v4}
            onChange={(v) => {
              setV4(v);
            }}
          ></OsInput>
        </View>
      </DemoBlock>
      <DemoBlock subTitle='多行输入'>
        <View className='block-section'>
          <OsInput
            type='textarea'
            placeholder='请输入文本'
            value={v3}
            onChange={(v) => {
              setV3(v);
            }}
            showCount
            maxLength={200}
          ></OsInput>
        </View>
      </DemoBlock>
      <DemoBlock subTitle='不可编辑'>
        <View className='block-section'>
          <OsInput
            label='标题'
            placeholder='请输入文本'
            value={v5}
            onChange={(v) => {
              setV5(v);
            }}
            readonly
          ></OsInput>
          <OsInput
            label='标题'
            placeholder='请输入文本'
            value={v5}
            onChange={(v) => {
              setV5(v);
            }}
            disabled
          ></OsInput>
          <OsInput
            type='textarea'
            label='标题'
            placeholder='请输入文本'
            value={v6}
            onChange={(v) => {
              setV6(v);
            }}
            showCount
            disabled
          ></OsInput>
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
