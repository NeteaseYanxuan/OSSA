import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";
import { IconProps } from "./icon";

/**
 * @name 通用列表展示。
 */
interface ListProps extends OsComponent {
  /**
   * 展示类型
   * @default "default"
   * @desc
   * - "default": 默认列表展示形式
   * - "custom": 自定义列表样式
   */
  type?: "default" | "custom";
  /**
   * 主标题
   */
  title?: string;
  /**
   * 副标题
   */
  subTitle?: string;
  rightIcon?: IconProps["type"];
  leftIcon?: IconProps["type"];
  desc?: string;
  active?: string;
  showSplitLine?: boolean;
  color?: string;
  bgColor?: string;
  activeBgColor?: string;
  leftIconSize?: number;
  descColor?: string;
  onClick?: CommonEventFunction;
}

declare const List: ComponentClass<ListProps>;

export { List, ListProps };
