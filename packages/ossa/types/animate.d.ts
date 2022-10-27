import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

/**
 * @name 动画
 * @description 常见的过场动画
 */
interface AnimateProps extends OsComponent {
  /**
   * @prop 预置动画类型
   */
  type?: "fadeIn" | "fadeOut" | "fadeOutDown" | "fadeOutUp" | "fadeInDown" | "fadeInUp";
  /**
   * @prop 点击回调
   */
  onClick?: CommonEventFunction;
}

declare const Animate: ComponentClass<AnimateProps>;

export { Animate, AnimateProps };
