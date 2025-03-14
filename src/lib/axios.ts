import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.response.use((response) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response)
      }, 2000)
    })
  })
}
