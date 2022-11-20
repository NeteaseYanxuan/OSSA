import React, { CSSProperties, useEffect, useState } from "react";
import { createSelectorQuery } from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsNoticeBarProps } from "../../../types/index";
import OsIcon from "../icon";

function getStyleObj(props: OsNoticeBarProps): CSSProperties {
  const _styleObj: CSSProperties = {};
  return _styleObj;
}


function getClassObject(props: OsNoticeBarProps) {
  const _classObject = {
    ["ossa-notice-bar--play-infinite"]: props.scrollable,
    ["ossa-notice-bar--with-icon"]: props.leftIcon,
  };
  return _classObject;
}

async function getElementWidth(selector: string): Promise<number> {
  return new Promise((resolve) => {
    const query = createSelectorQuery();
    query.select(selector).boundingClientRect();
    query.exec(function (res) {
      resolve(res[0].width);
    });
  });
}

export default function Index(props: OsNoticeBarProps) {
  const rootClassName = "ossa-notice-bar"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), props.customStyle);
  const [duration, setDuration] = useState(0);
  const { speed = 16 } = props;

  useEffect(() => {
    getElementWidth('#marqueeContainer').then(width => {
      setDuration(width / speed)
    });
  }, [speed]);

  const marqueeStyle: CSSProperties = {
    'animationDuration': `${duration}s`,
    'WebkitAnimationDuration': `${duration}s`,
  };

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
      onClick={props.onClick}
    >
      {props.leftIcon ? (
        <OsIcon
          className='ossa-notice-bar__left-icon'
          type={props.leftIcon}
          size={28}
          color={props.color || "#F48F18"}
        ></OsIcon>
      ) : null}
      <View className='ossa-notice-bar__content-wrapper'>
        <View
          id='marqueeContainer'
          className={classNames({
            ["ossa-notice-bar__content"]: true,
          })}
          style={marqueeStyle}
        >
          {props.children}
        </View>
      </View>
      {props.more ? (
        <OsIcon
          className='ossa-notice-bar__accessory-view'
          type='arrows'
          size={28}
          color='#F48F18'
        ></OsIcon>
      ) : null}
      {props.closeable ? (
        <OsIcon
          className='ossa-notice-bar__close-btn'
          type='close'
          size={28}
          color='#F48F18'
          onClick={props.onClose}
        ></OsIcon>
      ) : null}
    </View>
  );
}

Index.defaultProps = {
  title: "我是标题",
};

Index.options = {
  addGlobalClass: true,
};
