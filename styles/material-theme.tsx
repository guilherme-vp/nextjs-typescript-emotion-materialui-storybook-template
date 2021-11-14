import { alpha, createTheme, ThemeOptions } from '@mui/material/styles'

import { pxToRem } from '../utils/px-to-rem'
import { theme as colorTheme, Theme } from './theme'

declare module '@mui/material/styles' {
	interface TypographyVariants {
		display1: React.CSSProperties
		display2: React.CSSProperties
		display3: React.CSSProperties
	}

	interface TypographyVariantsOptions {
		display1?: React.CSSProperties
		display2?: React.CSSProperties
		display3?: React.CSSProperties
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		display1: true
		display2: true
		display3: true
	}
}

const materialBaseTheme = (theme: Theme): ThemeOptions => ({
	palette: {
		primary: {
			main: theme.colors.primary
		},
		secondary: {
			main: theme.colors.secondary
		},
		text: {
			primary: theme.text.main,
			secondary: theme.text.description
		},
		common: {
			black: theme.tags.black,
			white: theme.tags.white
		},
		grey: {
			'600': theme.grey.main
		},
		background: {
			paper: theme.background.main
		},
		divider: theme.border.darker
	},
	typography: {
		display1: {
			fontSize: pxToRem(40),
			fontWeight: 700
		},
		display2: {
			fontSize: pxToRem(30),
			fontWeight: 700
		},
		display3: {
			fontSize: pxToRem(24),
			fontWeight: 600
		},
		h1: {
			fontSize: pxToRem(22),
			fontWeight: 700
		},
		h2: {
			fontSize: pxToRem(20),
			fontWeight: 400
		},
		h3: {
			fontSize: pxToRem(18)
		},
		h4: {
			fontSize: pxToRem(16)
		},
		h5: {
			fontSize: pxToRem(14)
		},
		button: {
			fontSize: pxToRem(20)
		},
		body1: {
			fontSize: pxToRem(15)
		},
		body2: {
			fontSize: pxToRem(12)
		}
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true
			},
			styleOverrides: {
				root: {
					textTransform: 'capitalize',
					fontSize: pxToRem(14),
					borderRadius: '25px',
					fontWeight: 600
				},
				contained: {
					padding: '8px 30px'
				},
				containedSizeSmall: {
					padding: '6px 10px'
				},
				outlined: {
					padding: '6px 30px',
					borderWidth: '2px !important'
				},
				text: {
					fontWeight: 400,
					padding: '2px 5px',
					'& .MuiButton-label': {
						justifyContent: 'space-between'
					}
				}
			}
		},
		MuiAppBar: {
			defaultProps: {
				position: 'fixed',
				elevation: 0
			},
			styleOverrides: {
				root: {
					borderBottom: '1px solid',
					borderBottomColor: theme.border.thin
				},
				colorPrimary: {
					backgroundColor: theme.background.main,
					color: theme.text.main
				}
			}
		},
		MuiChip: {
			styleOverrides: {
				root: {
					height: 24
				},
				sizeSmall: {
					fontWeight: 500,
					padding: '5px 10px'
				},
				label: {
					fontSize: pxToRem(12)
				},
				deleteIconColorPrimary: {
					color: theme.colors.primary,
					fontSize: pxToRem(14),
					'&:hover, &:active': {
						color: alpha(theme.colors.primary, 0.7)
					}
				}
			}
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					border: `1px solid ${theme.border.thin}`,
					padding: '12px 15px',
					fontSize: pxToRem(12)
				},
				icon: {
					right: 2
				},
				select: {
					'&:focus': {
						borderRadius: 'inherit',
						borderColor: theme.border.darker
					}
				}
			}
		},
		MuiInput: {
			defaultProps: {
				disableUnderline: true
			},
			styleOverrides: {
				root: {
					borderRadius: 6,
					border: `1px solid ${theme.border.thin}`,
					fontSize: pxToRem(14),
					marginTop: '0 !important'
				},
				input: {
					padding: '14px 16px 15px',
					'&::placeholder': {
						color: theme.grey.main
					}
				}
			}
		},
		MuiListItem: {
			styleOverrides: {
				root: {
					padding: '8px 20px'
				}
			}
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					fontSize: pxToRem(14),
					outline: 'none',
					'&.Mui-selected': {
						fontWeight: 500,
						backgroundColor: alpha(theme.colors.primary, 0.1)
					}
				}
			}
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: theme.border.darker
				},
				wrapper: {
					color: theme.border.thin,
					fontSize: pxToRem(18),
					paddingLeft: 20,
					paddingRight: 20
				},
				wrapperVertical: {
					paddingTop: 20,
					paddingBottom: 20
				},
				withChildren: {
					'&::after, &::before': {
						borderColor: theme.grey.main
					}
				},
				withChildrenVertical: {
					'&::after, &::before': {
						borderColor: theme.grey.main
					}
				}
			}
		},
		MuiDrawer: {
			styleOverrides: {
				paper: {
					borderRight: 0,
					backgroundColor: theme.background.light
				}
			}
		},
		MuiTab: {
			styleOverrides: {
				root: {
					paddingTop: 0,
					paddingBottom: 0,
					fontSize: pxToRem(14),
					color: theme.text.main,
					transition: 'all 0.3s linear',
					borderTopRightRadius: '16px',
					borderBottomRightRadius: '16px',
					fontWeight: 500,
					'&:hover': {
						backgroundColor: alpha(theme.grey.secondary, 0.4)
					},
					'&.Mui-selected': {
						fontWeight: 700,
						color: theme.colors.primary,
						backgroundColor: alpha(theme.colors.primary, 0.1)
					}
				}
			}
		}
	}
})

export const materialTheme = createTheme(materialBaseTheme(colorTheme))
