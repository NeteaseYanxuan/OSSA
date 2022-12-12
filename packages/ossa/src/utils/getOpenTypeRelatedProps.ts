const openTypeRelatedProps = [
  'lang',
  'sessionFrom',
  'sendMessageTitle',
  'sendMessagePath',
  'sendMessageImg',
  'showMessageCard',
  'appParameter',
  'onContact',
  'onGetUserInfo',
  'onGetPhoneNumber',
  'onOpenSetting',
  'scope',
  'onGetAuthorize',
  'onGetRealNameAuthInfo',
  'onError',
  'onLaunchApp',
  'onChooseAvatar',
]

/**
 * 获取和openType相关的属性和方法
 *
 * @param {object} props
 * @returns {object}
 */
function getOpenTypeRelatedProps(props: object): object {
  return openTypeRelatedProps.reduce(
    (result, propKey) =>
      props[propKey] !== undefined
        ? { ...result, [propKey]: props[propKey] }
        : result,
    {}
  )
}

export default getOpenTypeRelatedProps
