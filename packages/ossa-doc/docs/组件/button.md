---
sidebar_position: 4
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/button/demo/index'
---

# Button 按钮

## 介绍
按钮，可快速配置成多种样式。（小程序按钮功能待补充）

## 用法

#### 按钮类型
```jsx
<OsButton type='default'>线框按钮</OsButton>
<OsButton type='primary'>色块按钮</OsButton>
<OsButton type='special1'>特殊按钮1</OsButton>
<OsButton type='special2'>特殊按钮2</OsButton>
```

#### 禁用态
```jsx
<OsButton type='default' disabled>线框按钮</OsButton>
<OsButton type='primary' disabled>色块按钮</OsButton>
```

#### 按钮形状
```jsx
<OsButton type='default' disabled>线框按钮</OsButton>
<OsButton type='primary' disabled>色块按钮</OsButton>
<OsButton type='primary' shape='square'>色块默认</OsButton>
<OsButton type='primary' shape='round'>色块腰圆</OsButton>
```

#### 按钮尺寸
```jsx
<OsButton size='normal'>线框normal</OsButton>
<OsButton size='small'>线框small</OsButton>
<OsButton size='min'>线框min</OsButton>
<OsButton type='primary' size='block'>色块block，界面长按钮</OsButton>
<OsButton type='primary' size='large'>色块large，弹框按钮</OsButton>
<OsButton type='primary' size='normal'>色块normal</OsButton>
<OsButton type='primary' size='small'>色块small</OsButton>
<OsButton type='primary' size='min'>色块min</OsButton>
```

#### 带Icon
```jsx
<OsButton type='default' icon='collect'>普通按钮</OsButton>
<OsButton type='primary' icon='collect'>色块按钮</OsButton>
<OsButton type='special1' icon='collect'>特殊按钮1</OsButton>
<OsButton type='special2' icon='collect'>特殊按钮2</OsButton>
<OsButton type='primary' size='block' icon='collect'>色块按钮</OsButton>
```

#### 自定义颜色
```jsx
<OsButton type='default' color='#DD1A21'>自定义字体颜色</OsButton>
<OsButton type='default' bdColor='#DD1A21'>自定义边框颜色</OsButton>
<OsButton type='primary' bgColor='#DD1A21'>自定义背景颜色</OsButton>
<OsButton
  type='primary'
  bdColor='transparent'
  startBgColor='#EB767A'
  endBgColor='#DD1A21'
>
  自定义渐变色
</OsButton>
```

## API
> 小程序属性和方法，参考Taro组件库文档[Button](https://docs.taro.zone/docs/components/forms/button#api-%E6%94%AF%E6%8C%81%E5%BA%A6) 

### 属性
| 参数  | 说明                                             | 类型   | 默认值                  |
| ----- | ------------------------------------------------ | ------ | ----------------------- |
| type  | default \| primary \| special1 \| special2，可选 | string | default,特殊按钮用于sku |
| shape | round \| square，可选                            | string | square(默认有4px圆角)   |
| icon  | icon名称，参考OsIcon，可选                       | string | -                       |
| size  | min \| small \| normal \| large \| block，可选   | string | normal,特殊按钮不生效   |
| color  | 文字颜色，可选   | string | -   |
| bgColor  | 背景色，可选   | string | -   |
| bdColor  | 描边色，可选   | string | -   |
| startBgColor  | 填充渐变开始色，可选   | string | - （仅对primary按钮生效且与endBgColor配合使用）  |
| endBgColor  | 填充渐变结束色，可选   | string | - （仅对primary按钮生效且与startBgColor配合使用）  |
| isDisabled  | 是否禁用，可选   | boolean | false  |
| customStyle  | 自定义样式，可选   | object | -  |
| className  | 自定义类名，可选   | string | -  |
| loading  | 名称前是否带 loading 图标，可选   | boolean | false  |
| formType  | 用于 `<form/>` 组件，点击分别会触发 `<form/>` 组件的 submit/reset 事件，可选   | keyof FormType | -  |
| openType  | 微信开放能力，可选   | OpenType | -  |
| hoverClass  | 指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果，可选   | string | button-hover  |
| hoverStyle  | 由于 RN 不支持 hoverClass，故 RN 端的 Button 组件实现了 `hoverStyle`属性，写法和 style 类似，只不过 `hoverStyle` 的样式是指定按下去的样式，可选   | StyleProp&lt;ViewStyle&gt; | none  |
| hoverStopPropagation  | 指定是否阻止本节点的祖先节点出现点击态，可选   | boolean | false  |
| hoverStartTime  | 按住后多久出现点击态，单位毫秒，可选   | number | 20  |
| hoverStayTime  | 手指松开后点击态保留时间，单位毫秒，可选   | number | 70  |
| lang  | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。<br /><br />生效时机: `open-type="getUserInfo"`，可选   | Lang | -  |
| sessionFrom  | 会话来源<br /><br />生效时机：`open-type="contact"`，可选   | string | -  |
| sendMessageTitle  | 会话内消息卡片标题<br /><br />生效时机：`open-type="contact"`，可选   | string | 当前标题  |
| sendMessagePath  | 会话内消息卡片点击跳转小程序路径<br /><br />生效时机：`open-type="contact"`，可选   | string | 当前标题  |
| sendMessageImg  | 会话内消息卡片图片<br /><br />生效时机：`open-type="contact"`，可选   | string | 截图  |
| appParameter  | 打开 APP 时，向 APP 传递的参数<br /><br />生效时机：`open-type="launchApp"`，可选   | string | -  |
| scope  | 支付宝小程序 scope<br /><br />生效时机：`open-type="getAuthorize"`，可选   | userInfo \| phoneNumber | -  |
| showMessageCard  | 显示会话内消息卡片<br /><br />生效时机：`open-type="contact"`，可选   | boolean | -  |
| publicId  | 生活号 id，必须是当前小程序同主体且已关联的生活号，open-type="lifestyle" 时有效，可选   | string | -  |
| templateId  | 发送订阅类模板消息所用的模板库标题 ID ，可通过 getTemplateLibraryList 获取<br />当参数类型为 Array 时，可传递 1~3 个模板库标题 ID，可选   | string \| string[] | -  |
| subscribeId  | 发送订阅类模板消息时所使用的唯一标识符，内容由开发者自定义，用来标识订阅场景<br />注意：同一用户在同一 subscribe-id 下的多次授权不累积下发权限，只能下发一条。若要订阅多条，需要不同 subscribe-id，可选   | string | -  |
| groupId  | 打开群资料卡时，传递的群号，可选   | string | -  |
| guildId  | 打开频道页面时，传递的频道号，可选   | string | -  |
| shareType  | 分享类型集合，请参考下面share-type有效值说明。share-type后续将不再维护，请更新为share-mode，可选   | string | 27 |
| shareMode  | 分享类型集合，请参考下面share-mode有效值说明，可选   | string | ['qq', 'qzone'] |
| ariaLabel  | 无障碍访问，（属性）元素的额外描述，可选   | string | - |
| openId  | 添加好友时，对方的 openid，可选   | string | - |
| shareMessageFriendInfo  | 发送对象的 FriendInfo，可选   | string | - |
| shareMessageTitle  | 转发标题，不传则默认使用当前小程序的昵称。 FriendInfo，可选   | string | - |
| shareMessageImg  | 转发显示图片的链接，可以是网络图片路径（仅 QQ CDN 域名路径）或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4FriendInfo，可选   | string | - |


### 方法
| 函数名  | 说明       | 参数      |
| ------- | ---------- | --------- |
| onClick | 点击时触发 | event对象 |
| onGetUserInfo | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与 Taro.getUserInfo 返回的一致<br /><br />生效时机: `open-type="getUserInfo"` | onGetUserInfoEventDetail |
| onGetAuthorize | 支付宝获取会员基础信息授权回调<br /><br />生效时机：`open-type="getAuthorize"` | event对象 |
| onContact | 客服消息回调<br /><br />生效时机：`open-type="contact"` | onContactEventDetail |
| onGetPhoneNumber | 获取用户手机号回调<br /><br />生效时机：`open-type="getphonenumber"` | onGetPhoneNumberEventDetail |
| onError | 当使用开放能力时，发生错误的回调<br /><br />生效时机：`open-type="launchApp"` | event对象 |
| onOpenSetting | 在打开授权设置页后回调<br /><br />生效时机：`open-type="openSetting"` | onOpenSettingEventDetail |
| onLaunchApp | 打开 APP 成功的回调<br /><br />生效时机：`open-type="launchApp"` | event对象 |
| onChooseAvatar | 获取用户头像回调<br /><br />生效时机：`open-type="chooseAvatar"` | event对象 |
| onFollowLifestyle | 当 open-type 为 lifestyle 时有效。<br />当点击按钮时触发。<br />event.detail = { followStatus }，followStatus 合法值有 1、2、3，其中 1 表示已关注。2 表示用户不允许关注。3 表示发生未知错误；<br />已知问题：基础库 1.0，当用户在点击按钮前已关注生活号，event.detail.followStatus 的值为 true。 | { followStatus: true or 1 or 2 or 3; } |
| onChooseAddress | 用户点击该按钮时，调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，从返回参数的 detail 中获取，和 swan.chooseAddress 一样的。和 open-type 搭配使用，使用时机：open-type="chooseAddress" | event对象 |
| onChooseInvoiceTitle | 用户点击该按钮时，选择用户的发票抬头，和 swan.chooseInvoiceTitle 一样的。和 open-type 搭配使用，使用时机：open-type="chooseInvoiceTitle" | event对象 |
| onLogin | 登录回调，和 open-type 搭配使用，使用时机：open-type="login"。可以通过返回参数的 detail 判断是否登录成功，当 errMsg 为'login:ok'时即为成功。如想获取登录凭证请使用 swan.getLoginCode | event对象 |
| onSubscribe | 订阅消息授权回调，和 open-type 搭配使用，使用时机：open-type="subscribe" | event对象 |
| onAddFriend | 添加好友的回调 | event对象 |
| onAddGroupApp | 添加群应用的回调。errCode 错误码：41004（当前用户非管理员或群主，无权操作），41005（超过可添加群应用的群数量） | event对象 |


### FormType

form-type 的合法值

| 参数 | 说明 |
| --- | --- |
| submit | 提交表单 |
| reset | 重置表单 |

### OpenType

open-type 的合法值

### openTypeKeys

open-type 的合法值

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| weapp | `{ contact: any; share: any; getPhoneNumber: any; getUserInfo: any; launchApp: any; openSetting: any; feedback: any; chooseAvatar: any; }` |  |
| alipay | `{ share: any; getAuthorize: any; contactShare: any; lifestyle: any; }` | 支付宝小程序专属的 open-type 合法值<br />[参考地址](https://opendocs.alipay.com/mini/component/button) |
| qq | `{ share: any; getUserInfo: any; launchApp: any; openSetting: any; feedback: any; openGroupProfile: any; addFriend: any; addColorSign: any; openPublicProfile: any; addGroupApp: any; shareMessageToFriend: any; }` | QQ 小程序专属的 open-type 合法值<br />[参考地址](https://q.qq.com/wiki/develop/miniprogram/component/form/button.html) |

### Lang

lang 的合法值

| 参数 | 说明 |
| --- | --- |
| en | 英文 |
| zh_CN | 简体中文 |
| zh_TW | 繁体中文 |

### onGetUserInfoEventDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| userInfo | `{ nickName: string; avatarUrl: string; gender: keyof Gender; province: string; city: string; country: string; }` | 是 |  |
| rawData | `string` | 是 | 不包括敏感信息的原始数据 `JSON` 字符串，用于计算签名 |
| signature | `string` | 是 | 使用 `sha1(rawData + sessionkey)` 得到字符串，用于校验用户信息 |
| encryptedData | `string` | 是 | 包括敏感数据在内的完整用户信息的加密数据 |
| iv | `string` | 是 | 加密算法的初始向量 |
| errMsg | `string` | 是 |  |
| cloudID | `string` | 否 | 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud) |

### Gender

性别的合法值

| 参数 | 说明 |
| --- | --- |
| 0 | 未知 |
| 1 | 男 |
| 2 | 女 |

### onContactEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` |  |
| path | `string` | 小程序消息指定的路径 |
| query | `Record<string, any>` | 小程序消息指定的查询参数 |

### onGetPhoneNumberEventDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| errMsg | `string` | 是 |  |
| encryptedData | `string` | 是 | 包括敏感数据在内的完整用户信息的加密数据 |
| iv | `string` | 是 | 加密算法的初始向量 |
| code | `string` | 否 | 动态令牌。可通过动态令牌换取用户手机号。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%BC%95) |

### onOpenSettingEventDetail

| 参数 | 类型 |
| --- | --- |
| errMsg | `string` |
| authSetting | `Record<string, boolean>` |












