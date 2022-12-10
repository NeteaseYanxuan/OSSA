import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

/**
 * 加载
 * @desc 用于页面或模块的加载中状态。
 */
interface LoadingProps extends OsComponent {
  /**
   * 自定义 loading 的颜色
   * @default #DD1A21
   */
  color?: string;
  /**
   * 自定义 loading 尺寸
   * @default 34
   */
  size?: number;
  /**
   * 点击回调
   */
  onClick?: CommonEventFunction;
}

declare const Loading: ComponentClass<LoadingProps>;

export { Loading, LoadingProps };
