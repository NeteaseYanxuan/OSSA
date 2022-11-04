import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

/**
 * @name 文本输入框
 */
interface InputProps extends OsComponent {
  /**
   * 输入框类型
   * @desc
   * - text: 普通文本输入框
   * - number: 数字输入框
   * - password: 密码输入框
   * - bankcard: 银行卡号码输入框
   * - textarea: 文本域
   */
  type?: "text" | "number" | "password" | "bankcard" | "textarea" | "border";
  /**
   * 当前输入框的值
   */
  value?: string;
  /**
   * 文本框占位文字
   */
  placeholder?: string;
  /**
   * 占位文字的样式
   * @support minprogram
   */
  placeholderStyle?: string; // 只有小程序支持 ^_^
  /**
   * 占位文字的类名
   */
  placeholderClass?: string;
  /**
   * 表单说明
   */
  label?: string;
  /**
   * 允许输入的最大长度
   * @default 500
   */
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
