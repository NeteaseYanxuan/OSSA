type appEnv = 'React' | 'Taro';
type IPrizeGroup = {
  id: number; // 奖品id
  image: string; // 奖品图片
  name: string; // 奖品名称
}

type INineGridConfig = {
  size: number; // 尺寸
  innerSize: number; // 内圈奖品框尺寸
  backgroundImage: string; // 底盘
  playImage: string; // 开始按钮
  prizeStyle: {
    backgroundImage: string; // 奖品背景图
  };
}

export interface INineGrid {
  appEnv: IAppEnv;
  className?: string;
  style?: any;
  config: INineGridConfig; // 转盘素材配置
  prizeGroup: IPrizeGroup[]; // 奖品组
  onPlay: (onFinish: (prizeId: number) => Promise) => void; // 开始事件
}

type IBigWheelConfig = {
  size: number; // 转盘尺寸
  turntableImage: string; // 转盘底盘
  pointerImage: string; // 转盘指针
  prize: {
    fontSize: number;
    textColor: string;
  };
  offsetRotate?: number; // 转盘偏差度
  prizeOffset?: number; // 转盘上奖品的偏移
  prizeScale?: number; // 奖品缩放系数
  animation: { // 
    duration: number; // 转盘动效时长
    mode: 'ease-in-out' | 'linear' | 'ease-in' | 'ease-out'; // 转动模式
  };
}

export interface IBigWheel {
  appEnv: IAppEnv;
  className?: string;
  style?: any;
  config: IBigWheelConfig; // 转盘素材配置
  prizeGroup: IPrizeGroup[]; // 奖品组
  onPlay: (onFinish: (prizeId: number) => Promise) => void; // 开始事件
}

type ITigerBoxConfig = {
  size: number;
  backgroundImage: string;
  innerBoxImage: string, 
  playButton: {
    default: string;
    active?: string;
    position: 'left' | 'center' | 'right';
  };
  turnsTime?: number;
  circleNumber?: number;
};
export interface ITigerBox {
  appEnv: IAppEnv;
  className?: string;
  style?: any;
  config: ITigerBoxConfig; //老虎机基本配置
  prizeGroup: IPrizeGroup[]; // 奖品组
  onPlay: (onFinish: (prizeId: number) => Promise) => void; // 开始事件
}


type IScratchCardConfig = {
  coverImage?: string;
  coverColor?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  size: number;
}
export interface IScratchCard {
  appEnv: IAppEnv;
  className?: string;
  style?: React.CSSProperties;
  config: IScratchCardConfig;
  onPlay: (onFinish: (prize: IPrizeGroup) => Promise) => void; // 开始事件
}

type IFlipCardConfig = {
  type: 'single' | 'multiple';
  size?: number;
  card: {
    default: string;
    active: string;
  },
  prize: {
    image: string;
  }
}
export interface IFlipCard {
  appEnv: IAppEnv;
  className?: string;
  style?: React.CSSProperties;
  config: IFlipCardConfig;
  onPlay: (onFinish: (prize: IPrizeGroup) => Promise) => void; // 开始事件
}

type IBox = {
  type: 'image' | 'lottie';
  url: string;
}

type IBlindBoxConfig = {
  size?: number;
  ratio?: number; // 图片基础倍数
  backGroundImage?: string;
  box: {
    default?: string | IBox;
    active?: string | IBox;
  },
  btnImage?: string
}
export interface IBlindBox {
  appEnv: IAppEnv;
  className?: string;
  style?: React.CSSProperties;
  config: IBlindBoxConfig;
  onPlay: (onFinish: (prize: IPrizeGroup) => Promise) => void; // 开始事件
}
export const BigWheel;
export const NineGrid;
export const TigerBox;
export const ScratchCard;
export const FlipCard;
export const BlindBox;
export default {
  BigWheel,
  NineGrid,
  TigerBox,
  ScratchCard,
  FlipCard,
  BlindBox
}