import { makeAutoObservable } from 'mobx'
import { filmInfoById } from '../utils/helpFunc'
import { FILM_ARR } from '../utils/variables'

class Films {
	arrOfFilms = []
	filmForBanner = {}

	constructor() {
		makeAutoObservable(this)
	}

	addFilms(arrayFromApi) {
		this.arrOfFilms = arrayFromApi
		window.localStorage.setItem(FILM_ARR, JSON.stringify(arrayFromApi))
	}

	setBannerFilm(film) {
		this.filmForBanner = film
	}

	fetchBannerFilm(id) {
		filmInfoById(id, true).then((res) => {
			window.localStorage.setItem('filmForBanner', JSON.stringify(res))
			this.filmForBanner = res
		})
	}
}

export default new Films()
