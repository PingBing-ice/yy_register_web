import request from "@/util/request";

const apiName = '/order/orderInfo'

const submitOrder = (scheduleId, patientId) => {
  return request({
    url: `${apiName}/auth/submitOrder/${scheduleId}/${patientId}`,
    method: 'post'
  })
}
export default {
  submitOrder
}
