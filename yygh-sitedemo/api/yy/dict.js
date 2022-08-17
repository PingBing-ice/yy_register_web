import request from "@/util/request";

const findByDictCode = (Hostype) => {
  return request({
    url: `/cmn/dict/findByDictCode/${Hostype}`,
    method: 'get'
  })
}
const getDictListByPId = (pid) => {
  return request({
    url: `/cmn/dict/childList/${pid}`,
    method: 'get'
  })
}
export default {
  findByDictCode,
  getDictListByPId
}
