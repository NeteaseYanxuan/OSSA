import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsNavBar, OsIcon, OsBadge, OsSearch, OsIconProps } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-navbar"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["type", "2column | 3column | custom，可选", "string", "3column"],
    },
    {
      list: ["title", "导航标题，可选", "ReactChild", "-"],
    },
    {
      list: [
        "middleSlot",
        "自定义左侧内容，存在时覆盖title，但比custom优先级低，可选，`middleSlot`属性将在未来的版本中被删除，请使用`title`替代",
        "any",
        "-",
      ],
    },
    {
      list: [
        "leftIcons",
        "左侧icon,取值参考OsIcon，可选",
        "Array<string>",
        "-",
      ],
    },
    {
      list: ["leftTexts", "左侧文案，可选", "Array<API-Texts>", "-"],
    },
    {
      list: [
        "leftSlot",
        "自定义左侧内容，存在时覆盖leftIcons和leftTexts，但比custom优先级低，可选",
        "ReactChild",
        "-",
      ],
    },
    {
      list: [
        "rightIcons",
        "右侧icon,取值参考OsIcon，可选",
        "Array<string>",
        "-",
      ],
    },
    {
      list: ["rightTexts", "右侧文案，可选", "Array<API-Texts>", "-"],
    },
    {
      list: [
        "rightSlot",
        "自定义左侧内容，存在时覆盖rightIcons和rightTexts，但比custom优先级低，可选",
        "ReactChild",
        "-",
      ],
    },
    {
      list: ["showSplitLine", "展示分割线，可选", "boolean", "true"],
    },
    {
      list: [
        "custom",
        "自定义整个导航，会用custom中的内容作为整个导航的内容，覆盖所有icon/text/title/slot，可选",
        "ReactChild",
        "-",
      ],
    },
    {
      list: [
        "iconColor",
        "icon的颜色，仅当使用ossa提供的icon时有效，可选",
        "string",
        "#7f7f7f",
      ],
    },
    {
      list: ["className", "自定义类名，可选", "string", "-"],
    },
    {
      list: ["customStyle", "自定义样式，可选", "object", "-"],
    },
  ],
};

const initialListAPITexts = {
  title: "API-Texts",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["id", "文案标识", "number", "-"],
    },
    {
      list: ["text", "文案", "string", "-"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onLeftIconClick", "点击左侧icon时触发", "当前点击icon的名称"],
    },
    {
      list: ["onLeftTextClick", "点击左侧文案时触发", "当前点击文案的id"],
    },
    {
      list: ["onRightIconClick", "点击右侧icon时触发", "当前点击icon的名称"],
    },
    {
      list: ["onRightTextClick", "点击右侧文案时触发", "当前点击文案的id"],
    },
  ],
};
const initialLeftIcons: OsIconProps["type"][] = ["return"];
const initialRightTxts = [{ id: 1, text: "按钮" }];
const initialLeftTxts = [{ id: 1, text: "返回" }];
const initialRightIcons3: OsIconProps["type"][] = ["search", "detail-cart"];
const initialLeftIcons3: OsIconProps["type"][] = ["detail-home"];
const initialRightTxts1 = [
  { id: 1, text: "按钮" },
  { id: 2, text: "领券" },
  { id: 3, text: "分享" },
];

function onLeftIconClick(item: string) {
  console.log("点击icon名称：" + item);
}

function onRightTextClick(id: number) {
  console.log("点击文案id：" + id);
}

function onRightIconClick(item: string) {
  console.log("点击icon名称：" + item);
}

function onLeftTextClick(id: number) {
  console.log("点击文案id：" + id);
}

const demoTitle = "NavBar 导航栏";
export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);
  const [listEvent] = useState(initialListEvent);
  const [leftIcons] = useState(initialLeftIcons);
  const [leftTexts] = useState(initialLeftTxts);
  const [rightTexts] = useState(initialRightTxts);
  const [leftIcons3] = useState(initialLeftIcons3);
  const [rightIcons3] = useState(initialRightIcons3);
  const [rightTxts1] = useState(initialRightTxts1);
  const [textsAPI] = useState(initialListAPITexts);

  const classObject = getClassObject(); //组件修饰

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock title='基础' fullScreen>
        <OsNavBar
          title='标题'
          leftIcons={leftIcons}
          rightTexts={rightTexts}
          onLeftIconClick={onLeftIconClick.bind(this)}
          onRightTextClick={onRightTextClick.bind(this)}
        ></OsNavBar>
      </DemoBlock>

      <DemoBlock title='标题自定义' fullScreen>
        <OsNavBar
          title={<>
            <OsIcon
              type='home'
              size={40}
              customStyle={{verticalAlign: "baseline"}}
            ></OsIcon>
              &nbsp;首页
          </>}
          leftIcons={leftIcons}
          rightTexts={rightTexts}
          onLeftIconClick={onLeftIconClick.bind(this)}
          onRightTextClick={onRightTextClick.bind(this)}
        ></OsNavBar>
      </DemoBlock>

      <DemoBlock fullScreen title='左侧定制'>
        <OsNavBar
          title='标题'
          leftIcons={leftIcons}
          rightTexts={rightTexts}
          leftTexts={leftTexts}
          onLeftTextClick={onLeftTextClick.bind(this)}
        ></OsNavBar>
      </DemoBlock>

      <DemoBlock fullScreen title='右侧定制'>
        <OsNavBar
          title='标题'
          leftIcons={leftIcons3}
          rightIcons={rightIcons3}
          onRightIconClick={onRightIconClick.bind(this)}
        ></OsNavBar>
      </DemoBlock>

      <DemoBlock fullScreen title='2列均分导航'>
        <OsNavBar
          type='2column'
          title='标题'
          rightTexts={rightTxts1}
        ></OsNavBar>
      </DemoBlock>

      <DemoBlock fullScreen title='自定义导航'>
        <OsNavBar type='custom' showSplitLine={false}>
          <View className='custom-nabbar'>
            <View className='navbar--left'>
              <OsIcon
                type='return'
                size={40}
                customStyle={{ verticalAlign: "top" }}
              ></OsIcon>
            </View>
            <View className='navbar--middle'>
              <OsSearch padding={0} showSplitLine={false}></OsSearch>
            </View>
            <View className='navbar--right'>
              <OsBadge type='info' info={9}>
                <OsIcon
                  type='detail-cart'
                  customStyle={{ verticalAlign: "top" }}
                ></OsIcon>
              </OsBadge>
            </View>
          </View>
        </OsNavBar>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={textsAPI}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>
    </View>
  );
}

interface Props {}
