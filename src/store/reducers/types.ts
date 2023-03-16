import { ERROR, LOADING } from './action'

export type TReducerCommon = {
  loading: boolean
  error?: string
}

type TErrorAction = {
  type: typeof ERROR,
  payload: string
}

type TLoadingAction = {
  type: typeof LOADING
}

export type TStatusAction = TLoadingAction | TErrorAction
