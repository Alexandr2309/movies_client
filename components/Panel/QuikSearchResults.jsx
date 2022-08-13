import React from 'react'
import useFocus from '../../hooks/useFocus'
import { RingLoader } from 'react-spinners'
import styled from 'styled-components'
import { QuickSearchList } from './QuickSearchList'

const LoaderWrap = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px 0px;
`

const QuickSearchResults = ({ results, inputRef, loading, cb }) => {
	const focus = useFocus(inputRef)

	return (
		<ul
			style={{
				display: (focus && results.length) || loading ? 'block' : 'none'
			}}
			className="search"
		>
			{loading && (
				<LoaderWrap>
					<RingLoader />
				</LoaderWrap>
			)}
			<QuickSearchList items={results} cb={cb} isShow={!loading} />
		</ul>
	)
}

export default QuickSearchResults
