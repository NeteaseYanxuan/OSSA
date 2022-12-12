import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";


export type InputErrorParam = {
  /**
   * 错误类型
   * @desc
   * - DISABLED: 步进器处于禁用状态时触发
   * - LOW: 操作后小于最小值时触发
   * - OVER: 操作后大于最小值时触发
   */
  type: "DISABLED" | "LOW" | "OVER",
  /**
   * 矫正后的值
   * @desc 如果输入值小于最小值则为最小值，大于最大值则为最大值
   */
  errorValue: number;
};

/**
 * 步进器
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
  /**
   * 异常输入时回调
   * @param info 异常输入的回调信息
   */
  onErrorInput?: (info: InputErrorParam) => void;
  /**
   * 失去焦点时回调
   */
  onBlur?: (event: BaseEventOrig<InputProps.inputValueEventDetail>) => void;
  /**
   * 禁止增加回调
   */
  onDisabledAdd?: (value: number) => void;
  /**
   * 禁止减小回调
   */
  onDisabledSubtract?: (value: number) => void;
}

declare const Stepper: ComponentClass<StepperProps>;

export { Stepper, StepperProps };
