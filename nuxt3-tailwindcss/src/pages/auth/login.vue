<script setup lang="ts">
import * as yup from 'yup'

useHead({ title: 'Log In' })
definePageMeta({
  layout: 'auth',
  middleware: ['only-visitor'],
  title: 'Log In',
})

const route = useRoute()
interface IForm {
  email: string
  password: string
}

const { handleSubmit, defineInputBinds, errors, setFieldError } =
  useForm<IForm>({
    validationSchema: {
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      passwordConfirm: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref('password')]),
    },
  })

const email = defineInputBinds('email', {
  validateOnBlur: true,
})

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})

interface IForm {
  email: string
  password: string
}

const resetError = (path: keyof IForm) => {
  setFieldError(path, undefined)
}
</script>

<template>
  <div class="w-[340px]">
    <form @submit="onSubmit">
      <input-field
        v-bind="email"
        @input="setFieldError('email', undefined)"
        type="password"
      />

      <button
        type="submit"
        class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
