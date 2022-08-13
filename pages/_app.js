import Layout from '../components/Layout/Layout'
import React, { createContext, useContext, useEffect, useState } from 'react'
import HeadTags from '../components/Head/HeadTags'
import UserStore from '../store/userStore'
import { observer } from 'mobx-react-lite'
import { check } from './api/http/userAPI'
import '../styles/globals.scss'
import '../components/Menu/Menu.css'

export const UserContext = createContext(null)

function MyApp({ Component, pageProps }) {
	const [loadingAny, setLoadingAny] = useState(false)
	
	useEffect(() => {
		check().then(data => {
			UserStore.setUser({ email: data.email, id: data.id })
			UserStore.setIsAuth(true)
		})
	}, [])
	
	return (
		<UserContext.Provider value={{
			user: UserStore,
			loading: loadingAny,
			setLoading: setLoadingAny
		}}>
			<Layout>
				<HeadTags />
				<Component {...pageProps} />
			</Layout>
		</UserContext.Provider>
	)
}

export default observer(MyApp)
