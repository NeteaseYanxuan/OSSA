import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";
import { OsCommonValueChangeCallback, OsCommonFunction } from "./common";
/**
 * 选择器
 */
interface PickerProps extends OsComponent {
  /**
   * 选择器类型，默认为 selector
   */
  mode?: "selector" | "multiSelector";
  /**
   * 标题
   */
  title?: string;
  /**
   * 类型，mode 为 selector 时为一维数组，mode 为 multiSelector 时为二维数组，默认为 selector
   */
  range: Array<number|string> | Array<Array<number|string>>;
  /**
   * 取值索引，mode 为 selector 时为 number，mode 为 multiSelector 时为数组
   */
  value: number | Array<number>;
  /**
   * 值变化时触发
   */
  onChange?: OsCommonValueChangeCallback<number | string | Array<number|string>>;
  /**
   * 确认选择
   * @param {number | string} v 当前选中的值
   */
  onConfirm?: OsCommonValueChangeCallback<number | string | Array<number|string>>;
  /**
   * 取消选择
   */
  onCancel?: OsCommonFunction;
}

declare const Picker: ComponentClass<PickerProps>;

export { Picker, PickerProps };
