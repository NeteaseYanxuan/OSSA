import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";

interface StepperProps extends OsComponent {
  max?: number;
  min?: number;
  /**
   * 是否禁用
   * @deprecated `isDisabled`属性在未来版本中将被删除，请使用`disable`代替
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
  step?: number;
  value: number;
  onAdd?: (value: number) => void;
  onSubtract?: (value: number) => void;
  onChange: (value: number) => void;
  onErrorInput?: (value: number) => void;
  onBlur?: (event: any) => void;
  onDisabledAdd?: (value: number) => void;
  onDisabledSubtract?: (value: number) => void;
}

declare const Stepper: ComponentClass<StepperProps>;

export { Stepper, StepperProps };
