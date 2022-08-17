import request from '@/utils/request'

const getSchedule = (page, limit, hoscode, depcode) => {
  return request({
    url: `/hosp/schedule/ScheduleList/${page}/${limit}`,
    method: 'get',
    params: {
      hoscode: hoscode,
      depcode: depcode
    }
  })
}
const getScheduleDetail = (hoscode, depcode, workDate) => {
  return request({
    url: '/hosp/schedule/getScheduleDetail',
    method: 'get',
    params: {
      hoscode: hoscode,
      depcode: depcode,
      workDate: workDate
    }
  })
}
export default {
  getSchedule,
  getScheduleDetail
}
