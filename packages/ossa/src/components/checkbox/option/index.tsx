import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../../icon";
import { OsCheckboxOptionProps } from "../../../../types/index";
import { deprecatedProp } from "../../../utils";

function getStyleObj(props: OsCheckboxOptionProps) {
  const _styleObj = {};
  return _styleObj;
}


const mergeDisabled = (optionProps: OsCheckboxOptionProps) => {
  return deprecatedProp(
    optionProps.disabled,
    optionProps.isDisabled,
    {
      newPropName: "disabled",
      oldPropName: "isDisabled",
      moduleName: "Checkbox"
    }
  );
}

function getClassObject(props: OsCheckboxOptionProps) {
  const classObject = {
    ["ossa-checkbox__option--disabled"]: mergeDisabled(props),
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

  const mergedDisabled = mergeDisabled(props);

  const onClickOption = (optionProps: OsCheckboxOptionProps) => {
    if (mergeDisabled(optionProps)) return;
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
  if (mergedDisabled) {
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
