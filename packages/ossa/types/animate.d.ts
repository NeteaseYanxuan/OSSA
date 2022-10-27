import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

/**
 * @name 动画
 * @description 常见的过场动画
 */
interface AnimateProps extends OsComponent {
  type?: string;
  onClick?: CommonEventFunction;
}

declare const Animate: ComponentClass<AnimateProps>;

export { Animate, AnimateProps };
