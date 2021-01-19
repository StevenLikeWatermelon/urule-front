import { request } from 'xl-utils'
import { Message } from 'xl-views'

const axiosInstance = request({
  baseUrl: process.env.VUE_APP_BASE_API
})

// 二次封装 拦截所有报错给出提示
const service = (config = {}) => {
  return new Promise((resolve, reject) => {
    axiosInstance(config).then(res => {
      config.succMsg && Message({
        message: config.succMsg,
        type: 'success'
      })
      resolve(res)
    }).catch(err => {
      // 首先所有的错误都报个错
      console.log(err)
      Message({
        message: err.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      reject(err)
    })
  })
}

export default service
