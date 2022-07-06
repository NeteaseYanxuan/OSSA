import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsButton, OsModal } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-modal"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["isShow", "是否显示弹窗，必选", "boolean", "false"],
    },
    {
      list: ["title", "弹窗标题，可选", "string", "-"],
    },
    {
      list: ["content", "弹窗内容，可选", "string", "-"],
    },
    {
      list: ["cancelText", "取消按钮文案，可选", "string", "-"],
    },
    {
      list: ["confirmText", "确认按钮文案，可选", "string", "-"],
    },
    {
      list: ["disableCancelBtn", "置灰取消按钮，可选", "boolean", "false"],
    },
    {
      list: ["disableConfirmBtn", "置灰确认按钮，可选", "boolean", "false"],
    },
    {
      list: [
        "closeOnClickMask",
        "点击遮罩是否隐藏弹窗，可选",
        "boolean",
        "false",
      ],
    },
    {
      list: [
        "custom",
        "是否仅保留遮罩，完全自定义弹窗内容，可选",
        "boolean",
        "false",
      ],
    },
    {
      list: ["showCloseIcon", "是否显示关闭icon，可选", "boolean", "true"],
    },
    {
      list: [
        "closeIconPosition",
        "关闭icon位置，可选",
        "top-left | top-right | bottom-left | bottom-right | top | bottom",
        "top-right",
      ],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClose", "弹窗关闭时的回调，可选", "-"],
    },
    {
      list: ["onCancel", "点击取消按钮时的回调，可选", "-"],
    },
    {
      list: ["onConfirm", "弹窗确认按钮时的回调，可选", "-"],
    },
  ],
};

export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰
  const [showBase, setShowBase] = useState(false);
  const titleBase = "基础弹窗";
  const contentBase =
    "这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文";

  const [showSingleBtn, setShowSingleBtn] = useState(false);
  const titleSingleBtn = "单个按钮";
  const contentSingleBtn =
    "这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文";

  const [showSlot, setShowSlot] = useState(false);

  const [showSlot1, setShowSlot1] = useState(false);

  const [showDisabled, setShowDisabled] = useState(false);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: "Modal 对话框",
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title="Modal 对话框"></DemoHeader>
      <DemoBlock title="基础">
        <View className="block-section">
          <View className="inline-item">
            <OsButton
              onClick={() => {
                setShowBase(true);
              }}
            >
              基础
            </OsButton>
          </View>
        </View>
      </DemoBlock>
      <DemoBlock title="单个按钮">
        <View className="block-section">
          <View className="inline-item">
            <OsButton
              onClick={() => {
                setShowSingleBtn(true);
              }}
            >
              单个按钮
            </OsButton>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title="高级用法" subTitle="内容插槽自定义">
        <View className="block-section">
          <View className="inline-item">
            <OsButton
              onClick={() => {
                setShowSlot(true);
              }}
            >
              高级用法1
            </OsButton>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock subTitle="内容实例自定义">
        <View className="block-section">
          <View className="inline-item">
            <OsButton
              onClick={() => {
                setShowSlot1(true);
              }}
            >
              高级用法2
            </OsButton>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock subTitle="按钮置灰">
        <View className="block-section">
          <View className="inline-item">
            <OsButton
              onClick={() => {
                setShowDisabled(true);
              }}
            >
              高级用法3
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

      <OsModal
        title={titleBase}
        cancelText="取消"
        confirmText="确定啊"
        content={contentBase}
        isShow={showBase}
        onCancel={() => setShowBase(false)}
        onClose={() => setShowBase(false)}
        onConfirm={() => setShowBase(false)}
      ></OsModal>

      <OsModal
        title={titleSingleBtn}
        cancelText="取消"
        content={contentSingleBtn}
        isShow={showSingleBtn}
        showCloseIcon={false}
        onCancel={() => setShowSingleBtn(false)}
        onClose={() => setShowSingleBtn(false)}
        onConfirm={() => setShowSingleBtn(false)}
      ></OsModal>

      <OsModal
        cancelText="取消"
        isShow={showSlot}
        closeIconPosition="bottom"
        onCancel={() => setShowSlot(false)}
        onClose={() => setShowSlot(false)}
        onConfirm={() => setShowSlot(false)}
      >
        <View className="custom-content">
          <View className="custom-content__title">活动优惠</View>
          <View className="custom-content__row">
            <Text>套装</Text>
            <Text>-￥18.00</Text>
          </View>
          <View className="custom-content__row">
            <Text>满额减</Text>
            <Text>-￥18.00</Text>
          </View>
          <View className="custom-content__row">
            <Text>全场满额减</Text>
            <Text>-￥18.00</Text>
          </View>
        </View>
      </OsModal>

      <OsModal
        cancelText="取消"
        isShow={showSlot1}
        onCancel={() => setShowSlot1(false)}
        onClose={() => setShowSlot1(false)}
        onConfirm={() => setShowSlot1(false)}
        className="custom-demo"
      >
        <View className="custom-content-1">
          <Image
            className="custom-content-1__img"
            src="https://yanxuan.nosdn.127.net/15565188113590869.png?imageView&thumbnail=630x336&quality=95"
            mode="aspectFill"
          ></Image>
        </View>
      </OsModal>

      <OsModal
        cancelText="取消"
        confirmText="确定"
        closeOnClickMask
        isShow={showDisabled}
        disableConfirmBtn
        onCancel={() => setShowDisabled(false)}
        onConfirm={() => setShowDisabled(false)}
        onClose={() => setShowDisabled(false)}
      >
        <View className="custom-content-1">
          <Image
            className="custom-content-1__img"
            src="https://yanxuan.nosdn.127.net/15565188113590869.png?imageView&thumbnail=630x336&quality=95"
            mode="aspectFill"
          ></Image>
        </View>
      </OsModal>
    </View>
  );
}

interface Props {}
