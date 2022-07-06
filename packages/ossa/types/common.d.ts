import {
  CommonEventFunction,
  CommonEvent,
} from "@tarojs/components/types/common";

export type OsCommonFunction = () => any;

export type OsCommonEventFunction = CommonEventFunction<CommonEvent>;

export type OsCommonValueChangeCallback<T> = (v: T) => any;
