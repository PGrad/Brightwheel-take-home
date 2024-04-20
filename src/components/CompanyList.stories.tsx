import type { Meta, StoryObj } from '@storybook/react';
import CompanyList from './CompanyList';

const meta: Meta<typeof CompanyList> = {
    title: 'CompanyList',
    component: CompanyList,
};
  
export default meta;

type Story = StoryObj<typeof CompanyList>;

export const Default: Story = {
    args: {
        query: "A",
        favoritesOnly: false
    }
};
