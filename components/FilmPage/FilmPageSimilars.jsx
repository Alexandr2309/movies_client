import React from 'react'
import SimilarItem from '../shared/SimilarItem'
import Carousel from '../UI/Carousel/Carousel'

const FilmPageSimilars = ({ items }) => {
	return (
		<Carousel>
			{items.map((item, i) => (
				<div className="similar-item" key={i}>
					<SimilarItem film={item} />
				</div>
			))}
		</Carousel>
	)
}

export default FilmPageSimilars
