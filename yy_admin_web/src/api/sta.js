import request from "@/utils/request";

const getCountMap = (searchObj) => {
  return request({
    url: `/admin/statistics/getCountMap`,
    method: 'get',
    params: searchObj
  })
}
export default {
  getCountMap
}
