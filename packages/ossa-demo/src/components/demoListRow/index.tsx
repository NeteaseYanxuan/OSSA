import React, { useState } from "react";
import { View } from "@tarojs/components";
import { CommonEventFunction } from "@tarojs/components/types/common";
import classNames from "classnames";
import { OsIcon } from "ossaui";
import OsComponent from "ossaui/types/base";

import "./index.scss";

const initialActive = false;

function getStyleObj(props: Props, active: boolean) {
  const _styleObj = {};
  const { color, activeBgColor, bgColor } = props;

  if (color) {
    _styleObj["color"] = color;
  }

  if (active) {
    _styleObj["background"] = activeBgColor;
  } else {
    _styleObj["background"] = bgColor;
  }

  return _styleObj;
}

function getColorStyleObject(props: Props) {
  const { descColor } = props;
  const _styleObj = {};

  if (descColor) {
    _styleObj["color"] = descColor;
  }

  return _styleObj;
}

function getClassObject(props: Props, active: boolean) {
  const { type, subTitle, rightIcon, leftIcon, desc, showSplitLine } = props;
  const _classObject = {
    [`list-${type}`]: type,
    ["list--is-hasSubTitle"]: subTitle,
    ["list--is-hasIcon"]: rightIcon,
    ["list--is-hasLeftIcon"]: leftIcon,
    ["list--is-hasDesc"]: desc,
    ["list--is-active"]: active,
    ["list--is-show-split-line"]: showSplitLine,
  };

  return _classObject;
}

function onClick(e: any, props: Props) {
  props.onClick && props.onClick(e);
}

function onTouchstart(props: Props, setActive: Function, active: boolean) {
  setActive(true);
}

function onTouchEnd(props: Props, setActive: Function, active: boolean) {
  setActive(false);
}

export default function List(props: Props) {
  const rootClassName = "list"; //组件
  const [active, setActive] = useState(initialActive);
  const classObject = getClassObject(props, active); //组件修饰
  const styleObject = Object.assign(
    getStyleObj(props, active),
    props.customStyle
  );
  const colorStyleObject = getColorStyleObject(props);
  const {
    leftIcon,
    leftIconSize,
    title,
    subTitle,
    desc,
    rightIcon,
    className,
  } = props;

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
      onClick={(e) => onClick(e, props)}
      onTouchStart={() => onTouchstart(props, setActive, active)}
      onTouchEnd={() => onTouchEnd(props, setActive, active)}
    >
      {leftIcon && (
        <View className='list__leftIcon'>
          <OsIcon
            type={leftIcon}
            size={leftIconSize}
            customStyle={{ verticalAlign: "top" }}
          ></OsIcon>
        </View>
      )}

      {(title || subTitle) && (
        <View className='list__box'>
          {title && (
            <View className={classNames("list__title", "title-class")}>
              {title}
            </View>
          )}
          {subTitle && (
            <View
              className={classNames("list__subTitle", "subtitle-class")}
              style={colorStyleObject}
            >
              {subTitle}
            </View>
          )}
        </View>
      )}

      {props.children}

      {desc && (
        <View className='list__desc' style={colorStyleObject}>
          {desc}
        </View>
      )}

      {rightIcon && (
        <View className='list__rightIcon'>
          <OsIcon
            size={28}
            type={rightIcon}
            customStyle={{ verticalAlign: "top" }}
          ></OsIcon>
        </View>
      )}
    </View>
  );
}

List.defaultProps = {
  showSplitLine: true,
  color: "",
  activeBgColor: "",
  bgColor: "",
  leftIconSize: 44,
};

interface Props extends OsComponent {
  title?: string;
  type?: string;
  subTitle?: string;
  rightIcon?: string;
  leftIcon?: string;
  desc?: string;
  active?: string;
  showSplitLine?: boolean;
  color?: string;
  bgColor?: string;
  activeBgColor?: string;
  leftIconSize?: number;
  descColor?: string;
  onClick?: CommonEventFunction;
}
