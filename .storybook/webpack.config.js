module.exports = async ({ config }) => {
	config.resolve.alias['@mui/styled-engine'] = '@mui/styled-engine-sc'

	return config
}
