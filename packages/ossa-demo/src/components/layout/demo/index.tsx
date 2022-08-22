import React, { useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
//引入 layout样式，纯css组件
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
// import './index.scss'
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
        <View className='layout'>
          <View className={classNames("col", "col--8")}>
            <View className={classNames("col-content", "col-content--light")}>
              span:8
            </View>
          </View>
          <View className={classNames("col", "col--8")}>
            <View className='col-content'>span:8</View>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title='分栏间隔'>
        <View className={classNames("layout", "layout--10")}>
          <View className={classNames("col", "col--2")}>
            <View className={classNames("col-content", "col-content--light")}>
              span:2
            </View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className='col-content'>span:2</View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className={classNames("col-content", "col-content--light")}>
              span:2
            </View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className='col-content'>span:2</View>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title='对齐布局(flex)'>
        <View
          className={classNames("layout", "layout--flex", "layout--flex--left")}
        >
          <View className={classNames("col", "col--2")}>
            <View
              className={classNames(
                "col-content",
                "col-content--light",
                "col-content--bottom20"
              )}
            >
              居左
            </View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className='col-content'>居左</View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className={classNames("col-content", "col-content--light")}>
              居左
            </View>
          </View>
        </View>

        <View
          className={classNames(
            "layout",
            "layout--flex",
            "layout--flex--center"
          )}
        >
          <View className={classNames("col", "col--2")}>
            <View
              className={classNames(
                "col-content",
                "col-content--light",
                "col-content--bottom20"
              )}
            >
              居中
            </View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className='col-content'>居中</View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className={classNames("col-content", "col-content--light")}>
              居中
            </View>
          </View>
        </View>

        <View
          className={classNames("layout", "layout--flex", "layout--flex--end")}
        >
          <View className={classNames("col", "col--2")}>
            <View
              className={classNames(
                "col-content",
                "col-content--light",
                "col-content--bottom20"
              )}
            >
              居右
            </View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className='col-content'>居右</View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className={classNames("col-content", "col-content--light")}>
              居右
            </View>
          </View>
        </View>

        <View
          className={classNames(
            "layout",
            "layout--flex",
            "layout--flex--space-between"
          )}
        >
          <View className={classNames("col", "col--2")}>
            <View
              className={classNames(
                "col-content",
                "col-content--light",
                "col-content--bottom20"
              )}
            >
              between
            </View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className='col-content'>between</View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className={classNames("col-content", "col-content--light")}>
              between
            </View>
          </View>
        </View>

        <View
          className={classNames(
            "layout",
            "layout--flex",
            "layout--flex--space-around"
          )}
        >
          <View className={classNames("col", "col--2")}>
            <View
              className={classNames(
                "col-content",
                "col-content--light",
                "col-content--bottom20"
              )}
            >
              around
            </View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className='col-content'>around</View>
          </View>
          <View className={classNames("col", "col--2")}>
            <View className={classNames("col-content", "col-content--light")}>
              around
            </View>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title='响应式布局'>
        <View
          className={classNames("layout", "layout--responsive", "layout--10")}
        >
          <View className='col'>
            <View className={classNames("col-content", "col-content--light")}>
              responsive
            </View>
          </View>
          <View className='col'>
            <View className='col-content'> 随着内容伸缩</View>
          </View>
          <View className='col'>
            <View className={classNames("col-content", "col-content--light")}>
              responsive 自动伸缩自动伸缩
            </View>
          </View>
          <View className='col'>
            <View className='col-content'>123</View>
          </View>
        </View>
      </DemoBlock>
    </View>
  );
}

interface Props {}
