import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";

/**
 * @name 步进器
 */
interface StepperProps extends OsComponent {
  /**
   * 最大值，可选
   * @default 99
   */
  max?: number;
  /**
   * 最小值，可选
   * @default 0
   */
  min?: number;
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
   * 是否只读
   * @deprecated `isReadonly`属性在未来版本中将被删除，请使用`readonly`代替
   * @default false
   */
  isReadonly?: boolean;
  /**
   * 是否失效
   * @default false
   */
  readonly?: boolean;
  /**
   * 单步增加/减少的值
   * @default 1
   */
  step?: number;
  /**
   * 当前步进器的值
   */
  value: number;
  /**
   * 点击增加按钮回调
   * @param value 最新值
   */
  onAdd?: (value: number) => void;
  /**
   * 点击减少按钮回调
   * @param value 最新值
   */
  onSubtract?: (value: number) => void;
  /**
   * 当步进器改变时回调
   */
  onChange: (value: number) => void;
  onErrorInput?: (value: number) => void;
  onBlur?: (event: any) => void;
  onDisabledAdd?: (value: number) => void;
  onDisabledSubtract?: (value: number) => void;
}

declare const Stepper: ComponentClass<StepperProps>;

export { Stepper, StepperProps };
