import { FC } from 'react'
import styles from './CustomInput.module.scss'

type TProps = {
  value: string
  onChange: (value: string) => void
}
const CustomInput: FC<TProps> = ({ value, onChange }) => (
  <input
    className={styles.input}
    value={value}
    onChange={({ target: { value } }) => onChange(value)}
  />
)

export default CustomInput
