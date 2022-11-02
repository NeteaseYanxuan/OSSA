import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface RowProps extends OsComponent {
  /**
   * 设置行的布局方式，目前仅支持 flex
   */
  type?: 'flex'
  /**
   * 主轴方向的对齐方式，同`justify-content`
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
  /**
   * 交叉轴方向的对齐方式
   * @default 'flex-start'
   */
  align?: 'flex-start' | 'center' | 'flex-end'
  /**
   * 是否允许多行显示
   * @default 'nowrap
   */
  wrap?: 'nowrap' | 'wrap'
  /**
   * 元素间隔
   * @default 0
   */
  gutter?: string | number
  /**
   * 点击回调
   */
  onClick?: CommonEventFunction;
}

export type DataContextProps = OsRowProps;

declare const Row: ComponentClass<RowProps>;

export { Row, RowProps };
