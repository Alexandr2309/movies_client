import React from 'react'

export function FilmPageAboutTitle() {
	return (
		<div className="film-info__title film-info__about-title ">О фильме</div>
	)
}

export function FilmPageTitle(props) {
	return (
		<h1 className="film-info__title">
			{props.main.nameRu}({props.main.year})
		</h1>
	)
}
