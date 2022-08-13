import React from 'react'

const FilmPageDescription = ({ description }) => {
	return (
		<div>
			<h3 className="film-info__title">Описание</h3>
			<p style={{ marginBottom: 50 }}>{description}</p>
		</div>
	)
}

export default FilmPageDescription
