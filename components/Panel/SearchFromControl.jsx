import { FormControl, Input, InputLabel } from '@mui/material'
import { SearchIcon } from './SearchIcon'
import React from 'react'

function SearchFromControl(props) {
	function searchResults(e) {
		if (e.key === 'Enter') {
			props.setLoading(true)
		}
	}
	
	return (
		<FormControl
			variant='standard'
			color='primary'
			size='small'
			style={{ width: 275 }}
		>
			<InputLabel htmlFor='standard-adornment-search'>Search</InputLabel>
			<Input
				inputRef={props.inputRef}
				id='standard-adornment-search'
				size='small'
				onChange={(e) => props.setWord(e.target.value)}
				onKeyDown={searchResults}
				endAdornment={<SearchIcon setLoading={props.setLoading} />}
			/>
		</FormControl>
	)
}

export default SearchFromControl
