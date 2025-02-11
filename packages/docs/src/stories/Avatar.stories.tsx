import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from '@ignite-ui/react';

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    tags: ['autodocs'],

    args: {
        src: 'https://github.com/carneironline.png',
        alt: 'Rodrigo Carneiro',
    },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
};
