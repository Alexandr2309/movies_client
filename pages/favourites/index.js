import React, { useContext, useEffect } from 'react'
import userStore from '../../store/userStore'
import { observer } from 'mobx-react-lite'
import { FAVOURITES } from '../../utils/variables'
import { gridTemplate } from '../../utils/helpFunc'
import { RingLoader } from 'react-spinners'
import DefaultCard from '../../components/shared/DefaultCard'
import useGetFilms from '../../hooks/useGetFilms'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useRouter } from 'next/router'
import { UserContext } from '../_app'

const Favourites = observer(() => {
	const favouritesFilms = userStore.favourites
	const na = useRouter()
	const [width] = useWindowSize()
	const { setLoading } = useContext(UserContext)
	useGetFilms(favouritesFilms, FAVOURITES)
	
	useEffect(() => {
		if (!userStore.user.email) {
			na.push('/user/login', undefined, { shallow: true })
		}
		setLoading(false)
	}, [userStore.user])
	
	return (
		<main style={{ padding: '30px', background: '#EDEFF0' }}>
			<h1>Ваше избранное</h1>
			{favouritesFilms[0] === 'ПУСТО' || favouritesFilms.length < 1 ?
				<div>У вас пока нет избранных</div>
				: <div
					className='grid'
					style={{
						gridTemplateRows:
							favouritesFilms.length > 0
								? `repeat(${gridTemplate(width, Math.ceil(favouritesFilms.length / 20))}, ${
									width > 1200 ? '	350px' : '300px'
								})`
								: 'repeat(2, 100px)',
						overflow: 'hidden'
					}}
				>
					{!favouritesFilms.length && <RingLoader className='loader-grid' size={120} />}
					{favouritesFilms.length > 0 && favouritesFilms.map(film => {
						return <DefaultCard film={film} key={Math.random()} />
					})}
				</div>}
		</main>
	)
})

export default Favourites