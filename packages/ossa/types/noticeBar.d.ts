import { ComponentClass, ReactChild, ReactElement } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";
import { IconProps } from "./icon";

interface NoticeBarProps extends OsComponent {
  closeable?: boolean;
  scrollable?: boolean;
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
