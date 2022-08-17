import request from "@/util/request";

const sendCode = (phone) => {
  console.log(phone, "=================================")
  return request({
    url: `/msm/send`,
    method: 'get',
    params: {
      phone: phone
    }
  })
}
export default {
  sendCode
}
