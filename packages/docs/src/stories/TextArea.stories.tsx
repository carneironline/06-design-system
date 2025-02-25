import { Meta, StoryObj } from '@storybook/react';
import { Box, Text, TextArea, TextAreaProps } from '@carneiro-ignite-ui/react';

export default {
    title: 'Form/Text Area',
    component: TextArea,
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
                    <Text size='sm'>Observations</Text>
                    {storyFn()}
                </Box>
            );
        },
    ],
} as Meta<TextAreaProps>;

type Story = StoryObj<TextAreaProps>;

export const Primary: Story = {
    args: {
        placeholder: 'Add any observations...',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
