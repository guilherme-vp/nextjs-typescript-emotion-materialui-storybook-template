import { StylesWrapper } from '../styles/Wrapper.styles'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
}

export const decorators = [
	Story => (
		<StylesWrapper>
			<Story />
		</StylesWrapper>
	)
]
