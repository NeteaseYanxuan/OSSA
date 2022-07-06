import { ComponentClass, ReactChild } from "react";
import {
  CommonEventFunction,
  CommonEvent,
} from "@tarojs/components/types/common";
import OsComponent from "./base";

export interface ToastProps extends OsComponent {
  text: string;
  duration?: number | string;
  isShow: boolean;
  onClose: () => void;
}

declare const Toast: ComponentClass<ToastProps>;
declare function show(): void;

export { Toast, show };
