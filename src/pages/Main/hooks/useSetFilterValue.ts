import { useEffect } from 'react'
import { useActions } from '../../../core/hooks/useRedux'

export const useSetFilterValue = (value: string) => {
  const { setFilterValue } = useActions()

  useEffect(() => {
    setFilterValue(value)
  }, [value])
}
