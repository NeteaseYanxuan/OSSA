import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import {
  View,
  Text,
  Input,
  Textarea,
  ITouchEvent,
  BaseEventOrig,
  TextareaProps,
  InputProps,
} from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
import { OsInputProps } from "../../../types/index";
import { isAndroid } from "../common/util";

function getClassObject(props: OsInputProps) {
  const classObject = {
    [`ossa-input--type-${props.type}`]: true,
    ["ossa-input--underline"]: props.showSplitLine && props.type !== "bankcard",
    ["ossa-input--disabled"]: props.isDisabled,
  };
  return classObject;
}

const onInput = (
  props: OsInputProps,
  e: BaseEventOrig<
    TextareaProps.onInputEventDetail | InputProps.inputEventDetail
  >
) => {
  let value = e.detail.value;
  if (props.type === "bankcard") {
    value = value.replace(/(\s)/g, "");
  }
  if (props.onChange) {
    props.onChange(value);
  }
};

const onClickDeleteIcon = (props: OsInputProps) => {
  if (props.onChange) {
    props.onChange("");
  }
};

export default function OsInput(props: OsInputProps) {
  const rootClassName = ["ossa-input"]; //组件
  const classObject = getClassObject(props); //组件修饰
  const [showPassword, setShowPassword] = useState(false);
  const value = props.value || "";
  let iptType: "text" | "number" | "idcard" | "digit" = "text";
  if (props.type === "number" || props.type === "bankcard") {
    iptType = "digit";
  }

  useEffect(() => {
    if (
      !(props.type === "textarea" && props.maxLength && props.maxLength > 0)
    ) {
      return;
    }
    if (props.maxLength >= value.length) {
      return;
    }

    if (!props.onChange) {
      return;
    }
    props.onChange(value.slice(0, props.maxLength));
  }, [props.value, props.type, props.maxLength, props, value]);

  const onClickVisibleIcon = () => {
    setShowPassword(!showPassword);
  };

  const onFocus = (e) => {
    if (
      Taro.getEnv() === Taro.ENV_TYPE.WEB &&
      isAndroid() &&
      props.type === "password"
    ) {
      setTimeout(() => {
        e.currentTarget &&
          e.currentTarget.scrollIntoView &&
          e.currentTarget.scrollIntoView(true);
      }, 1);
    }
    props.onFocus && props.onFocus(e);
  };

  const onBlur = (e) => {
    props.onBlur && props.onBlur(e);
  };
  const showDelIcon =
    !props.isDisabled &&
    !props.isReadonly &&
    props.value &&
    props.type !== "textarea";
  const editable = !props.isReadonly && !props.isDisabled;
  const mergedShowCount = props.showCount ?? props.countDown;
  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={props.customStyle}
    >
      {props.label && (
        <Text
          className={classNames({
            ["ossa-input__label"]: true,
          })}
        >
          {props.label}
        </Text>
      )}
      <View className='ossa-input__input-wrapper'>
        {props.type === "textarea" ? (
          <Textarea
            value={value}
            className={classNames({
              ["ossa-input__input--textarea"]: true,
            })}
            maxlength={props.maxLength}
            autoHeight={false}
            showConfirmBar
            disabled={!editable}
            placeholder={props.placeholder}
            placeholderStyle={props.placeholderStyle}
            placeholderClass={props.placeholderClass}
            onInput={(e) => {
              onInput(props, e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
          ></Textarea>
        ) : (
          <Input
            value={value}
            type={iptType}
            password={!showPassword && props.type === "password"}
            className={classNames({
              ["ossa-input__input"]: true,
              ["ossa-input__input--type-password"]:
                !showPassword && props.type === "password" && value.length,
            })}
            disabled={!editable}
            placeholder={props.placeholder}
            placeholderStyle={props.placeholderStyle}
            placeholderClass={props.placeholderClass}
            onInput={(e) => {
              onInput(props, e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
          ></Input>
        )}

        {showDelIcon && (
          <View className='ossa-input__del-ico'>
            <OsIcon
              size={28}
              type='delete-input'
              onClick={() => {
                onClickDeleteIcon(props);
              }}
            ></OsIcon>
          </View>
        )}
      </View>
      {props.type === "textarea" && mergedShowCount && (
        <View className='ossa-input__count-down'>
          {Number(props.maxLength) - value.length}
        </View>
      )}
      {props.type === "password" && (
        <OsIcon
          className='ossa-input__visible-ico'
          customStyle={{ marginLeft: Taro.pxTransform(16) }}
          size={40}
          type={showPassword ? "visible" : "invisible"}
          onClick={() => {
            onClickVisibleIcon();
          }}
        ></OsIcon>
      )}
    </View>
  );
}

OsInput.defaultProps = {
  type: "text",
  placeholder: "",
  placeholderStyle: "",
  title: "",
  maxLength: 500,
  isDisabled: false,
  isReadonly: false,
  disabledClear: false,
  showSplitLine: true,
  value: "",
};

OsInput.options = {
  addGlobalClass: true,
};
