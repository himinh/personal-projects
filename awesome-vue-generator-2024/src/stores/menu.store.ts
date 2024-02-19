import { menuApi } from '@/core/api/menu.api'
import { showErrorMessage } from '@/core/helpers/show-error-message'
import type { Menu } from '@/core/types/menu.type'
import type { PaginateResponse } from '@/core/types/paginate-response.type'
import type { QueryParams } from '@/core/types/query-param.type'
import { defineStore } from 'pinia'
import { reactive, ref, watch } from 'vue'

export const useMenuStore = defineStore('menus', () => {
  const queryParams = reactive<QueryParams>({})

  const pending = ref<boolean>(false)
  const loading = reactive({
    loadingCreate: false,
    loadingGetAll: false,
    loadingUpdate: false,
    loadingDelete: false,
    loadingPaginate: false,
    loadingDetail: false
  })

  const data = ref<PaginateResponse<Menu>>({
    docs: [],
    pageInfo: {
      _totalDocs: 0,
      _limit: 0,
      _totalPages: 0,
      _page: 0,
      _pagingCounter: 0,
      _hasPrevPage: false,
      _hasNextPage: false,
      _prevPage: null,
      _nextPage: null
    }
  })

  const create = async (body: Menu) => {
    loading.loadingCreate = true

    try {
      const res = await menuApi.create(body)

      if (res) data.value.docs.push(res)
    } catch (error) {
      showErrorMessage(error)
    }

    loading.loadingCreate = false
  }

  const updateById = async (id: string, body: Menu) => {
    loading.loadingUpdate = true

    try {
      const res = await menuApi.updateById(id, body)

      if (res) {
        const index = data.value.docs.findIndex((item) => item._id === id)

        data.value.docs[index] = res
      }
    } catch (error) {
      showErrorMessage(error)
    }

    loading.loadingUpdate = false
  }

  const deleteById = async (id: string) => {
    loading.loadingDelete = true

    try {
      const res = await menuApi.deleteById(id)

      if (res) data.value.docs = data.value.docs.filter((el) => el._id !== id)
    } catch (error) {
      showErrorMessage(error)
    }

    loading.loadingDelete = false
  }

  const getAll = async (params: QueryParams) => {
    loading.loadingGetAll = true

    try {
      const res = await menuApi.getAll(params)

      if (res) data.value.docs = res
    } catch (error) {
      showErrorMessage(error)
    }

    loading.loadingGetAll = false
  }

  const paginateMenus = async () => {
    loading.loadingPaginate = true

    try {
      const res = await menuApi.paginate(queryParams)

      if (res) data.value = res
    } catch (error) {
      showErrorMessage(error)
    }

    loading.loadingPaginate = false
  }

  watch(queryParams, async () => {
    await paginateMenus()
  })

  return {
    loading,
    data,
    paginateMenus,
    create,
    updateById,
    deleteById,
    getAll
  }
})
