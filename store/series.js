import { makeAutoObservable } from 'mobx'
import { SERIES_ARR } from '../utils/variables'

class Series {
	allSeries = []

	constructor() {
		makeAutoObservable(this)
	}

	addSeries(arrFromApi) {
		this.allSeries = arrFromApi
		window.localStorage.setItem(SERIES_ARR, JSON.stringify(arrFromApi))
	}
}

export default new Series()
