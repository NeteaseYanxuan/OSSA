import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsBadge, OsIcon, OsList } from "ossaui";

import "./index.scss";

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["type", "dot | info | text | list，可选", "string", "dot"],
    },
    {
      list: ["isShow", "展示徽标，可选", "booelan", "true"],
    },
    {
      list: ["info", "角标值，可选", "number | string", "9"],
    },
    {
      list: ["max", "角标阀值，可选", "number", "99(>99显示99+)"],
    },
    {
      list: ["className", "自定义类名，可选", "string", "-"],
    },
    {
      list: ["customStyle", "自定义样式，可选", "object", "-"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClick", "点击时触发", "-"],
    },
  ],
};

const demoTitle = "Badge 徽标";
export default function Index() {
  const [listApi] = useState(initialListApi);
  const [listEvent] = useState(initialListEvent);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className='demo-badge'>
      <DemoHeader title={demoTitle}></DemoHeader>

      <DemoBlock title='dot'>
        <View className='badge-item'>
          <OsBadge>
            <OsIcon
              className='icon'
              type='inform'
              customStyle={{ verticalAlign: "top" }}
            ></OsIcon>
          </OsBadge>
        </View>
      </DemoBlock>

      <DemoBlock title='info' subTitle='文字'>
        <View className='badge-item'>
          <OsBadge type='info' info='新品'>
            <OsIcon
              type='detail-cart'
              className='icon'
              customStyle={{ verticalAlign: "top" }}
            ></OsIcon>
          </OsBadge>
        </View>
      </DemoBlock>

      <DemoBlock subTitle='数字'>
        <View className='badge-item'>
          <OsBadge type='info' info='9'>
            <OsIcon
              type='detail-cart'
              className='icon'
              customStyle={{ verticalAlign: "top" }}
            ></OsIcon>
          </OsBadge>
        </View>
      </DemoBlock>

      <DemoBlock title='text'>
        <View className='badge-item'>
          <OsBadge type='text'>待评价待评价</OsBadge>
        </View>
      </DemoBlock>

      <DemoBlock title='列表红点' fullScreen>
        <OsList
          title='我是标题我是标题我是标题我是标题我是标题我是标题我是标题'
          type='custom'
          rightIcon='arrows'
        >
          <OsBadge type='list'></OsBadge>
        </OsList>
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
