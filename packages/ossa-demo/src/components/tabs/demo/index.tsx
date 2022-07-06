import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import Countdown from "./Countdown";
import { OsTabsHeader, OsTabsHeaderItem, OsTabsPanel, OsTabs } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-tabs"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["type", "horizontal | vertical，可选", "string", "horizontal"],
    },
    {
      list: ["renderHeader", "一个OsTabsHeader组件，必选", "OsTabsHeader", "-"],
    },
  ],
};

const initialTabsHeaderApi = {
  title: "API-TabsHeader",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["type", "horizontal | vertical，可选", "string", "horizontal"],
    },
    {
      list: ["size", "default | large，尺寸，可选", "string", "default"],
    },
    {
      list: ["showSplitLine", "是否显示分割线，可选", "boolean", "false"],
    },
    {
      list: ["scroll", "是否开启滚动，可选", "boolean", "false"],
    },
    {
      list: ["bgColor", "背景色，可选", "string", "#fafafa"],
    },
    {
      list: ["value", "当前选中索引，可选", "number", "0"],
    },
  ],
};

const initialTabsHeaderItemApi = {
  title: "API-TabsHeaderItem",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["type", "horizontal | vertical，可选", "string", "horizontal"],
    },
    {
      list: ["size", "default | large，尺寸，可选", "string", "default"],
    },
    {
      list: ["index", "该项索引，必选", "number", "-"],
    },
    {
      list: ["current", "当前索引，可选", "number", "0"],
    },
    {
      list: ["color", "文字颜色，可选", "string", "#333333"],
    },
    {
      list: ["selectedColor", "选中文字颜色，可选", "string", "#DD1A21"],
    },
    {
      list: ["text", "tab文案，可选", "string", "-"],
    },
    {
      list: ["icon", "取值参考con，可选", "string", "-"],
    },
    {
      list: ["selectIcon", "取值参考Icon，可选", "string", "-"],
    },
    {
      list: ["custom", "是否显示自定义组件，可选", "boolean", "false"],
    },
    {
      list: ["renderCustom", "自定义组件，可选", "Component", "-"],
    },
    {
      list: [
        "renderSelectedCustom",
        "选中显示的自定义组件，可选",
        "Component",
        "-",
      ],
    },
  ],
};

// const initialListEvent = {
//   title: 'Event',
//   head: ['函数名', '说明', '参数'],
//   data: [
//     {
//       list: ['onClick', '点击时触发', '当前选中索引']
//     }
//   ]
// }
// const initialTabsArr4 = [
//   {
//     text: '标签1'
//   },
//   {
//     text: '标签2'
//   }
// ]
// const initialTabsArr = [
//   {
//     text: '标签1'
//   },
//   {
//     text: '标签2'
//   },
//   {
//     text: '标签3'
//   },
//   {
//     text: '标签4'
//   },
//   {
//     text: '标签5'
//   }
// ];

const initialTabsArr2 = [
  {
    text: "标签1",
    icon: "inform",
    selectedIcon: "inform",
  },
  {
    text: "标签2",
    icon: "phone",
    selectedIcon: "phone",
  },
  {
    text: "标签3",
    icon: "sort",
    selectedIcon: "sort-high",
  },
  {
    text: "标签4",
    icon: "collect",
    selectedIcon: "collect",
  },
  {
    text: "标签5",
    icon: "arrows",
    selectedIcon: "arrows",
  },
];

const initialTabsArr1 = [
  {
    text: "标签1",
  },
  {
    text: "标签2",
  },
  {
    text: "标签3",
  },
  {
    text: "标签4",
  },
  {
    text: "标签5",
  },
  {
    text: "标签6",
  },
  {
    text: "标签7",
  },
  {
    text: "标签8",
  },
  {
    text: "标签9",
  },
  {
    text: "标签10",
  },
  {
    text: "标签11",
  },
  {
    text: "标签12",
  },
  {
    text: "标签13",
  },
  {
    text: "标签14",
  },
  {
    text: "标签15",
  },
  {
    text: "标签16",
  },
  {
    text: "标签17",
  },
  {
    text: "标签18",
  },
  {
    text: "标签19",
  },
  {
    text: "标签20",
  },
  {
    text: "标签21",
  },
  {
    text: "标签22",
  },
];

const initialTabsArr3 = [
  {
    text: "标签1",
  },
  {
    text: "标签2",
  },
  {
    text: "标签3",
  },
  {
    text: "标签4",
  },
  {
    text: "标签5",
  },
  {
    text: "标签6",
  },
  {
    text: "标签7",
  },
  {
    text: "标签8",
  },
  {
    text: "标签9",
  },
  {
    text: "标签10",
  },
  {
    text: "标签11",
  },
  {
    text: "标签12",
  },
  {
    text: "标签13",
  },
  {
    text: "标签14",
  },
  {
    text: "标签15",
  },
  {
    text: "标签16",
  },
  {
    text: "标签17",
  },
  {
    text: "标签18",
  },
  {
    text: "标签19",
  },
];

function onClick(current: number, setCurrent: Function) {
  setCurrent(current);
}

function onClick1(current: number, setCurrent1: Function) {
  setCurrent1(current);
}

function onClick2(current: number, setCurrent2: Function) {
  setCurrent2(current);
}

function onClick3(current: number, setCurrent3: Function) {
  setCurrent3(current);
}

function onClick4(current: number, setCurrent4: Function) {
  setCurrent4(current);
}

const demoTitle = "Tab 选项卡";
export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);
  // const [listEvent] = useState(initialListEvent);
  const [listTabsHeaderApi] = useState(initialTabsHeaderApi);
  const [listTabsHeaderItemApi] = useState(initialTabsHeaderItemApi);
  // const [tabsArr] = useState(initialTabsArr)
  const [tabsArr1] = useState(initialTabsArr1);
  const [tabsArr2] = useState(initialTabsArr2);
  const [tabsArr3] = useState(initialTabsArr3);
  // const [tabsArr4] = useState(initialTabsArr4)
  const [current, setCurrent] = useState(0);
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);
  const [current3, setCurrent3] = useState(0);
  const [current4, setCurrent4] = useState(0);
  const classObject = getClassObject(); //组件修饰

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>

      <DemoBlock title="基础（均分）" fullScreen>
        <OsTabs
          renderHeader={
            <OsTabsHeader value={current}>
              <OsTabsHeaderItem
                index={0}
                current={current}
                text="标签1"
                onClick={(value) => onClick(value, setCurrent)}
              />
              <OsTabsHeaderItem
                index={1}
                current={current}
                text="标签2"
                onClick={(value) => onClick(value, setCurrent)}
              />
              <OsTabsHeaderItem
                index={2}
                current={current}
                text="标签3"
                onClick={(value) => onClick(value, setCurrent)}
              />
              <OsTabsHeaderItem
                index={3}
                current={current}
                text="标签4"
                onClick={(value) => onClick(value, setCurrent)}
              />
              <OsTabsHeaderItem
                index={4}
                current={current}
                text="标签5"
                onClick={(value) => onClick(value, setCurrent)}
              />
            </OsTabsHeader>
          }
        >
          <OsTabsPanel
            current={current}
            index={0}
            customStyle={{ height: Taro.pxTransform(400) }}
          >
            <View className="tabs__content">标签1内容区域</View>
          </OsTabsPanel>
          <OsTabsPanel
            current={current}
            index={1}
            customStyle={{ height: Taro.pxTransform(400) }}
          >
            <View className="tabs__content">标签2内容区域</View>
          </OsTabsPanel>
          <OsTabsPanel
            current={current}
            index={2}
            customStyle={{ height: Taro.pxTransform(400) }}
          >
            <View className="tabs__content">标签3内容区域</View>
          </OsTabsPanel>
          <OsTabsPanel
            current={current}
            index={3}
            customStyle={{ height: Taro.pxTransform(400) }}
          >
            <View className="tabs__content">标签4内容区域</View>
          </OsTabsPanel>
          <OsTabsPanel
            current={current}
            index={4}
            customStyle={{ height: Taro.pxTransform(400) }}
          >
            <View className="tabs__content">标签5内容区域</View>
          </OsTabsPanel>
        </OsTabs>
      </DemoBlock>

      <DemoBlock title="tab左右留间距后均分" fullScreen>
        <OsTabs
          size="large"
          renderHeader={
            <OsTabsHeader
              size="large"
              bgColor="#fff"
              space={60}
              value={current4}
            >
              <OsTabsHeaderItem
                size="large"
                index={0}
                current={current4}
                custom
                renderCustom={<Text>标签1</Text>}
                renderSelectedCustom={<Countdown />}
                onClick={(value) => onClick4(value, setCurrent4)}
              />
              <OsTabsHeaderItem
                size="large"
                index={1}
                current={current4}
                text="标签2"
                onClick={(value) => onClick4(value, setCurrent4)}
              />
            </OsTabsHeader>
          }
        >
          <OsTabsPanel
            current={current4}
            index={0}
            customStyle={{ height: Taro.pxTransform(400) }}
          >
            <View className="tabs__content">标签1内容区域</View>
          </OsTabsPanel>
          <OsTabsPanel
            current={current4}
            index={1}
            customStyle={{ height: Taro.pxTransform(400) }}
          >
            <View className="tabs__content">标签2内容区域</View>
          </OsTabsPanel>
        </OsTabs>
      </DemoBlock>

      <DemoBlock title="横向超过5个（开启横向滚动）" fullScreen>
        <OsTabs
          renderHeader={
            <OsTabsHeader scroll>
              {tabsArr1.map((item, index) => (
                <OsTabsHeaderItem
                  index={index}
                  current={current1}
                  key={item.text}
                  text={item.text}
                  onClick={(value) => onClick1(value, setCurrent1)}
                />
              ))}
            </OsTabsHeader>
          }
        >
          {tabsArr1.map((item: any, index: number) => (
            <OsTabsPanel
              key={item.text}
              current={current1}
              index={index}
              customStyle={{ height: Taro.pxTransform(400) }}
            >
              <View className="tabs__content">标签{index + 1}内容区域</View>
            </OsTabsPanel>
          ))}
        </OsTabs>
      </DemoBlock>

      <DemoBlock title="竖状(高度超过一屏，开启竖向滚动)" fullScreen>
        <OsTabs
          type="vertical"
          renderHeader={
            <OsTabsHeader type="vertical" scroll>
              {tabsArr3.map((item, index) => (
                <OsTabsHeaderItem
                  type="vertical"
                  index={index}
                  current={current3}
                  key={item.text}
                  text={item.text}
                  onClick={(value) => onClick3(value, setCurrent3)}
                />
              ))}
            </OsTabsHeader>
          }
        >
          {tabsArr3.map((item: any, index: number) => (
            <OsTabsPanel
              key={item.text}
              current={current3}
              index={index}
              customStyle={{
                height: Taro.pxTransform(400),
                width: "100%",
                padding: "100PX 50PX",
              }}
            >
              <View className="tabs__content">标签{index + 1}内容区域</View>
            </OsTabsPanel>
          ))}
        </OsTabs>
      </DemoBlock>

      <DemoBlock title="带icon" fullScreen>
        <OsTabs
          renderHeader={
            <OsTabsHeader>
              {tabsArr2.map((item, index) => (
                <OsTabsHeaderItem
                  index={index}
                  current={current2}
                  text={item.text}
                  key={item.icon}
                  icon={item.icon}
                  selectedIcon={item.selectedIcon}
                  onClick={(value) => onClick2(value, setCurrent2)}
                />
              ))}
            </OsTabsHeader>
          }
        >
          {tabsArr2.map((item: any, index: number) => (
            <OsTabsPanel
              current={current2}
              key={item.text}
              index={index}
              customStyle={{ height: Taro.pxTransform(400), width: "100%" }}
            >
              <View className="tabs__content">标签{index + 1}内容区域</View>
            </OsTabsPanel>
          ))}
        </OsTabs>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listTabsHeaderApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listTabsHeaderItemApi}></DemoTable>
      </DemoBlock>
    </View>
  );
}

interface Props {}
