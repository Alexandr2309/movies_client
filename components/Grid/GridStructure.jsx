import React from 'react'
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'
import ThirdRow from './ThirdRow'
import FourthRow from './FourthRow'
import FifthRow from './FifthRow'

const GridStructure = ({ films }) => {
	return (
		<>
			{films.length > 0 && (
				<>
					<FirstRow sectionFilms={films.slice(0, 4)} />
					<SecondRow sectionFilms={films.slice(4, 8)} />
					<ThirdRow sectionFilms={films.slice(8, 12)} />
					<FourthRow sectionFilms={films.slice(12, 16)} />
					<FifthRow sectionFilms={films.slice(16, 20)} />
				</>
			)}
		</>
	)
}

export default GridStructure
