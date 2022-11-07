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
   * @default "text"
   */
  type?: "text" | "number" | "password" | "bankcard" | "textarea";
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
  /**
   * 是否只读
   * @default false
   */
  isReadonly?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  isDisabled?: boolean;
  /**
   * 是否隐藏一键删除按钮
   * @default false
   */
  disabledClear?: boolean;
  /**
   * 是否展示输入框底部的分割线
   * @default true
   */
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
  /**
   * 当文本框的内容发生变化时触发
   */
  onChange?: (v: string) => void;
  /**
   * 聚焦回调
   */
  onFocus?: CommonEventFunction;
  /**
   * 失焦回调
   */
  onBlur?: CommonEventFunction;
}

declare const Input: ComponentClass<InputProps>;

export { Input, InputProps };
