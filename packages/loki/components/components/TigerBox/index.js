/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @name 老虎机
 * @description
 **/
import React, { useState, useEffect, useRef } from "react";
import Utils from "./../../utils/index";
const { px2rem, cls } = Utils;
const TigerBox = ({
  appEnv,
  className = "",
  style = {},
  config,
  prizeGroup = [],
  onPlay,
}) => {
  const domRef = useRef(null);
  const [prizeList, setPrizeList] = useState([]);
  const turnsTime =
    (config === null || config === void 0 ? void 0 : config.turnsTime) || 0; //配置动画时间
  const circleNumber =
    (config === null || config === void 0 ? void 0 : config.circleNumber) || 0; //配置滚动圈数
  const duration = 3000; // 转动时长
  const [isRotating, setIsRotating] = useState(false); //上锁
  const [isTappingDown, setIsTappingDown] = useState(false); //上锁
  let startTime = null; //开始时间
  let options = [];
  const [boxStyle, setBoxStyle] = useState(null);
  const [innerStyle, setInnerStyle] = useState(null);
  const [itemStyle, setItemStyle] = useState(null);
  const [playButtonStyle, setPlayButtonStyle] = useState(null);
  useEffect(() => {
    if (!config) return;
    const { size, backgroundImage, innerBoxImage, playButton } = config;
    const ratio = size / 600;
    let scaleRatio = 1;
    let realImgWidth;
    const bgImg = new Image();
    bgImg.src = backgroundImage;
    bgImg.onload = function () {
      const heightRatio = bgImg.naturalHeight / bgImg.naturalWidth;
      // 短距 表示缩放的尺寸
      scaleRatio =
        (heightRatio < 1 ? bgImg.naturalHeight : bgImg.naturalWidth) / size;
      realImgWidth = heightRatio < 1 ? size : size / heightRatio;
      setBoxStyle(
        Object.assign(Object.assign({}, style), {
          width: `${px2rem(size)}`,
          height: `${px2rem(size)}`,
          backgroundSize:
            heightRatio > 1 ? `auto ${px2rem(size)}` : `${px2rem(size)} auto`,
          backgroundRepeat: "no-repeat",
          maxWidth: `${px2rem(size)}`,
          maxHeight: `${px2rem(size)}`,
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center center",
        })
      );
      const img = new Image();
      img.src = innerBoxImage || backgroundImage;
      img.onload = function (e) {
        // const innerWidth = realImgWidth * scaleRatio;
        const innerWidth = realImgWidth * 0.8;
        const heightRatio = img.naturalHeight / img.naturalWidth;
        setInnerStyle({
          left: "50%",
          top: px2rem(50 * ratio),
          marginLeft: `-${px2rem(innerWidth / 2)}`,
          width: px2rem(innerWidth),
          height: px2rem(innerWidth * heightRatio),
          padding: `${px2rem(30 * ratio)}`,
          boxSizing: "border-box",
        });
        setItemStyle({
          width: `${px2rem((innerWidth / 3) * 0.8)}`,
        });
        const btnImg = new Image();
        btnImg.src = playButton.default;
        btnImg.onload = function () {
          const btnBaseWidth =
            btnImg.naturalWidth * (realImgWidth / bgImg.naturalWidth);
          const _heightRatio = btnImg.naturalHeight / btnImg.naturalWidth;
          const _marginLeft = {
            left: `${px2rem((size - innerWidth) / 2)}`,
            center: `calc(50% - ${px2rem(btnBaseWidth / 2)})`,
            // right: `${px2rem((size - innerWidth)/2 + innerWidth)}`
            right: `${px2rem(innerWidth)}`,
          }[playButton.position || "right"];
          setPlayButtonStyle({
            marginTop: px2rem(50 * ratio),
            marginLeft: _marginLeft,
            width: `${px2rem(btnBaseWidth)}`,
            height: `${px2rem(btnBaseWidth * _heightRatio)}`,
          });
        };
      };
    };
  }, [config]);
  useEffect(() => {
    if (!prizeGroup) return;
    setPrizeList(prizeGroup);
  }, [prizeGroup]);
  const startGame = () => {
    if (isRotating) return;
    setIsRotating(true); //上锁
    setIsTappingDown(true);
    setTimeout(() => {
      setIsTappingDown(false);
    }, 200);
    onPlay &&
      onPlay((prizeId) => {
        return new Promise((resolve, reject) => {
          Rotating(prizeId, () => {
            for (const item of prizeGroup) {
              if (item.id === prizeId) resolve(item);
            }
            reject();
          });
        });
      });
  };
  // 对requestAnimationFrame做兼容处理
  const animationFun =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (fn) {
      window.setTimeout(fn, 1000 / 60);
    };
  const Rotating = (prizeId, callback) => {
    if (options.length) {
      // 增加动画过程中，再次点击开始，立即结束动画，且置为对应中位置
      options.forEach((item) => {
        item.isFinished = true;
        const Y = -item.location;
        item.el.style.transform = "translateY(" + Y + "px)";
      });
      return;
    }
    options = Array.from(
      domRef.current.querySelectorAll(".loki-tigerbox-wrap")
    ).map((item, i) => {
      const dom = domRef.current.querySelectorAll(".loki-tigerbox-wrap")[i];
      const itemHeight =
        domRef.current.querySelectorAll(".loki-item")[0].offsetHeight;
      return {
        el: dom.querySelector(".loki-wrap"),
        location: prizeId * itemHeight,
        rollTimes: 2000 + Math.random() * 500 + i * 500 + 1000 * circleNumber,
        height: prizeList.length * itemHeight,
        duration: duration + i * 2000 + turnsTime,
        isFinished: false,
      };
    });
    animationFun(animate.bind(null, callback));
  };
  const animate = (callback, timestamp) => {
    if (!options.length) {
      return false;
    }
    // timestamp 当前的方法持续的毫秒数
    if (startTime == null) {
      startTime = timestamp; // 动画初始时间
    }
    const timeDiff = timestamp - startTime; //动画持续的时间
    options.forEach((item) => {
      if (item.isFinished) {
        return;
      }
      const time = Math.max(item.duration - timeDiff, 0); // 总的持续时间 - 动画持续时间 = 剩下的时间, 0 表示结束
      const power = 3;
      const offset =
        (Math.pow(time, power) / Math.pow(item.duration, power)) *
        item.rollTimes;
      const distance = -1 * Math.floor((offset + item.location) % item.height);
      item.el.style.transform = "translateY(" + distance + "px)";
      if (timeDiff > item.duration) {
        item.isFinished = true;
      }
    });
    if (options.every((item) => item.isFinished)) {
      // 重置
      setIsRotating(false);
      options = [];
      startTime = null;
      callback && callback();
    } else {
      animationFun(animate.bind(null, callback));
    }
  };
  return React.createElement(
    "div",
    {
      className: cls("loki-tigerbox", className),
      ref: (ref) => (domRef.current = ref),
      style: boxStyle,
    },
    React.createElement(
      "div",
      { className: "loki-tigerbox--container", style: innerStyle },
      React.createElement("img", {
        src: config.innerBoxImage,
        alt: "",
        className: "loki-tigerbox--container__bg",
      }),
      [{}, {}, {}].map((ite, index) => {
        var _a;
        return React.createElement(
          "div",
          { className: "loki-tigerbox-wrap", key: `ite-${index}` },
          React.createElement(
            "div",
            { className: "loki-tigerbox-content" },
            React.createElement(
              "div",
              { className: "loki-wrap" },
              (_a = [...prizeList, ...prizeList]) === null || _a === void 0
                ? void 0
                : _a.map((item, index) => {
                    return React.createElement(
                      "div",
                      {
                        className: "loki-item",
                        key: `loki-${index}`,
                        style: itemStyle,
                      },
                      React.createElement(
                        "div",
                        { className: "loki-item-image" },
                        React.createElement("img", {
                          className: "loki-item-img",
                          src: item.image,
                        })
                      )
                    );
                  })
            )
          )
        );
      })
    ),
    React.createElement(
      "div",
      {
        className: "loki-tigerbox--btn",
        onClick: startGame,
        style: playButtonStyle,
      },
      React.createElement("img", {
        src:
          config && isTappingDown
            ? config.playButton.active
            : config.playButton.default,
      })
    )
  );
};
export default TigerBox;
//# sourceMappingURL=index.js.map
