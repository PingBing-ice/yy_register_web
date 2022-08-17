import request from '@/utils/request'

const getPageList = (page, limit, searchObj) => {
  return request({
    url: `/hosp/hospital/${page}/${limit}`,
    method: 'get',
    params: searchObj
  })
}
const findByDictCode = (dictCode) => {
  return request({
    url: `/cmn/dict/findByDictCode/${dictCode}`,
    method: 'get'
  })
}
const findByParentId = (id) => {
  return request({
    url: `/cmn/dict/childList/${id}`,
    method: 'get'
  })
}
const updateStatus = (id, status, page) => {
  return request({
    url: `/hosp/hospital/updateStatus/${id}/${status}/${page}`,
    method: 'get'
  })
}
const getHospById = (id) => {
  return request({
    url: `/hosp/hospital/show/${id}`,
    method: 'get'
  })
}
const getDeptByHosCode = (hoscode) => {
  return request({
    url: `/hosp/department/getDeptList/${hoscode}`,
    method: 'get'
  })
}
export default {
  getPageList,
  findByDictCode,
  findByParentId,
  updateStatus,
  getHospById,
  getDeptByHosCode
}
