import { FC } from 'react'
import BaseButton, { TButtonProps } from '../BaseButton/BaseButton'
import styles from './PrimaryButton.module.scss'

const PrimaryButton: FC<TButtonProps> = ({ children, ...props }) => (
  <BaseButton {...props} buttonClass={styles.primaryButton}>
    {children}
  </BaseButton>
)

export default PrimaryButton
