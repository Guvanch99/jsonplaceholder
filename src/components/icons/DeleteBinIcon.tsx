import { FC } from 'react'
import { IconWrapper } from './base/IconWrapper/IconWrapper'
import { ReactComponent as Icon } from './svg/deleteBin.svg'
import { TIconProps } from './base/types'

export const DeleteBinIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon />
  </IconWrapper>
)
