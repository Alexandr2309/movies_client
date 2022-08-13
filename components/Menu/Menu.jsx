import React from 'react'
import MenuList from './MenuList'

const Menu = ({ active, setActive, header, items }) => {
	return (
		<div className={active ? 'menu active' : 'menu'}>
			<div className='blur' onClick={() => setActive(false)} />
			<div className='menu__content'>
				<div className='menu__header'>{header}</div>
				<MenuList items={items} />
			</div>
		</div>
	)
}

export default Menu
