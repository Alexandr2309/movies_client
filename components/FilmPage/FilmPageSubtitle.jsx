import React from 'react'

export function FilmPageSubtitle(props) {
	return (
		<div className="film-info__subtitle">
			<h3>{props.main.nameOriginal}</h3>
			<span>
				{props.main.ratingAgeLimits === null
					? '0+'
					: props.main.ratingAgeLimits.match(/\d+/gi)[0] + '+'}
			</span>
		</div>
	)
}
