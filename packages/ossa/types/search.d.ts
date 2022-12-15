import { ComponentClass, ReactChild } from "react";
import {
  CommonEventFunction,
  CommonEvent,
} from "@tarojs/components/types/common";
import { InputProps as TaroInputProps } from "@tarojs/components/types/Input";
import OsComponent from "./base";


interface SearchProps extends OsComponent {
  showSplitLine?: boolean;
  placeholder?: string;
  bgColor?: string;
  color?: string;
  padding?: number;
  value?: string;
  onChange?: (event: CommonEvent, value: string) => void;
  onClear?: () => void;
  onBlur?: (event: CommonEvent) => void;
  onFocus?: (event: CommonEvent) => void;
  onConfirm?: (event: CommonEvent, current: string) => void;
  /**
   * taro原生input的属性
   */
  taroProps?: Omit<
    TaroInputProps,
    | "className"
    | "type"
    | "focus"
    | "confirmType"
    | "value"
    | "placeholder"
    | "onInput"
    | "onConfirm"
    | "onBlur"
    | "onFocus"
    | "style"
    | "placeholderClass"
  >;
}

declare const Search: ComponentClass<SearchProps>;

export { Search, SearchProps };
