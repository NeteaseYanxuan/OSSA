import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import RadioOption from "./option/index";
import { OsRadioProps, OsRadioOptionProps } from "../../../types/index";

function getStyleObj(props: OsRadioProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsRadioProps) {
  const classObject = {
    [`ossa-radio--dir-${props.type}`]: true,
  };
  return classObject;
}

function getCommonChildProps(props: OsRadioProps) {
  const childProps: Pick<OsRadioProps, "value" | "isDisabled" | "isReadonly"> =
    {};

  ["value", "isDisabled", "isReadonly"].forEach((key) => {
    if (props[key] !== undefined) {
      childProps[key] = props[key];
    }
  });
  return childProps;
}

export default function Index(props: OsRadioProps) {
  const rootClassName = "ossa-radio"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = getStyleObj(props);
  const coommonChildProps = getCommonChildProps(props);

  return (
    <View
      className={classNames(
        rootClassName,
        "ossa-radio-root-class",
        classObject,
        props.className
      )}
      style={styleObject}
    >
      <View
        className={classNames(
          "ossa-radio__options",
          props.type === "row" ? "ossa-radio__options--row" : ""
        )}
      >
        {React.Children.map(props.children, (child) => {
          return React.isValidElement(child) && child.type === RadioOption
            ? React.createElement(child.type, {
                ...(child.props as OsRadioOptionProps),
                ...coommonChildProps,
                onClick: (v) => {
                  const onClick = (child.props as OsRadioOptionProps).onClick;
                  onClick && onClick(v);
                  props.onChange && props.onChange(v);
                },
              })
            : child;
        })}
      </View>
    </View>
  );
}

Index.defaultProps = {
  type: "column",
};

Index.options = {
  addGlobalClass: true,
};
