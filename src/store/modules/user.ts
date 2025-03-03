import { defineStore } from 'pinia'
import { type UserResult, getLogin } from '@/api/user'
import { type DataInfo, setToken, removeToken, userKey } from '@/utils/auth'

export const useUserStore = defineStore('user', {
  persist: true,
  state: () => {
    return {
      token: '12312313dadsasdadasdads',
    }
  },
  // state: (): userType => ({
  //   // 头像
  //   avatar: storageLocal().getItem<DataInfo<number>>(userKey)?.avatar ?? '',
  //   // 用户名
  //   username: storageLocal().getItem<DataInfo<number>>(userKey)?.username ?? '',
  //   // 昵称
  //   nickname: storageLocal().getItem<DataInfo<number>>(userKey)?.nickname ?? '',
  // }),
  // actions: {
  //   /** 存储头像 */
  //   SET_AVATAR(avatar: string) {
  //     this.avatar = avatar
  //   },
  //   /** 存储用户名 */
  //   SET_USERNAME(username: string) {
  //     this.username = username
  //   },
  //   /** 存储昵称 */
  //   SET_NICKNAME(nickname: string) {
  //     this.nickname = nickname
  //   },
  // /** 登入 */
  // async loginByUsername(data) {
  //   return new Promise<UserResult>((resolve, reject) => {
  //     getLogin(data)
  //       .then((data) => {
  //         if (data?.success) setToken(data.data)
  //         resolve(data)
  //       })
  //       .catch((error) => {
  //         reject(error)
  //       })
  //   })
  // },
  /** 前端登出（不调用接口） */
  // logOut() {
  //   this.username = ''
  //   this.roles = []
  //   this.permissions = []
  //   removeToken()
  //   useMultiTagsStoreHook().handleTags('equal', [...routerArrays])
  //   resetRouter()
  //   router.push('/login')
  // },
  // },
})
