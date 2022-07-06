import { ComponentClass, ReactNode, CSSProperties } from "react";
import OsComponent from "./base";

interface ModalProps extends OsComponent {
  isShow: Boolean;
  title?: String;
  content?: String;
  cancelText?: String;
  confirmText?: String;
  disableCancelBtn?: Boolean;
  disableConfirmBtn?: Boolean;
  closeOnClickMask?: Boolean;
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
