import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../../icon";
import { OsCheckboxOptionProps } from "../../../../types/index";

function getStyleObj(props: OsCheckboxOptionProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsCheckboxOptionProps) {
  const classObject = {
    ["ossa-checkbox__option--disabled"]: props.isDisabled,
    ["ossa-checkbox__option--custom-label"]: typeof props.children !== "string",
  };
  return classObject;
}

export default function CheckboxOption(props: OsCheckboxOptionProps) {
  const { className, customStyle } = props;
  const rootClassName = "ossa-checkbox__option"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), customStyle);

  const { value = [] } = props;

  const onClickOption = (optionProps: OsCheckboxOptionProps) => {
    if (optionProps.isDisabled) return;
    let newValues = value.slice(0);
    if (value.includes(optionProps.optionValue)) {
      newValues = value.filter((v) => {
        return v !== optionProps.optionValue;
      });
    } else {
      newValues.push(optionProps.optionValue);
    }
    optionProps.onClick(newValues);
  };

  let iconType = "choose";
  let color;
  if (props.isDisabled) {
    iconType = "choose-disable";
  } else if (value.includes(props.optionValue)) {
    iconType = "choose-selected";
  }
  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
      onClick={() => onClickOption(props)}
    >
      <OsIcon type={iconType} color={color} size={36}></OsIcon>
      <View className={classNames("ossa-checkbox__option-label")}>
        {props.children}
      </View>
    </View>
  );
}

CheckboxOption.options = {
  addGlobalClass: true,
};
