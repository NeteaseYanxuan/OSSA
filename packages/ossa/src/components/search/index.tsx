import React, { useState } from "react";
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

function onClear(setCurrent: Function, setFocus: Function) {
  setFocus(false);
  setCurrent("");
}

function onCancel(setCurrent: Function, setFocus: Function) {
  setCurrent("");
  setFocus(false);
}

function onChange(e: any, props: OsSearchProps, setCurrent: Function) {
  //alert(1);
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

export default function Index(props: OsSearchProps) {
  const rootClassName = "ossa-search"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), props.customStyle);
  const [current = "", setCurrent] = useState(props.value);
  const [focus, setFocus] = useState(false);
  const { color, placeholder, className } = props;

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
            className={classNames("ossa-search__input")}
            type='text'
            focus={focus}
            confirmType='search'
            value={current}
            placeholder={focus ? placeholder : ""}
            // onKeyup={(e)=>onChange(e, props, setCurrent)}
            onInput={(e) => onChange(e, props, setCurrent)}
            onConfirm={(e) => onConfirm(e, props, current)}
            onBlur={(e) => onBlur(e, props)}
            onFocus={(e) => onFocus(e, props, setFocus)}
            style={{ color: color }}
            placeholderClass='ossa-search__input--placehoder-style'
          ></Input>
          {!current && (
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
        {current.length > 0 && focus && (
          <OsIcon
            type='delete-input'
            customStyle={{
              marginLeft: Taro.pxTransform(20),
              marginRight: Taro.pxTransform(20),
            }}
            size={28}
            color='#cccccc'
            onClick={() => onClear(setCurrent, setFocus)}
          ></OsIcon>
        )}
      </View>
      {focus && (
        <Text
          className='ossa-search--cancel'
          style={{ color: color }}
          onClick={() => onCancel(setCurrent, setFocus)}
        >
          取消
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
};

Index.options = {
  addGlobalClass: true,
};
