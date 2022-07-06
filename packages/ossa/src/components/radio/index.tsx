import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { OsRadioProps } from "../../../types/index";

function getStyleObj(props: OsRadioProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsRadioProps) {
  const classObject = {
    [`ossa-radio--dir-${props.type}`]: true,
  };
  return classObject;
}

export default function Index(props: OsRadioProps) {
  const rootClassName = "ossa-radio"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = getStyleObj(props);

  return (
    <View
      className={classNames(
        rootClassName,
        "ossa-radio-root-class",
        classObject,
        props.className
      )}
      style={styleObject}
    >
      <View
        className={classNames(
          "ossa-radio__options",
          props.type === "row" ? "ossa-radio__options--row" : ""
        )}
      >
        {props.children}
      </View>
    </View>
  );
}

Index.defaultProps = {
  type: "column",
};

Index.options = {
  addGlobalClass: true,
};
