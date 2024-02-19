import type { Login, AuthUser, Register, SocialLogin, Tokens } from '@/core/types/auth.type'
import { axiosInstance } from '../utils/axios-instance.util'

const authUrl = '/auth'

export const authApi = {
  login(data: Login): Promise<AuthUser> {
    return axiosInstance.post<any, AuthUser>(`${authUrl}/login`, data)
  },

  socialLogin(data: SocialLogin): Promise<AuthUser> {
    return axiosInstance.post(`${authUrl}/social_login`, data)
  },

  register(data: Register): Promise<AuthUser> {
    return axiosInstance.post(`${authUrl}/register`, data)
  },

  sendRegisterToken(data: Register): Promise<{ token: string }> {
    return axiosInstance.post(`${authUrl}/send_register_token`, data)
  },

  activateRegisterToken(data: Register): Promise<{ token: string }> {
    return axiosInstance.post(`${authUrl}/activate_register_token`, data)
  },

  logout(): Promise<any> {
    return axiosInstance.post(`${authUrl}/logout`, {})
  },

  refreshToken(token: string): Promise<AuthUser> {
    return axiosInstance.post(`${authUrl}/refresh_token`, { token })
  },

  forgotPassword(email: string): Promise<{ email: string }> {
    return axiosInstance.post(`${authUrl}/forgot_password`, { email })
  },

  resetPassword(body: { token: string; password: string }): Promise<Tokens> {
    return axiosInstance.post(`${authUrl}/reset_password`, body)
  }
}
