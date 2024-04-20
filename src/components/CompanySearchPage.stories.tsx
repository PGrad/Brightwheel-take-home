import CompanySearchPage from './CompanySearchPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CompanySearchPage> = {
    title: 'CompanySearchPage',
    component: CompanySearchPage,
};
  
export default meta;

type Story = StoryObj<typeof CompanySearchPage>;

export const Default: Story = {
    args: {}
};