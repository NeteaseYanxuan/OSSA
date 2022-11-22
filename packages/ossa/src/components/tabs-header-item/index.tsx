import React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Block } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
import { OsTabsHeaderItemProps } from "../../../types/index";

function getStyleObject(props: OsTabsHeaderItemProps) {
  const { index, current, selectedColor, color } = props;
  const _styleObject = {};

  if (index === current) {
    _styleObject["color"] = selectedColor;
  } else {
    _styleObject["color"] = color;
  }

  return _styleObject;
}

function getClassObject(props: OsTabsHeaderItemProps, active: boolean) {
  const { type, size } = props;
  const _classObject = {
    [`ossa-tabs-item--${type}`]: type,
    [`ossa-tabs-item--${type}--${size}`]: true,
    ["ossa-tabs-item--is-active"]: active,
  };

  return _classObject;
}

function getText(text: string) {
  if (text.length > 5) {
    return text.slice(0, 5) + "...";
  }

  return text;
}

function onClick(props: OsTabsHeaderItemProps) {
  const { index } = props;
  props.onClick?.(index);
}

export default function Index(props: OsTabsHeaderItemProps) {
  const {
    className,
    customStyle,
    index,
    current = 0,
    text = "",
    custom,
    selectedColor,
    icon,
    selectedIcon,
  } = props;
  const rootClassName = "ossa-tabs-item";
  const styleObject = Object.assign(getStyleObject(props), customStyle);

  return (
    <View
      className={classNames(
        rootClassName,
        getClassObject(props, index === current),
        className
      )}
      style={styleObject}
      onClick={() => onClick(props)}
    >
      <View
        className='ossa-tabs-item__underline'
        style={{
          borderBottomColor: current === index ? selectedColor : "transparent",
        }}
      >
        <View className='ossa-tabs-item__texts'>
          {custom ? (
            index === current ? (
              props.renderSelectedCustom
            ) : (
              props.renderCustom
            )
          ) : (
            <Block>
              <Text className='ossa-tabs-item__text'>{getText(text)}</Text>
              {icon && (
                <OsIcon
                  customStyle={{
                    marginLeft: Taro.pxTransform(8),
                    verticalAlign: "initial",
                  }}
                  size={26}
                  color='inherit'
                  type={index !== current ? icon : selectedIcon}
                ></OsIcon>
              )}
            </Block>
          )}
        </View>
      </View>
    </View>
  );
}

Index.defaultProps = {
  type: "horizontal",
  size: "default",
  color: "#333333",
  selectedColor: "#dd1a21",
  text: "",
  custom: false,
};

Index.options = {
  addGlobalClass: true,
};
