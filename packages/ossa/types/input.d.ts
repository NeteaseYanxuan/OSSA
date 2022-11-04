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
  /**
   * 是否显示字符计数器，textarea有效，可选
   * @deprecated `countDown`字段将在未来版本中被移除,请使用`showCount`代替
   */
  countDown?: boolean;
  /**
   * 是否显示字符计数器，textarea有效，可选
   */
  showCount?: boolean;
  onChange?: (v: string) => void;
  onFocus?: CommonEventFunction;
  onBlur?: CommonEventFunction;
}

declare const Input: ComponentClass<InputProps>;

export { Input, InputProps };
