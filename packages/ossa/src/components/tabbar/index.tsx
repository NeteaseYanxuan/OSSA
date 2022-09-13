import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
import { OsTabBarProps, OsTabBarItemProps } from "../../../types/index";

function getItemStyleObj(props: OsTabBarProps, index: number, current: number) {
  const _styleObj = {};
  const { activeColor, defaultColor } = props;

  if (index === current) {
    _styleObj["color"] = activeColor;
  } else {
    _styleObj["color"] = defaultColor;
  }

  return _styleObj;
}

function getClassObject(props: OsTabBarProps) {
  const { isfixedBt } = props;
  const _classObject = {
    ["ossa-tabbar--is-fixedBt"]: isfixedBt,
  };

  return _classObject;
}

function getTextStyleObj(props: OsTabBarProps) {
  const { space } = props;
  const _styleObj = {};

  if (space) {
    _styleObj["marginTop"] = Taro.pxTransform(space) + "px";
  }

  return _styleObj;
}

function onClick(
  props: OsTabBarProps,
  setCurrent: Function,
  item: OsTabBarItemProps,
  index: number
) {
  setCurrent(index);
  props.onClick && props.onClick(item);
}

export default function TabBar(props: OsTabBarProps) {
  const rootClassName = "ossa-tabbar"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = props.customStyle;
  const textStyle = getTextStyleObj(props);
  const { tabsArr } = props;
  const [current = 0, setCurrent] = useState(props.value);

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
    >
      {tabsArr.map((item: OsTabBarItemProps, index: number) => (
        <View
          className='ossa-tabbar__item'
          key={index}
          style={getItemStyleObj(props, index, current)}
          onClick={() => onClick(props, setCurrent, item, index)}
        >
          {item.useCustomIcon ? (
            index === current ? (
              item.selectedIcon
            ) : (
              item.icon
            )
          ) : (
            <OsIcon
              size={40}
              type={
                index === current
                  ? (item.selectedIcon as string)
                  : (item.icon as string)
              }
              color='inherit'
            ></OsIcon>
          )}
          <Text className='ossa-tabbar__txt' style={textStyle}>
            {item.text}
          </Text>
        </View>
      ))}
    </View>
  );
}

TabBar.defaultProps = {
  isfixedBt: false,
  tabsArr: [],
  activeColor: "#DD1A21",
  defaultColor: "#7f7f7f",
  space: 0,
  value: 0,
};

TabBar.options = {
  addGlobalClass: true,
};
