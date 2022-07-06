import { ComponentClass, ReactChild } from "react";
import {
  CommonEventFunction,
  CommonEvent,
} from "@tarojs/components/types/common";
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
}

declare const Search: ComponentClass<SearchProps>;

export { Search, SearchProps };
