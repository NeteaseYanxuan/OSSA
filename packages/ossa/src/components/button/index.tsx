import React, { CSSProperties, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Button as TaroButton, ITouchEvent } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
import { OsButtonProps } from "../../../types/index";

type RequiredOsButtonProps = Required<OsButtonProps>;

//组件属性
const TYPE_CLASS: Record<RequiredOsButtonProps["type"], string> = {
  default: "default",
  primary: "primary",
  special1: "special1",
  special2: "special2",
};

const SIZE_CLASS: Record<RequiredOsButtonProps["size"], string> = {
  min: "min",
  small: "small",
  normal: "normal",
  large: "large",
  block: "block",
};

const initialActive = false;
function getClassObject(props: OsButtonProps, active: boolean) {
  const {
    size = "normal",
    type = "default",
    disabled = false,
    shape = "round",
  } = props;

  const _isDisabled = "ossa-button--is-disabled";
  const _buttonCircle = "ossa-button--circle";
  const _isActive = "ossa-button--is-active";
  const _buttonSize = `ossa-button--${SIZE_CLASS[size]}`;
  const _buttonType = `ossa-button--${TYPE_CLASS[type]}`;

  const _classObject = {
    [_buttonSize]: getSize(props, SIZE_CLASS[size]),
    [_isDisabled]: disabled,
    [_buttonType]: TYPE_CLASS[type],
    [_buttonCircle]: shape === "round",
    [_isActive]: active,
  };

  return _classObject;
}

function getStyleObj(props: OsButtonProps): CSSProperties {
  const { type, color, bdColor, bgColor, startBgColor, endBgColor } = props;
  const _styleObj: CSSProperties = {};

  if (color) {
    _styleObj["color"] = color;
  }

  if (bdColor) {
    _styleObj["border-color"] = bdColor;
  }

  if (bgColor) {
    _styleObj["background"] = bgColor;
  }

  if (startBgColor && endBgColor && type === "primary") {
    _styleObj[
      "background-image"
    ] = `linear-gradient(225deg, ${startBgColor} 0%, ${endBgColor} 100%)`;
  }

  return _styleObj;
}

function getSize(props: OsButtonProps, size: string): string {
  const { type } = props;
  if (type === "special1" || type === "special2") {
    return "";
  }
  return size;
}

function onClick(e: ITouchEvent, props: OsButtonProps): void {
  if (!props.disabled) {
    props.onClick?.(e);
  }
}

function onTouchStart(
  props: OsButtonProps,
  setActive: Function,
  active: boolean
) {
  if (!props.disabled) {
    setActive(!active);
  }
}

function onTouchEnd(
  props: OsButtonProps,
  setActive: Function,
  active: boolean
) {
  if (!props.disabled) {
    setActive(!active);
  }
}

export default function Button(props: OsButtonProps) {
  const rootClassName = "";
  const [active, setActive] = useState(initialActive);
  const classObject = getClassObject(props, active);
  const styleObject = Object.assign(getStyleObj(props), props.customStyle);
  const { icon, className, size, type, ...otherProps } = props;
  const iconComponent = icon && (
    <OsIcon
      type={icon}
      customIcon={props.customIcon}
      customStyle={{
        color: "inherit",
        marginRight:
          size === "block" || size === "large"
            ? Taro.pxTransform(16)
            : Taro.pxTransform(4),
      }}
    ></OsIcon>
  );

  return (
    <TaroButton
      {...otherProps}
      className={classNames(
        "ossa-button",
        "ossa-button2",
        rootClassName,
        classObject,
        className
      )}
      style={styleObject}
      onClick={(e) => onClick(e, props)}
      onTouchStart={() => onTouchStart(props, setActive, active)}
      onTouchEnd={() => onTouchEnd(props, setActive, active)}
    >
      {iconComponent}
      <View className='ossa-button__text'>{props.children}</View>
      {/* { active && (props.type === 'default') && <View className='button--is-active' style={{background: props.bdColor}}></View>}
      { active && (props.type === 'primary') && <View className='button--is-active'></View>} */}
    </TaroButton>
  );
}

Button.defaultProps = {
  type: "default",
  size: "normal",
  disabled: false,
  circle: true,
  shape: "square",
};

Button.options = {
  addGlobalClass: true,
};
