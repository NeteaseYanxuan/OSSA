import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { ITouchEvent } from "@tarojs/components/types/common";
//引入组件对应的 类型文件 .d.ts
import {
  OsCommonFunction,
  OsCommonEventFunction,
} from "../../../../types/common";
import { OsComponent } from "../../../../types/base";

function getStyleObj(props: OsPickerPopupProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsPickerPopupProps) {
  const _classObject = {
    ["picker-popup"]: true,
    ["picker-popup--show"]: props.isShow,
  };
  return _classObject;
}

export default function Index(props: OsPickerPopupProps) {
  const rootClassName = "picker"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = getStyleObj(props);

  const onClose = () => {
    props.onClose && props.onClose();
  };

  const onCancel = (e: ITouchEvent) => {
    props.onCancel && props.onCancel(e);
    onClose();
  };

  const onConfirm = (e: ITouchEvent) => {
    props.onConfirm && props.onConfirm(e);
    onClose();
  };

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
    >
      <View className='picker-popup__mask' onClick={onCancel}></View>
      <View className='picker-popup__container'>
        <View className='picker-popup__header'>
          <View
            className={classNames(
              "picker-popup__btn",
              "picker-popup__btn-cancel"
            )}
            onClick={onCancel}
          >
            取消
          </View>
          <View
            className={classNames(
              "picker-popup__btn",
              "picker-popup__btn-confirm"
            )}
            onClick={onConfirm}
          >
            确定
          </View>
        </View>
        <View className='picker-popup__body'>{props.children}</View>
      </View>
    </View>
  );
}

export interface OsPickerPopupProps extends OsComponent {
  isShow: boolean;
  onCancel?: OsCommonEventFunction;
  onConfirm?: OsCommonEventFunction;
  onClose?: OsCommonFunction;
}

Index.defaultProps = {
  isShow: false,
  children: null,
};
