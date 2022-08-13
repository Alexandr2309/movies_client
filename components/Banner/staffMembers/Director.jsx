import cl from '../../../styles/Staff.module.scss'
import Image from 'next/image'
import React from 'react'
import * as PropTypes from 'prop-types'

export function Director(props) {
	return (
		<div
			className={cl.item}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			style={{ transform: props.showNow === 1 ? 'scale(3)' : 'scale(1)' }}
			data-role="img-wrap"
			data-count={props.count}
			data-name={props.director?.nameRu || props.director?.nameEn || ''}
		>
			{props.showNow === props.count && (
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

Director.propTypes = {
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
	showNow: PropTypes.number,
	director: PropTypes.any,
	loader: PropTypes.func,
	width: PropTypes.any
}
