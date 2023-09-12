import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";
import { IconProps } from "./icon";

/**
 * 通用列表展示。
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
  /**
   * 右侧图标
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  rightIcon?: IconProps["type"];
  /**
   * 当且仅当 rightIcon 为 custom 时生效，渲染自定义图标
   */
  rightCustomIcon?: IconProps["customIcon"];
  /**
   * 左侧图标
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  leftIcon?: IconProps["type"];
  /**
   * 当且仅当 leftIcon 为 custom 时生效，渲染自定义图标
   */
  leftCustomIcon?: IconProps["customIcon"];
  /**
   * 简要描述
   */
  desc?: string;
  /**
   * 是否展示分割线
   * @default true
   */
  showSplitLine?: boolean;
  /**
   * 标题颜色
   * @default #333333
   */
  color?: string;
  /**
   * 背景色
   * @default #ffffff
   */
  bgColor?: string;
  /**
   * 激活态背景色
   * @default #f9f9f9
   */
  activeBgColor?: string;
  /**
   * 左侧图标尺寸
   * @default 36
   */
  leftIconSize?: number;
  /**
   * 副标题或者描述字体颜色
   * @default #7f7f7f
   */
  descColor?: string;
  /**
   * 点击回调
   */
  onClick?: CommonEventFunction;
}

declare const List: ComponentClass<ListProps>;

export { List, ListProps };
