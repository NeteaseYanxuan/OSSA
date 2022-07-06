import { ComponentClass, ReactChild } from "react";
import { TouchEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";
import { OsCommonValueChangeCallback } from "./common";

interface PickerGroupProps extends OsComponent {
  range: Array<string>;
  height?: number;
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
