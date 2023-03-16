import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootState } from '../../store/types'
import * as userActionCreators from '../../store/reducers/userReducer/actionCreator'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(userActionCreators, dispatch)
}
