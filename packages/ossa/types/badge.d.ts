import { ComponentClass, CSSProperties, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

/**
 * @name 徽标
 * @description 在右上角展示红点、文字、数字。
 */
interface BadgeProps extends OsComponent {
  /**
   * @prop 徽标类型
   * @default "dot"
   */
  type?: "dot" | "info" | "text" | "list";
  /**
   * @prop 徽标内显示内容
   */
  info?: number | string;
  /**
   * @prop 角标阈值
   * @description 超过阈值时将会显示"xxx+"，如 max 为 99时，info 为 100 则显示"99+"
   */
  max?: number;
  /**
   * @prop 控制徽标是否展示
   * @default true
   */
  isShow?: boolean;
  /**
   * @prop 自定义样式名
   */
  className?: string;
  /**
   * @prop 自定义行内样式
   */
  customStyle?: CSSProperties;
  /**
   * @prop 点击徽标回调
   */
  onClick?: CommonEventFunction;
}

declare const Badge: ComponentClass<BadgeProps>;

export { Badge, BadgeProps };
