import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

/**
 * 动画
 * @desc 常见的过场动画
 * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/animate
 */
interface AnimateProps extends OsComponent {
  /**
   * 预置动画类型
   */
  type?: "fadeIn" | "fadeOut" | "fadeOutDown" | "fadeOutUp" | "fadeInDown" | "fadeInUp";
  /**
   * 点击回调
   */
  onClick?: CommonEventFunction;
}

declare const Animate: ComponentClass<AnimateProps>;

export { Animate, AnimateProps };
