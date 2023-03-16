import { useMemo } from 'react'
import { useTypedSelector } from '../../../core/hooks/useRedux'

export const useFilter = () => {
  const { tempUsers, filterValue } = useTypedSelector((state) => state.user)

  return useMemo(() => {
    if (!filterValue) {
      return tempUsers
    }
    return tempUsers
      .filter(({
        name,
        email,
        username
      }) => [name, username, email]
        .join(' ')
        .toLowerCase()
        .includes(filterValue.toLowerCase()))
  }, [tempUsers, filterValue])
}
