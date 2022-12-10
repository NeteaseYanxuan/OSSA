import { ComponentClass } from "react";
import OsComponent from "./base";

/**
 * 轻提示
 */
export interface ToastProps extends OsComponent {
  /**
   * 展示文本
   */
  text: string;
  /**
   * 持续时间，单位：ms
   * @default 2000
   */
  duration?: number;
  /**
   * 是否展示
   */
  isShow: boolean;
  /**
   * 关闭回调
   */
  onClose: () => void;
}

declare const Toast: ComponentClass<ToastProps>;
declare function show(): void;

export { Toast, show };
