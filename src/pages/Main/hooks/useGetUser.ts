import { useMemo } from 'react'
import { useTypedSelector } from '../../../core/hooks/useRedux'

export function useGetUser() {
  const { users, userId } = useTypedSelector((state) => state.user)
  return useMemo(
    () => users.find(({ id }) => id === userId),
    [users, userId]
  )
}
