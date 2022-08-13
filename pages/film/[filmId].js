import React, { useContext, useEffect } from 'react'
import { filmFeesInfo, filmInfoById, filmsSimilars } from '../../utils/helpFunc'

// const MainInfo = React.lazy(() => import())
// const LeftSide = React.lazy(() => import('../../components/FilmPage/LeftSide'))

import MainInfo from '../../components/FilmPage/MainInfo'
import LeftSide from '../../components/FilmPage/LeftSide'
import { UserContext } from '../_app'

export async function getServerSideProps(context) {
	const { filmId } = context.query
	
	const mainInfo = await filmInfoById(filmId)
	const feesInfo = await filmFeesInfo(filmId)
	const similarsFilms = await filmsSimilars(filmId)
	
	if (!mainInfo || !feesInfo) {
		return {
			notFound: true
		}
	}
	
	
	return {
		props: {
			info: {
				main: mainInfo,
				fees: feesInfo,
				similars: similarsFilms
			}
		}
	}
}

const Film = ({ info }) => {
	const { setLoading } = useContext(UserContext)
	useEffect(() => {
		setLoading(false)
	}, [])
	return (
		<>
			<section className='film-info'>
				<LeftSide info={info} />
				<MainInfo info={info} />
			</section>
		</>
	)
}

export default Film
