import { Meta, StoryObj } from '@storybook/react';
import { Box, MultiStep, MultiStepProps } from '@carneiro-ignite-ui/react';

export default {
    title: 'Form/Multi Step',
    component: MultiStep,
    tags: ['autodocs'],

    args: {
        size: 4,
        currentStep: 1,
    },
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
                    {storyFn()}
                </Box>
            );
        },
    ],
} as Meta<MultiStepProps>;

type Story = StoryObj<MultiStepProps>;

export const Primary: Story = {
    args: {},
};

export const Full: Story = {
    args: {
        currentStep: 4,
    },
};
