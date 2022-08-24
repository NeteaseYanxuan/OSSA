import React, { useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
//引入 layout样式，纯css组件
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";

import { OsRow, OsCol } from "ossaui";

import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-layout"]: true,
  };
  return classObject;
}

const demoTitle = "Layout 布局";
export default function Index(props: Props) {
  const classObject = getClassObject(); //组件修饰

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock title='基础布局'>
        <OsRow>
          <OsCol span='24'>
            <View className='col-content col-content-light'>span:24</View>
          </OsCol>
        </OsRow>
        <OsRow>
          <OsCol span='12'>
            <View className='col-content col-content-light'>span:12</View>
          </OsCol>
          <OsCol span='12'>
            <View className='col-content'>span:12</View>
          </OsCol>
        </OsRow>
        <OsRow>
          <OsCol span='8'>
            <View className='col-content col-content-light'>span:8</View>
          </OsCol>
          <OsCol span='8'>
            <View className='col-content'>span:8</View>
          </OsCol>
          <OsCol span='8'>
            <View className='col-content col-content-light'>span:8</View>
          </OsCol>
        </OsRow>
        <OsRow>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content'>span:6</View>
          </OsCol>
        </OsRow>
      </DemoBlock>
      <DemoBlock title='分栏间隔'>
        <OsRow gutter='10'>
          <OsCol span='8'>
            <View className='col-content col-content-light'>span:8</View>
          </OsCol>
          <OsCol span='8'>
            <View className='col-content'>span:8</View>
          </OsCol>
          <OsCol span='8'>
            <View className='col-content col-content-light'>span:8</View>
          </OsCol>
        </OsRow>
      </DemoBlock>
      <DemoBlock title='Flex布局'>
        <OsRow type='flex' wrap='nowrap'>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
        </OsRow>
        <OsRow type='flex' justify='center'>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
        </OsRow>
        <OsRow type='flex' justify='end'>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
        </OsRow>
        <OsRow type='flex' justify='space-between'>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
        </OsRow>
        <OsRow type='flex' justify='space-around'>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content'>span:6</View>
          </OsCol>
          <OsCol span='6'>
            <View className='col-content col-content-light'>span:6</View>
          </OsCol>
        </OsRow>
      </DemoBlock>
    </View>
  );
}

interface Props {}
