import React from 'react'
import DefaultCard from '../shared/DefaultCard'
import ExpandedCard from './GridCards/ExpandedCard'

const FirstRow = ({ sectionFilms }) => {
	const [filmOne, filmTwo, filmThird, filmFour] = sectionFilms

	return (
		<>
			<DefaultCard film={filmOne} />
			<ExpandedCard film={filmTwo} />
			<DefaultCard film={filmThird} />
			<DefaultCard film={filmFour} />
		</>
	)
}

export default FirstRow
