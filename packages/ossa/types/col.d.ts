import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

/**
 * 栅格属性
 * @desc 与`OsRow`配合使用的页面栅格布局组件，代表一行中的每一个单元格
 */
interface ColProps extends OsComponent {
  /**
   * 栅格占位格数
   * @default 24
   */
  span?: string | number
  /**
   * 栅格左侧的间隔格数
   * @default 0
   */
  offset?: string | number
  /**
   * 元素间隔，单位：px
   * @default 0
   */
  gutter?: string | number
  /**
   * 点击回调
   */
  onClick?: CommonEventFunction;
}

declare const Col: ComponentClass<ColProps>;

export { Col, ColProps };
