import { Meta, StoryObj } from '@storybook/react';
import {
    Box,
    Text,
    TextInput,
    TextInputProps,
} from '@carneiro-ignite-ui/react';

export default {
    title: 'Form/Text Input',
    component: TextInput,
    tags: ['autodocs'],

    args: {},
    decorators: [
        (storyFn) => {
            return (
                <Box
                    as='label'
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '$2',
                    }}
                >
                    <Text size='sm'>E-mail address</Text>
                    {storyFn()}
                </Box>
            );
        },
    ],
} as Meta<TextInputProps>;

type Story = StoryObj<TextInputProps>;

export const Primary: Story = {
    args: {
        placeholder: 'Type your name',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const WithPrefix: Story = {
    args: {
        prefix: 'example.com/',
    },
};
