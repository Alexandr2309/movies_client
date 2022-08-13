import React, { useContext } from 'react'
import { UserContext } from '../../pages/_app'
import { useRouter } from 'next/router'
import { IconLink } from './IconLink'

const Icons = ({ items }) => {
	const { setLoading } = useContext(UserContext)
	const router = useRouter()
	
	const loadingsStart = (href) => {
		if (router.route === href) return
		setLoading(true)
	}
	
	
	const removeTooltip = () => document.querySelector('.textHover')?.remove()
	
	function addTooltip(e, title) {
		let nowTooltip = document.querySelector('.textHover')
		if (nowTooltip) nowTooltip.remove()
		
		const { top, right, left, bottom } = e.getBoundingClientRect()
		
		const tooltip = document.createElement('div')
		tooltip.classList.add('textHover')
		tooltip.innerHTML = title
		e.append(tooltip)
		
		tooltip.style.top = top + 15 + 'px'
		tooltip.style.left = e.clientWidth / 2 - tooltip.clientWidth / 2 + 'px'
	}
	
	return (
		<div className='icons'>
			<ul>
				{items.map((item, i) => (
						<li
							key={i}
							onMouseEnter={(e) =>
								addTooltip.call(this, e.currentTarget, item.title)
							}
							onMouseLeave={removeTooltip}
						>
							<IconLink item={item} loadingsStart={loadingsStart} />
						</li>
					)
				)}
			</ul>
		</div>
	)
}

export default Icons
