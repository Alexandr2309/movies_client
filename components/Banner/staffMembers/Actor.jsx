import cl from '../../../styles/Staff.module.scss'
import Image from 'next/image'
import React from 'react'
import * as PropTypes from 'prop-types'

export function Actor(props) {
	return (
		<div
			data-role="img-wrap"
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			className={cl.item}
			style={{ transform: props.showNow === 2 ? 'scale(3)' : 'scale(1)' }}
			data-count={2}
			data-name={props.actor?.nameRu || props.actor?.nameEn || ''}
		>
			{props.showNow === 2 && (
				<Image
					src={props.src || '/'}
					width={props.width < 998 ? 10 : 15}
					height={props.width < 998 ? 10 : 15}
					quality={100}
					layout="responsive"
				/>
			)}
		</div>
	)
}

Actor.propTypes = {
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
	showNow: PropTypes.number,
	actor: PropTypes.any,
	director: PropTypes.any,
	loader: PropTypes.func,
	width: PropTypes.number
}
