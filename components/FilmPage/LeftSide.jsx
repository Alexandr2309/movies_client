import React, { createRef, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'
import useTrailerInfo from '../../hooks/useTrailer'
import Modal from '../UI/Modal/Modal'

const LeftSide = ({ info }) => {
	const [modal, setModal] = useState(false)
	const [videoInfo, setVideoInfo] = useState({})
	const [trailerDuration, setTrailerDuration] = useState('00:00')
	const { nameRu, nameOriginal } = info.main
	const ref = useRef(null)
	
	useTrailerInfo(nameRu, nameOriginal, setVideoInfo)
	
	useEffect(() => {
		let timerId
		if (ref.current !== null) {
			timerId = setTimeout(() => {
				let duration = ref.current.plyr.duration
				const m = duration % 60
				const result = Math.floor(duration / 60) + ':' + (m < 10 ? '0' : '') + m.toString()
				setTrailerDuration(result)
			}, 600)
		}
		
		return function() {
			if (timerId) clearTimeout(timerId)
		}
	}, [ref.current])
	
	
	return (
		<aside>
			<div>
				<div className='film-info__poster' style={{ position: 'relative' }}>
					<Image
						className='film-info__img'
						width={300}
						height={430}
						src=' '
						loader={() => `${info.main.posterUrl}`}
					/>
				</div>
			</div>
			<div className='film-info__trailer' style={{ position: 'relative' }}>
				<Image
					className='film-info__img'
					src=' '
					width={300}
					height={170}
					loader={() => `${info.main.posterUrlPreview}`}
				/>
				<div className='film-info__trailer__block'>
					<div className='film-info__watch film-info__trailer__btn'
							 onClick={() => setModal(true)}
					>
						&#9654; &nbsp;Трейлер
					</div>
					<span>{trailerDuration}</span>
				</div>
			</div>
			<Modal active={modal} setActive={setModal} plyrRef={ref}>
				<Plyr {...videoInfo} ref={pl => ref.current = pl} />
			</Modal>
		</aside>
	)
}

export default LeftSide
