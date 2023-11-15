import { ComponentProps } from 'react'
import * as Tootltip from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipArrow } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipContent> & {
    content: string
}

export function TooltipHover({ content, children, ...props }: TooltipProps) {
    return (
        <Tootltip.Provider>
            <Tootltip.Root {...props}>
                <Tootltip.Trigger asChild> 
                    {children}
                </Tootltip.Trigger>
                <Tootltip.Portal> 
                    <TooltipContent> 
                        <TooltipArrow />
                        {content}
                    </TooltipContent>
                </Tootltip.Portal>
            </Tootltip.Root>
        </Tootltip.Provider>
    )
}

TooltipHover.displayName = 'Tooltip'