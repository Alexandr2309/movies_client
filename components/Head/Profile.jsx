import React, { useContext } from 'react'
import styles from '../../styles/Header.module.scss'
import Image from 'next/image'
import { UserContext } from '../../pages/_app'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { FAVOURITES_ARR } from '../../utils/variables'

const Profile = ({ loader, width }) => {
	const { setLoading } = useContext(UserContext)
	const { user } = useContext(UserContext)
	if (user.isAuth === false) {
		return (
			<button className={styles.signIn} onClick={() => setLoading(true)}><Link href='/user/login'>Войти</Link></button>
		)
	}
	
	function logOut() {
		localStorage.removeItem('token')
		localStorage.removeItem(FAVOURITES_ARR)
		user.setUser({})
		user.setIsAuth(false)
	}
	
	return (
		<div className={styles.profile}>
			<div className={styles.burgerBtn}>
				<Image
					loader={loader}
					src='A.png'
					alt='avatar'
					width='1'
					height='1'
					layout='responsive'
				/>
			</div>
			<div className='' style={{ marginRight: '17px' }}>
				{user.user.email || ''}
			</div>
			<Image src='/../public/img/exit-icon.png' width='24' height='24' onClick={logOut} />
		</div>
	)
}

export default observer(Profile)
