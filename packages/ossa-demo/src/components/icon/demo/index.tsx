import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsIcon } from "ossaui";

import "ossaui/dist/style/components/icon.scss";
import "./index.scss";

function getClassObject() {
  const classObject = {
    ["page"]: true,
    ["demo-icon"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["type", "内置icon名称/类型，必选", "string", "-"],
    },
    {
      list: ["size", "尺寸，可选", "number", "40"],
    },
    {
      list: ["color", "图标颜色，可选", "string", "#7F7F7F"],
    },
    {
      list: ["customStyle", "自定义样式，可选", "object", "-"],
    },
    {
      list: ["className", "自定义类名，可选", "string", "-"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClick", "点击时触发", "event对象"],
    },
  ],
};

const demoTitle = "Icon 图标";
export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock title='基础' fullScreen>
        <View className='block-section'>
          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='richscan'></OsIcon>
            </View>
            <View className='inline-item--name'>richscan</View>
          </View>
          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='inform'></OsIcon>
            </View>
            <View className='inline-item--name'>inform</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='phone'></OsIcon>
            </View>
            <View className='inline-item--name'>phone</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='search'></OsIcon>
            </View>
            <View className='inline-item--name'>search</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='return'></OsIcon>
            </View>
            <View className='inline-item--name'>return</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='share'></OsIcon>
            </View>
            <View className='inline-item--name'>share</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='share-circle' size={62}></OsIcon>
            </View>
            <View className='inline-item--name'>share-circle</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='close'></OsIcon>
            </View>
            <View className='inline-item--name'>close</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='compile'></OsIcon>
            </View>
            <View className='inline-item--name'>compile</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='delete'></OsIcon>
            </View>
            <View className='inline-item--name'>delete</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='collect'></OsIcon>
            </View>
            <View className='inline-item--name'>collect</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='like'></OsIcon>
            </View>
            <View className='inline-item--name'>like</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='upload-delete'></OsIcon>
            </View>
            <View className='inline-item--name'>upload-delete</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='grade' size={48}></OsIcon>
            </View>
            <View className='inline-item--name'>grade</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='choose' size={36}></OsIcon>
            </View>
            <View className='inline-item--name'>choose</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='record'></OsIcon>
            </View>
            <View className='inline-item--name'>record</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='check' size={36}></OsIcon>
            </View>
            <View className='inline-item--name'>check</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='check-irrevocable' size={36}></OsIcon>
            </View>
            <View className='inline-item--name'>check-irrevocable</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='arrows' size={28}></OsIcon>
            </View>
            <View className='inline-item--name'>arrows</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='search-little' size={28}></OsIcon>
            </View>
            <View className='inline-item--name'>search-little</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='detail-home'></OsIcon>
            </View>
            <View className='inline-item--name'>detail-home</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='detail-cart'></OsIcon>
            </View>
            <View className='inline-item--name'>detail-cart</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon
                type='close-native'
                customStyle={{ background: "pink" }}
                size={64}
              ></OsIcon>
            </View>
            <View className='inline-item--name'>close-native</View>
            <View className='inline-item--name'>不含红色背景</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='pull-down-big'></OsIcon>
            </View>
            <View className='inline-item--name'>pull-down-big</View>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title='TabBar' fullScreen>
        <View className='block-section'>
          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='home'></OsIcon>
            </View>
            <View className='inline-item--name'>home</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='subject'></OsIcon>
            </View>
            <View className='inline-item--name'>subject</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='classify'></OsIcon>
            </View>
            <View className='inline-item--name'>classify</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='cart'></OsIcon>
            </View>
            <View className='inline-item--name'>cart</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='user'></OsIcon>
            </View>
            <View className='inline-item--name'>user</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='shopping-mall'></OsIcon>
            </View>
            <View className='inline-item--name'>shopping-mall</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='my-group-buying'></OsIcon>
            </View>
            <View className='inline-item--name'>my-group-buying</View>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title='disabled' fullScreen>
        <View className='block-section'>
          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='choose-disable' size={36}></OsIcon>
            </View>
            <View className='inline-item--name'>choose-disable</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='check-disable' size={36}></OsIcon>
            </View>
            <View className='inline-item--name'>check-disable</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='add-disable' size={18}></OsIcon>
            </View>
            <View className='inline-item--name'>add-disable</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='subtract-disable' size={18}></OsIcon>
            </View>
            <View className='inline-item--name'>subtract-disable</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='arrows-disable' size={28}></OsIcon>
            </View>
            <View className='inline-item--name'>arrows-disable</View>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title='active' fullScreen>
        <View className='block-section'>
          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='collect-selected'></OsIcon>
            </View>
            <View className='inline-item--name'>collect-selected</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='choose-selected'></OsIcon>
            </View>
            <View className='inline-item--name'>choose-selected</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='close-native-pressed' size={64}></OsIcon>
            </View>
            <View className='inline-item--name'>close-native-pressed</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='grade-selected' size={48}></OsIcon>
            </View>
            <View className='inline-item--name'>grade-selected</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='check-selected' size={36}></OsIcon>
            </View>
            <View className='inline-item--name'>check-selected</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='home-pressed'></OsIcon>
            </View>
            <View className='inline-item--name'>home-pressed</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='subject-pressed'></OsIcon>
            </View>
            <View className='inline-item--name'>subject-pressed</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='cart-pressed'></OsIcon>
            </View>
            <View className='inline-item--name'>cart-pressed</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='user-pressed'></OsIcon>
            </View>
            <View className='inline-item--name'>user-pressed</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='return-pressed'></OsIcon>
            </View>
            <View className='inline-item--name'>return-pressed</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='share-pressed'></OsIcon>
            </View>
            <View className='inline-item--name'>share-pressed</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='close-pressed'></OsIcon>
            </View>
            <View className='inline-item--name'>close-pressed</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='compile-pressed'></OsIcon>
            </View>
            <View className='inline-item--name'>compile-pressed</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='delete-pressed'></OsIcon>
            </View>
            <View className='inline-item--name'>delete-pressed</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='like-selected'></OsIcon>
            </View>
            <View className='inline-item--name'>like-selected</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='classify-pressed'></OsIcon>
            </View>
            <View className='inline-item--name'>classify-pressed</View>
          </View>
        </View>

        <View className='inline-item'>
          <View className='inline-item--top'>
            <OsIcon type='share-circle-pressed' size={62}></OsIcon>
          </View>
          <View className='inline-item--name'>share-circle-pressed</View>
        </View>

        <View className='inline-item'>
          <View className='inline-item--top'>
            <OsIcon type='detail-home-pressed'></OsIcon>
          </View>
          <View className='inline-item--name'>detail-home-pressed</View>
        </View>

        <View className='inline-item'>
          <View className='inline-item--top'>
            <OsIcon type='detail-cart-pressed'></OsIcon>
          </View>
          <View className='inline-item--name'>detail-cart-pressed</View>
        </View>

        <View className='inline-item'>
          <View className='inline-item--top'>
            <OsIcon type='my-group-buying-select'></OsIcon>
          </View>
          <View className='inline-item--name'>my-group-buying-select</View>
        </View>

        <View className='inline-item'>
          <View className='inline-item--top'>
            <OsIcon type='shopping-mall-select'></OsIcon>
          </View>
          <View className='inline-item--name'>shopping-mall-select</View>
        </View>
      </DemoBlock>

      <DemoBlock title='颜色固定' fullScreen>
        <View className='block-section'>
          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='delete-input' size={28}></OsIcon>
            </View>
            <View className='inline-item--name'>delete-input</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='add' size={28}></OsIcon>
            </View>
            <View className='inline-item--name'>add</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='add-disable' size={28}></OsIcon>
            </View>
            <View className='inline-item--name'>add-disable</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='avatar' size={62}></OsIcon>
            </View>
            <View className='inline-item--name'>avatar</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='invisible'></OsIcon>
            </View>
            <View className='inline-item--name'>invisible</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='service'></OsIcon>
            </View>
            <View className='inline-item--name'>service</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='visible'></OsIcon>
            </View>
            <View className='inline-item--name'>visible</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='subtract-disable' size={18}></OsIcon>
            </View>
            <View className='inline-item--name'>subtract-disable</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='subtract' size={18}></OsIcon>
            </View>
            <View className='inline-item--name'>subtract</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='voice' size={60}></OsIcon>
            </View>
            <View className='inline-item--name'>voice</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='voice-close' size={60}></OsIcon>
            </View>
            <View className='inline-item--name'>voice-close</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='photo' size={48}></OsIcon>
            </View>
            <View className='inline-item--name'>photo</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='sort' size={16}></OsIcon>
            </View>
            <View className='inline-item--name'>sort</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='sort-high' size={16}></OsIcon>
            </View>
            <View className='inline-item--name'>sort-high</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='sort-low' size={16}></OsIcon>
            </View>
            <View className='inline-item--name'>sort-low</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top'>
              <OsIcon type='subject'></OsIcon>
            </View>
            <View className='inline-item--name'>subject</View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top inline-item--height152'>
              <OsIcon type='close-h5' size={62}></OsIcon>
            </View>
            <View className='inline-item--name inline-item--mt10'>
              close-h5
            </View>
          </View>

          <View className='inline-item'>
            <View className='inline-item--top inline-item--height152'>
              <OsIcon size={152} type='add-photo'></OsIcon>
            </View>
            <View className='inline-item--name inline-item--mt10'>
              add-photo
            </View>
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

interface Props {}
