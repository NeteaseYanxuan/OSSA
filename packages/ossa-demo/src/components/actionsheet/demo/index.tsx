import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
// import './index.scss'
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsActionsheet, OsActionsheetItem, OsButton } from "ossaui";

import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-actionsheet"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API-Actionsheet",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["isShow", "是否显示弹窗，必选", "boolean", "false"],
    },
    {
      list: ["title", "面板标题，可选", "string", "-"],
    },
    {
      list: ["cancelText", "取消按钮文案，可选", "string", "-"],
    },
  ],
};
const initialListEvent = {
  title: "Event-Actionsheet",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClose", "面板关闭时的回调，可选", "-"],
    },
  ],
};

const initialItemListApi = {
  title: "API-ActionsheetItem",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["title", "选项标题", "string", "-"],
    },
    {
      list: ["disabled", "选项是否失效", "boolean", "false"],
    },
  ],
};
const initialItemListEvent = {
  title: "Event-ActionsheetItem",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClick", "点击时的回调", "-"],
    },
  ],
};

export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);
  const [listEvent] = useState(initialListEvent);

  const [listItemApi] = useState(initialItemListApi);
  const [listItemEvent] = useState(initialItemListEvent);

  const classObject = getClassObject(); //组件修饰

  const [showBase, setShowBase] = useState(false);
  const [showWithCancelBtn, setShowWithCancelBtn] = useState(false);
  const [showWithTitle, setShowWithTitle] = useState(false);
  const [showWithCustomContent, setShowWithCustomContent] = useState(false);
  // const OsActionsheetItem = OsActionsheet.Item;

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: "Actionsheet 动作面板",
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title='Actionsheet 动作面板'></DemoHeader>
      <DemoBlock title='基础'>
        <View className='block-section'>
          <View className='inline-item'>
            <OsButton
              onClick={() => {
                setShowBase(true);
              }}
            >
              弹出 Actionsheet
            </OsButton>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title='带取消按钮'>
        <View className='block-section'>
          <View className='inline-item'>
            <OsButton
              onClick={() => {
                setShowWithCancelBtn(true);
              }}
            >
              弹出带取消按钮的 Actionsheet
            </OsButton>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title='带标题'>
        <View className='block-section'>
          <View className='inline-item'>
            <OsButton
              onClick={() => {
                setShowWithTitle(true);
              }}
            >
              弹出带标题的 Actionsheet
            </OsButton>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title='自定义内容'>
        <View className='block-section'>
          <View className='inline-item'>
            <OsButton
              onClick={() => {
                setShowWithCustomContent(true);
              }}
            >
              弹出自定义内容的 Actionsheet
            </OsButton>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listItemApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listItemEvent}></DemoTable>
      </DemoBlock>

      <OsActionsheet
        isShow={showBase}
        onClose={() => {
          setShowBase(false);
        }}
      >
        <OsActionsheetItem
          title='满599元减去100'
          onClick={() => {
            setShowBase(false);
          }}
        ></OsActionsheetItem>
        <OsActionsheetItem
          title='满249元减50111'
          disabled
          onClick={() => {
            setShowBase(false);
          }}
        ></OsActionsheetItem>
        <OsActionsheetItem
          title='满88元打8折'
          disabled
          onClick={() => {
            setShowBase(false);
          }}
        ></OsActionsheetItem>
        <OsActionsheetItem
          title='满69元减10'
          disabled
          onClick={() => {
            setShowBase(false);
          }}
        ></OsActionsheetItem>
      </OsActionsheet>

      <OsActionsheet
        cancelText='取消'
        isShow={showWithCancelBtn}
        onClose={() => {
          setShowWithCancelBtn(false);
        }}
      >
        <OsActionsheetItem
          title='满599元减去100'
          onClick={() => {
            setShowWithCancelBtn(false);
          }}
        ></OsActionsheetItem>
        <OsActionsheetItem
          title='满249元减50'
          onClick={() => {
            setShowWithCancelBtn(false);
          }}
        ></OsActionsheetItem>
        <OsActionsheetItem
          title='满88元打8折'
          onClick={() => {
            setShowWithCancelBtn(false);
          }}
        ></OsActionsheetItem>
        <OsActionsheetItem
          title='满69元减10'
          onClick={() => {
            setShowWithCancelBtn(false);
          }}
        ></OsActionsheetItem>
      </OsActionsheet>

      <OsActionsheet
        title='带标题的 Actionsheet'
        isShow={showWithTitle}
        onClose={() => {
          setShowWithTitle(false);
        }}
      >
        <OsActionsheetItem
          title='满599元减去100'
          onClick={() => {
            setShowWithTitle(false);
          }}
        ></OsActionsheetItem>
        <OsActionsheetItem
          title='满249元减50'
          onClick={() => {
            setShowWithTitle(false);
          }}
        ></OsActionsheetItem>
        <OsActionsheetItem
          title='满88元打8折'
          onClick={() => {
            setShowWithTitle(false);
          }}
        ></OsActionsheetItem>
        <OsActionsheetItem
          title='满69元减10'
          onClick={() => {
            setShowWithTitle(false);
          }}
        ></OsActionsheetItem>
      </OsActionsheet>

      <OsActionsheet
        title='自定义内容的 Actionsheet'
        isShow={showWithCustomContent}
        onClose={() => {
          setShowWithCustomContent(false);
        }}
      >
        <View className='custom-content'>
          <Text>这是自定义内容</Text>
        </View>
      </OsActionsheet>
    </View>
  );
}

interface Props {}
