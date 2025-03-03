import Cookies from 'js-cookie'
import { useUserStoreHook } from '@/store/modules/user'
import { useLocalStorage, type MaybeRefOrGetter } from '@vueuse/core'

export interface DataInfo {
  /** token */
  token: string
  /** 头像 */
  avatar?: string
  /** 用户名 */
  username?: string
  /** 昵称 */
  nickname?: string
}

export const userKey = 'user-info'
export const TokenKey = 'authorized-token'

/** 获取`token` */
export function getToken(): DataInfo {
  // 此处与`TokenKey`相同，此写法解决初始化时`Cookies`中不存在`TokenKey`报错
  return Cookies.get(TokenKey)
    ? JSON.parse(Cookies.get(TokenKey)!)
    : useLocalStorage(userKey, null).value
}

/**
 * @description 设置`token`以及一些必要信息并采用无感刷新`token`方案
 * 无感刷新：后端返回`accessToken`（访问接口使用的`token`）、`refreshToken`（用于调用刷新`accessToken`的接口时所需的`token`，`refreshToken`的过期时间（比如30天）应大于`accessToken`的过期时间（比如2小时））、`expires`（`accessToken`的过期时间）
 * 将`accessToken`、`expires`、`refreshToken`这三条信息放在key值为authorized-token的cookie里（过期自动销毁）
 * 将`avatar`、`username`、`nickname`、`roles`、`permissions`、`refreshToken`、`expires`这七条信息放在key值为`user-info`的localStorage里（利用`multipleTabsKey`当浏览器完全关闭后自动销毁）
 */
export function setToken(data: DataInfo) {
  const { token } = data

  function setUserKey({ avatar, username, nickname }: Partial<DataInfo>) {
    useUserStoreHook().SET_AVATAR(avatar)
    useUserStoreHook().SET_USERNAME(username)
    useUserStoreHook().SET_NICKNAME(nickname)
    useLocalStorage(
      userKey,
      {
        token,
        avatar,
        username,
        nickname,
      },
      {
        mergeDefaults: true,
      },
    )
  }

  if (data.username) {
    const { username } = data
    setUserKey({
      avatar: data?.avatar ?? '',
      username,
      nickname: data?.nickname ?? '',
    })
  } else {
    const avatar = useLocalStorage(userKey, {} as MaybeRefOrGetter<DataInfo>).value?.avatar ?? ''
    const username =
      useLocalStorage(userKey, {} as MaybeRefOrGetter<DataInfo>).value?.username ?? ''
    const nickname =
      useLocalStorage(userKey, {} as MaybeRefOrGetter<DataInfo>).value?.nickname ?? ''
    setUserKey({
      avatar,
      username,
      nickname,
    })
  }
}

/** 删除`token`以及key值为`user-info`的localStorage信息 */
export function removeToken() {
  Cookies.remove(TokenKey)
  useLocalStorage(userKey, null).value = null
}

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
  return 'Bearer ' + token
}
