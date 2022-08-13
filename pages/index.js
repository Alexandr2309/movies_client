import React from 'react'
import Main from '../components/Main'
import Banner from '../components/Banner/Banner'
import styles from '../styles/Home.module.css'

export default function Home() {
	
	return (
		<>
			<div className={styles.main}>
				<Banner />
				<Main />
			</div>
		</>
	)
}
