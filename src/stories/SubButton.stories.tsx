import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SubButton } from '@/components/Shared/SubButton';

const meta:Meta<typeof SubButton> = {
  title: 'Components/Buttons/SubButton',
  component: SubButton,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
};
export default meta;


type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: { label: "Save"},
};

export const Big: Story = {
    args: { label: "Save"},
};
