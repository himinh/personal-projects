import type { NullableType } from '../utils/types/nullable.type'

export type PaginateInfo = {
  _totalDocs: number
  _limit: number
  _totalPages: number
  _page: number
  _pagingCounter: number
  _hasPrevPage: boolean
  _hasNextPage: boolean
  _prevPage: NullableType<number>
  _nextPage: NullableType<number>
}

export type PaginateResponse<T> = {
  docs: T[]
  pageInfo?: PaginateInfo
}
