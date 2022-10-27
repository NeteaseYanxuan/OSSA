import { CSSProperties, PropsWithChildren, ReactChild } from "react";

/**
 * @description 组件公共属性(不含 children)
 */
interface BaseOsComponent {
  /**
   * @description 自定义样式类名
   */
  className?: string | string[] | { [key: string]: boolean };
  /**
   * @description 自定义行间样式
   */
  customStyle?: object | CSSProperties;
}
/**
 * @description 组件公共属性
 */
export type OsComponent = PropsWithChildren<BaseOsComponent>; 

export default OsComponent;
