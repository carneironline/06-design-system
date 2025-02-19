import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react';

export default {
    title: 'Typography/Text',
    component: Text,
    tags: ['autodocs'],

    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ut necessitatibus temporibus similique voluptate modi, delectus quae rem expedita distinctio nobis culpa perspiciatis non dicta voluptates quis mollitia nostrum dignissimos?',
    },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        as: 'strong',
        children: 'Strong text',
    },
};
