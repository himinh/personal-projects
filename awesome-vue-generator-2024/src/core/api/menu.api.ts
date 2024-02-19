import type { Menu } from '@/core/types/menu.type'
import type { PaginateResponse } from '@/core/types/paginate-response.type'
import type { QueryParams } from '@/core/types/query-param.type'
import { axiosInstance } from '../utils/axios-instance.util'

const data: Menu[] = [
  {
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
  }
]

function createPromise<T>(executor: () => any): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      const result = executor()
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}

const menuUrl = '/menus'

export const menuApi = {
  getAll(query?: QueryParams): Promise<Menu[]> {
    const getData = () => data

    return createPromise(getData)
  },
  getById(id: string, query?: QueryParams): Promise<Menu> {
    const getDetail = () => data.find((el) => el._id === id)

    return createPromise(getDetail)
  },
  create(body: Menu): Promise<Menu> {
    const createData = () => {
      data.push(body)

      return body
    }

    return createPromise(createData)
  },
  updateById(id: string, body: Menu): Promise<Menu> {
    const updateData = () => {
      const index = data.findIndex((item) => item._id === id)

      data[index] = body

      return data[index]
    }

    return createPromise(updateData)
  },
  deleteById(id: string): Promise<Menu> {
    const removeData = () => {
      const index = data.findIndex((item) => item._id === id)

      const deleted = data[index]

      data.splice(index, 1)

      return deleted
    }

    return createPromise(removeData)
  },

  // getAll(params?: QueryParams): Promise<Menu[]> {
  //   return axiosInstance.get(`${menuUrl}`, { params })
  // },
  // getById(id: string, params?: QueryParams): Promise<Menu> {
  //   return axiosInstance.get(`${menuUrl}/${id}`, { params })
  // },
  // create(body: Menu): Promise<Menu> {
  //   return axiosInstance.post(`${menuUrl}`, body)
  // },
  // updateById(id: string, body: Menu): Promise<Menu> {
  //   return axiosInstance.patch(`${menuUrl}/${id}`, body)
  // },
  // deleteById(id: string): Promise<Menu> {
  //   return axiosInstance.delete(`${menuUrl}/${id}`)
  // },
  deleteManyByIds(ids: string[]) {
    return axiosInstance.delete(`${menuUrl}/${ids.toString()}`)
  },
  paginate(params?: QueryParams): Promise<PaginateResponse<Menu>> {
    return axiosInstance.get(`${menuUrl}/paginate`, { params })
  }
}
