import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";

import { OsBadgeProps } from "../../../types/index";

//组件属性
const TYPE_CLASS = {
  dot: "dot",
  info: "info",
  text: "text",
  list: "list",
};

/**
 *  get or set start
 *
 */

function getClassObjectRoot(props: OsBadgeProps) {
  const { type = "dot" } = props;

  const classObject = {
    [`ossa-badge--${TYPE_CLASS[type]}`]: TYPE_CLASS[type],
  };

  return classObject;
}

function getClassObjectChild(props) {
  const { type = "dot", info = "0" } = props;

  const classObject = {
    [`ossa-badge__info--${TYPE_CLASS[type]}`]: type,
    ["ossa-ph-badge--is-widthAuto"]: info.length > 1 || info > 9,
  };

  return classObject;
}

function getInfo(props) {
  let _info = 0;
  const { type, max = 99, info } = props;

  if (type === "dot" || type === "text" || type === "list") {
    return "";
  } else if (max) {
    _info = info > max ? max + "+" : info;
  } else {
    _info = info;
  }
  return _info;
}

/**
 *  事件 start
 *
 */
function onClick(props) {
  props.onClick && props.onClick(...arguments);
}

export default function Badge(props: OsBadgeProps) {
  /**
   *  渲染 start
   *
   */
  const rootClassName = "ossa-badge";
  const classObjectRoot = getClassObjectRoot(props);
  const classObjectChild = getClassObjectChild(props);
  const info = getInfo(props);
  const style = props.customStyle;

  return (
    <View
      className={classNames(rootClassName, classObjectRoot, props.className)}
      onClick={onClick.bind(this)}
      style={style}
    >
      {props.children}
      {props.isShow && (
        <View className={classNames(classObjectChild)}>{info}</View>
      )}
    </View>
  );
}

Badge.defaultProps = {
  isShow: true,
};

Badge.options = {
  addGlobalClass: true,
};
