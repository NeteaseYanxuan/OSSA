import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
import { OsRateProps } from "../../../types/index";

function getStyleObj(props: OsRateProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsRateProps) {
  let _classObject = {};
  const { type } = props;

  _classObject = {
    [`ossa-rate--is-${type}`]: type,
  };

  return _classObject;
}

function getCounts(props: OsRateProps, current: number) {
  const { options = [] } = props;

  const _counts: any = [];
  for (let i = 0; i < options.length; i++) {
    _counts.push({
      value: i,
      selected: i <= current ? true : false,
      txt: options[i],
    });
  }
  return _counts;
}

function getResult(props: OsRateProps, current: number) {
  const { options = [] } = props;

  return options[current];
}

function onClick(
  props: OsRateProps,
  item: object,
  index: number,
  setCurrent: Function
) {
  const { onChange } = props;

  setCurrent(index);
  onChange?.(item);
}

export default function Rate(props: OsRateProps) {
  const rootClassName = "ossa-rate"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), props.customStyle);
  const [current, setCurrent] = useState(props.value);
  const counts = getCounts(props, current || 0);
  const result = getResult(props, current || 0);
  const {
    type,
    title,
    icon,
    selectedIcon,
    color,
    selectedIconColor,
    className,
    isShowResult,
  } = props;
  const _size = type === "small" ? 24 : 48;

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
    >
      {title && <Text className='ossa-rate__title'>{title}</Text>}
      <View
        className='ossa-rate__list'
        style={{ height: Taro.pxTransform(_size) }}
      >
        {counts.map((item: any, index: number) => (
          <View
            className='ossa-rate__icon'
            key={item.value}
            onClick={() => {
              onClick(props, item, index, setCurrent);
            }}
            style={{ width: Taro.pxTransform(_size) }}
          >
            <OsIcon
              size={_size}
              type={item.selected ? selectedIcon : icon}
              color={item.selected ? selectedIconColor : color}
              customStyle={{ verticalAlign: "top" }}
            ></OsIcon>
          </View>
        ))}
      </View>
      {isShowResult && <Text className='ossa-rate__txt'>{result}</Text>}
    </View>
  );
}

Rate.defaultProps = {
  selectedIcon: "grade-selected",
  icon: "grade",
  color: "#CCCCCC",
  selectedIconColor: "#FAB646",
  options: ["非常差", "差", "一般吧", "满意", "非常满意"],
  value: 0,
  type: "default",
  isShowResult: true,
};

Rate.options = {
  addGlobalClass: true,
};
