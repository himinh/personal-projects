import { PaginateResponse } from '../types/paginate-reponse'
import { QueryParams } from '../utils/fetch/types'
import { authFetch } from '../utils/fetch'
import { Menu } from '~/types/menu'

const menuUrl = '/menus'
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
    _id: '1',
  },
]

const createPromise = (item: any) => Promise.resolve(item)

export const menuApi = {
  getAll(query?: QueryParams): Promise<Menu[]> {
    return createPromise(data)
  },
  getById(id: string, query?: QueryParams): Promise<Menu> {
    return createPromise(data.find((el) => el._id === id))
  },
  create(body: Menu): Promise<Menu> {
    return createPromise(data.push(body))
  },
  update(id: string, body: Menu): Promise<Menu> {
    const index = data.findIndex((item) => item._id === id)

    return createPromise((data[index] = body))
  },
  delete(id: string): Promise<Menu> {
    const index = data.findIndex((item) => item._id === id)

    return createPromise(data.splice(index, 1))
  },

  deleteManyByIds(ids: string[]) {
    return authFetch.delete(`${menuUrl}/${ids.toString()}`)
  },
  paginate(query?: QueryParams): Promise<PaginateResponse<Menu>> {
    return authFetch.get(`${menuUrl}/paginate`, query)
  },

  // getAll(query?: QueryParams): Promise<Menu[]> {
  //   return authFetch.get(`${menuUrl}`, query)
  // },
  // getById(id: string, query?: QueryParams): Promise<Menu> {
  //   return authFetch.get(`${menuUrl}/${id}`, query)
  // },
  // create(body: Menu): Promise<Menu> {
  //   return authFetch.post(`${menuUrl}`, body)
  // },
  // update(id: string, body: Menu): Promise<Menu> {
  //   return authFetch.patch(`${menuUrl}/${id}`, body)
  // },
  // delete(id: string): Promise<Menu> {
  //   return authFetch.delete(`/${`${menuUrl}`}/${id}`)
  // },
  // updatePassword(body: { oldPassword: string; newPassword: string }) {
  //   return authFetch.patch(`${menuUrl}/`, body)
  // },
  // deleteManySoftByIds(ids: string[]) {
  //   return authFetch.delete(`${menuUrl}/${ids.toString()}/soft_ids`)
  // },
  // deleteManyByIds(ids: string[]) {
  //   return authFetch.delete(`${menuUrl}/${ids.toString()}`)
  // },
  // paginate(query?: QueryParams): Promise<PaginateResponse<Menu>> {
  //   return authFetch.get(`${menuUrl}/paginate`, query)
  // },
}
