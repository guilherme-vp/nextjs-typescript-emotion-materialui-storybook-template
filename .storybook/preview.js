import { Global, ThemeProvider as StyledProvider } from '@emotion/react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import GlobalStyle from '../src/styles/global.styles'
import { materialTheme } from '../src/styles/material-theme'
import { theme } from '../src/styles/theme'

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
		<ThemeProvider theme={materialTheme}>
			<StyledProvider theme={theme}>
				<CssBaseline />
				<Global styles={GlobalStyle} />
				<Story />
			</StyledProvider>
		</ThemeProvider>
	)
]
