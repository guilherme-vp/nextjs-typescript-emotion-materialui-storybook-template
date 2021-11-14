import React from 'react'

import { ThemeProvider } from 'styled-components'

import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/system'

import { GlobalStyle } from './Global.styles'
import { materialTheme } from './material-theme'
import { theme } from './theme'

export const StylesWrapper: React.FC = ({ children }) => (
	<StyledEngineProvider injectFirst>
		<MuiThemeProvider theme={materialTheme}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</MuiThemeProvider>
	</StyledEngineProvider>
)
