import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
import { OsRadioOptionProps } from "../../../types/index";
import { deprecatedProp } from "../../utils";

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

  const unClickable = (optionProps: OsRadioOptionProps) => {
    const mergedDisabled = deprecatedProp(
      optionProps.disabled,
      optionProps.isDisabled,
      {
        newPropName: "disabled",
        oldPropName: "isDisabled",
        moduleName: "Radio"
      }
    );
    const mergedReadonly = deprecatedProp(
      optionProps.readonly,
      optionProps.isReadonly,
      {
        newPropName: "readonly",
        oldPropName: "isReadonly",
        moduleName: "Radio"
      }
    );
    return mergedDisabled || mergedReadonly;
  }

  
  const mergedReadonly = deprecatedProp(
    props.readonly,
    props.isReadonly,
    {
      newPropName: "readonly",
      oldPropName: "isReadonly",
      moduleName: "Radio"
    }
  );

  const onClickOption = (optionProps: OsRadioOptionProps) => {
    if (unClickable(optionProps)) return;
    optionProps.onClick?.(optionProps.optionValue);
  };

  let iconType = "check";

  if (props.value === props.optionValue) {
    if (mergedReadonly) {
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
      <OsIcon type={iconType} size={36}></OsIcon>
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
