import React from 'react'

const CardInfo = ({ nameRu, nameEn, year, rating }) => {
	return (
		<div className="search__info">
			<h5>{nameRu}</h5>
			<span className="search__rating">{rating}</span>
			<span className="search__about">
				{nameEn}, {year}
			</span>
		</div>
	)
}

export default CardInfo
