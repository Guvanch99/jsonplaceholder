import { TReducerCommon, TStatusAction } from '../types'
import { DELETE_USER, FILTER_USERS, RESET_USERS, SET_USER, SET_USER_ID } from './action'

 type TGeo = {
  lat: string
  lng: string
}

type TAddress = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: TGeo
}

type TCompany = {
  name: string
  catchPhrase: string
  bs: string
}

export type TUser = {
  id: number
  name: string
  username: string
  email: string
  address: TAddress
  phone: string
  website: string
  company: TCompany
}

export type TUserState = {
  users: TUser[]
  tempUsers: TUser[]
  filterValue: string
  userId?: number
} & TReducerCommon

type TFetchUserAction = {
  type: typeof SET_USER,
  payload: TUser[]
}

type TSetUserIdAction = {
  type: typeof SET_USER_ID
  payload?: number
}

type TDeleteUserAction = {
  type: typeof DELETE_USER
  payload: number
}
type TResetUsers = {
  type: typeof RESET_USERS
}

type TFilterUsers = {
  type: typeof FILTER_USERS,
  payload: string
}

export type TAction =
  TFetchUserAction
  | TStatusAction
  | TSetUserIdAction
  | TDeleteUserAction
  | TResetUsers
  | TFilterUsers
