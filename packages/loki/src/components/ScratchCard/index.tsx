/* eslint-disable jsx-quotes */
/**
 * @name 刮刮卡
 * @description
 **/
import React, { useState, useEffect, useRef } from "react";
import { cls } from "./../../utils/index";
import { IScratchCard } from "./../../types/loki";

const ScratchCard: React.FC<IScratchCard> = ({
  appEnv,
  className = "",
  style = {},
  config,
  onPlay,
}) => {
  const [didMount, setDidMount] = useState(false);
  const canvasData = {
    offsetX: null, //X偏移量
    offsetY: null, //Y偏移量
    isDraw: false, //开始绘制
    isDown: false, //是否涂完
    ctx: null, //画笔对象
    canvas: null, //canvas对象
  };
  const configData = {
    coverImage: null, //图片图层
    coverColor: "darkgray", //纯色图层
    backgroundImage: config.backgroundImage, // 背景图片
    backgroundColor: "#e0e0e0", // 背景颜色
    radius: 20, //擦除半径
    pixelRatio: 1, //屏幕倍数
    doneCallback: null, //涂抹完之后的回调
    drawCallback: null, //擦除过程中触发的回调
    fadeOut: 500, //多久后消失
    showPercent: 80, //显示的百分比
    width: config?.size || 300,
    height: config?.size / 2 || 150,
  };

  const showRef = useRef<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    handleConfig();
    initScraping();
  }, []);

  // 初始化configData里面的数据
  const handleConfig = () => {
    const keys = Object.keys(config);
    if (keys.length === 0) return;
    for (const key in configData) {
      if (keys.includes(key)) {
        configData[key] = config[key];
      }
    }
  };

  // 初始化刮刮卡
  const initScraping = () => {
    initCanvas();
    showRef.current.style.lineHeight = configData.height + "px";
    showRef.current.style.height = configData.height + "px";
    showRef.current.style.width = configData.width + "px";
  };

  // 初始化canvas
  const initCanvas = () => {
    //配置的初始化
    canvasData.ctx = initCanvasConfig();
    //方法的初始化
    initCanvasMethods();
  };

  //初始化canvas配置项
  const initCanvasConfig = () => {
    //获取画笔对象
    let ctx = canvasRef.current.getContext("2d");
    //   //获取canvas的偏移量，方便后续计算
    canvasData.offsetX = containerRef.current.offsetLeft;
    canvasData.offsetY = containerRef.current.offsetTop;
    //   //如果设置了图片图层
    if (configData.coverImage) {
      //这边或初始化一张图片然后做覆盖操作
      let coverImage = new Image();
      const url = configData.coverImage;
      coverImage.src = url + "?" + new Date().getTime();
      coverImage.setAttribute("crossOrigin", "");
      //读取图像覆盖操作
      coverImage.onload = function () {
        ctx.drawImage(coverImage, 0, 0, configData.width, configData.height);
        ctx.globalCompositeOperation = "destination-out";
        setDidMount(true);
      };
    } else {
      //如果没设置了图片图层，就是纯色的覆盖
      ctx.fillStyle = configData.coverColor;
      //矩形填充ctx.fillRect(x坐标, y坐标, 长度, 宽度);

      ctx.fillRect(0, 0, configData.width, configData.height);
      //涂抹形式的确定，详情看文档
      ctx.globalCompositeOperation = "destination-out";
      setDidMount(true);
    }

    return ctx;
  };

  //方法的初始化
  const initCanvasMethods = () => {
    //pc端事件的绑定
    canvasRef.current.addEventListener("mousedown", handleDown, {
      passive: false,
    });
    canvasRef.current.addEventListener("mousemove", handleScratchfunction, {
      passive: false,
    });
    canvasRef.current.addEventListener("mouseup", handleEnd, {
      passive: false,
    });
    //移动端事件的绑定
    canvasRef.current.addEventListener("touchstart", handleDown, {
      passive: false,
    });
    canvasRef.current.addEventListener("touchmove", handleScratchfunction, {
      passive: false,
    });
    canvasRef.current.addEventListener("touchend", handleEnd, {
      passive: false,
    });
  };

  //down事件
  const handleDown = (e) => {
    e.preventDefault();
    canvasData.isDraw = true;
  };

  //move事件
  const handleScratchfunction = (e) => {
    //阻止默认事件
    e.preventDefault();
    // //如果是没画完且画笔落下时的判断
    if (canvasData.isDraw && !canvasData.isDown) {
      //如果移动端上有多个触点进行唯一触点判断
      if (e.changedTouches) {
        e = e.changedTouches[e.changedTouches.length - 1];
      }
      //优雅降级判断具体坐标
      let x =
        (e.clientX + document.body.scrollLeft || e.pageX) -
          canvasData.offsetX || 0;
      let y =
        (e.clientY + document.body.scrollTop || e.pageY) - canvasData.offsetY ||
        0;

      //开始绘制
      canvasData.ctx.beginPath();
      //绘制一个圆形
      canvasData.ctx.arc(
        x * configData.pixelRatio,
        y * configData.pixelRatio,
        configData.radius * configData.pixelRatio,
        0,
        2 * Math.PI
      );
      //填充圆形
      canvasData.ctx.fill();
      //如果大于设置百分比直接清空
      if (+getScrapPercentage() > configData.showPercent) {
        scrapAll();
      }
      configData?.drawCallback && configData.drawCallback();
    }
  };

  //up事件
  const handleEnd = (e) => {
    e.preventDefault();
    canvasData.isDraw = false;
  };

  //清除图层
  const clearCanvas = () => {
    canvasData.ctx.fillRect(0, 0, configData.width, configData.height);
  };

  const [curPrizeImg, setCurPrizeImg] = useState(null);
  //刮开所有图层
  const scrapAll = () => {
    canvasData.isDown = true;
    //如果有设置消失时间
    if (configData.fadeOut > 0) {
      //加一个过渡后再清空
      canvasRef.current.style.transition =
        "all " + configData.fadeOut / 1000 + "s linear";
      canvasRef.current.style.opacity = "0";
      setTimeout(function () {
        clearCanvas();
      }, configData.fadeOut);
    } else {
      //直接全部清除
      clearCanvas();
    }
    onPlay &&
      onPlay((prize) => {
        setCurPrizeImg(prize.image);
        return new Promise((resolve) => resolve(prize));
      });
    //执行回调
    // configData.doneCallback && configData.doneCallback();
  };

  //获取刮刮卡的百分比
  const getScrapPercentage = () => {
    let imgData = canvasData.ctx.getImageData(
      0,
      0,
      configData.width,
      configData.height
    );
    //存储像素点
    let pixels = imgData.data;
    //存储当前canvas画布的像素信息
    let pixelsArr = [];
    for (let i = 0; i < pixels.length; i += 4) {
      //把透明像素点添加到obj里
      if (pixels[i + 3] < 128) {
        pixelsArr.push(pixels[i + 3]);
      }
    }
    //返回比例
    return ((pixelsArr.length / (pixels.length / 4)) * 100).toFixed(2);
  };

  return (
    <div
      className={cls("loki-scratchcard", className)}
      ref={containerRef}
      style={{
        ...style,
        visibility: didMount ? "inherit" : "hidden",
        height: configData.height,
        width: configData.width,
        backgroundImage: configData.backgroundImage
          ? `url(${configData.backgroundImage})`
          : undefined,
        backgroundColor: !configData.backgroundImage
          ? configData.backgroundColor
          : undefined,
      }}
    >
      <div
        className="loki-scratchcard--show"
        ref={showRef}
        style={{ backgroundImage: `url(${curPrizeImg})` }}
      ></div>
      <canvas
        className="loki-scratchcard--canvas"
        id="canvas"
        ref={canvasRef}
        height={configData.height}
        width={configData.width}
      ></canvas>
    </div>
  );
};

export default ScratchCard;
