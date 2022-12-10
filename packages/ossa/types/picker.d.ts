import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";
import { OsCommonValueChangeCallback, OsCommonFunction } from "./common";
/**
 * 选择器
 */
interface PickerProps extends OsComponent {
  /**
   * 取值范围
   */
  range: Array<string>;
  /**
   * 取值索引
   */
  value: number;
  /**
   * 确认选择
   * @param {number | string} v 当前选中的值
   */
  onConfirm?: OsCommonValueChangeCallback<number | string>;
  /**
   * 取消选择
   */
  onCancel?: OsCommonFunction;
}

declare const Picker: ComponentClass<PickerProps>;

export { Picker, PickerProps };
