import React, { CSSProperties } from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
import { OsTagProps } from "../../../types/index";

function getStyleObj(props: OsTagProps): CSSProperties {
  const {
    type = "",
    color = "normal",
    bgColor,
    startBgColor,
    endBgColor,
    border,
  } = props;

  let _styleObj: CSSProperties = {};

  if (TagColor[color] === undefined) {
    if (type === "primary") {
      _styleObj["borderColor"] = color;
      _styleObj["backgroundColor"] = color;
    } else {
      _styleObj["color"] = color;
      _styleObj["borderColor"] = color;
    }
  }

  if (bgColor) {
    _styleObj["background"] = bgColor;
  }

  if (border) {
    _styleObj["border"] = border;
  }

  if (color) {
    _styleObj["color"] = color;
  }

  if (startBgColor && endBgColor) {
    _styleObj[
      "background-image"
    ] = `linear-gradient(225deg, ${startBgColor} 0%, ${endBgColor} 100%)`;
  }

  _styleObj = { ..._styleObj, ...props.customStyle };
  return _styleObj;
}

function getClassObject(props: OsTagProps) {
  const {
    type = "radius",
    color = "normal",
    bgColor,
    startBgColor,
    endBgColor,
    size,
  } = props;


  const classObject = {
    [`ossa-tag--type-${type}`]: TagType[type],
    [`ossa-tag--color-${color}`]: TagColor[color],
    ["ossa-tag--border-none"]: bgColor || startBgColor || endBgColor,
    [`ossa-tag--size-${size}`]: size,
  };
  return classObject;
}

export default function Tag(props: OsTagProps) {
  const { className, customStyle } = props;
  const rootClassName = "ossa-tag"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), customStyle);

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
      onClick={(e) => {
        props.onClick?.(e);
      }}
    >
      {props.type === "radius" ? (
        <View
          className='ossa-border'
          style={{
            borderColor: props.color ? props.color : "#B4B4B4",
          }}
        ></View>
      ) : null}
      <View className='ossa-tag__title'>{props.children}</View>
      {props.showArrow && (
        <OsIcon
          className='ossa-tag--arrow'
          type='arrows'
          color='inherit'
          size={18}
        ></OsIcon>
      )}
    </View>
  );
}

Tag.defaultProps = {
  type: "radius",
};

Tag.options = {
  addGlobalClass: true,
};

const TagType = {
  primary: "primary",
  radius: "radius",
};

const TagColor = {
  normal: "normal",
  warning: "warning",
  error: "error",
};
