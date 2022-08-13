import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { TV } from '../../utils/variables'
import tv from '../../store/tv'
import { UserContext } from '../_app'

const GridMain = React.lazy(() => import('../../components/Grid/GridMain'))

const PageTV = observer(() => {
	const tvSeries = tv.allTv
	const { setLoading } = useContext(UserContext)
	useEffect(() => {
		setLoading(false)
	}, [])
	return (
		<main style={{ padding: '30px', background: '#EDEFF0' }}>
			<h1>ТВ Сериалы</h1>
			<GridMain films={tvSeries} type={TV} />
		</main>
	)
})

export default PageTV
