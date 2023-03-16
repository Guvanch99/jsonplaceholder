import React, { FC, ReactElement } from 'react'
import styles from './IconWrapper.module.scss'

export type TIconWrapperProps = {
  children: ReactElement;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
} & Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

export const IconWrapper: FC<TIconWrapperProps> = ({
  children,
  onClick,
  ...props
}) => {
  const svgBaseProps = {
    fill: 'currentColor',
    'aria-hidden': 'true',
    'user-select': 'none',
    focusable: 'false'
  }

  return (
    <span
      role="presentation"
      className={styles.wrapper}
      onClick={onClick}
    >
      {React.cloneElement(children, { ...svgBaseProps, ...props })}
    </span>
  )
}
