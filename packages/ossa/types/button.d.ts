import { ComponentClass, CSSProperties, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import { ButtonProps as TaroButtonProps } from '@tarojs/components/types/Button';
import OsComponent from "./base";
import { IconProps } from "./icon";

/**
 * @name 按钮组件
 * @desc 可快速配置成多种样式。
 * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/button
 */
interface ButtonProps extends OsComponent,TaroButtonProps {
  /**
   * 按钮展示类型
   * @default "default"
   * @desc
   * - default: 线框按钮
   * - primary: 色块按钮
   * - special1: 特殊按钮1，用于 sku
   * - special2: 特殊按钮2，用于 sku
   */
  type?: "default" | "primary" | "special1" | "special2";
  /**
   * 按钮尺寸
   * @default "normal"
   * @desc
   * - min: 极小
   * - small: 偏小
   * - normal: 常规大小
   * - large: 偏大
   * - block: 宽度占满父级
   */
  size?: "min" | "small" | "normal" | "large" | "block";
  /**
   * 按钮展示的形状
   * @default "round"
   * @desc 
   * - round: 大圆角按钮
   * - square: 小圆角按钮
   */
  shape?: "round" | "square";
  /**
   * 按钮禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 按钮字体颜色
   */
  color?: string;
  /**
   * 按钮背景色
   */
  bgColor?: string;
  /**
   * 按钮边框颜色
   */
  bdColor?: string;
  /**
   * 按钮显示的图标
   */
  icon?: IconProps["type"];
  /**
   * 点击回调
   */
  onClick?: CommonEventFunction;
  /**
   * 按钮渐变色起始颜色
   */
  startBgColor?: string;
  /**
   * 按钮渐变色终止颜色
   */
  endBgColor?: string;
  // onClick?: () => {}
}

declare const Button: ComponentClass<ButtonProps>;

export { Button, ButtonProps };
