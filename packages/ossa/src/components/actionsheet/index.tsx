import React from "react";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
// //引入组件对应的 类型文件 .d.ts
import { OsActionsheetProps } from "../../../types/index";
import OsIcon from "../icon";

function getClassObject(props: OsActionsheetProps) {
  const _classObject = {
    ["ossa-actionsheet--show"]: props.isShow,
  };
  return _classObject;
}

const onClose = (props: OsActionsheetProps) => {
  if (props.onClose) {
    props.onClose();
  }
};

const onClickMask = (props: OsActionsheetProps) => {
  onClose(props);
};

export default function Index(props: OsActionsheetProps) {
  const rootClassName = "ossa-actionsheet"; //组件
  const classObject = getClassObject(props); //组件修饰

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={props.customStyle}
    >
      <View className="ossa-actionsheet__mask" onClick={() => onClickMask(props)} />
      <View className="ossa-actionsheet__container">
        {props.title && (
          <View className="ossa-actionsheet__header">
            <Text className="ossa-actionsheet__title">{props.title}</Text>
            <OsIcon
              className="ossa-actionsheet__close-btn"
              size={40}
              type="close"
              onClick={() => {
                onClose(props);
              }}
            ></OsIcon>
          </View>
        )}
        <View className="ossa-actionsheet__content">{props.children}</View>
        {props.cancelText && (
          <View className="ossa-actionsheet__footer">
            <View
              className="ossa-actionsheet__cancel-btn"
              onClick={() => {
                onClose(props);
              }}
            >
              <Text>{props.cancelText}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

Index.defaultProps = {
  title: null,
  isShow: false,
  cancelText: null,
};

// Index.Item = OsActionsheetItem

Index.options = {
  addGlobalClass: true,
};
