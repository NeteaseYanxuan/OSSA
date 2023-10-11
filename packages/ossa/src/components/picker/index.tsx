import React, { useEffect, useRef, useState } from "react";
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

export default function Index(props: OsPickerProps) {
  const rootClassName = "ossa-picker"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = getStyleObj(props);
  const [popupShow, setPopupShow] = useState(false);
  const [rangeList, setRangeList] = useState<string[][]>([[]]);
  const [valueList, setValueList] = useState<number[]>([0]);
  const [offsetYList, setOffsetYList] = useState(getInitOffsetYList(valueList));
  const isMultiSelector = props.mode === "multiSelector";
  const currentValueList = useRef<number[]>([]);

  useEffect(() => {
    const newValueList = isMultiSelector ? props.value as number[] : [props.value as number];    
    setValueList(newValueList);
    currentValueList.current = newValueList;
  }, [props.value, isMultiSelector]);

  useEffect(() => {
    const newRangeList = isMultiSelector ? props.range as string[][] : [props.range as string[]];
    setRangeList(newRangeList);
  }, [props.range, isMultiSelector])

  useEffect(() => {
    if(typeof props.isShow !== 'boolean') {
      return;
    }
    if (props.isShow) {
      showPopup();
    } else {
      setPopupShow(false);
    }
  }, [props.isShow])

  const onClose = () => {
    if(typeof props.isShow === 'boolean') {
      return;
    }
    setPopupShow(false);
  };

  const onCancel = () => {
    props.onCancel?.();
    onClose();
  };

  const getNewIndexs = () => offsetYList.map((item, index) => {
    const newIndex = getIndex(item);
    // 基于touchedEnd触发时的offset计算，会出现超出范围的情况，需要做一下修正
    if (newIndex < 0) {
      return 0;
    }
    if (newIndex >= rangeList[index].length) {
      return rangeList[index].length - 1;
    }
    return getIndex(item)
  });

  const onConfirm = () => {
    const indexs = getNewIndexs()
    props.onConfirm?.(isMultiSelector ? indexs : indexs[0]);
    onClose();
  };

  const showPopup = () => {
    setOffsetYList(getInitOffsetYList(valueList));
    setPopupShow(true);
  };

  const handleClick = () => {
    if(typeof props.isShow === 'boolean') {
      return;
    }
    showPopup();
  }

  const onGroupOffsetChange = (value, index) => {
    const newOffsetYList = offsetYList.slice();
    newOffsetYList[index] = value;
    setOffsetYList(newOffsetYList);
  };

  const onTouchEnd = () => {
    const indexs = getNewIndexs();

    if (!isSameArray(currentValueList.current, indexs)) {
      currentValueList.current = indexs;
      props.onChange?.(isMultiSelector ? indexs : indexs[0]);
    }
  }

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
    >
      <View className='ossa-picker__trigger' onClick={handleClick}>
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
