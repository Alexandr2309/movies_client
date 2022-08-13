import React, { useContext, useState } from 'react'
import styles from '../../styles/Header.module.scss'
import { useWindowSize } from '../../hooks/useWindowSize'
import Menu from '../Menu/Menu'
import Profile from './Profile'
import Icons from './Icons'
import { authItems, commonItems } from '../../utils/variables'
import { CgMenuMotion } from 'react-icons/cg'
import { UserContext } from '../../pages/_app'
import { observer } from 'mobx-react-lite'

const Header = () => {
	const { user } = useContext(UserContext)
	const [menuActive, setMenuActive] = useState(false)
	const [width, height] = useWindowSize()
	
	
	function myLoader() {
		return `https://i.ibb.co/gvFCDVg/1-zta1-8-Cv5tjsfx7pzp-Wl4-A.png`
	}
	
	return (
		<header>
			<nav className={styles.burger}>
				{width > 769 ? (
					<Icons items={user.isAuth ? authItems : commonItems} />
				) : (
					<CgMenuMotion
						size={28}
						onClick={(e) => setMenuActive(true)}
						style={{ marginRight: 'auto', cursor: 'pointer' }}
					/>
				)}
				<Profile loader={myLoader} width={width} />
			</nav>
			{width < 769 && (
				<Menu
					active={menuActive}
					setActive={setMenuActive}
					header='Имя'
					items={user.isAuth ? authItems : commonItems}
				/>
			)}
		</header>
	)
}

export default observer(Header)
