import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { red } from '@mui/material/colors'
import { Search } from './Search'
import { PanelChoose } from './PanelChoose'

const Panel = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: red[500]
			},
			secondary: {
				main: '#f44336'
			}
		}
	})

	return (
		<ThemeProvider theme={theme}>
			<div className="panel">
				<div className="panel__title">Фильмы</div>
				<PanelChoose />
				<Search />
			</div>
		</ThemeProvider>
	)
}

export default Panel
