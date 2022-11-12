import { ComponentClass } from "react";
import OsComponent from "./base";

interface CheckboxProps extends OsComponent {}

interface CheckboxOptionProps extends OsComponent {
  optionValue: number | string;
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
  onClick: (v) => void;
}

declare const Checkbox: ComponentClass<CheckboxProps>;
declare const CheckboxOption: ComponentClass<CheckboxOptionProps>;

export { Checkbox, CheckboxProps, CheckboxOption, CheckboxOptionProps };
