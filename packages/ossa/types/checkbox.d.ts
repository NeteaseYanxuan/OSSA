import { ComponentClass } from "react";
import OsComponent from "./base";

interface CheckboxProps extends OsComponent {}

interface CheckboxOptionProps extends OsComponent {
  optionValue: number | string;
  value: Array<number | string>;
  isDisabled?: boolean;
  onClick: (v) => void;
}

declare const Checkbox: ComponentClass<CheckboxProps>;
declare const CheckboxOption: ComponentClass<CheckboxOptionProps>;

export { Checkbox, CheckboxProps, CheckboxOption, CheckboxOptionProps };
