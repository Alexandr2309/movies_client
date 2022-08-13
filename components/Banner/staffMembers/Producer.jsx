import cl from '../../../styles/Staff.module.scss'
import Image from 'next/image'
import React from 'react'
import * as PropTypes from 'prop-types'

export function Producer(props) {
	return (
		<div
			data-role="img-wrap"
			className={cl.item}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			data-count={3}
			data-name={
				props.producer
					? props.producer[0].nameRu || props.producer[0].nameEn
					: ''
			}
			style={{ transform: props.showNow === 3 ? 'scale(3)' : 'scale(1)' }}
		>
			{props.showNow === 3 && (
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

Producer.propTypes = {
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
	producer: PropTypes.any,
	showNow: PropTypes.number,
	loader: PropTypes.func,
	width: PropTypes.number
}
