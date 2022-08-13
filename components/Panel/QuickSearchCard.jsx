import React from 'react'
import { QuickSearchBody } from './QuickSearchBody'

const QuickSearchCard = ({ item, last, cb }) => {
	return (
		<li className="search__item">
			<QuickSearchBody
				rating={item.rating}
				nameEn={item.nameEn}
				nameRu={item.nameRu}
				year={item.startYear}
				src={item.posterUrlPreview}
				href={item.filmId}
				last={last}
				setLoading={cb}
			/>
		</li>
	)
}

export default QuickSearchCard
