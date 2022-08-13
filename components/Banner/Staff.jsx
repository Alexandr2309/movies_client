import React, { useEffect, useMemo, useState } from 'react'
import cl from '../../styles/Staff.module.scss'
import { createTooltip } from '../../utils/helpFunc'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Director } from './staffMembers/Director'
import { Composer } from './staffMembers/Composer'
import { Producer } from './staffMembers/Producer'
import { Actor } from './staffMembers/Actor'

const Staff = ({ info }) => {
	const { actor, producer, composer, director } = useMemo(() => {
		return info
	}, [info])

	const [width, height] = useWindowSize()
	const [showNow, setShowNow] = useState(1)
	const [arrayOfImg, setArrayOfImg] = useState([])
	const [isStop, setIsStop] = useState(false)

	let interval = null

	function count() {
		let value = showNow + 1
		if (showNow === 4) setShowNow(1)
		else setShowNow(value)
	}

	const stopScale = (e) => {
		clearTimeout(interval)
		setIsStop(true)
		document.getElementById('staff-tooltip')?.remove()

		const hoverNow = e.currentTarget.dataset.count
		const name = e.currentTarget.dataset.name

		if (+hoverNow === showNow) {
			createTooltip(hoverNow, arrayOfImg, name)
		} else {
			setShowNow(+hoverNow)
			e.currentTarget.ontransitionend = () => {
				document.getElementById('staff-tooltip')?.remove()
				createTooltip(hoverNow, arrayOfImg, name)
			}
		}
	}

	const continueScale = (e) => {
		e.currentTarget.ontransitionend = () => null
		document.getElementById('staff-tooltip')?.remove()
		setIsStop(false)
		setShowNow(1)
	}

	useEffect(() => {
		if (!isStop) {
			interval = setTimeout(count, 1500)
		}
	}, [showNow])

	useEffect(() => {
		setArrayOfImg(document.querySelectorAll('div[data-role="img-wrap"]'))
	}, [])

	return (
		<div className={cl.wrapper}>
			<Director
				onMouseEnter={stopScale}
				onMouseLeave={continueScale}
				showNow={showNow}
				director={director}
				src={director?.posterUrl}
				width={width}
				count={1}
			/>
			<Actor
				onMouseEnter={stopScale}
				onMouseLeave={continueScale}
				showNow={showNow}
				actor={actor}
				director={director}
				src={actor?.posterUrl}
				width={width}
			/>
			<Producer
				onMouseEnter={stopScale}
				onMouseLeave={continueScale}
				producer={producer}
				showNow={showNow}
				src={producer ? producer[0].posterUrl : ''}
				width={width}
			/>
			<Composer
				composer={composer}
				onMouseEnter={stopScale}
				onMouseLeave={continueScale}
				showNow={showNow}
				src={composer?.posterUrl}
				width={width}
			/>
		</div>
	)
}

export default React.memo(Staff)
