import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image, ITouchEvent } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsCarouselProps } from "../../../types/index";

function getStyleObject(props: OsCarouselProps) {
  const { width, height } = props;
  const _styleObject = {};
  if (width) {
    _styleObject["width"] = Taro.pxTransform(width);
  }
  if (height) {
    _styleObject["height"] = Taro.pxTransform(height);
  }
  return _styleObject;
}

function getClassObject(props: OsCarouselProps) {
  const _isWeb = Taro.getEnv() === Taro.ENV_TYPE.WEB;
  const { type, gap } = props;
  const _classObject = {};
  if (_isWeb) {
    _classObject["ossa-carousel-h5"] = true;
    if (gap && type === "image") _classObject["ossa-carousel-h5--space"] = true;
  } else {
    if (gap && type === "image") _classObject["ossa-carousel--space"] = true;
  }
  return _classObject;
}

function getSwiperStyleObject(props: OsCarouselProps) {
  const _isWeb = Taro.getEnv() === Taro.ENV_TYPE.WEB;
  const {
    type,
    width = 750,
    height = 375,
    gap,
    gapWidth = 20,
    prevMargin = 15,
    nextMargin = 15,
    vertical,
  } = props;
  const _styleObject = {};
  if (_isWeb && gap && type === "image") {
    // H5 端手动实现间距
    if (vertical) {
      const carouselHeight = height - gapWidth - prevMargin - nextMargin;
      _styleObject["height"] = Taro.pxTransform(carouselHeight);
      _styleObject["margin-top"] = Taro.pxTransform(prevMargin + gapWidth);
      _styleObject["margin-bottom"] = Taro.pxTransform(nextMargin + gapWidth);
    } else {
      const carouselWidth = width - gapWidth - prevMargin - nextMargin;
      _styleObject["width"] = Taro.pxTransform(carouselWidth);
      _styleObject["margin-left"] = Taro.pxTransform(prevMargin + gapWidth);
      _styleObject["margin-right"] = Taro.pxTransform(nextMargin + gapWidth);
    }
  }
  return _styleObject;
}

function onChangeCarousel(
  e: any,
  props: OsCarouselProps,
  setActiveIndex: Function
) {
  const { onChange } = props;
  setActiveIndex(e.detail.current);
  onChange && onChange(e.detail.current);
}

function onClickCarousel(e: ITouchEvent, props: OsCarouselProps, currentIndex = 0) {
  props.onClick?.(currentIndex, e);
}

export default function Carousel(props: OsCarouselProps) {
  const _isWeb = Taro.getEnv() === Taro.ENV_TYPE.WEB;
  const rootClassName = "ossa-carousel"; // 组件
  const classObject = getClassObject(props); // 组件修饰
  const styleObject = Object.assign(getStyleObject(props), props.customStyle);
  const {
    type,
    data,
    vertical,
    autoPlay,
    circular,
    interval,
    current,
    indicatorDots,
    gap,
    gapWidth = 20,
    indicatorColor,
    indicatorActiveColor,
    prevMargin = 15,
    nextMargin = 15,
  } = props;
  const [activeIndex, setActiveIndex] = useState(
    current && current >= 0 && current < data.length ? current : 0
  );

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
    >
      <Swiper
        style={getSwiperStyleObject(props)}
        autoplay={autoPlay}
        vertical={vertical}
        interval={interval}
        circular={circular}
        current={activeIndex}
        indicatorDots={_isWeb && indicatorDots}
        indicatorColor={indicatorColor}
        indicatorActiveColor={indicatorActiveColor}
        previousMargin={
          (gap && type === "image" && `${prevMargin + gapWidth / 2}px`) || "0"
        }
        nextMargin={
          (gap && type === "image" && `${nextMargin + gapWidth / 2}px`) || "0"
        }
        duration={500}
        onChange={(e) => onChangeCarousel(e, props, setActiveIndex)}
        onClick={(e) => onClickCarousel(e, props, activeIndex)}
        className='ossa-carousel-swiper'
      >
        {data.map((item: any, index: number) => (
          <SwiperItem
            className={`ossa-carousel-swiper-item ${
              vertical
                ? "ossa-carousel-swiper__item--vertical"
                : "ossa-carousel-swiper__item"
            }`}
            style={
              (gap &&
                type === "image" && {
                  padding: vertical
                    ? `${Taro.pxTransform(gapWidth / 2)} 0`
                    : `0 ${Taro.pxTransform(gapWidth / 2)}`,
                }) ||
              {}
            }
            key={item.content}
          >
            {type === "image" ? (
              <Image
                src={item.content}
                className={`ossa-carousel-swiper__item__image ${item.className}`}
                style={item.style}
              ></Image>
            ) : (
              <View
                className={`ossa-carousel-swiper__item__text ${item.className}`}
                style={item.style}
              >
                {item.content}
              </View>
            )}
          </SwiperItem>
        ))}
      </Swiper>
      {/* 小程序端指示点 */}
      {!_isWeb && indicatorDots && (
        <View className='ossa-carousel-indicatorWrap'>
          {data.map((item: any, index: number) => (
            <View
              key={item}
              className={
                activeIndex === index
                  ? classNames("ossa-carousel-indicator", "active")
                  : "ossa-carousel-indicator"
              }
            ></View>
          ))}
        </View>
      )}
    </View>
  );
}

Carousel.defaultProps = {
  type: "image",
  width: 750,
  height: 375,
  autoPlay: true,
  vertical: false,
  interval: 4000,
  circular: true,
  indicatorDots: false,
  indicatorColor: "#ffffff",
  indicatorActiveColor: "#000000",
  current: 0,
  gap: false,
  gapWidth: 20,
  prevMargin: 15,
  nextMargin: 15,
  itemClasses: [],
};

Carousel.options = {
  addGlobalClass: true,
};
