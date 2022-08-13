import axios from 'axios'
import path, { headersConfig } from './links'
import filmsArray from '../store/allFilms'
import filmsArr from '../store/allFilms'
import tvArr from '../store/tv'
import seriesState from '../store/series'
import userStore from '../store/userStore'
import { LAST_SYNC } from './variables'
import { changeFavourites, getFavourite } from '../pages/api/http/userAPI'

export function getCoords(elem) {
	let box = elem.getBoundingClientRect()
	
	return {
		top: box.top + window.pageYOffset,
		right: box.right + window.pageXOffset,
		bottom: box.bottom + window.pageYOffset,
		left: box.left + window.pageXOffset
	}
}

export function createTooltip(target, arrayOfImg, name) {
	const coords = getCoords(arrayOfImg[+target - 1])
	
	const span = document.createElement('span')
	span.innerHTML = name
	span.style.color = 'white'
	span.style.fontSize = '14px'
	document.body.append(span)
	
	span.style.position = 'absolute'
	span.id = 'staff-tooltip'
	span.style.left = coords.right + 11 + 'px'
	span.style.top = coords.top + span.clientHeight / 2 + 10 + 'px'
}

export const gridTemplate = (width, length) =>
	width < 998 ? (width < 598 ? 20 * length : 10 * length) : 5 * length

export const editFilmLength = async (arrayToFilm) => {
	return new Promise(async (resolve, reject) => {
		for (const film of arrayToFilm) {
			if (film.filmLength !== null) continue
			
			const seasons = await axios.get(
				`${path.filmsPath}${film.filmId}/seasons`,
				headersConfig
			)
			film.filmLength = seasons.data.total
		}
		resolve(arrayToFilm)
	})
}

export async function getPopularFilm(page) {
	const response = await axios.get(
		`${path.topPopularFilms}${page}`,
		headersConfig
	)
	if (page === 1) {
		const mostPopular = response.data.films.sort(
			(a, b) => b.ratingKinopoisk - a.ratingKinopoisk
		)
		filmsArray.fetchBannerFilm(mostPopular[0].filmId)
	}
	return response.data.films
}

export async function getAllPopularFilms(filmsArr, addCb, reqCb) {
	let arrayToFilm = []
	
	for (let i = 0; i < 5; i++) {
		const response = await getPopularFilm(i + 1)
		arrayToFilm.push(...response)
	}
	filmsArr.addFilms(arrayToFilm)
}

const createStaffInfo = (staffResponse) => {
	return {
		director:
			staffResponse.data.find((person) => person.professionKey === 'DIRECTOR')
				?.nameRu || null,
		producer:
			staffResponse.data
				.filter((person) => person.professionKey === 'PRODUCER')
				.map((elem) => elem?.nameRu) || null,
		composer:
			staffResponse.data.find((person) => person.professionKey === 'COMPOSER')
				?.nameRu || null
	}
}

const createBannerStaff = (staffResponse) => {
	return {
		director: staffResponse.data.find(
			(person) => person.professionKey === 'DIRECTOR'
		),
		producer:
			staffResponse.data
				.filter((person) => person.professionKey === 'PRODUCER')
				.slice(0, 2) || null,
		composer:
			staffResponse.data.find(
				(person) => person.professionKey === 'COMPOSER'
			) || null,
		actor:
			staffResponse.data.find((person) => person.professionKey === 'ACTOR') ||
			null
	}
}

export const filmInfoById = async (id, forBanner = false) => {
	try {
		const response = await axios.get(`${path.filmsPath}${id}`, headersConfig)
		const staffResponse = await axios.get(
			`${path.filmStaff}${id}`,
			headersConfig
		)
		
		const staffInfo = createStaffInfo(staffResponse)
		const bannerStaff = createBannerStaff(staffResponse)
		
		return forBanner
			? { ...response.data, ...bannerStaff }
			: { ...response.data, ...staffInfo }
	} catch (e) {
		console.log(e.message)
		throw new Error(e)
	}
}

export const filmsSimilars = async (id) => {
	try {
		const response = await axios.get(path.filmSimilars(id), headersConfig)
		console.log(response)
		
		return response.data.items
	} catch (e) {
		console.log(e)
	}
}

export const filmFeesInfo = async (id) => {
	try {
		const response = await axios.get(path.filmFees(id), headersConfig)
		return response.data.items
	} catch (e) {
		console.log(e)
	}
}

export const getPopularTV = async (page) => {
	const response = await axios.get(
		`${path.tvSeries}&page=${page}`,
		headersConfig
	)
	return response.data.items
}

export const getTvInfo = async () => {
	const arrForTv = []
	
	for (let i = 0; i < 5; i++) {
		const response = await getPopularTV(i + 1)
		arrForTv.push(...response)
	}
	tvArr.addTV(arrForTv)
}

export const getSeriesPage = async (page) => {
	const response = await axios.get(`${path.series}&page=${page}`, headersConfig)
	return response.data.items
}

export const getSeriesInfo = async () => {
	const arrForSeries = []
	
	for (let i = 0; i < 5; i++) {
		const response = await getSeriesPage(i + 1)
		arrForSeries.push(...response)
	}
	seriesState.addSeries(arrForSeries)
}

export const isInStorage = async (filmId, result) => {
	
	const isHaveFilms = filmsArr.arrOfFilms.find((film) => film.filmId === filmId)
	if (isHaveFilms !== undefined) result.push(isHaveFilms)
	else {
		const filmToPush = await filmInfoById(filmId)
		result.push(filmToPush)
	}
}

export async function sortFavorite(favourite, result) {
	for (let filmId of favourite) {
		await isInStorage(filmId, result)
	}
}

export const searchFavourites = async () => {
	const user = userStore.user
	const { favourite } = await getFavourite(user.id)
	
	if (favourite?.length === 0 || favourite === null) {
		userStore.addFavourites(['ПУСТО'])
		return
	}
	
	const result = []
	
	await sortFavorite(favourite, result)
	
	userStore.addFavourites(result)
}

export const displayText = (title, main) => {
	switch (title) {
		case 'countries':
			return main[title][0].country
		case 'genres':
			return main[title].map((elem) => elem.genre).join(', ')
		case 'producer':
			return main[title].slice(0, 3).join(', ') + '...'
		case 'ratingAgeLimits':
			return main[title] !== null ? main[title].match(/\d+/gi)[0] + ' +' : '0+'
		case 'feesRu':
		case 'feesWorld':
			return main[title] === 'Нет данных' ||
			main[title] === 'Сейчас нет данных о сборах'
				? main[title]
				: main[title] + ' $'
		case 'filmLength':
			return main[title] !== null ? main[title] + ' мин' : 'Сериал'
		case 'slogan':
			return main[title] ? main[title] : 'Слогана нет'
		default:
			return main[title]
	}
}

export const filmsSlice = (films, grid) =>
	films.slice(grid.length ? grid.length * 20 : 0, (grid?.length + 1) * 20)

export const checkArrStorage = (item, cb, films) => {
	if (films?.length > 0) return true
	
	const arrFromStorage = JSON.parse(window.localStorage.getItem(item))
	if (arrFromStorage?.length > 0 && arrFromStorage[0] !== 'ПУСТО') {
		cb(arrFromStorage)
		return true
	}
	
	return false
}

export const quickSearchResult = async (word, cb) => {
	axios.get(path.searchByKeyword(word), headersConfig).then((res) => {
		const filmsToPush = res.data.films.filter((film) => film.type === 'FILM')
		cb(filmsToPush)
	})
}

export const checkLastSync = (lastSyncTime) => {
	if (lastSyncTime) {
		const now = window.Date.now()
		if (now - lastSyncTime > 259200000) {
			localStorage.clear()
			return window.localStorage.setItem(LAST_SYNC, JSON.stringify(now))
		}
	} else {
		window.localStorage.setItem(LAST_SYNC, JSON.stringify(Date.now()))
	}
}

export function validateData(email, pass) {
	const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
	
	if (emailReg.test(email) === false) return false
	if (pass.length < 6) return false
	
	return true
}

export async function changeFavoriteStore(filmId) {
	const arrOfFavsFilms = userStore.favourites.slice(0)
	await isInStorage(filmId, arrOfFavsFilms)
	userStore.addFavourites(arrOfFavsFilms)
}

export function removeFromStore(favNow, filmId) {
	const resultArr = favNow.filter(film => (film.filmId || film.kinopoiskId) !== filmId)
	userStore.addFavourites(resultArr)
}

export function modifiedByCond(active, convertFavsFilms, filmId) {
	return active === true
		? convertFavsFilms.filter(id => id !== filmId) || []
		: [...convertFavsFilms, filmId]
}

export function currentFavs() {
	let favNow = userStore.favourites[0] === 'ПУСТО' ? [] : userStore.favourites
	let convertFavsFilms = favNow.map(film => film.filmId || film.kinopoiskId)
	return [favNow, convertFavsFilms]
}

export function actionsToChangeFavs(user, changedFavouriteId, active, favNow, filmId, setActive) {
	changeFavourites(user.id, changedFavouriteId)
		.then(async (res) => {
			if (active === true) {
				removeFromStore(favNow, filmId)
			} else {
				await changeFavoriteStore(filmId)
			}
		})
		.catch(e => console.log(e))
		.finally(() => setActive((s) => !s))
}

/*	// Create a video element.
	let vid = document.createElement('video')

	// We don't want it to start playing yet.
	vid.autoplay = false
	vid.loop = false

	// No need for user to see the video itself.
	vid.style.display = 'none'

	// This will fire when there's some data loaded for the video, should be at least 1 frame here.
	vid.addEventListener(
		'loadeddata',
		function () {
			// Let's wait another 100ms just in case?
			setTimeout(function () {
				// Create a canvas element, this is what user sees.
				let canvas = document.createElement('canvas')

				// Set it to same dimensions as video.
				canvas.width = vid.videoWidth
				canvas.height = vid.videoHeight

				// Put it on page.
				document.getElementById('done').innerHTML = ''
				document.getElementById('done').appendChild(canvas)

				// Get the drawing context for canvas.
				let ctx = canvas.getContext('2d')

				// Draw the current frame of video onto canvas.
				ctx.drawImage(vid, 0, 0)

				// Done!
			})
		},
		false
	)

	// Have to include .ogv for firefox. I don't think this is working atm because my webserver isn't serving up
	// videos properly.
	let source = document.createElement('source')
	source.src = 'BigBuckBunny_640x360.mp4'
	source.type = 'video/mp4'
	vid.appendChild(source)

	// Add video to document to start loading process now.
	document.body.appendChild(vid)*/
