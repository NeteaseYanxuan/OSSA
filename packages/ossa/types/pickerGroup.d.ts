import { ComponentClass, ReactChild } from "react";
import { TouchEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";
import { OsCommonValueChangeCallback } from "./common";

/**
 * @name 选择器组
 * @desc 用于辅助渲染选择器的主要内容区域
 */
interface PickerGroupProps extends OsComponent {
  /**
   * 取值范围
   */
  range: Array<string>;
  /**
   * 高度
   * @default 0
   */
  height?: number;
  /**
   * 高度更新回调
   * @param height
   */
  onUpdateHeight?: (
    height: number,
    columnId: string,
    needRevise?: boolean
  ) => void;
  type?: "time" | "date" | "complete" | undefined;
  columnId?: string;
  onUpdateDay?: (x: any, y: any) => void;
  onColumnChange?: (height: number, columnId: string, e?: any) => void;
  onTouchStart?: TouchEventFunction;
  onTouchMove?: TouchEventFunction;
  onTouchEnd?: TouchEventFunction;
}

declare const PickerGroup: ComponentClass<PickerGroupProps>;

export { PickerGroup, PickerGroupProps };
