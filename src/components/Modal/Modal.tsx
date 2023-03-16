import { FC, ReactNode, useRef } from 'react'
import { useOnClickOutside } from '../../core/hooks/useOnClickOutside'
import Portal from '../Portal/Portal'
import styles from './Modal.module.scss'

type TProps = {
  onClose: () => void
  children: ReactNode
}
const Modal: FC<TProps> = ({ onClose, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null)
  useOnClickOutside(modalRef, onClose)

  return (
    <Portal>
      <div className={styles.modal}>
        <div className={styles.modalContent} ref={modalRef}>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
