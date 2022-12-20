import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsTabsProps } from "../../../types/index";
import { TabsConfigProvider } from "./context";

function getClassObject(props: OsTabsProps) {
  const { type } = props;

  const _classObject = {
    [`ossa-tabs--${type}`]: type,
  };

  return _classObject;
}

export default function Tabs(props: OsTabsProps) {
  const rootClassName = "ossa-tabs"; //组件
  const classObject = getClassObject(props);
  const styleObject = props.customStyle;
  //let lineStyle = null;
  const { className, type } = props;

  return (
    <TabsConfigProvider value={{type: props.type, size: props.size}}>
      <View
        className={classNames(rootClassName, classObject, className)}
        style={styleObject}
      >
        {props.renderHeader}
        <View
          className={classNames("ossa-tabs__body", `ossa-tabs--${type}__body`)}
        >
          {props.children}
        </View>
      </View>
    </TabsConfigProvider>
  );
}

Tabs.defaultProps = {
  type: "horizontal",
  size: "default",
  showSplitLine: false,
};

Tabs.options = {
  addGlobalClass: true,
  styleIsolation: "apply-shared",
};
