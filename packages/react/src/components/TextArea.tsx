import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
    boxSizing: 'border-box',
    padding: '$3 $4',
    backgroundColor: '$gray900',
    
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$white',
    
    resize: 'vertical',
    minHeight: 80,
    
    border: '2px solid $gray900',
    borderRadius: '$sm',
    
    '&:focus': {
        outline: 0,
        borderColor :'$ignite300'
    },
    
    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed'
    },
    
    '&:placeholder': {
        color: '$gray400'
    },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'