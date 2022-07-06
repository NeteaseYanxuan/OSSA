import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsCarousel } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-carousel"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: [
        "data",
        "数据，必选",
        "{ content: string, className: string, style: object }[]",
        "",
      ],
    },
    {
      list: ["type", "组件类型（显示图片或文字），可选", "string", "image"],
    },
    {
      list: ["width", "组件宽度，可选", "number", "750"],
    },
    {
      list: ["height", "组件高度，可选", "number", "375"],
    },
    {
      list: ["vertical", "滑动方向是否为纵向，可选", "boolean", "false"],
    },
    {
      list: ["autoPlay", "自动播放，可选", "boolean", "true"],
    },
    {
      list: ["interval", "自动轮播间隔时间,毫秒，可选", "number", "4000"],
    },
    {
      list: ["circular", "是否采用衔接滑动，可选", "boolean", "true"],
    },
    {
      list: ["indicatorDots", "展示指示器，可选", "boolean", "false"],
    },
    {
      list: ["indicatorColor", "指示点颜色，可选", "boolean", "true"],
    },
    {
      list: [
        "indicatorActiveColor",
        "当前选中指示点颜色，可选",
        "boolean",
        "false",
      ],
    },
    {
      list: ["current", "当前选中项序号，可选", "number", "0"],
    },
    {
      list: ["gap", "是否有分隔（图片式下生效），可选", "boolean", "false"],
    },
    {
      list: ["gapWidth", "分隔式间距大小，可选", "number", "20"],
    },
    {
      list: ["prevMargin", "分隔式下前一张图露出的大小，可选", "number", "15"],
    },
    {
      list: ["nextMargin", "分隔式下后一张图露出的大小，可选", "number", "15"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onChange", "切换时触发", "event对象"],
    },
    {
      list: ["onClick", "点击时触发", "event对象"],
    },
  ],
};

const initImg = [
  {
    content:
      "https://yanxuan.nosdn.127.net/9bd608e6abafc44264977c2ef29d7c40.jpg?imageView&quality=75&thumbnail=750x0",
  },
  {
    content:
      "https://yanxuan.nosdn.127.net/39ff6f8f9869757c7efa473ef41a81c6.jpg?imageView&quality=75&thumbnail=750x0",
  },
  {
    content:
      "https://yanxuan.nosdn.127.net/75eeba1737888fd72d69a745f92d4490.jpg?imageView&quality=75&thumbnail=750x0",
  },
  {
    content:
      "https://yanxuan.nosdn.127.net/ebf51b5850abd563cd64f07603b1a5e4.jpg?imageView&quality=75&thumbnail=750x0",
  },
  {
    content:
      "https://yanxuan.nosdn.127.net/f0f69e7b473124ac611a0a24bfaf7163.jpg?imageView&quality=75&thumbnail=750x0",
  },
];

const initImg1 = [
  {
    content:
      "https://yanxuan.nosdn.127.net/fe726ef94ce6a26a666e84361dbd6f4d.jpg?imageView&quality=75&thumbnail=670x371",
  },
  {
    content:
      "http://yanxuan.nosdn.127.net/07760022c7752f9d5ac51e8564fc8fd7.jpg?imageView&quality=75&thumbnail=670x371",
  },
  {
    content:
      "https://yanxuan.nosdn.127.net/27394a4590fb4af710655a15bc617895.jpg?imageView&quality=75&thumbnail=670x371",
  },
];

const initTxt = [
  {
    content: "This is Text 1",
    className: "my-carousel-item",
  },
  {
    content: "This is Text 2",
    style: { fontWeight: 600 },
  },
  {
    content: "This is Text 3",
  },
];

const demoTitle = "Carousel 走马灯";
export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰
  const [img1List] = useState(initImg);
  function onChange(activeIndex: number) {
    console.log(activeIndex);
  }

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>
      {/* 小程序基础 */}
      {Taro.getEnv() !== Taro.ENV_TYPE.WEB && (
        <DemoBlock title='基础' fullScreen>
          <OsCarousel
            data={img1List}
            width={750}
            height={375}
            interval={4000}
            indicatorDots
            circular
            current={0}
          />
        </DemoBlock>
      )}
      {/* 微信、头条小程序分隔式， 弃用 */}
      {/* {
        (Taro.getEnv() === Taro.ENV_TYPE.WEAPP || Taro.getEnv() === Taro.ENV_TYPE.TT) &&
        <DemoBlock title='分隔式' fullScreen>
          <View className='my-carousel my-carousel-space'>
            <Swiper
              autoplay
              style={{width: Taro.pxTransform(750), height: Taro.pxTransform(346)}}
              interval={4000}
              circular
              current={0}
              duration={500}
              onChange={(e)=>onChange1(e)}
              previous-margin='10px'
              next-margin='10px'
              className='swiper'
            >
              <View className='inner' >
                { initImg1.map((item: any, index:number) => (
                  <SwiperItem
                    className='swiper__item swiper-item '
                    key={item.imgSrc}
                  >
                    <Image src={item.imgSrc} className='swiper__item__image'></Image>
                  </SwiperItem>
                ))}
              </View>
            </Swiper>
            <View className='indicatorWrap' >
              { initImg1.map((item: any, index:number) => (
                <View key={item.imgSrc} className={activeIndex1 === index ? 'indicator active' : 'indicator'}></View>
              ))}
            </View>
          </View>
        </DemoBlock>
      } */}

      {/*小程序分隔式 */}
      {Taro.getEnv() !== Taro.ENV_TYPE.WEB && (
        <DemoBlock title='分隔式' fullScreen>
          <OsCarousel
            data={initImg1}
            width={750}
            height={500}
            circular
            current={0}
            vertical
            prevMargin={15}
            nextMargin={15}
            interval={4000}
            gap
          />
        </DemoBlock>
      )}

      {/* h5基础 */}
      {Taro.getEnv() === Taro.ENV_TYPE.WEB && (
        <DemoBlock title='基础' fullScreen>
          <OsCarousel
            data={img1List}
            width={750}
            height={375}
            interval={4000}
            circular
            current={1}
            indicatorDots
            indicatorActiveColor='#DD1A21'
            indicatorColor='#FFF'
            onChange={onChange}
          />
        </DemoBlock>
      )}

      {/* h5分隔式 */}
      {Taro.getEnv() === Taro.ENV_TYPE.WEB && (
        <DemoBlock
          title='分隔式'
          fullScreen
          customStyle={{ overflow: "hidden" }}
        >
          <OsCarousel
            data={initImg1}
            width={750}
            height={346}
            gap
            gapWidth={10}
            interval={4000}
            autoPlay
            circular
            prevMargin={100}
            nextMargin={50}
            indicatorDots
            indicatorActiveColor='#DD1A21'
            indicatorColor='#FFF'
            current={0}
          />
        </DemoBlock>
      )}

      <DemoBlock title='文案'>
        <OsCarousel
          className='my-carousel'
          type='text'
          data={initTxt}
          width={750}
          height={100}
        />
      </DemoBlock>

      {/* <DemoBlock title='普通测试' fullScreen>
        <OsCarousel>
          { initImg.map((item: any, index:number) => (
            <OsCarouselItem className='carousel__item'
              key={item.imgSrc}
            >
              <Image src={item.imgSrc} className='carousel__item__img'></Image>
            </OsCarouselItem>
          ))}
        </OsCarousel>
      </DemoBlock> */}

      {/* <DemoBlock title='测试' fullScreen>
        <Swiper indicatorDots
                spaceBetween={20}
                indicatorActiveColor='url(https://yanxuan.nosdn.127.net/15640251667293369.png) no-repeat center/contain'>
          { initImg.map((item: any, index:number) => (
            <SwiperItem className='swiper__item'
              key={item.imgSrc}
            >
              <Image src={item.imgSrc}></Image>
            </SwiperItem>
          ))}
        </Swiper>
      </DemoBlock> */}

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
