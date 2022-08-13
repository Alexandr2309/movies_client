import FilmPageInfoStroke from './FilmPageInfoStroke'
import React from 'react'

export default function FilmPageAbout({ lablesInfo, main }) {
	return (
		<div className="film-info__about-block">
			{Object.keys(lablesInfo).map((label, i) => (
				<FilmPageInfoStroke key={i} label={label} main={main} />
			))}
		</div>
	)
}
