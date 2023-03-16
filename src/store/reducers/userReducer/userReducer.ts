import { TAction, TUserState } from './types'
import { DELETE_USER, FILTER_USERS, RESET_USERS, SET_USER, SET_USER_ID } from './action'
import { ERROR, LOADING } from '../action'

const userState: TUserState = {
  users: [],
  tempUsers: [],
  filterValue: '',
  loading: false,
  error: undefined
}
export const userReducer = (state = userState, action: TAction) => {
  switch (action.type) {
  case SET_USER: {
    return {
      ...state,
      loading: false,
      error: undefined,
      users: action.payload,
      tempUsers: action.payload
    }
  }
  case SET_USER_ID: {
    return {
      ...state,
      userId: action.payload
    }
  }
  case DELETE_USER: {
    return {
      ...state,
      tempUsers: state.tempUsers.filter(({ id }) => id !== action.payload)
    }
  }
  case RESET_USERS: {
    return {
      ...state,
      tempUsers: state.users,
      filterValue: ''
    }
  }
  case FILTER_USERS: {
    return {
      ...state,
      filterValue: action.payload.toLowerCase()
    }
  }
  case LOADING: {
    return {
      ...state,
      loading: true,
      error: undefined
    }
  }
  case ERROR: {
    return {
      ...state,
      error: action.payload,
      loading: false,
      users: []
    }
  }
  default:
    return state
  }
}
