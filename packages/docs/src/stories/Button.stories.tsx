import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@carneiro-ignite-ui/react';
import { ArrowRight } from 'phosphor-react';

export default {
    title: 'Form/Button',
    component: Button,
    tags: ['autodocs'],

    args: {
        variant: 'primary',
        size: 'md',
        children: 'Send',
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: { type: 'inline-radio' },
        },
        size: {
            options: ['sm', 'md'],
            control: { type: 'inline-radio' },
        },
        disabled: { control: { type: 'boolean' } },
        onClick: {
            action: 'clicked',
        },
    },
} as Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Primary = {} as Story;

export const Secondary = {
    args: {
        variant: 'secondary',
        children: 'Create new',
    },
} as Story;

export const Tertiary = {
    args: {
        variant: 'tertiary',
        children: 'Cancel',
    },
} as Story;

export const Small = {
    args: {
        size: 'sm',
    },
} as Story;

export const WithIcon = {
    args: {
        children: (
            <>
                Próximo passo
                <ArrowRight />
            </>
        ),
    },
} as Story;

export const Disabled = {
    args: {
        disabled: true,
    },
} as Story;
