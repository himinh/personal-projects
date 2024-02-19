import { authApi } from '@/core/api/auth.api'
import { localStorageHelper } from '@/core/helpers/local-storage.helper'
import { showErrorMessage } from '@/core/helpers/show-error-message'
import type { AuthUser, Login, Register, ResetPassword, SocialLogin } from '@/core/types/auth.type'
import type { NullableType } from '@/core/utils/types/nullable.type'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<NullableType<AuthUser>>(localStorageHelper.getAuth())
  const loading = ref<boolean>(false)

  const register = async (inputs: Register) => {
    const res = await _asyncHandler(() => authApi.register(inputs))

    if (res) _setAuth(res)
  }

  const login = async (inputs: Login) => {
    const res = await _asyncHandler(() => authApi.login(inputs))

    if (res) _setAuth(res)
  }

  const socialLogin = async (inputs: SocialLogin) => {
    const res = await _asyncHandler(() => authApi.socialLogin(inputs))

    if (res) _setAuth(res)
  }

  const logout = async () => {
    await authApi.logout()
    _clearAuth()
  }

  const refreshAuthUser = async () => {
    if (authUser.value) {
      await refreshAuthByRfToken(authUser.value.refreshToken.token)
    }
  }

  const resetPassword = async (inputs: ResetPassword) => {
    const data = await _asyncHandler(() => authApi.resetPassword(inputs))

    if (data) {
      _setAuth(data)

      return data
    }
  }

  const getAccessToken = async () => {
    if (!authUser.value) return null

    const { accessToken, refreshToken } = authUser.value

    const currentMS = new Date().getTime()
    if (accessToken.expiresAt > currentMS) return accessToken.token

    if (refreshToken.expiresAt < currentMS) {
      _clearAuth()

      return null
    }

    await refreshAuthByRfToken(refreshToken.token)

    if (authUser.value) return authUser.value.accessToken.token

    return null
  }

  const refreshAuthByRfToken = async (rfToken: string) => {
    try {
      // clear auth
      _clearAuth()

      // refresh token
      const data = await authApi.refreshToken(rfToken)

      // set auth
      _setAuth(data)
    } catch (error) {
      showErrorMessage(error)

      _clearAuth()
    }
  }

  const _setAuth = (data: AuthUser) => {
    authUser.value = { ...authUser.value, ...data }
    localStorageHelper.setAuth(authUser.value)
  }

  const _clearAuth = () => {
    localStorageHelper.clearAuth()
    authUser.value = null
  }

  const _asyncHandler = async <T>(handler: () => Promise<T>) => {
    try {
      loading.value = true

      return await handler()
    } catch (error) {
      showErrorMessage(error)
    } finally {
      loading.value = false
    }
  }

  return {
    authUser,
    loading,
    login,
    register,
    logout,
    getAccessToken,
    resetPassword,
    socialLogin,
    refreshAuthUser
  }
})
