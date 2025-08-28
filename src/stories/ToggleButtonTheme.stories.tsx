import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ToggleButtonTheme } from '@/components/ToggleButtonTheme';

const meta:Meta<typeof ToggleButtonTheme> = {
  title: 'Components/Buttons/ToggleButtonTheme',
  component: ToggleButtonTheme,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
};
export default meta;


type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Big: Story = {
    args: { width: 80},
};
