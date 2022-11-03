import { ComponentClass, CSSProperties, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

/**
 * @name 徽标
 * @desc 在右上角展示红点、文字、数字。
 * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/badge
 */
interface BadgeProps extends OsComponent {
  /**
   * 徽标类型
   * @default "dot"
   */
  type?: "dot" | "info" | "text" | "list";
  /**
   * 徽标内显示内容
   */
  info?: number | string;
  /**
   * 角标阈值
   * @desc 超过阈值时将会显示"xxx+"，如 max 为 99时，info 为 100 则显示"99+"
   */
  max?: number;
  /**
   * 控制徽标是否展示
   * @default true
   */
  isShow?: boolean;
  /**
   * 点击徽标回调
   */
  onClick?: CommonEventFunction;
}

declare const Badge: ComponentClass<BadgeProps>;

export { Badge, BadgeProps };
