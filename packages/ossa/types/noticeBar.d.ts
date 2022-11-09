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
   * 文字滚动速度，当且仅当`scrollable`为`true`时生效
   * @default 50
   */
  speed?: number;
  leftIcon?: IconProps["type"];
  more?: boolean;
  color?: string;
  bgColor?: string;
  onClose?: CommonEventFunction;
  onClick?: CommonEventFunction;
}

declare const NoticeBar: ComponentClass<NoticeBarProps>;

export { NoticeBar, NoticeBarProps };
