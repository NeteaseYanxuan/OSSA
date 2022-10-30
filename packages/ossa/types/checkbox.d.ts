import { ComponentClass } from "react";
import OsComponent from "./base";

/**
 * @name 复选框
 */
interface CheckboxProps extends OsComponent {}

interface CheckboxOptionProps extends OsComponent {
  /**
   * 当前选项的值
   */
  optionValue: number | string;
  /**
   * 当前选中的值的集合
   */
  value: Array<number | string>;
  /**
   * 是否失效
   * @default false
   */
  isDisabled?: boolean;
  /**
   * 点击回调
   * @param value 当前复选框组选中的所有复选框的值
   * @param curValue 当前点击的复选框的值
   */
  onClick: (value: CheckboxOptionProps["value"], curValue?: CheckboxOptionProps["optionValue"]) => void;
}

declare const Checkbox: ComponentClass<CheckboxProps>;
declare const CheckboxOption: ComponentClass<CheckboxOptionProps>;

export { Checkbox, CheckboxProps, CheckboxOption, CheckboxOptionProps };
