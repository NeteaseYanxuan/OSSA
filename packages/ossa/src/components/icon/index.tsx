import React, { CSSProperties, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, ITouchEvent } from "@tarojs/components";
import classNames from "classnames";
import { OsIconProps } from "../../../types/index";

function getStyleObj(props: OsIconProps): CSSProperties {
  const _styleObj: CSSProperties = {};
  const { color, size, type } = props;

  if (color) {
    _styleObj["color"] = color;
  }

  if (size) {
    _styleObj["fontSize"] = Taro.pxTransform(size);
  }

  //set 特殊颜色，不在css写死
  if (
    type === "home" ||
    type === "subject" ||
    type === "classify" ||
    type === "cart" ||
    type === "user"
  ) {
    _styleObj["color"] = "#666";
  } else if (type === "grade" || type === "add-photo" || type === "check") {
    _styleObj["color"] = "#ccc";
  } else if (type === "collect-selected") {
    _styleObj["color"] = "#f48f18";
  } else if (type === "grade-selected") {
    _styleObj["color"] = "#fab646";
  } else if (type === "record") {
    _styleObj["color"] = "#ff8462";
  }

  return _styleObj;
}

function getClassObject(props: OsIconProps) {
  const { type } = props;

  const classObject = {
    [`ossa-icon--${type}`]: type,
  };

  return classObject;
}

function onClick(e: ITouchEvent, props: OsIconProps) {
  props.onClick?.(e);
}

const iconPlaceholder: Record<OsIconProps["type"], number> = {
  avatar: 3,
  "delete-input": 2,
  cart: 5,
  "cart-pressed": 5,
  "check-irrevocable": 4,
  "check-selected": 4,
  "close-h5": 3,
  "close-native-pressed": 5,
  "close-native": 5,
  invisible: 5,
  "like-selected": 2,
  "sort-high": 2,
  "sort-low": 2,
  "subject-pressed": 4,
  subject: 4,
  voice: 4,
  "voice-close": 4,
  "upload-delete": 3,
  classify: 2,
  "classify-pressed": 2,
  "share-circle": 6,
  "share-circle-pressed": 6,
  "detail-cart-pressed": 5,
  "detail-cart": 5,
  "my-group-buying-select": 4,
  "shopping-mall-select": 7,
  "shopping-mall": 7,
  richscan: 0,
  inform: 0,
  phone: 0,
  search: 0,
  return: 0,
  share: 0,
  close: 0,
  compile: 0,
  delete: 0,
  collect: 0,
  like: 0,
  grade: 0,
  choose: 0,
  record: 0,
  check: 0,
  arrows: 0,
  "search-little": 0,
  "detail-home": 0,
  "pull-down-big": 0,
  home: 0,
  user: 0,
  "my-group-buying": 0,
  "choose-disable": 0,
  "check-disable": 0,
  "add-disable": 0,
  "subtract-disable": 0,
  "arrows-disable": 0,
  "collect-selected": 0,
  "choose-selected": 0,
  "grade-selected": 0,
  "home-pressed": 0,
  "user-pressed": 0,
  "return-pressed": 0,
  "share-pressed": 0,
  "close-pressed": 0,
  "compile-pressed": 0,
  "delete-pressed": 0,
  "detail-home-pressed": 0,
  add: 0,
  service: 0,
  visible: 0,
  subtract: 0,
  photo: 0,
  sort: 0,
  "add-photo": 0,
  custom: 0,
};

export default function Icon(props: OsIconProps) {
  const rootClassName = "ossa-icon"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), props.customStyle);
  const { type, className, customIcon } = props;

  useEffect(() => {
    if(type === "custom" && !customIcon) {
      console.warn(`%c🚨 使用'custom'类型的图标时，需配合'customIcon'字段展示自定义图标`);
    }
  }, [type, customIcon]);

  // const renderIconPlaceholder

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
      onClick={(e) => onClick(e, props)}
    >
      {type === "custom" ? (
        customIcon
      ) : (
        <View>
          {Array.from({ length: iconPlaceholder[type] }).map((item, idx) => (
            <Text className={`path${idx + 1}`} key={idx} />
          ))}
        </View>
      )}
    </View>
  );
}

Icon.defaultProps = {
  type: "",
  size: 40,
};

Icon.options = {
  addGlobalClass: true,
};
