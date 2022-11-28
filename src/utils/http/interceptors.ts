import { AxiosRequestConfig, AxiosResponse } from 'axios'
import AxiosInstance from 'utils/instance'

function HttpInterceptors() {
  AxiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return config
    },
    (error: any) => {
      return Promise.reject(error)
    },
  )

  AxiosInstance.interceptors.response.use(
    (res: AxiosResponse) => res,
    async (err) => {
      const originalConfig = err.config
      if (originalConfig.url !== '/' && err.response !== undefined && {}.hasOwnProperty.call(err.response, 'data')) {
        if (err.response.status === 401 && !originalConfig._retry) {
          // Do anything with unauthenticate access
          return Promise.reject(err)
        }
      }
      return Promise.reject(err)
    },
  )
}

export default HttpInterceptors
