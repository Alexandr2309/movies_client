import React, { Suspense, useContext, useEffect } from 'react'
import Panel from './Panel/Panel'
import filmsArr from '../store/allFilms'
import { observer } from 'mobx-react-lite'
import { FILMS } from '../utils/variables'
import { RingLoader } from 'react-spinners'
import { UserContext } from '../pages/_app'

const GridMain = React.lazy(() => import('./Grid/GridMain'))

const Main = observer(() => {
	const films = filmsArr.arrOfFilms
	const { loading, setLoading } = useContext(UserContext)
	useEffect(() => {
		setLoading(false)
	}, [])
	return (
		<main style={{ padding: '0px 30px', background: '#EDEFF0' }}>
			<Panel />
			<Suspense fallback={<RingLoader className='loader-grid' size={120} />}>
				<GridMain films={films} type={FILMS} />
			</Suspense>
		</main>
	)
})

export default Main
