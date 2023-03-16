import { memo } from 'react'
import { useActions, useTypedSelector } from '../../../../core/hooks/useRedux'
import { useGetUser } from '../../hooks/useGetUser'
import { CrossIcon } from '../../../../components/icons/CrossIcon'
import Modal from '../../../../components/Modal/Modal'
import styles from './UserInfoModal.module.scss'

const UserInfoModal = () => {
  const { userId } = useTypedSelector((state) => state.user)
  const { setUserId } = useActions()
  const user = useGetUser()

  if (!userId || !user) {
    return <></>
  }

  const {
    address: { street, suite, city, geo, zipcode },
    company: { name: companyName, catchPhrase, bs }
  } = user

  return (
    <Modal onClose={() => setUserId(undefined)}>
      <div className={styles.header}>
        <p className={styles.headerText}>
          User Additional Info
        </p>
        <button
          type="button"
          className={styles.icon}
          onClick={() => setUserId(undefined)}>
          <CrossIcon/>
        </button>
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.label}>Address</p>
          <ul>
            <li className={styles.list}>
              City:
              <span className={styles.listValue}>{city}</span>
            </li>
            <li className={styles.list}>
              Street:
              <span className={styles.listValue}>{street}</span>
            </li>
            <li className={styles.list}>
              Suite:
              <span className={styles.listValue}>{suite}</span>
            </li>
            <li className={styles.list}>
              Zip:
              <span className={styles.listValue}>{zipcode}</span>
            </li>
            <li className={styles.list}>
              Geo:
              <span className={styles.listValue}>{`(${geo.lat}, ${geo.lng})`}</span>
            </li>
          </ul>
        </div>
        <div>
          <p className={styles.label}>Company</p>
          <ul>
            <li className={styles.list}>
              Company Name:
              <span className={styles.listValue}>{companyName}</span>
            </li>
            <li className={styles.list}>
              Catch Phrase:
              <span className={styles.listValue}>{catchPhrase}</span>
            </li>
            <li className={styles.list}>
              Bs:
              <span className={styles.listValue}>{bs}</span>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  )
}

export default memo(UserInfoModal)
