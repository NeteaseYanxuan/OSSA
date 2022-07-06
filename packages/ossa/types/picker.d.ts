import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";
import { OsCommonValueChangeCallback, OsCommonFunction } from "./common";

interface PickerProps extends OsComponent {
  range: Array<string>;
  value: number;
  onConfirm?: OsCommonValueChangeCallback<number | string>;
  onCancel?: OsCommonFunction;
}

declare const Picker: ComponentClass<PickerProps>;

export { Picker, PickerProps };
