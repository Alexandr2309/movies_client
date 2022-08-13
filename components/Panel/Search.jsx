import React, { useEffect, useRef, useState } from 'react'
import QuickSearchResults from './QuikSearchResults'
import SearchFromControl from './SearchFromControl'
import { quickSearchResult } from '../../utils/helpFunc'

export function Search() {
	const ref = useRef(null)

	const [loading, setLoading] = useState(false)
	const [results, setResults] = useState([])
	const [searchWord, setSearchWord] = useState('')

	useEffect(() => {
		if (loading === false) return

		quickSearchResult(searchWord, setResults)
	}, [loading])

	return (
		<div style={{ position: 'relative' }}>
			<SearchFromControl
				inputRef={ref}
				setLoading={setLoading}
				setWord={setSearchWord}
			/>
			<QuickSearchResults
				results={results}
				inputRef={ref}
				loading={loading}
				cb={setLoading}
			/>
		</div>
	)
}
