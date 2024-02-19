import type { AccountType } from '../enums/account-type'
import type { Gender } from '../enums/gender'
import type { Role } from '../enums/role'

export type User = {
  email: string | null
  phone: string
  username: string
  accountType: AccountType

  _id: string
  fullName: string | null
  gender: Gender
  dateOfBirth: number | null
  avatar: string | null

  deviceID: string
  fcmTokens: string[]
  enableFcm: boolean
  role: Role
  deleted: boolean
}
