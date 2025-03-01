import { http } from '@/utils/http'

export type UserResult = {
  success: boolean
  data: {
    /** 头像 */
    avatar: string
    /** 用户名 */
    username: string
    /** 昵称 */
    nickname: string
  }
}

export const getLogin = async () => {
  return await http.get('http://jsonplaceholder.typicode.com/posts')
}
