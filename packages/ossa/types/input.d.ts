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
  /**
   * 是否禁用
   * @deprecated `isDisabled`属性在未来版本中将被删除，请使用`disabled`代替
   * @default false
   */
  isDisabled?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否只读
   * @deprecated `isReadonly`属性在未来版本中将被删除，请使用`readonly`代替
   * @default false
   */
  isReadonly?: boolean;
  /**
   * 是否失效
   * @default false
   */
  readonly?: boolean;
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
