<script setup lang="ts">
import { useMenuStore } from '@/stores/menu.store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import type { QueryParams } from './core/types/query-param.type'

const menuStore = useMenuStore()
const { data, loading } = storeToRefs(menuStore)

const queryParams: QueryParams = {}

onMounted(async () => {
  await menuStore.getAll(queryParams)
})

const handleAdd = async () => {
  await menuStore.create({
    isHorizontal: true,
    isShow: true,
    level: 1,
    prefix: 'users',
    roles: [],
    subMenus: [],
    title: 'title',
    url: '',
    icon: '',
    parentId: '',
    _id: new Date().getTime().toString()
  })
}

const handleDelete = async (id: string) => {
  await menuStore.deleteById(id)
}
</script>

<template>
  <ul>
    list:
    <li v-for="(item, index) in Object.keys(loading)" :key="index">
      {{ item }}: {{ loading[item] }}
    </li>
  </ul>

  <hr />

  <ul>
    <span>total: {{ data.docs.length }}</span>
    <li style="padding-block: 12px" v-for="item in data.docs">
      {{ item._id }} - {{ item.title }}

      <button style="background-color: red; color: white" @click="handleDelete(item._id!)">
        Delete
      </button>
    </li>
  </ul>

  <p>Add <button @click="handleAdd">New</button></p>
</template>

<style scoped></style>
./core/api/auth.api
