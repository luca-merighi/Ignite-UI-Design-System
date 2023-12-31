import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@luca-igniteui/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: <Text size="sm">Texto</Text>
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}