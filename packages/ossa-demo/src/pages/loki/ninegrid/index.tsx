/* eslint-disable jsx-quotes */
import React, { Component } from "react";
import Taro from "@tarojs/taro";
import NineGrid from "@ossa/loki/components/components/NineGrid";
import "@ossa/loki/dist/style/components/NineGrid.scss";
import DemoHeader from "../../../components/demoHeader";
import DemoBlock from "../../../components/demoBlock";
import DemoTable from "../../../components/demoTable";

const Index = () => {
  const handleJumpHome = () => {
    Taro.navigateTo({
      url: "/pages/loki/index",
    });
  };

  const configApi = {
    title: "转盘配置",
    head: ["参数", "说明", "类型", "默认值"],
    data: [
      {
        list: ["size", "九宫格大小", "number", "/"],
      },
      {
        list: ["innerSize", "九宫格内框大小", "number", "/"],
      },
      {
        list: ["backgroundImage", "背景图片", "string", "/"],
      },
      {
        list: ["playImage", "开始图片", "number | string", "/"],
      },
      {
        list: ["prizeStyle", "奖品配置，具体详见奖品配置部分", "object", "/"],
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

  const config = {
    size: 300,
    innerSize: 280,
    backgroundImage:
      "https://yanxuan.nosdn.127.net/static-union/1659681736fb5c81.png",
    playImage:
      "https://yanxuan.nosdn.127.net/static-union/16596817364a47a0.png",
  };

  const prizeGroup = [
    {
      image: "https://yanxuan.nosdn.127.net/static-union/165968173610fb15.png",
      id: 1,
    },
    {
      image: "https://yanxuan.nosdn.127.net/static-union/165968173609dd8c.png",
      id: 2,
    },
    {
      image: "https://yanxuan.nosdn.127.net/static-union/16596817368266e4.png",
      id: 3,
    },

    {
      image: "https://yanxuan.nosdn.127.net/static-union/16596817368266e4.png",
      id: 4,
    },

    {
      image: "https://yanxuan.nosdn.127.net/static-union/16596817368266e4.png",
      id: 5,
    },
    {
      image: "https://yanxuan.nosdn.127.net/static-union/16596817369eb9cd.png",
      id: 6,
    },
    {
      image: "https://yanxuan.nosdn.127.net/static-union/16596817368266e4.png",
      id: 7,
    },
    {
      image: "https://yanxuan.nosdn.127.net/static-union/1659681736f19c90.png",
      id: 8,
    },
  ];
  return (
    <div className="index page">
      <DemoHeader
        title="九宫格"
        icon="general"
        onClick={handleJumpHome}
      ></DemoHeader>
      <DemoBlock title="基本用法">
        <NineGrid config={config} prizeGroup={prizeGroup} onPlay={handlePlay} />
      </DemoBlock>
      <DemoBlock title="九宫格大小 size" subTitle="九宫格大小 size设置为：200">
        <NineGrid
          config={{
            ...config,
            size: 200,
            innerSize: 180,
          }}
          prizeGroup={prizeGroup}
          onPlay={handlePlay}
        />
      </DemoBlock>
      <DemoBlock
        title="九宫格内框大小 innerSize"
        subTitle="九宫格内框大小 innerSize设置为：150"
      >
        <NineGrid
          config={{
            ...config,
            size: 200,
            innerSize: 150,
          }}
          prizeGroup={prizeGroup}
          onPlay={handlePlay}
        />
      </DemoBlock>
      <DemoBlock
        title="奖品样式配置 prizeStyle"
        subTitle="奖品样式配置 prizeStyle 设置奖品项背景：{ backgroundImage : 'xxxx'}"
      >
        <NineGrid
          config={{
            ...config,
            prizeStyle: {
              backgroundImage:
                "https://yanxuan.nosdn.127.net/static-union/1659604148fb5c81.png",
            },
          }}
          prizeGroup={prizeGroup}
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
