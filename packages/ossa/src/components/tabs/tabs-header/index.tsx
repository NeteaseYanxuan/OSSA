import React from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { OsTabsHeaderProps } from "../../../../types";

function getStyleObject(props: OsTabsHeaderProps) {
  const { space, type } = props;
  const _styleObject = {};

  if (type === "horizontal" && space) {
    _styleObject["padding-left"] = Taro.pxTransform(space);
    _styleObject["padding-right"] = Taro.pxTransform(space);
  }
  return _styleObject;
}

function getClassObject(props: OsTabsHeaderProps) {
  const { type, size, showSplitLine, scroll } = props;
  const _classObject = {
    [`ossa-tabs-header--${type}`]: size,
    [`ossa-tabs-header--${type}--${size}`]: size,
    ["ossa-tabs-header--show-split-line"]: showSplitLine,
    ["ossa-tabs-header--is-scroll"]: scroll,
  };
  return _classObject;
}

export default function Index(props: OsTabsHeaderProps) {
  const { className, customStyle, bgColor } = props;
  const classObject = getClassObject(props);
  const styleObject = getStyleObject(props);

  return (
    <View
      className={classNames("ossa-tabs-header", classObject, className)}
      style={customStyle}
    >
      <View
        className={classNames("ossa-tabs-header__tab")}
        style={Object.assign({ background: bgColor }, styleObject)}
      >
        <View className={classNames("ossa-tabs-header__overflow")}>
          <View className={classNames("ossa-tabs-header__scroll")}>
            {props.children}
          </View>
        </View>
      </View>
    </View>
  );
}

Index.defaultProps = {
  type: "horizontal",
  size: "default",
  space: 0,
  scroll: false,
  bgColor: "#fafafa",
  showSplitLine: false,
};

Index.options = {
  addGlobalClass: true,
  styleIsolation: "apply-shared",
};
