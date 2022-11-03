import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../../icon";
import { OsIconProps, OsRadioOptionProps } from "../../../../types/index";

// function getStyleObj(props: Props) {
//   let _styleObj = {}
//   return _styleObj;
// }

function getClassObject(props: OsRadioOptionProps) {
  const classObject = {
    ["ossa-radio__option--disabled"]: props.isDisabled,
    ["ossa-radio__option--unexec"]: props.isReadonly,
    ["ossa-radio__option--custom-label"]: props.isCustom,
    [`ossa-radio__option--dir-${props.type}`]: true,
  };
  return classObject;
}

export default function RadioOption(props: OsRadioOptionProps) {
  const rootClassName = "ossa-radio__option"; //组件
  const classObject = getClassObject(props); //组件修饰
  //const styleObject = getStyleObj(props);

  const onClickOption = (optionProps: OsRadioOptionProps) => {
    if (optionProps.isDisabled || optionProps.isReadonly) return;
    optionProps.onClick(optionProps.optionValue);
  };

  let iconType = "check";

  if (props.value === props.optionValue) {
    if (props.isReadonly) {
      iconType = "check-irrevocable";
    } else if (props.value === props.optionValue) {
      iconType = "check-selected";
    }
  }

  return (
    <View
      className={classNames([
        rootClassName,
        "ossa-radio-option-root-class",
        classObject,
        props.className,
      ])}
      onClick={() => onClickOption(props)}
    >
      <OsIcon type={iconType as OsIconProps["type"]} size={36}></OsIcon>
      <View className={classNames("ossa-radio__option-label")}>
        {props.children}
      </View>
    </View>
  );
}

RadioOption.defaultProps = {
  type: "column",
};

RadioOption.options = {
  addGlobalClass: true,
};
