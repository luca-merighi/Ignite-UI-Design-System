import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'
import { Button, ToastSlide, ToastProps, Box } from '@luca-igniteui/react'

const DemoToast = (props: ToastProps) => {
    const [isOpen, setOpen] = useState(false)
    
    const timerRef = useRef(0)

    useEffect(() => {
        return () => clearTimeout(timerRef.current)
    }, [])
    
    return (
        <div>
            <Button onClick={() => {
                setOpen(true)
                window.clearTimeout(timerRef.current)
                timerRef.current = window.setTimeout(() => {
                    setOpen(true)
                })
            }}>
                Agendar
            </Button>
            <ToastSlide 
                open={isOpen} 
                onOpenChange={setOpen} 
                {...props} />
        </div>
    )
}

export default {
    title: 'Form/Toast',
    component: DemoToast,
    args: {
        title: 'Agendamento Realizado!',
        description: 'Quarta-feira, 15 de Novembro as 16h'
    },
    decorators: [
        (Story) => {
            return (
                <Box>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}     