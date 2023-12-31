import type { Meta, StoryObj } from '@storybook/react'
import { Box, Heading, HeadingProps } from '@luca-igniteui/react'

export default {
    title: 'Typograhpy/Heading',
    component: Heading,
    args: {
        children: 'Custom Title',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
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
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: (
            <Box>H1 Heading</Box>
        ),
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o Heading sempre será um h2, mas podemos alterar isso com a propriedade `as`'
            }
        }
    }
}