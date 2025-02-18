import { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react';

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],

    args: {},
    decorators: [
        (storyFn) => {
            return (
                <Box
                    as='label'
                    css={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '$2',
                    }}
                >
                    <Text size='sm'>Accept terms of use</Text>
                    {storyFn()}
                </Box>
            );
        },
    ],
} as Meta<CheckboxProps>;

type Story = StoryObj<CheckboxProps>;

export const Primary: Story = {};
