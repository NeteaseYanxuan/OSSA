/* eslint-disable jsx-quotes */
/**
 * @name 九宫格
 * @description
 *   可配置化抽奖九宫格
 *   1.九宫格: 背景图，尺寸
 *   2.开始按钮 : 指针图片,大小
 *   3.奖品背景图
 *   4.转动效果 时长
 **/
import React, { useState, useEffect, useRef } from "react";
import Utils from "./../../utils/index";
import Image from "../../baseComponents/common/Image";

const { px2rem, cls } = Utils;

const PRIZETOTAL = 8;

const lottery = {
  count: 8, //总共有多少个位置
  cynum: 50, // 圈数
  timer: 0, //setTimeout的ID，用clearTimeout清除
  speed: 75, //初始转动速度
  times: 0, //转动次数
  win: 0, //中奖位置 0 默认不中奖
};

const NineGrid: React.FC<Loki.INineGrid> = function ({
  appEnv,
  className = "",
  style = {},
  config,
  prizeGroup,
  onPlay,
}) {
  // 处理 最终的列表渲染顺序 已正常的排序思维顺序
  const ORDER_LIST = [1, 2, 3, 8, 4, 7, 6, 5];

  const { size, innerSize, backgroundImage, playImage, prizeStyle } = config;
  const [luckPrizeList, setLuckPrizeList] = useState([]); //奖品列表
  const [isRotating, setIsRotating] = useState(false); //是否正在游戏
  const domRef = useRef(null);

  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!prizeGroup || prizeGroup.length < 8) return;
    setLuckPrizeList(formatPrizeList(prizeGroup));
  }, [prizeGroup]);

  const formatPrizeList = (list) => {
    const formatList = list.map((item, index) => ({
      ...item,
      order: ORDER_LIST[index],
      style: prizeStyle && {
        backgroundImage: `url(${prizeStyle.backgroundImage})`,
      },
    }));
    formatList.splice(4, 0, {
      id: -1,
      image: playImage,
      order: -9,
    });
    return formatList;
  };

  const startGame = () => {
    if (isRotating) return;
    // const activeNode = domRef.current.querySelector('.x-prize-active');
    // if(activeNode) {
    //   activeNode.classList.remove('x-prize-active')
    // }
    if (sIndexRef.current) sIndexRef.current = 0;
    onPlay &&
      onPlay((prizeId) => {
        let index = 0,
          curPrize = null,
          prizeIndex = 0;
        for (const item of prizeGroup) {
          if (item.id === prizeId) {
            prizeIndex = ORDER_LIST[index];
            curPrize = item;
            break;
          }
          index++;
        }
        return new Promise((resolve, reject) => {
          Rotating({ prize: curPrize, index: prizeIndex }, (result) => {
            if (curPrize) resolve(result);
            else {
              reject();
              sIndexRef.current = 0;
            }
            setIsRotating(false);
          });
        });
      });
  };

  let timer = null;
  let timesCount = lottery.times;
  let speed = lottery.speed;
  // let sIndex = 1;
  const sIndexRef = useRef(0);
  // const [sIndex, setSIndex] = useState(1);

  const Rotating = ({ prize, index }, onFinish) => {
    timesCount++;
    setIsRotating(true);
    choseRotateActive();
    if (timesCount > lottery.cynum + 10) {
      if (!prize) {
        clearTimeout(timer);
        onFinish && onFinish(null);
        return;
      } else if (index === sIndexRef.current) {
        clearTimeout(timer);
        onFinish && onFinish(prize);
        return;
      }
    }
    if (timesCount > lottery.cynum) {
      speed += 20;
    } // 惯性 越来越慢
    // sIndex++;
    // setSIndex(sIndex + 1)
    sIndexRef.current += 1;
    timer = setTimeout(() => {
      setIsRotating(false);
      Rotating({ prize, index }, onFinish);
    }, speed);
  };

  const choseRotateActive = () => {
    if (!domRef.current) return;
    // let pre = sIndex - 1;
    if (sIndexRef.current > PRIZETOTAL) sIndexRef.current = 0;
    // const preDom = domRef.current.querySelector(`.x-order-${pre}`);
    // const downDom = domRef.current.querySelector(`.x-order-${sIndex}`);
    // if (pre > 0 && preDom) {
    //   preDom.classList.remove('x-prize-active');
    // }
    // if (downDom) {
    //   downDom.classList.add('x-prize-active');
    // }
  };

  const _style = {
    ...style,
    backgroundImage: `url(${backgroundImage})`,
    width: `${px2rem(size)}`,
    height: `${px2rem(size)}`,
  };

  const innerStyle = {
    width: `${px2rem(innerSize)}`,
    height: `${px2rem(innerSize)}`,
  };

  return (
    <div
      ref={(ref) => (domRef.current = ref)}
      className={cls("loki-ninegrid", className)}
      style={_style}
    >
      <ul className="x-prize-list" style={innerStyle}>
        {luckPrizeList?.map((item, index) => {
          return item.order !== -9 ? (
            <li
              key={item?.id || index}
              className={`x-prize-item x-order-${item.order} ${
                item.order === sIndexRef.current ? "x-prize-active" : ""
              }`}
            >
              <div className="x-prize-pic" style={item.style}>
                <Image {...item} />
              </div>
            </li>
          ) : (
            <li
              key={item.id}
              className="x-prize-item x-prize-start"
              onClick={startGame}
            >
              <div className="x-prize-pic">
                <Image {...item} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NineGrid;
