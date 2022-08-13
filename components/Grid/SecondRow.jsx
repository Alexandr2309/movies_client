import React from 'react'
import 'video.js/dist/video-js.css'
import DefaultCard from '../shared/DefaultCard'

const SecondRow = ({ sectionFilms }) => {
	const [fOne, fTwo, fThree] = sectionFilms
	return (
		<>
			<DefaultCard film={fOne} />
			<DefaultCard film={fTwo} />
			<DefaultCard film={fThree} />
		</>
	)
}

export default SecondRow
