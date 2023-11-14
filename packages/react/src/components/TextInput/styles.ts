import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
    boxSizing: 'border-box',
    padding: '$3 $4',
    backgroundColor: '$gray900',
    
    display: 'flex',
    alignItems: 'baseline',
    
    border: '2px solid $gray900',
    borderRadius: '$sm',
    
    '&:has(input:focus)': {
        borderColor :'$ignite300'
    },
    
    '&:has(input:disabled)': {
        opacity: 0.5,
        cursor: 'not-allowed'
    },
})

export const Prefix = styled('span', {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: 'regular',
    color: '$gray400'
})

export const Input = styled('input', {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',
    fontWeight: 'regular',
    
    width: '100%',
    background: 'transparent',
    
    border: 0,
    
    '&:focus': {
        outline: 0
    },
    
    '&:disabled': {
        cursor: 'not-allowed'
    },
    
    '&:placeholder': {
        color: '$gray400'
    }
})