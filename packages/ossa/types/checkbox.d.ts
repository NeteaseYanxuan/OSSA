import { ComponentClass } from "react";
import OsComponent from "./base";

/**
 * 复选框
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
   * 是否禁用
   * @deprecated `isDisabled`属性在未来版本中将被删除，请使用`disabled`代替
   * @default false
   */
  isDisabled?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 点击选项
   */
  onClick: (values: (number | string)[], optionValue: number | string) => void;
}

declare const Checkbox: ComponentClass<CheckboxProps>;
declare const CheckboxOption: ComponentClass<CheckboxOptionProps>;

export { Checkbox, CheckboxProps, CheckboxOption, CheckboxOptionProps };
