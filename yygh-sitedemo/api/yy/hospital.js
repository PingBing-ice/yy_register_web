import request from "@/util/request";

const getPageList = (page, limit, vo) => {
  return request({
    url: `/hosp/user/${page}/${limit}`,
    method: 'get',
    params: vo
  })
}
const getByHosname = (name) => {
  return request({
    url: `/hosp/user/findByHosName`,
    method: 'get',
    params: {
      hosname: name
    }
  })
}
const getList = (page, limit, hostype, districtCode) => {
  return request({
    url: `/hosp/user/list/${page}/${limit}`,
    method: 'get',
    params: {
      hostype: hostype,
      districtCode: districtCode
    }
  })
}
const show = (hoscode) => {
  return request({
    url: `/hosp/user/info`,
    method: 'get',
    params: {
      hoscode: hoscode
    }
  })
}
const findDepartment = (hoscode) => {
  return request({
    url: `/hosp/user/department`,
    method: 'get',
    params: {
      hoscode: hoscode
    }
  })
}
const getDetails = (hoscode) => {
  return request({
    url: `/hosp/user/info/Details`,
    method: 'get',
    params: {
      hoscode: hoscode
    }
  })
}
const api_name= '/hosp/user'
const getBookingScheduleRule=(page, limit, hoscode, depcode) => {
  return request({
    url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
    method: 'get'
  })
}

const findScheduleList = (hoscode, depcode, workDate) => {
  return request({
    url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
    method: 'get'
  })
}
const getSchedule = (id) => {
  return request({
    url: `/hosp/schedule/getSchedule/${id}`,
    method: 'get'
  })
}
export default {
  getPageList,
  getByHosname,
  getList,
  show,
  findDepartment,
  getDetails,
  findScheduleList,
  getBookingScheduleRule,
  getSchedule
}
