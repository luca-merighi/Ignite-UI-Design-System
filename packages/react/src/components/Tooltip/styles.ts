import { styled } from '../../styles'
import * as Tootltip from '@radix-ui/react-tooltip'

export const TooltipContent = styled(Tootltip.Content, {
    padding: '$3 $4',
    backgroundColor: '$gray900',
    color: '$gray100',
    
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$medium',
    
    borderRadius: '$xs',
    filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25)'
})

export const TooltipArrow = styled(Tootltip.Arrow, {
    fill: '$gray900'
})