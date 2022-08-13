import React, { useContext, useEffect } from 'react'
import seriesState from '../../store/series'
import { SERIES } from '../../utils/variables'
import { observer } from 'mobx-react-lite'
import { UserContext } from '../_app'

const GridMain = React.lazy(() => import('../../components/Grid/GridMain'))


const PageSeries = observer(() => {
	const series = seriesState.allSeries
	const { setLoading } = useContext(UserContext)
	useEffect(() => {
		setLoading(false)
	}, [])
	return (
		<main style={{ padding: 30, background: '#EDEFF0' }}>
			<h1>Мини-сериалы и сериалы</h1>
			<GridMain films={series} type={SERIES} />
		</main>
	)
})

export default PageSeries
