import React, { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Input, Text } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
//引入组件对应的 类型文件 .d.ts
import { OsSearchProps } from "../../../types/index";

function getStyleObj(props: OsSearchProps) {
  const { color, bgColor, padding = 30 } = props;
  const _styleObj = {
    color: color,
    background: bgColor,
    paddingRight: Taro.pxTransform(padding),
    paddingLeft: Taro.pxTransform(padding),
  };

  return _styleObj;
}

function getClassObject(props: OsSearchProps) {
  const { showSplitLine } = props;

  const _classObject = {
    ["ossa-search--show-split-line"]: showSplitLine,
  };

  return _classObject;
}

function onClear(props: OsSearchProps, setCurrent: Function) {
  setCurrent("");
  props.onClear?.();
}

function onCancel(props: OsSearchProps, setCurrent: Function, setFocus: Function) {
  setFocus(false);
  setCurrent("");
  props.onCancel?.();
}

function onChange(e: any, props: OsSearchProps, setCurrent: Function) {
  setCurrent(e.target.value);
  props.onChange?.(e, e.target.value);
}

function onConfirm(e: any, props: OsSearchProps, current) {
  props.onConfirm?.(e, current);
}

function onBlur(e: any, props: OsSearchProps) {
  props.onBlur?.(e);
}

function onFocus(e: any, props: OsSearchProps, setFocus: Function) {
  setFocus(true);
  props.onFocus?.(e);
}

const DEAFULT_ACTION_CANCEL_TEXT = "取消";
const DEAFULT_ACTION_CONFIRM_TEXT = "搜索";

export default function Index(props: OsSearchProps) {
  const rootClassName = "ossa-search"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), props.customStyle);
  const { value, color, placeholder, className, showAction, action, actionText } = props;
  const [focus, setFocus] = useState(!!value || false);
  const [current, setCurrent] = useState(value);
  const [innerActionText, setInnerActionText] = useState(actionText);

  useEffect(() => {
    setCurrent(value);
  }, [value])

  useEffect(() => {
    if (actionText) {
      setInnerActionText(actionText);
    } else {
      setInnerActionText(action === "cancel" ? DEAFULT_ACTION_CANCEL_TEXT : DEAFULT_ACTION_CONFIRM_TEXT);
    }
  }, [action, actionText])

  const handleActionClick = (e) => {
    if (action === "cancel") {
      onCancel(props, setCurrent, setFocus);
    } else {
      onConfirm(e, props, current);
    }
  }

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
    >
      <View className='ossa-search__wrap'>
        {focus && (
          <OsIcon
            type='search-little'
            customStyle={{
              marginLeft: Taro.pxTransform(20),
              marginRight: Taro.pxTransform(8),
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            size={28}
          ></OsIcon>
        )}

        <View
          className='ossa-search__form'
          onClick={() => {
            setFocus(true);
          }}
        >
          <Input
            {...(props.taroProps || {})}
            className={classNames("ossa-search__input")}
            type='text'
            focus={focus}
            confirmType='search'
            value={current}
            placeholder={focus ? placeholder : ""}
            onInput={(e) => onChange(e, props, setCurrent)}
            onConfirm={(e) => onConfirm(e, props, current)}
            onBlur={(e) => onBlur(e, props)}
            onFocus={(e) => onFocus(e, props, setFocus)}
            style={{ color: color }}
            placeholderClass='ossa-search__input--placehoder-style'
          ></Input>
          {!focus && (
            <View
              className='ossa-search__placeholder'
              style={{ textAlign: focus ? "left" : "center" }}
              // onClick={()=>{setFocus(true)}}
            >
              {!focus && (
                <OsIcon
                  type='search-little'
                  customStyle={{
                    marginLeft: Taro.pxTransform(20),
                    marginRight: Taro.pxTransform(8),
                  }}
                  size={28}
                ></OsIcon>
              )}
              {!focus && <Text>{placeholder}</Text>}
            </View>
          )}
        </View>
        {current && focus && (
          <OsIcon
            type='delete-input'
            customStyle={{
              marginLeft: Taro.pxTransform(20),
              marginRight: Taro.pxTransform(20),
            }}
            size={28}
            color='#cccccc'
            onClick={() => onClear(props, setCurrent)}
          ></OsIcon>
        )}
      </View>
      {showAction && focus && (
        <Text
          className='ossa-search--cancel'
          style={{ color: color }}
          onClick={handleActionClick}
        >
          {innerActionText}
        </Text>
      )}
    </View>
  );
}

Index.defaultProps = {
  padding: 30,
  showSplitLine: true,
  current: "",
  color: "#333333",
  placeholder: "搜索商品，共X款好物",
  bgColor: "#FAFAFA",
  showAction: true,
  action: "cancel"
};

Index.options = {
  addGlobalClass: true,
};
