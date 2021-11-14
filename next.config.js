const withTM = require('next-transpile-modules')([
	'@mui/material',
	'@mui/lab',
	'@mui/system',
	'@mui/icons-material',
	'@mui/styled-engine'
])

/** @type {import('next').NextConfig} */
module.exports = withTM({
	reactStrictMode: true,
	webpack: config => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@mui/styled-engine': '@mui/styled-engine-sc'
		}

		return config
	}
})
