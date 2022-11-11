import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { SwitchProps } from "../../../types/switch";
import { deprecatedProp } from "../../utils";

const colorDisabled = "#f4f4f4";

const mergeDisabled = (props: SwitchProps) => {
  return deprecatedProp(
    props.disabled,
    props.isDisabled,
    {
      newPropName: "disabled",
      oldPropName: "isDisabled",
      moduleName: "Switch"
    }
  );
}
const mergeChecked = (props: SwitchProps) => {
  return deprecatedProp(
    props.checked,
    props.isChecked,
    {
      newPropName: "checked",
      oldPropName: "isChecked",
      moduleName: "Switch"
    }
  );
}

function getStyleObj(props: SwitchProps) {
  const _styleObj = {};
  const mergedDisabled = mergeDisabled(props);
  const mergedChecked = mergeChecked(props);
  if (!mergedDisabled && mergedChecked && props.onColor) {
    _styleObj["backgroundColor"] = props.onColor;
    _styleObj["borderColor"] = props.onColor;
  }

  if (mergedDisabled) {
    _styleObj["backgroundColor"] = colorDisabled;
    _styleObj["borderColor"] = colorDisabled;
  }
  return _styleObj;
}

function getBgOffStyleObj(props: SwitchProps) {
  const mergedDisabled = mergeDisabled(props);
  const _styleObj = {};
  if (props.offColor) {
    _styleObj["backgroundColor"] = props.offColor;
    _styleObj["borderColor"] = props.offColor;
  }

  if (mergedDisabled) {
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
  const mergedDisabled = mergeDisabled(props);
  const mergedChecked = mergeChecked(props);
  const classObject = {
    ["ossa-switch--checked"]: mergedChecked,
    ["ossa-switch--disabled"]: mergedDisabled,
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
  const mergedDisabled = mergeDisabled(props);
  const mergedChecked = mergeChecked(props);
  const onClick = (e) => {
    if (mergedDisabled) {
      return;
    }
    props.onChange(!mergedChecked);
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
