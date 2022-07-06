import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsAnimateProps } from "../../../types/index";
//

function getStyleObj(props: OsAnimateProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsAnimateProps) {
  const { type } = props;
  const _type = `css-animate--${handleType(type)}`;
  const _animated = "css-animate--animated";
  const _classObject = {
    [_type]: type,
    [_animated]: "animated",
  };
  return _classObject;
}

function handleType(s?: string) {
  if (s) {
    return s.replace(/([A-Z])/g, "-$1").toLowerCase();
  }
}

function onClick(e: any, props: OsAnimateProps) {
  props.onClick && props.onClick(e);
}

export default function Index(props: OsAnimateProps) {
  const rootClassName = "css-animate"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = getStyleObj(props);

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
      onClick={(e) => onClick(e, props)}
    >
      {props.children}
    </View>
  );
}

Index.defaultProps = {
  type: "fadeIn",
};
