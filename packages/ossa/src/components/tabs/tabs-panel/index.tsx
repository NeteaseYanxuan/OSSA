import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsTabsPanelProps } from "../../../../types/index";

function getStyleObj(props: OsTabsPanelProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsTabsPanelProps) {
  const { index, current = 0 } = props;
  const classObject = {
    ["ossa-tabs-panel--active"]: index === current,
  };
  return classObject;
}

export default function Index(props: OsTabsPanelProps) {
  const { className, customStyle } = props;
  const rootClassName = "ossa-tabs-panel"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), customStyle);

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
    >
      <View className='ossa-tabs-panel__content'>{props.children}</View>
    </View>
  );
}

Index.defaultProps = {
  current: 0,
  index: 0,
};

Index.options = {
  addGlobalClass: true,
};
