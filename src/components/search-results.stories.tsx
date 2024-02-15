import type { Meta, Story } from '@storybook/react'
import SearchResults from './search-results'

const meta: Meta = {
  title: 'Components/Search Results',
  component: SearchResults,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

const Template: Story = (args) => <SearchResults {...args} />

export const Default = Template.bind({})
Default.args = {
  data: [
    {
      year: -45,
      month: '01',
      day: '01',
      event:
        'The Julian calendar takes effect as the civil calendar of the Roman Empire, establishing January 1 as the new date of the new year.',
    },
    {
      year: -45,
      month: '01',
      day: '01',
      event:
        'The Julian calendar takes effect as the civil calendar of the Roman Empire, establishing January 1 as the new date of the new year.',
    },
    {
      year: -45,
      month: '01',
      day: '01',
      event:
        'The Julian calendar takes effect as the civil calendar of the Roman Empire, establishing January 1 as the new date of the new year.',
    },
    {
      year: -45,
      month: '01',
      day: '01',
      event:
        'The Julian calendar takes effect as the civil calendar of the Roman Empire, establishing January 1 as the new date of the new year.',
    },
    {
      year: -45,
      month: '01',
      day: '01',
      event:
        'The Julian calendar takes effect as the civil calendar of the Roman Empire, establishing January 1 as the new date of the new year.',
    },
  ],
  onChangePage: () => {},
  currentPage: 0,
}
