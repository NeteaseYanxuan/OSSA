import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { SwitchProps } from "../../../types/switch";

const colorDisabled = "#f4f4f4";

function getStyleObj(props: SwitchProps) {
  const _styleObj = {};
  if (!props.isDisabled && props.isChecked && props.onColor) {
    _styleObj["backgroundColor"] = props.onColor;
    _styleObj["borderColor"] = props.onColor;
  }

  if (props.isDisabled) {
    _styleObj["backgroundColor"] = colorDisabled;
    _styleObj["borderColor"] = colorDisabled;
  }
  return _styleObj;
}

function getBgOffStyleObj(props: SwitchProps) {
  const _styleObj = {};
  if (props.offColor) {
    _styleObj["backgroundColor"] = props.offColor;
    _styleObj["borderColor"] = props.offColor;
  }

  if (props.isDisabled) {
    _styleObj["backgroundColor"] = colorDisabled;
    _styleObj["borderColor"] = colorDisabled;
  }
  return _styleObj;
}

function getNodeObj(props: SwitchProps) {
  const _styleObj = {};
  if (props.nodeColor) {
    _styleObj["backgroundColor"] = props.nodeColor;
    _styleObj["borderColor"] = props.nodeColor;
  }
  return _styleObj;
}

function getClassObject(props: SwitchProps) {
  const classObject = {
    ["ossa-switch--checked"]: props.isChecked,
    ["ossa-switch--disabled"]: props.isDisabled,
  };
  return classObject;
}

export default function Index(props: SwitchProps) {
  const { className, customStyle } = props;
  const rootClassName = "ossa-switch"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), customStyle);
  const styleBgOff = getBgOffStyleObj(props);
  const styleNode = getNodeObj(props);

  const onClick = (e) => {
    if (props.isDisabled) {
      return;
    }
    props.onChange(!props.isChecked);
  };

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
      onClick={onClick}
    >
      <View className='ossa-switch__bg-off' style={styleBgOff}></View>
      <View className='ossa-switch__node' style={styleNode}></View>
    </View>
  );
}

Index.options = {
  addGlobalClass: true,
};
