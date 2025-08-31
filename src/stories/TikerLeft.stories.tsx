// TikerLeft.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TikerLeft } from '@/components/Shared/TikerLeft';

const meta: Meta<typeof TikerLeft> = {
  title: 'Components/Ticker/TikerLeft',
  component: TikerLeft,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomList: Story = {
  args: {
    TikerList: [
      { kpiIsNegative: false, message: 'Receita crescente em 2025' },
      { kpiIsNegative: true, message: 'Perda de 10% no trimestre' },
      { kpiIsNegative: false, message: 'Novos clientes adquiridos: 1500' },
    ],
  },
};

export const Empty: Story = {
  args: {
    TikerList: [],
  },
};
