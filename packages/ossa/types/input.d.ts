import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface InputProps extends OsComponent {
  type?: "text" | "number" | "password" | "bankcard" | "textarea";
  value?: string;
  placeholder?: string;
  placeholderStyle?: string; // 只有小程序支持 ^_^
  placeholderClass?: string;
  label?: string;
  maxLength?: number;
  isReadonly?: boolean;
  isDisabled?: boolean;
  disabledClear?: boolean;
  showSplitLine?: boolean;
  countDown?: boolean;
  onChange?: (v: string) => void;
  onFocus?: CommonEventFunction;
  onBlur?: CommonEventFunction;
}

declare const Input: ComponentClass<InputProps>;

export { Input, InputProps };
