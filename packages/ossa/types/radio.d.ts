import { ComponentClass } from "react";
import OsComponent from "./base";

interface RadioProps extends OsComponent {
  type?: "column" | "row";
}

interface RadioOptionProps extends OsComponent {
  optionValue: number | string;
  value: number | string;
  isDisabled?: boolean;
  isReadonly?: boolean;
  isCustom?: boolean;
  type?: "column" | "row";
  onClick: (v) => void;
}

declare const Radio: ComponentClass<RadioProps>;
declare const RadioOption: ComponentClass<RadioOptionProps>;

export { Radio, RadioProps, RadioOption, RadioOptionProps };
