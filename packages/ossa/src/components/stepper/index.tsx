import React from "react";
import { View, Input, BaseEventOrig, InputProps } from "@tarojs/components";
import classNames from "classnames";
import _toString from "lodash/toString";
// //引入组件对应的 类型文件 .d.ts
import { OsStepperProps } from "../../../types/index";
import OsIcon from "../icon";
import { deprecatedProp } from "../../utils";
import { InputErrorParam } from "../../../types/stepper";

const mergeReadonly = (optionProps: OsStepperProps) => {
  return deprecatedProp(optionProps.readonly, optionProps.isReadonly, {
    newPropName: "readonly",
    oldPropName: "isReadonly",
    moduleName: "Stepper",
    defaultVal: false,
  });
};
const mergeDisabled = (optionProps: OsStepperProps) => {
  return deprecatedProp(optionProps.disabled, optionProps.isDisabled, {
    newPropName: "disabled",
    oldPropName: "isDisabled",
    moduleName: "Stepper",
    defaultVal: false,
  });
};

// 实现两数相加并保留小数点后最短尾数
function addNum(num1, num2) {
  let sq1, sq2;
  try {
    sq1 = _toString(num1).split(".")[1].length;
  } catch (e) {
    sq1 = 0;
  }
  try {
    sq2 = _toString(num2).split(".")[1].length;
  } catch (e) {
    sq2 = 0;
  }
  const m = Math.pow(10, Math.max(sq1, sq2));
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}

// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num) {
  if (num === "") return "0";

  const numStr = _toString(num);
  if (numStr.indexOf("0") === 0 && numStr.indexOf(".") === -1) {
    // 处理01变成1,并且不处理1.
    return _toString(parseFloat(num));
  }
  return _toString(num);
}

export default function Stepper(props: OsStepperProps) {
  const mergedDisabled = mergeDisabled(props);
  const mergedReadonly = mergeReadonly(props);
  function onClick(clickType: string) {
    const { value, min = 1, max = 99, step = 1 } = props;
    const lowThanMin = clickType === "minus" && value <= min;
    const overThanMax = clickType === "plus" && value >= max;

    if (lowThanMin || overThanMax || mergedDisabled || mergedReadonly) {
      const deltaValue = clickType === "minus" ? -step : step;
      const errorValue = addNum(value, deltaValue);
      if (mergedDisabled) {
        handleError({
          type: "DISABLED",
          errorValue,
        });
      } else {
        lowThanMin
          ? props.onDisabledSubtract?.(value)
          : props.onDisabledAdd?.(value);
        handleError({
          type: lowThanMin ? "LOW" : "OVER",
          errorValue,
        });
      }
      return;
    }
    const deltaValue = clickType === "minus" ? -step : step;
    let newValue = addNum(value, deltaValue);
    newValue = handleValue(newValue);
    props.onChange(newValue);
    if (clickType === "minus") {
      props.onSubtract?.(newValue);
    } else {
      props.onAdd?.(newValue);
    }
  }

  function handleValue(value) {
    const { max = 99, min = 1 } = props;
    let resultValue = value === "" ? min : value;
    // 此处不能使用 Math.max，会是字符串变数字，并丢失 .
    if (resultValue > max) {
      resultValue = max;
      handleError({
        type: "OVER",
        errorValue: resultValue,
      });
    }
    if (resultValue < min) {
      resultValue = min;
      handleError({
        type: "LOW",
        errorValue: resultValue,
      });
    }
    resultValue = parseValue(resultValue);
    return resultValue;
  }

  function onInput(e: BaseEventOrig<InputProps.inputValueEventDetail>) {
    const { value } = e.detail;
    if (mergedDisabled || mergedReadonly) return;

    // input时只做数字转换，且允许删空，改在blur时处理值
    let newValue: any = value === "" ? "" : parseValue(value);

    if (props.max && +newValue > props.max) {
      newValue = max;
    }

    newValue && newValue !== 0 && props.onChange(newValue);
    return newValue;
  }

  function onBlur(event: BaseEventOrig<InputProps.inputValueEventDetail>) {
    const value = event.detail.value;
    const newValue = handleValue(value);
    value !== newValue && props.onChange(newValue);

    props.onBlur?.(event);
  }

  function handleError(errorValue: InputErrorParam) {
    if (!props.onErrorInput) {
      return;
    }
    props.onErrorInput(errorValue);
  }

  function getContentClassObject(stepperProps: OsStepperProps) {
    const _classObject = {
      ["ossa-stepper__input--is-readonly"]: mergedReadonly,
      ["ossa-stepper__input--is-disabled"]: mergedDisabled,
    };

    return _classObject;
  }

  const { customStyle, value, min = 1, max = 99 } = props;

  const inputValue = handleValue(value);
  const rootClassName = [
    "ossa-stepper",
    "ossa-stepper__bts stepper__minus",
    "ossa-stepper__content",
    "ossa-stepper__input",
    "ossa-stepper__bts stepper__plus",
  ]; //组件
  const contentClassObject = getContentClassObject(props);
  const minusBtnCls = classNames("ossa-stepper__bts", "ossa-stepper__minus", {
    ["ossa-stepper__bts--is-readonly"]:
      inputValue <= min || mergedDisabled || mergedReadonly,
    ["ossa-stepper__bts--is-disabled"]: mergedDisabled,
  });
  const plusBtnCls = classNames("ossa-stepper__bts", "ossa-stepper__plus", {
    ["ossa-stepper__bts--is-readonly"]:
      inputValue >= max || mergedReadonly || mergedDisabled,
    ["ossa-stepper__bts--is-disabled"]: mergedDisabled,
  });

  return (
    <View
      className={classNames(rootClassName[0], props.className)}
      style={customStyle}
    >
      <View className={minusBtnCls} onClick={() => onClick("minus")}>
        <OsIcon
          type={
            inputValue <= min || mergedReadonly || mergedDisabled
              ? "subtract-disable"
              : "subtract"
          }
          size={18}
        ></OsIcon>
      </View>

      <View className={classNames(rootClassName[2], contentClassObject)}>
        <Input
          className={classNames(rootClassName[3])}
          value={inputValue}
          disabled={mergedDisabled || mergedReadonly}
          type='number'
          onInput={onInput}
          onBlur={onBlur}
        />
      </View>

      <View className={plusBtnCls} onClick={() => onClick("plus")}>
        <OsIcon
          type={
            inputValue >= max || mergedReadonly || mergedDisabled
              ? "add-disable"
              : "add"
          }
          size={18}
        ></OsIcon>
      </View>
    </View>
  );
}

Stepper.defaultProps = {
  max: 99,
  min: 1,
  step: 1,
  value: 1,
  customStyle: {},
};

Stepper.options = {
  addGlobalClass: true,
};
