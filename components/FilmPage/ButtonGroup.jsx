import React, { useEffect, useState } from 'react'
import userStore from '../../store/userStore'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'
import { FAVOURITES } from '../../utils/variables'
import useGetFilms from '../../hooks/useGetFilms'
import { actionsToChangeFavs, currentFavs, modifiedByCond } from '../../utils/helpFunc'

const ButtonGroup = observer(({ url, filmId }) => {
	const [active, setActive] = useState(false)
	const na = useRouter()
	
	const user = userStore.user
	useGetFilms(userStore.favourites, FAVOURITES)
	
	useEffect(() => {
		const isFilmInclude = !(userStore.favourites.find(film => (film.filmId || film.kinopoiskId) === filmId) === undefined)
		setActive(isFilmInclude)
	}, [userStore.favourites])
	
	
	const toggleFavourite = async () => {
		if (!user) return na('/user/login', undefined, { shallow: true })
		
		const [favNow, favNowFilmId] = currentFavs()
		
		const changedFavouriteId = modifiedByCond(active, favNowFilmId, filmId)
		
		actionsToChangeFavs(user, changedFavouriteId, active, favNow, filmId, setActive)
	}
	
	return (
		<div className='film-info__btn-group'>
			<a className='film-info__watch' href={url} target='_blank' rel='noreferrer'>Смотреть</a>
			<button
				className={
					active ? 'film-info__favorite active' : 'film-info__favorite'
				}
				onClick={toggleFavourite}
			>
				Буду смотреть
			</button>
		</div>
	)
})

export default ButtonGroup
