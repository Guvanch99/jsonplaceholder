import { useGetUsers } from '../../hooks/useGetUsers'
import Spinner from '../../../../components/Spinner/Spinner'
import UsersList from '../UsersList/UsersList'
import Search from '../Search/Search'
import UserInfoModal from '../UserInfoModal/UserInfoModal'
import styles from './Main.module.scss'

const Main = () => {
  const { loading, error } = useGetUsers()
  if (loading) {
    return (
      <div className={styles.center}>
        <Spinner/>
      </div>
    )
  }
  if (error) {
    return (
      <div className={styles.center}>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <UserInfoModal/>
      <div className={styles.content}>
        <Search/>
        <UsersList/>
      </div>
    </div>
  )
}

export default Main
