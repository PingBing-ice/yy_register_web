import request from "@/util/request";

const api_name = "/order/orderInfo"
//订单列表
const getPageListByOrder = (page, limit, searchObj) => {
  return request({
    url: `${api_name}/getPageListByOrder/${page}/${limit}`,
    method: `get`,
    params: searchObj
  })
}
//订单状态
const getStatusList =() => {
  return request({
    url: `${api_name}/auth/getStatusList`,
    method: 'get'
  })
}
const getOrderInfoById = (orderId) => {
  return request({
    url: `${api_name}/auth/getOrders`,
    method: 'get',
    params: {
      orderId: orderId,
    }
  })
}
export default {
  getPageListByOrder,
  getStatusList,
  getOrderInfoById
}
