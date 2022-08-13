import { $host, $authHost } from './index'
import jwt_decode from 'jwt-decode'

export const registration = async (email, password) => {
	const { data } = await $host.post(`api/user/registration`, { email, password })
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}
export const login = async (email, password) => {
	const { data } = await $host.post(`api/user/login`, { email, password })
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}
export const check = async () => {
	const { data } = await $authHost.get(`api/user/auth`)
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}

export const changeFavourites = async (userId, films) => {
	const { data } = await $authHost.post('api/user/favourites', { userId, films })
	return alert(data.message)
}
export const getFavourite = async (userId) => {
	const { data } = await $authHost.post('api/user/get_favourite', { userId })
	return data
}