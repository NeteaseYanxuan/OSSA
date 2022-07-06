import React from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsLoadingProps } from "../../../types/index";

function getStyleObj(props: OsLoadingProps) {
  const { size } = props;
  const _styleObj = {};

  if (size) {
    _styleObj["width"] = Taro.pxTransform(size);
    _styleObj["height"] = Taro.pxTransform(size);
  }

  return _styleObj;
}

function getClassObject(props: OsLoadingProps) {
  const classObject = {};
  return classObject;
}

function getRingStyle(props: OsLoadingProps) {
  const { color, size } = props;
  const _classObject = {
    border: color ? `1PX solid ${color}` : "",
    borderColor: color ? `${color} transparent transparent transparent` : "",
    width: size ? `${Taro.pxTransform(size)}` : "",
    height: size ? `${Taro.pxTransform(size)}` : "",
  };

  return _classObject;
}

export default function Loading(props: OsLoadingProps) {
  const { className, customStyle } = props;
  const rootClassName = ["ossa-loading", "ossa-loading__ring"]; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), customStyle);
  const ringStyle = getRingStyle(props);

  return (
    <View
      className={classNames(rootClassName[0], classObject, className)}
      style={styleObject}
    >
      <View className={classNames(rootClassName[1])} style={ringStyle}></View>
      <View className={classNames(rootClassName[1])} style={ringStyle}></View>
      <View className={classNames(rootClassName[1])} style={ringStyle}></View>
    </View>
  );
}

Loading.defaultProps = {
  size: 34,
  color: "#DD1A21",
};

Loading.options = {
  addGlobalClass: true,
};
