import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextProps } from '@ignite-ui/react'

export default {
    title: 'Typograhpy/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl',],
            control: {
                type: 'inline-radio'
            }
        }
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
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}