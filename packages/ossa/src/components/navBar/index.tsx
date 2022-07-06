import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
import { OsNavBarProps, OsNavBarItemProps } from "../../../types/index";

function getStyleObj(props: OsNavBarProps) {
  const _styleObj = {};

  return _styleObj;
}

function getClassObject(props: OsNavBarProps) {
  const { type, showSplitLine } = props;

  const classObject = {
    [`ossa-navbar--${type}`]: type,
    ["ossa-navbar--show-split-line"]: showSplitLine,
  };

  return classObject;
}

function onLeftIconClick(props: OsNavBarProps, item: string) {
  props.onLeftIconClick && props.onLeftIconClick(item);
}

function onLeftTextClick(props: OsNavBarProps, id: number) {
  props.onLeftTextClick && props.onLeftTextClick(id);
}

function onRightIconClick(props: OsNavBarProps, item: string) {
  props.onRightIconClick && props.onRightIconClick(item);
}

function onRightTextClick(props: OsNavBarProps, id: number) {
  props.onRightTextClick && props.onRightTextClick(id);
}

export default class NavBar extends Component<OsNavBarProps> {
  static options = {
    addGlobalClass: true,
  };

  static defaultProps = {
    type: "3column",
    showSplitLine: true,
    title: "",
    iconColor: "",
  };

  constructor(props) {
    super(props);
  }

  renderSideContent(props: OsNavBarProps, whichSide = "left") {
    const {
      type,
      iconColor,
      leftIcons,
      leftTexts,
      leftSlot,
      rightIcons,
      rightTexts,
      rightSlot,
    } = props;

    const icon = {
      left: leftIcons,
      right: rightIcons,
    };

    const text = {
      left: leftTexts,
      right: rightTexts,
    };

    const slot = {
      left: leftSlot,
      right: rightSlot,
    };

    const iconHandler = {
      left: onLeftIconClick,
      right: onRightIconClick,
    };

    const textHandler = {
      left: onLeftTextClick,
      right: onRightTextClick,
    };

    if (type !== "custom" && slot[whichSide]) {
      return (
        <View className={`ossa-navbar--${whichSide}`}>{slot[whichSide]}</View>
      );
    }

    if (type !== "custom") {
      return (
        <View className={`ossa-navbar--${whichSide}`}>
          {icon[whichSide] && (
            <View className={`ossa-navbar__${whichSide}Icons`}>
              {icon[whichSide].map((item: string) => (
                <OsIcon
                  type={item}
                  color={iconColor}
                  key={item}
                  size={40}
                  customStyle={{ verticalAlign: "top" }}
                  onClick={() => iconHandler[whichSide](props, item)}
                ></OsIcon>
              ))}
            </View>
          )}
          {text[whichSide] && (
            <View className={`ossa-navbar__${whichSide}Txts`}>
              {text[whichSide].map((item: OsNavBarItemProps) => (
                <Text
                  className={`ossa-navbar__${whichSide}Txt`}
                  key={item.id}
                  onClick={() => textHandler[whichSide](props, item.id)}
                >
                  {item.text}
                </Text>
              ))}
            </View>
          )}
        </View>
      );
    }
  }

  render() {
    const props = this.props;
    const rootClassName = "ossa-navbar"; //组件
    const classObject = getClassObject(props); //组件修饰
    const styleObject = Object.assign(getStyleObj(props), props.customStyle);
    const { type, title, middleSlot } = props;

    return (
      <View
        className={classNames(rootClassName, classObject, props.className)}
        style={styleObject}
      >
        {this.renderSideContent(props, "left")}
        {type !== "2column" && type !== "custom" && (
          <View className="ossa-navbar--middle">
            {middleSlot
              ? middleSlot
              : title && <View className="ossa-navbar__title">{title}</View>}
          </View>
        )}
        {this.renderSideContent(props, "right")}
        {type === "custom" && props.children}
      </View>
    );
  }
}
