import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
//
import { OsCheckboxProps } from "../../../types/index";

function getStyleObj(props: OsCheckboxProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsCheckboxProps) {
  const classObject = {};
  return classObject;
}

export default function Index(props: OsCheckboxProps) {
  const { className, customStyle } = props;
  const rootClassName = "ossa-checkbox"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), customStyle);

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
    >
      <View className="ossa-checkbox__options">{props.children}</View>
    </View>
  );
}

Index.options = {
  addGlobalClass: true,
};
