import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";

interface StepperProps extends OsComponent {
  max?: number;
  min?: number;
  isReadonly?: boolean;
  isDisabled?: boolean;
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
