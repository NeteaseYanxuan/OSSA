import React, { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsPickerProps } from "../../../types/index";
import OsPickerGroup from "../common/pickerGroup";
import { PICKER_ITEM_HEIGHT as ITEM_HEIGHT } from "../common/constant";
import { isSameArray } from "../../utils";

function getStyleObj(props: OsPickerProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsPickerProps) {
  const _classObject = {};
  return _classObject;
}

const getInitOffsetYList = (list) => {
  return list.map(item => ITEM_HEIGHT * 2 - ITEM_HEIGHT * item);
}

const getIndex = (offsetY) => {
  return Math.round((ITEM_HEIGHT * 2 - offsetY) / ITEM_HEIGHT);
}

let currentValueList: number[] = [];

export default function Index(props: OsPickerProps) {
  const rootClassName = "ossa-picker"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = getStyleObj(props);
  const [popupShow, setPopupShow] = useState(false);
  const [rangeList, setRangeList] = useState<string[][]>([[]]);
  const [valueList, setValueList] = useState<number[]>([0]);
  const [offsetYList, setOffsetYList] = useState(getInitOffsetYList(valueList));
  const isMultiSelector = props.mode === "multiSelector";

  useEffect(() => {
    const newRangeList = isMultiSelector ? props.range as string[][] : [props.range as string[]];
    const newValueList = isMultiSelector ? props.value as number[] : [props.value as number];    
    setRangeList(newRangeList);
    setValueList(newValueList);
    currentValueList = newValueList;
  }, [props.range, props.value, isMultiSelector]);

  const onClose = () => {
    setPopupShow(false);
  };

  const onCancel = () => {
    props.onCancel?.();
    onClose();
  };

  const getNewIndexs = () => offsetYList.map(item => getIndex(item));

  const onConfirm = () => {
    const indexs = getNewIndexs()
    props.onConfirm?.(isMultiSelector ? indexs : indexs[0]);
    onClose();
  };

  const showPopup = () => {
    setOffsetYList(getInitOffsetYList(valueList));
    setPopupShow(true);
  };

  const onGroupOffsetChange = (value, index) => {
    const newOffsetYList = offsetYList.slice();
    newOffsetYList[index] = value;
    setOffsetYList(newOffsetYList);
  };

  const onTouchEnd = () => {
    const indexs = getNewIndexs();

    if (!isSameArray(currentValueList, indexs)) {
      currentValueList = indexs;
      props.onChange?.(isMultiSelector ? indexs : indexs[0]);
    }
  }

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
    >
      <View className='ossa-picker__trigger' onClick={showPopup}>
        {props.children}
      </View>
      <View
        className={classNames({
          ["ossa-picker-popup"]: true,
          ["ossa-picker-popup--show"]: popupShow,
        })}
      >
        <View
          className='ossa-picker-popup__mask'
          onClick={() => onCancel()}
        ></View>
        <View className='ossa-picker-popup__container'>
          <View className='ossa-picker-popup__header'>
            <View
              className={classNames(
                "ossa-picker-popup__btn",
                "ossa-picker-popup__btn-cancel"
              )}
              onClick={() => onCancel()}
            >
              取消
            </View>
            <View className='ossa-picker-popup__title'>
              {props.title || ""}
            </View>
            <View
              className={classNames(
                "ossa-picker-popup__btn",
                "ossa-picker-popup__btn-confirm"
              )}
              onClick={() => onConfirm()}
            >
              确定
            </View>
          </View>
          <View className='ossa-picker-popup__body'>
            {
              rangeList.map((range, index) => {
                return (
                  <OsPickerGroup
                    key={index}
                    range={range}
                    height={offsetYList[index]}
                    onUpdateHeight={(value) => onGroupOffsetChange(value, index)}
                    onTouchEnd={onTouchEnd}
                  ></OsPickerGroup>
                )
              })
            }
          </View>
        </View>
      </View>
    </View>
  );
}

Index.options = {
  addGlobalClass: true,
  mode: "selector",
};
