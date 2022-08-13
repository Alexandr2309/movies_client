import React from 'react'
import DefaultCard from '../shared/DefaultCard'

const FourthRow = ({ sectionFilms }) => {
	const [f1, f2, f3] = sectionFilms
	return (
		<>
			<DefaultCard film={f1} />
			<DefaultCard film={f2} />
			<DefaultCard film={f3} />
		</>
	)
}

export default FourthRow
