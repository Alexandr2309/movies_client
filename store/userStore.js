import { makeAutoObservable } from 'mobx'
import { FAVOURITES_ARR } from '../utils/variables'

class UserStore {
	constructor() {
		this._isAuth = false
		this._user = {}
		this._favourites = []
		makeAutoObservable(this)
	}
	
	setIsAuth(bool) {
		this._isAuth = bool
	}
	
	setUser(user) {
		this._user = user
	}
	
	get isAuth() {
		return this._isAuth
	}
	
	get user() {
		return this._user
	}
	
	addFavourites(arrFromApi) {
		this._favourites = arrFromApi
		window.localStorage.setItem(FAVOURITES_ARR, JSON.stringify(arrFromApi))
	}
	
	get favourites() {
		return this._favourites
	}
}

export default new UserStore()