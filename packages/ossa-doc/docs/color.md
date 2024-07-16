---
sidebar_position: 3
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/color/demo/index'
---

# Color 规范

### scss变量
```scss
/* Theme Color */
$--color-primay: #AF7357 !default;           // 主题色

/* Color */
$--color-red:#DD1A21 !default;              // 品牌红
$--color-yellow:#F48F18 !default;           // 营销色
$--color-green:#2BAB52 !default;            // 成功状态色
$--color-golden:#C3945B !default;           // 品牌金
$--color-line:#d9d9d9 !default;


/* Text Color */
$--text-color-base:#333 !default;         // 主要文字颜色
$--text-color-base-inverse:#fff !default; // 文字反色
$--text-color-secondary:#7F7F7F !default;    // 次要文字颜色
$--text-color-placeholder:#999 !default;  // 弱文字颜色
$--text-color-disabled:#ccc !default;     // 不可用文字颜色


/* background-color */
$--fill-body:#F4F4F4 !default;               // 通用背景色
$--fill-bar:#FAFAFA !default;                // bar背景
$--fill-mask:rgba(0, 0, 0, 0.5) !default;    // 遮罩背景
$--fill-gray:#7f7f7f !default;               // 许多小图标的背景，比如一些小圆点，加减号
$--fill-disable:#ccc !default;               // 不可用背景色
$--fill-default:#fff !default;               // 默认背景色
$--fill-model-btns-active:#f9f9f9 !default;  // 模态框按钮按压背景色
$--fill-toast:rgba(0, 0, 0, 0.8);
$-fill-model-default: #000;               //弹框蒙版
```

### scss变量覆盖

新建scss文件或者在`app.scss`中直接写入以下内容
```scss
$--color-red: #ac3337;
@import "ossaui/dist/style/index.scss";
```

然后在`app.ts`文件中引入
```ts
import "./app.scss";
```