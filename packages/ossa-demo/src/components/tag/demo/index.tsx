import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsTag } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-tag"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["type", "radius / primary，可选", "string", "radius"],
    },
    {
      list: [
        "color",
        "normal / warning / error / 色值，可选",
        "string",
        "normal",
      ],
    },
    {
      list: ["bgColor", "填充色，可选", "string", "-"],
    },
    {
      list: [
        "startBgColor",
        "填充渐变开始色，可选",
        "string",
        "-（只支持radius腰圆标签，且与endBgColor配合使用）",
      ],
    },
    {
      list: [
        "endBgColor",
        "填充渐变结束色，可选",
        "string",
        "-（只支持radius腰圆标签，且与startBgColor配合使用）",
      ],
    },
    {
      list: [
        "showArrow",
        "显示向右箭头，可选",
        "boolean",
        "-（只支持radius腰圆标签）",
      ],
    },
    {
      list: ["customStyle", "自定义Style，可选", "Object", "-"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClick", "点击时触发，可选", "event对象"],
    },
  ],
};

export default function Index() {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: "Tag 标签",
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title='Tag 标签'></DemoHeader>
      <DemoBlock title='矩形类标签'>
        <View className='block-section'>
          <View className='inline-item'>
            <OsTag
              type='primary'
              color='warning'
              customStyle={{ minWidth: Taro.pxTransform(160) }}
            >
              预售
            </OsTag>
          </View>
          <View className='inline-item'>
            <OsTag
              type='primary'
              color='normal'
              customStyle={{ minWidth: Taro.pxTransform(160) }}
            >
              库存不足
            </OsTag>
          </View>
          <View className='inline-item'>
            <OsTag
              type='primary'
              color='error'
              customStyle={{ minWidth: Taro.pxTransform(160) }}
            >
              已售罄
            </OsTag>
          </View>
        </View>
      </DemoBlock>
      <DemoBlock title='腰圆线框标签'>
        <View className='block-section'>
          <View className='inline-item'>
            <OsTag color='warning'>腰圆线框</OsTag>
          </View>
          <View className='inline-item'>
            <OsTag>售罄</OsTag>
          </View>
          <View className='inline-item'>
            <OsTag color='error' showArrow>
              周年庆大促
            </OsTag>
          </View>
        </View>
      </DemoBlock>
      <DemoBlock title='腰圆实色标签'>
        <View className='block-section'>
          <View className='inline-item'>
            <OsTag bgColor='#DD1A21' color='#fff'>
              默认
            </OsTag>
          </View>
          <View className='inline-item'>
            <OsTag startBgColor='#FC865F' endBgColor='#FC625F' color='#fff'>
              全场满减
            </OsTag>
          </View>
        </View>
      </DemoBlock>
      <DemoBlock title='自定义色值'>
        <View className='block-section'>
          <View className='inline-item'>
            <OsTag color='#f00'>圆角标签</OsTag>
          </View>
          <View className='inline-item'>
            <OsTag type='primary' color='#f00'>
              方形标签
            </OsTag>
          </View>
        </View>
      </DemoBlock>
      <DemoBlock title='中尺寸'>
        <View className='block-section'>
          <View className='inline-item'>
            <OsTag bgColor='#F7F8F8' color='#3D3D3D' size='middle'>女性蛋糕</OsTag>
          </View>
          <View className='inline-item'>
            <OsTag bgColor='#F7F8F8' border=' 1px solid #AF7357' color='#AF7357' size='middle'>女性蛋糕</OsTag>
          </View>
        </View>
      </DemoBlock>
      <DemoBlock title='大尺寸'>
        <View className='block-section'>
          <View className='inline-item'>
            <OsTag color='#3D3D3D' size='large'>整条（12片装）</OsTag>
          </View>
          <View className='inline-item'>
            <OsTag bgColor='#FFF7F1' type='primary' border='1px solid #893F23' color='#893F23' size='large'>整条（12片装）</OsTag>
          </View>
        </View>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>
    </View>
  );
}
