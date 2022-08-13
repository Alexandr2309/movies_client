import React, { useEffect, useMemo, Suspense } from 'react'
import Image from 'next/image'
import cl from '../../styles/Banner.module.scss'
import BottomPanel from './BottomPanel'

import Watch from './Watch'
import films from '../../store/allFilms'
import { observer } from 'mobx-react-lite'

const Staff = React.lazy(() => import('./Staff'))

const Banner = () => {
	const bannerFilm = films.filmForBanner
	
	useEffect(() => {
		if (Object.keys(bannerFilm).length) return
		const bannerInfo = JSON.parse(window.localStorage.getItem('filmForBanner'))
		
		if (bannerInfo !== null && Object.keys(bannerInfo).length) {
			return films.setBannerFilm(bannerInfo)
		}
	}, [])
	
	return (
		<div className={cl.banner}>
			<Image
				src=' '
				loader={() => bannerFilm.coverUrl || bannerFilm.posterUrl}
				layout='responsive'
				height={800}
				width={1368}
				priority={true}
				className={cl.banner__img}
			/>
			<Watch
				url={bannerFilm.coverUrl || bannerFilm.posterUrl}
				id={bannerFilm.kinopoiskId}
			/>
			<Suspense fallback={<div></div>}>
				<Staff info={bannerFilm} />
			</Suspense>
			<BottomPanel info={bannerFilm} />
		</div>
	)
}

export default observer(Banner)
