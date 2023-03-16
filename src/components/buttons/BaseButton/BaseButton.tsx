import { FC, ReactNode } from 'react'
import styles from './BaseButton.module.scss'

export type TButtonProps = {
  text: string
  onClick: () => void
  buttonClass?: string
  children?: ReactNode
}

const BaseButton: FC<TButtonProps> = ({ text, buttonClass, children, onClick }) => (
  <button
    className={`${styles.button} ${buttonClass}`}
    type="button"
    onClick={onClick}
  >
    {text || children}
  </button>
)

export default BaseButton
