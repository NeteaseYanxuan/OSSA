import { ComponentClass, ReactNode, CSSProperties } from "react";
import { ButtonProps } from '@tarojs/components/types/Button';
import OsComponent from "./base";

type ButtonOpenTypeRelatedProps = Pick<ButtonProps, 'lang' | 'sessionFrom' | 
'sendMessageTitle' | 'sendMessagePath' | 'sendMessageImg' |
'showMessageCard' | 'appParameter' | 'onContact' |'onGetUserInfo' |
'onGetPhoneNumber' | 'onOpenSetting' | 'scope' | 'onGetAuthorize' |
'onGetRealNameAuthInfo' | 'onError' | 'onLaunchApp' | 'onChooseAvatar'>

interface ModalProps extends OsComponent, ButtonOpenTypeRelatedProps {
  isShow: Boolean;
  title?: String;
  content?: String;
  cancelText?: String;
  confirmText?: String;
  disableCancelBtn?: Boolean;
  disableConfirmBtn?: Boolean;
  closeOnClickMask?: Boolean;

  /**
   * 执行onCofirm时，是否执行onClose
   *
   * @type {Boolean}
   * @memberof ModalProps
   * @default false
   */
  closeOnConfirm?: boolean;

  /**
   * 确认按钮的开放能力，具体支持可参考 官方文档
   *
   * @type {string}
   * @memberof ModalProps
   */
  confirmOpenType?: ButtonProps.OpenType;
  custom?: boolean;
  showCloseIcon?: boolean;
  closeIconPosition?:
    | "top-right"
    | "top"
    | "bottom"
    | "top-left"
    | "bottom-left"
    | "bottom-right";
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

declare const Modal: ComponentClass<ModalProps>;

export { Modal, ModalProps };
