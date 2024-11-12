import React from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
import { OsTimelineProps } from "../../../types/index";

function getClassObject(props: OsTimelineProps) {
  const { pending = false } = props;

  const classObject = {
    ["ossa-timeline--pending"]: pending,
  };
  return classObject;
}

export default function Timeline(props: OsTimelineProps) {
  const { items, onClick, className, customStyle } = props;
  const rootClassName = "ossa-timeline"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = customStyle;

  const itemElems = items.map((item, index) => {
    const { title = "", color, icon, content = [], iconColor = '#7F7F7F' } = item;
    

    const itemRootClassName = ["ossa-timeline-item"];
    if (color) itemRootClassName.push(`ossa-timeline-item--${color}`);

    const dotClass: string[] = [];
    if (icon) {
      dotClass.push("ossa-timeline-item__icon");
    } else {
      dotClass.push("ossa-timeline-item__dot");
    }

    const handleItemClick = (idx: number, e: any) => {
      if (onClick) {
        onClick({ ...e, index: idx });
      }
    };

    return (
      <View
        className={classNames(itemRootClassName)}
        key={`ossa-timeline-item-${index}`}
        onClick={(e) => handleItemClick(index, e)}
      >
        <View className='ossa-timeline-item__tail'></View>
        <View className={classNames(dotClass)}>
          {icon && <OsIcon
            className={classNames(`ossa-icon--${icon}`)}
            type={icon}
            customStyle={{ color: iconColor }}
            size={16}
          ></OsIcon>}
        </View>
        <View className='ossa-timeline-item__content'>
          <View className='ossa-timeline-item__content-item'>{title}</View>
          {content.map((sub, subIndex) => (
            <View
              className='ossa-timeline-item__content-item ossa-timeline-item__content--sub'
              key={subIndex}
            >
              {sub}
            </View>
          ))}
        </View>
      </View>
    );
  });

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
    >
      {itemElems}
    </View>
  );
}

Timeline.defaultProps = {
  pending: false,
  items: [],
  customStyle: {},
};

Timeline.options = {
  addGlobalClass: true,
};
