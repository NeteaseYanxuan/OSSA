import React from "react";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import { OsActionsheetItemProps } from "../../../../types/index";

function getClassObject(props: OsActionsheetItemProps) {
  const _classObject = {
    ["ossa-actionsheet-item--disabled"]: props.disabled,
  };
  return _classObject;
}

function onCLickItem(props: OsActionsheetItemProps) {
  if (props.disabled) {
    return;
  }
  props.onClick && props.onClick();
}

export default function ActionsheetItem(props: OsActionsheetItemProps) {
  const rootClassName = "ossa-actionsheet-item"; //组件
  const classObject = getClassObject(props);

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      onClick={() => {
        onCLickItem(props);
      }}
    >
      <Text>{props.title}</Text>
    </View>
  );
}

ActionsheetItem.options = {
  addGlobalClass: true,
};
