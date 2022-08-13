import React from 'react'
import Star from './Star'

const Stars = ({ className = false, color = '#ffffff', rating }) => {
	const ratingArr = Array.from(
		{ length: Math.round(+rating / 2) },
		(e, i) => i + 1
	)
	return (
		<div className={`rating ${className || ''}`}>
			<div className="rating__title">
				<span>Рейтинг</span>
			</div>
			<div className="rating__items">
				{Array.from({ length: 5 }).map((e, i) => (
					<Star key={i} isFill={ratingArr.includes(i + 1)} color={color} />
				))}
			</div>
		</div>
	)
}

export default Stars
