<script setup lang="ts">
import { ref } from 'vue'

const buttondisplay = ref()
const icondisplay = ref()
</script>

<template>
  <div>
    <Calendar v-model="buttondisplay" showIcon />
    <Calendar v-model="icondisplay" showIcon iconDisplay="input" />
  </div>
</template>
