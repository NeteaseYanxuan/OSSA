/* eslint-disable jsx-quotes */
import React, { Component } from "react";
import Taro from "@tarojs/taro";
import BigWheel from "@ossa/loki/components/components/BigWheel";
import "@ossa/loki/dist/style/components/BigWheel.scss";
import DemoHeader from "../../../components/demoHeader";
import DemoBlock from "../../../components/demoBlock";
import DemoTable from "../../../components/demoTable";

const Index = () => {
  const configApi = {
    title: "转盘配置",
    head: ["参数", "说明", "类型", "默认值"],
    data: [
      {
        list: ["size", "转盘大小", "number", "600"],
      },
      {
        list: ["turnableImage", "转盘图片", "string", "/"],
      },
      {
        list: ["pointerImage", "指针图片", "number | string", "/"],
      },
      {
        list: [
          "offsetRotate",
          "奖品偏移角度，具体详见奖品偏移角度部分",
          "string",
          "0",
        ],
      },
      {
        list: [
          "prizeOffset",
          "奖品偏移量用于设置奖品距离转盘边缘的距离，具体详见奖品配置部分",
          "object",
          "0",
        ],
      },
      {
        list: ["prizeScale", "奖品缩放", "[0, 1]", "1"],
      },
      {
        list: ["prize", "奖品其他配置，具体详见奖品配置部分", "object", "/"],
      },
    ],
  };

  const prizeApi = {
    title: "奖品配置",
    head: ["参数", "说明", "类型", "默认值"],
    data: [
      {
        list: ["id", "奖品id", "number", "/"],
      },
      {
        list: ["name", "奖品名称", "string", "/"],
      },
      {
        list: ["image", "奖品图片", "string", "/"],
      },
    ],
  };

  const listEvent = {
    title: "Event",
    head: ["函数名", "说明", "类型"],
    data: [
      {
        list: [
          "onPlay",
          "开始抽奖事件",
          "(finish: (prizeId) => Promise) => void",
        ],
      },
    ],
  };

  const handleJumpHome = () => {
    Taro.navigateTo({
      url: "/pages/loki/index",
    });
  };

  const handlePlay = (onFinish) => {
    onFinish(4).then(
      (item) => {
        console.log("中奖啦 >>>>>>", item);
      },
      () => {
        console.log("未中奖");
      }
    );
  };

  const bigWheelConfig = {
    size: 300,
    prizeOffset: 20,
    turnableImage:
      "https://yanxuan.nosdn.127.net/static-union/1659516044835746.png",
    pointerImage:
      "https://yanxuan.nosdn.127.net/static-union/16595160444ef771.png",
    prize: {
      textColor: "#222222",
    },
  };

  const prizeGroup = [
    {
      id: 1,
      image: "https://yanxuan.nosdn.127.net/static-union/1659516044c3a18c.png", // 奖品图片
      // name: '199减5红包', // 奖品名称
    },
    {
      id: 2,
      image: "https://yanxuan.nosdn.127.net/static-union/165951604487ef12.png",
      // name: '99减5红包',
    },
    {
      id: 3,
      image: "https://yanxuan.nosdn.127.net/static-union/165951604419ac9a.png",
      // name: '5元直减红包',
    },
    {
      id: 4,
      image: "https://yanxuan.nosdn.127.net/static-union/1659516044816161.png",
      // name: '700加油红包',
    },
  ];

  const prizeGroup2 = [
    {
      id: 1,
      image: "https://yanxuan.nosdn.127.net/static-union/1659516044c3a18c.png", // 奖品图片
      name: "199减5红包", // 奖品名称
    },
    {
      id: 2,
      image: "https://yanxuan.nosdn.127.net/static-union/165951604487ef12.png",
      name: "99减5红包",
    },
    {
      id: 3,
      image: "https://yanxuan.nosdn.127.net/static-union/165951604419ac9a.png",
      name: "5元直减红包",
    },
    {
      id: 4,
      image: "https://yanxuan.nosdn.127.net/static-union/1659516044816161.png",
      name: "700加油红包",
    },
  ];

  return (
    <div className="index page">
      <DemoHeader
        title="大转盘"
        icon="general"
        onClick={handleJumpHome}
      ></DemoHeader>
      <DemoBlock title="基本用法">
        <BigWheel
          config={bigWheelConfig}
          prizeGroup={prizeGroup}
          onPlay={handlePlay}
        />
      </DemoBlock>
      <DemoBlock title="转盘大小 size" subTitle="转盘大小 size设置为：200">
        <BigWheel
          config={{
            ...bigWheelConfig,
            size: 200,
          }}
          prizeGroup={prizeGroup}
          onPlay={handlePlay}
        />
      </DemoBlock>
      <DemoBlock
        title="奖品偏移角度 offsetRotate"
        subTitle="奖品偏移角度offsetRotate设置为：45"
      >
        <BigWheel
          config={{
            ...bigWheelConfig,
            offsetRotate: 45,
          }}
          prizeGroup={prizeGroup}
          onPlay={handlePlay}
        />
      </DemoBlock>
      <DemoBlock
        title="奖品偏移 prizeOffset"
        subTitle="奖品偏移 prizeOffset设置为：0"
      >
        <BigWheel
          config={{
            ...bigWheelConfig,
            prizeOffset: 0,
          }}
          prizeGroup={prizeGroup}
          onPlay={handlePlay}
        />
      </DemoBlock>
      <DemoBlock
        title="奖品缩放 prizeScale"
        subTitle="奖品缩放prizeScale设置为：.5"
      >
        <BigWheel
          config={{
            ...bigWheelConfig,
            prizeScale: 0.5,
          }}
          prizeGroup={prizeGroup}
          onPlay={handlePlay}
        />
      </DemoBlock>
      <DemoBlock
        title="奖品设置 prize"
        subTitle="奖品设置 prize：{ textColor: 'red', fontSize: 12 }"
      >
        <BigWheel
          config={{
            ...bigWheelConfig,
            prize: {
              fontSize: 12,
              textColor: "red",
            },
          }}
          prizeGroup={prizeGroup2}
          onPlay={handlePlay}
        />
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={configApi}></DemoTable>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={prizeApi}></DemoTable>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>
    </div>
  );
};

export default Index;
