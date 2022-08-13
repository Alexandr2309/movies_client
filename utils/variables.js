import { GiFilmStrip } from 'react-icons/gi'
import { FaTv } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { GrFavorite } from 'react-icons/gr'


export const authItems = [
	{ element: GiFilmStrip, title: 'Фильмы', href: '/' },
	{ element: FaTv, title: 'ТВ', href: '/tv' },
	{ element: BiMoviePlay, title: 'Сериалы', href: '/series' },
	{ element: GrFavorite, title: 'Избранное', href: '/favourites' }
]
export const commonItems = [
	{ element: GiFilmStrip, title: 'Фильмы', href: '/' },
	{ element: FaTv, title: 'ТВ', href: '/tv' },
	{ element: BiMoviePlay, title: 'Сериалы', href: '/series' }
]

export const KPOISK_KEY = process.env.NEXT_PUBLIC_KPOISK_API_KEY
export const KPOISK_KEY2 = process.env.NEXT_PUBLIC_KPOISK_API_KEY2
export const IMBD_KEY = process.env.NEXT_PUBLIC_IMBD_API_KEY
export const YT_KEY = process.env.NEXT_PUBLIC_YT_KEY

export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const lablesInfo = {
	year: 'Год производства',
	countries: 'Страна',
	genres: 'Жанр',
	slogan: 'Слоган',
	director: 'Режиссёр',
	producer: 'Продюсер',
	composer: 'Композитор',
	feesWorld: 'Сборы в мире',
	feesRu: 'Сборы в России',
	ratingAgeLimits: 'Возраст',
	filmLength: 'Время'
}

export const TV = 'TV'
export const FILMS = 'FILMS'
export const SERIES = 'SERIES'
export const FAVOURITES = 'FAVOURITES'

export const TV_ARR = 'arrayOfTvSeries'
export const FILM_ARR = 'arrayOfFilms'
export const SERIES_ARR = 'arrayOfSeries'
export const FAVOURITES_ARR = 'arrayOfFavourites'

export const LAST_SYNC = 'dataLastSyncFilms'

