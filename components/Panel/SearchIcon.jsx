import { IconButton, InputAdornment } from '@mui/material'
import { AiOutlineSearch } from 'react-icons/ai'
import React from 'react'

export function SearchIcon({ setLoading }) {
	return (
		<InputAdornment
			position="end"
			style={{ cursor: 'pointer' }}
			onClick={() => setLoading(true)}
		>
			<IconButton size="small">
				<AiOutlineSearch />
			</IconButton>
		</InputAdornment>
	)
}
