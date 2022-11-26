import { ComponentClass, ReactChild, ReactElement } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";
import { IconProps } from "./icon";

/**
 * @name 通知栏
 */
interface NoticeBarProps extends OsComponent {
  /**
   * 是否显示关闭按钮
   * @default false
   */
  closeable?: boolean;
  /**
   * 文字是否可滚动
   * @default false
   */
  scrollable?: boolean;
  /**
   * 文字滚动一屏的总时长，单位px/s
   * @default 16
   */
  speed?: number;
  /**
   * 左侧图标，取值参考OsIcon
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  leftIcon?: IconProps["type"];
  /**
   * 是否显示更多按钮
   * @default false
   */
  more?: boolean;
  /**
   * 文字颜色
   * @default "#f48f18"
   */
  color?: string;
  /**
   * 背景颜色
   * @default "fff8d8"
   */
  bgColor?: string;
  /**
   * 关闭时回调
   */
  onClose?: CommonEventFunction;
  /**
   * 点击时回调
   */
  onClick?: CommonEventFunction;
}

declare const NoticeBar: ComponentClass<NoticeBarProps>;

export { NoticeBar, NoticeBarProps };
