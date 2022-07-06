import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";
import {
  OsCommonValueChangeCallback,
  OsCommonFunction,
  OsCommonEventFunction,
} from "./common";

interface DatePickerProps extends OsComponent {
  type: "date" | "time" | "complete";
  value: string;
  fields?: "year" | "month" | "day";
  start?: string;
  end?: string;
  disabled?: boolean;
  onConfirm?: OsCommonEventFunction;
  onCancel?: OsCommonFunction;
}

declare const DatePicker: ComponentClass<DatePickerProps>;

export { DatePicker, DatePickerProps };
