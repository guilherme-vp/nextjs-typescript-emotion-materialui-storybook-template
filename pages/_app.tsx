import * as React from 'react'

import { ThemeProvider as StyledProvider } from '@emotion/react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../styles/global.styles'
import { materialTheme } from '../styles/material-theme'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<Head>
				<title>Next App</title>
				<link href="/favicon.ico" rel="icon" />
				<meta
					content="minimum-scale=1, initial-scale=1, width=device-width"
					name="viewport"
				/>
			</Head>
			<ThemeProvider theme={materialTheme}>
				<StyledProvider theme={theme}>
					<CssBaseline />
					<GlobalStyle />
					<Component {...pageProps} />
				</StyledProvider>
			</ThemeProvider>
		</React.Fragment>
	)
}

export default MyApp
