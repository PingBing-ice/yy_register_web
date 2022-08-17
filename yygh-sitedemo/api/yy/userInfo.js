import request from "@/util/request";

const login = (userIndo) => {
  return request({
    url: '/user/userInfo/login',
    method: 'post',
    data: userIndo
  })
}
const getUserInfo = () => {
  return request({
    url: '/user/userInfo/auth/getUserInfo',
    method: 'get'
  })
}
const saveUserAuah = (userAuah) => {
  return request({
    url: `/user/userInfo/auth/userAuth`,
    method: 'post',
    data: userAuah
  })
}
export default {
  login,
  getUserInfo,
  saveUserAuah
}
