import request from '@/util/request'

const api_name = `/user/weixilogin`

export default {
  getLoginParam() {
    return request({
      url: `${api_name}/getLoginParam`,
      method: `get`
    })
  },
  createNative(orderId) {
    return request({
      url: `/order/wx/createNative/${orderId}`,
      method: `get`
    })
  },
  queryPayStatus(orderId) {
    return request({
      url: `/order/wx/queryPayStatus/${orderId}`,
      method: `get`
    })
  },
  cancelOrder(orderId) {
    return request({
      url: `/order/wx/cancelOrder/${orderId}`,
      method: `get`
    })
  },
}
