import { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps, Text } from '@carneiro-ignite-ui/react';

export default {
    title: 'Surfaces/Box',
    component: Box,
    tags: ['autodocs'],

    args: {
        children: <Text>Testando o elemento Box</Text>,
    },
    argTypes: {
        children: {
            control: { disable: true },
        },
    },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
