import React, { useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsToastProps } from "../../../types/index";

let _toastTimer: any = 0;
// let _toast_duration = 3000
// let _toast_onClose;
function getStyleObj(props: OsToastProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsToastProps, show: boolean) {
  const _classObject = {
    ["ossa-toast--show"]: show,
    ["ossa-toast--hidden"]: !show,
  };
  return _classObject;
}

//export default
export default function Toast(props: OsToastProps) {
  const rootClassName = "ossa-toast"; //组件
  const styleObject = getStyleObj(Object.assign(props, props.customStyle));
  const { duration = 2000 } = props;
  const [, setDuration] = useState(duration);
  const [show = false, setShow] = useState(props.isShow);
  const classObject = getClassObject(props, show); //组件修饰

  function onClose() {
    props.onClose && props.onClose();
  }

  useEffect(() => {
    setShow(props.isShow);
    setDuration(duration);
    clearTimeout(_toastTimer);

    if (props.isShow) {
      _toastTimer = setTimeout(() => {
        setShow(false);
        onClose();
      }, +duration);
    }
  }, [props.isShow]);

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
    >
      <Text className="ossa-toast__text">{props.text}</Text>
    </View>
  );
}

Toast.defaultProps = {
  text: "",
  duration: 2000,
  isShow: false,
};

Toast.options = {
  addGlobalClass: true,
};
