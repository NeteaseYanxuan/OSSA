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
import React from "react";
import { IFlipCard } from "./../../types/loki";

declare const FlipCard: React.FC<IFlipCard>;
export default FlipCard;
