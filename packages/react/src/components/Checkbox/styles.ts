import { styled, keyframes } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  lineHeight: 0,
  cursor: 'pointer',

  borderRadius: '$xs',
  border: '2px solid transparent',
  overflow: 'hidden',

  '&:focus, &[data-state="checked"]': {
    borderColor: '$ignite300',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
