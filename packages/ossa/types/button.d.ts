import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import { ButtonProps as TaroButtonProps } from '@tarojs/components/types/Button';
import OsComponent from "./base";

/**
 * @name 按钮组件
 * @description 可快速配置成多种样式。
 */
interface ButtonProps extends OsComponent,TaroButtonProps {
  /**
   * @prop 按钮展示类型
   * @default "default"
   */
  type?: "default" | "primary" | "special1" | "special2";
  /**
   * @prop 按钮尺寸
   */
  size?: "min" | "small" | "normal" | "large" | "block";
  shape?: "round" | "square";
  disabled?: boolean;
  color?: string;
  bgColor?: string;
  bdColor?: string;
  className?: string;
  icon?: string;
  onClick?: CommonEventFunction;
  customStyle?: object;
  startBgColor?: string;
  endBgColor?: string;
  // onClick?: () => {}
}

declare const Button: ComponentClass<ButtonProps>;

export { Button, ButtonProps };
