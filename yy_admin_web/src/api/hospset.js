import request from '@/utils/request'

const api_name = '/hosp/admin'

const getHospitalPage = (current, limit, hospitalSetQueryVo) => {
  // 查询医院列表消息
  return request({
    url: `${api_name}/getListPage/${current}/${limit}`,
    method: 'post',
    data: hospitalSetQueryVo
  })
}
// 根据id进行删除
const removeById = (id) => {
  return request({
    url: `${api_name}/removeById/${id}`,
    method: 'delete'
  })
}
// 修改用户
const updateById = (hospitalSet) => {
  return request({
    url: `${api_name}/UpdateEdit`,
    method: 'post',
    data: hospitalSet
  })
}
// 添加医院设置
const save = (hospitalSet) => {
  return request({
    url: `${api_name}/save`,
    method: 'post',
    data: hospitalSet
  })
}
// 批量删除
const removeRows = (idList) => {
  return request({
    url: `${api_name}/batchRemove`,
    method: 'delete',
    data: idList
  })
}
// 锁定和取消锁定
const lockHospSet = (id, status) => {
  return request({
    url: `${api_name}/lockHospitalSet/${id}/${status}`,
    method: 'get'
  })
}
export default {
  getHospitalPage,
  removeById,
  updateById,
  save,
  removeRows,
  lockHospSet
}
