import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ToggleButtonTheme } from '@/components/ToggleButtonTheme';

const meta = {
  title: 'Components/ToggleButtonTheme',
  component: ToggleButtonTheme,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleButtonTheme>;

export default meta;


type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Big: Story = {
    args: { width: 80},
};
