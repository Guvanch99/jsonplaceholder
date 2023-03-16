import { Dispatch } from 'redux'
import { AxiosError } from 'axios'
import { ERROR, LOADING } from '../action'
import { apiClient } from '../../../core/api/apiClient'
import { DELETE_USER, FILTER_USERS, RESET_USERS, SET_USER, SET_USER_ID } from './action'
import { TAction, TUser } from './types'

export const getUsers = () => async (dispatch: Dispatch<TAction>) => {
  try {
    dispatch({ type: LOADING })
    const { data } = await apiClient<TUser[]>('/users')
    dispatch({ type: SET_USER, payload: data })
  } catch (error) {
    const errorMessage = (error as AxiosError).message
    dispatch({ type: ERROR, payload: errorMessage })
  }
}

export const setUserId = (payload?: number) => ({
  type: SET_USER_ID,
  payload
})

export const deleteUser = (payload: number) => ({
  type: DELETE_USER,
  payload
})

export const setFilterValue = (payload: string) => ({
  type: FILTER_USERS,
  payload
})
export const resetUsers = () => ({ type: RESET_USERS })
