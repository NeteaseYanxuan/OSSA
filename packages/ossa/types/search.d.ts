import { ComponentClass, ReactChild } from "react";
import {
  CommonEventFunction,
  CommonEvent,
} from "@tarojs/components/types/common";
import { InputProps as TaroInputProps } from "@tarojs/components/types/Input";
import OsComponent from "./base";

/**
 * 搜索框
 */
interface SearchProps extends OsComponent {
  /**
   * 是否展示分割线
   * @default true
   */
  showSplitLine?: boolean;
  /**
   * 占位文案
   * @default '搜索商品，共X件好物'
   */
  placeholder?: string;
  /**
   * 容器背景色
   * @default '#FAFAFA'
   */
  bgColor?: string;
  /**
   * 输入文字颜色
   * @default '#333333'
   */
  color?: string;
  /**
   * 容器左右内边距
   * @default 30
   */
  padding?: number;
  /**
   * 输入框的值
   */
  value?: string;
  /**
   * 是否展示右侧操作按钮
   * @default true
   */
  showAction?: boolean;
  /**
   * 操作按钮类型
   * @default 'cancel'
   * @description 'cancel' | 'confirm'
   */
  action?: "cancel" | "confirm";
  /**
   * 操作按钮文案
   * @default action === 'cancel' ? '取消' : '搜索'
   */
  actionText?: string;
  /**
   * 内容改变事件
   * @param event 通用事件对象
   * @param value 当前输入的值
   */
  onChange?: (event: CommonEvent, value: string) => void;
  /**
   * 点击清空时回调
   */
  onClear?: () => void;
  /**
   * 点击取消时回调
   */
  onCancel?: () => void;
  /**
   * 失去焦点时回调
   * @param event 通用事件对象
   */
  onBlur?: (event: CommonEvent) => void;
  /**
   * 获得焦点时回调
   * @param event 通用事件对象
   */
  onFocus?: (event: CommonEvent) => void;
  /**
   * 确认输入时回调
   * @param event 通用事件对象
   */
  onConfirm?: (event: CommonEvent, value: string) => void;
  /**
   * taro原生input的属性
   */
  taroProps?: Omit<
    TaroInputProps,
    | "className"
    | "type"
    | "focus"
    | "confirmType"
    | "value"
    | "placeholder"
    | "onInput"
    | "onConfirm"
    | "onBlur"
    | "onFocus"
    | "style"
    | "placeholderClass"
  >;
}

declare const Search: ComponentClass<SearchProps>;

export { Search, SearchProps };
