import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
// import './index.scss'
import "./index.scss";


/**
 * 色块展示列表项结构
 */
 export type ColorListItem = {
  /**
   * 色块颜色
   */
  color: string;
  /**
   * 色块标题，通常是该颜色的色值，如：#FFFFFF
   */
  title: string;
  /**
   * 色块的中文描述，描述该色块的用途
   */
  desc: string;
  /**
   * 边框颜色
   */
  borderColor?: string;
};


function getClassObject() {
  const classObject = {
    ["page"]: true,
    ["demo-color"]: true,
  };
  return classObject;
}

const initialColorList: ColorListItem[] = [
  {
    color: "#AF7357",
    title: "YXColorPrimary",
    desc: "主题色",
  },
  {
    color: "#DD1A21",
    title: "YXColorRed",
    desc: "品牌红色",
  },
  {
    color: "#F48F18",
    title: "YXColorYellow",
    desc: "营销色",
  },
  {
    color: "#C3945B",
    title: "YXColorSuperMember",
    desc: "超级会员相关",
  },
  {
    color: "#2BAB52",
    title: "YXColorGreen",
    desc: "成功状态色",
    borderColor: "#d9d9d9",
  },
  {
    color: "#333333",
    title: "YXColorGray1",
    desc: "主标题字色",
  },
  {
    color: "#7F7F7F",
    title: "YXColorGray2",
    desc: "次要信息字色",
  },
  {
    color: "#999999",
    title: "YXColorGray3",
    desc: "弱信息字色",
  },
  {
    color: "#CCCCCC",
    title: "YXColorGray4",
    desc: "不可用状态字色",
  },
  {
    color: "#D9D9D9",
    title: "YXColorGray5",
    desc: "描边、分割线色",
  },
  {
    color: "#F4F4F4",
    title: "YXColorBackground1",
    desc: "非卡片界面背景色",
    borderColor: "#d9d9d9",
  },
  {
    color: "##EEEEEE",
    title: "YXColorBackground2",
    desc: "卡片界面背景色",
    borderColor: "#d9d9d9",
  },
  {
    color: "#FAFAFA",
    title: "YXColorBar",
    desc: "Bar背景色",
    borderColor: "#d9d9d9",
  },
  {
    color: "#FFFFFF",
    title: "YXColorWhite",
    desc: "多场景使用",
    borderColor: "#d9d9d9",
  },
  {
    color: "#000000",
    title: "YXColorBlackMask",
    desc: "弹框背景色",
  },
];

const initialColorList1 = [
  "#DD1A21",
  "#E4484D",
  "#EB767A",
  "#F1A3A6",
  "#F8D1D3",
  "#FBE8E8",
];
const initialColorList2 = [
  "#F48F18",
  "#F6A546",
  "#F8BC74",
  "#FBD2A3",
  "#FDE9D1",
  "#FDF3E7",
];
const initialColorList3 = [
  "#CC9756",
  "#D6AC78",
  "#E0C19A",
  "#EBD5BB",
  "#F5EADD",
  "#F9F4EE",
];
const demoTitle = "Color 规范";
export default function Index(props: Props) {
  const classObject = getClassObject(); //组件修饰
  const [colorList] = useState(initialColorList);
  const [colorList1] = useState(initialColorList1);
  const [colorList2] = useState(initialColorList2);
  const [colorList3] = useState(initialColorList3);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock title='颜色分类'>
        <View
          className={classNames(
            "layout",
            "layout--flex",
            "layout--flex--space-around"
          )}
        >
          {colorList.map((item: Item) => (
            <View className={classNames("col", "col--6")} key={item.color}>
              <View className='color-item'>
                <View
                  className={
                    item.borderColor
                      ? classNames("color-item__icon", "color-item--border")
                      : "color-item__icon"
                  }
                  style={{ background: item.color }}
                ></View>
                <View className='color-item__title'>{item.title}</View>
                <View className='color-item__color'>{item.color}</View>
                <View className='color-item__desc'>{item.desc}</View>
              </View>
            </View>
          ))}
        </View>
      </DemoBlock>

      <DemoBlock title='文字链点击颜色'>
        <View
          className={classNames(
            "layout",
            "layout--flex",
            "layout--flex--space-around"
          )}
        >
          <View className={classNames("col", "col--8")}>
            <View className={classNames("font-item", "font-item--first")}>
              <View
                className='font-item__bar'
                style={{ background: "#333333" }}
              ></View>
              <View className='font-item__color'>#333333</View>
              <View className='font-item__desc'>弱文字链颜色</View>
            </View>
          </View>
          <View className={classNames("col", "col--8")}>
            <View className={classNames("font-item", "font-item--last")}>
              <View
                className='font-item__bar'
                style={{ background: "#007AFF" }}
              ></View>
              <View className='font-item__color'>#007AFF</View>
              <View className='font-item__desc'>强文字链颜色</View>
            </View>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title='颜色基础扩展'>
        <View className='color--extend'>
          <View className='color--extend-part1'>
            {colorList1.map((item) => (
              <View
                key={item}
                className='color--part1--item'
                style={{ background: item }}
              >
                {item}
              </View>
            ))}
          </View>
          <View className='color--extend-part2'>
            <View className='color--extend-part2--list1'>
              {colorList2.map((item) => (
                <View
                  key={item}
                  className='color--part1--item'
                  style={{ background: item }}
                >
                  {item}
                </View>
              ))}
            </View>
            <View className='color--extend-part2--list2'>
              {colorList3.map((item) => (
                <View
                  key={item}
                  className='color--part1--item'
                  style={{ background: item }}
                >
                  {item}
                </View>
              ))}
            </View>
          </View>
        </View>
      </DemoBlock>
    </View>
  );
}

interface Props {}

interface Item {
  title: string;
  color: string;
  desc: string;
  borderColor: string;
}
