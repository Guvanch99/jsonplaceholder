import { useEffect } from 'react'
import { useActions, useTypedSelector } from '../../../core/hooks/useRedux'

export const useGetUsers = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user)
  const { getUsers } = useActions()

  useEffect(() => {
    getUsers()
  }, [])

  return {
    users, loading, error
  }
}
