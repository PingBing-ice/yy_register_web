import request from '@/utils/request'

const api_name = '/cmn/dict'

const getList = (pid) => {
  // 查询医院列表消息
  return request({
    url: `${api_name}/childList/${pid}`,
    method: 'get'
  })
}
const ExportData = () => {
  // 查询医院列表消息
  return request({
    url: `${api_name}/exportData`,
    method: 'get'
  })
}
export default {
  getList,
  ExportData
}
