<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="rounded bg-white px-8 py-5 shadow-lg">
      <!-- Header -->
      <h4 class="m-0 text-center text-xl font-medium text-[#337ecc]">
        {{ $route.meta.title || 'Log in' }}
      </h4>

      <!-- Login with form -->
      <slot />
    </div>
  </div>
</template>
