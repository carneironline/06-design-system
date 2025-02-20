import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@ignite-ui/react';

export default {
    title: 'Typography/Heading',
    component: Heading,
    tags: ['autodocs'],

    args: {
        size: 'md',
        children: 'Custom title',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
            control: { type: 'inline-radio' },
        },
    },
} as Meta<HeadingProps>;

type Story = StoryObj<HeadingProps>;

export const Primary: Story = {};

export const CustomTag: Story = {
    args: {
        as: 'h1',
        children: 'H1 Heading',
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
            },
        },
    },
};
