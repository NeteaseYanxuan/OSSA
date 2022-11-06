import { CSSProperties, PropsWithChildren, ReactChild } from "react";

/**
 * @desc 组件公共属性(不含 children)
 */
interface BaseOsComponent {
  /**
   * @desc 自定义样式类名
   */
  className?: string | string[] | { [key: string]: boolean };
  /**
   * @desc 自定义行间样式
   */
  customStyle?: CSSProperties;
}
/**
 * @desc 组件公共属性
 */
export type OsComponent = PropsWithChildren<BaseOsComponent>; 

export default OsComponent;
