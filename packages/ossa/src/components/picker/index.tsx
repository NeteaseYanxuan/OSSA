import React, { useState } from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsPickerProps } from "../../../types/index";
import OsPickerGroup from "../common/pickerGroup";
import { PICKER_ITEM_HEIGHT as ITEM_HEIGHT } from "../common/constant";

function getStyleObj(props: OsPickerProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsPickerProps) {
  const _classObject = {};
  return _classObject;
}

export default function Index(props: OsPickerProps) {
  const rootClassName = "ossa-picker"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = getStyleObj(props);
  const [popupShow, setPopupShow] = useState(false);
  const [groupOffsetY, setGroupOffsetY] = useState(
    ITEM_HEIGHT * 2 - ITEM_HEIGHT * props.value
  );
  const onClose = () => {
    setPopupShow(false);
  };

  const onCancel = () => {
    props.onCancel && props.onCancel();
    onClose();
  };

  const onConfirm = () => {
    const newIndex = Math.round((ITEM_HEIGHT * 2 - groupOffsetY) / ITEM_HEIGHT);
    props.onConfirm && props.onConfirm(newIndex);
    onClose();
  };

  const showPopup = () => {
    setGroupOffsetY(ITEM_HEIGHT * 2 - ITEM_HEIGHT * props.value);
    setPopupShow(true);
  };

  const onGroupOffsetChange = (value) => {
    setGroupOffsetY(value);
  };

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
            <OsPickerGroup
              range={props.range}
              height={groupOffsetY}
              onUpdateHeight={onGroupOffsetChange}
            ></OsPickerGroup>
          </View>
        </View>
      </View>
    </View>
  );
}

Index.options = {
  addGlobalClass: true,
};
