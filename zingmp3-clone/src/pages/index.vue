<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div class="absolute right-0 top-0">
    <span>{{ $colorMode.value }}</span>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="purple">Purple</option>
    </select>
  </div>
</template>
