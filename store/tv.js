import { makeAutoObservable } from 'mobx'
import { TV_ARR } from '../utils/variables'

class TV {
	allTv = []

	constructor() {
		makeAutoObservable(this)
	}

	addTV(arrFromApi) {
		this.allTv = arrFromApi
		window.localStorage.setItem(TV_ARR, JSON.stringify(arrFromApi))
	}
}

export default new TV()
