import React, { useContext } from 'react'
import Header from '../Head/Header'
import { UserContext } from '../../pages/_app'
import { PacmanLoader } from 'react-spinners'

const Layout = ({ children }) => {
	const { loading, setLoading } = useContext(UserContext)
	return (
		<>
			<Header />
			{children}
			<div className={loading ? 'global-backdrop active' : 'global-backdrop'}>
				<PacmanLoader className={loading ? 'loader-backdrop active' : 'loader-backdrop'} size={50} color='#ffffff' />
			</div>
		</>
	)
}

export default Layout
