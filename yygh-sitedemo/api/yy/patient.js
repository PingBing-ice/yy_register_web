import request from '@/util/request'

const api_name = `/user/patient`


//就诊人列表
const findList =() => {
  return request({
    url: `/user/patient/auth/findAll`,
    method: 'get'
  })
}
//根据id查询就诊人信息
const getById =(id) => {
  return request({
    url: `${api_name}/auth/get/${id}`,
    method: 'get'
  })
}
//添加就诊人信息
const save =(patient) =>{
  return request({
    url: `${api_name}/auth/save`,
    method: 'post',
    data: patient
  })
}
//修改就诊人信息
const updateById = (patient) => {
  return request({
    url: `${api_name}/auth/update`,
    method: 'post',
    data: patient
  })
}
//删除就诊人信息
const removeById = (id) => {
  return request({
    url: `${api_name}/auth/remove/${id}`,
    method: 'delete'
  })
}
export default {
  findList,
  removeById,
  updateById,
  save,
  getById
}

