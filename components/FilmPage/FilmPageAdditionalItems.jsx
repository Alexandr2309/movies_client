import React from 'react'
import FilmPageSimilars from './FilmPageSimilars'

const FilmPageAdditionalItems = ({ title, items }) => {
	return (
		<div>
			<h3 className="film-info__title" style={{ marginBottom: 30 }}>
				{items.length > 0 ? title : 'Нет похожих фильмов'}
			</h3>
			{items.length > 0 && <FilmPageSimilars items={items} />}
		</div>
	)
}

export default FilmPageAdditionalItems
