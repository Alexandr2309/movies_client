import { useEffect } from 'react'
import filmsArr from '../store/allFilms'
import tvState from '../store/tv'
import serArr from '../store/series'
import favouritesArr from '../store/userStore'
import {
	checkArrStorage,
	checkLastSync,
	getAllPopularFilms,
	getSeriesInfo,
	getTvInfo, searchFavourites
} from '../utils/helpFunc'
import {
	FAVOURITES, FAVOURITES_ARR,
	FILM_ARR,
	FILMS,
	LAST_SYNC,
	SERIES,
	SERIES_ARR,
	TV,
	TV_ARR
} from '../utils/variables'

export default function useGetFilms(films, type = FILMS) {
	return useEffect(() => {
		switch (type) {
			case TV:
				if (
					checkArrStorage(TV_ARR, tvState.addTV.bind(tvState), films) === false
				) {
					getTvInfo()
				}
				break
			case SERIES:
				if (
					checkArrStorage(SERIES_ARR, serArr.addSeries.bind(serArr), films) ===
					false
				) {
					getSeriesInfo()
				}
				break
			case FILMS:
				if (
					checkArrStorage(FILM_ARR, filmsArr.addFilms.bind(filmsArr), films) ===
					false
				) {
					getAllPopularFilms(filmsArr)
				}
			case FAVOURITES:
				if (
					checkArrStorage(FAVOURITES_ARR, favouritesArr.addFavourites.bind(favouritesArr), films) ===
					false
				) {
					searchFavourites()
				}
				break
			default:
				throw new Error('Ошиба в переданном типе запроса')
		}
		return function() {
			const lastSync = JSON.parse(window.localStorage.getItem(LAST_SYNC))
			checkLastSync(lastSync)
		}
	}, [])
}
