import React from "react";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsColorProps } from "../../../types/index";
// import styles from './index.moudle.scss'

function getStyleObj(props: OsColorProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsColorProps) {
  const _classObject = {};
  return _classObject;
}

export default function Index(props: OsColorProps) {
  const rootClassName = "demo-component"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = getStyleObj(props);

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
    >
      <Text className='demo__title'>{props.title}</Text>
    </View>
  );
}

Index.defaultProps = {
  title: "我是标题",
};
