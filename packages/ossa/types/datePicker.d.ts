import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";
import {
  OsCommonValueChangeCallback,
  OsCommonFunction,
  OsCommonEventFunction,
} from "./common";

/**
 * 时间/日期选择器
 */
interface DatePickerProps extends OsComponent {
  /**
   * 时间/日期选择器的类型
   * @desc 根据不同的类型展示不同维度的时间选择器
   * - date: 仅选择日期的选择器
   * - time: 仅选择时间的选择器
   * - complete: 同时选择日期和时间的选择器
   */
  type: "date" | "time" | "complete";
  /**
   * 选中的时间
   * @example
   * - date: 2022-06-12
   * - time: 16:32
   * - complete: 2022-06-12 16:32
   */
  value: string;
  /**
   * 选择器的粒度，type=date时有效
   * @example
   * - year: 仅选择年
   * - month: 仅选择年和月
   * - day: 选择年月日
   *
   */
  fields?: "year" | "month" | "day";
  /**
   * 有效起始时间
   */
  start?: string;
  /**
   * 有效终止时间
   */
  end?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 确认选择毁掉
   */
  onConfirm?: OsCommonEventFunction;
  /**
   * 取消回调
   */
  onCancel?: OsCommonFunction;
}

declare const DatePicker: ComponentClass<DatePickerProps>;

export { DatePicker, DatePickerProps };
