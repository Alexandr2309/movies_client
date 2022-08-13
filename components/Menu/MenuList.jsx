import React from 'react'
import { MenuListItem } from './MenuListItem'

const MenuList = ({ items }) => {
	return (
		<ul>
			{items.map((item, i) => (
				<MenuListItem key={i} item={item} />
			))}
		</ul>
	)
}

export default MenuList