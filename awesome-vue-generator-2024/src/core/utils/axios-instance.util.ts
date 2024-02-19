import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { useAuthStore } from '@/stores/auth.store'

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL
}

const axiosInstance: AxiosInstance = axios.create(config)

axiosInstance.interceptors.request.use(async (request: any) => {
  request.headers = { ...request.headers }

  const { getAccessToken } = useAuthStore()

  const accessToken = await getAccessToken()

  request.headers.Authorization = `Bearer ${accessToken}`

  return request
})

axiosInstance.interceptors.response.use((res) => {
  return res.data
})

export { axiosInstance }
