import type { MenuLevel } from '@/core/enums/menu-level'
import type { Role } from '@/core/enums/role'

export type Menu = {
  readonly _id?: string
  readonly parentId?: string
  readonly title: string
  readonly prefix: string
  readonly icon?: string
  readonly level: MenuLevel
  readonly url: string
  readonly isHorizontal: boolean
  readonly isShow: boolean
  readonly roles: Role[]
  readonly subMenus: Menu[]
}
