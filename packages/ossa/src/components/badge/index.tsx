import React from "react";
import { ITouchEvent, View } from "@tarojs/components";
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
/**
 * 判断当前类型是否为无内容类型
 */
function isEmptyType(type: OsBadgeProps["type"]) {
  return type === "dot" || type === "text" || type === "list";
}
/**
 * 获取徽标中显示的实际内容
 * @param {OsBadgeProps} props 
 * @returns 
 */
function getInfo(props: OsBadgeProps): string {
  let _info = "0";
  const { type, max = 99, info } = props;

  if (isEmptyType(type)) {
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
function onClick(props: OsBadgeProps, e: ITouchEvent) {
  props.onClick && props.onClick(e);
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
  const { type = 'dot' } = props;
  // 当未传 info 或 info 值为 '0' 或 0 时应该隐藏角标
  const mergedShow = props.isShow && (isEmptyType(type) || (!!info && info !== "0"));
  const style = props.customStyle;

  return (
    <View
      className={classNames(rootClassName, classObjectRoot, props.className)}
      onClick={onClick.bind(this, props)}
      style={style}
    >
      {props.children}
      {mergedShow && (
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
