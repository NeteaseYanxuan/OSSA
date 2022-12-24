import React from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
import { OsTabBarProps, OsTabBarItemProps, OsIconProps } from "../../../types/index";
import { deprecatedProp } from "../../utils";

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
  item: OsTabBarItemProps,
  index: number
) {
  props.onClick?.(item, index);
}

export default function TabBar(props: OsTabBarProps) {
  const rootClassName = "ossa-tabbar"; //组件
  const classObject = getClassObject(props); //组件修饰
  const textStyle = getTextStyleObj(props);
  const { customStyle: styleObject, tabsArr, value: current, activeTabIdx } = props;

  const mergedActiveTabIdx = deprecatedProp(
    activeTabIdx,
    current,
    {
      newPropName: "activeTabIdx",
      oldPropName: "value",
      moduleName: "TabBar",
      defaultVal: 0
    }
  ) || 0;

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
    >
      {tabsArr.map((item: OsTabBarItemProps, index: number) => (
        <View
          className='ossa-tabbar__item'
          key={index}
          style={getItemStyleObj(props, index, mergedActiveTabIdx)}
          onClick={() => onClick(props, item, index)}
        >
          {item.useCustomIcon ? (
            index === mergedActiveTabIdx ? (
              item.selectedIcon
            ) : (
              item.icon
            )
          ) : (
            <OsIcon
              size={40}
              type={
                index === mergedActiveTabIdx
                  ? (item.selectedIcon as OsIconProps["type"])
                  : (item.icon as OsIconProps["type"])
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
};

TabBar.options = {
  addGlobalClass: true,
};
