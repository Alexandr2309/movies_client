import { KPOISK_KEY, KPOISK_KEY2, YT_KEY } from './variables'

const objOfLinks = {
	topPopularFilms: `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=`,
	filmsPath: `https://kinopoiskapiunofficial.tech/api/v2.2/films/`,
	filmById: `https://kinopoiskapiunofficial.tech/api/v2.2/films/`,
	filmStaff: `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=`,
	filmFees: (id) =>
		`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`,
	filmSimilars: (id) =>
		`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`,
	tvSeries: `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES`,
	series: `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=MINI_SERIES`,
	searchByKeyword: (word) =>
		`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${word}`,
	YTSearchRu: (q) =>
		`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q} трейлер&key=${YT_KEY}`,
	YTSearchEn: (q) =>
		`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q} trailer&key=${YT_KEY}`
}
export const headersConfig = {
	headers: {
		'X-API-KEY': `${KPOISK_KEY}`
	}
}

export default objOfLinks
