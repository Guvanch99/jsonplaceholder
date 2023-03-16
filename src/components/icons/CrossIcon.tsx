import { FC } from 'react'
import { IconWrapper } from './base/IconWrapper/IconWrapper'
import { ReactComponent as Icon } from './svg/crossIcon.svg'
import { TIconProps } from './base/types'

export const CrossIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon />
  </IconWrapper>
)
