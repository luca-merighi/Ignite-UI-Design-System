import { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import * as Toast from '@radix-ui/react-toast'
import { ToastClose, ToastDescription, ToastRoot, ToastTitle, ToastViewPort } from './styles'

export type ToastProps = ComponentProps<typeof ToastRoot> & {
    title: string,
    description?: string
}

export function ToastSlide({ title, description, ...props }: ToastProps) {
    return (
        <Toast.Provider>
            <ToastRoot {...props}>
                <ToastTitle>
                    {title}
                </ToastTitle>
                {description && (
                    <ToastDescription>
                        {description}
                    </ToastDescription>
                )}
                <ToastClose>
                    <X size={20} weight="light" />
                </ToastClose>
            </ToastRoot>

            <ToastViewPort />
        </Toast.Provider>
    )
}

ToastSlide.displayName = 'Toast'