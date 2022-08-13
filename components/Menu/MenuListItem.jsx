import Link from 'next/link'
import React from 'react'

export function MenuListItem(props) {
	return <li>
		<Link href={props.item.href}>
			<div className='menu__item'>
				<span className='menu__item-text'>{props.item.title}</span>
				{props.item.element}
			</div>
		</Link>
	</li>
}