/* eslint-disable jsx-quotes */
/* eslint-disable import/newline-after-import */
/**
 * @name 翻卡
 * @description
 *   可配置化翻卡
 *   1.翻卡模式 （单张、多张）
 *   2.卡片背景（正面）
 *   3.卡片背景（反面）
 *   4.尺寸
 *   5.奖品兜底
 **/
import React, { useState, useEffect } from "react";
import Utils from "./../../utils/index";
const { px2rem, cls } = Utils;
const Card = ({ appEnv, config, onClick }) => {
  const { size, card } = config;
  const [choosed, setChoosed] = useState(false);
  const [curCardBg, setCurCardBg] = useState(card.default);
  const [curPrize, setCurPrize] = useState(null);
  const [style_, setStyle_] = useState(null);
  useEffect(() => {
    if (!card) return;
    const image = new Image();
    image.src = card.default;
    image.onload = function () {
      const ratio = image.naturalHeight / image.naturalWidth;
      setStyle_({
        width: px2rem(size),
        height: px2rem(size * ratio),
      });
    };
  }, [size, card]);
  const handleClick = () => {
    onClick &&
      onClick((prize) => {
        setChoosed(!choosed);
        setTimeout(() => {
          setCurCardBg(card.active);
          setCurPrize(prize || config.prize);
        }, 240);
      });
  };
  const cardCls = cls("x-card", {
    ["x-card__choosed"]: choosed,
  });
  return React.createElement(
    "div",
    { className: cardCls, onClick: handleClick, style: style_ },
    React.createElement("img", { className: "x-card--bg", src: curCardBg }),
    curPrize &&
      React.createElement(
        "div",
        { className: "x-prize--wrapper" },
        React.createElement("img", {
          className: "x-prize",
          src: curPrize.image,
        })
      )
  );
};
const FlipCard = function ({
  appEnv,
  className = "",
  style = {},
  config = {},
  onPlay,
}) {
  const { type = "single", card, size = 600 } = config;
  const [allowPlay, setAllowPlay] = useState(true);
  const cardConfig = {
    size: (size / 3) * 0.8,
    card,
    prize: config.prize,
  };
  const handleClick = (cb) => {
    if (!allowPlay) return;
    if (type === "single") {
      setAllowPlay(false);
    }
    onPlay &&
      onPlay((item) => {
        return new Promise((resolve) => {
          cb(item);
          // @ts-ignore
          resolve();
        });
      });
  };
  return React.createElement(
    "div",
    {
      className: cls("loki-flipcard", className),
      style: Object.assign(Object.assign({}, style), { width: px2rem(size) }),
    },
    [1, 2, 3].map((item) =>
      React.createElement(Card, {
        key: item,
        appEnv: appEnv,
        config: cardConfig,
        onClick: handleClick,
      })
    )
  );
};
export default FlipCard;
//# sourceMappingURL=index.js.map
