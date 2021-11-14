import { Story, Meta } from '@storybook/react/types-6-0'

export default {
	title: 'Component'
} as Meta

const Template: Story = () => <h1>Hello World</h1>

export const basic = Template.bind({})
