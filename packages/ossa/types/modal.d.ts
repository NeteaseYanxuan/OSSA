import { ComponentClass, ReactNode, CSSProperties } from "react";
import OsComponent from "./base";

/**
 * @name 对话框
 * @desc 用于一些信息告知、操作确认的交互式弹窗。
 */
interface ModalProps extends OsComponent {
  /**
   * 是否显示弹窗
   */
  isShow: boolean;
  /**
   * 弹窗标题
   */
  title?: string;
  /**
   * 弹窗内容
   */
  content?: string;
  /**
   * 取消按钮文案
   */
  cancelText?: string;
  /**
   * 确认按钮文案
   */
  confirmText?: string;
  /**
   * 是否禁用取消按钮
   * @default false
   */
  disableCancelBtn?: boolean;
  /**
   * 是否禁用确认按钮
   * @default false
   */
  disableConfirmBtn?: boolean;
  /**
   * 点击遮罩是否隐藏弹窗
   * @default false
   */
  closeOnClickMask?: boolean;
  /**
   * 是否仅保留遮罩，完全自定义弹窗内容
   * @default false
   */
  custom?: boolean;
  /**
   * 是否显示关闭弹窗按钮
   * @deprecated `showCloseIcon`属性在未来版本中将被删除，请使用`closable`代替
   * @default true
   */
  showCloseIcon?: boolean;
  /**
   * 是否展示关闭弹窗按钮
   * @default true
   */
  closable?: boolean;
  /**
   * 关闭弹窗按钮所在的位置
   * @desc
   * - "top-right": 右上角
   * - "top": 顶部中央
   * - "bottom": 底部中央
   * - "top-left": 左上角
   * - "bottom-left": 左下角
   * - "bottom-right": 右下角
   * @default "top-right"
   */
  closeIconPosition?:
    | "top-right"
    | "top"
    | "bottom"
    | "top-left"
    | "bottom-left"
    | "bottom-right";
  /**
   * 弹窗关闭回调
   */
  onClose?: () => void;
  /**
   * 点击取消按钮回调
   */
  onCancel?: () => void;
  /**
   * 点击确认按钮回调
   */
  onConfirm?: () => void;
}

declare const Modal: ComponentClass<ModalProps>;

export { Modal, ModalProps };
