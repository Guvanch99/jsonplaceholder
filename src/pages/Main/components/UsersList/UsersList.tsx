import { FC } from 'react'
import { useActions, useTypedSelector } from '../../../../core/hooks/useRedux'
import { DeleteBinIcon } from '../../../../components/icons/DeleteBinIcon'
import styles from './UsersList.module.scss'
import { useFilter } from '../../hooks/useFilter'

type TProps = {
  text: string
}
const HighlightText: FC<TProps> = ({ text }) => {
  const { filterValue: query } = useTypedSelector((state) => state.user)
  const regex = new RegExp(`(${query})`, 'gi')
  // eslint-disable-next-line react/destructuring-assignment
  const highlightedText = text.replace(regex, '<mark>$1</mark>')
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
}

const UsersList = () => {
  const filteredUsers = useFilter()
  const { setUserId, deleteUser } = useActions()
  return (
    <ul className={styles.menu}>
      <li className={styles.menuItemHeader}>
        <div className={styles.itemContainer}>
          Name
        </div>
        <div className={styles.itemContainer}>
          Username
        </div>
        <div className={styles.itemContainer}>
          Email
        </div>
        <div className={styles.itemContainer}>
          Action
        </div>
      </li>
      {
        filteredUsers.map(({ name, username, email, id }) => (
          <li className={styles.menuItem} key={email}>
            <button
              type="button"
              className={`${styles.itemContainer} ${styles.cursorPointer}`}
              onClick={() => setUserId(id)}>
              <HighlightText text={name}/>
            </button>
            <button
              type="button"
              className={`${styles.itemContainer} ${styles.cursorPointer}`}
              onClick={() => setUserId(id)}>
              <HighlightText text={username}/>
            </button>
            <button
              type="button"
              className={`${styles.itemContainer} ${styles.cursorPointer}`}
              onClick={() => setUserId(id)}>
              <HighlightText text={email}/>
            </button>
            <div className={styles.itemContainer}>
              <div className={styles.iconWrapper}>
                <DeleteBinIcon onClick={() => deleteUser(id)}/>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default UsersList
