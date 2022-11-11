import { ComponentClass } from "react";
import OsComponent from "./base";

interface BaseRadioProps {
  /**
   * 单选按钮类型
   * @desc
   * - column: 
   */
  type?: "column" | "row";
  value?: number | string;
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
}

interface RadioProps extends BaseRadioProps, OsComponent {
  onChange?: (v) => void;
}

interface RadioOptionProps extends BaseRadioProps, OsComponent {
  optionValue: number | string;
  isCustom?: boolean;
  onClick?: (v) => void;
}

declare const Radio: ComponentClass<RadioProps>;
declare const RadioOption: ComponentClass<RadioOptionProps>;

export { Radio, RadioProps, RadioOption, RadioOptionProps };
