import React, { CSSProperties, useState } from "react";
import { ITouchEvent, View } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
import { OsListProps } from "../../../types/index";

const initialActive = false;

function getStyleObj(props: OsListProps, active: boolean): CSSProperties {
  const _styleObj: CSSProperties = {};
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

function getColorStyleObject(props: OsListProps): CSSProperties {
  const { descColor } = props;
  const _styleObj: CSSProperties = {};

  if (descColor) {
    _styleObj["color"] = descColor;
  }

  return _styleObj;
}

function getClassObject(props: OsListProps, active: boolean) {
  const { type, subTitle, rightIcon, leftIcon, desc, showSplitLine } = props;
  const _classObject = {
    [`ossa-list--${type}`]: type,
    ["ossa-list--is-hasSubTitle"]: subTitle,
    ["ossa-list--is-hasIcon"]: rightIcon,
    ["ossa-list--is-hasLeftIcon"]: leftIcon,
    ["ossa-list--is-hasDesc"]: desc,
    ["ossa-list--is-active"]: active,
    ["ossa-list--is-show-split-line"]: showSplitLine,
  };

  return _classObject;
}

function onClick(e: ITouchEvent, props: OsListProps) {
  props.onClick?.(e);
}

function onTouchstart(
  props: OsListProps,
  setActive: Function,
  active: boolean
) {
  setActive(true);
}

function onTouchEnd(props: OsListProps, setActive: Function, active: boolean) {
  setActive(false);
}

export default function List(props: OsListProps) {
  const rootClassName = "ossa-list"; //组件
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
        <View className='ossa-list__leftIcon'>
          <OsIcon
            type={leftIcon}
            size={leftIconSize}
            customStyle={{ verticalAlign: "top" }}
            customIcon={props.leftCustomIcon}
          ></OsIcon>
        </View>
      )}

      {(title || subTitle) && (
        <View className='ossa-list__box'>
          {title && (
            <View
              className={classNames("ossa-list__title", "ossa-title-class")}
            >
              {title}
            </View>
          )}
          {subTitle && (
            <View
              className={classNames(
                "ossa-list__subTitle",
                "ossa-subtitle-class"
              )}
              style={colorStyleObject}
            >
              {subTitle}
            </View>
          )}
        </View>
      )}

      {props.children}

      {desc && (
        <View className='ossa-list__desc' style={colorStyleObject}>
          {desc}
        </View>
      )}

      {rightIcon && (
        <View className='ossa-list__rightIcon'>
          <OsIcon
            size={28}
            type={rightIcon}
            customStyle={{ verticalAlign: "top" }}
            customIcon={props.rightCustomIcon}
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
  leftIconSize: 36,
};

List.options = {
  addGlobalClass: true,
};

List.externalClasses = ["title-class", "subtitle-class"];
