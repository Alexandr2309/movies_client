import React from 'react'
import DefaultCard from '../shared/DefaultCard'
import ExpandedCard from './GridCards/ExpandedCard'

const ThirdRow = ({ sectionFilms }) => {
	const [f1, f2, f3, f4] = sectionFilms
	return (
		<>
			<DefaultCard film={f1} />
			<DefaultCard film={f2} />
			<ExpandedCard film={f3} />
			<DefaultCard film={f4} />
		</>
	)
}

export default ThirdRow
