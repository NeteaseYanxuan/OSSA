import React, { useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../../components/demoBlock";
import DemoHeader from "../../../components/demoHeader";

import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-font"]: true,
  };
  return classObject;
}

const fontConfig = [
  { size: 54, id: "large-price", desc: "使用场景: 超大强调价格等" },
  { size: 40, id: "title-protruding", desc: "行高60px, 使用场景: 突出标题等" },
  { size: 36, id: "navbar-title", desc: "行高52px, 使用场景: Navbar标题等" },
  { size: 32, id: "module-title", desc: "行高48px, 使用场景: 模块Title名等" },
  {
    size: 30,
    id: "navbar-right-title",
    desc: "行高44px, 使用场景: Navbar右上角文字按钮等",
  },
  { size: 28, id: "desc", desc: "行高40px, 使用场景: 常规描述文字等 " },
  {
    size: 28,
    id: "multi-lines",
    desc: "行高44px, 使用场景: 多文本阅读文字等 ",
  },
  { size: 24, id: "sub-desc", desc: "行高36px, 使用场景: 次要描述文字等" },
  { size: 22, id: "tag", desc: "行高32px, 使用场景: 标签文字等" },
  { size: 20, id: "tag-1", desc: "行高30px, 使用场景: 标签文字等" },
  { size: 18, id: "badge", desc: "行高24px, 使用场景: 数量角标文字等" },
];

const demoTitle = "Font 文字";
export default function Index(props: Props) {
  const classObject = getClassObject(); //组件修饰

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock title='规范'>
        <View className='block-section'>
          <View className='paragraph'>
            1.为确保移动终端的通用性，iOS平台选用 PingFang SC 作为中文字体, San
            Francisco作为数字和英文字体; Android平台选用Android默认字体。
          </View>
          <View className='paragraph'>
            2.标点符号使用半角符号 ( 切换成英文输入符号+一个空格 ) 。{" "}
          </View>
          <View className='paragraph'>
            3.文字行高用文字字号乘以1.25或1.5或1.75倍来定义,
            默认1.5倍作为标准行高, 具体行高可视界面效果灵活处理,
            最好是取4的倍数。
          </View>
          <View className='paragraph'>
            4.文字字重有Light、Regular、Semibold三种, 以Light为主,
            具体字重可视界面效果灵活处理。
          </View>
        </View>
      </DemoBlock>
      <DemoBlock title='示例'>
        {fontConfig.map((config, index) => {
          return (
            <View className='block-section' key={config.id}>
              <View
                className={classNames("layout", "layout--flex", "layout--flex--align-center")}
              >
                <View className={classNames("col", "col--2", "col--font-size")}>
                  <View className='font-size'>{config.size}px</View>
                </View>
                <View className={classNames("col", "col--10")}>
                  <View className='font-scene'>
                    <View
                      className={classNames("font-demo", `font--${config.id}`)}
                    >
                      严选好物用心生活
                    </View>
                    <View className='font-desc'>{config.desc}</View>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </DemoBlock>
    </View>
  );
}

interface Props {}
