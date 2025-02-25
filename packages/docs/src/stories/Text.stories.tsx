import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@carneiro-ignite-ui/react';

export default {
    title: 'Typography/Text',
    component: Text,
    tags: ['autodocs'],

    args: {
        size: 'md',
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ut necessitatibus temporibus similique voluptate modi, delectus quae rem expedita distinctio nobis culpa perspiciatis non dicta voluptates quis mollitia nostrum dignissimos?',
    },
    argTypes: {
        size: {
            options: [
                'xxs',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                '2xl',
                '4xl',
                '5xl',
                '6xl',
                '7xl',
                '8xl',
                '9xl',
            ],
            control: { type: 'inline-radio' },
        },
    },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        as: 'strong',
        children: 'Strong text',
    },
};
