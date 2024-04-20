import Search from './Search';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Search> = {
    title: 'Search',
    component: Search,
};
  
export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
    args: {
        onValueChange: (value: string) => console.log(value)
    }
};