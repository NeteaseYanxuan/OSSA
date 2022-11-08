import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { OsRowProps } from "../../../types/index";
import { DataContext } from './UserContext';

function getClassObject(props: OsRowProps) {
  const { type, justify, align, wrap } = props;
  const _classObject = {
    [`ossa-row-${type}`]: type,
    [`ossa-row-justify-${justify}`]: justify,
    [`ossa-row-align-${align}`]: align,
    [`ossa-row-flex-${wrap}`]: wrap,
  };

  return _classObject;
}

function onClick(e: any, props: OsRowProps) {
  props.onClick?.(e);
}

export default function Row(props: OsRowProps) {
  const rootClassName = 'ossa-row'; //组件
  const classObject = getClassObject(props); //组件修饰
  const {
    className,
  } = props;

  return (
    <DataContext.Provider value={props}>
      <View
        className={classNames(rootClassName, classObject, className)}
        onClick={(e) => onClick(e, props)}
      >
        {props.children}
      </View>
    </DataContext.Provider>
  );
}

Row.defaultProps = {
  type: '',
  justify: 'start',
  align: 'flex-start',
  wrap: 'nowrap',
  gutter: '0',
};

Row.options = {
  addGlobalClass: true,
};
