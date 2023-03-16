import { useState } from 'react'
import useDebounce from '../../../../core/hooks/useDebounce'
import CustomInput from '../../../../components/CustomInput/CustomInput'
import { useActions } from '../../../../core/hooks/useRedux'
import styles from './Search.module.scss'
import PrimaryButton from '../../../../components/buttons/PrimaryButton/PrimaryButton'
import { useSetFilterValue } from '../../hooks/useSetFilterValue'

const Search = () => {
  const [search, setSearch] = useState('')
  const value = useDebounce(search, 250)
  const { resetUsers } = useActions()
  useSetFilterValue(value)

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <CustomInput value={search} onChange={setSearch}/>
      </div>
      <div className={styles.buttonWrap}>
        <PrimaryButton
          onClick={() => {
            resetUsers()
            setSearch('')
          }}
          text="Reset"/>
      </div>
    </div>
  )
}

export default Search
