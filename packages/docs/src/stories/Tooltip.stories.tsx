import type { Meta, StoryObj } from '@storybook/react'
import { TooltipHover, TooltipProps, Text, Box } from '@luca-igniteui/react'

const day = new Date().getDate()
const month = new Date().getMonth()

const date = `${day}/${month} - Disponível`

export default {
    title: 'Form/Tooltip',
    component: TooltipHover,
    args: {
        children: <Text size="sm">Hover me</Text>,
        content: `${date}`
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    },
    decorators: [
        (Story) => {
            return (
                <Box css={{
                    display: 'flex',
                    gap: '$4',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box>
                        {Story()}
                    </Box>
                    <Box>
                        {Story()}
                    </Box>
                </Box>
            )
        }
    ]
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}