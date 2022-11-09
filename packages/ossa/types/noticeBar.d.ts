import { ComponentClass, ReactChild, ReactElement } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface NoticeBarProps extends OsComponent {
  closeable?: boolean;
  scrollable?: boolean;
  /**
   * 文字滚动一屏的总时长，单位秒
   * @default 16
   * @deprecated `speed`字段将在未来版本中被移除,请使用`duration`代替
   */
  speed?: number;
  /**
   * 文字滚动一屏的总时长，单位秒
   * @default 16
   */
  duration?: number;
  leftIcon?: string;
  more?: boolean;
  color?: string;
  bgColor?: string;
  onClose?: CommonEventFunction;
  onClick?: CommonEventFunction;
}

declare const NoticeBar: ComponentClass<NoticeBarProps>;

export { NoticeBar, NoticeBarProps };
