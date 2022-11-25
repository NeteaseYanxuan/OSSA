/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-shadow */
/**
 * @name 大转盘
 * @description
 *   可配置化抽奖大转盘
 *   1.大转盘 可配置: 图片可配置,大小可配置
 *   2.指针可配置 : 指针图片
 *   3.奖品列表可配置. 传入是一个数组Array (4 , 6 , 8)都可以要支持
 *   4.奖品配置
 *   5.中奖后暴露一个回调函数
 *   6.旋转动画可配置
 *   7.文字颜色可配置
 **/
import React, { useState, useEffect, useMemo } from "react";
import Utils from "./../../utils/index";
import Image from "../../baseComponents/common/Image";
import { IBigWheel } from "./../../types/loki";

const { px2rem, cls } = Utils;
const CIRCLE_ANGLE = 360;

const BigWheel: React.FC<IBigWheel> = function ({
  appEnv,
  className = "",
  style = {},
  config,
  prizeGroup,
  onPlay,
}) {
  const {
    size = 600,
    turntableImage,
    pointerImage,
    prize,
    animation,
    offsetRotate = 0,
    prizeOffset,
    prizeScale,
  } = config || {};
  const { duration = 4000, mode = "ease-in-out" } = animation || {};
  const { fontSize, textColor } = prize || {};
  const [curPrizeGroup, setCurPrizeGroup] = useState([]);
  const circle = 10; //多旋转的圈数
  const [rotateAngle, setRotateAngle] = useState(0); //旋转角度
  const [isRotating, setIsRotating] = useState(false); //是否正在旋转
  const [angleList, setAngleList] = useState([]); //记录每个奖品的获奖角度

  useEffect(() => {
    if (!prizeGroup) return;
    setCurPrizeGroup(formatPrizeList(prizeGroup));
  }, [prizeGroup]);

  //转盘的style
  const rotateStyle = useMemo(() => {
    return {
      WebkitTransition: `transform ${duration}ms ${mode}`,
      transition: `transform ${duration}ms ${animation?.mode || "ease-in-out"}`,
      WebkitTransform: `rotate(${rotateAngle}deg)`,
      transform: `rotate(${rotateAngle}deg)`,
      background: `url(${turntableImage}) no-repeat center top`,
      backgroundSize: "100%",
    };
  }, [duration, mode, rotateAngle, turntableImage]);

  //指针的style
  const pointerStyle = useMemo(() => {
    return {
      maxWidth: `${px2rem(size / 3)}`,
    };
  }, [size]);

  const formatPrizeList = (list) => {
    // 记录每个奖的位置
    const ratio = prizeScale || 0.7;
    const angleList = [];
    const len = list.length;
    if (len <= 0) return;
    // 计算单个奖项所占的角度
    const average = CIRCLE_ANGLE / len;
    const half = average / 2;
    // 循环计算给每个奖项添加style属性
    let list_ = [];
    list.forEach((item, index) => {
      // 每个奖项旋转的位置为 当前 i * 平均值 + 平均值 / 2
      const angle = -(index * average + half) + offsetRotate;
      // 增加 style
      const style_ = {
        WebkitTransform: `translate(-50%, 0) rotate(${angle}deg)`,
        transform: `translate(-50%, 0) rotate(${angle}deg)`,
        width: `${px2rem((size / 2) * ratio)}`,
        height: `${px2rem(size / 2)}`,
      };
      const imgStyle = {
        transform: `scale(${ratio})`,
        marginTop: prizeOffset ? `${px2rem(prizeOffset)}` : undefined,
      };
      const fontStyle = {
        fontSize: `${px2rem(fontSize || size / 20)}`,
        maxWidth: `${px2rem((size / 2) * ratio * ratio)}`,
        transform: `scale(${ratio})`,
        color: textColor,
      };
      list_.push({
        ...item,
        style: style_,
        imgStyle,
        fontStyle,
      });
      // 记录每个奖项的角度范围
      angleList.push(index * average + half - offsetRotate);
    });
    setAngleList([...angleList]);
    return list_;
  };

  const startGame = () => {
    if (isRotating) return;
    onPlay &&
      onPlay((prizeId) => {
        return Rotating(prizeId);
      });
  };

  const Rotating = (prizeId) => {
    return new Promise((resolve, reject) => {
      setIsRotating(true);
      let index = 0;
      const initialAngle = // 初始角度
        rotateAngle +
        // 多旋转的圈数
        circle * CIRCLE_ANGLE;
      for (const item of prizeGroup) {
        if (item.id === prizeId) {
          // 计算角度
          const angle =
            initialAngle +
            // 奖项的角度
            angleList[index] -
            (rotateAngle % CIRCLE_ANGLE);
          setRotateAngle(angle);
          setTimeout(() => {
            setIsRotating(false);
            resolve(item);
          }, 500 + duration);
          return;
        }
        index++;
      }
      setRotateAngle(initialAngle);
      setTimeout(() => {
        setIsRotating(false);
        reject();
      }, 500 + duration);
    });
  };

  const [pointerImgStyle, setPointerImgStyle] = useState({
    maxWidth: "100%",
    width: "auto",
    height: "auto",
  });
  // const pointerOnLoad = (e) => {
  //   if (!e.detail) {
  //     setPointerImgStyle(pointerImgStyle);
  //     return;
  //   }
  //   setPointerImgStyle({
  //     ...pointerImgStyle,
  //     width: `${px2rem(e.detail.width)}`,
  //     height: `${px2rem(e.detail.height)}`,
  //   });
  // };

  return (
    <div className={cls("loki-bigwheel x-wheel", className)} style={style}>
      <div
        className="x-wheel-main"
        style={{
          width: `${px2rem(size)}`,
          height: `${px2rem(size)}`,
        }}
      >
        <div
          className="x-wheel-pointer"
          style={pointerStyle}
          onClick={startGame}
        >
          <Image image={pointerImage} imgStyle={pointerImgStyle} />
        </div>
        <div className="x-wheel-bg" style={rotateStyle}>
          <ul className="x-prize-list">
            {curPrizeGroup?.map((item, index) => {
              // const prizeImgLoad = e => {
              //   let style = '';
              //   if (item.imgStyle) {
              //     for (const ite in item.imgStyle) {
              //       style += `${ite.replace(/([A-Z])/g, '-$1')}: ${item.imgStyle[ite]};`
              //     }
              //   }
              //   e.target.style = style + `
              //     ;width: ${px2rem(e.target.naturalWidth)}
              //     ;height: ${px2rem(e.target.naturalHeight)}
              //   `
              // }
              return (
                <li
                  key={item?.id || index}
                  className="x-prize-item"
                  style={item?.style}
                >
                  <Image {...item} />
                  <div className="prize-type" style={item.fontStyle}>
                    {item?.name || ""}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BigWheel;
