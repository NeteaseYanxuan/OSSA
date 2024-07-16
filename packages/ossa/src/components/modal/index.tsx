import React from "react";
import { View, Image, Text } from "@tarojs/components";
import classNames from "classnames";
import { OsModalProps } from "../../../types/index";
import getOpenTypeRelatedProps from "../../utils/getOpenTypeRelatedProps";
import { deprecatedProp } from "../../utils";
import Button from "../button";

const closeIconImg =
  "https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9d2d6d39f7.png?imageView";

function getStyleObj(props: OsModalProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsModalProps) {
  const _classObject = {
    ["ossa-modal--show"]: props.isShow,
  };
  return _classObject;
}

function onClose(props: OsModalProps) {
  props.onClose?.();
}

function onClickMask(props: OsModalProps) {
  if (props.closeOnClickMask) {
    onClose(props);
  }
}

function onClickCancelBtn(props: OsModalProps) {
  if (props.disableCancelBtn) {
    return;
  }
  props.onCancel?.();
  onClose(props);
}

function onClickConfirmBtn(props: OsModalProps) {
  if (props.disableConfirmBtn) {
    return;
  }
  props.onConfirm?.()
  props.closeOnConfirm && onClose(props);
}

export default function Index(props: OsModalProps) {
  const rootClassName = "ossa-modal"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = getStyleObj(props);
  const className = classNames(rootClassName, classObject, props.className);
  const openTypeRelatedProps = getOpenTypeRelatedProps(props)

  const {
    title,
    content,
    confirmText,
    cancelText,
    custom,
    showCloseIcon,
    closeable,
    closeIconPosition,
    confirmOpenType
  } = props;

  const isRenderAction = confirmText || cancelText;
  const mergedcloseable = deprecatedProp(closeable, showCloseIcon, {
    newPropName: "closeable",
    oldPropName: "showCloseIcon",
    moduleName: "Modal",
  }, true);
  const _isAbsoluteCloseIcon =
    closeIconPosition !== "top" && closeIconPosition !== "bottom";
  const _closeIcon = mergedcloseable && (
    <Image
      className={`ossa-modal-closer ossa-modal-closer--${closeIconPosition}`}
      src={closeIconImg}
      onClick={() => onClose(props)}
    />
  );
  if (props.title || props.content) {
    return (
      <View className={className} style={styleObject}>
        {_isAbsoluteCloseIcon && _closeIcon}
        <View
          onClick={(e) => onClickMask(props)}
          className='ossa-modal__mask'
        />
        <View className='ossa-modal__container'>
          {!_isAbsoluteCloseIcon && _closeIcon}
          <View className='ossa-modal__container-inner'>
            {title && (
              <View className='ossa-modal__header'>
                <Text className='ossa-modal__title'>{title}</Text>
              </View>
            )}
            {content && (
              <View className='ossa-modal__content'>
                <Text>{content}</Text>
              </View>
            )}
            {isRenderAction && (
              <View className='ossa-modal__footer'>
                {cancelText && (
                  <Button
                    className={classNames({
                      ["ossa-action-btn"]: true,
                      ["ossa-action-btn--cancel"]: true,
                    })}
                    shape='round'
                    size={confirmText ? 'normal' : 'block'}
                    disabled={props.disableConfirmBtn}
                    onClick={(e) => onClickCancelBtn(props)}
                  >
                    {cancelText}
                  </Button>
                )}
                {confirmText && (
                  <Button
                    className={classNames({
                      ["ossa-action-btn"]: true,
                      ["ossa-action-btn--confirm"]: true,
                    })}
                    openType={confirmOpenType}
                    type='primary'
                    shape='round'
                    size={cancelText ? 'normal' : 'block'}
                    disabled={props.disableConfirmBtn}
                    {...openTypeRelatedProps}
                    onClick={(e) => onClickConfirmBtn(props)}
                  >
                    {confirmText}
                  </Button>
                )}
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }

  return (
    <View className={className} style={styleObject}>
      <View className='ossa-modal__mask' onClick={(e) => onClickMask(props)} />
      {_isAbsoluteCloseIcon && _closeIcon}
      {custom && (
        <View className='ossa-modal__customWrapper'>
          {!_isAbsoluteCloseIcon && _closeIcon}
          {props.children}
        </View>
      )}
      {!custom && (
        <View className='ossa-modal__container'>
          {!_isAbsoluteCloseIcon && _closeIcon}
          {props.children}
          {isRenderAction && (
            <View className='ossa-modal__footer'>
              {cancelText && (
                <Button
                  className={classNames({
                    ["ossa-action-btn"]: true,
                    ["ossa-action-btn--cancel"]: true,
                  })}
                  shape='round'
                  size={confirmText ? 'normal' : 'block'}
                  disabled={props.disableCancelBtn}
                  onClick={(e) => onClickCancelBtn(props)}
                >
                  {cancelText}
                </Button>
              )}
              {confirmText && (
                <Button
                  className={classNames({
                    ["ossa-action-btn"]: true,
                    ["ossa-action-btn--confirm"]: true,
                  })}
                  openType={confirmOpenType}
                  type='primary'
                  shape='round'
                  size={cancelText ? 'normal' : 'block'}
                  disabled={props.disableConfirmBtn}
                  {...openTypeRelatedProps}
                  onClick={(e) => onClickConfirmBtn(props)}
                >
                  {confirmText}
                </Button>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

Index.defaultProps = {
  isShow: false,
  title: null,
  content: null,
  cancelText: null,
  confirmText: null,
  closeOnClickMask: true,
  closeOnConfirm: false,
  closeIconPosition: "top-right",
  onClose: null,
  onCancel: null,
  onConfirm: null,
};

Index.options = {
  addGlobalClass: true,
};
