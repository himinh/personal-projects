import { authApi } from '@/core/api/auth.api'
import { showErrorMessage } from '@/core/helpers/show-error-message'
import type { NullableType } from '@/core/utils/types/nullable.type'
import { ref } from 'vue'

export const useForgotPasswordStore = () => {
  const loading = ref<boolean>(false)
  const emailSent = ref<NullableType<string>>(null)

  const setEmailSent = (email: NullableType<string>) => {
    emailSent.value = email
  }

  const forgotPassword = async (email: string) => {
    const res = await _asyncHandler(() => authApi.forgotPassword(email))

    if (res) setEmailSent(res.email)
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
    forgotPassword,
    setEmailSent
  }
}
