import React, { CSSProperties } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsLoadingProps } from "../../../types/index";

function getStyleObj(props: OsLoadingProps): CSSProperties {
  const { size } = props;
  const _styleObj: CSSProperties = {};

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

function getRingStyle(props: OsLoadingProps): CSSProperties {
  const { color, size } = props;
  const _styleObject: CSSProperties = {
    border: color ? `1PX solid ${color}` : "",
    borderColor: color ? `${color} transparent transparent transparent` : "",
    width: size ? `${Taro.pxTransform(size)}` : "",
    height: size ? `${Taro.pxTransform(size)}` : "",
  };

  return _styleObject;
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
