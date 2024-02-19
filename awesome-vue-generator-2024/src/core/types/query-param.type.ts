export type SearchParams = {
  [key: string]: string | number
}

export type QueryParams = {
  _page?: number
  _limit?: number
  _sort?: string
  _populate?: string
  _fields?: string
} & SearchParams
