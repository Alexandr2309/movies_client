import QuickSearchCard from './QuickSearchCard'
import React from 'react'

export const QuickSearchList = ({ items, cb, isShow }) => {
	return (
		<div style={{ display: isShow ? 'block' : 'none' }}>
			{items.map((item, i) => (
				<QuickSearchCard
					item={item}
					key={i * Math.random()}
					last={items.length - 1 === i}
					cb={cb}
				/>
			))}
		</div>
	)
}
