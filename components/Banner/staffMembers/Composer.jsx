import cl from '../../../styles/Staff.module.scss'
import Image from 'next/image'
import React from 'react'
import * as PropTypes from 'prop-types'

export function Composer(props) {
	return (
		<div
			data-role="img-wrap"
			className={cl.item}
			data-count={4}
			data-name={props.composer?.nameRu || props.composer?.nameEn || ''}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			style={{ transform: props.showNow === 4 ? 'scale(3)' : 'scale(1)' }}
		>
			{props.showNow === 4 && (
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

Composer.propTypes = {
	composer: PropTypes.any,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
	showNow: PropTypes.number,
	loader: PropTypes.func,
	width: PropTypes.number
}
