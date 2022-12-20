import React, { useContext } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { OsTabsHeaderProps } from "../../../types";
import { TabsConfig, tabsConfigContext } from "../tabs/context";

function getStyleObject(props: OsTabsHeaderProps & TabsConfig) {
  const { space, type } = props;
  const _styleObject = {};

  if (space) {
    _styleObject["padding"] = `${type ===  "vertical" ? Taro.pxTransform(space) : 0} ${type ===  "horizontal" ? Taro.pxTransform(space) : 0}`;
  }
  return _styleObject;
}

function getClassObject(props: OsTabsHeaderProps & TabsConfig) {
  const { showSplitLine, scroll, type, size } = props;
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
  const tabsConfig = useContext(tabsConfigContext);
  const classObject = getClassObject({...props, ...tabsConfig});
  const styleObject = getStyleObject({...props, ...tabsConfig});

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
