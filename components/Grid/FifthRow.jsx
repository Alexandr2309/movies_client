import React from 'react'
import DefaultCard from '../shared/DefaultCard'

const FifthRow = ({ sectionFilms }) => {
	const [f1, f2, f3, f4] = sectionFilms
	return (
		<>
			<DefaultCard film={f1} />
			<DefaultCard film={f2} />
			<DefaultCard film={f3} />
			<DefaultCard film={f4} />
		</>
	)
}

export default FifthRow
